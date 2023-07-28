import { PostRequestModel, QueryType } from '@/http/request-model'
import { PageModel } from '@/http/result-model'
import { RuralInfoVo } from '@/entity/ruralInfo/ruralInfo'

const prefix = '/ruralInfo'
export default {
	page: (query: QueryType) => new PostRequestModel<PageModel<RuralInfoVo>>(`${prefix}/page`, query).request()
}
