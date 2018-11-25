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
if(text == ''){
  text='1'};
if(text == "1"){
  callback(null, {
    text: "okay, Question 1:",
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
            "value": 1,
            "short": true
          }
        ],
        "Course": "Money101",
        "image_url": "https://github.com/MorganYeung/Studybot/blob/master/q1.png?raw=true",
        callback_id: 'ans1',
        "actions": [
                      {
                          "name": "ans1",
                          "text": "a",
                          "type": "button",
                          "value": "a"
                      },
                      {
                          "name": "ans1",
                          "text": "b",
                          "type": "button",
                          "value": "b"
                      },
                      {
                          "name": "ans1",
                          "text": "c",
                          "type": "button",
                          "value": "c"
                      },
                      {
                          "name": "ans1",
                          "text": "d",
                          "type": "button",
                          "value": "d"
                      },
                      {
                          "name": "ans1",
                          "text": "e",
                          "type": "button",
                          "value": "e"
                      }
                  ]
            }]
  });
}

else if(text == '2'){
  callback(null, {
    text: "okay, Question 2:",
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
            "value": 2,
            "short": true
          }
        ],
        "Course": "Econ101",
        "image_url": "https://github.com/MorganYeung/Studybot/blob/master/q2.png?raw=true",
        callback_id: 'ans2',
        "actions": [
                      {
                          "name": "ans2",
                          "text": "a",
                          "type": "button",
                          "value": "a"
                      },
                      {
                          "name": "ans2",
                          "text": "b",
                          "type": "button",
                          "value": "b"
                      },
                      {
                          "name": "ans2",
                          "text": "c",
                          "type": "button",
                          "value": "c"
                      },
                      {
                          "name": "ans2",
                          "text": "d",
                          "type": "button",
                          "value": "d"
                      },
                      {
                          "name": "ans2",
                          "text": "e",
                          "type": "button",
                          "value": "e"
                      }
                  ]
            }]
  });
  }
  else if(text == '3'){
    callback(null, {
      text: "okay, Question 3:",
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
              "value": 3,
              "short": true
            }
          ],
          "Course": "Econ101",
          "image_url": "https://github.com/MorganYeung/Studybot/blob/master/q3.png?raw=true",
          callback_id: 'ans3',
          "actions": [
                        {
                            "name": "ans3",
                            "text": "a",
                            "type": "button",
                            "value": "a"
                        },
                        {
                            "name": "ans3",
                            "text": "b",
                            "type": "button",
                            "value": "b"
                        },
                        {
                            "name": "ans3",
                            "text": "c",
                            "type": "button",
                            "value": "c"
                        },
                        {
                            "name": "ans3",
                            "text": "d",
                            "type": "button",
                            "value": "d"
                        },
                        {
                            "name": "ans3",
                            "text": "e",
                            "type": "button",
                            "value": "e"
                        }
                    ]
              }]
    });
    }

    else if(text == '4'){
      callback(null, {
        text: "okay, Question 4:",
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
                              "name": "4",
                              "text": "b",
                              "type": "button",
                              "value": "b"
                          },
                          {
                              "name": "4",
                              "text": "c",
                              "type": "button",
                              "value": "c"
                          },
                          {
                              "name": "4",
                              "text": "d",
                              "type": "button",
                              "value": "d"
                          },
                          {
                              "name": "4",
                              "text": "e",
                              "type": "button",
                              "value": "e"
                          }
                      ]
                }]
      });
      }
      else if(text == '5'){
        callback(null, {
          text: "okay, Question 5:",
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
        };
}
