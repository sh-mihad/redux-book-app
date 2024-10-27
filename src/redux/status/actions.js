import { FILTERS, SEARCHTERM } from "./actionType";

export const searchTerms = (value) => {
  return {
    type: SEARCHTERM,
    payload : value,
  };
};
export const filters = (value) => {
  return {
    type: FILTERS,
    payload:value
  };
};
