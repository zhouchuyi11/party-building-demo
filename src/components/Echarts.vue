<template>
	<div :ref="props.id" :id="props.id" :style="{ width: props.width, height: props.height }"></div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'
type EchartsTypes = echarts.EChartsType
type EchartsOption = echarts.EChartsOption
const props = defineProps<{
	id: string
	width: string
	height: string
	options: EchartsOption
}>()
//利用id获取
//document.getElementById('container')
//获取echarts容器
// const container = ref<HTMLElement>()
//初始化echarts
let myCharts: EchartsTypes | null = null
onMounted(() => {
	const dom = document.getElementById(props.id) as HTMLElement
	if (myCharts != null) {
		myCharts.dispose()
	}
	if (dom) {
		myCharts = echarts.init(dom)
		window.addEventListener('resize', () => {
			myCharts?.resize()
		})
		if (props.options) {
			console.log(props.options)
			myCharts?.setOption(props.options as EchartsOption)
		}
	}
	// if (container.value) {
	// 	myCharts = echarts.init(container.value)
	// 	window.addEventListener('resize', () => {
	// 		myCharts?.resize()
	// 	})
	// 	if (props.options) {
	// 		myCharts?.setOption(props.options as EchartsOption)
	// 	}
	// }
})
onUnmounted(() => {
	//销毁echarts
	myCharts?.dispose()
})
</script>

<style lang="scss" scoped>
#container {
	width: 100%;
	height: 100%;
}
</style>
