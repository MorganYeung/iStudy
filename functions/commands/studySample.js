const lib = require('lib')({token: process.env.STDLIB_TOKEN});
/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  callback(null, {
    text: "okay, Question :",
    attachments: [
      {
        "title": "Question:",
        "fields": [
          {
            "title": "Exam",
            "value": "2018",
            "short": true
          },
          {
            "title": "Question",
            "value": "3",
            "short": true
                }
            ],
            "Course": "Econ101",
            "image_url": "https://image.slidesharecdn.com/econ1hardmcqs-130418032706-phpapp02/95/econ-1-hard-mcqs-6-638.jpg?cb=1366255747"
      },
      {
      "text": "Answer",
            "fallback": "You are unable to choose a ANswer",
            "callback_id": "ans",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "answer",
                    "text": "a",
                    "type": "button",
                    "value": "a"
                },
                {
                    "name": "answer",
                    "text": "b",
                    "type": "button",
                    "value": "b"
                },
                {
                    "name": "answer",
                    "text": "c",
                    //"style": "danger",
                    "type": "button",
                    "value": "c"
                },
                {
                    "name": "answer",
                    "text": "d",
                    //"style": "danger",
                    "type": "button",
                    "value": "d"
                }
            ]
        }
    ]
      // You can customize your messages with attachments.
      // See https://api.slack.com/docs/message-attachments for more info.

  });
};
