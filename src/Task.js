import React from "react";
import "./Task.css";

const Task = ({ name, forwardedRef }) => {
  return name === "Task 5" ? (
    <li ref={forwardedRef}>
      <div className="big">{name}</div>
    </li>
  ) : (
    <li ref={forwardedRef}>{name}</li>
  );
};

export default React.forwardRef((props, ref) => {
  return <Task {...props} forwardedRef={ref} />;
});
