export function alphaSort(sortField){
  return (one, two) => one[sortField] > two[sortField];
}

export function parseStringToArray(input) {
  return Array.isArray(input)
    ? input.map(el => el.trim())
    : input.split(',').map(el => el.trim());
}
