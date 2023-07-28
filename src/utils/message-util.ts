import { message, Modal } from 'ant-design-vue'
import { ConfigOnClose, MessageArgsProps, MessageType } from 'ant-design-vue/lib/message'
import { VueNode } from 'ant-design-vue/lib/_util/type'

declare type JointContent = VueNode | MessageArgsProps

export const messageMethod = {
	/**
	 * 消息提示
	 * @param content
	 * @param duration
	 * @param onClose
	 */
	info(content: JointContent, duration?: number, onClose?: ConfigOnClose): MessageType {
		return message.info(content, duration, onClose)
	},
	/**
	 * 错误消息提示
	 * @param content
	 * @param duration
	 * @param onClose
	 */
	error(content: JointContent, duration?: number, onClose?: ConfigOnClose): MessageType {
		return message.error(content, duration, onClose)
	},
	/**
	 * 警告消息提示
	 * @param content
	 * @param duration
	 * @param onClose
	 */
	warning(content: JointContent, duration?: number, onClose?: ConfigOnClose): MessageType {
		return message.warning(content, duration, onClose)
	},
	/**
	 * 成功消息提示
	 * @param content
	 * @param duration
	 * @param onClose
	 */
	success(content: JointContent, duration?: number, onClose?: ConfigOnClose): MessageType {
		return message.success(content, duration, onClose)
	},

	/**
	 * 加载框
	 * @param content
	 * @param duration
	 * @param onClose
	 */
	loading(content: JointContent, duration?: number, onClose?: ConfigOnClose): MessageType {
		return message.loading(content, duration, onClose)
	}
}

export const confirmMethod = {
	/**
	 * 提示弹框
	 * @param title
	 * @param ok
	 * @param cancel
	 */
	info(title: string | (() => string), ok?: () => void, cancel?: () => void) {
		Modal.confirm({
			title,
			cancelText: '取消',
			okText: '确认',
			onOk: () => {
				if (ok) {
					ok()
				}
			},
			onCancel: () => {
				if (cancel) {
					cancel()
				}
			}
		})
	}
}
