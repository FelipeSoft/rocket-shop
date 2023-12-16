type Props = {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <main className="mx-auto max-w-7xl min-h-screen">
            {children}
        </main>
    )
}

export default MainLayout