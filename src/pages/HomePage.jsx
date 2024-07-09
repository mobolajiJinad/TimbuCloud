import BestSellers from "../components/BestSellers";
import Category from "../components/Category";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Support from "../components/Support";

const HomePage = () => {
  return (
    <>
      <Header />

      <Main />

      <Category />

      <FeaturedProducts />

      <BestSellers />

      <Support />

      <Footer />
    </>
  );
};

export default HomePage;
