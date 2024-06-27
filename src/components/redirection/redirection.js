import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext'

const Redirection = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/acceuil');
    } else {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return null;
};

export default Redirection;
