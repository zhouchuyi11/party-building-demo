/**
 * browser-util.js
 * 浏览器参数工具类
 * 你是一段成熟的代码，要学会自己改bug  ----我是小尾巴
 */

const param = {
	userAgent: window.navigator.userAgent.toLowerCase(),
	version: window.navigator.appVersion,
	language: window.navigator.language.toLowerCase()
}

/**
 * 获取浏览器标识
 * @returns {string}
 */
export function getUserAgent() {
	return param.userAgent
}

/**
 * 获取浏览器的版本
 * @returns {string}
 */
export function getAppVersion() {
	return param.version
}

/**
 * 获取浏览器的语言信息
 * @returns {string}
 */
export function getLanguage() {
	return param.language
}

/**
 * 是否为IE内核
 * @returns {boolean}
 */
export function isTrident() {
	return param.userAgent.indexOf('trident') > -1 || param.userAgent.indexOf('msie') !== -1
}

/**
 * 是否为opera内核
 * @returns {boolean}
 */
export function isPresto() {
	return !!param.userAgent.match(/presto/i)
}

/**
 * 是否为苹果、谷歌内核
 * @returns {boolean}
 */
export function isWebKit() {
	return !!param.userAgent.match(/applewebkit/i)
}

/**
 * 是否为火狐内核
 */
export function isGecko() {
	return !!param.userAgent.match(/gecko/i) && param.userAgent.indexOf('khtml') === -1
}

/**
 * 是否为移动终端
 * @returns {boolean}
 */
export function isMobile() {
	return !!param.userAgent.match(/applewebkit.*mobile.*/i)
}

/**
 * ios终端
 * @returns {boolean}
 */
export function isIOS() {
	return !!param.userAgent.match(/\(i[^;]+;( u;)? cpu.+mac os x/i)
}

/**
 * android终端
 * @returns {boolean}
 */
export function isAndroid() {
	return !!param.userAgent.match(/android/i) || !!param.userAgent.match(/adr/i)
}

/**
 * 是否为iPhone或者QQHD浏览器
 * @returns {boolean}
 */
export function isIPhone() {
	return !!param.userAgent.match(/iphone/i)
}

/**
 * 是否iPad
 * @returns {boolean}
 */
export function isIPad() {
	return !!param.userAgent.match(/ipad/i)
}

/**
 * 是否web应该程序，没有头部与底部
 * @returns {boolean}
 */
export function isWebApp() {
	return !!param.userAgent.match(/safari/i)
}

/**
 * 是否是微信客户端
 * @returns {boolean}
 */
export function isWeChat() {
	return !!param.userAgent.match(/micromessenger/i)
}

/**
 * 是否QQ客户端
 * @returns {boolean}
 */
export function isQQ() {
	return !!param.userAgent.match(/mqqbrowser/i)
}

/**
 * 是否为mac终端
 * @returns {boolean}
 */
export function isMac() {
	return /macintosh|mac os x/i.test(param.userAgent)
}

/**
 * 是否为windows终端
 * @returns {boolean}
 */
export function isWindows() {
	return /windows|win32/i.test(param.userAgent)
}

/**
 * 是否为safari浏览器
 * @returns {boolean}
 */
export function isSafari() {
	return /safari/i.test(param.userAgent) && !/chrome/i.test(param.userAgent)
}
