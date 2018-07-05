# try-connect

try-connect tests connection strings.

## Installation

```shell
$ npm install try-connect
```

## Quick start

First you need to integrate try-connect into your application.

```javascript
const tryConnect = require('try-connect');
```

Then you can use the `tryConnect` function to test a connection string by providing the url to test:

```javascript
await tryConnect('pg://user:secret@localhost:5432/database');
```

*Please note that currently the protocols `pg`, `mongodb`, and `amqp` are supported.*

### Using the CLI

Additionally, you may want to use the connection test as a CLI. Therefore, provide the url to test using the environment variable `URL`, and run the following command:

```shell
URL=pg://... npx try-connect
```

## Running the build

To build this module use [roboter](https://www.npmjs.com/package/roboter).

```shell
$ npx roboter
```

## License

The MIT License (MIT)
Copyright (c) 2018 the native web.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
