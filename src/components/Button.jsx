import React from 'react';

function Button({ onClick }) {
  return (
    <button className="center-button" onClick={onClick}>
      Eplore our collection of wallpapers!
    </button>
  );
}

export default Button;
