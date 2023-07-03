export const getData = (key) => {
  const res = localStorage.getItem(key)
  if (!res) return null
  return JSON.parce(res)
}

export const setData = (key, data) => {
  const stringData = JSON.stringify(data)
  localStorage.setItem('keyChar', stringData)
}
