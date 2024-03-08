import { useState } from 'react';
import Star from './Star';

const containerStyles = {
 display: 'flex',
 alignItems: 'center',
 gap: '16px',
};

const starContainerStyle = {
 display: 'flex',
};

const textStyle = {
 lineHeight: '1',
 margin: '0',
};

const StarRating = ({ maxRating = 10 }) => {
 const [rating, setRating] = useState(0);

 return (
  <div style={containerStyles}>
   <div style={starContainerStyle}>
    {Array.from({ length: maxRating }, (_, i) => (
     <Star key={i} onRate={() => setRating(i + 1)} full={rating >= i + 1} />
    ))}
   </div>
   <p style={textStyle}>{rating || ''}</p>
  </div>
 );
};

export default StarRating;
