import React, { useRef, useState } from 'react';

const Link = ({ className, href, children }) => {
  const [active, setActive] = useState(href);
  const ref = useRef();

  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // TODO: how to make each item to be activated

    e.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a
      ref={ref}
      onClick={onClick}
      className={`${className} ${
        active === window.location.pathname ? 'active' : ''
      }`}
      href={href}
    >
      {children}
    </a>
  );
};

export default Link;
