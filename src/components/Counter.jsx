import React, { useState } from 'react';

const Counter = () => {
  const [curValue, setCurValue] = useState(0);

  const addOne = () => {
    setCurValue(curValue + 1);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <div className='ui header'>
        <i className='icon search'></i>
        Current = {curValue}
      </div>
      <button className='ui button icon' onClick={() => addOne()}>
        <i className='icon plus'></i>
      </button>
    </div>
  );
};

export default Counter;
