import Carousel from "../../Components/Carousel/CarouselEffect";
import Category from "../../Components/Category/Category";
import LayOut from "../../Components/Layout/Layout";
import Product from "../../Components/Product/Product";

function Landing() {
  return (
    <>
      <LayOut>
        <Carousel />
        <Category />
        <Product />
      </ LayOut >
    </>
  );
}

export default Landing;
