"use client";
import Pagination from "@/components/Pagination/Pagination";
import PostList from "@/components/PostList/PostList";
import { fetchPosts } from "@/lib/api";
import { FetchPostsRes } from "@/types/post";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import css from "./page.module.css";

type PostsClientProps = {
  initialData: FetchPostsRes;
};

const PostsClient = ({ initialData }: PostsClientProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: () => fetchPosts(currentPage),
    placeholderData: keepPreviousData,
    initialData,
  });

  const posts = data?.posts ?? [];
  const totalPages = data?.totalPages ?? 1;

  return (
    <section className={css.section}>
      <div className={css.container}>
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
        {data && posts.length > 0 && <PostList posts={posts} />}
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
};

export default PostsClient;
