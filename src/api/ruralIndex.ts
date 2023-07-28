import { GetRequestModel, QueryType } from '@/http/request-model'
import { CollectiveEconomyVo, DefiledIndexVo, PartyActivitiesVo, PersonnelDistributeVo, ProjectEvaluationVo } from '@/entity/ruralIndex/ruralIndex'

const prefix = '/ruralIndex'
export default {
	personnelDistribute: (query: QueryType) =>
		new GetRequestModel<Array<PersonnelDistributeVo>>(`${prefix}/getRuralPartyBranchPersonnelDistributeByFkRuralId?fkRuralId=${query}`).request(),
	collectiveEconomy: (query: QueryType) =>
		new GetRequestModel<Array<CollectiveEconomyVo>>(`${prefix}/getRuralCollectiveEconomyByFkRuralId?fkRuralId=${query}`).request(),
	partyActivities: (query: QueryType) =>
		new GetRequestModel<Array<PartyActivitiesVo>>(`${prefix}/getRuralPartyActivitiesByFkRuralId?fkRuralId=${query}`).request(),
	defiledIndex: (query: QueryType) => new GetRequestModel<DefiledIndexVo>(`${prefix}/getRuralDefiledIndexByFkRuralId?fkRuralId=${query}`).request(),
	projectEvaluation: (query: QueryType) =>
		new GetRequestModel<Array<ProjectEvaluationVo>>(`${prefix}/getRuralProjectEvaluationByFkRuralId?fkRuralId=${query}`).request()
}
