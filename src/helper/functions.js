// To grouping all the data based on the groupID
// If a group exists it wont create a new one and the obj will be pushed to that group
// But if a group doesnt exists with that ID a new group will be created
const setInToGroups = (data) => {
  const groupedItems = [];

  const isGroupExists = mainGroupID => {
    return groupedItems.find(obj => obj.groupID === mainGroupID)
      ? true
      : false;
  };

  data.forEach(item => {
    if (isGroupExists(item.id)) {
      groupedItems.forEach(obj => obj.groupID === item.id && obj.items.push(item));
    } else {
      const newGroup = {
        groupID: item.id,
        items: [{ ...item }],
      };

      groupedItems.push(newGroup);
    }
  });

  return groupedItems;
};

// To add a new group in to the add list (whole group)
const addGroupToAddList = (addList, newItems) => {
  return [...addList, ...newItems]
}

// To remove a group from the add list (whole group)
const removeGroupFromAddList = (addList, groupId) => {
  const newAddList = addList.filter(obj => obj.id !== groupId)
  return newAddList
}

// To add a new group in to the delete list (whole group)
const addGroupToDeleteList = (deleteList, newItems) => {
  return [...deleteList, ...newItems]
}

// To remove a group from the delete list (whole group)
const removeGroupFromDeleteList = (deleteList, groupID) => {
  const newDeleteList = deleteList.filter(obj => obj.id !== groupID)
  return newDeleteList
}

// To add a new item into the add list (just an Obj)
const addObjToAddList = (addList, newItem) => {
  return [...addList, newItem]
}

// To remove an item from the add list (just an Obj)
const removeObjFromAddList = (addList, item) => {
  const newAddList = addList.filter(obj => obj.uniqueId !== item.uniqueId)
  return newAddList
}

// To add a new item into the delete list (just an Obj)
const addObjToDeleteList = (deleteList, newItem) => {
  return [...deleteList, newItem]
}

// To remove an item from the delete list (just an Obj)
const removeObjFromDeleteList = (deleteList, item) => {
  const newDeleteList = deleteList.filter(obj => obj.uniqueId !== item.uniqueId)
  return newDeleteList
}

// To delete similar objects of two array based on their uniqueId
const deleteSimilarObjectsOfTwoArray = (dataList, selected) => {
  const newList = selected.reduce((prevState, currentState) => {
    return prevState.filter(obj => obj.uniqueId !== currentState.uniqueId)
  }, dataList)

  return newList
}

// To check if a group exists in the considered list or not based on the groupId
const isGroupExistsInList = (list, groupID, groupItems) => {
  let index = 0

  list.forEach(obj => obj.id === groupID && index++)

  return index === groupItems.length ? true : false
}

// To check if an obj exists in the considered list or not based on the item uniqueId
const isObjExistsInList = (list, obj) => {
  return list.find(item => item.uniqueId === obj.uniqueId) 
  ? true
  : false
}

export { setInToGroups, addGroupToAddList, removeGroupFromAddList }
export { addGroupToDeleteList, removeGroupFromDeleteList, deleteSimilarObjectsOfTwoArray } 
export { isGroupExistsInList, addObjToAddList, removeObjFromAddList }
export { addObjToDeleteList, removeObjFromDeleteList, isObjExistsInList }