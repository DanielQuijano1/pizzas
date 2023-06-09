import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useContext } from "react";
import { cartContext } from "../storage/cartContext";

function ItemDetail({ title, img, detalle, precio, validarStock, onAddToCart, isInCart }) {

    const { cart } = useContext(cartContext)

    return (
        <div className="overlay">
            <div className="modal modal__card">

                <div className="content">
                    <div className="modal__card active">
                        <div className="modal__img">
                            <img src={img} alt={title} />
                        </div>
                        <div className="description__flex">
                            <h3 className="description__title">{title}</h3>
                            <small className="description__detail">{detalle}</small>
                            <div className="description__price">${precio} </div>
                            {!cart.includes({ title }) === isInCart ?
                                <div></div>
                                :
                                <div>
                                    <ItemCount text="Cantidad" stock={validarStock} onAddToCart={onAddToCart} />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="actions ">
                    <Link to="/">
                        <Button className="close" text="cerrar"></Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ItemDetail;