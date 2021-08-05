'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    create : async ctx =>{
        let body=ctx.request.body
        try{
            // if(body.email){
            //     let findEmail=await strapi.services.contactus.findOne({email:body.email})
            //     if(findEmail) throw new Error("Email Already exists")
            // }
          
            let data=await strapi.services.contactus.create(body)
            
            ctx.send({
                type:true,
                message:"Your Feedback Added Successfully",
                data
            });
            console.log(data)


            const emailTemplate = {
                subject: 'FeedBack',
                text: `Welcome on Sigtuple.`,            
                html: `<table>
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
                `
              };
              
              await strapi.plugins.email.services.email.sendTemplatedEmail(
                {
                  to: 'dainik.arthania@gmail.com'
                },
                emailTemplate,
                {
                  data: data
                }
              );
              

         }
        catch(e){
            // if(e.message==='Email Already exists'){
            //     return ctx.send({
            //         type:false,
            //         message:e.message
            //    });
            // }
            ctx.send({
                 type:false,
                 message:e
            });
        }
    }

};
