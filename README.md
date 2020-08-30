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
import React, { Component } from "react";
import Email from "react-email-autocomplete-dropdown";
import "react-email-autocomplete-dropdown/lib/main.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Email />
      </div>
    );
  }
}

export default App;
```

### Custom domains

```javascript
const domains = ["test.com", "hello.com"];
class App extends Component {
  render() {
    return (
      <div>
        <Email domains={domains} />
      </div>
    );
  }
}

export default App;
```

### Events

```
handleOnChange=(e)=>{
    console.log(e.target.value)
}

dropdownClick=(value)=>{
    console.log(value)
}

......

<Email
  onChange={this.handleOnChange}
  dropdownOnClick={this.dropdownClick}
/>
```

### Options

| Name        | Type    | Description             | Example                   |
| ----------- | ------- | ----------------------- | ------------------------- |
| value       | string  | input state value       | 'hello world'             |
| placeholder | string  | custom placeholder      | 'hello world'             |
| domains     | array   | custom dropdown domains | ["gmail.com","yahoo.com"] |
| disabled    | Boolean | disable input           | false (Default)           |

### Events

onChange, dropdownOnClick

# License

This software is released under the [**`MIT License`**](https://msudgh.mit-license.org/).
