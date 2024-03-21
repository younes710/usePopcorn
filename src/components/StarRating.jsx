import { useState } from 'react';
import Star from './Star';
import PropTypes from 'prop-types';

const containerStyles = {
 display: 'flex',
 alignItems: 'center',
 gap: '16px',
};

const starContainerStyle = {
 display: 'flex',
};

StarRating.propTypes = {
 maxRating: PropTypes.number,
 defaultRating: PropTypes.number,
 color: PropTypes.string.isRequired,
 size: PropTypes.number,
 className: PropTypes.string,
 messages: PropTypes.array,
 onSetRating: PropTypes.func,
};

export default function StarRating({
 maxRating = 10,
 color = '#fcc419',
 size = 48,
 className = '',
 messages = [],
 defaultRating = 0,
 onSetRating,
}) {
 const [rating, setRating] = useState(defaultRating);
 const [tempRating, setTempRating] = useState(0);

 const handleSetRating = (rating) => {
  setRating(rating);
  onSetRating(rating);
 };

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
      onRate={() => handleSetRating(i + 1)}
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
}
