'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const { google } = require('googleapis');
let privateKey = require('../../../config/googleServiceAccount.json')
const _=require('lodash')

module.exports = {
    create: async ctx => {
        let body = ctx.request.body
        let { storeInfo, extraInfo } = body
        try {
            console.log(extraInfo)
            let obj = {
                name: storeInfo.name,
                email: storeInfo.email,
                country: storeInfo.country,
                product: storeInfo.product,
                phone_no: storeInfo.phone_no,
                book_at: storeInfo.book_at
            }

            let data = await strapi.services.bookings.create(obj)

            ctx.send({
                type: true,
                data
            })

        }
        catch (e) {
            ctx.send({
                type: false,
                message:e.message
            })
        }
    },

    sendOTP: async ctx => {
        let body = ctx.request.body
        try {
            if (!body.phone_no) throw new Error("plese provide mobile number")

            let verification = await new Promise((rs, rj) => {
                client.verify.services(process.env.TWILIO_SERVICE)
                    .verifications
                    .create({ to: body.phone_no, channel: 'sms' })
                    .then(verification => {
                        return rs(verification)
                    }).catch(e => {
                        return rj(e)
                    });
            })

            return ctx.send({
                type: true,
                message: verification ? 'otp send successfully' : null
            })
        }
        catch (e) {
            console.log(e)
            ctx.send({
                type: false,
                message: e.message
            });
        }
    },
    verifyOTP: async ctx => {
        let body = ctx.request.body
        try {
            if (!body.phone_no || !body.code) throw new Error("invalid request")
            let status = await new Promise((rs, rj) => {
                client.verify.services(process.env.TWILIO_SERVICE)
                    .verificationChecks
                    .create({ to: body.phone_no, code: body.code })
                    .then(verification_check => {
                        return rs(verification_check.status)
                    }).catch(e => {
                        return rj(e)
                    })

            })

            if (!status) throw new Error("invalid otp code")

            return ctx.send({
                type: true,
                message: status
            })
        }
        catch (e) {
            console.log(e)
            ctx.send({
                type: false,
                message: e.message
            });
        }
    },
    addGoogleCalenderDetails: async ctx => {
        try {

            // configure a JWT auth client
            let jwtClient = new google.auth.JWT(
                privateKey.client_email,
                null,
                privateKey.private_key,
                ["https://www.googleapis.com/auth/calendar"]);

            const calendar = google.calendar({ version: "v3", auth: jwtClient });

            calendar.events.insert({
                auth: jwtClient,
                calendarId: 'primary',
                resource: {
                    "end": {
                        "dateTime": "2021-08-10T11:00:00-05:30"
                    },
                    "start": {
                        "dateTime": "2021-08-10T10:00:00-05:30"
                    },
                    "attendees": [
                        {
                            "email": "dainik.arthania1@gmail.com"
                        }
                    ],
                    "conferenceData": {
                        "createRequest": {
                            "conferenceSolutionKey": {
                                "type": "hangoutsMeet"
                            },
                            "requestId": "sigtuple123"
                        }
                    },
                    "summary": "Booking for Sigtuple Product"
                }
            }, function (err, response) {
                if (err) {
                    console.log('The API returned an error: ' + err);
                    return;
                }
                else {
                    console.log(response)
                }

            });



            // const url = `https://dns.googleapis.com/dns/v1/projects/${privateKey.project_id}`;
            // const res = await jwtClient.request({url});
            // console.log(res.data);


            // //authenticate request
            // jwtClient.authorize(function (err, tokens) {
            //     if (err) {
            //         console.log(err);
            //         return;
            //     } else {
            //         console.log("Successfully connected!");
            //     }
            // });

            // let calendar = google.calendar('v3');

            // calendar.events.insert({
            //     auth: jwtClient,
            //     calendarId: 'qo57hcao8i575jor7cb1pd6u98@group.calendar.google.com',
            //     resource:  {
            //         "end": {
            //           "dateTime": "2021-08-10T11:00:00-05:30"
            //         },
            //         "start": {
            //           "dateTime": "2021-08-10T10:00:00-05:30"
            //         },
            //         "attendees": [
            //           {
            //             "email": "dainik.arthania1@gmail.com"
            //           }
            //         ],
            //         "conferenceData": {
            //           "createRequest": {
            //             "conferenceSolutionKey": {
            //               "type": "hangoutsMeet"
            //             },
            //             "requestId": "sigtuple123"
            //           }
            //         },
            //           "summary": "Booking for Sigtuple Product"
            //       }
            //  }, function (err, response) {
            //     if (err) {
            //         console.log('The API returned an error: ' + err);
            //         return;
            //     }
            //     else{
            //         console.log(response)
            //     }

            //  });

            // const auth = new google.auth.GoogleAuth({
            //     keyFile: '../../../config/googleServiceAccount.json',
            //     scopes: ['https://www.googleapis.com/auth/calendar',
            //             'https://www.googleapis.com/auth/calendar.events'],
            //   });
            //   console.log(auth)
            //   let data=goole.calender({
            //       auth
            //   })
            ctx.send({ data })
        }
        catch (e) {
            ctx.send(e)
        }
    },
    getBookingSlots : async ctx => {
        let body = ctx.request.body
        try {
            if(!body.book_at) return ctx.send({type:false,data:[]})
            console.log(body.book_at)
            let data = await strapi.services.bookings.find({book_at_gte:`${body.book_at}T00:00:00.000Z`,book_at_lte:`${body.book_at}T23:59:00.000Z`})
            let slots=_.map(data,'book_at')
            ctx.send({
                type:true,
                data:slots
            })
        }
        catch (e) {
            ctx.send({
                type:false,
                data:[]
            })
        }
    }

};
