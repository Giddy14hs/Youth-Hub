const storyReducer = (state = [], action) => {
  switch (action.type) {
      case "FETCH_ALL_CONTACTS":
          return action.payload;
      case "CREATE_CONTACT":
          return [...state, action.payload];
      default:
          return state;
  }

};

export default storyReducer;