function Card(props) {
  const { id, name, img, isClicked, clickHandler } = props;

  return (
    <li className="list__item" onClick={() => clickHandler(id)}>
      <div className="img__container">
        <img src={img} alt="505" className="img" />
      </div>
      <h1 className="name">{name}</h1>
    </li>
  );
}

export default Card;
