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
  if(action.actions[0].name == 'ans5'){
    if(action.actions[0].value == 'd'){
      callback(null, {
        text: "Correct! okay, ur done lol",
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
                "value": '69lol',
                "short": true
              }
            ],
            "Course": "Econ101",
            "image_url": "https://media.istockphoto.com/vectors/trophy-cup-icon-vector-id648236294?k=6&m=648236294&s=612x612&w=0&h=4arVglXOijS0SJQrXEkxZToxwWe1wpvzqzaik3jjTcE=",
          }]
        })
      }
    else{
      callback(null, {
        text: "Try again, Question 5:",
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
  };
}
//attempt at a single callback with logic
/*
  if(action.actions[0].name == 'ans5'){
    if(action.actions[0].value == 'd'){
      callback(null, {
        text: "okay, ur done lol",
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
            "image_url": "https://www.google.ca/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjJs9H7--7eAhXJ5IMKHdA5CZoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.istockphoto.com%2Fsg%2Fillustrations%2Ftrophy&psig=AOvVaw3_Da6wlnyoulq_4niV8TpL&ust=1543215521559965",
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
        text: "Try again, Question 1:",
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
            "Course": "Econ101",
            "image_url": "https://github.com/MorganYeung/Studybot/blob/master/q4.png?raw=true",
            callback_id: 'ans4',
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
  };
  };
  if(action.actions[0].name == 'ans4'){
    if(action.actions[0].value == 'b'){
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
            callback_id: 'ans4',
            "actions": [
                          {
                              "name": "5",
                              "text": "a",
                              "type": "button",
                              "value": "a"
                          },
                          {
                              "name": "5",
                              "text": "b",
                              "type": "button",
                              "value": "b"
                          },
                          {
                              "name": "5",
                              "text": "c",
                              "type": "button",
                              "value": "c"
                          },
                          {
                              "name": "5",
                              "text": "d",
                              "type": "button",
                              "value": "d"
                          },
                          {
                              "name": "5",
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
    }
  };
  if(action.actions[0].name == 'ans4'){
    if(action.actions[0].value == 'b'){
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
            callback_id: 'ans4',
            "actions": [
                          {
                              "name": "5",
                              "text": "a",
                              "type": "button",
                              "value": "a"
                          },
                          {
                              "name": "5",
                              "text": "b",
                              "type": "button",
                              "value": "b"
                          },
                          {
                              "name": "5",
                              "text": "c",
                              "type": "button",
                              "value": "c"
                          },
                          {
                              "name": "5",
                              "text": "d",
                              "type": "button",
                              "value": "d"
                          },
                          {
                              "name": "5",
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
  if(action.actions[0].name == 'ans4'){
    if(action.actions[0].value == 'b'){
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
            callback_id: 'ans4',
            "actions": [
                          {
                              "name": "5",
                              "text": "a",
                              "type": "button",
                              "value": "a"
                          },
                          {
                              "name": "5",
                              "text": "b",
                              "type": "button",
                              "value": "b"
                          },
                          {
                              "name": "5",
                              "text": "c",
                              "type": "button",
                              "value": "c"
                          },
                          {
                              "name": "5",
                              "text": "d",
                              "type": "button",
                              "value": "d"
                          },
                          {
                              "name": "5",
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

if(action.actions[0].name == 'ans4'){
  if(action.actions[0].value == 'b'){
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
          callback_id: 'ans4',
          "actions": [
                        {
                            "name": "5",
                            "text": "a",
                            "type": "button",
                            "value": "a"
                        },
                        {
                            "name": "5",
                            "text": "b",
                            "type": "button",
                            "value": "b"
                        },
                        {
                            "name": "5",
                            "text": "c",
                            "type": "button",
                            "value": "c"
                        },
                        {
                            "name": "5",
                            "text": "d",
                            "type": "button",
                            "value": "d"
                        },
                        {
                            "name": "5",
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
*/
