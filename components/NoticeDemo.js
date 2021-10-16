import NoticeResult from "./NoticeResult.js";

const NoticeDemo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="rounded shadow-xl sm:mx-6 sm:my-10 bg-notice">
        <div className="pt-5 pb-8 text-lg font-bold text-center sm:text-xl">
          REGISTER FOR A DEMO CLASS
        </div>
        <div>
          <form className="grid grid-cols-1 gap-4 px-16 sm:px-36 pb-14">
            <input
              className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md "
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md "
              type="text"
              placeholder="Class"
            />
            <input
              className="w-full h-10 px-2 tracking-widest text-gray-500 bg-gray-100 rounded-md "
              type="number"
              placeholder="Phone no."
            />
            <button
              type="submit"
              className="h-10 py-1 text-white rounded-md bg-noticeButton"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="rounded shadow-xl sm:mx-6 sm:my-10 sm:bg-notice">
        <div className="grid grid-cols-2 pt-2 pb-5 mx-2 text-lg text-center sm:text-xl">
          <div className="border-b border-r border-gray-600">NOTICE</div>
          <div className="border-b border-gray-600">RESULTS</div>
        </div>
        <div className="px-6 pb-6 text-sm sm:text-lg">
          <NoticeResult msg="TalentX 2022 brings #SuccessKaAssurance for your acedemic success with exciting cash prize and scholarships" />
          <NoticeResult msg="TalentX 2022 brings #SuccessKaAssurance for your acedemic success with exciting cash prize and scholarships" />
          <NoticeResult msg="TalentX 2022 brings #SuccessKaAssurance for your acedemic success with exciting cash prize and scholarships" />
          <NoticeResult msg="TalentX 2022 brings #SuccessKaAssurance for your acedemic success with exciting cash prize and scholarships" />
        </div>
      </div>
    </div>
  );
};

export default NoticeDemo;
