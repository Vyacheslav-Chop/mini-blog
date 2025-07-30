import { Post } from "@/types/post";
import PostItem from "../PostItem/PostItem";
import css from './PostList.module.css';

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <ul className={css.list}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
