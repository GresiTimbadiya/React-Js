import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

function View() {
    const [searchField, setSearchField] = useState({
        title: "",
        author: "",
        genre: "",
        isbn: "",
        year: ""

    });
    const [filterBook, setFilterBook] = useState([]);
    const [sortBook, setSortbook] = useState({
        id: true,
        title: true,
        author: true,
        genre: true,
        isbn: true,
        year: true
    })
    const [allData, setAllData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("books")) || [];
        setAllData(data);
        setFilterBook(data);
    }, [])

    useEffect(() => {
        let filter = allData.filter((val) => {
            return (
                val.title.toLowerCase().includes(searchField.title.toLowerCase()) &&
                val.author.toLowerCase().includes(searchField.author.toLowerCase()) &&
                val.genre.toLowerCase().includes(searchField.genre.toLowerCase()) &&
                val.isbn.toLowerCase().includes(searchField.isbn.toLowerCase()) &&
                val.year.toLowerCase().includes(searchField.year.toLowerCase())
            )
        })
        setFilterBook(filter);
    }, [searchField, allData])

    const handleSort = (type) => {
        let sorting = [...allData];
        if (type === 'id') {
            sorting = allData.sort((a, b) => {
                let idA = a.id;
                let idB = b.id;

                if (idA < idB) return sortBook.id ? -1 : 1;
                if (idB < idA) return sortBook.id ? 1 : -1;
            })
            setSortbook({
                id: !sortBook.id,
                title: true,
                author: true,
                genre: true,
                isbn: true,
                year: true
            })
        }
        if (type === 'title') {
            sorting = allData.sort((a, b) => {
                let nameA = a.title.toLowerCase();
                let nameB = b.title.toLowerCase();
                if (nameA < nameB) return sortBook.title ? -1 : 1;
                if (nameB < nameA) return sortBook.title ? 1 : -1;
            })
            setSortbook({
                id: true,
                title: !sortBook.title,
                author: true,
                genre: true,
                isbn: true,
                year: true
            })
        }
        if (type === 'author') {
            sorting = allData.sort((a, b) => {
                let nameA = a.author.toLowerCase();
                let nameB = b.author.toLowerCase();
                if (nameA < nameB) return sortBook.author ? -1 : 1;
                if (nameB < nameA) return sortBook.author ? 1 : -1;
            })
            setSortbook({
                id: true,
                title: true,
                author: !sortBook.author,
                genre: true,
                isbn: true,
                year: true
            })
        }
        if (type === 'genre') {
            sorting = allData.sort((a, b) => {
                let nameA = a.genre.toLowerCase();
                let nameB = b.genre.toLowerCase();
                if (nameA < nameB) return sortBook.genre ? -1 : 1;
                if (nameB < nameA) return sortBook.genre ? 1 : -1;
            })
            setSortbook({
                id: true,
                title: true,
                author: true,
                genre: !sortBook.genre,
                isbn: true,
                year: true
            })
        }
        if (type === 'isbn') {
            sorting = allData.sort((a, b) => {
                let nameA = a.isbn;
                let nameB = b.isbn;
                if (nameA < nameB) return sortBook.isbn ? -1 : 1;
                if (nameB < nameA) return sortBook.isbn ? 1 : -1;
            })
            setSortbook({
                id: true,
                title: true,
                author: true,
                genre: true,
                isbn: !sortBook.isbn,
                year: true
            })
        }
        if (type === 'year') {
            sorting = allData.sort((a, b) => {
                let nameA = a.year;
                let nameB = b.year;
                if (nameA < nameB) return sortBook.year ? -1 : 1;
                if (nameB < nameA) return sortBook.year ? 1 : -1;
            })
            setSortbook({
                id: true,
                title: true,
                author: true,
                genre: true,
                isbn: true,
                year: !sortBook.year
            })
        }
        setFilterBook(sorting);
    }

    const handleSearch = (e) => {
        const { name, value } = e.target;
        setSearchField({
            ...searchField,
            [name]: value
        })
    }

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
                <h3 className="text-center">View all books</h3>
                <div className="d-flex mt-5 gap-3 justify-content-center">
                    <div className="col-2 mb-4">
                        <input type="text" name="title" onChange={handleSearch} value={searchField.title} className="form-control" placeholder="Search title..." />
                    </div>
                    <div className="col-2 mb-4">
                        <input type="text" name="author" onChange={handleSearch} value={searchField.author} className="form-control" placeholder="Search author..." />
                    </div>
                    <div className="col-2 mb-4">
                        <input type="text" name="genre" onChange={handleSearch} value={searchField.genre} className="form-control" placeholder="Search genre..." />
                    </div>
                    <div className="col-2 mb-4">
                        <input type="text" name="isbn" onChange={handleSearch} value={searchField.isbn} className="form-control" placeholder="Search ISBN..." />
                    </div>
                    <div className="col-2 mb-4">
                        <input type="text" name="year" onChange={handleSearch} value={searchField.year} className="form-control" placeholder="Search year..." />
                    </div>
                    <div className="col-1 mb-4">
                        <input type="button" value="Reset" onClick={() => setSearchField({ title: "", author: "", genre: "", isbn: "", year: "" })} className="btn btn-warning" />
                    </div>
                </div>
                <div className="row text-center">
                    <table className="table table-striped table-bordered">
                        <thead className="table-success">
                            <tr>
                                <th onClick={() => handleSort("id")} style={{ cursor: "pointer" }}>Id :- {sortBook.id ? "▼" : "▲"}</th>
                                <th onClick={() => handleSort("title")} style={{ cursor: "pointer" }}>Title :- {sortBook.title ? "▼" : "▲"}</th>
                                <th onClick={() => handleSort("author")} style={{ cursor: "pointer" }}>Author :- {sortBook.author ? "▼" : "▲"}</th>
                                <th onClick={() => handleSort("genre")} style={{ cursor: "pointer" }}>Genre :- {sortBook.genre ? "▼" : "▲"}</th>
                                <th onClick={() => handleSort("isbn")} style={{ cursor: "pointer" }}>ISBN :- {sortBook.isbn ? "▼" : "▲"}</th>
                                <th onClick={() => handleSort("year")} style={{ cursor: "pointer" }}>Year :- {sortBook.year ? "▼" : "▲"}</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterBook.length > 0 ? (
                                filterBook.map((val, index) => (
                                    <tr key={index}>
                                        <td>{val.id}</td>
                                        <td>{val.title}</td>
                                        <td>{val.author}</td>
                                        <td>{val.genre}</td>
                                        <td>{val.isbn}</td>
                                        <td>{val.year}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => editBook(val.id)}>Edit</button>
                                            <button className="btn btn-danger ms-2" onClick={() => deleteBook(val.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center">No books available. Add some books...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default View