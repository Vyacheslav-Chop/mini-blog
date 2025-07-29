"use client";

import { fetchPostBiId } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const PostDetailsClient = () => {
  const { id } = useParams();
  const router = useRouter();

  const { data: post } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostBiId(Number(id)),
    refetchOnMount: false,
  });

  const back = () => router.back();
  return (
    <div>
      <div>
        <h2>{post?.title}</h2>
        <p>{post?.body}</p>
      </div>
      <button onClick={back}>Go Back</button>
    </div>
  );
};

export default PostDetailsClient;
