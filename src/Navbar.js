import "./navbar.css";

export default function Navbar() {
    const path = window.location.pathname
    return <nav className="nav">
        <a href="/" className="site-title">The Church of the Chicagoans</a>
        <ul>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/contact">Contact</CustomLink>
            <li>
                <a href="/website" className="title">Website</a>
            </li>
        </ul>
    </nav>
}

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props} className="title">
                {children}
            </a>
        </li>
    )
}