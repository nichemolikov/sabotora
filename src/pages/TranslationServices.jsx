import React from 'react';
import { Globe, FileText, CheckCircle2, Lock, FileSignature } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TranslationServices = () => {
    const { t } = useTranslation();

    const languages = [
        t('translation.languages.en'),
        t('translation.languages.bg'),
        t('translation.languages.tr'),
        t('translation.languages.de')
    ];

    const documentTypes = [
        {
            title: t('translation.docs.t1'),
            icon: <FileSignature className="w-6 h-6 text-blue-600" />,
            items: [t('translation.docs.t1_1'), t('translation.docs.t1_2'), t('translation.docs.t1_3'), t('translation.docs.t1_4')]
        },
        {
            title: t('translation.docs.t2'),
            icon: <FileText className="w-6 h-6 text-indigo-600" />,
            items: [t('translation.docs.t2_1'), t('translation.docs.t2_2'), t('translation.docs.t2_3'), t('translation.docs.t2_4')]
        }
    ];

    return (
        <div className="bg-brand-light min-h-screen pt-12 pb-24">
            {/* Header */}
            <div className="bg-brand-dark py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden mb-16">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-brand-dark to-brand-dark"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Globe className="w-12 h-12 text-indigo-500 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                        {t('translation.hero.title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('translation.hero.subtitle')}
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Quality Assurance & Compliance */}
                <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('translation.qa.title')}</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                {t('translation.qa.p1')}
                            </p>
                            <ul className="space-y-4 text-left inline-block w-full sm:w-auto">
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{t('translation.qa.li1')}</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{t('translation.qa.li2')}</span>
                                </li>
                                <li className="flex items-start">
                                    <Lock className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{t('translation.qa.li3')}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-indigo-50 rounded-2xl p-6 sm:p-8 border border-indigo-100 flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-indigo-900 mb-6 text-center sm:text-left">{t('translation.qa.sup_title')}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                                {languages.map((lang, index) => (
                                    <div key={index} className="flex items-center text-indigo-800 font-medium bg-white px-4 py-3 sm:px-3 sm:py-2 rounded-lg shadow-sm">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-3 sm:mr-2 flex-shrink-0"></div>
                                        <span className="break-words">{lang}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-sm text-indigo-600 font-medium italic text-center sm:text-left">
                                {t('translation.qa.disclaimer')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Document Types */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('translation.docs.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {documentTypes.map((type, index) => (
                            <div key={index} className="glass p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 text-center sm:text-left flex flex-col sm:block items-center">
                                <div className="flex flex-col sm:flex-row items-center mb-6">
                                    <div className={`p-3 rounded-xl mb-4 sm:mb-0 sm:mr-4 flex-shrink-0 ${index === 0 ? 'bg-blue-100' : 'bg-indigo-100'}`}>
                                        {type.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                                </div>
                                <ul className="space-y-3 w-full text-left">
                                    {type.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start text-gray-700 bg-white p-3 rounded-lg border border-gray-100">
                                            <ChevronRight className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0 mt-1" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certification Notice */}
                <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100 text-center max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">{t('translation.cert.title')}</h3>
                    <p className="text-orange-800">
                        {t('translation.cert.desc')}
                    </p>
                    <div className="mt-6">
                        <NavLink to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 shadow-sm transition-colors">
                            {t('translation.cert.btn')}
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Helper icon component to avoid importing another one just for a list if not needed, or just import it at top
const ChevronRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="9 18 15 12 9 6" />
    </svg>
)

export default TranslationServices;
