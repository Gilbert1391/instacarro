import React from "react";

const Card = ({ data }) => {
  return (
    <React.Fragment>
      {data.map(c => (
        <div className="card" key={c.id}>
          <div className="card__thumbnail">
            <img src={c.imageUrl} alt={c.make} className="card__img" />
            <div className="card__thumbnail--details">ver detalhes</div>
          </div>
          <div className="card__details">
            <div className="group-row group-row--flex">
              <div className="group-row__col">
                <p className="group-row__title">Tempo restante</p>
                <p className="group-row__text-color group-row__text-color--orange">
                  15:55:55
                </p>
              </div>
              <div className="group-row__vl">&nbsp;</div>
              <div className="group-row__col">
                <p className="group-row__title">Ultima oferta</p>
                <p className="group-row__text-color group-row__text-color--green">
                  R$ 29.250
                </p>
              </div>
            </div>
            <div className="group-row">
              <p className="group-row__desc">
                {`${c.make} ${c.model} ${c.version} ${c.year}`}
              </p>
            </div>
            <div className="group-row group-row--flex">
              <div className="group-row__col">{c.year}</div>
              <div className="group-row__vl">&nbsp;</div>
              <div className="group-row__col">{`${c.km} km`}</div>
            </div>
            <button type="button" className="btn btn--card">
              Fazer oferta
            </button>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Card;
