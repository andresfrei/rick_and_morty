export const randomGenerete = (min, max) => {
  const range = max - min
  const random = Math.random() * range
  const rounded = Math.floor(random)
  return min + rounded
}
