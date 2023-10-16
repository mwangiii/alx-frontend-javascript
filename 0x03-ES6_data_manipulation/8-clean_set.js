export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter(value => value.startsWith(startString))
    .join('-');
}
