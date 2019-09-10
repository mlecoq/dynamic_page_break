import React, { useRef, useEffect, Fragment, useState } from "react";
import Task from "./Task";

const pageBreak = 70;

const List = ({ tasks }) => {
  const references = useRef({});

  const [pagesBreaks, setPageBreaks] = useState({});

  const getOrCreateRef = id => {
    if (!references.current.hasOwnProperty(id)) {
      references.current[id] = React.createRef();
    }
    return references.current[id];
  };

  useEffect(() => {
    console.log(references.current);

    let previousVal = 0;

    const pagesBreaks = {};

    for (let [task, ref] of Object.entries(references.current)) {
      if (previousVal + ref.current.clientHeight > pageBreak) {
        previousVal = ref.current.clientHeight;
        pagesBreaks[task] = true;
      } else {
        previousVal += ref.current.clientHeight;
      }
    }

    setPageBreaks(pagesBreaks);
  }, [setPageBreaks]);

  return (
    <ul>
      {tasks.map(task => (
        <Fragment key={task}>
          {pagesBreaks[task] && <div>break !!!!</div>}
          <Task ref={getOrCreateRef(task)} name={task} />
        </Fragment>
      ))}
    </ul>
  );
};

export default List;
