import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Image/I.png";

export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [profilePic, setProfilePic] = useState(null);
    const [dropdowns, setDropdowns] = useState({
        insurance: false,
        healthInsurance: false,
        advisory: false,
        support: false
    });


    // Load authentication state & profile picture
    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("token");
            const storedPic = localStorage.getItem("profilePic");
            console.log("Token:", token);
            console.log("Profile Pic:", storedPic);
            setIsAuthenticated(!!token);
            setProfilePic(storedPic || "https://asset.cloudinary.com/duj6tm4qi/056ccc2af0ad755f3fc50e04993e7ff2");
        };
        checkAuth(); // Initial check
    
        // Listen for changes in localStorage
        window.addEventListener("storage", checkAuth);
    
        return () => {
            window.removeEventListener("storage", checkAuth);
        };
    }, []);
    

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("profilePic");
        setIsAuthenticated(false);
        setProfilePic(null);
    };

    // Toggle dropdowns dynamically
    const toggleDropdown = (key, isOpen) => {
        setDropdowns((prev) => ({ ...prev, [key]: isOpen }));
    };

    return (
        <header className="shadow-md sticky top-0 z-50 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center max-w-screen-xl mx-auto">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="h-14 w-auto" alt="Logo" />
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">

                        {/* Insurance Dropdown */}
                        <DropdownMenu
                            label="Insurance"
                            isOpen={dropdowns.insurance}
                            onMouseEnter={() => toggleDropdown("insurance", true)}
                            onMouseLeave={() => toggleDropdown("insurance", false)}
                            menuItems={[
                                { label: "Car Insurance", link: "/car-insurance" },
                                { label: "Life Insurance", link: "/life-insurance" },
                                { label: "Term Insurance", link: "/term-insurance" },
                                { label: "Bike Insurance", link: "/bike-insurance" },
                                { label: "Business Insurance", link: "/business-insurance" },
                                { label: "Travel Insurance", link: "/travel-insurance" },
                            ]}
                            subMenu={{
                                label: "Health Insurance",
                                items: [
                                    { label: "Family Plans", link: "/health-insurance/family" },
                                    { label: "Senior Citizen", link: "/health-insurance/seniorcitizen" },
                                    { label: "For Parents", link: "/health-insurance/parents" },
                                    { label: "Women Insurance", link: "/health-insurance/women" },
                                    { label: "Children Insurance", link: "/health-insurance/children" },
                                    { label: "Premium Calculator", link: "/health-insurance/calculator" },
                                ],
                                isOpen: dropdowns.healthInsurance,
                                onMouseEnter: () => toggleDropdown("healthInsurance", true),
                                onMouseLeave: () => toggleDropdown("healthInsurance", false),
                            }}
                        />

                        {/* Insurance Advisory Dropdown */}
                        <DropdownMenu
                            label="Insurance Advisory"
                            isOpen={dropdowns.advisory}
                            onMouseEnter={() => toggleDropdown("advisory", true)}
                            onMouseLeave={() => toggleDropdown("advisory", false)}
                            menuItems={[
                                { label: "Insurance Tips", link: "#" },
                                { label: "Best Policies", link: "#" },
                                { label: "Claim Guidance", link: "#" },
                                { label: "FAQs", link: "#" },
                                { label: "Policy Comparison", link: "#" },
                            ]}
                        />

                        {/* Support Dropdown */}
                        <DropdownMenu
                            label="Support"
                            isOpen={dropdowns.support}
                            onMouseEnter={() => toggleDropdown("support", true)}
                            onMouseLeave={() => toggleDropdown("support", false)}
                            menuItems={[
                                { label: "Customer Support", link: "#" },
                                { label: "FAQ", link: "#" },
                                { label: "Contact Us", link: "#" },
                            ]}
                        />
                    </div>

                    {/* Authentication Section */}
                    <div className="lg:ml-auto flex items-center space-x-4">
                        {isAuthenticated ? (
                            <>
                                {/* Profile Picture */}
                                <Link to="/profile" className="flex items-center space-x-2">
                                    <img 
                                        src={profilePic} 
                                        alt="Profile" 
                                        className="w-10 h-10 rounded-full border"
                                    />
                                </Link>
                                <button onClick={handleLogout} className="text-white bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm px-4 py-2">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-gray-800 hover:bg-gray-50 font-medium rounded-lg text-sm px-4 py-2">
                                    Log in
                                </Link>
                                <Link to="/signup" className="text-white bg-green-300 hover:bg-green-400 font-medium rounded-lg text-sm px-4 py-2">
                                    Get started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

/* DropdownMenu Component */
function DropdownMenu({ label, isOpen, onMouseEnter, onMouseLeave, menuItems, subMenu }) {
    return (
        <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLink to="#" className="py-2 px-4 text-gray-700 hover:text-green-300">
                {label}
            </NavLink>
            {isOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border shadow-lg z-50">
                    <ul className="p-4 text-gray-700">
                        {subMenu && (
                            <li className="relative py-1 hover:bg-gray-100"
                                onMouseEnter={subMenu.onMouseEnter}
                                onMouseLeave={subMenu.onMouseLeave}>
                                <span className="flex items-center">
                                    {subMenu.label}
                                    <svg className="ml-1 w-4 h-4 text-gray-500" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                {subMenu.isOpen && (
                                    <div className="absolute top-0 left-full ml-2 w-72 bg-white border shadow-lg z-50">
                                        <ul className="p-4 text-gray-700">
                                            {subMenu.items.map((item, index) => (
                                                <NavLink key={index} to={item.link}>
                                                    <li className="py-1 hover:bg-gray-100">{item.label}</li>
                                                </NavLink>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        )}
                        {menuItems.map((item, index) => (
                            <NavLink key={index} to={item.link}>
                                <li className="py-1 hover:bg-gray-100">{item.label}</li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
