'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #420B20 0%, #600E2E 50%, #2D0B1F 100%)' }}
    >
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Süreyya Alper"
            width={120}
            height={120}
            className="mx-auto rounded-full shadow-lg border-4"
            style={{ borderColor: '#C4A447' }}
          />
        </div>

        <h1 
          className="text-6xl font-bold mb-4"
          style={{ color: '#C4A447' }}
        >
          404
        </h1>
        <h2 
          className="text-2xl font-semibold mb-4" 
          style={{ color: '#F5DEB3' }}
        >
          Sayfa Bulunamadı
        </h2>
        <p 
          className="mb-8 leading-relaxed" 
          style={{ color: '#E6D7C3' }}
        >
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
          dönerek sanatın güzelliklerini keşfetmeye devam edebilirsiniz.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #420B20, #600E2E)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #2A0714, #420B20)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #420B20, #600E2E)';
            }}
          >
            <svg
              className="w-5 h-5 mr-2"
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
          <p className="text-xs mt-1" style={{ color: '#E6D7C3' }}>- Süreyya Alper</p>
        </div>
      </div>
    </div>
  );
}
