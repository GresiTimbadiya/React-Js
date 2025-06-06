import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

function Add() {
    const navigate = useNavigate();
    const [allData, setAllData] = useState(JSON.parse(localStorage.getItem("books")) || []);
    const [book, setBook] = useState({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        year: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({
            ...book,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, author, genre, isbn, year } = book;
        if (!title || !author || !genre || !isbn || !year) {
            swal("Error...", "Please fill all fields!", "error");
            return false;
        }

        let newBook = {
            id: Math.floor(Math.random() * 10000),
            ...book
        };
        const updateData = [...allData, newBook];
        setAllData(updateData);
        localStorage.setItem("books", JSON.stringify(updateData));
        setBook({
            title: "",
            author: "",
            genre: "",
            isbn: "",
            year: ""
        });
        swal("Book added...", "You clicked the button!", "success");
        navigate("/");
    }

    return (

        <>
            <Header />

            <div className="container mt-4">
                <h3 className="text-center mb-3">Add Book</h3>
                <div className="card p-4 shadow" style={{ maxWidth: "450px", margin: "0 auto" }}>
                    <form onSubmit={handleSubmit}>
                        <label className="form-label fw-bold">Book title :-</label>
                        <input className="form-control mb-2" name="title" value={book.title} onChange={handleChange} placeholder="Enter book title" />

                        <label className="form-label fw-bold">Book author :-</label>
                        <input className="form-control mb-2" name="author" value={book.author} onChange={handleChange} placeholder="Enter author name" />

                        <label className="form-label fw-bold">Genre :-</label>
                        <select className="form-control mb-2" name="genre" value={book.genre} onChange={handleChange}>
                            <option value="">Select Genre</option>
                            <option value="fiction">Fiction</option>
                            <option value="non-fiction">Non-Fiction</option>
                            <option value="science-fiction">Sci-Fi</option>
                            <option value="spiritual">Spiritual</option>
                            <option value="mystery">Mystery</option>
                            <option value="fantasy">Fantasy</option>
                        </select>

                        <label className="form-label fw-bold">ISBN :-</label>
                        <input className="form-control mb-2" name="isbn" value={book.isbn} onChange={handleChange} placeholder="Enter ISBN" />

                        <label className="form-label fw-bold">Year :-</label>
                        <input type="number" className="form-control mb-3" name="year" value={book.year} onChange={handleChange} placeholder="Enter Year" />
                        <button type="submit" className="btn btn-success w-100">Add Book</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Add