// 移除富文本里的标签
import { h } from 'vue'
import { Image } from 'ant-design-vue'
import { BaseUtil } from './base-util'
import { formatByString } from './datetime-util'

export const removeRichHtml = (richText: string) => {
	let content = richText.replace(/<.+?>/g, '')
	/* 去除&nbsp; */
	content = content.replace(/&nbsp;/gi, '')
	/* 去除空格 */
	content = content.replace(/\s/gi, '')
	return content
}

/**
 * 表格渲染富文本
 * @param child
 */
export const columnRenderRich = (child: { content: string; showLine?: number }) => {
	return h(
		'div',
		{
			style: `display: -webkit-box;  word-break: break-all;  -webkit-line-clamp: ${child.showLine ?? 4};  line-clamp: ${
				child.showLine ?? 4
			};  overflow: hidden;  text-overflow: ellipsis;  white-space: normal; /* autoprefixer: off */-webkit-box-orient: vertical; /* autoprefixer: on */`
		},
		removeRichHtml(child.content ?? '')
	)
}

/**
 * 图片渲染
 * @param child
 */
export const columnRenderImage = (child: { url: string; fallback: string; width?: number }) => {
	return h(Image, {
		width: child?.width ?? 80,
		height: child?.width ?? 80,
		src: BaseUtil.getUploadPath(child.url),
		fallback: child.fallback
	})
}

export interface RenderTimeSlot {
	// 开始显示时间（上半部分显示时间）
	startTime?: string
	// 开始显示时间颜色（上半部分显示时间颜色）
	startTimeColor?: string
	// 开始显示时间css样式（上半部分显示时间css样式）
	startTimeStyle?: string
	// 时间显示的格式
	startFormat?: string
	// 结束显示时间（下半部分显示时间）
	endTime?: string
	// 结束显示时间颜色（下半部分显示时间颜色）
	endTimeColor?: string
	// 结束显示时间css样式（下半部分显示时间css样式）
	endTimeStyle?: string
	// 时间显示的格式
	endFormat?: string
}

/**
 *
 * @param child
 */
export const columnRenderTimeSlot = (child: RenderTimeSlot) => {
	return h('div', [
		h(
			'div',
			{
				style: child.startTimeStyle || `color: ${child.startTimeColor || 'green'};`
			},
			formatByString(child.startTime ?? '', child.startFormat || 'YYYY-MM-dd HH:mm').text
		),
		h(
			'div',
			{
				style: child.endTimeStyle || `color: ${child.startTimeColor || 'red'};`
			},
			formatByString(child.endTime ?? '', child.endFormat || 'YYYY-MM-dd HH:mm').text
		)
	])
}
