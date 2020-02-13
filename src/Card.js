import React from "react";

const Card = () => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* // styling using tachyons  */}
      <img alt="robots" src="https://robohash.org/chrised?200x200" />
      <div>
        <h2>Chrise D</h2>
        <p>chrise.d@gmail.ca</p>
      </div>
    </div>
  );
};

export default Card;
