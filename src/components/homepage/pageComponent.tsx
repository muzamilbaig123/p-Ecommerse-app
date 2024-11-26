import Category from "../filter/category";
import HeroSection from "../herosection/page";
import ProductCard from "../products/productCard";
import Testimonials from "../testimonials/testimonials";
import Track from "../track/track";

export default function () {


    return (
        <>
            <HeroSection />
            <div className="mt-14"></div>
            <div className="container border m-auto p-10 rounded" style={{ backgroundColor: "#F2F2F2" }}>

                <Category />
                <div className="m-10"></div>
                <ProductCard />
                <div className="m-10"></div>
                <Track />
                <div className="m-10"></div>
                <Testimonials />
            </div>
            <div className="mb-14"></div>
        </>
    )
}