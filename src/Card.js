import React from "react";

const Card = props => {
  const { name, emai, idl } = props;
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* // styling using tachyons  */}
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      {/* template strings used to randomise robot id image  */}
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
