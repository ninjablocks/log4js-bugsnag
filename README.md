# log4js-bugsnag

This is a log4js appender which uploads to [bugsnag](http://bugsnag.com).

# usage

Install the module.

```
npm install log4js-bugsnag --save
```

Configure a logger with the `log4js-bugsnag` appender added.

```
var bugsnagAppender = require('log4js-bugsnag');

log4js.addAppender(bugsnagAppender.configure({key: 'testkey', autoNotifyUncaught: false}), 'test');

var logger = log4js.getLogger('test');

logger.error(new Error('some error'));
```

One thing to note, at the moment this only extracts objects of type `Error` and sends to the to bugsnag.

# links

* [bugsnag](http://bugsnag.com)
* [log4js](https://github.com/nomiddlename/log4js-node)

## License
Copyright (c) 2013 Ninja Blocks Inc
Licensed under the MIT license.
