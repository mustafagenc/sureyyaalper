export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="text-center">
        <div className="relative">
          {/* Animated circles */}
          <div className="w-20 h-20 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin mx-auto mb-4"></div>
          
          {/* Pulsing dot in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-4">
            <div className="w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-amber-900 mb-2">Süreyya Alper</h2>
        <p className="text-amber-700">Yükleniyor...</p>
      </div>
    </div>
  );
}
