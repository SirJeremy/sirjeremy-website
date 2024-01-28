import { useState } from 'react';

const FunnyJoke = ({className="", children=null}) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button className={className + (isClicked ? ' animate-funnyJoke' : '')} onClick={() => setIsClicked(true)}>
      {children}
    </button>
  );

};

export default FunnyJoke;