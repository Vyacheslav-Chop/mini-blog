import { fetchPostBiId } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PostDetailsClient from "./PostDetails";

type PostDetailsProps = {
  params: Promise<{ id: string }>;
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
