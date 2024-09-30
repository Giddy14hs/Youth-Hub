const contactsReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH_ALL_CONTACTS":
        return action.payload;
  
      case "CREATE_CONTACT":
        return [...state, action.payload];
  
      // Add more cases if necessary for updating or deleting
      default:
        return state;
    }
  };
  
  export default contactsReducer;
  