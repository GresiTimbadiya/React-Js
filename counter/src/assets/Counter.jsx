import { useState } from "react"
import Color from "../Color"

const Counter = ({ cnt, plus, minus, reset, minusBtn }) => {

    let [color, setColor] = useState(["Red", "Green", "Blue", "Black", "Pink"]);

    return (

        <>
            <div className="container text-center mt-5 w-25">
                <div className="card p-4 shadow-lg">
                    <h1 className="text-primary fs-2">Counter App</h1>
                    <h2 className="fs-1 text-success">{cnt}</h2>
                    <div className="mt-3">
                        <button className="btn btn-success mx-2" onClick={plus}>+</button>
                        <button className="btn btn-danger mx-2" disabled={minusBtn} id="minus" onClick={minus}>-</button>
                    </div>
                    <button className="btn btn-warning mt-3" onClick={reset}>Reset</button>
                </div>
            </div>

            <Color color={color} />
        </>

    )
}

export default Counter