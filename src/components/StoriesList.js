import React from 'react';
import Story from './Story';

const StoriesList = ({ stories }) => {
  return (
    <div className="flex flex-col gap-4">
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
};

export default StoriesList;
