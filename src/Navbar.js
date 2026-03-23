export default function Navbar() {
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#service', label: 'About' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#license', label: 'Certifications' },
        { href: '#footer', label: 'Contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow-lg px-40 py-3 z-50 border-b border-gray-200">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-black">
                    Sebastian Mesa
                </h1>
                <ul className="flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="transition-all duration-200 px-2 py-1 rounded font-bold hover:-translate-y-1 hover:bg-black hover:text-white active:bg-black active:text-white active:scale-95"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}