export const increaseFirstLetter = (str) =>
  str.trim().charAt(0).toUpperCase() + str.slice(1);

export const formatCamelCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .replace(/^./, (char) => char.toUpperCase());
};

export const addSpaceNumber = (str) => str.replace(/(\d)([a-zA-Z])/g, "$1 $2");
