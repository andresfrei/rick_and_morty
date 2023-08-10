export default class Validator {
  constructor (value) {
    this.value = value
    this._errors = []
  }

  isNumber () {
    const res = !isNaN(Number(this.value))
    !res && this._errors.push('notNumber')
    return res
  }

  isEmail () {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const res = regex.test(this.value)
    !res && this._errors.push('notEmail')
    return res
  }

  isMax (max) {
    const res = this.value <= max
    !res && this._errors.push('notMax')
    return res
  }

  isMin (min) {
    const res = this.value >= min
    !res && this._errors.push('notMin')
    return res
  }

  isRange (min, max) {
    const res = this.value >= min && this.value <= max
    !res && this._errors.push('notRange')
    return res
  }

  isContainsLetters () {
    const regex = /[a-zA-Z]/
    const res = regex.test(this.value)
    !res && this._errors.push('notContainLetters')
    return res
  }

  isContainNumbers () {
    const regex = /\d/
    const res = regex.test(this.value)
    !res && this._errors.push('notContainNumbers')
    return res
  }

  isContainSymbols () {
    const regex = /\W/
    const res = regex.test(this.value)
    !res && this._errors.push('notContainSymbol')
    return res
  }

  isLongMin (long) {
    const res = this.value.length >= long
    !res && this._errors.push('notMinLong')
    return res
  }

  isPasswordSecure () {
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{5,}$/
    const res = regex.test(this.value)
    !res && this._errors.push('notPasswordSecure')
    return res
  }

  isValidated () {
    return this._errors.length === 0
  }

  resolved () {
    return {
      validated: this.isValidated(),
      errors: this._errors
    }
  }
}
