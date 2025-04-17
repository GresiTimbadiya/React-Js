import React from 'react'

const Todolist = ({ todo }) => {

    return (

        <div align="center">
            <h2>Todo list</h2>

            <table border={1} cellPadding={5}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((task) => {
                            return(
                                <tr>
                                    <td>{task.id}</td>
                                    <td>{task.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Todolist
