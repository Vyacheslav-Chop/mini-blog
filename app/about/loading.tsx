import Loader from "@/components/Loader/Loader";

const LoadingPost = () => {
  return (
    <Loader
      size={50}
      thickness={4}
      color="#d18f3d"
      borderColor="rgba(209, 143, 61, 0.25)"
      shadowColor="rgba(209, 143, 61, 0.4)"
      innerSize={25}
      innerThickness={3}
      innerColor="#f3ead4"
      innerBorderColor="rgba(255, 255, 255, 0.3)"
    />
  );
};

export default LoadingPost;
