// To send initial data into the store
const setAllData = (data) => {
  return { type: "SET_ALL_DATA", payload: data };
};

// To replace the current add list with a new one
const updateAddList = (addList) => {
  return { type: "UPDATE_ADD_LIST", payload: addList };
};

// To replace the current delete list with a new one
const updateDeleteList = (deleteList) => {
  return { type: "UPDATE_DELETE_LIST", payload: deleteList };
};

const addAction = () => {
  return { type: "ADD_ACTION" };
};

const deleteAction = () => {
  return { type: "DELETE_ACTION" };
};

export { setAllData, updateAddList, updateDeleteList, addAction, deleteAction };