import { useEffect } from "react"

export default function Home() {
    useEffect(() => {
      document.title = 'Home'
    }, [])

    return (
        <section className="section">
            <h1 className="section-title">Hi! My name is Fajarwz</h1>
            <p className="section-description">I'm a web developer</p>
        </section>
    )
}