export default function hasValuesFromArray(newSet, arr) {
  return arr.every((value) => newSet.has(value));
}
