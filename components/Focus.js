import FocusCard from "./FocusCard";

const Focus = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2 sm:px-10 bg-focus">
      <div className="py-3 font-bold text-center underline sm:text-2xl">
        OUR FOCUS
      </div>
      <div className="grid w-full grid-cols-3 px-2 py-4 sm:py-10 sm:px-10">
        <FocusCard src="/learn.png" content="Learn" />
        <FocusCard src="/practice.png" content="Practice" />
        <FocusCard src="/test.png" content="Test" />
      </div>
      <div className="flex flex-row items-center justify-center w-full pb-4 sm:pb-8">
        <div className="w-1/2 py-1 ml-5 mr-2 bg-white rounded-lg sm:ml-24 sm:mr-10 sm:rounded-xl">
          <div className="text-xs font-bold text-center sm:text-lg">
            TOTAL STUDENT
          </div>
          <div className="text-xs font-bold text-center sm:text-lg">450+</div>
        </div>
        <div className="w-1/2 py-1 ml-2 mr-5 text-white bg-black rounded-lg sm:ml-10 sm:mr-24 sm:rounded-xl">
          <div className="text-xs font-bold text-center sm:text-lg">
            FACULTY MEMBERS
          </div>
          <div className="text-xs font-bold text-center sm:text-lg">20+</div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
