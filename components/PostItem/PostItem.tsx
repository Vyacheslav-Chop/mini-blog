import { Post } from "@/types/post";
import Link from "next/link";

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <li>
      <h2>{post.title}</h2>
      <Link href={`/posts/${post.id}`}>View details</Link>
    </li>
  );
};

export default PostItem;
