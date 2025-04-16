import { motion } from "framer-motion";

const PackView = () => (
  <motion.div
    layoutId="collectibles-view"
    className="bg-wl2 p-6 rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5 transition flex flex-col items-center text-center g3"
  >
    <div className="relative w-24 h-24 mb-4">
      <motion.div layout className="absolute inset-0 z-10">
        <motion.img
          layoutId="image-72"
          src="/fingers.svg"
          alt="Pack Icon"
          className="w-full h-full rounded-lg rotate-12 shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/10 object-cover"
        />
      </motion.div>
      <motion.div layout className="absolute inset-0">
        <motion.img
          layoutId="image-80"
          src="/vibe.svg"
          alt="Pack Icon"
          className="w-full h-full rounded-lg -rotate-6 ring-1shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/10 object-cover "
        />
      </motion.div>
    </div>
    <p className="font-semibold text-lg text-pink3">2 Collectibles</p>
    <p className="text-base text-pink3">
      <strong>1.064 </strong>{" "}
      <span className="text-base text-gray-500">ETH</span>
    </p>
  </motion.div>
);

export default PackView;
