// src/components/UploadImageModal.jsx
import React from 'react';
import ProfileImageUploader from './ProfileImageUploader'; // The uploader logic we built earlier

const UploadImageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // ✅ WhatsApp-style dropdown/modal
<div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg p-4 z-50 w-80">
  <h2 className="text-md font-semibold mb-2">Upload Profile Image</h2>
  <ProfileImageUploader />
  <div className="text-right mt-3">
    <button
      onClick={onClose}
      className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
    >
      Close
    </button>
  </div>
</div>

  );
};

export default UploadImageModal;
