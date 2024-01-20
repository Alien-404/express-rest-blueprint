// modules
require('dotenv').config();
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const fs = require('fs').promises;

// env
const { SENDER_MAIL, APP_PASSWORD } = process.env;

// logic
module.exports = {
    sendMail: async (to, subject, html) => {
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: SENDER_MAIL,
                pass: APP_PASSWORD
            }
        });

        transport.sendMail({ to, subject, html });
    },

    // get template mail
    getHtml: async (fileName, data) => {
        try {
            const path = `${__dirname}/../../views/template/${fileName}`;
            const template = await fs.readFile(path, 'utf-8');
            return ejs.render(template, data);
        } catch (err) {
            throw err;
        }
    }
}