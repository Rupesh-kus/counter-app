import React, { Component } from 'react'
class DisplaymailingAccount extends Component {
    render() {
    let {gmail}= this.props
        return (
            <div>
                <h4>{gmail}</h4>
            </div>
        )
    }
}
export default DisplaymailingAccount;