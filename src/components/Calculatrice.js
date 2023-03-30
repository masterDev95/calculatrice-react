/* eslint-disable no-eval */
import React, { useState } from 'react';
import Bouton from './Bouton';
import Ecran from './Ecran';
import '../styles/Calculatrice.css'

function Calculatrice() {

  const [displayValue, setDisplayValue] = useState("0");
  const [reset, setReset] = useState(false);
  
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operateurs = ['+', '-', '*', '/'];

  function handleButtonClick(buttonLabel) {
    if (
      operateurs.includes(buttonLabel) &&
      reset &&
      displayValue !== undefined
    ) {
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
      case "🔙":
        setDisplayValue(displayValue.slice(0, -1));
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
    <div className="calculatrice-container">
      <div className="calculatrice">
        <Ecran value={displayValue} />

        <section className="pave">
          <div className="numeros">
            {numeros.map((numero) => (
              <Bouton
                key={numero}
                label={numero.toString()}
                onClick={() => handleButtonClick(numero.toString())}
              />
            ))}
          </div>

          <div className="operateurs">
            {operateurs.map((operateur) => (
              <Bouton
                key={operateur}
                label={operateur}
                onClick={() => handleButtonClick(operateur)}
              />
            ))}
          </div>

          <div className="boutons-specials">
            <Bouton
              key={"🔙"}
              label="🔙"
              onClick={() => handleButtonClick("🔙")}
            />
            <Bouton
              key={"C"}
              label="C"
              onClick={() => handleButtonClick("C")}
            />
            <Bouton
              key={"="}
              label="="
              onClick={() => handleButtonClick("=")}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Calculatrice;