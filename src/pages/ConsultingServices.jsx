import React from 'react';
import { Briefcase, CheckCircle2, TrendingUp, BookOpen, ShieldCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ConsultingServices = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-brand-light min-h-screen pt-12 pb-24">
            {/* Header */}
            <div className="bg-brand-dark py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden mb-16">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-dark to-brand-dark"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Briefcase className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                        {t('consulting.hero.title')}
                    </h1>
                    <p className="text-xl text-gray-300">
                        {t('consulting.hero.subtitle')}
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Areas of Expertise */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">{t('consulting.areas.title')}</h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                            {t('consulting.areas.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Area 1 */}
                        <div className="glass p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start group hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('consulting.areas.a1_t')}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('consulting.areas.a1_d')}
                                </p>
                            </div>
                        </div>

                        {/* Area 2 */}
                        <div className="glass p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start group hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('consulting.areas.a2_t')}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('consulting.areas.a2_d')}
                                </p>
                            </div>
                        </div>

                        {/* Area 3 */}
                        <div className="glass p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start group hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('consulting.areas.a3_t')}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('consulting.areas.a3_d')}
                                </p>
                            </div>
                        </div>

                        {/* Area 4 */}
                        <div className="glass p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start group hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 mr-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                                    <Briefcase className="w-6 h-6" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t('consulting.areas.a4_t')}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('consulting.areas.a4_d')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Process */}
                <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-gray-100">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">{t('consulting.process.title')}</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl text-lg">{t('consulting.process.subtitle')}</p>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">

                        {/* Process Step 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                1
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border border-gray-100 shadow-sm ml-4 md:ml-0 md:group-even:pr-8 md:group-odd:pl-8">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">{t('consulting.process.s1_t')}</h4>
                                <p className="text-gray-600">{t('consulting.process.s1_d')}</p>
                            </div>
                        </div>

                        {/* Process Step 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                2
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border border-gray-100 shadow-sm ml-4 md:ml-0 md:group-even:pr-8 md:group-odd:pl-8">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">{t('consulting.process.s2_t')}</h4>
                                <p className="text-gray-600">{t('consulting.process.s2_d')}</p>
                            </div>
                        </div>

                        {/* Process Step 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                3
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border border-gray-100 shadow-sm ml-4 md:ml-0 md:group-even:pr-8 md:group-odd:pl-8">
                                <h4 className="font-bold text-lg text-gray-900 mb-2">{t('consulting.process.s3_t')}</h4>
                                <p className="text-gray-600">{t('consulting.process.s3_d')}</p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-16 text-center">
                        <NavLink to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors">
                            {t('consulting.process.btn')}
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ConsultingServices;
