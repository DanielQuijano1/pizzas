import { Link } from "react-router-dom";
import "./Categories.css"

function Categories() {
    return (
        <div className="categorias">
            <Link to="/category/Pizzas" className="flexCategoria">
                <div className="Pizzas"/>
                <div className="textCategory">Pizzas</div>
            </Link>
            <Link to="/category/Empanadas" className="flexCategoria">
                <div className="Empanadas"/>
                <div className="textCategory">Empanadas</div>
            </Link>
            <Link to="/category/Promos" className="flexCategoria">
                <div className="Promos"/>
                <div className="textCategory">Promos</div>
            </Link>
        </div>
    )

}

export default Categories;