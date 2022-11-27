import requireContext from "require-context";

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
  
  const image = active ? image_url : 'https://github.com/rodrigoDev0n/MemoryGame/blob/main/public/images/incognita.png?raw=true';

  return (
    <div 
      className={`${cssClass}`} 
      onClick={() => onClickHandle(index) }
    >
        <img 
          src={ requireContext(image, false) } 
          alt={ name } 
          id={ name } 
        />
    </div>
  )
}
