"use client";

import { fetchPostBiId } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import css from "./PostDetails.module.css";
import { useTranslations } from "next-intl";

const PostDetailsClient = () => {
  const { id } = useParams();
  const router = useRouter();
  const t = useTranslations("PostDetails");

  const { data: post } = useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostBiId(Number(id)),
    refetchOnMount: false,
  });

  const back = () => router.push("/");
  return (
    <section className={css.section}>
      <div className={css.backDrop}>
        {post && (
          <div className={css.postWrap}>
            <h2 className={css.postTitle}>{post.title}</h2>
            <p className={css.postText}>{post.body}</p>
            <button className={css.button} onClick={back}>
              {t("back")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PostDetailsClient;
