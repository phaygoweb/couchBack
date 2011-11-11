var http = require('http'),
    couchBack = {

        // Defaults for couch connection
        'couch': {
            'host': 'localhost',
            'port': '5984',
            'username': '',
            'password': ''
        },

        'connect': (function () {
            'use strict';

            var args = {};

            return function () {
                // Set local variable to function arguments
                args = arguments;

                // Arguments passed
                if (args[0] !== undefined) {
                    // Host
                    couchBack.couch.host =
                        (args[0].host === undefined)
                        ? couchBack.couch.host
                        : args[0].host;

                    // Port
                    couchBack.couch.port =
                        (args[0].port === undefined)
                        ? couchBack.couch.port
                        : args[0].port;

                    // Username
                    couchBack.couch.username =
                        (args[0].username === undefined)
                        ? couchBack.couch.username
                        : args[0].username;

                    // Password
                    couchBack.couch.password =
                        (args[0].password === undefined)
                        ? couchBack.couch.password
                        : args[0].password;
                }

                console.log(couchBack.couch);

                var req = http.request({
                        host: couchBack.couch.host,
                        port: couchBack.couch.port,
                        path: '/_session',
                        method: 'GET'
                    }, function (res) {
                        console.log('Status:', res.statusCode);
                    });

                req.end();

            };

        }()),

        'createDoc': (function () {
            'use strict';
            
            return function () {
            
            };
        }())

    };

module.exports = couchBack;