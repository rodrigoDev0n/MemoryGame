import { useRef } from "react";
import { useGameFunctions } from "../hooks/useGameFunctions";

export const Cards = ({ 
  fruits, 
  onClickHandle,
  index, 
  animateContainer,
}) => {

  const { dataState, animationCard } = useGameFunctions();
  const { name, image_url, active, cssClass } = fruits;
  const image = active ? image_url : '/assets/incognita.png';

  return (
    <div className={`${cssClass}`} onClick={() => onClickHandle(index) }>
        <img src={ image } alt={ name } id={ name } />
    </div>
  )
}
