import React, { useState, useEffect } from "react";
import NoticeResult from "./NoticeResult.js";
import { api } from "../pages/api/index";

const NoticeResultList = () => {
  const [currType, setcurrType] = useState("notice");
  const [myarray, setMyArray] = useState([]);

  const getNoticeResult = async (currVal) => {
    await api
      .get(`/${currVal}`)
      .then((res) => {
        setcurrType(currVal);
        if (currVal === "notice") {
          setMyArray(res.data.notice);
        } else {
          setMyArray(res.data.result);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getNoticeResult("notice");
  }, []);

  return (
    <div className="pb-6 rounded shadow-xl sm:mx-6 sm:my-10 sm:bg-notice">
      <div className="grid grid-cols-2 pt-2 pb-5 mx-2 text-lg text-center sm:text-xl">
        <button
          onClick={() => getNoticeResult("notice")}
          className={
            currType === "notice"
              ? "border-b border-r border-gray-600 shadow font-medium bg-blue-300 hover:cursor-pointer"
              : "border-b border-r border-gray-600 font-medium hover:bg-blue-300 hover:cursor-pointer"
          }
        >
          NOTICE
        </button>
        <button
          onClick={() => getNoticeResult("result")}
          className={
            currType === "result"
              ? "border-b border-gray-600 font-medium shadow bg-blue-300 hover:cursor-pointer"
              : "border-b border-gray-600 font-medium hover:bg-blue-300 hover:cursor-pointer"
          }
        >
          RESULT
        </button>
      </div>
      <div className="px-6 pb-6 overflow-y-auto text-sm sm:h-96 h-72 sm:text-lg">
        {myarray?.map((val, index) => (
          <NoticeResult
            key={index}
            msg={currType === "result" ? val.result : val.notice}
            date={val.createdAt}
            noticeLink={val.link}
          />
        ))}
      </div>
    </div>
  );
};

export default NoticeResultList;
