import * as motion from "motion/react-client";

export default function Rotate() {
  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#ff0088",
        borderRadius: 5,
      }}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{ duration: 10 }}
    />
  );
}
