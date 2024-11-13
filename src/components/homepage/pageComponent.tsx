"use client"
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Footer from "../footer/footer";
import Header from "../header/header";
import { student } from "@/lib/slices/renameing/check";

export default function () {

    const value = useAppSelector((state) => state.stuData);
    const dispatch = useAppDispatch();
    
    console.log(student()) 

    return (
        <>
            <Header />
                <h1>I Home Page</h1>

            <Footer />
        </>
    )
}