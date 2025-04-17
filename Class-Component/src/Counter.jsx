import { Component } from "react";

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            cnt: 0
        }
    }

    Increament() {
        this.setState({
            cnt: this.state.cnt + 1
        })
    }

    Decreament() {
        this.setState({
            cnt: this.state.cnt - 1
        })
    }

    render() {
        return (
            <>
                <div align="center">
                    <h1>Counter App</h1>
                    <h2>Count : {this.state.cnt}</h2>
                    <button onClick={() => this.Increament()}>+</button>
                    <button onClick={() => this.Decreament()}>-</button>
                </div>
            </>
        )
    }
}

export default Counter