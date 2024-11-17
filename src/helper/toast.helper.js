/**
 * Enter toast type.
 * You drink it when the game begins.
 * @type {string}
 */
export const ENTER_TOAST = 'ENTER'

/**
 * Exit toast type.
 * You drink it when the game ends.
 * @type {string}
 */
export const EXIT_TOAST = 'EXIT'

/**
 * Toast map.
 * This is an association array of toast types (key) and toasts (value)
 * A toast consists of its caption and text of the toast.
 * @type {Map<String, Object>}
 */
export const toastMap = new Map()

toastMap.set(ENTER_TOAST, {caption: 'Время выпить входной тост!', toastText: 'За то, чтобы Господь сохранил нас!'})
toastMap.set(EXIT_TOAST, {caption: 'Время выпить выходной тост!', toastText: 'Спасибо, Господь, что сохранил нас!'})