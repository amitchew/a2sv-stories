import React, { useSelector, useDispatch } from 'react';
import StoriesList from './components/StoriesList';

const App = () => {
  const stories = useSelector((state) => state.stories);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>A2SV Stories</h1>
      <StoriesList stories={stories} />
    </div>
  );
};

export default App;
