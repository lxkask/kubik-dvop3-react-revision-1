import React from 'react';

const CardDynamic = (props) => {
  const { title, description, link } = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>Odkaz</a>
    </div>
  );
};

export default CardDynamic;