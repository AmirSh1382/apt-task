// Functions
import { deleteSimilarObjectsOfTwoArray } from "../../helper/functions";

const initialState = {
  allData: [],
  selectedData: [],
  addList: [],
  deleteList: [],
};

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_ALL_DATA":
      return {
        ...state,
        allData: [...payload],
      };

    case "UPDATE_ADD_LIST":
      return {
        ...state,
        addList: [...payload],
      };

    case "UPDATE_DELETE_LIST":
      return {
        ...state,
        deleteList: [...payload],
      };

    case "ADD_ACTION":
      const selectedData = [...state.selectedData, ...state.addList];
      return {
        ...state,
        selectedData,
        allData: deleteSimilarObjectsOfTwoArray(state.allData, selectedData),
        addList: [],
      };

    case "DELETE_ACTION":
      const allData = [...state.deleteList, ...state.allData];
      return {
        ...state,
        allData,
        selectedData: deleteSimilarObjectsOfTwoArray(state.selectedData, allData),
        deleteList: [],
      };

    default:
      return state;
  }
};

export default dataReducer;