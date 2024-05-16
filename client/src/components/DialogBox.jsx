import React from "react";

const DialogBox = ({ isOpen, uniqueId, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-20 rounded shadow-md text-center ">
        <h2 className="text-xl mb-4">This is your unique ID</h2>
        <p className="text-lg font-semibold">{uniqueId}</p>
        <button
          className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DialogBox;
