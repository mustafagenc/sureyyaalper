export default function Loading() {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #420B20 0%, #600E2E 50%, #2D0B1F 100%)' }}
    >
      <div className="text-center">
        <div className="relative">
          {/* Animated circles */}
          <div 
            className="w-20 h-20 border-4 rounded-full animate-spin mx-auto mb-4"
            style={{ 
              borderColor: 'rgba(212, 175, 55, 0.3)',
              borderTopColor: '#C4A447'
            }}
          ></div>
          
          {/* Pulsing dot in center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-4">
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: '#C4A447' }}
            ></div>
          </div>
        </div>
        
        <h2 
          className="text-xl font-semibold mb-2"
          style={{ color: '#F5DEB3' }}
        >
          Süreyya Alper
        </h2>
        <p style={{ color: '#E6D7C3' }}>Yükleniyor...</p>
      </div>
    </div>
  );
}
