import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {

  let [blog, setBlog] = useState([]);

  const blogData = () => {
    fetch(`https://dev.to/api/articles`)
      .then(res => res.json())
      .then((data) => {
        setBlog(data.slice(0, 10));
      })
  }

  useEffect(() => {
    blogData();
  }, []);

  return (
    <>
      <div align="center">
        <h1 className="my-4 text-primary">Blog API</h1>
        <div className="container">
          <div className="row justify-content-center">
            {
              blog.map((val, index) => (
                <div className="col-md-11 mb-4" key={index}>
                  <div className="card h-100 shadow-lg border-0 rounded-4">
                    <img src={val.social_image} className="card-img-top p-3 rounded-4" style={{ height: "400px", objectFit: "cover" }} />
                    <div className="card-body text-start">
                      <h5 className="card-title text-dark">{val.title}</h5>
                      <p className="card-text text-muted">{val.description}</p>
                      <div className="mt-3">
                        <h6 className="text-secondary"> Created At: <span className="text-dark">{val.created_at}</span></h6>
                        <h6 className="text-secondary"> Last Comment: <span className="text-dark">{val.last_comment_at}</span></h6>
                        <h6 className="text-secondary"> Comments: <span className="text-dark">{val.comments_count}</span></h6>
                        <h6 className="text-secondary"> Reactions: <span className="text-dark">{val.positive_reactions_count}</span></h6>
                        <h6 className="text-secondary"> Read Time: <span className="text-dark">{val.reading_time_minutes} min</span></h6>
                      </div>
                      <hr />
                      <h4 className="mt-3 text-primary"> User Information</h4>
                      <table className="table table-striped w-75 rounded-3">
                        <thead className="table-light">
                          <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{val.user.user_id}</td>
                            <td><img src={val.user.profile_image_90} style={{ height: "60px", borderRadius: "50%" }} /></td>
                            <td>{val.user.name}</td>
                            <td>@{val.user.username}</td>
                          </tr>
                        </tbody>
                      </table>
                      <h4 className="mt-4 text-primary">🏷 Tags</h4>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {
                          val.tag_list.map((tag, i) => (
                            <span key={i} className="badge bg-warning text-dark px-3 py-2" style={{ fontSize: "14px" }}>#{tag}</span>
                          ))
                        }
                      </div>
                      <a href={val.canonical_url} target="_blank" className="btn btn-outline-success">Click me for Read More</a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App