import  { useContext } from "react";
import Rating from "@mui/material/Rating";
import CuurencyFormat from "../CurrencyFormat/CurencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex }) {
  const { id, image, title, price, rating, description } = product;
  const [state, dispatch] = useContext(DataContext);
  console.log(state);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        image,
        title,
        price,
        rating,
        description,
      },
    });
  };

  return (
    <div className={`${classes.card} ${flex && classes.product__fixed}`}>
      <Link to={`/product/${id}`} className={classes.link}>
        <img src={image} alt={title} className={classes.productImage} />
        <h3 className={classes.title}>{title}</h3>
      </Link>
      <p className={classes.desc}>{description?.substring(0, 70)}...</p>

      <div className={classes.rating}>
        <Rating value={rating?.rate || 0} precision={0.1} readOnly />
        <span>({rating?.count || 0})</span>
      </div>

      <div className={classes.price}>
        {" "}
        <CuurencyFormat amount={price} />
      </div>

      <button className={classes.button} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
