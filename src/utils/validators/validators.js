export function required(value) {
	if (value) return undefined
	return 'Поле не должно быть пустым'
}

export const maxLengthCreator = (maxLength) => (value) => {
	if (value && value.length > maxLength)
		return `Максимальная длина: ${maxLength} символов`
	return undefined
}

export function validateEmail(email) {
	const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/
	if (emailRegex.test(email)) return undefined
	return 'incorrect email'
}
