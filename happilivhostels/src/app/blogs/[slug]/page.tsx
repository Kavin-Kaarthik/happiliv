import BlogListing from "./component/BlogListing";
import api from "../../../../lib/axios";
import { notFound } from 'next/navigation';

async function getBlogData(slug: string) {
    try {
        const res = await api.get(`blog/getblog/${slug}`);
        return res.data;
    } catch {
        return null;
    }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blogData = await getBlogData(slug);

    if (!blogData) return notFound();

    return <BlogListing initialData={blogData} />;
}