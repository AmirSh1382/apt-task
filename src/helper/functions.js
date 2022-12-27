// For grouping data
export const setInToGroups = (data) => {
  const groupedItems = data.reduce((prevValue, currentValue) => {
    prevValue[currentValue.id]
      ? prevValue[currentValue.id].items.push(currentValue)
      : (prevValue[currentValue.id] = {
          id: currentValue.id,
          items: [currentValue],
        });

    return prevValue;
  }, {});

  return Object.values(groupedItems);
};
