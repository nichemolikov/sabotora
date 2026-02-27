import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const changeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    const navLinks = [
        { name: t('navbar.home'), path: '/' },
        { name: t('navbar.about'), path: '/about' },
        { name: t('navbar.consulting'), path: '/services/consulting' },
        { name: t('navbar.translation'), path: '/services/translation' },
        { name: t('navbar.why_sabotora'), path: '/why-choose-us' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 glass border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <NavLink to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                            Sabotora
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-700 font-semibold' : 'text-gray-600'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex items-center space-x-1 text-gray-600 ml-4 border-l pl-4 border-gray-300">
                            <Globe className="w-4 h-4" />
                            <select
                                value={i18n.language}
                                onChange={changeLanguage}
                                className="bg-transparent border-none text-sm font-medium focus:ring-0 cursor-pointer outline-none"
                            >
                                <option value="bg">BG</option>
                                <option value="en">EN</option>
                                <option value="de">DE</option>
                                <option value="tr">TR</option>
                            </select>
                        </div>

                        {/* CTA Button */}
                        <NavLink
                            to="/contact"
                            className="ml-4 inline-flex items-center justify-center px-6 py-2.5 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                            {t('navbar.contact')}
                        </NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass border-b border-gray-200 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="mt-4 border-t border-gray-200 pt-4 px-3 flex flex-col space-y-2">
                            <div className="flex items-center justify-between text-gray-700 font-medium">
                                <span className="flex items-center"><Globe className="w-5 h-5 mr-2" /> {t('footer.lang') || "Language"}</span>
                                <select
                                    value={i18n.language}
                                    onChange={changeLanguage}
                                    className="bg-gray-50 border border-gray-300 rounded-md text-base focus:ring-blue-500 cursor-pointer outline-none py-1 pl-3 pr-8"
                                >
                                    <option value="bg">Bulgarian</option>
                                    <option value="en">English</option>
                                    <option value="de">German</option>
                                    <option value="tr">Turkish</option>
                                </select>
                            </div>
                        </div>
                        <NavLink
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center mt-4 px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                        >
                            {t('navbar.contact')}
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
