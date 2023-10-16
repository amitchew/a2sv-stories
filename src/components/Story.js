import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

const Story = ({ story }) => {
  const [likes, setLikes] = useState(story.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <h3>{story.title}</h3>
      <p>{story.content}</p>
      <Button onClick={handleLike}>Like ({likes})</Button>
    </div>
  );
};

export default Story;
