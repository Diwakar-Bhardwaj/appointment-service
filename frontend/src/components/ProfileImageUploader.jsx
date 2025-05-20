import React, { useState, useEffect } from 'react';

const ProfileImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!selectedImage) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('photo', selectedImage);

    try {
      const token = localStorage.getItem('token'); // Get token from localStorage
      const response = await fetch('http://localhost:5000/api/procted/profileImage', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Send JWT token
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage('Upload successful');
        console.log('User:', result.user);
      } else {
        setMessage(result.message || 'Upload failed');
      }
    } catch (err) {
      console.error(err);
      setMessage('Upload failed');
    }
  };

  return (
    <div className="p-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div className="mt-4">
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-full border"
          />
        </div>
      )}
      <button
        onClick={handleUpload}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload
      </button>
      {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
    </div>
  );
};

export default ProfileImageUploader;
