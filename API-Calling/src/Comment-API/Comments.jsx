import React from 'react'

const Comments = ({ commentData }) => {

    return (
        <>
            <div align="center" id='comment'>
                <h1>Comment API</h1>

                <table border={1} className='table table-bordered table-striped'>
                    <thead className='table-secondary'>
                        <tr>
                            <th>Id</th>
                            <th>Body</th>
                            <th>Likes</th>
                            <th>Post-Id</th>
                            <th>User detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            commentData.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{val.id}</td>
                                        <td>{val.body}</td>
                                        <td>{val.likes}</td>
                                        <td>{val.postId}</td>
                                        <td>
                                            <ul>
                                                <li style={{listStyle:"none", fontWeight:"bold"}}>Id :- {val.user.id}</li>
                                                <li style={{listStyle:"none"}}>Full name :- {val.user.fullName}</li>
                                                <li style={{listStyle:"none"}}>Username :- {val.user.username}</li>
                                            </ul>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Comments