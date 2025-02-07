"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/logo cecati.png"
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolling || menuOpen ? "bg-[#9D143A] shadow-lg" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                <a href="#" className="text-xl font-bold text-[#9D143A]">
                    <Image
                        className={`${scrolling || menuOpen ? "filter invert brightness-0" : "filter brightness-100"} transition-colors`}
                        src={logo}
                        alt="Logo del cecati y gob"
                        height={40}
                    />
                </a>
                <div className="hidden md:flex space-x-6">
                    <a href="#" className={`${scrolling ? "text-white hover:text-slate-400" : "text-gray-800 hover:text-[#9D143A]"} hover:underline`}>Inicio</a>
                    <a href="#" className={`${scrolling ? "text-white hover:text-slate-400" : "text-gray-800 hover:text-[#9D143A]"} hover:underline`}>Servicios</a>
                    <a href="#" className={`${scrolling ? "text-white hover:text-slate-400" : "text-gray-800 hover:text-[#9D143A]"} hover:underline`}>Contacto</a>
                </div>
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? (
                        <X className={`${scrolling || menuOpen ? "text-white" : "text-gray-800"} hover:text-slate-400`} size={28} />
                    ) : (
                        <Menu className={`${scrolling ? "text-white hover:text-slate-400" : "text-gray-800 hover:text-[#9D143A]"}`} size={28} />
                    )}
                </button>
            </div>
            
            {/* Menú móvil con animación */}
            <div
                className={`md:hidden flex flex-col bg-white shadow-md p-4 space-y-4 transition-all duration-300 ease-in-out transform ${
                    menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                } absolute left-0 w-full top-full z-40`}
            >
                <a
                    href="#"
                    className="text-gray-800 hover:text-[#9D143A] hover:underline py-2"
                    onClick={() => setMenuOpen(false)}
                >
                    Inicio
                </a>
                <a
                    href="#"
                    className="text-gray-800 hover:text-[#9D143A] hover:underline py-2"
                    onClick={() => setMenuOpen(false)}
                >
                    Servicios
                </a>
                <a
                    href="#"
                    className="text-gray-800 hover:text-[#9D143A] hover:underline py-2"
                    onClick={() => setMenuOpen(false)}
                >
                    Contacto
                </a>
            </div>
        </nav>
    );
}
