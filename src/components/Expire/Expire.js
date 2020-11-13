import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Expire = ({ delay, children }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, delay);
  }, [delay]);

  return visible ? <div>{children}</div> : <div />;
};

Expire.propTypes = {
  delay: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Expire;
