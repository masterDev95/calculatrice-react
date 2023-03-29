import React from 'react';

function Bouton(props) {
  return (
    <button onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Bouton;