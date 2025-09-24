import categoryInfos from "./CategoryInfos";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((info, i) => (
        <CategoryCard {...info} key={i} />
      ))}
    </section>
  );
}

export default Category;
