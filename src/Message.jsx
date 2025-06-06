import React from "react";
import "./style.css";

function Message({ text, type }) {
  let className = "message";

  if (type === "info") {
    className += " message-info";
  } else if (type === "alert") {
    className += " message-alert";
  } else if (type === "success") {
    className += " message-success";
  }

  return <div className={className}>{text}</div>;
}

export default Message;
