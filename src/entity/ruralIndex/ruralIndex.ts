import { BusinessPo } from '@/entity/common/base'

/**
 * 党支部人员分布情况实体类
 */
export interface PersonnelDistributeVo {
	//农村党支部人员分布情况-表
	distributeList: Array<DistributeVo>
	//类型名称
	typeName: string
	icon: string
	// [key: string]: unknown
}
export interface DistributeVo extends BusinessPo {
	fkRuralId: string
	rfRuralName: string
	typeName: string
	fkTypeId: string
	fkDistributionIntervalId: string
	distributionIntervalName: string
	distributionNumber: number
	partyBranchName: string
}
/**
 * 集体经济实体类
 */
export interface CollectiveEconomyVo extends BusinessPo {
	// 全区平均/万元
	averageIncome: number
	// 农村id
	fkRuralId: string
	// 经营性收入全区平均/万元
	operatingAverageIncome: number
	// 经营性收入/万元
	operatingIncome: number
	// 经常性收入全区平均/万元
	recurringAverageIncome: number
	// 经常性收入/万元
	recurringIncome: number
	// 农村名称
	rfRuralName: string
	// 年份
	statisticsYear: number
}
/**
 * 党组织活动实体类
 */
export interface PartyActivitiesVo extends BusinessPo {
	// 活动数量
	activitiesNumber: number
	// 活动参与率%
	activitiesRatio: number
	// 创建人姓名
	createUserName: string
	// 农村id
	fkRuralId: string
	// 农村名称
	rfRuralName: string
	// 月份
	statisticsMonth: string
}
/**
 * 连心服务实体类
 */
export interface DefiledIndexVo extends BusinessPo {
	// 农村id
	fkRuralId: string
	// 微调研（办事）数
	researchNumber: number
	// 微排调研（办事）比率%
	researchRatio: number
	// 农村名称
	rfRuralName: string
	// 群众满意度%
	satisfactionRatio: number
	// 微排查（力量）数
	screeningNumber: number
	// 微排查（力量）同比率%
	screeningRatio: number
	// 微安全（民情）数
	securityNumber: number
	// 微安全比（民情）率%
	securityRatio: number
	// 年份
	statisticsYear: number
	// 微走访数
	visitNumber: number
	// 微走访同比率%
	visitRatio: number
}
/**
 * 强基指数测评分实体类
 */
export interface ProjectEvaluationVo extends BusinessPo {
	// 指标分数
	criteriaScore: number
	// 测评分
	evaluationScore: number
	// 审批记录id
	fkApprovalId: string
	// 农村id
	fkRuralId: string
	// 建设标准类型id（一级指标id）
	fkTypeId: string
	// 农村名称
	rfRuralName: string
	// 年份
	statisticsYear: number
	// 建设标准类型名称（一级指标名称）
	typeName: string
}
