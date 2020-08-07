import React, { Component } from 'react'
class Button extends Component {
    render() {
        let { title,task } = this.props
        return (
            <button onClick ={task}>{title}</button>
        )
    }
}
 export default Button;