export default function appendToEachArrayValue(array, appendString) {
  const newList = [];
  for (const idx of array) {
    newList.push(appendString + idx);
  }

  return newList;
}
