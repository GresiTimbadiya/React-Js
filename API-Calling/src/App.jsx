import { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Product from "./Product-API/Product"
import Carts from "./Carts-API/Carts";
import Recipes from "./Recipe-API/Recipes";
import User from "./Users-API/User";
import Posts from "./Posts-API/Posts";
import Todos from "./Todos-API/Todos";
import Comments from "./Comment-API/Comments";


function App() {

  let [product, setProduct] = useState([]);
  let [Cart, setCart] = useState([]);
  let [recipe, setRecipe] = useState([]);
  let [user, setUser] = useState([]);
  let [post, setPost] = useState([]);
  let [todos, setTodos] = useState([]);
  let [comment, setComment] = useState([]);

  const getProduct = () => {
    fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
      .then((data) => {
        setProduct(data.products);
      })
  }

  const getCarts = () => {
    fetch(`https://dummyjson.com/carts`)
      .then(res => res.json())
      .then((data) => {
        setCart(data.carts);
      })
  }

  const getRecipes = () => {
    fetch(`https://dummyjson.com/recipes`)  
      .then(res => res.json())
      .then((data) => {
        setRecipe(data.recipes);
      })
  }

  const getUsers = () => {
    fetch(`https://dummyjson.com/users`)
      .then(res => res.json())
      .then((data) => {
        setUser(data.users);
      })
  }

  const getPosts = () => {
    fetch(`https://dummyjson.com/posts`)
      .then(res => res.json())
      .then((data) => {
        setPost(data.posts);
      })
  }

  const getTodos = () => {
    fetch(`https://dummyjson.com/todos`)
      .then(res => res.json())
      .then((data) => {
        setTodos(data.todos);
      })
  }

  const getComment = () => {
    fetch(`https://dummyjson.com/comments`)
      .then(res => res.json())
      .then((data) => {
        setComment(data.comments);
      })
  }

  useEffect(() => {
    getProduct();
    getCarts();
    getRecipes();
    getUsers();
    getPosts();
    getTodos();
    getComment();
  }, [])


  return (
    <>
      <div align="center">

        <a href="#recipe"><button className="btn btn-info me-2 mt-3 ">Recipe</button></a>
        <a href="#cart"><button className="btn btn-success me-2 mt-3 ">cart</button></a>
        <a href="#user"><button className="btn btn-dark me-2 mt-3 ">User</button></a>
        <a href="#product"><button className="btn btn-danger me-2 mt-3 ">Product</button></a>
        <a href="#post"><button className="btn btn-warning me-2 mt-3 ">Post</button></a>
        <a href="#todos"><button className="btn btn-secondary me-2 mt-3 ">Todos</button></a>
        <a href="#comment"><button className="btn btn-primary me-2 mt-3 ">Comment</button></a>


        <Recipes
          recipeData={recipe}
        />

        <Carts
          cartData={Cart}
        />

        <User
          userData={user}
        />

        <Product
          productData={product}
        />

        <Posts
          postData={post}
        />

        <Todos
          todoData={todos}
        />

        <Comments
          commentData={comment}
        />
      </div>
    </>
  )
}

export default App
