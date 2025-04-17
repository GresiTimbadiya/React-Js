

const Recipes = ({ recipeData }) => {

    console.log(recipeData);

    return (
        <>
            <div align="center" id="recipe">
                <h1>Recipe API</h1>

                <table cellPadding={5} className="table-bordered table align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Ingredients</th>
                            <th>Cuisine</th>
                            <th>Tags</th>
                            <th>Difficulty</th>
                            <th>mealType</th>
                            <th>CookTime</th>
                            <th>reviewCount</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {
                            recipeData.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{val.id}</td>
                                        <td><img src={val.image} width={90} /></td>
                                        <td>{val.name}</td>
                                        <td>
                                            <ul>
                                                {
                                                    val.ingredients.map((item, i) => {
                                                        return (
                                                            <li key={i}>{item}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </td>
                                        <td>{val.cuisine}</td>
                                        <td>
                                            <ul>
                                                {
                                                    val.tags.map((tag, i) => {
                                                        return (
                                                            <li key={i}>{tag}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </td>
                                        <td style={{ textAlign: "center" }}>{val.difficulty}</td>
                                        <td>{val.mealType}</td>
                                        <td style={{ textAlign: "center" }}>{val.cookTimeMinutes}</td>
                                        <td style={{ textAlign: "center" }}>{val.reviewCount}</td>
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

export default Recipes