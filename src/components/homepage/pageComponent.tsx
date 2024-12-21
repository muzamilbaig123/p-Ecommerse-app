"use client"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Category from "../filter/category";
import HeroSection from "../herosection/page";
import ProductCard from "../products/productCard";
import Testimonials from "../testimonials/testimonials";
import Track from "../track/track";
import { addToCart, deleteFromCart } from "@/lib/slices/cart/cart";
import { showLoader, hideLoader } from "@/lib/slices/loader/loader";


export default function HomePage () {

    const dispatch = useAppDispatch();
    const cartItem = useAppSelector((state) => state.cart);

    console.log(cartItem)

    const addCart = () => {
        dispatch(addToCart("added"))
    }

    const deleteCart = () => {
        dispatch(deleteFromCart("Deleted Product"))
    }


    const handleAction = async () => {
      dispatch(showLoader());
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      dispatch(hideLoader());
    }
    return (
        <>
            <HeroSection /> 
            <button onClick={() => {addCart()}}>add</button>
            <button onClick={() => {deleteCart()}}>delete</button>
            <button onClick={handleAction}>Show Loader</button>
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