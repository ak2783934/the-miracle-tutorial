import React, { useState } from "react";
import NoticeResult from "./NoticeResult.js";

const NoticeResultList = () => {
  const noticeList = [
    {
      msg:
        "TalentX 2022 brings #SuccessKaAssurance for your acedemic success with exciting cash prize and scholarships",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
    {
      msg:
        "TalentX 2022 brings #SuccessKaAssurance for your acedemic success with exciting cash prize and scholarships",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
    {
      msg:
        "TalentX 2022 brings #SuccessKaAssurance for your acedemic success with exciting cash prize and scholarships",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
    {
      msg:
        "TalentX 2022 brings #SuccessKaAssurance for your acedemic success with exciting cash prize and scholarships",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
    {
      msg:
        "TalentX 2022 brings #SuccessKaAssurance for your acedemic success with exciting cash prize and scholarships",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
    {
      msg:
        "TalentX 2022 brings #SuccessKaAssurance for your acedemic success with exciting cash prize and scholarships",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
  ];
  const resultList = [
    {
      msg:
        "My result will be declared soon, it will be out on 29 may 2021 and we hope that everyone passes with good score",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
    {
      msg:
        "My result will be declared soon, it will be out on 29 may 2021 and we hope that everyone passes with good score",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
    {
      msg:
        "My result will be declared soon, it will be out on 29 may 2021 and we hope that everyone passes with good score",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
    {
      msg:
        "My result will be declared soon, it will be out on 29 may 2021 and we hope that everyone passes with good score",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
    {
      msg:
        "My result will be declared soon, it will be out on 29 may 2021 and we hope that everyone passes with good score",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
    {
      msg:
        "My result will be declared soon, it will be out on 29 may 2021 and we hope that everyone passes with good score",
      date: "25-may-2021",
      link: "http://www.google.com/",
    },
  ];

  const [currState, setcurrState] = useState("notice");
  const [myarray, setMyArray] = useState(noticeList);

  return (
    <div className="pb-6 rounded shadow-xl sm:mx-6 sm:my-10 sm:bg-notice">
      <div className="grid grid-cols-2 pt-2 pb-5 mx-2 text-lg text-center sm:text-xl">
        <div
          className={
            currState === "notice"
              ? "border-b border-r border-gray-600 shadow font-medium bg-blue-300 hover:cursor-pointer"
              : "border-b border-r border-gray-600 font-medium hover:bg-blue-300 hover:cursor-pointer"
          }
          onClick={() => {
            setcurrState("notice");
            setMyArray(noticeList);
          }}
        >
          NOTICE
        </div>
        <div
          className={
            currState === "result"
              ? "border-b border-gray-600 font-medium shadow bg-blue-300 hover:cursor-pointer"
              : "border-b border-gray-600 font-medium hover:bg-blue-300 hover:cursor-pointer"
          }
          onClick={() => {
            setcurrState("result");
            setMyArray(resultList);
          }}
        >
          RESULT
        </div>
      </div>
      <div className="px-6 pb-6 overflow-y-auto text-sm sm:h-96 h-72 sm:text-lg">
        {myarray.map((val, index) => (
          <NoticeResult
            key={index}
            msg={val.msg}
            date={val.date}
            noticeLink={val.link}
          />
        ))}
      </div>
    </div>
  );
};

export default NoticeResultList;
