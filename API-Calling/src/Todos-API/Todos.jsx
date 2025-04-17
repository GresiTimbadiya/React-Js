import React from 'react'

const Todos = ({ todoData }) => {

    console.log(todoData);

    return (
        <>
            <div align="center" id='todos'>
                <h1>Todos API </h1>

                <div className="container-fluid">
                    <div className="row">
                        {
                            todoData.map((val, index) => {
                                return (
                                    <div key={index} className="col-md-2 mb-3 p-1">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h6 className="card-text">UserId :- {val.userId}</h6>
                                                <p className="card-text">{val.todo}</p>
                                                <h6 className="card-title d-flex justify-content-center">Completed :-
                                                    {
                                                        val.completed == true ? <h6 className='text-success'>True</h6> : <h6 className='text-danger'>False</h6>
                                                    }
                                                </h6>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todos
