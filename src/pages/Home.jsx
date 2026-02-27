import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FlipWords } from '../components/ui/flip-words';

const Home = () => {
    const { t } = useTranslation();

    const words = [
        t('home.hero.words.w1'),
        t('home.hero.words.w2'),
        t('home.hero.words.w3'),
        t('home.hero.words.w4'),
    ];

    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero Section */}
            <section className="relative bg-brand-light overflow-hidden pt-20 pb-32">
                <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] opacity-100"></div>
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 mb-6 border border-blue-200 shadow-sm">
                        <ShieldCheck className="w-4 h-4 mr-2" />
                        {t('home.hero.badge')}
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-dark mb-6 leading-tight">
                        {t('home.hero.title1')} <br className="hidden md:block" />

                        <div className="mt-2 min-h-[1.5em] flex flex-wrap justify-center items-center gap-x-2">
                            <FlipWords words={words} className="text-blue-600 font-extrabold" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                                {t('home.hero.title_end')}
                            </span>
                        </div>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
                        {t('home.hero.desc')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <NavLink to="/services/consulting" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all">
                            {t('home.hero.btn_consult')}
                        </NavLink>
                        <NavLink to="/services/translation" className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all">
                            {t('home.hero.btn_trans')}
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.services.title')}</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t('home.services.desc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Consulting Card */}
                        <div className="glass p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-200 group text-center md:text-left flex flex-col items-center md:items-start">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.services.c_title')}</h3>
                            <p className="text-gray-600 mb-6 line-clamp-3">
                                {t('home.services.c_desc')}
                            </p>
                            <ul className="mb-8 space-y-3 w-full max-w-xs mx-auto md:mx-0 text-left">
                                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> <span>{t('home.services.c_li1')}</span></li>
                                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> <span>{t('home.services.c_li2')}</span></li>
                                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> <span>{t('home.services.c_li3')}</span></li>
                            </ul>
                            <NavLink to="/services/consulting" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors mt-auto">
                                {t('home.services.c_link')} <ArrowRight className="ml-1 w-4 h-4" />
                            </NavLink>
                        </div>

                        {/* Translation Card */}
                        <div className="glass p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-200 group text-center md:text-left flex flex-col items-center md:items-start">
                            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
                                <Globe className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('home.services.t_title')}</h3>
                            <p className="text-gray-600 mb-6 line-clamp-3">
                                {t('home.services.t_desc')}
                            </p>
                            <ul className="mb-8 space-y-3 w-full max-w-xs mx-auto md:mx-0 text-left">
                                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> <span>{t('home.services.t_li1')}</span></li>
                                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> <span>{t('home.services.t_li2')}</span></li>
                                <li className="flex items-center text-gray-700"><CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" /> <span>{t('home.services.t_li3')}</span></li>
                            </ul>
                            <NavLink to="/services/translation" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors mt-auto">
                                {t('home.services.t_link')} <ArrowRight className="ml-1 w-4 h-4" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="py-20 bg-brand-light relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-brand-dark to-[#1e293b] rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-3xl md:w-96 md:h-96"></div>

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    {t('home.promise.title')}
                                </h2>
                                <p className="text-blue-100 mb-8 text-lg">
                                    {t('home.promise.desc')}
                                </p>
                                <NavLink to="/why-choose-us" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-brand-dark bg-white hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
                                    {t('home.promise.btn')}
                                </NavLink>
                            </div>
                            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2">
                                <div className="glass-dark p-6 rounded-xl">
                                    <h4 className="text-white font-bold text-xl mb-2">{t('home.promise.acc_t')}</h4>
                                    <p className="text-gray-400 text-sm">{t('home.promise.acc_d')}</p>
                                </div>
                                <div className="glass-dark p-6 rounded-xl">
                                    <h4 className="text-white font-bold text-xl mb-2">{t('home.promise.conf_t')}</h4>
                                    <p className="text-gray-400 text-sm">{t('home.promise.conf_d')}</p>
                                </div>
                                <div className="glass-dark p-6 rounded-xl">
                                    <h4 className="text-white font-bold text-xl mb-2">{t('home.promise.loc_t')}</h4>
                                    <p className="text-gray-400 text-sm">{t('home.promise.loc_d')}</p>
                                </div>
                                <div className="glass-dark p-6 rounded-xl">
                                    <h4 className="text-white font-bold text-xl mb-2">{t('home.promise.prof_t')}</h4>
                                    <p className="text-gray-400 text-sm">{t('home.promise.prof_d')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
