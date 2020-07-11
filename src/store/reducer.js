import {combineReducers} from "redux";
import data from "./reducers/data/data.js";
import filter from "./reducers/filter/filter.js";
import active from "./reducers/active/active.js";
import details from "./reducers/details/details.js";
import user from "./reducers/user/user.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.FILTER]: filter,
  [NameSpace.ACTIVE]: active,
  [NameSpace.DETAILS]: details,
  [NameSpace.USER]: user
});
