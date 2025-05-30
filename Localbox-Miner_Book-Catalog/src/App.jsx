import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [allData, setAllData] = useState(JSON.parse(localStorage.getItem("books")) || []);
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
    year: ""
  });
  const [editId, setEditId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ 
      ...book,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, genre, isbn, year } = book;
    if (!title || !author || !genre || !isbn || !year) {
      alert("Please fill all fields!");
      return false;
    }

    let newBook = {
      id: Math.floor(Math.random() * 10000),
      ...book
    }
    const updateData = [...allData, newBook];
    setAllData(updateData);
    localStorage.setItem("books", JSON.stringify(updateData));

    setBook({
      title: "", author: "", genre: "", isbn: "", year: ""
    })
    alert("Book added...");
  }

  const deleteBook = (id) => {
    const deleteBook = allData.filter((val) => val.id !== id);
    setAllData(deleteBook);
    localStorage.setItem("books", JSON.stringify(deleteBook));
    alert("Book deleted...");
  }

  const editBook = (id) => {
    const singleBook = allData.find((val) => val.id === id);
    setBook(singleBook);
    setEditId(id);
    document.getElementById("add").style.display = "none";
    document.getElementById("edit").style.display = "block";
  }

  const updateBook = () => {
    const updateBooks = allData.map((item) =>
      item.id === editId ? {
        ...item,
        ...book
      } : item
    )
    setAllData(updateBooks);
    localStorage.setItem("books", JSON.stringify(updateBooks));

    setBook({ title: "", author: "", genre: "", isbn: "", year: "" });
    setEditId("");
    document.getElementById("add").style.display = "block";
    document.getElementById("edit").style.display = "none";
    alert("Book updated...");
  }

  return (
    <>
      <h2 className="text-center my-3"> Book Catalog</h2>

      <div className="container">
        <div className="row justify-content-center">
          <div className="card shadow-lg bg-white rounded p-0" style={{ maxWidth: "450px" }}>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label><strong>Title :</strong></label>
                  <input type="text" className="form-control" name="title" value={book.title} onChange={handleChange} placeholder="Enter book title" />
                </div>
                <div className="form-group mb-2">
                  <label><strong>Author :</strong></label>
                  <input type="text" className="form-control" name="author" value={book.author} onChange={handleChange} placeholder="Enter author name" />
                </div>
                <div className="form-group mb-2">
                  <label><strong>Genre :</strong></label>
                  <select className="form-select" name="genre" value={book.genre} onChange={handleChange} >
                    <option value="">Select Genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Spiritual">Spiritual</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Fantasy">Fantasy</option>
                  </select>
                </div>
                <div className="form-group mb-2">
                  <label><strong>ISBN :</strong></label>
                  <input type="text" className="form-control" name="isbn" value={book.isbn} onChange={handleChange}
                    placeholder="Enter ISBN" />
                </div>
                <div className="form-group mb-3">
                  <label><strong>Published Year :</strong></label>
                  <input type="number" className="form-control" name="year" value={book.year} onChange={handleChange} placeholder="Enter Year" />
                </div>

                <div className="d-flex justify-content-between">
                  <button type="submit" id="add" className="btn btn-primary w-100 me-2" >Add Book</button>
                  <button type="button" id="edit" className="btn btn-success w-100" onClick={updateBook}
                    style={{ display: "none" }} > Update Book </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          {allData.length > 0 ? (
            allData.map((val) => (
              <div className="col-md-4 mb-4" key={val.id}>
                <div className="card shadow-sm p-4 bg-light rounded">
                  <div className="card-body p-0">
                    <h5 className="card-title mb-2 border-bottom pb-2 fw-bold">Title :- {val.title}</h5>
                    <p><span className="fw-bold">Author:</span> {val.author}</p>
                    <p><span className="fw-bold">Genre:</span> {val.genre}</p>
                    <p><span className="fw-bold">ISBN:</span> {val.isbn}</p>
                    <p><span className="fw-bold">Published Year:</span> {val.year}</p>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-outline-primary" onClick={() => editBook(val.id)}>
                        Edit
                      </button>
                      <button className="btn btn-outline-danger" onClick={() => deleteBook(val.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No books available. Add some books!</p>
          )}
        </div>
      </div>
    </>
  )
}

export default App;