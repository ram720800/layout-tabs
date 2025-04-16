import { Wallet } from "lucide-react";

const WalletButton = () => {
  return (
    <button className="sm:fixed sm:bottom-1 mt-6 flex items-center justify-between p-4 w-80 rounded-2xl g3 shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 hover:ring-[#fc75b2]/5 transition">
      <div className="flex items-center gap-3">
        <Wallet className="text-pink4 p-2 bg-pink2/30 size-10 rounded-md shadow-2xl" />
        <div className="flex flex-col justify-center gap-1">
          <p className="text-base text-pink4 font-bold">Wallet</p>
          <p className="text-sm text-gray-500 font-semibold">1.064 ETH</p>
        </div>
      </div>
      <div className="px-4 py-2 text-wl2 bg-pink3 rounded-full shadow-md">+ Add Cash</div>
    </button>
  );
};
export default WalletButton;
