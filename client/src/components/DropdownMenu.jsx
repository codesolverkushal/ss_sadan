import React from 'react';

function DropdownMenu({ content }) {
  return (
    <div className="absolute bg-white shadow-md py-2 mt-1 w-48 rounded-lg z-10">
      {content}
    </div>
  );
}

export default DropdownMenu;
