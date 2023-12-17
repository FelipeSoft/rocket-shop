export const FinalCartList = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex flex-col">
            <article className="border">
                <div className="grid grid-cols-5 p-3 border-b">
                    <h1 className="font-light col-start-2">PRODUTO</h1>
                    <h1 className="font-light col-start-3">PREÇO</h1>
                    <h1 className="font-light col-start-4">QTD.</h1>
                    <h1 className="font-light col-start-5">SUBTOTAL</h1>
                </div>
                {children}
            </article>
        </section>
    )
}