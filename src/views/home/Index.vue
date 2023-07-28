<template>
	<screen-adapter>
		<div class="home">
			<!--顶部内容-->
			<div class="top-box">
				<!--顶部左侧内容-->
				<div class="t-left">
					<span class="t-left-title">百千万工程数据可视化驾驶舱</span>
					<span class="t-left-subtext">王店镇 南梅村</span>
				</div>
				<!--顶部右侧内容-->
				<div class="t-right">
					<span class="datetime">{{ currDateTime }}</span>
					<img src="@/assets/images/go-system.png" />
					<span class="go-system">
						<span>进入后台</span>
					</span>
				</div>
			</div>
			<!--左侧内容-->
			<div class="left-box">
				<div class="left-1">
					<div class="img-box">
						<a-carousel autoplay :dots="false">
							<div v-for="(item, index) in photos" :key="'image' + index">
								<img :src="item" />
							</div>
						</a-carousel>
					</div>
					<div class="type-box">
						<img src="@/assets/images/left-right-1.png" />
						<img src="@/assets/images/left-right-2.png" />
						<img src="@/assets/images/left-right-3.png" />
					</div>
				</div>
				<div class="left-2">
					<div class="left-2-item">
						<div class="value">{{ ruralInfo?.committeeManNumber }}/{{ ruralInfo?.committeeWomanNumber }}</div>
						<div class="text">班子/后备</div>
					</div>
					<div class="left-2-item">
						<div class="value">{{ ruralInfo?.populationNumber }}</div>
						<div class="text">总人口</div>
					</div>
					<div class="left-2-item">
						<div class="value">{{ ruralInfo?.floatingPopulationNumber }}</div>
						<div class="text">流动人口</div>
					</div>
				</div>
				<div class="common-title">党组织情况</div>
				<div class="echarts-box">
					<Echarts v-if="pieOptions" :key="pieOptions" :id="'pie'" :width="'100%'" :options="pieOptions" :height="'100%'" />
				</div>
				<div class="tab-box">
					<ul>
						<li v-for="(item, index) in tabList" :key="item.typeName" :class="{ active: currTabIndex === index }" @click="onTabChange(index)">
							<img :src="item.icon" alt="" />
							<span>{{ item.typeName }}</span>
						</li>
					</ul>
				</div>
				<div class="echarts-box2">
					<Echarts v-if="Object.values(dashboardOptions).length > 0" :id="'dashboard'" :width="'100%'" :options="dashboardOptions" :height="'100%'" />
				</div>
				<div class="rate">党员活动平均参与率</div>
			</div>
			<!--右侧内容-->
			<div class="right-box">
				<div class="common-title">连心服务</div>
				<div class="right1">
					<div class="right-1-item item1">
						<div class="text">微走访</div>
						<img class="img1" src="@/assets/images/222@2x.png" />
						<img class="img2" src="@/assets/images/up.png" />
						<div class="rate">2%</div>
						<div class="data">2990条</div>
					</div>
					<div class="right-1-item item2">
						<div class="text">微力量</div>
						<img class="img1" src="@/assets/images/222@2x.png" />
						<img class="img2" src="@/assets/images/up.png" />
						<div class="rate">2%</div>
						<div class="data">2990条</div>
					</div>
					<div class="right-1-item item3">
						<div class="text">微民情</div>
						<img class="img1" src="@/assets/images/222@2x.png" />
						<img class="img2" src="@/assets/images/down.png" />
						<div class="rate">2%</div>
						<div class="data">2990条</div>
					</div>
					<div class="right-1-item item2">
						<div class="text">微办事</div>
						<img class="img1" src="@/assets/images/222@2x.png" />
						<img class="img2" src="@/assets/images/up.png" />
						<div class="rate">2%</div>
						<div class="data">2990条</div>
					</div>
					<div class="echarts-box">
						<Echarts v-if="bar5Options" :key="bar5Options" :id="'bar5'" :width="'100%'" :options="bar5Options" :height="'100%'" />
					</div>
				</div>
				<div class="common-title">集体经济</div>
				<div class="echarts-box">
					<Echarts v-if="barOptions" :key="barOptions" :id="'bar'" :width="'100%'" :options="barOptions" :height="'100%'" />
				</div>
				<div class="common-title">党组织活动</div>
				<div class="echarts-box2">
					<Echarts v-if="lineOptions" :key="lineOptions" :id="'line'" :width="'100%'" :options="lineOptions" :height="'100%'" />
				</div>
			</div>
			<!--底部内容-->
			<div class="bottom-box">
				<div class="up">
					<div class="honor">
						<div class="value">32</div>
						<div class="text">荣誉分</div>
					</div>
					<div class="total">
						<div class="value">92</div>
						<div class="text">总分</div>
					</div>
					<div class="title">强基指数</div>
				</div>
				<hr />
				<div class="down">
					<div class="left">
						<ul>
							<li>
								<div class="title">政治素养</div>
								<div class="items">
									<div class="item">
										<div class="value">20</div>
										<div class="text">得分</div>
									</div>
									<div class="item">
										<div class="value">30</div>
										<div class="text">标准得分</div>
									</div>
								</div>
								<div class="echarts-box">
									<Echarts v-if="bar1Options" :key="bar1Options" :id="'bar1'" :width="'100%'" :options="bar1Options" :height="'100%'" />
								</div>
							</li>
							<li>
								<div class="title">支部运行</div>
								<div class="items">
									<div class="item">
										<div class="value">22</div>
										<div class="text">得分</div>
									</div>
									<div class="item">
										<div class="value">30</div>
										<div class="text">标准得分</div>
									</div>
								</div>
								<div class="echarts-box">
									<Echarts v-if="bar2Options" :key="bar2Options" :id="'bar2'" :width="'100%'" :options="bar2Options" :height="'100%'" />
								</div>
							</li>
							<li>
								<div class="title">阵地建设</div>
								<div class="items">
									<div class="item">
										<div class="value">23</div>
										<div class="text">得分</div>
									</div>
									<div class="item">
										<div class="value">30</div>
										<div class="text">标准得分</div>
									</div>
								</div>
								<div class="echarts-box">
									<Echarts v-if="bar3Options" :key="bar3Options" :id="'bar3'" :width="'100%'" :options="bar3Options" :height="'100%'" />
								</div>
							</li>
							<li>
								<div class="title">统领作用</div>
								<div class="items">
									<div class="item">
										<div class="value">25</div>
										<div class="text">得分</div>
									</div>
									<div class="item">
										<div class="value">30</div>
										<div class="text">标准得分</div>
									</div>
								</div>
								<div class="echarts-box">
									<Echarts v-if="bar4Options" :key="bar4Options" :id="'bar4'" :width="'100%'" :options="bar4Options" :height="'100%'" />
								</div>
							</li>
						</ul>
					</div>
					<div class="right">
						<div class="echarts-box">
							<Echarts :id="'liquid1'" :width="'100%'" :options="liquid1Options" :height="'100%'" />
						</div>
						<div class="echarts-box2">
							<Echarts :id="'liquid2'" :width="'100%'" :options="liquid2Options" :height="'100%'" />
						</div>
					</div>
				</div>
			</div>
			<!--地图-->
			<echarts-map />
			<div class="map-label">
				<div class="label">
					<img src="@/assets/images/01-1.png" />
					<span>优秀</span>
				</div>
				<div class="label">
					<img src="@/assets/images/02-1.png" />
					<span>平稳</span>
				</div>
				<div class="label">
					<img src="@/assets/images/03-1.png" />
					<span>较差</span>
				</div>
			</div>
		</div>
	</screen-adapter>
</template>

<script lang="ts" setup>
import ScreenAdapter from '../../components/ScreenAdapter.vue'
import Echarts from '@/components/Echarts.vue'
import 'echarts-liquidfill'
import { onMounted, onUnmounted, ref } from 'vue'
import { formatByDate } from '../../utils/datetime-util'
import { COUNTRY_WEEK } from '../../enum/date'
import tabIcon1 from '../../assets/images/21341633685714_.pic@2x.png'
import tabIcon2 from '../../assets/images/21351633685776_.pic@2x.png'
import tabIcon3 from '../../assets/images/21361633685858_.pic@2x.png'
import tabIcon4 from '../../assets/images/21371633685909_.pic@2x.png'
import tabIcon5 from '../../assets/images/21381633685967_.pic@2x.png'
import tabIcon6 from '../../assets/images/21391633686010_.pic@2x.png'
import {
	setBar1Option,
	setBar2Option,
	setBar3Option,
	setBar4Option,
	setBar5Option,
	setBarOption,
	setDashboardOption,
	setLineOption,
	setLiquid1Option,
	setLiquid2Option,
	setPieOption
} from '@/views/home/options'
import EchartsMap from '@/components/EchartsMap.vue'
import requestMethod from '../../api/login'
import { useUserStore } from '@/store/user'
import { useSystemStore } from '@/store/system'
import { messageMethod } from '@/utils/message-util'
import ruralInfoRequest from '@/api/ruralInfo'
import { RuralInfoVo } from '@/entity/ruralInfo/ruralInfo'
import { BaseUtil } from '@/utils/base-util'
import ruralIndexRequest from '@/api/ruralIndex'
import { PersonnelDistributeVo } from '@/entity/ruralIndex/ruralIndex'
//获取当前日期时间
const currDateTime = ref('')
//时间定时器
const currTimeInte = ref()
//轮播图数组
const photos = ref<string[]>([])
//党组织情况options
let pieOptions = ref({})
//党组织情况分类options
let dashboardOptions = ref({})
//集体经济options
let barOptions = ref({})
//党组织活动options
let lineOptions = ref({})
//强基指数options
let bar1Options = ref({})
let bar2Options = ref({})
let bar3Options = ref({})
let bar4Options = ref({})
const liquid1Options = setLiquid1Option()
const liquid2Options = setLiquid2Option()
//连心服务options
let bar5Options = ref({})
//当前选中tab的下标
const currTabIndex = ref(0)
//tab数据
const tabList = ref<PersonnelDistributeVo[]>([])
const loginParams = {
	userAccount: 'admin',
	password: '111111'
}
let requestId = 0
// 动画事件
const requestAnimation = (angle: number) => {
	cancelAnimationFrame(requestId)
	angle += 1
	dashboardOptions.value = setDashboardOption(angle)
	requestId = requestAnimationFrame(() => {
		requestAnimation(angle)
	})
}
onMounted(async () => {
	//获取当前日期和时间以及星期
	const week = COUNTRY_WEEK.CN[formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').week]
	currTimeInte.value = setInterval(() => {
		let datetime = formatByDate(new Date(), 'yyyy年MM月dd日 HH:mm:ss').text
		currDateTime.value = datetime + ' ' + week
	}, 1000)
	await getDashboard()
	await login()
	await getRuralInfo()
	await getPersonnelDistribute()
	await getCollectiveEconomy()
	await getPartyActivities()
	await getDefiledIndex()
	await getProjectEvaluation()
})
// 使用系统存储
const systemStore = useSystemStore()
// 使用用户信息存储
const userStore = useUserStore()
// 登录请求
const login = async () => {
	await requestMethod.login(loginParams).then(({ data }) => {
		console.log(data)
		// 设置系统信息存储
		systemStore.setToken(data.authToken)
		// 设置用户信息存储
		console.log(userStore)
		userStore.setInfo(data)
		messageMethod.success('登录成功！')
	})
}
// 农村详情信息
const ruralInfo = ref<RuralInfoVo>()
// 农村id
const fkRuralId = ref<string | undefined>('')
const getRuralInfo = async () => {
	await ruralInfoRequest.page({ pageNum: 1, pageSize: 10, rfRuralName: '测试村' }).then(({ data }) => {
		console.log(data.list[0])
		ruralInfo.value = data.list[0]
		fkRuralId.value = ruralInfo.value?.fkRuralId
		const photosList: string[] =
			ruralInfo.value?.groupPhoto === ''
				? ruralInfo.value?.centerPhoto.split(',')
				: ruralInfo.value?.groupPhoto.split(',').concat(ruralInfo.value?.centerPhoto.split(','))
		photos.value = photosList.map(item => BaseUtil.getUploadPath(item))
	})
}
/**
 * 获取党员分布情况
 */
const getPersonnelDistribute = async () => {
	await ruralIndexRequest.personnelDistribute(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const icons = [tabIcon1, tabIcon4, tabIcon3, tabIcon5, tabIcon2, tabIcon6]
		tabList.value = data
		tabList.value.forEach((item: PersonnelDistributeVo, index: number) => {
			item.icon = icons[index]
		})
		const chartsData = tabList.value[currTabIndex.value].distributeList.map(item => {
			return {
				name: item.distributionIntervalName,
				value: item.distributionNumber
			}
		})
		pieOptions.value = setPieOption(chartsData)
	})
}
/**
 * 获取集体经济数据
 */
const getCollectiveEconomy = async () => {
	await ruralIndexRequest.collectiveEconomy(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const statisticsYear = data.map(item => item.statisticsYear)
		const operatingIncome = data.map(item => item.operatingIncome)
		const recurringIncome = data.map(item => item.recurringIncome)
		const operatingAverageIncome = data.map(item => item.operatingAverageIncome)
		const recurringAverageIncome = data.map(item => item.recurringAverageIncome)
		barOptions.value = setBarOption({
			xAxisData: statisticsYear,
			legendData: ['经营性收入', '经常性收入', '全区平均'],
			seriesData: [operatingIncome, operatingAverageIncome, recurringIncome, recurringAverageIncome]
		})
	})
}
/**
 * 获取党组织活动数据
 */
const getPartyActivities = async () => {
	await ruralIndexRequest.partyActivities(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const activitiesNumber = data.map(item => item.activitiesNumber)
		const activitiesRatio = data.map(item => item.activitiesRatio)
		const statisticsMonth = data.map(item => item.statisticsMonth)
		lineOptions.value = setLineOption({
			xAxisData: statisticsMonth,
			legendData: ['活动次数', '党员参与率'],
			seriesData: [activitiesNumber, activitiesRatio]
		})
	})
}
/**
 * 获取连心服务数据
 */
const getDefiledIndex = async () => {
	await ruralIndexRequest.defiledIndex(fkRuralId.value).then(({ data }) => {
		console.log(data)
		const satisfactionRatio = data.satisfactionRatio
		bar5Options.value = setBar5Option({ seriesData: satisfactionRatio })
	})
}
/**
 * 获取强基指数数据
 */
const criteriaScore = ref<number[]>([])
const evaluationScore = ref<number[]>([])
const sumArray = ref<number[]>([])
const getProjectEvaluation = async () => {
	await ruralIndexRequest.projectEvaluation(fkRuralId.value).then(({ data }) => {
		console.log(data)
		criteriaScore.value = data.map(item => item.criteriaScore)
		evaluationScore.value = data.map(item => item.evaluationScore)
		sumArray.value = evaluationScore.value.map((score, index) => score + criteriaScore.value[index])
		bar1Options.value = setBar1Option({
			seriesData: sumArray.value[0]
		})
		bar2Options.value = setBar2Option({
			seriesData: sumArray.value[1]
		})
		bar3Options.value = setBar3Option({
			seriesData: sumArray.value[2]
		})
		bar4Options.value = setBar4Option({
			seriesData: sumArray.value[3]
		})
	})
}
/**
 * 获取党员活动参与率
 */
async function getDashboard() {
	dashboardOptions.value = setDashboardOption(0)
	requestAnimation(0)
}
/**
 * 点击tab切换
 * @param index
 */
function onTabChange(index: number) {
	currTabIndex.value = index
	if (currTabIndex.value != undefined) {
		const chartsData = tabList.value[currTabIndex.value].distributeList.map(item => {
			return {
				name: item.distributionIntervalName,
				value: item.distributionNumber
			}
		})
		pieOptions.value = setPieOption(chartsData)
	}
}
// 组件卸载完成后执行的函数
onUnmounted(() => {
	cancelAnimationFrame(requestId)
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixins.scss';

$boxBgColor: rgba(0, 0, 0, 0.08);
$valueColors: #43b9fe #f8af3c #51ffc1;
.common-title {
	@include wh(228px, 52px);
	background: url('@/assets/images/t_bg.png') no-repeat;
	background-size: 100% 100%;
	text-align: center;
	line-height: 52px;
	@include fontMixin(24px, 400, #c7e6ff);
	letter-spacing: 2px;
}

.home {
	@include wh(100%, 100%);
	background: url('@/assets/images/bg.png') no-repeat;
	background-size: 100% 100%;
	color: white;

	.top-box {
		position: absolute;
		width: 100%;
		@include flexMixin(space-between, center);
		padding: 43px 23px 24px 53px;
		z-index: 2;
		.t-left {
			.t-left-title {
				@include fontMixin(48px, 700);
				margin-right: 22px;
				letter-spacing: 3px;
			}

			.t-left-subtext {
				@include fontMixin(28px, 700);
				letter-spacing: 2px;
			}
		}

		.t-right {
			display: flex;
			align-items: center;

			.datetime {
				@include fontMixin(18px, 500);
			}

			img {
				@include wh(36px, 36px);
				margin: 0 7px 0 8px;
			}

			.go-system {
				@include fontMixin(21px, 700, #f7f7f7);

				&:after {
					content: '';
					display: inline-block;
					@include wh(10px, 11px);
					background: url('@/assets/images/arrow-right.png') no-repeat;
					background-size: 100% 100%;
					margin-left: 4px;
				}
			}
		}
	}

	.left-box,
	.right-box {
		@include wh(447px, 930px);
		position: absolute;
		top: 113px;
		background-color: $boxBgColor;
		padding: 12px 13px;
	}

	.left-box {
		left: 37px;
		z-index: 2;
		.left-1 {
			display: flex;

			.img-box {
				@include wh(319px, 186px);
				padding: 12px 11px;
				vertical-align: middle;
				display: inline-block;
				border: 1px solid #cbedff;
				background-color: rgba(0, 0, 0, 0.2);

				:deep(.ant-carousel) {
					.slick-slide img {
						@include wh(297px, 162px);
					}
				}
			}

			.type-box {
				margin-left: 20px;
				display: inline-block;
				vertical-align: middle;

				& > img {
					@include wh(63px, 46px);
					margin-bottom: 19px;
					display: table;
				}

				img:last-child {
					margin-bottom: 0;
				}
			}
		}

		.left-2 {
			@include flexMixin(space-around, center);
			margin: 49px 0;
			//each遍历可以拿到每个颜色的值，设置left-2-item的颜色需要通过索引
			@each $color in $valueColors {
				$index: index($valueColors, $color);
				div:nth-child(#{$index}) {
					.value {
						@include fontMixin(40px, 400, $color);
						font-family: DS-DIGIT;
						letter-spacing: 4px;
						line-height: 40px;
					}

					.text {
						font-size: 14px;
					}
				}
			}
		}
		.echarts-box {
			@include wh(100%, 247px);
		}
		.tab-box {
			width: 100%;
			ul {
				margin: 0;
				padding: 0;
				text-align: center;
				li {
					display: inline-block;
					border: 1px solid #42b9fe;
					cursor: pointer;
					padding: 6px 8px;
					img,
					span {
						vertical-align: middle;
					}
					img {
						margin-right: 2px;
					}
				}
				.active {
					background-color: #11d290;
					border: 1px solid #11d290;
					color: #fff;
				}
			}
		}
		.echarts-box2 {
			@include wh(100%, 200px);
		}
		.rate {
			@include fontMixin(17px, 400, #fff);
			text-align: center;
		}
	}

	.right-box {
		right: 37px;
		z-index: 2;
		.right1 {
			@include wh(410px, 270px);
			.right-1-item {
				@include wh(398px, 44px);
				@include flexMixin(space-around, center);
				margin-bottom: 5px;
				margin-left: 11px;
				.text {
					@include wh(72px, 26px);
					@include fontMixin(16px, 700, #0b1d41);
					background-color: #f1ac40;
					border-radius: 4px;
					text-align: center;
					margin-left: 13px;
				}
				.img2 {
					@include wh(9px, 17px);
					margin-right: -15px;
					margin-top: 2px;
				}
				.rate {
					@include fontMixin(18px, 700, #3ad8d8);
				}
				.data {
					@include fontMixin(18px, 700, #42b9fe);
					margin-right: 13px;
				}
			}
			.item1 {
				background-color: rgba(23, 90, 146, 0.2);
				margin-top: 20px;
			}
			.item2 {
				.text {
					background-color: #46bdfe;
				}
			}
			.item3 {
				background-color: rgba(23, 90, 146, 0.2);
				.rate {
					@include fontMixin(18px, 700, #ff3f42);
				}
			}
			.echarts-box {
				@include wh(100%, 20px);
				margin-top: 20px;
			}
		}
		.echarts-box {
			@include wh(100%, 255px);
		}
		.echarts-box2 {
			@include wh(100%, 220px);
		}
	}

	.bottom-box {
		z-index: 2;
		@include wh(905px, 327px);
		position: absolute;
		top: 717px;
		left: 0;
		right: 0;
		margin: 0 auto;
		background-color: $boxBgColor;
		.up {
			@include flexMixin(space-around, center);
			.honor,
			.total {
				@include flexMixin(space-around, center);
				@include wh(113px, 43px);
				margin-left: 40px;
				margin-top: 10px;
				.value {
					@include fontMixin(40px, 400, #2cd9f1);
					font-family: DS-DIGIT;
					letter-spacing: 4px;
					line-height: 40px;
				}
				.text {
					@include fontMixin(13px, 400, #fff);
					letter-spacing: 1px;
					margin-top: 30px;
				}
			}
			.title {
				@include fontMixin(29px, 400, #c7e6ff);
				letter-spacing: 2px;
				margin: 10px 42px 10px 428px;
			}
		}
		hr {
			@include wh(873px, 2px);
			background-color: #a0d3ff;
			opacity: 0.2;
		}
		.down {
			@include flexMixin(space-between, center);
			.left {
				@include wh(684px, 187px);
				margin-top: 22px;
				margin-left: 39px;
				ul {
					@include GridMixin(319px 319px, 18px 46px, 80px);
					margin-left: -40px;
					margin-top: 3px;
					li {
						list-style-type: none;
						.title {
							@include fontMixin(14px, 400, #fff);
							letter-spacing: 1px;
						}
						.items {
							@include flexMixin(space-between, center);
							margin-right: 83px;
							.item {
								@include flexMixin(space-around, center);
								margin-top: -10px;
							}
							@each $color in $valueColors {
								$index: index($valueColors, $color);
								div:nth-child(#{$index}) {
									.value {
										@include fontMixin(30px, 400, $color);
										font-family: DS-DIGIT;
										letter-spacing: 1px;
									}
									.text {
										@include fontMixin(12px, 400, #c7e6ff);
										letter-spacing: 1px;
										margin-top: 10px;
										margin-left: 4px;
									}
								}
							}
						}
						.echarts-box {
							@include wh(100%, 18px);
						}
					}
				}
			}
			.right {
				@include wh(89px, 195px);
				margin-top: 26px;
				margin-right: 41px;
				.echarts-box {
					@include wh(100%, 87px);
				}
				.echarts-box2 {
					@include wh(100%, 87px);
					margin-top: 15px;
				}
			}
		}
	}
	.map-label {
		@include wh(118px, 169px);
		position: absolute;
		margin-top: 510px;
		margin-left: 682px;
		img {
			@include wh(40px, 45px);
		}
		span {
			@include fontMixin(18px, 400, #fff);
			letter-spacing: 1px;
			vertical-align: bottom;
			margin-left: 4px;
		}
	}
}
</style>
