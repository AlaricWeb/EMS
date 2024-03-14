export function where<T extends object>(node: T[], condition: Partial<T>) {
  return node.filter((item) => {
    return Object.keys(condition).every((key) => {
      return item[key] === condition[key];
    });
  });
}

export function find<T extends object>(
  node: T[],
  condition: Partial<T>
): T | undefined {
  return node.find((item) => {
    return Object.keys(condition).every((key) => {
      return item[key] === condition[key];
    });
  });
}
/**
 * Returns a slice of an array from a specified start index to an end index.
 * @param node - The array to slice.
 * @param page - The index of the first element in the slice. Defaults to 1.
 * @param limit - The number of elements in the slice. Defaults to 10.
 * @returns The sliced array.
 */
export function page<T extends object>(
  node: T[],
  page: number = 1,
  limit: any = "10"
): T[] {
  limit = parseInt(limit);
  const start = (page - 1) * limit;
  let end = start + limit;
  if (end > node.length) end = node.length;
  return node.slice(start, end);
}

export function column<T>(node: Array<T>, columnKey: keyof T) {
  return node.map((item) => item[columnKey]);
}
