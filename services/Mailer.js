const keys = require('../config/keys');
const mailgun = require('mailgun-js')({ apiKey: keys.mailGunKey, domain: keys.mailGunDom });

class Mailer {
  constructor({ subject, recipients }, content) {
    this.data = {
      from: 'Ian <sheshanhebron539@gmail.com>',
      to: recipients.map(obj => obj.email),
      subject: subject,
      text: 'Testing some Mailgun awesomeness!',
      html: content,
    };
  }

  async send() {
    try {
      const response = await mailgun.messages().send(this.data);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = Mailer;
