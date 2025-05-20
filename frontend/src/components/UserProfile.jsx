import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No token found. Please login.');
          setLoading(false);
          return;
        }

        const res = await axios.get('http://localhost:5000/api/procted/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(res.data);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to fetch user profile.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) return <p style={styles.loading}>Loading profile...</p>;
  if (error) return <p style={styles.error}>{error}</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>👤 User Profile</h2>
      <div style={styles.profileBox}>
        <div style={styles.imageSection}>
          {user.profieImage ? (
            <img
              src={`http://localhost:5000/${user.profieImage}`}
              alt="Profile"
              style={styles.profileImage}
            />
          ) : (
            <div style={styles.noImage}>No Image</div>
          )}
        </div>

        <div style={styles.detailsSection}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Contact:</strong> {user.mob}</p>
          {/* Add more fields if needed */}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontSize: '28px',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#0d9488',
  },
  profileBox: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    background: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  imageSection: {
    flex: '0 0 150px',
    textAlign: 'center',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '50%',
    border: '3px solid #0d9488',
  },
  noImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
  },
  detailsSection: {
    flex: '1',
    fontSize: '16px',
    lineHeight: '1.8',
  },
  loading: {
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '18px',
  },
  error: {
    textAlign: 'center',
    marginTop: '2rem',
    color: 'red',
    fontSize: '16px',
  },
};

export default UserProfile;
