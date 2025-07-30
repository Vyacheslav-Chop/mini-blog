import Loader from "@/components/Loader/Loader";

const LoadingPost = () => {
  return (
    <Loader
      size={40}
      thickness={3}
      color="#ff7a00"
      borderColor="rgba(255, 122, 0, 0.2)"
      shadowColor="rgba(255, 122, 0, 0.25)"
      innerSize={20}
      innerThickness={2}
      innerColor="#fffaf2"
      innerBorderColor="rgba(0, 0, 0, 0.05)"
    />
  );
};

export default LoadingPost;
