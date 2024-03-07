import { useState } from 'react';

const ListBox = ({ element }) => {
 const [isOpen, setIsOpen] = useState(true);

 return (
  <div className='box'>
   <button className='btn-toggle' onClick={() => setIsOpen((open) => !open)}>
    {isOpen ? '–' : '+'}
   </button>
   {isOpen && element}
  </div>
 );
};

export default ListBox;
