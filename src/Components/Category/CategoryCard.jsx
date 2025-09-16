import classes from "./category.module.css";
// import {Link} from "react-router-dom";
function CategoryCard({title, imgLink, name}) {
  return (
    <div className={classes.category}>
      <a href=''>
        <span>
          <h2>{title}</h2>
          <img src={imgLink} alt={title} />
          <p>shop now</p>
        </span>
      </a>
    </div>
  );
}

export default CategoryCard;
