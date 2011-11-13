var http = require('http'),
    couchBack = {

        // Defaults for couch connection
        'couch': {
            'host': '127.0.0.1',
            'port': '80',
            'username': '',
            'password': '',
            'established': false
        },

        'init': (function () {
            'use strict';

            var args = {},
                req;

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

                req = http.request({
                        host: couchBack.couch.host,
                        port: couchBack.couch.port,
                        path: '/',
                        method: 'GET'
                    }, function (res) {
                        console.log(res.statusCode);
                        if (res.statusCode === 200) {
                            couchBack.couch.established = true;
                        } else {
                            couchBack.couch.established = false;
                        }
                        
                        //console.log(couchBack.couch);
                    });
                
                req.on('error', function(e) {
                    console.log('Problem with request:', e.message);
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