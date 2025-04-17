

const Posts = ({ postData }) => {
    console.log(postData);

    return (
        <>
            <div align="center" id="post">
                <h1>Posts API</h1>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Tags</th>
                            <th>Reaction</th>
                            <th>Views</th>
                            <th>UserId</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            postData.map((val, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{val.id}</td>
                                        <td width={500}>{val.title}</td>
                                        <td>
                                            <ul>
                                            {
                                                val.tags.map((tag,i)=>{
                                                    return(
                                                        <li key={i}>{tag} </li>
                                                    )
                                                })
                                            }
                                            </ul>
                                        </td>
                                        <td><h6 className="mb-1 text-success">Likes :- {val.reactions.likes}</h6> 
                                            <h6 className="mb-1 text-danger">disLikes :- {val.reactions.dislikes}</h6></td>
                                        <td>{val.views}</td>
                                        <td>{val.userId}</td>
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

export default Posts
