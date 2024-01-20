const mailerLib = require("../utils/lib/mailer.lib");

(async () => {
    // get current time
    const currentTime = new Date();
    const formattedTime = currentTime.toISOString();

    // send mail
    const register = await mailerLib.getHtml('test.ejs', { sentTime: formattedTime });
    mailerLib.sendMail('to-email@gmail.com', 'Test Mailer', register);
})();