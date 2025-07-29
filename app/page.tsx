// import styles from "./page.module.css";

import { fetchPosts } from "@/lib/api";
import PostsClient from "./Posts.client";

const Home = async () => {
  const responce = await fetchPosts(1);

  return <PostsClient initialData={responce} />;
};

export default Home;
