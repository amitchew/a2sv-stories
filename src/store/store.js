import { createStore } from 'redux';

const initialState = {
  stories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIKE_STORY':
      return {
        ...state,
        stories: state.stories.map((story) => {
          if (story.id === action.payload) {
            return {
              ...story,
              likes: story.likes + 1,
            };
          }

          return story;
        }),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
