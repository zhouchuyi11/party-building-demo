export interface IImageInfo {
	width: number
	height: number
	url: string
}

/**
 * 获取图片信息
 * @param imageUrl
 */
export function getImageInfo(imageUrl: string): Promise<IImageInfo> {
	return new Promise((resolve, reject) => {
		const image = new Image()
		// 设置图片跨域
		image.crossOrigin = 'Anonymous'
		// 加载成功
		image.onload = () => {
			const imageInfo = {
				width: image.width,
				height: image.height,
				url: imageUrl
			}
			resolve(imageInfo)
		}
		// 加载失败
		image.onerror = error => {
			reject(error)
		}
		image.src = imageUrl
	})
}

/**
 * base64转File
 * @param base64Image
 * @param fileName
 */
export function base64ImageToFile(base64Image: string, fileName = 'image.png'): Promise<File> {
	return new Promise<File>((resolve, reject) => {
		fetch(base64Image)
			.then(res => res.blob())
			.then(blob => {
				const file = new File([blob], fileName, { type: 'image/png' })
				resolve(file)
			})
			.catch(error => {
				reject(error)
			})
	})
}
