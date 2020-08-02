import {combineReducers} from "redux";
import data from "./reducers/data/data";
import filter from "./reducers/filter/filter";
import active from "./reducers/active/active";
import user from "./reducers/user/user";
import reviews from './reducers/review/review';
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.FILTER]: filter,
  [NameSpace.ACTIVE]: active,
  [NameSpace.USER]: user,
  [NameSpace.REVIEWS]: reviews
});
