import { PostRequestModel, QueryType } from '../http/request-model'
import { AccountUserVo } from '@/entity/account/account-use'

const prefix = '/login'
export default {
	login: (query: QueryType) => new PostRequestModel<AccountUserVo>(prefix, query).request()
}
