import React from 'react';
import '../styles/DialogBox.css'; // for custom animation styles

const DialogBox = () => {
  return (
    <div className="flex items-center justify-center h-200 w-100 bg-gray-900">
      <div className="relative hover-border p-6 bg-gray-800 rounded-xl text-white shadow-lg transition-transform duration-300 hover:scale-105 w-[300px]">
        <h2 className="text-xl font-bold mb-2">Dialog Title</h2>
        <p className="text-sm text-gray-300">
          This is a custom dialog box with a glowing animated border effect on hover.
        </p>
      </div>
    </div>
  );
};

export default DialogBox;
