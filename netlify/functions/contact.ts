import { Handler, HandlerEvent } from "@netlify/functions";

const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;

const handler: Handler = async function (event: HandlerEvent) {
    // get data from body
    const { fname, lname, email, message } = JSON.parse(event.body);

    // set API key
    client.setApiKey(SENDGRID_API_KEY);

    // setup data for email
    // NOTE: THIS ISN"T SECURE. SANITIZE THE INPUTS
    const data = {
        to: "test@example.com",
        from: "test@example.com",
        subject: `New message from ${fname} ${lname} (${email})`,
        html: `<p>${message}</p>`,
    };

    try {
        await sgMail.send(data);
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                msg: "Message sent successfully",
            }),
        };
    } catch (err) {
        return {
            statusCode: err.code,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ msg: err.message }),
        };
    }
    // for now just reply success
};

export { handler };