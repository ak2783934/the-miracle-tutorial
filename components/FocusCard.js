const FocusCard = ({ src, content }) => {
  return (
    <div className="block p-1 px-3 mx-4 bg-white shadow-2xl sm:shadow-3xl sm:px-6 h-28 sm:mx-16 sm:h-44 lg:h-56 rounded-2xl">
      <img src={src} alt="focusCardImage" className="w-full p-2 sm:p-4 h-4/5" />
      <div className="text-xs font-bold text-center sm:text-lg">{content}</div>
    </div>
  );
};

export default FocusCard;
