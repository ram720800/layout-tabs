import { Wallet } from "lucide-react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const WalletButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <LayoutGroup>
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.button
                layoutId="wallet-card"
                onClick={() => setIsOpen(true)}
                className="mt-6 flex items-center justify-between p-4 w-80 rounded-2xl g3 shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5 transition"
              >
                <motion.div
                  layoutId="wallet-content"
                  className="flex items-center gap-3"
                >
                  <Wallet className="text-pink4 p-2 bg-pink2/30 size-10 rounded-md shadow-2xl" />
                  <div className="flex flex-col justify-center gap-1">
                    <p className="text-base text-pink4 font-bold">Wallet</p>
                    <p className="text-sm text-gray-500 font-semibold">
                      1.064 ETH
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  layoutId="wallet-pay"
                  className="px-4 py-2 text-wl2 bg-pink3 rounded-full shadow-md"
                >
                  Pay now
                </motion.div>
              </motion.button>
            </motion.div>
          )}
          {isOpen && (
            <motion.div
              layout
              layoutId="wallet-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="mb-4 mt-4 p-4 w-80 rounded-2xl g3 shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5 transition"
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  layoutId="wallet-content"
                  className="flex items-center gap-3"
                >
                  <Wallet className="text-pink4 p-2 bg-pink2/30 size-10 rounded-md shadow-2xl" />
                  <div className="flex flex-col justify-center gap-1">
                    <p className="text-base text-pink4 font-bold">Wallet</p>
                    <p className="text-sm text-gray-500 font-semibold">
                      1.064 ETH
                    </p>
                  </div>
                </motion.div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 text-xl"
                >
                  <X />
                </button>
              </div>

              <p className="text-sm font-semibold text-pink4 mb-2">
                Payment Wallet
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between border border-pink3 px-3 py-2 rounded-xl">
                  <img src="eth.png" alt="eth" width={"12px"} height={"14px"}/>
                  <p className="text-sm font-bold text-bl2">Metamask</p>
                </div>
              </div>

              <motion.button
                layoutId="wallet-pay"
                className="px-4 py-2 text-wl2 bg-pink3 rounded-full shadow-md"
              >
                Pay now
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
};
export default WalletButton;
