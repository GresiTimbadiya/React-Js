import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [allData, setAllData] = useState(JSON.parse(localStorage.getItem("books")) || []);
    const [book, setBook] = useState({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        year: ""
    })

    if (book.genre === "" && id) {
        const selectBook = allData.find(val => val.id === parseInt(id));
        if (selectBook) {
            setBook(selectBook);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value
        });
    }

    const updateBook = () => {
        const updated = allData.map((val) => {
            if (val.id === parseInt(id)) {
                return { ...val, ...book }
            }
            return val;
        })
        setAllData(updated);
        localStorage.setItem("books", JSON.stringify(updated));
        swal("Book updated...", "You clicked the button!", "success");
        navigate("/");
    }

    return (
        <>
            <Header />

            <div className="container mt-3">
                <h3 className="text-center mb-3">Edit Book</h3>
                <div className="card p-4 shadow" style={{ maxWidth: "450px", margin: "0 auto" }}>
                    <label className="form-label fw-bold">Book title :-</label>
                    <input className="form-control mb-2" name="title" value={book.title} onChange={handleChange} placeholder="Enter book title" />

                    <label className="form-label fw-bold">Book author :-</label>
                    <input className="form-control mb-2" name="author" value={book.author} onChange={handleChange} placeholder="Enter author name" />

                    <label className="form-label fw-bold">genre :-</label>
                    <select className="form-control mb-2" name="genre" value={book.genre} onChange={handleChange}>
                        <option value="">Select Genre</option>
                        <option value="fiction">Fiction</option>
                        <option value="non-fiction">Non-Fiction</option>
                        <option value="science-fiction">Science-fiction</option>
                        <option value="spiritual">Spiritual</option>
                        <option value="mystery">Mystery</option>
                        <option value="fantasy">Fantasy</option>
                    </select>

                    <label className="form-label fw-bold">ISBN :-</label>
                    <input className="form-control mb-2" name="isbn" value={book.isbn} onChange={handleChange} placeholder="Enter ISBN" />

                    <label className="form-label fw-bold">year :-</label>
                    <input type="number" className="form-control mb-3" name="year" value={book.year} onChange={handleChange} placeholder="Enter Year" />

                    <div className="d-flex justify-content-between">
                        <button className="btn btn-success w-100" onClick={updateBook}>Update Book</button>
                        <button className="btn btn-danger w-100 ms-2" onClick={() => navigate("/")}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit