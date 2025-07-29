import { FetchPostsRes, Post } from "@/types/post";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async (page: number): Promise<FetchPostsRes> => {
  const res = await axios.get<Post[]>("/posts", {
    params: {
      _page: page,
      _limit: 12,
    },
  });

  const totalCount = Number(res.headers["x-total-count"]);
  const totalPages = Math.ceil(totalCount / 12);

  return { posts: res.data, totalPages };
};

export const fetchPostBiId = async (id: number): Promise<Post> => {
  const res = await axios.get<Post>(`/posts/${id}`);
  return res.data;
};
