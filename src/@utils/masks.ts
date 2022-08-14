type MaskType =
  | 'tel'
  | 'tel-8'
  | 'tel-9'
  | 'cpf'
  | 'cnpj'
  | 'cpf-cnpj'
  | 'cep'
  | 'date'
  | 'time'

export const onlyNumbers = (value: string, digits?: number) => {
  const numbers = value.replace(/\D/g, '')
  if (digits && numbers.length > digits) {
    return numbers.slice(0, digits)
  }
  return numbers
}

export const applyMask = (value: string, type: MaskType) => {
  let cleared = ''
  let formatted = ''
  switch (type) {
    case 'tel':
      cleared = onlyNumbers(value, 11)
      formatted = cleared.length <= 10 ? '(__) ____-____' : '(__) _____-____'
      break
    case 'tel-8':
      cleared = onlyNumbers(value, 10)
      formatted = '(__) ____-____'
      break
    case 'tel-9':
      cleared = onlyNumbers(value, 11)
      formatted = '(__) _____-____'
      break
    case 'cpf':
      cleared = onlyNumbers(value, 11)
      formatted = '___.___.___-__'
      break
    case 'cnpj':
      cleared = onlyNumbers(value, 14)
      formatted = '__.___.___/____-__'
      break
    case 'cep':
      cleared = onlyNumbers(value, 8)
      formatted = '_____-___'
      break
    case 'cpf-cnpj':
      cleared = onlyNumbers(value, 14)
      formatted = cleared.length <= 11 ? '___.___.___-__' : '__.___.___/____-__'
      break
    case 'date':
      cleared = onlyNumbers(value, 8)
      formatted = '__/__/__'
      break
    case 'time':
      cleared = onlyNumbers(value, 4)
      formatted = '__:__'
      break
    default:
      break
  }

  for (let i = 0; i < cleared.length; ++i) {
    formatted = formatted.replace('_', cleared.substring(i, i + 1))
  }

  const lastDigitIndex = formatted.lastIndexOf(cleared[cleared.length - 1])
  return formatted.substring(0, lastDigitIndex > -1 ? lastDigitIndex + 1 : 0)
}
