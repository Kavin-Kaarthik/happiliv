import type { Metadata } from "next";
import api from "../../../../lib/axios";

async function getBlogData(slug: string) {
    try {
        const res = await api.get(`blog/getblog/${slug}`);
        return res.data; // The API returns the object directly based on your JSON example
    } catch (error) {
        console.error("Metadata fetch error:", error);
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const blog = await getBlogData(slug);

    if (!blog) return { title: "Blog Not Found" };

    return {
        title: blog.metaTitle,
        description: blog.metaDesc,
        keywords: blog.metaKeyword,
        openGraph: {
            title: blog.ogTitle,
            description: blog.ogDesc,
            images: [{ url: blog.ogImage }],
        },
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}