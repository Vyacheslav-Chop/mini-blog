"use client";

import { fetchPostBiId } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

const PostDetailsClient = () => {
  const { id } = useParams();
  const { data: post } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostBiId(Number(id)),
    refetchOnMount: false,
  });

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
};

export default PostDetailsClient;
