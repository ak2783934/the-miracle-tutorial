const NoticeResult = ({ msg, date, noticeLink }) => {
  const getMonth = (str) => {
    switch (str) {
      case "01":
        return "Jan";
      case "02":
        return "Feb";
      case "03":
        return "Mar";
      case "04":
        return "Apr";
      case "05":
        return "May";
      case "06":
        return "Jun";
      case "07":
        return "Jul";
      case "08":
        return "Aug";
      case "09":
        return "Sept";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
    }
  };

  const getNewDate = (str) => {
    var tempStr = str.substr(0, 10);
    var year = tempStr.substr(0, 4);
    var day = tempStr.substr(8, 10);
    var mon = tempStr.substr(5, 2);
    return day + "-" + getMonth(mon) + "-" + year;
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
