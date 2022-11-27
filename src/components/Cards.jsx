
export const Cards = ({ 
  fruits, 
  onClickHandle,
  index,
}) => {

  const { 
    name, 
    image_url, 
    active, 
    cssClass 
  } = fruits;
  
  const image = active ? image_url : '../../public/images/incognita.png';

  return (
    <div 
      className={`${cssClass}`} 
      onClick={() => onClickHandle(index) }
    >
        <img 
          src={ image } 
          alt={ name } 
          id={ name } 
        />
    </div>
  )
}
