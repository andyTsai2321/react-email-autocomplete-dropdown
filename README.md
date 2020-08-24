# react-email-autocomplete-dropdown

![image](https://raw.githubusercontent.com/andyTsai2321/react-email-autocomplete-dropdown/master/images/demo_img.png)

## Demo
https://codesandbox.io/s/angry-elbakyan-s3xt7?file=/src/App.js

## Installation
```bash
npm install react-email-autocomplete-dropdown
```

### Usage
```javascript
import React, { Component } from 'react';
import Email from 'react-email-autocomplete-dropdown';
import 'react-email-autocomplete-dropdown/lib/main.min.css';

### Usage
class App extends Component {
  render() {
    return (
      <div>
        <Email />
      </div>
    )
  }
}

export default App;
```

### Custom domains, value
```javascript
const domains = [
  "test.com",
  "hello.com"
];
class App extends Component {
  render() {
    return (
      <div>
        <Email domains={domains} value='test' />
      </div>
    )
  }
}


export default App;
```

# License

This software is released under the [**`MIT License`**](https://msudgh.mit-license.org/).
