const NoticeResult = ({ msg, date, noticeLink }) => {
  return (
    <div className="py-2">
      <a
        href={noticeLink}
        target="_blank"
        className="text-sm sm:text-lg hover:text-blue-600"
      >
        {msg}
      </a>
      <span className="pl-4 text-xs font-light text-red-700">{date}</span>
    </div>
  );
};

export default NoticeResult;
