import * as api from "../api";
import {
    CREATE_CONTACT,
    FETCH_ALL_CONTACTS
} from "../constants/actionTypes";

export const getContacts = () => async(dispatch) =>{
    try {
      const response = await api.fetchContacts();
      const data = response ? response.data : null;
      if (data) {
        dispatch({ type: FETCH_ALL_CONTACTS, payload: data });
      } else {
        console.log("Failed to fetch contacts");
      }
    } catch (error) {
      console.log(error.message)
    }
  };
export const createContact = (contact) => async (dispatch) => {
    try {
        const { data } = await api.createContact(contact);
        dispatch({ type: CREATE_CONTACT, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

