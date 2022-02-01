const sortObjectArray = (arr, sortBy, sortOrder = "asc") => {
  const sortOrderNum = sortOrder === "asc" ? 1 : -1;
  return arr.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1 * sortOrderNum;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1 * sortOrderNum;
    }
    return 0;
  });
};

export default sortObjectArray;
