import Validate from '../tools/classValidator'
import { API_MIN_ID, API_MAX_ID } from '../config/api'

export const validateCharacterId = (id) => {
  const validate = new Validate(id)
  validate.isNumber()
  validate.isValidated() && validate.isRange(API_MIN_ID, API_MAX_ID)
  return validate.resolved()
}
