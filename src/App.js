import React, { Component } from 'react'
import Button from './Button';

class App extends Component {
    state ={
        count:0,
        errorMessage: "",
        showErrorMessage:false
    }
    incrementCount =()=> {
        this.setState({
            count: this.state.count +1,
             showErrorMessage: false
        })
    }
    decrementCount =()=> {
        let {count} =this.state.count
        if (count <=0) {
            this.setState( {
                showErrorMessage: true
            })
        } else (count >=0) {
            this.setState ({
                showErrorMessage:false
            })
        } 
    }
    render() {
        return (
            <div>
                <h2> count:{this.state.count} </h2>
                <Button title = {'+'}
                  task={() => this.incrementCount()} />
                <Button title ={'-'}
                task={()=> this.decrementCount()} />
                {/* <button onClick={()=> this.incrementCount()}>+</button>
                <button onClick={()=> this.decrementCount()}>-</button> */}
            </div>
        )
    }
}

export default App;







// import React, { Component } from 'react';
// import Button from './Button';

// class App extends Component {
//     state = {
//         count: 0
//     }
//     incrementCount() {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     decrementCount() {
//         this.setState({
//             count: this.state.count - 1
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>count={this.state.count}</h1>
//                 <button onClick={() => this.incrementCount()}>+</button>
//                 <button onClick={() => this.decrementCount()}>-</button>
//                 {/* <Button title={'+'}
//                 task={()=> this.incrementCount()} />
//                 <Button title={'-'}
//                 task={() => this.decrementCount()} /> */}
//             </div>
//         )
//     }
// }
// export default App;