const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* example.js
*
*   Basic example action handler. Called in response to an input from an
*     interactive message action with name set to "example".
*   All Actions in response to interactive messages use this template, simply
*     create additional files with different names to add actions.
*
*   See https://api.slack.com/docs/message-buttons for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {object} action The full Slack action object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, action = {}, botToken = null, callback) => {
  if(action.actions[0].name == 'ans4'){
    if(action.actions[0].value == 'b'){
      callback(null, {
        text: "Correct! Okay, Question 5:",
        attachments: [
          {
            "fields": [
              {
                "title": "Exam",
                "value": "2018",
                "short": true
              },
              {
                "title": "Question",
                "value": 5,
                "short": true
              }
            ],
            "Course": "Econ101",
            "image_url": "https://github.com/MorganYeung/Studybot/blob/master/q5.png?raw=true",
            callback_id: 'ans5',
            "actions": [
                          {
                              "name": "ans5",
                              "text": "a",
                              "type": "button",
                              "value": "a"
                          },
                          {
                              "name": "ans5",
                              "text": "b",
                              "type": "button",
                              "value": "b"
                          },
                          {
                              "name": "ans5",
                              "text": "c",
                              "type": "button",
                              "value": "c"
                          },
                          {
                              "name": "ans5",
                              "text": "d",
                              "type": "button",
                              "value": "d"
                          },
                          {
                              "name": "ans5",
                              "text": "e",
                              "type": "button",
                              "value": "e"
                          }
                      ]
                }]
      });
    }
    else{
      callback(null, {
        text: "Try again, Question 4:",
        attachments: [
          {
            "fields": [
              {
                "title": "Exam",
                "value": "2018",
                "short": true
              },
              {
                "title": "Question",
                "value": 4,
                "short": true
              }
            ],
            "Course": "Econ101",
            "image_url": "https://github.com/MorganYeung/Studybot/blob/master/q4.png?raw=true",
            callback_id: 'ans4',
            "actions": [
                          {
                              "name": "ans4",
                              "text": "a",
                              "type": "button",
                              "value": "a"
                          },
                          {
                              "name": "ans4",
                              "text": "b",
                              "type": "button",
                              "value": "b"
                          },
                          {
                              "name": "ans4",
                              "text": "c",
                              "type": "button",
                              "value": "c"
                          },
                          {
                              "name": "ans4",
                              "text": "d",
                              "type": "button",
                              "value": "d"
                          },
                          {
                              "name": "ans4",
                              "text": "e",
                              "type": "button",
                              "value": "e"
                          }
                      ]
                }]
      });
  };
  };
}
