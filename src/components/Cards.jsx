import { useRef } from "react";

export const Cards = ({ fruits, onClickHandle, index, animateContainer }) => {
  
  const { name, image_url, active } = fruits;
  const image = active ? image_url : '/assets/incognita.png';

  return (
    <div ref={ animateContainer } className="card_container" onClick={() => onClickHandle(index) }>
        <img src={ image } alt={ name } id={ name } />
    </div>
  )
}
