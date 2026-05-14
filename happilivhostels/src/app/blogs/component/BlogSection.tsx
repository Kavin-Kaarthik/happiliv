'use client';

import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { Variants, Transition, motion } from 'framer-motion';
import api from '../../../../lib/axios';
import Lottie from "lottie-react";
import animationData from "../../../../public/no data/No Data Animation.json"; // adjust path

type Blog = {
  id: number;
  slug: string;
  blogName: string;
  blogDesc: string;
  bannerImage: string;
  bannerImageAlt: string;
  createdDate: string;
};


const fadeUp: Variants = {
  hidden: { opacity: 1, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as Transition['ease'],
    },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};
const INITIAL_GRID_COUNT = 4;



export default function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [visibleGridCount, setVisibleGridCount] =
    useState(INITIAL_GRID_COUNT);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    console.log('TOTAL BLOGS:', blogs.length);
    console.log('VISIBLE COUNT:', visibleGridCount);
  }, [blogs, visibleGridCount]);


  const loadMore = () => {
  setIsLoadingMore(true);

  setTimeout(() => {
    setVisibleGridCount(prev => {
      // Increase by 3, but cap it at the total length of the array
      return Math.min(prev + 3, blogs.length);
    });

    setIsLoadingMore(false);
    // ... rest of your scroll logic
  }, 600);
};



  const featuredBlog = blogs[0];

  const gridBlogs = blogs.slice(1, visibleGridCount);


  const hasMore = (1 + gridBlogs.length) < blogs.length;
  const SkeletonCard = () => (
    <div className="animate-pulse">
      <div className="h-52 bg-gray-200 rounded-xl"></div>
      <div className="mt-3 h-3 w-24 bg-gray-200 rounded"></div>
      <div className="mt-2 h-5 bg-gray-200 rounded"></div>
      <div className="mt-2 h-4 bg-gray-200 rounded"></div>
    </div>
  );


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/blog/get");
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Utility to remove HTML tags from the API description for the excerpt
  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, '').substring(0, 150) + "...";
  };

  // Utility to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  if (isLoading) {
    return (
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </section>
    );
  }


const noBlogs = !isLoading && blogs.length === 0;
if (noBlogs) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center">
      
      {/* If using Lottie */}
      <div className="w-full max-w-[400px]">
        <Lottie
          animationData={animationData}
          loop
          className="w-full h-full"
        />
      </div>

      {/* Optional Text */}
      <p className="text-gray-500 mt-4 text-center">
        No blogs available right now
      </p>

    </section>
  );
}


  return (
    <motion.section
      className="max-w-7xl mx-auto md:px-4 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center mb-10">
        <h2 className="text-3xl font-semibold">
          <span className="text-[#EE1C4C]">Our</span> Blogs
        </h2>
        <p className="mt-2 text-black">
          Stories And Experiences From The HappiLiv Hostels
        </p>
      </motion.div>

      {/* Featured Blog */}
      {featuredBlog && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 px-6 md:px-20 items-center">
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 relative h-[300px] rounded-xl overflow-hidden"
          >
            <Image
              src={featuredBlog.bannerImage}
              alt={featuredBlog.bannerImageAlt || "Featured Blog"}
              fill
              className="object-fill"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-start items-start"
          >
            <p className="text-xs text-red-500 font-medium mt-2">
              Topics • {formatDate(featuredBlog.createdDate)}
            </p>
            <h3 className="mt-2 text-2xl font-semibold leading-snug">
              {featuredBlog.blogName}
            </h3>
            <p className="mt-3 text-sm text-black">
              {stripHtml(featuredBlog.blogDesc)}
            </p>
            <Link href={`/blogs/${featuredBlog.slug}`} className="mt-2 inline-block text-sm text-red-500 font-medium">
              Read More
            </Link>
          </motion.div>
        </div>
      )}

      {/* Blog Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20"
        variants={container}
      >

        {gridBlogs.map((blog) => (
          <motion.div
            key={blog.id}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-52 rounded-xl overflow-hidden">
              <Image
                src={blog.bannerImage}
                alt={blog.blogName}
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-3 text-xs text-red-500 font-medium">
              {formatDate(blog.createdDate)}
            </p>

            <h4 className="mt-2 font-semibold text-xl leading-snug h-[48px] overflow-hidden">
              {blog.blogName}
            </h4>

            <p className="mt-2 text-sm text-black">
              {stripHtml(blog.blogDesc)}
            </p>

            <Link
              href={`/blogs/${blog.slug}`}
              className="mt-2 inline-block text-sm text-red-500 font-medium"
            >
              Read More
            </Link>
          </motion.div>
        ))}

      </motion.div>

      {/* Load More */}
      {hasMore && (
        <motion.div variants={fadeUp} className="mt-12 text-center">
          <button
            onClick={loadMore}
            disabled={isLoadingMore}
            className="rounded-full bg-gray-200 px-8 py-3 text-sm font-medium hover:bg-gray-100"
          >
            {isLoadingMore ? 'Loading...' : 'Load More'}
          </button>
        </motion.div>
      )}

    </motion.section>
  );
}