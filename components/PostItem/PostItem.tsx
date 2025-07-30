import { Post } from "@/types/post";
import Link from "next/link";
import css from "./PostItem.module.css";

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
  return (
    <li className={css.postItem}>
      <h2 className={css.postTitle}>{post.title}</h2>
      <Link className={css.postLink} href={`/posts/${post.id}`}>
        View details
      </Link>
    </li>
  );
};

export default PostItem;
