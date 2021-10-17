import React from "react";
import DemoForm from "./DemoForm.js";
import NoticeResultList from "./NoticeResultList.js";

const NoticeDemo = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <DemoForm />
      <NoticeResultList />
    </div>
  );
};

export default NoticeDemo;
