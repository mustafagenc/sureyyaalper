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
                        className="mx-auto mb-4 h-20 w-20 animate-spin rounded-full border-4"
                        style={{
                            borderColor: 'rgba(212, 175, 55, 0.3)',
                            borderTopColor: '#C4A447',
                        }}
                    ></div>

                    {/* Pulsing dot in center */}
                    <div className="absolute top-1/2 left-1/2 -mt-4 -translate-x-1/2 -translate-y-1/2 transform">
                        <div
                            className="h-3 w-3 animate-pulse rounded-full"
                            style={{ backgroundColor: '#C4A447' }}
                        ></div>
                    </div>
                </div>

                <h2 className="mb-2 text-xl font-semibold" style={{ color: '#F5DEB3' }}>
                    Süreyya Alper
                </h2>
                <p style={{ color: '#E6D7C3' }}>Yükleniyor...</p>
            </div>
        </div>
    );
}
