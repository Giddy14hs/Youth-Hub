import {combineReducers} from 'redux'
import authentication from "./authentication"
import contacts from "./contact.js"

export default combineReducers({
  contacts,
  authentication})