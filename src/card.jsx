function Card(props) {
  const { name, img, shuffleArray } = props;

  return (
    <li className="list__item" onClick={shuffleArray}>
      <div className="img__container">
        <img src={img} alt="505" className="img" />
      </div>
      <h1 className="name">{name}</h1>
    </li>
  );
}

export default Card;
