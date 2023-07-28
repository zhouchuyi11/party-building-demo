/**
 * 手机号验证
 */
export function isPhone(val: string) {
	const reg = /^1([3456789])\d{9}$/
	return reg.test(val)
}

/**
 * 用户账号验证,只能包括数字字母的组合，长度为4-15位
 */
export function isAccount(val: string) {
	const reg = /^[A-Za-z\d]{4,15}$/
	return reg.test(val)
}

/**
 * 邮箱验证
 */
export function isEmail(val: string) {
	const reg = /^\w+@[a-z\d]+\.[a-z]{2,4}$/
	return reg.test(val)
}

/**
 * 身份证号码验证
 * @param val
 */
export function isIdCard(val: string): boolean {
	// 1 "验证通过!", 0 //校验不通过
	const format =
		/^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/
	//号码规则校验
	if (!format.test(val)) {
		return false
	}
	//区位码校验
	//出生年月日校验   前正则限制起始年份为1900;
	const year = val.slice(6, 10), //身份证年
		month = val.slice(10, 12), //身份证月
		date = val.slice(12, 14), //身份证日
		time = Date.parse(month + '-' + date + '-' + year), //身份证日期时间戳date
		now_time = new Date().getTime(), //当前时间戳
		dates = new Date(parseInt(year), parseInt(month), 0).getDate() //身份证当月天数
	if (time > now_time || parseInt(date) > dates) {
		return false
	}
	//校验码判断
	const c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2] //系数
	const b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'] //校验码对照表
	const id_array = val.split('')
	let sum = 0
	for (let k = 0; k < 17; k++) {
		sum += parseInt(id_array[k]) * c[k]
	}
	return id_array[17].toUpperCase() == b[sum % 11].toUpperCase()
}
