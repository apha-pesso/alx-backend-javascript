export default function appendToEachArrayValue(array, appendString) {
  const newList = [];
  for (let idx of array) {
    newList.push(appendString + idx);
  }

  return newList;
}
