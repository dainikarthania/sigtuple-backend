'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    create: async ctx => {
        let body = ctx.request.body
        try {
            // if(body.email){
            //     let findEmail=await strapi.services.contactus.findOne({email:body.email})
            //     if(findEmail) throw new Error("Email Already exists")
            // }

            let data = await strapi.services.contactus.create(body)

            ctx.send({
                type: true,
                message: "Your Feedback Added Successfully",
                data
            });
            console.log(data)


            const emailTemplate = {
                subject: 'FeedBack',
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
                    <th colspan=2>Contact Details</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td><%= data.name %></td>
                </tr>
                <tr>
                    <td>Company Name</td>
                    <td><%= data.company_name %></td>
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
                <td>Message</td>
                <td><%= data.message %></td>
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
                    data: data
                }
            );


        }
        catch (e) {
            // if(e.message==='Email Already exists'){
            //     return ctx.send({
            //         type:false,
            //         message:e.message
            //    });
            // }
            ctx.send({
                type: false,
                message: e
            });
        }
    }

};
