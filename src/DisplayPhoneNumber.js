import React, { Component } from 'react';

class DisplayPhoneNumber extends Component{

    render() {
        let { phoneNumber}= this.props
        console.log (this.props.phoneNumber)
        return (
            <div> 
                <h2>{phoneNumber}</h2>
            </div>
        )
    }
}

export default DisplayPhoneNumber;