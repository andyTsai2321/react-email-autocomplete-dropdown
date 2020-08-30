import React, { Component } from 'react';
import Email from '../../src' 
// import Email from '../../lib/index' // 
// import '../../lib/main.min.css'

class Test extends Component {
    constructor(props) {
        super(props);
        this.state={
            value: 'test'
        }
        this.dropdownClick = this.dropdownClick.bind(this);

    }
    handleOnChange=(e)=>{
        this.setState({
            value: e.target.value
        })
    }

    dropdownClick = (value) => {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div className="test">
                <Email 
                // value={this.state.value}
                onChange={this.handleOnChange}
                dropdownOnClick={this.dropdownClick}
                placeholder={'hi'}
                // disabled={true}
                />
                <span style={{color: '#fff'}}>{this.state.value}</span>
            </div>
        );
    }
}

export default Test;

