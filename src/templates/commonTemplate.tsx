import { ReactNode } from "react"
import { Header } from "../layouts/header"

export const CommonTemplate = ({ children } : {
    children: ReactNode
})  => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}
