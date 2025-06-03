import DragIcon from '../icons/dragDrop';

const ItineraryCard = ({ item, index }) => {
  return (
    <div className="bg-white rounded-lg p-3 md:p-4 shadow flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4">
      <div className="text-gray-400 cursor-grab active:cursor-grabbing">
        <DragIcon />
      </div>
      <div className="text-xl md:text-2xl font-bold text-purple-600">{index}</div>
      <img src={item.image} alt={item.title} className="w-14 h-14 md:w-16 md:h-16 rounded object-cover" />
      <div className="flex-1 mt-2 md:mt-0 w-full md:w-auto">
        <h2 className="font-semibold text-base md:text-lg">{item.title}</h2>
        <p className="text-xs md:text-sm text-gray-600 line-clamp-2">{item.description}</p>
        <p className="text-xs md:text-sm text-yellow-600">⭐ {item.rating} ({item.reviews.toLocaleString()} reviews)</p>
      </div>
    </div>
  );
};

export default ItineraryCard;
