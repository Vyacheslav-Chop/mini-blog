import { Post } from "@/types/post";
import Link from "next/link";
import css from "./PostItem.module.css";
import { useTranslations } from "next-intl";

type PostItemProps = {
  post: Post;
};

const PostItem = ({ post }: PostItemProps) => {
const t = useTranslations("Main")

  return (
    <li className={css.postItem}>
      <h2 className={css.postTitle}>{post.title}</h2>
      <Link className={css.postLink} href={`/posts/${post.id}`}>
        {t('view')}
      </Link>
    </li>
  );
};

export default PostItem;
