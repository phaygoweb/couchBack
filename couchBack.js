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
                argKeys,
                argLen,
                req,
                temp;

            return function () {
                // Set local variable to function arguments
                args = arguments;

                // Arguments passed
                if (args[0] !== undefined) {
                    argKeys = Object.keys(args[0]);
                    argLen = argKeys.length;

                    while (argLen--) {
                        // Temporary key storage
                        temp = argKeys[argLen];

                        couchBack.couch[temp] =
                            (args[0][temp] === undefined)
                            ? couchBack.couch[temp]
                            : args[0][temp];
                    }

                    console.log(couchBack.couch);
                }
            };

        }()),

        'request': (function () {
            'use strict';

            return function () {

            };
        }()),

        'createDoc': (function () {
            'use strict';

            return function () {
                console.log(couchBack.couch.established);
                if (!couchBack.couch.established) {
                    return false;
                }

                console.log('createDoc');
            };
        }())

    };

module.exports = couchBack;