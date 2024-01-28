import vine from '@vinejs/vine'
import { FieldContext } from '@vinejs/vine/types'

/**
 * Implementation
 */
function isLanguagePattern(value: unknown, options: unknown, field: FieldContext) {
  if (typeof value !== 'string') {
    return
  }

  try {
    const locale = new Intl.Locale(value)['baseName']
    return Boolean(locale)
  } catch (e) {
    field.report('The {{ field }} is not a valid locale.', 'Intl.Locale', field)
    return false
  }
}

export const isValidLanguagePattern = vine.createRule(isLanguagePattern)
