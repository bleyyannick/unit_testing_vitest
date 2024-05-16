export function transformToNumber(value) {
  if (Array.isArray(value)) {
    const arrayOfNum = value.map((a) => +a);
    return arrayOfNum;
  }
  return +value;
}
