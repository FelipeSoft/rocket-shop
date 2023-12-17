import { Navbar } from "@/components/NavBar"

type Props = {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <main className="mx-auto max-w-7xl min-h-screen">
            <Navbar/>
            {children}
        </main>
    )
}

export default MainLayout