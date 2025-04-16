import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const AnimatedViewContainer = ({ viewMode, children }) => {
  return (
    <LayoutGroup>
      <div className="flex flex-col items-center justify-between gap-6 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
};

export default AnimatedViewContainer;
