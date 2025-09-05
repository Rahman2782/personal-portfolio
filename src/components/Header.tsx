'use client'
import Link from "next/link"
import { useState } from "react";
import { Menu, X } from 'lucide-react'

const navItems = [
    {id: '0', name:"About", href:'#about'},
    {id: '1', name:"Skills", href:'#skills'},
    {id: '2', name:"Projects", href:'#projects'},
    {id: '3', name:"Contact", href:'#contact'},
]

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); //opposite of whatever is toggled currently
    }

    const handleMenuClick = () => {
        setIsMenuOpen(false);
    }

    const handleHomeClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' }); //fix this to scroll to home, not just the top of the page
        setIsMenuOpen(false);
    }

  return (
    <div className="flex fixed bg-black/95 backdrop-blur-m items-center justify-between px-7 w-full h-[60px] text-green-300 z-20">
        <div>
            <button onClick={handleHomeClick} className="hover:text-green-500 bg-black cursor-pointer">
                Home
            </button>
        </div>

        <button onClick={toggleMenu} className="lg:hidden text-green-300 bg-black hover:text-green-500 cursor-pointer">
            {isMenuOpen ? <X /> : <Menu /> }
        </button>

        <ul className={`lg:flex lg:items-center lg:gap-9 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 backdrop-blur-sm p-4 text-center' : 'hidden'}`}>
            {navItems.map((i) => (
                <Link 
                    key={i.id} 
                    href={i.href} 
                    className="hover:text-green-500 py-6"
                    onClick={handleMenuClick}
                    >
                    {i.name}
                </Link>
            ))}
        </ul>
    </div>
  )
}

export default Header 