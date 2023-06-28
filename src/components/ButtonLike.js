import React from 'react';
import { Button } from 'antd';

const ButtonLike = ({ user, handleLikeUser, handleNextCard }) => {
  const handleLike = () => {
    // Voer de functie uit om een gebruiker te liken en naar de volgende kaart te gaan
    handleLikeUser(user);
    handleNextCard();
  };

  return (
    <Button type="primary" onClick={handleLike}>
      Like
    </Button>
  );
};

export default ButtonLike;