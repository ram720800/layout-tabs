import ToggleView from "./components/ToggleView";
import AnimatedViewContainer from "./components/AnimatedViewContainer";
import { useState } from "react";
import ListView from "./components/ListView";
import CardView from "./components/CardView";
import PackView from "./components/PackView";
import WalletButton from "./components/WalletButton";

const App = () => {
  const [viewMode, setViewMode] = useState("list");

  const renderContent = () => {
    if (viewMode === "list") return <ListView />;
    if (viewMode === "card") return <CardView />;
    return <PackView />;
  };
  return (
    <div className="flex flex-col items-center w-screen min-h-screen overflow-y-auto g1 space-y-10">
      <div className="text-pink4 uppercase text-xl sm:text-4xl font-extrabold ">Layout Tabs</div>
      <ToggleView onChange={setViewMode} />
      <AnimatedViewContainer viewMode={viewMode}>
        {renderContent()}
      </AnimatedViewContainer>
      <WalletButton/>
    </div>
  );
};

export default App;
