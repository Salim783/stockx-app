import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);

    const fetchUserProfile = async () => {
        try {
            const response = await axios.get('/api/user/profile');
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    useEffect(() => {
        // Fetch user profile data from backend when component mounts
        fetchUserProfile();
    }, []);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('profileImage', file);

        try {
            await axios.post('/api/user/profile/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            // Refresh user profile after image upload
            fetchUserProfile();
        } catch (error) {
            console.error('Error uploading profile image:', error);
        }
    };

    return (
        <div>
            {user && (
                <div>
                    <h2>Profil de {user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>Téléphone: {user.phone}</p>
                    <p>Adresse: {user.address}</p>
                    <img src={user.profileImage} alt="Profil" />
                    <input type="file" onChange={handleImageUpload} />
                </div>
            )}
        </div>
    );
};

export default Profile;
