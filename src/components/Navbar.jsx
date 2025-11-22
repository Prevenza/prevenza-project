import React, { useState } from 'react';
// You'll likely need an icon library like Heroicons for the menu toggle.
// For this example, we'll use simple text icons (☰ and X).
import Logo from '../assets/images/plogo.png'
import { useCart } from '../context/CartContext';
import { Link } from 'react-router';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {

    const { cartItems } = useCart();

    // 1. Component logic goes directly inside the function body.

    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Define the common link styles
    const linkClasses = "text-sm font-medium text-gray-700 hover:text-teal-600";

    // Array of your main navigation links
    const mainLinks = [
        { name: 'Packages', href: '/packages' },
        { name: 'Lab Tests', href: '/lab-tests' },
        { name: 'Speak to a Doctor', href: '/doctor' },
        { name: 'Flourish', href: '/flourish', hideOn: 'lg' }, // Hide on Lg and below
        { name: 'Kits', href: '/kits', hideOn: 'md' }, // Hide on Md and below
        { name: 'Vaccines', href: '/vaccines', hideOn: 'md' }, // Hide on Md and below
        { name: 'All Tests', href: '/all-tests' },
    ];

    // 2. The return statement wraps the final JSX.
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 font-[outfit] text-lg">
            {/* 1. Primary Navbar Content (Always Visible) */}
            <div className="flex justify-between items-center py-4 px-4 sm:px-8 max-w-7xl mx-auto">

                {/* Left Section: Logo */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center text-xl font-bold text-gray-800">
                        <img className=' mr-2 text-sm font-extrabold flex items-center justify-center h-8 w-20' src={Logo} alt="" />
                        {/* <span className="bg-teal-600 text-white rounded-full p-2 mr-2 text-sm font-extrabold flex items-center justify-center h-8 w-8">
                            P
                        </span> */}
                        {/* <span className='font-sans text-lg'>prevenza</span> */}
                    </a>
                </div>

                {/* 2. Center Section: Desktop Links (Hidden on small screens) */}
                <div className="hidden lg:flex justify-center space-x-6 xl:space-x-10">
                    <ul className="flex space-x-6 xl:space-x-10">
                        {mainLinks.map((link) => (
                            // Use responsive classes to hide less critical links on smaller desktops
                            <li key={link.name} className={`${link.hideOn === 'lg' ? 'hidden xl:block' : link.hideOn === 'md' ? 'hidden lg:block' : ''} hover:text-teal-600`}>
                                <a href={link.href} className={linkClasses}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Right Section: Login Link, Button, and Mobile Toggle */}
                <div className="flex items-center space-x-4">
                    <a href="/login" className="text-sm font-medium text-gray-700 hover:text-teal-600 hidden md:block">
                        Login
                    </a>

                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-md 
                                   hover:bg-teal-700 transition duration-150 ease-in-out hidden lg:block"
                    >
                        Create Account
                    </button>

                    {/* Mobile Menu Button (Hamburger/Close Icon) */}
                    <button
                        className="lg:hidden p-2 text-gray-600 focus:outline-none"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? (
                            <span className="text-2xl font-bold">×</span> // Close Icon
                        ) : (
                            <span className="text-2xl">☰</span> // Hamburger Icon
                        )}
                    </button>

                    <div className="relative">
                        <Link to="/cart" className="text-xl">
                            <FaShoppingCart />
                            <span className="absolute -top-2 -right-3 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                                {cartItems.length || 0}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 4. Mobile Menu Panel (Vertical Links) */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden pb-4 transition-all duration-300`}>
                <div className="flex flex-col space-y-2 px-4 border-t pt-4">
                    {mainLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-gray-800 hover:text-teal-600 p-2 rounded-md hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)} // Close menu on click
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Mobile-only Login and Button */}
                    <a href="/login" className="text-base font-medium text-gray-800 hover:text-teal-600 p-2 rounded-md hover:bg-gray-50 mt-2 md:hidden">
                        Login
                    </a>
                    <button
                        type="button"
                        className="w-full mt-4 px-4 py-2 text-sm font-semibold text-white bg-teal-600 rounded-md 
                                   hover:bg-teal-700 transition duration-150 ease-in-out"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </nav>
    );
}