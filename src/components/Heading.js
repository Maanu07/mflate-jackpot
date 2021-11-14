import React from "react";
import PropTypes from "prop-types";
import Timer from "./Timer";
import Input from "./Input";
import Round from "./Round";

function Heading({ text, arc, radius }) {
  const characters = text.split("");
  const degree = arc / characters.length;

  return (
    <div className='wrapper'>
      <h1>
        {characters.map((char, i) => (
          <span
            key={`heading-span-${i}`}
            style={{
              height: `${radius}px`,
              transform: `rotate(${degree * i - arc / 2}deg)`,
              transformOrigin: `0 ${radius}px 0`,
            }}
          >
            {char}
          </span>
        ))}
      </h1>
      <h4 className='subheading'>NEXT DRAW IN </h4>
      <Timer />
      <Input />
      <div className='winning'>
        <h3>WINNING %</h3>
        <span>10%</span>
      </div>
      <Round />
    </div>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  arc: PropTypes.number, // how curved do you want the text
  radius: PropTypes.number, // how big do you want the curve
};

Heading.defaultProps = {
  arc: 120,
  radius: 400,
};

export default Heading;
