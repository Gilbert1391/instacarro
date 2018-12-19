import React from "react";

const Card = ({ data }) => {
  return (
    <React.Fragment>
      {data.map(c => (
        <div className="card">
          <div className="card__thumbnail">
            <img src={c.imageUrl} alt={c.make} className="card__img" />
            <div className="card__thumbnail--details">ver detalhes</div>
          </div>
          <div className="card__description">
            <div className="card__row">
              <div className="card__column">
                <p className="card__column--title">Tempo restante</p>
                {c.remainingTime}
              </div>
            </div>
            <div className="card__row">
              <p className="card__desc">{`${c.make} ${c.model} ${c.version} ${
                c.year
              }`}</p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Card;
