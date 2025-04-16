import MotionItem from "./MotionItem";
const collectibles = [
  {
    id: 72,
    title: "Skilled finger series",
    price: 0.855,
    image: "/fingers.svg",
  },
  {
    id: 80,
    title: "Vibrant vibe series",
    price: 0.209,
    image: "/vibe.svg",
  },
];
const CardView = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {collectibles.map((item) => (
        <MotionItem key={item.id} item={item} layoutType="card" />
      ))}
    </div>
  );
};

export default CardView;
