import { motion } from "framer-motion";
const MotionItem = ({ item, layoutType }) => {
  return (
    <motion.div
      layoutId={`card-conatiner-${item.id}`}
      className={`${
        layoutType === "list"
          ? "flex items-center justify-between bg-wl2 g3"
          : layoutType === "card"
          ? " px-2 sm:px-3 py-4 bg-wl2 text-center g3"
          : ""
      } rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/10 transition`}
    >
      <div
        className={`${
          layoutType === "list" ? "flex items-center gap-4 p-2" : ""
        }`}
      >
        <motion.img
          layoutId={`image-${item.id}`}
          src={item.image}
          alt={item.title}
          className={`${
            layoutType === "list" ? "w-20 h-20" : "w-full h-38 mb-4"
          } rounded-lg ring-1 ring-gray-950/5 object-cover`}
        />
        <div
          className={`${layoutType === "list" ? "ml-2 mr-4" : ""} text-pink4`}
        >
          <motion.p
            layoutId={`title-${item.id}`}
            className={`font-bold text-pink4`}
          >
            {item.title}
          </motion.p>
          <div
            className={`flex items-center justify-between ${
              layoutType === "list" ? "gap-32" : " "
            }`}
          >
            <motion.p
              layoutId={`price-${item.id}`}
              className="text-base text-pink4"
            >
              <strong>{item.price}</strong>

              <span className="text-gray-500 ml-2">ETH</span>
            </motion.p>

            <motion.span
              layoutId={`id-${item.id}`}
              className={`text-sm text-yellow-500 font-medium ${
                layoutType === "list" ? "-mt-12" : ""
              }`}
            >
              <div className=" flex items-center gap-1">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-mt-1"
                >
                  <path
                    d="M5.39786 1.47611L1.34946 5.90449C0.604176 6.71973 0.660884 7.98479 1.47613 8.73008L5.9045 12.7785C6.71974 13.5238 7.9848 13.4671 8.73009 12.6518L12.7785 8.22344C13.5238 7.40819 13.4671 6.14313 12.6518 5.39785L8.22345 1.34945C7.40821 0.604164 6.14315 0.660872 5.39786 1.47611Z"
                    fill="#FDEBA4"
                    stroke="#F2F2B2"
                  />
                </svg>
                <div>#{item.id}</div>
              </div>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MotionItem;
