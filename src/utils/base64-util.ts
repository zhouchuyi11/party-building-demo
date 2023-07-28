/**
 * 字符串转base64
 * @param str
 */
export function stringToBase64(str: string) {
	return btoa(str)
}

/**
 * base64转字符串
 * @param base64
 */
export function base64ToString(base64: string) {
	return atob(base64)
}
