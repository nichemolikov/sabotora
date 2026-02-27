import React from 'react';
import { Target, Users, MapPin, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-brand-light min-h-screen pt-12 pb-24">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
                    {t('about.title')}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    {t('about.subtitle')}
                </p>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-24">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            {t('about.mission.title')}
                            <Target className="ml-3 text-blue-600 w-8 h-8" />
                        </h2>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            {t('about.mission.p1')}
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {t('about.mission.p2')}
                        </p>
                    </div>

                    {/* Image Placeholder / Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-100 transform rotate-3 rounded-2xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Professional office environment"
                            className="relative rounded-2xl shadow-xl border border-gray-100"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex items-center">
                            <div className="bg-blue-100 p-3 rounded-full mr-4">
                                <MapPin className="text-blue-600 w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">{t('about.mission.hq_label')}</p>
                                <p className="font-bold text-brand-dark">{t('about.mission.hq_val')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values Section */}
                <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-gray-100">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">{t('about.values.title')}</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{t('about.values.subtitle')}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                <Users className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('about.values.c1_t')}</h3>
                            <p className="text-gray-600">{t('about.values.c1_d')}</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                                <Award className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('about.values.c2_t')}</h3>
                            <p className="text-gray-600">{t('about.values.c2_d')}</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                                <Target className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{t('about.values.c3_t')}</h3>
                            <p className="text-gray-600">{t('about.values.c3_d')}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
