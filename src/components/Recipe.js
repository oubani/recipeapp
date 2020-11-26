import React from 'react';
import styles from './Recipe.module.css';

const Recipe = ({ recipe }) => {
  const { card, header, cardinfo, totalFood } = styles;
  const { image, label, calories, totalDaily } = recipe;
  const array = [totalDaily];
  console.log(array);
  return (
    <div className={card}>
      <img src={image} alt={label} />
      <div className={cardinfo}>
        <h2 className={header}>{label}</h2>
        <p className={totalFood}>
          calories :<b> {calories.toFixed(3)}</b>
        </p>

        <p className={totalFood}>
          total Daily : <br />
          <br />
          <p className={totalFood}>
            {totalDaily.CA.label} :
            <b>
              {' '}
              {totalDaily.CA.quantity.toFixed(3)}
              {totalDaily.CA.unit}
            </b>
          </p>
          <p className={totalFood}>
            {totalDaily.CHOLE.label} :
            <b>
              {' '}
              {totalDaily.CHOLE.quantity.toFixed(3)}
              {totalDaily.CHOLE.unit}
            </b>
          </p>
          <p className={totalFood}>
            {totalDaily.FAT.label} :
            <b>
              {' '}
              {totalDaily.FAT.quantity.toFixed(3)}
              {totalDaily.FAT.unit}
            </b>
          </p>
          <p className={totalFood}>
            {totalDaily.FE.label} :
            <b>
              {' '}
              {totalDaily.FE.quantity.toFixed(3)}
              {totalDaily.FE.unit}
            </b>
          </p>
          <p className={totalFood}>
            {totalDaily.NA.label} :
            <b>
              {' '}
              {totalDaily.NA.quantity.toFixed(3)}
              {totalDaily.NA.unit}
            </b>
          </p>
          <p className={totalFood}>
            {totalDaily.MG.label} :
            <b>
              {' '}
              {totalDaily.MG.quantity.toFixed(3)}
              {totalDaily.MG.unit}
            </b>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Recipe;
