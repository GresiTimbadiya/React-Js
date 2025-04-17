

const User = ({ userData }) => {

    return (
        <>
            <div align="center" id="user">
                <h1>User API</h1>

                <table className="table table-bordered table-striped">
                    <thead className="table-success">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Post</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{val.id}</td>
                                        <td>{val.firstName} {val.lastName}</td>
                                        <td>{val.company.title}</td>
                                        <td>{val.email}</td>
                                        <td>{val.phone}</td>
                                        <td>{val.gender}</td>
                                        <td>{val.age}</td>
                                        <td>{val.address.address}, {val.address.city}</td>
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

export default User
