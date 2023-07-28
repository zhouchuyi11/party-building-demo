import { BusinessPo } from '@/entity/common/base'

export interface RuralInfoVo extends BusinessPo {
	centerPhoto: string
	committeeManNumber: number
	committeeNumber: number
	committeeWomanNumber: number
	createUserName: string
	fkRuralId: string
	floatingPopulationNumber: number
	gridNumber: number
	groupPhoto: string
	honorPoints: number
	householdsNumber: number
	microGridNumber: number
	partyActivitiesRatio: number
	partyMemberNumber: number
	populationNumber: number
	registeredPopulationNumber: number
	residentsPopulationNumber: number
	rfRuralName: string
	secretaryHonor: string
	secretaryName: string
	secretaryPhoto: string
	secretaryTag: string
}
