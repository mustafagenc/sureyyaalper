'use client';

import Image from 'next/image';
import { useState } from 'react';

interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
}

const galleryItems: GalleryItem[] = [
    {
        id: 1,
        src: '/eserler/sureyya-alper-1.jpg',
        alt: 'Süreyya Alper Eseri 1',
        title: 'Klasik Tezhip Çalışması',
        description: 'Geleneksel motiflerle süslenmiş müzehhiplik eseri',
    },
    {
        id: 2,
        src: '/eserler/sureyya-alper-2.jpg',
        alt: 'Süreyya Alper Eseri 2',
        title: 'Altın Varak Sanatı',
        description: 'Altın varak ile zenginleştirilmiş tezhip çalışması',
    },
    {
        id: 3,
        src: '/eserler/sureyya-alper-3.jpg',
        alt: 'Süreyya Alper Eseri 3',
        title: 'Modern Yorumlu Tezhip',
        description: 'Çağdaş tasarım unsurlarıyla harmanlanan geleneksel sanat',
    },
    {
        id: 4,
        src: '/eserler/sureyya-alper-4.jpg',
        alt: 'Süreyya Alper Eseri 4',
        title: 'Renkli Müzehhiplik',
        description: 'Canlı renklerle hayat bulan müzehhiplik çalışması',
    },
    {
        id: 5,
        src: '/eserler/sureyya-alper-5.jpg',
        alt: 'Süreyya Alper Eseri 5',
        title: 'İncelik ve Zarafet',
        description: 'Detay odaklı işçilikle ortaya çıkan sanat eseri',
    },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedImage(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % galleryItems.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {galleryItems.map((item, index) => (
                    <div
                        key={item.id}
                        className="group cursor-pointer overflow-hidden rounded-2xl bg-black/20 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        onClick={() => openModal(index)}
                    >
                        <div className="aspect-square overflow-hidden">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={400}
                                height={400}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="mb-2 text-xl font-semibold" style={{ color: '#C4A447' }}>
                                {item.title}
                            </h3>
                            <p className="text-sm leading-relaxed" style={{ color: '#E6D7C3' }}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-h-full max-w-4xl">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Previous button */}
                        <button
                            onClick={prevImage}
                            className="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
                        >
                            <svg
                                className="h-6 w-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>

                        {/* Next button */}
                        <button
                            onClick={nextImage}
                            className="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
                        >
                            <svg
                                className="h-6 w-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>

                        {/* Image */}
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={galleryItems[selectedImage].src}
                                alt={galleryItems[selectedImage].alt}
                                width={800}
                                height={600}
                                className="max-h-[80vh] w-full rounded-lg object-contain"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="mb-2 text-xl font-semibold text-white">
                                    {galleryItems[selectedImage].title}
                                </h3>
                                <p className="text-sm text-gray-300">
                                    {galleryItems[selectedImage].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
