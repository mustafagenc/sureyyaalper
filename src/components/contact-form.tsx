'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Burada gerçek form gönderim logic'i olacak
            // Şimdilik simulate ediyoruz
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }

        // 3 saniye sonra status'u reset et
        setTimeout(() => setSubmitStatus('idle'), 3000);
    };

    return (
        <div
            className="rounded-2xl p-8 shadow-md"
            style={{
                backgroundColor: 'rgba(96, 14, 46, 0.8)',
                backdropFilter: 'blur(4px)',
            }}
        >
            {submitStatus === 'success' && (
                <div
                    className="mb-6 rounded-lg border p-4"
                    style={{
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        borderColor: '#C4A447',
                    }}
                >
                    <p style={{ color: '#C4A447' }}>
                        Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapılacaktır.
                    </p>
                </div>
            )}

            {submitStatus === 'error' && (
                <div
                    className="mb-6 rounded-lg border p-4"
                    style={{
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        borderColor: '#EF4444',
                    }}
                >
                    <p style={{ color: '#EF4444' }}>
                        Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                    </p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                        style={{ color: '#C4A447' }}
                    >
                        Adınız Soyadınız *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-3 text-white placeholder-gray-300 transition-colors focus:ring-2"
                        style={
                            {
                                backgroundColor: 'rgba(96, 14, 46, 0.9)',
                                borderColor: 'rgba(212, 175, 55, 0.5)',
                                borderWidth: '1px',
                                '--tw-ring-color': '#C4A447',
                            } as React.CSSProperties
                        }
                        placeholder="Adınız ve soyadınız"
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                        style={{ color: '#C4A447' }}
                    >
                        E-posta Adresiniz *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border px-4 py-3 text-white placeholder-gray-300 transition-colors focus:ring-2"
                        style={
                            {
                                backgroundColor: 'rgba(96, 14, 46, 0.9)',
                                borderColor: 'rgba(212, 175, 55, 0.5)',
                                borderWidth: '1px',
                                '--tw-ring-color': '#C4A447',
                            } as React.CSSProperties
                        }
                        placeholder="ornek@email.com"
                        disabled={isSubmitting}
                    />
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium"
                        style={{ color: '#C4A447' }}
                    >
                        Mesajınız *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-lg border px-4 py-3 text-white placeholder-gray-300 transition-colors focus:ring-2"
                        style={
                            {
                                backgroundColor: 'rgba(96, 14, 46, 0.9)',
                                borderColor: 'rgba(212, 175, 55, 0.5)',
                                borderWidth: '1px',
                                '--tw-ring-color': '#C4A447',
                            } as React.CSSProperties
                        }
                        placeholder="Mesajınızı buraya yazın..."
                        disabled={isSubmitting}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
                    style={{
                        background: 'linear-gradient(135deg, #420B20, #600E2E)',
                        borderColor: '#C4A447',
                    }}
                    onMouseEnter={(e) => {
                        if (!isSubmitting) {
                            e.currentTarget.style.background =
                                'linear-gradient(135deg, #2A0714, #420B20)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!isSubmitting) {
                            e.currentTarget.style.background =
                                'linear-gradient(135deg, #420B20, #600E2E)';
                        }
                    }}
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <svg
                                className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Gönderiliyor...
                        </div>
                    ) : (
                        'Mesaj Gönder'
                    )}
                </button>
            </form>
        </div>
    );
}
