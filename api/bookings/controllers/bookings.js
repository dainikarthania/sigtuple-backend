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
const _ = require('lodash');
const moment = require('moment');

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

            let book_time=moment(data.book_at).format("YYYY-MM-DD HH:mm:ss A")
            let objDeatils=Object.assign({},storeInfo,extraInfo,{book_time},{timeZone:extraInfo.timeZoneDetails.label},{comments:extraInfo.message.message})
            
            console.log("objDeatils",objDeatils)
            let emailTemplate = {
                subject: 'Sigtuple Bookings',
                text: `Welcome on Sigtuple.`,
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                <style>
                table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
                }

                th{
                border: 1px solid #dddddd;
                text-align: center;
                }

                td {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
                }

                tr:nth-child(even) {
                background-color: #dddddd;
                }
                </style>
                </head>
                <body>

                <h2>SigTuple</h2>

                <table>
                <tr>
                    <th colspan=2>Booking Details</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td><%= data.name %></td>
                </tr>
                <tr>
                    <td>Date & Time</td>
                    <td><%= data.book_time %></td>
                </tr>
                <tr>
                <td>Email</td>
                <td><%= data.email %></td>
                </tr>
                <tr>
                <td>Phone No</td>
                <td><%= data.phone_no %></td>
                </tr>
                <tr>
                <td>TimeZone</td>
                <td><%= data.timeZone %></td>
                </tr>
                <tr>
                <td>Comments</td>
                <td><%= data.comments %></td>
                </tr>
                </table>

                </body>
                </html>`
            };

            await strapi.plugins.email.services.email.sendTemplatedEmail(
                {
                    to: 'demo@sigtuple.com'
                },
                emailTemplate,
                {
                    data: objDeatils
                }
            );


            emailTemplate = {
                subject: 'Sigtuple Bookings',
                text: `Welcome on Sigtuple.`,
                html: `
                <!DOCTYPE html>
                <html>
                <head>
                <style>
                body {
                    padding: 0;
                    background-color: #f7f7f7;
                    text-align: center;
                  }
                  
                  .email-table {
                    width: 100%;
                    background-color: #fff;
                    margin: 40px auto;
                    text-align: left;
                    font-family: 'Montserrat', 'Helvetica Neue';
                  }
                  
                  .header-row {
                    background-color: #171717;
                  }
                  
                  .body-row {
                    background-color: #eeeeee;
                  }
                  
                  h1 {
                    font-size: 30px;
                    font-weight: 100;
                    color: #ffffff;
                    margin-left: 30px;
                  }
                  
                  p {
                    font-size: 15px;
                    margin-left: 30px;
                  }                  
                </style>
                </head>
                <body> 
                <table class="email-table">
                <tbody>
                   <tr class="header-row">
                    <td>
                      <h1>Sigtuple</h1>
                    </td>
                  </tr>
                  <tr class="body-row">
                    <td>
                      <p>
                        You have successfully booked for Sigtuple! 
                        at <b>${book_time}</b>
                      </p>
                      <p>
                        If you'd like to see more 
                        details then, 
                        just visit 
                        <a href="http://13.59.179.118:3000/">Sigtuple</a>     
                      </p>
                </tbody>
              </table>
              </body>
                </html>`
            };

            await strapi.plugins.email.services.email.sendTemplatedEmail(
                {
                  to: objDeatils.email
                },
                emailTemplate,
                {
                    data: objDeatils
                }
            );

        }
        catch (e) {
            console.log("eee",e)
            ctx.send({
                type: false,
                message: e.message
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
    getBookingSlots: async ctx => {
        let body = ctx.request.body
        try {
            if (!body.book_at) return ctx.send({ type: false, data: [] })
            console.log(body.book_at)
            let data = await strapi.services.bookings.find({ book_at_gte: `${body.book_at}T00:00:00.000Z`, book_at_lte: `${body.book_at}T23:59:00.000Z` })
            let slots = _.map(data, 'book_at')
            ctx.send({
                type: true,
                data: slots
            })
        }
        catch (e) {
            ctx.send({
                type: false,
                data: []
            })
        }
    }

};
