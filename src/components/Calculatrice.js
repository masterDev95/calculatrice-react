/* eslint-disable no-eval */
import React, { useState } from 'react';
import Bouton from './Bouton';
import Ecran from './Ecran';

function Calculatrice() {

  const [displayValue, setDisplayValue] = useState("0");
  const [reset, setReset] = useState(false);
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operateurs = ['+', '-', '*', '/'];

  function handleButtonClick(buttonLabel) {
    if (operateurs.includes(buttonLabel) && reset) {
      setReset(false);
      setDisplayValue(displayValue + buttonLabel);
      return;
    }

    switch (buttonLabel) {
      case "C":
        setDisplayValue("0");
        break;
      case "=":
        setDisplayValue(eval(displayValue));
        setReset(true);
        break;
      default:
        if (displayValue === "0" || reset) {
          setDisplayValue(buttonLabel);
          setReset(false);
        } else {
          setDisplayValue(displayValue + buttonLabel);
        }
        break;
    }
  }

  return (
    <>
      <Ecran value={displayValue} />

      <section>
        {numeros.map((numero) => (
          <Bouton
            key={numero}
            label={numero.toString()}
            onClick={() => handleButtonClick(numero.toString())}
          />
        ))}

        {operateurs.map((operation) => (
          <Bouton
            key={operation}
            label={operation}
            onClick={() => handleButtonClick(operation)}
          />
        ))}

        <Bouton key={"="} label="=" onClick={() => handleButtonClick("=")} />
        <Bouton key={"C"} label="C" onClick={() => handleButtonClick("C")} />
      </section>
    </>
  );
}

export default Calculatrice;