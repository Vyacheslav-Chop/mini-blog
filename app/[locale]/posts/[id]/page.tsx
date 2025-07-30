import { fetchPostBiId, fetchPosts } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PostDetailsClient from "./PostDetails.client";
import { routing } from "@/i18n/routing";

export const generateStaticParams = async () => {
  const { posts } = await fetchPosts();
  return routing.locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      id: String(post.id),
    }))
  );
};

type PostDetailsProps = {
  params: Promise<{ locale: string; id: string }>;
};

export const generateMetadata = async ({ params }: PostDetailsProps) => {
  const { id } = await params;
  const post = await fetchPostBiId(Number(id));

  return {
    title: post.title,
    description: post.body,
    openGraph: {
      title: post.title,
      description: post.body,
      url: `https://mini-blog-ochre-eight.vercel.app/posts/${post.id}`,
      images: [
        {
          url: "/mini-blog-page.avif",
          width: 1200,
          height: 630,
          alt: "Mini Blog — Inspiring Stories & Fresh Perspectives",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.body,
      images: ["/mini-blog-page.avif"],
    },
  };
};

const PostDetails = async ({ params }: PostDetailsProps) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  queryClient.prefetchQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostBiId(Number(id)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostDetailsClient />
    </HydrationBoundary>
  );
};

export default PostDetails;
