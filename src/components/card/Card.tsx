import * as React from "react";
import { Link } from "react-router-dom";
import Counter from "../counter/Counter";
import "./Card.css";


interface ICardProps {
  id: number;
  slug: string;
  name: string;
  quantity: string;
  alcohol: string;
  rating: number;
  image: string;
}
 
const Card: React.SFC<ICardProps> = (props) => {
  return (
     <div className="card">
    <header className="card__header">
      <h1 className="card__title">{props.name}</h1>
    </header>
    <ul className="card__list">
      <li className="card__item">{props.quantity}</li>
      <li className="card__item">{props.alcohol}</li>
    </ul>
    <Link to={`/product/${props.slug}`}>
      <div className="card__image">
        <img src={props.image} alt={props.name} />
      </div>
    </Link>
    <div className="rating">
      <div style={{ width: props.rating * 20 + "%" }} />
    </div>
    <Counter key={"counter-" + props.id} productId={props.id} />
  </div>
  );
}

Card.defaultProps = {
  id: 0,
  slug: "product",
  name: "Default Props",
  quantity: "100ml",
  alcohol: "4%",
  rating: 3,
  image: "https://www.beergium.com/7190-big_default/dugges-interboro-33cl.jpg"
};
 
export default Card;