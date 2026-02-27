import React from 'react';
import { Shield, Target, Award, Handshake, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-brand-light min-h-screen pt-12 pb-24">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-6">
                    {t('why.hero.title')}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('why.hero.subtitle')}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Core Differentiation Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group text-center md:text-left">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-50 opacity-40 md:opacity-0 pointer-events-none transition-opacity">
                            <Shield className="w-40 h-40" />
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 hidden md:block"></div>
                        <div className="flex justify-center md:justify-start">
                            <Shield className="w-10 h-10 text-blue-600 mb-6 relative z-10" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{t('why.cards.c1_t')}</h3>
                        <p className="text-gray-600 relative z-10">
                            {t('why.cards.c1_d')}
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group text-center md:text-left">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-50 opacity-40 md:opacity-0 pointer-events-none transition-opacity">
                            <Award className="w-40 h-40" />
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 hidden md:block"></div>
                        <div className="flex justify-center md:justify-start">
                            <Award className="w-10 h-10 text-indigo-600 mb-6 relative z-10" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{t('why.cards.c2_t')}</h3>
                        <p className="text-gray-600 relative z-10">
                            {t('why.cards.c2_d')}
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group text-center md:text-left">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-50 opacity-40 md:opacity-0 pointer-events-none transition-opacity">
                            <Target className="w-40 h-40" />
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 hidden md:block"></div>
                        <div className="flex justify-center md:justify-start">
                            <Target className="w-10 h-10 text-green-600 mb-6 relative z-10" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{t('why.cards.c3_t')}</h3>
                        <p className="text-gray-600 relative z-10">
                            {t('why.cards.c3_d')}
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group text-center md:text-left">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-50 opacity-40 md:opacity-0 pointer-events-none transition-opacity">
                            <Handshake className="w-40 h-40" />
                        </div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110 hidden md:block"></div>
                        <div className="flex justify-center md:justify-start">
                            <Handshake className="w-10 h-10 text-purple-600 mb-6 relative z-10" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{t('why.cards.c4_t')}</h3>
                        <p className="text-gray-600 relative z-10">
                            {t('why.cards.c4_d')}
                        </p>
                    </div>
                </div>

                {/* The Reality Check Section */}
                <div className="bg-brand-dark rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative border border-gray-800">
                    <div className="absolute opacity-10 top-0 left-0 w-full h-full" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-2/3 mb-10 md:mb-0">
                            <h2 className="text-3xl font-bold text-white mb-6">{t('why.reality.title')}</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                {t('why.reality.desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center text-white">
                                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                                    <span>{t('why.reality.li1')}</span>
                                </div>
                                <div className="flex items-center text-white">
                                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                                    <span>{t('why.reality.li2')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 flex justify-center md:justify-end">
                            <div className="w-48 h-48 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-full flex items-center justify-center p-2 shadow-2xl shadow-blue-900/50">
                                <div className="w-full h-full border-4 border-white/20 rounded-full flex items-center justify-center relative">
                                    <div className="text-white text-center">
                                        <span className="block text-4xl font-black">100%</span>
                                        <span className="block text-sm uppercase tracking-widest font-bold mt-1">{t('why.reality.badge2')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WhyChooseUs;
