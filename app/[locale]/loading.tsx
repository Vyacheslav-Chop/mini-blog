import Loader from "@/components/Loader/Loader";

const Loading = () => {
  return (
    <Loader
      size={60}
      thickness={4}
      color="#ff7a00"
      borderColor="rgba(255, 122, 0, 0.2)"
      shadowColor="rgba(255, 122, 0, 0.4)"
      innerSize={30}
      innerThickness={3}
      innerColor="#fff7e6"
      innerBorderColor="rgba(255, 255, 255, 0.3)"
    />
  );
};

export default Loading;
