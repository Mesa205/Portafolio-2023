import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar({ menuOpen, setMenuOpen }) {
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#service', label: 'About' },
        { href: '#portfolio', label: 'Portfolio' },
        { href: '#license', label: 'Certifications' },
        { href: '#footer', label: 'Contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur shadow-lg px-4 sm:px-8 md:px-20 lg:px-40 py-3 z-50 border-b border-gray-200">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-black">
                    Sebastian Mesa
                </h1>
                {/* Desktop menu */}
                <ul className="hidden md:flex gap-4 lg:gap-6">
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
                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl text-gray-700"
                        aria-label="Open menu"
                    >
                        <AiOutlineMenu />
                    </button>
                </div>
            </div>
            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="md:hidden w-full bg-white shadow-lg border-t border-gray-200 absolute left-0 mt-2">
                    <ul className="flex flex-col gap-2 py-4 px-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="block transition-all duration-200 px-3 py-2 rounded font-bold hover:-translate-y-1 hover:bg-black hover:text-white active:bg-black active:text-white active:scale-95 text-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    )
}