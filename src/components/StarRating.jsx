const containerStyles = {
 display: 'flex',
 alignItems: 'center',
 gap: '16px',
};

const starContainerStyle = {
 display: 'flex',
 gap: '4px',
};

const textStyle = {
 lineHeight: '1',
 margin: '0',
};

const StarRating = ({ maxRating = 10 }) => {
 return (
  <div style={containerStyles}>
   <div style={starContainerStyle}>
    {Array.from({ length: maxRating }, (_, i) => (
     <span key={i}>S{i + 1}</span>
    ))}
   </div>
   <p style={textStyle}>10</p>
  </div>
 );
};

export default StarRating;
