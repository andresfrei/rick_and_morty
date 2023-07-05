export const validateCharacterId = (id) => {
  if (typeof id !== 'number') return { isValidate: false, error: 'noNumber' }
  if (id < 1 || id > 827) return { isValidate: false, error: 'outRange' }

  return { isValidate: true }
}
