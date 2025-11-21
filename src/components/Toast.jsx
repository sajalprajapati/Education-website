import React from 'react';

const Toast = ({ message }) => {
  return (
    <div className="toast toast--success">
      ✅ {message}
    </div>
  );
};

export default Toast;
