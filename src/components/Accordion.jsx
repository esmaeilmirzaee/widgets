import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeTitle, setActiveTitle] = useState(0);

  const onTitleClick = (index) => {
    setActiveTitle(index);
  };

  const renderedItems = items.map((item, idx) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${activeTitle === idx ? 'active' : ''}`}
          onClick={() => onTitleClick(idx)}
        >
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${activeTitle === idx ? 'active' : ''}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className='ui styled fluid accordion'>{renderedItems}</div>;
};

export default Accordion;
