import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <Image 
            src="/logo.png" 
            alt="Süreyya Alper" 
            width={120} 
            height={120} 
            className="mx-auto rounded-full shadow-lg"
          />
        </div>
        
        <h1 className="text-6xl font-bold text-amber-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-amber-900 mb-4">Sayfa Bulunamadı</h2>
        <p className="text-amber-700 mb-8 leading-relaxed">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
          Ana sayfaya dönerek sanatın güzelliklerini keşfetmeye devam edebilirsiniz.
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-amber-600 text-sm">
            "Sanat, hayatın güzelliklerini keşfetme yolculuğudur."
          </p>
          <p className="text-amber-500 text-xs mt-1">- Süreyya Alper</p>
        </div>
      </div>
    </div>
  );
}
