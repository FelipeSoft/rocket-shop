import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/NavBar"
import { Product } from "@/components/Product"
import MainLayout from "@/layout/MainLayout"

const product = () => {
    return (
        <MainLayout>

            <Product></Product>
            <br />
            <Footer></Footer>
        </MainLayout>
    )
}

export default product