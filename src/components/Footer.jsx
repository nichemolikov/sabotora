import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-brand-dark text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold text-white mb-4 block">Sabotora</span>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                            {t('footer.brand_desc')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{t('footer.ql_title')}</h3>
                        <ul className="space-y-2">
                            <li><NavLink to="/about" className="text-sm hover:text-white transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-blue-500" /> {t('navbar.about')}</NavLink></li>
                            <li><NavLink to="/services/consulting" className="text-sm hover:text-white transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-blue-500" /> {t('navbar.consulting')}</NavLink></li>
                            <li><NavLink to="/services/translation" className="text-sm hover:text-white transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-blue-500" /> {t('navbar.translation')}</NavLink></li>
                            <li><NavLink to="/why-choose-us" className="text-sm hover:text-white transition-colors flex items-center"><ChevronRight className="w-4 h-4 mr-1 text-blue-500" /> {t('navbar.why_sabotora')}</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{t('footer.contact_title')}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                                <span className="text-sm whitespace-pre-line">
                                    {t('footer.address')}
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3" />
                                <span className="text-sm">+359 88 123 4567</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3" />
                                <span className="text-sm">info@sabotora.com</span>
                            </li>
                        </ul>
                        <div className="mt-6 text-xs text-gray-500">
                            <p>{t('footer.hours')}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        {t('footer.copy').replace('{{year}}', new Date().getFullYear())}
                    </p>
                    <div className="mt-4 md:mt-0">
                        <p className="text-xs text-gray-500 text-center md:text-right" dangerouslySetInnerHTML={{ __html: t('footer.disclaimer') }}>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
