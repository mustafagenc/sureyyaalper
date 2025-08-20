'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
    return (
        <div
            className="flex min-h-screen items-center justify-center px-4"
            style={{ background: 'linear-gradient(135deg, #420B20 0%, #600E2E 50%, #2D0B1F 100%)' }}
        >
            <div className="max-w-lg text-center">
                <div className="mb-8">
                    <Image
                        src="/logo.png"
                        alt="Süreyya Alper"
                        width={120}
                        height={120}
                        className="mx-auto rounded-full border-4 shadow-lg"
                        style={{ borderColor: '#C4A447' }}
                    />
                </div>

                <h1 className="mb-4 text-6xl font-bold" style={{ color: '#C4A447' }}>
                    404
                </h1>
                <h2 className="mb-4 text-2xl font-semibold" style={{ color: '#F5DEB3' }}>
                    Sayfa Bulunamadı
                </h2>
                <p className="mb-8 leading-relaxed" style={{ color: '#E6D7C3' }}>
                    Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönerek
                    sanatın güzelliklerini keşfetmeye devam edebilirsiniz.
                </p>

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-lg border border-transparent px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                        style={{
                            background: 'linear-gradient(135deg, #420B20, #600E2E)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                                'linear-gradient(135deg, #2A0714, #420B20)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                                'linear-gradient(135deg, #420B20, #600E2E)';
                        }}
                    >
                        <svg
                            className="mr-2 h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        Ana Sayfaya Dön
                    </Link>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-sm" style={{ color: '#C4A447' }}>
                        &quot;Sanat, hayatın güzelliklerini keşfetme yolculuğudur.&quot;
                    </p>
                    <p className="mt-1 text-xs" style={{ color: '#E6D7C3' }}>
                        - Süreyya Alper
                    </p>
                </div>
            </div>
        </div>
    );
}
