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

const StarRating = ({
 maxRating = 10,
 color = '#fcc419',
 size = 48,
 className = '',
 messages = [],
 defaultRating = 0,
}) => {
 const [rating, setRating] = useState(defaultRating);
 const [tempRating, setTempRating] = useState(0);

 const textStyle = {
  lineHeight: '1',
  margin: '0',
  color,
  fontSize: `${size / 1.5}px`,
 };

 return (
  <div style={containerStyles} className={className}>
   <div style={starContainerStyle}>
    {Array.from({ length: maxRating }, (_, i) => (
     <Star
      key={i}
      full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
      onRate={() => setRating(i + 1)}
      onHoverIn={() => setTempRating(i + 1)}
      onHoverOut={() => setTempRating(0)}
      color={color}
      size={size}
     />
    ))}
   </div>
   <p style={textStyle}>
    {messages.length === maxRating
     ? messages[tempRating ? tempRating - 1 : rating - 1]
     : tempRating || rating || ''}
   </p>
  </div>
 );
};

export default StarRating;
