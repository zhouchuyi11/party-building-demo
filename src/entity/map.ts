export interface Region {
	name: string
	gridLevel: number
	itemStyle: {
		areaColor: {
			image: HTMLImageElement | string
			repeat: string
		}
		borderColor: string
		borderWidth: number
	}
}
export interface Scatter {
	name: string
	value: string[]
	img: string
	gridLevel: number
	registeredPopulationNumber: number
	partyMemberNumber: number
}
export interface Bar {
	name: string
	value: number
	gridLevel: number
}
