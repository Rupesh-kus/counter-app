import React, { Component } from 'react'

class DisplayEducationalInformation extends Component {
    render() {
        let {education}= this.props
        return(
            <div>
                <h2>{education}</h2>
                <p> bachelors in business adminstration</p>
            </div>
        )
    }
}
export default DisplayEducationalInformation;