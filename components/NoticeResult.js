const NoticeResult = ({ msg, date, noticeLink }) => {
  const getNewDate = (str) => {
    return str.substr(0, 10);
  };

  return (
    <div className="py-2">
      <a
        href={noticeLink}
        target="_blank"
        className="text-sm sm:text-lg hover:text-blue-600"
      >
        {msg}
      </a>
      <span className="pl-4 text-xs font-light text-red-700">
        {getNewDate(date)}
      </span>
    </div>
  );
};

export default NoticeResult;
