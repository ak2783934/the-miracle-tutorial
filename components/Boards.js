const Boards = () => {
  return (
    <div className="grid mx-auto text-center sm:grid-cols-3" id="boards">
      <div className="py-6 text-sm font-bold shadow-inner sm:py-10 bg-cbse sm:text-xl">
        <div>Central Board of Secondary Education</div>
        <div>(CBSE)</div>
        <a href="/cbse">
          <div className="w-24 py-1 mx-auto my-1 mt-2 bg-white rounded-md text-tiny sm:text-sm sm:w-36 hover:bg-red-100">
            APPLY NOW
          </div>
        </a>
      </div>
      <div className="py-6 text-sm font-bold shadow-inner sm:py-10 bg-chse sm:text-xl">
        <div>Higher Secondary Education</div>
        <div>(CHSE)</div>
        <a href="/chse">
          <div className="w-24 py-1 mx-auto my-1 mt-2 bg-white rounded-md text-tiny sm:text-sm sm:w-36 hover:bg-red-100">
            APPLY NOW
          </div>
        </a>
      </div>
      <div className="py-6 text-sm font-bold shadow-inner sm:py-10 bg-bse sm:text-xl">
        <div>Board Secondary Education</div>
        <div>(BSE)</div>
        <a href="/bse">
          <div className="w-24 py-1 mx-auto my-1 mt-2 bg-white rounded-md text-tiny sm:text-sm sm:w-36 hover:bg-red-100">
            APPLY NOW
          </div>
        </a>
      </div>
    </div>
  );
};

export default Boards;
