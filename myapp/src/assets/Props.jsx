const Props = ({ x, color, sum }) => {

    return (
        <>
            <h3>A is :- {x}</h3>
            {
                color.map((val) => {
                    return (
                        <ul>
                            <li style={{ color: val }}>{val}</li>
                        </ul>
                    )
                })
            }

            <h3>Sum is :- {sum(10, 30)}</h3>

        </>
    )
}

export default Props