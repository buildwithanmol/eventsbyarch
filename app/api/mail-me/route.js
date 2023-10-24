import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import cors from 'cors'

const corsOptions = {
  origin: 'https://eventsbyarch.ae/',
  methods:"POST",
  "optionsSuccessStatus": 200
}

function sendMail(fname, lname, email, phone, description) {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "imailaryan01@gmail.com",
      pass: "uqxxjqxllmcysrkg",
    },
  });

  const mailOptions = {
    from: "imailaryan01@gmail.com",
    to: "archeventsdubai@gmail.com",
    subject: "Arch Events | A Note by Client",
    html : `
    <!DOCTYPE html>
<html>
<head>
    <style>
        /* Custom Styles */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        table {
            width: 100%;
        }
        table, th, td {
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
        }
        th {
            text-align: left;
        }
        /* Header Styles */
        .header {
            background-color: #1CB07A;
            color: #fff;
            text-align: center;
            padding: 20px 0;
            border-radius: 5px
        }
        /* Content Styles */
        .content {
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Events By Arch</h1>
        </div>
        <div class="content">
            <h2>Hello, New Client Request!</h2>
            <p>Here are the details provided:</p>
            <table>
                <tr>
                    <th>Full Name:</th>
                    <td>${fname} ${lname}</td>
                </tr>
                <tr>
                    <th>Email:</th>
                    <td>${email}</td>
                </tr>
                <tr>
                    <th>Phone:</th>
                    <td>${phone}</td>
                </tr>
                <tr>
                    <th>Query:</th>
                    <td>${description}</td>
                </tr>
            </table>
        </div>
    </div>
</body>
</html>
`
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("An error Occured", error);
    }
    console.log("Mail sent successfully :", info);
  });
}

export async function POST(request) {
  cors(corsOptions)
  const { fname, email, phone, description } = await request.json();

  try {
    sendMail(fname, email, phone, description);
    return NextResponse.json({
      success: true,
      message: "mail sent successfully!",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "mail sent unsuccessfully! error : ",
      error,
    });
  }
}
