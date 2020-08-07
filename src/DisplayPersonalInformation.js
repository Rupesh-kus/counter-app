import React, { Component } from 'react'; 

class DisplayPersonalInformation extends Component {
    render() {
        let { address}= this.props
        return (
            <div> 
                <h2>{address}</h2>
            </div>
        )

    }
}
export default DisplayPersonalInformation;