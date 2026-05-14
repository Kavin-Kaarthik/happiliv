'use client';

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Contents from "./Contents";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import api from "../../../../lib/axios";
import Lottie from "lottie-react";
import animationData from "../../../../public/no data/No Data Animation.json";
type GalleryImage = {
    id: number;
    image: string;
    name: string;
    tag: { name: string; id: number };
};

type Category = {
    id: number;
    name: string;
};

const gridContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
};

const gridItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.25 },
    },
};
function GallerySkeleton({ count = 8 }: { count?: number }) {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={`skeleton-${i}`}   // ✅ unique string key
                    className="relative h-[180px] rounded-2xl overflow-hidden bg-gray-200 animate-pulse"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
                </div>
            ))}
        </>
    );
}



export default function GalleryList() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [activeTabId, setActiveTabId] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [isFetchingMore, setIsFetchingMore] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    /* 🔹 Modal Controls */
    const openModal = (index: number) => {
        setActiveIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const nextImage = () => {
        setActiveIndex((prev) =>
            images.length ? (prev + 1) % images.length : 0
        );
    };

    const prevImage = () => {
        setActiveIndex((prev) =>
            images.length
                ? (prev - 1 + images.length) % images.length
                : 0
        );
    };

    /* 🔹 ESC + Arrow keys */
    useEffect(() => {
        if (!isModalOpen) return;

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isModalOpen, images.length]);


    /* 🔹 Fetch categories */
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await api.get('/gallery/image/showallimage?page=1&limit=1');
                const cats = res.data?.data?.categories || [];
                setCategories(cats);
            } catch (error) {
                console.log("Failed to fetch categories:", error);
            }
        };
        fetchCategories();
    }, []);



    /* 🔹 Fetch images */
    useEffect(() => {
        const fetchImages = async () => {
            try {
                currentPage === 1 ? setIsInitialLoading(true) : setIsFetchingMore(true);

                const tagParam = activeTabId ? `&tagId=${activeTabId}` : '';
                const res = await api.get(`/gallery/image/showallimage?page=${currentPage}&limit=12${tagParam}`);
                const payload = res.data;

                const fetchedImages: GalleryImage[] = payload?.data?.images || [];

                setImages((prev) =>
                    currentPage === 1 ? fetchedImages : [...prev, ...fetchedImages]
                );

                setTotalPages(payload?.totalPages || 1);
                setTotalCount(payload?.totalCount || 0);

            } catch (error) {
                console.log("Failed to fetch images:", error);
            } finally {
                setIsInitialLoading(false);
                setIsFetchingMore(false);
            }
        };

        fetchImages();
    }, [currentPage, activeTabId]);


    const showNoData = !isInitialLoading && images.length === 0;

    const handleTabClick = (categoryId: number | null) => {
        if (activeTabId === categoryId) return;
        setActiveTabId(categoryId);
        setCurrentPage(1);
    };


    return (
        <section className="relative bg-[url('/gallery/bg.png')] bg-cover bg-center md:py-20 bg-no-repeat min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-16">

                {/* Heading */}
                <motion.div
                    className="max-w-xl mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold mb-3">
                        Life at <span className="text-[#EE1C4C]">HappiLiv</span>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Every image captures a moment — friendships formed, stories shared, and memories made.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 mb-20 justify-center">
                    <motion.button
                        layout
                        key="all"
                        onClick={() => handleTabClick(null)}
                        className={`px-6 py-2 rounded-full text-sm font-medium border transition capitalize cursor-pointer
                            ${activeTabId === null
                                ? "bg-[#EE1C4C] text-white border-[#EE1C4C]"
                                : "bg-white text-gray-700 border-[#EE1C4C]/40 hover:bg-[#EE1C4C]/10"
                            }`}
                    >
                        All Photos
                    </motion.button>
                    {categories.map(cat => (
                        <motion.button
                            layout
                            key={cat.id}
                            onClick={() => handleTabClick(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm font-medium border transition capitalize cursor-pointer
                                ${activeTabId === cat.id
                                    ? "bg-[#EE1C4C] text-white border-[#EE1C4C]"
                                    : "bg-white text-gray-700 border-[#EE1C4C]/40 hover:bg-[#EE1C4C]/10"
                                }`}
                        >
                            {cat.name}
                        </motion.button>
                    ))}
                </div>
                {showNoData ? (

                    /* ✅ Separate Section Lottie */
                    <div className="flex justify-center items-center py-20 h-[350px]">
                        <div className="w-full max-w-[450px]">
                            <Lottie
                                animationData={animationData}
                                loop
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                ) : (

                    <>
                        {/* Gallery Grid */}
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[400px]"
                            variants={gridContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            <AnimatePresence mode="popLayout">

                                {isInitialLoading && <GallerySkeleton count={8} />}

                                {!isInitialLoading &&
                                    images.map((img, index) => (
                                        <motion.button
                                            type="button"
                                            onClick={() => openModal(index)}
                                            key={`image-${img.id}`}
                                            variants={gridItem}
                                            layout
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="relative overflow-hidden rounded-2xl group h-[180px] w-full text-left"
                                        >
                                            <Image
                                                src={img.image}
                                                alt={img.name}
                                                fill
                                                sizes="(max-width: 768px) 50vw, 33vw"
                                                
                                                className="object-cover group-hover:scale-105 transition duration-300"
                                            />

                                            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/40 text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                                                {img.name}
                                            </div>
                                        </motion.button>

                                    ))}

                                {isFetchingMore && <GallerySkeleton count={4} />}

                            </AnimatePresence>
                        </motion.div>

                        {/* Load More Button */}
                        {!isInitialLoading && currentPage < totalPages && (
                            <div className="flex justify-center mt-12">
                                <button
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                    disabled={isFetchingMore}
                                    className="px-8 py-3 rounded-full bg-[#EE1C4C] text-white font-medium hover:bg-[#d91845] transition disabled:opacity-50"
                                >
                                    {isFetchingMore ? "Loading..." : "Load More"}
                                </button>
                            </div>
                        )}
                    </>

                )}

            </div>
            <Contents />
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[99999] bg-black/90 flex items-center justify-center p-4"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* CLOSE */}
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-white text-3xl z-50 hover:scale-110 transition"
                            >
                                ✕
                            </button>

                            {/* PREV */}
                            <button
                                onClick={prevImage}
                                className="absolute left-2 sm:left-4 text-white text-5xl z-50 hover:scale-110 transition"
                            >
                                ‹
                            </button>

                            {/* IMAGE */}
                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                <Image
                                    src={images[activeIndex]?.image}
                                    alt={images[activeIndex]?.name || "Preview"}
                                    fill
                                    className="object-contain"
                                    
                                />
                            </div>

                            {/* NEXT */}
                            <button
                                onClick={nextImage}
                                className="absolute right-2 sm:right-4 text-white text-5xl z-50 hover:scale-110 transition"
                            >
                                ›
                            </button>

                            {/* TAG */}
                            <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                                {images[activeIndex]?.name}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
