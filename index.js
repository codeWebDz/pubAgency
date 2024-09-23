const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 535,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "mnamane61@gmail.com",
    pass: "fjfb kknq jyju iirb",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"from meriem hihiii👻"', // sender address
    to: "mnamane61@gmail.com , aminebaich116@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "test test", // plain text body
    html: "<b>Bonjour </b>", // html body
    attachments: [
      {   // utf-8 string as an attachment
          filename: 'toAmineBaich.txt',
         content:"************** ya 9iiiiiiiw 👻 ***************"

      }, 
      {   // utf-8 string as an attachment
        filename: 'Invoice 2022.pdf',
        path:"C:/Users/ACER/Downloads/Invoice 2022.pdf"

    }, 
  {
    path:'C:/Users/ACER/Desktop/ecom2.JPG'
  },

]
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
