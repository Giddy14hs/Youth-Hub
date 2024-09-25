import {combineReducers} from 'redux'
import authentication from "./authentication"
import Contacts from "./contact"

export default combineReducers({
  contacts: Contacts,
  authentication})