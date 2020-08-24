import React, { Component } from "react";
import "./index.css";

const emailDefaultDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "live.com",
  "outlook.com",
];

export default class Email extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      valid: true,
      dropdownVisible: false,
      domainsData:
        props.domains && props.domains.length !== 0
          ? props.domains
          : emailDefaultDomains,
    };

    this.handleChange = this.handleChange.bind(this);
    this.selectEmail = this.selectEmail.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
  }

  componentDidMount() {
    const { domains, value } = this.props;

    if (domains) {
      if (!Array.isArray) {
        Array.isArray = function (arg) {
          return Object.prototype.toString.call(arg) === "[object Array]";
        };
      }

      if (!Array.isArray(domains)) {
        console.error("domains type error");
        this.setState({
          valid: false,
        });
      }
    }

    this.setState({
      value,
    });
  }

  handleChange(event) {
    const { onChange } = this.props;
    const have_at = event.target.value.split("@").length - 1 !== 0;

    this.setState({
      value: event.target.value,
    });

    if (have_at) {
      this.setState({
        dropdownVisible: true,
      });
    } else {
      this.setState({
        dropdownVisible: false,
      });
    }

    if (onChange) {
      onChange(event);
    }
  }

  selectEmail = (item) => {
    this.setState((prevState) => ({
      value: `${prevState.value.split("@")[0]}@${item}`,
      dropdownVisible: false,
    }));
  };

  touchEnd(item) {
    this.selectEmail(item);
    return false;
  }

  mouseDown(item) {
    this.selectEmail(item);
  }

  render() {
    const props = this.props;
    const { value, valid, dropdownVisible, domainsData } = this.state;

    return (
      valid && (
        <div className="email__wrap">
          <input
            style={{width: '100%'}}
            {...props}
            autoCapitalize="none"
            type="text"
            inputMode="email"
            value={value || ""}
            onChange={this.handleChange}
            onBlur={() => this.setState({ dropdownVisible: false })}
          />
          {dropdownVisible && (
            <ul className="email__dropdown">
              {domainsData.map((item) => (
                <li
                  key={item}
                  onTouchEnd={() => this.touchEnd(item)}
                  onMouseDown={() => this.mouseDown(item)}
                >
                  {value.split('@')[0]}@
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )
    );
  }
}
