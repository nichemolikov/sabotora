import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'consulting',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send to an API
        alert(t('contact.form.alert'));
        setFormData({ name: '', email: '', phone: '', service: 'consulting', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-brand-light min-h-screen pt-12 pb-24">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark tracking-tight mb-4">
                    {t('contact.title')}
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {t('contact.subtitle')}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Contact Information Cards */}
                    <div className="lg:col-span-1 space-y-6">

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start">
                            <div className="bg-blue-50 p-3 rounded-xl mr-5 text-blue-600">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.info.office')}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('contact.info.address1')}<br />
                                    {t('contact.info.address2')}<br />
                                    {t('contact.info.address3')}<br />
                                    {t('contact.info.address4')}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start">
                            <div className="bg-green-50 p-3 rounded-xl mr-5 text-green-600">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.info.hours')}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t('contact.info.hours_wk')}<br />
                                    {t('contact.info.hours_time')}
                                </p>
                                <p className="text-sm text-gray-500 mt-2 italic">{t('contact.info.hours_note')}</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start">
                            <div className="bg-indigo-50 p-3 rounded-xl mr-5 text-indigo-600">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('contact.info.direct')}</h3>
                                <p className="text-gray-600 leading-relaxed flex items-center mb-1">
                                    <strong className="mr-2">{t('contact.info.tel')}</strong> +359 XX XXX XXXX
                                </p>
                                <p className="text-gray-600 leading-relaxed flex items-center">
                                    <strong className="mr-2">{t('contact.info.email')}</strong> <a href="mailto:office@sabotora.com" className="text-blue-600 hover:underline">office@sabotora.com</a>
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 -m-20 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

                            <h2 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">{t('contact.form.title')}</h2>
                            <p className="text-gray-600 mb-8 relative z-10 line-clamp-2">
                                {t('contact.form.desc')}
                            </p>

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.name')}</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                            placeholder={t('contact.form.name_ph')}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                            placeholder={t('contact.form.email_ph')}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.phone')}</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                            placeholder="+359..."
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.service')}</label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                                        >
                                            <option value="consulting">{t('contact.form.sv_c')}</option>
                                            <option value="translation">{t('contact.form.sv_t')}</option>
                                            <option value="both">{t('contact.form.sv_b')}</option>
                                            <option value="general">{t('contact.form.sv_g')}</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.msg')}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                                        placeholder={t('contact.form.msg_ph')}
                                    ></textarea>
                                </div>

                                <div className="flex items-start mb-6">
                                    <div className="flex items-center h-5">
                                        <input id="gdpr" name="gdpr" type="checkbox" required className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="gdpr" className="text-gray-500 cursor-pointer">
                                            {t('contact.form.gdpr')}
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-brand-dark hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark transition-colors shadow-lg"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    {t('contact.form.btn')}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
