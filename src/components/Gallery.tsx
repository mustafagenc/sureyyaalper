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
        title: 'Modern Yorum',
        description: 'Çağdaş yaklaşımla klasik müzehhiplik',
    },
    {
        id: 4,
        src: '/eserler/sureyya-alper-4.jpg',
        alt: 'Süreyya Alper Eseri 4',
        title: 'Rumi Motifler',
        description: 'Geleneksel rumi desenlerle süsleme',
    },
    {
        id: 5,
        src: '/eserler/sureyya-alper-5.jpg',
        alt: 'Süreyya Alper Eseri 5',
        title: 'Çini Desenli Tezhip',
        description: 'Çini sanatından ilhamlı müzehhiplik çalışması',
    },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    const openModal = (item: GalleryItem) => {
        setSelectedImage(item);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        if (!selectedImage) return;
        const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % galleryItems.length;
        setSelectedImage(galleryItems[nextIndex]);
    };

    const prevImage = () => {
        if (!selectedImage) return;
        const currentIndex = galleryItems.findIndex((item) => item.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        setSelectedImage(galleryItems[prevIndex]);
    };

    return (
        <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl"
                        onClick={() => openModal(item)}
                    >
                        <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-amber-100 to-orange-100">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={400}
                                height={500}
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <div className="absolute right-4 bottom-4 left-4">
                                <h3 className="mb-1 text-lg font-semibold text-white">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-white/80">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <div className="relative max-h-full max-w-4xl">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
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
                        <div className="relative">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                width={800}
                                height={1000}
                                className="max-h-[80vh] rounded-lg object-contain"
                            />

                            {/* Image info */}
                            <div className="absolute right-0 bottom-0 left-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent p-6">
                                <h3 className="mb-2 text-xl font-bold text-white">
                                    {selectedImage.title}
                                </h3>
                                <p className="text-white/90">{selectedImage.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
