"use client"
import { useAppSelector } from "@/lib/hooks";
import Loader from "./loader";

export default function LoaderWraper () {

  const isLoading = useAppSelector((state) => state.loader.isLoading);

    return (
        <>
            {isLoading && <Loader />}
        </>
    )
}