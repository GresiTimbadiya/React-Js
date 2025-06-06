import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

function View() {
    const [allData, setAllData] = useState(JSON.parse(localStorage.getItem("books")) || []);
    const navigate = useNavigate();

    const deleteBook = (id) => {
        const updated = allData.filter(val => val.id !== id);
        setAllData(updated);
        localStorage.setItem("books", JSON.stringify(updated));
        swal("Book deleted...", "You clicked the button!", "success");
    }

    const editBook = (id) => {
        navigate(`/edit/${id}`);
    }

    return (
        <>
            <Header />
            
            <div className="container mt-4">
                <h3 className="text-center mb-5">View all books</h3>
                <div className="row">
                    {allData.length > 0 ? (
                        allData.map((val) => (
                            <div className="col-md-4 mb-4" key={val.id}>
                                <div className="card shadow p-3 bg-light">
                                    <h5 className="fw-bold mb-2 border-bottom pb-2">Title: {val.title}</h5>
                                    <p><strong>Author:</strong> {val.author}</p>
                                    <p><strong>Genre:</strong> {val.genre}</p>
                                    <p><strong>ISBN:</strong> {val.isbn}</p>
                                    <p><strong>Year:</strong> {val.year}</p>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-outline-primary" onClick={() => editBook(val.id)}>Edit</button>
                                        <button className="btn btn-outline-danger" onClick={() => deleteBook(val.id)}>Delete</button>
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

export default View