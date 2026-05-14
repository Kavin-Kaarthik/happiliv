'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// 1. Define the Interface for Related Blogs
interface RelatedBlog {
    id: number;
    slug: string;
    blogName: string;
    blogDesc: string;
    bannerImage: string;
    bannerImageAlt: string;
    createdAt: string;
}

// 2. Define the Main Blog Data Interface
interface BlogData {
    id: number;
    metaTitle: string;
    metaDesc: string;
    metaKeyword: string;
    slug: string;
    ogTitle: string;
    ogDesc: string;
    ogImage: string;
    bannerImage: string;
    bannerImageAlt: string;
    bannerTitle: string;
    blogName: string;
    blogDesc: string;
    blogDesc1: string;
    blogDesc2: string;
    mainImage: string;
    mainImageAlt: string;
    mainImage2?: string;
    mainImageAlt2?: string;
    callToAction: string;
    createdAt: string;
    relatedBlogs: RelatedBlog[];
}

interface BlogListingProps {
    initialData: BlogData;
}

export default function BlogListing({ initialData }: BlogListingProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const dateDisplay = initialData.createdAt 
        ? new Date(initialData.createdAt).toLocaleDateString('en-GB', { 
            day: '2-digit', 
            month: 'short', 
            year: 'numeric' 
          })
        : "Recent";

    return (
        <section className="max-w-7xl mx-auto md:px-15 py-10">
            {/* Featured Blog Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 px-10"
            >
                <div className="relative lg:h-[450px] h-[300px] rounded-xl overflow-hidden">
                    <Image
                        src={initialData.mainImage || initialData.bannerImage}
                        alt={initialData.mainImageAlt || initialData.blogName}
                        fill
                        className="object-cover"
                        priority 
                    />
                </div>

                <p className="mt-4 text-xs text-red-500 font-medium">
                    {initialData.blogName} • {dateDisplay}
                </p>

                <h1 className="mt-2 lg:text-2xl text-md font-semibold leading-snug pb-3">
                    {initialData.bannerTitle}
                </h1>

                <div className="space-y-3">
                    <div dangerouslySetInnerHTML={{ __html: initialData.blogDesc }} />
                    <div dangerouslySetInnerHTML={{ __html: initialData.blogDesc1 }} />
                    <div dangerouslySetInnerHTML={{ __html: initialData.blogDesc2 }} />
                    <div dangerouslySetInnerHTML={{ __html: initialData.callToAction }} />
                </div>
            </motion.div>

            {/* Related Blog Section */}
            <div className="mt-14 px-10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Related Blog</h3>
                    <Link href="/blogs" className="text-sm text-black hover:text-red-500 font-medium">
                        View All
                    </Link>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {initialData.relatedBlogs?.map((blog) => (
                        <motion.div key={blog.id} variants={itemVariants}>
                            <Link href={`/blogs/${blog.slug}`}>
                                <div className="relative h-60 rounded-xl bg-gray-200 overflow-hidden group">
                                    <Image
                                        src={blog.bannerImage}
                                        alt={blog.blogName}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <p className="mt-3 text-xs text-red-500 font-medium">
                                    {new Date(blog.createdAt).toLocaleDateString('en-GB')}
                                </p>

                                <h4 className="mt-2 font-semibold text-sm leading-snug">
                                    {blog.blogName}
                                </h4>

                                <div 
                                    className="mt-2 text-xs text-gray-600 line-clamp-2"
                                    dangerouslySetInnerHTML={{ __html: blog.blogDesc }}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}