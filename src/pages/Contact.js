import { useEffect } from "react"

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact'
      }, [])

    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-description">You can email me via fajarwz@gmail.com</p>
        </section>
    )
}