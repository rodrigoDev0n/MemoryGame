
export const Cards = ({ 
  fruits, 
  onClickHandle,
  index,
}) => {

  const { 
    name, 
    emoji, 
    active, 
    cssClass 
  } = fruits;
  
  const emojis = active ? emoji : '🧠';

  return (
    <div 
      className={`${cssClass}`} 
      onClick={() => onClickHandle(index) }
    >
        <p className="emojis">{ emojis }</p>
    </div>
  )
}
