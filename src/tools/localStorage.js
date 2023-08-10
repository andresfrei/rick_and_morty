export const getData = (key) => {
  const res = localStorage.getItem(key)
  if (!res) return null
  return res
}

export const setData = (key, data) => {
  if (typeof data === 'object') data = JSON.stringify(data)
  localStorage.setItem(key, data)
}
