# react-number-format
[React](http://facebook.github.io/react/) component to handle formatting and transitioning of numbers. Exports a commonjs module that can be used with [webpack](http://webpack.github.io/). Source is in ES6 and is compiled down to ES5 using [Babel](https://babeljs.io/).

## Usage

### ES6/JSX (Recommended)
The component is written using ES6/JSX therefore Babel is recommended to use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).
```js
import React from 'react';
import NumberFormat from 'react-number-format';

export default class BasicExample extends React.Component
  constructor() {
    this.state = {
      value: 1
    }
  }

  handleStateChange() {
    this.setState({
      value: 10000
    });
  }

  render() {
    return <NumberFormat value={this.state.value} />;
  }
}
```

## Examples and Development
More examples can be found in the `examples/` folder. A development server can be run with:

```shell
$ npm install
$ npm start
```

This will live reload any changes you make and serve them at http://localhost:8080.

## Tests
```shell
$ npm install
$ npm test
```

## License
The MIT License (MIT)

Copyright (c) 2015 Isaac Suttell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
