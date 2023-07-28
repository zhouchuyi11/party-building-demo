/**
 * 实体类
 */
export interface IVideoInfo {
	video: HTMLVideoElement
	width: number
	height: number
	duration: number
}

/**
 * 获取视频基本信息
 * @param videoSrc
 */
export function getVideoBasicInfo(videoSrc: string): Promise<IVideoInfo> {
	return new Promise((resolve, reject) => {
		const video = document.createElement('video')
		video.src = videoSrc
		// 视频一定要添加预加载
		video.preload = 'auto'
		// 视频一定要同源或者必须允许跨域
		video.crossOrigin = 'Anonymous'
		// 监听：异常
		video.addEventListener('error', error => {
			reject(error)
		})
		// 监听：加载完成基本信息,设置要播放的时常
		video.addEventListener('loadedmetadata', () => {
			const videoInfo = {
				video,
				width: video.videoWidth,
				height: video.videoHeight,
				duration: video.duration
			}
			resolve(videoInfo)
		})
	})
}

/**
 * 获取视频当前帧图像信息与饱和度
 * @param videoInfo base64图像
 */
export function getVideoFirstFrame(videoInfo: IVideoInfo): Promise<string> {
	return new Promise(resolve => {
		const { video, width, height } = videoInfo
		video.addEventListener('canplay', () => {
			const canvas = document.createElement('canvas')
			canvas.width = width
			canvas.height = height
			const ctx = canvas.getContext('2d')
			// 将视频对象直接绘入canvas
			ctx!.drawImage(video, 0, 0, width, height)
			// 获取图像的整体平均饱和度
			const posterUrl = canvas.toDataURL('image/jpg')
			resolve(posterUrl)
		})
	})
}
