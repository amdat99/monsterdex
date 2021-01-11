import React from 'react';

import './cardlist.css'

const Scroll = (props) => {
  return (
    <div className = 'example' 
        style={{ overflowY: 'scroll',
        overflowX: 'hidden',   height: '897px', maxWwidth: '100%'}}>
      {props.children}
    </div>
  );
};

export default Scroll;