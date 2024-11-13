import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function CustomeError () {
    return (
        <>
        <Header />
            <div className="w-full h-screen bg-white flex justify-center align-center bg-gray-600">
                <h1 className="text-red-700 text-4xl font-bold">!File Not Found</h1>

            </div>

        <Footer />
        </>
    )
}