import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../Image/I.png";

export default function Header() {
    const [isInsuranceOpen, setIsInsuranceOpen] = useState(false);
    const [isHealthInsuranceOpen, setIsHealthInsuranceOpen] = useState(false);
    const [isAdvisoryOpen, setIsAdvisoryOpen] = useState(false); // New state for Insurance Advisory
    const [isSupportOpen, setIsSupportOpen] = useState(false);

    // Event handlers for hover
    const handleMouseEnterInsurance = () => setIsInsuranceOpen(true);
    const handleMouseLeaveInsurance = () => setIsInsuranceOpen(false);

    const handleMouseEnterHealthInsurance = () => setIsHealthInsuranceOpen(true);
    const handleMouseLeaveHealthInsurance = () => setIsHealthInsuranceOpen(false);

    const handleMouseEnterAdvisory = () => setIsAdvisoryOpen(true); // New handler for Insurance Advisory
    const handleMouseLeaveAdvisory = () => setIsAdvisoryOpen(false);

    const handleMouseEnterSupport = () => setIsSupportOpen(true);
    const handleMouseLeaveSupport = () => setIsSupportOpen(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo on the left */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-14 h-14 w-35" alt="Logo" />
                    </Link>

                    {/* Centered Navigation Links */}
                    <div className="hidden lg:flex lg:space-x-8 lg:items-center lg:flex-1 lg:justify-center">
                        {/* Dropdown Menu for Insurance */}
                        <div className="relative" onMouseEnter={handleMouseEnterInsurance} onMouseLeave={handleMouseLeaveInsurance}>
                            <NavLink to="#" className="py-2 px-4 text-gray-700 hover:text-green-300">
                                Insurance
                            </NavLink>

                            {/* First Level Dropdown Menu for Insurance */}
                            {isInsuranceOpen && (
                                <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg z-50">
                                    <ul className="p-4 text-gray-700">
                                        <li
                                            className="relative py-1 hover:bg-gray-100"
                                            onMouseEnter={handleMouseEnterHealthInsurance}
                                            onMouseLeave={handleMouseLeaveHealthInsurance}
                                        >
                                            <span className="flex items-center">
                                                Health Insurance
                                                {/* Arrow Icon */}
                                                <svg
                                                    className="ml-1 w-4 h-4 text-gray-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </span>

                                            {/* Second Level Dropdown Menu for Health Insurance */}
                                            {isHealthInsuranceOpen && (
                                                <div className="absolute top-0 left-full ml-2 w-72 bg-white border border-gray-200 shadow-lg z-50">
                                                    <ul className="p-4 text-gray-700">
                                                        <NavLink to="/health-insurance/family">
                                                            <li className="py-1 hover:bg-gray-100">Health Insurance Plans for Family</li>
                                                        </NavLink>
                                                        <NavLink to="/health-insurance/seniorcitizen">
                                                            <li className="py-1 hover:bg-gray-100">Health Insurance for Senior Citizens</li>
                                                        </NavLink>
                                                        <NavLink to="/health-insurance/parents">
                                                            <li className="py-1 hover:bg-gray-100">Health Insurance for Parents</li>
                                                        </NavLink>
                                                        <NavLink to="/health-insurance/women">
                                                            <li className="py-1 hover:bg-gray-100">Women Health Insurance</li>
                                                        </NavLink>
                                                        <NavLink to="/health-insurance/children">
                                                            <li className="py-1 hover:bg-gray-100">Health Insurance for Children</li>
                                                        </NavLink>
                                                        <NavLink to="/health-insurance/calculator">
                                                            <li className="py-1 hover:bg-gray-100">Health Insurance Premium Calculator</li>
                                                        </NavLink>
                                                    </ul>
                                                </div>
                                            )}
                                        </li>
                                        <li className="py-1 hover:bg-gray-100">
                                            <NavLink to="/car-insurance">Car Insurance</NavLink>
                                        </li>
                                        <li className="py-1 hover:bg-gray-100">
                                            <NavLink to="/life-insurance">Life Insurance</NavLink>
                                        </li>
                                        <li className="py-1 hover:bg-gray-100">
                                            <NavLink to="/term-insurance">Term Insurance</NavLink>
                                        </li>
                                        <li className="py-1 hover:bg-gray-100">
                                            <NavLink to="/bike-insurance">Bike Insurance</NavLink>
                                        </li>
                                        <li className="py-1 hover:bg-gray-100">
                                            <NavLink to="/business-insurance">Business Insurance</NavLink>
                                        </li>
                                        <li className="py-1 hover:bg-gray-100">
                                            <NavLink to="/travel-insurance">Travel Insurance</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Dropdown Menu for Insurance Advisory */}
                        <div className="relative" onMouseEnter={handleMouseEnterAdvisory} onMouseLeave={handleMouseLeaveAdvisory}>
                            <NavLink to="#" className="py-2 px-4 text-gray-700 hover:text-green-300">
                                Insurance Advisory
                            </NavLink>

                            {/* Advisory Dropdown Menu */}
                            {isAdvisoryOpen && (
                                <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg z-50">
                                    <ul className="p-4 text-gray-700">
                                        <li className="py-1 hover:bg-gray-100">Insurance Tips</li>
                                        <li className="py-1 hover:bg-gray-100">Best Insurance Policies</li>
                                        <li className="py-1 hover:bg-gray-100">Claim Process Guidance</li>
                                        <li className="py-1 hover:bg-gray-100">Insurance FAQs</li>
                                        <li className="py-1 hover:bg-gray-100">Comparison of Policies</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Other nav items (e.g., Support) */}
                        <div className="relative" onMouseEnter={handleMouseEnterSupport} onMouseLeave={handleMouseLeaveSupport}>
                            <NavLink to="#" className="py-2 px-4 text-gray-700 hover:text-green-300">
                                Support
                            </NavLink>

                            {/* Dropdown Menu for Support */}
                            {isSupportOpen && (
                                <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 shadow-lg z-50">
                                    <ul className="p-4 text-gray-700">
                                        <li className="py-1 hover:bg-gray-100">Customer Support</li>
                                        <li className="py-1 hover:bg-gray-100">FAQ</li>
                                        <li className="py-1 hover:bg-gray-100">Contact Us</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Login and Get Started on the right */}
                    <div className="lg:ml-auto">
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-green-300 hover:bg-green-400 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
