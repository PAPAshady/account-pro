import React from 'react';

function Input({ label, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="mb-1 block">{label}</label>
      <div className="bg-foreground rounded-box-ltr flex grow items-center gap-2 px-3.5">
        <input type={type} placeholder={placeholder} className="h-11.25 grow outline-none" />
      </div>
    </div>
  );
}

export default Input;
