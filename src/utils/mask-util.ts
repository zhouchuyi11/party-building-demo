import { Spin } from 'ant-design-vue'
import { h, render } from 'vue'

type numMapType = { [key: string]: SpinType }

interface SpinType {
	count: number
	container?: HTMLElement | null
}

export interface MaskConfig {
	// 是否开启遮罩层
	flag?: boolean
	// 遮罩层的编号
	key?: string
	// 显示文字
	content?: string
	// 超时时间
	timeout?: number
}

const DEFAULT_PARAM = {
	/**
	 * 计数键值对
	 */
	numMap: <numMapType>{},
	/**
	 * 默认的Key值
	 */
	key: 'dc_mask'
}

/**
 * 初始化计数键值对
 * @param key
 */
const init = (key = DEFAULT_PARAM.key) => {
	if (!DEFAULT_PARAM.numMap[key]) {
		DEFAULT_PARAM.numMap[key] = {
			count: 0
		}
	}
}

export const mask = {
	/**
	 * 显示遮罩层
	 * @param config 其他配置
	 */
	open: (config?: MaskConfig) => {
		const key = config?.key || DEFAULT_PARAM.key
		init(key)
		if (DEFAULT_PARAM.numMap[key].count++ === 0) {
			// 打开遮罩层
			const container: HTMLDivElement = document.createElement('div')
			const spin = h(
				'div',
				{
					key,
					className: 'ant-modal-mask',
					style: {
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center'
					}
				},
				h(Spin, { size: 'large', tip: config?.content || '正在加载' })
			)
			render(spin, container)
			document.body.appendChild(spin.el as Node)
			// 如果设置了自动超时时间，不需要手动关闭
			if ((config?.timeout || 0) > 0) {
				setTimeout(() => {
					render(null, container)
				}, config?.timeout)
			} else {
				DEFAULT_PARAM.numMap[key].container = container
			}
		}
	},
	/**
	 * 关闭遮罩层
	 * @param key
	 * @param num 关闭的数据
	 */
	close: (key = DEFAULT_PARAM.key, num = 1) => {
		DEFAULT_PARAM.numMap[key].count -= num
		if (DEFAULT_PARAM.numMap[key].count <= 0) {
			DEFAULT_PARAM.numMap[key].count = 0
			// 关闭遮罩层, 延迟 0.2
			if (DEFAULT_PARAM.numMap[key].container) {
				render(null, DEFAULT_PARAM.numMap[key].container as HTMLElement)
				DEFAULT_PARAM.numMap[key].container = null
			}
		}
	}
}
