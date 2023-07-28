/**
 * 颜色16进制转rgba颜色
 * @param hex 十六进制颜色
 * @param opacit 透明度
 * #ff ff ff
 * rgba(255,255,255,0.5)
 */
function hexToRgba(hex: string, opacity: number) {
	return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')'
}
/**
 * 多层圆环饼图
 */
export const setPieOption = (chartsData: { name: string; value: number }[]) => {
	//默认测试数据
	const pieData = chartsData

	//第三个饼图的半径
	const radius = ['50%', '54%']
	//颜色系列
	const color = ['#37ffc9', '#ffe777', '#19d6ff', '#32a1ff', '#cccccc', '#ff1111']
	const color1: string[] = []
	const color2: string[] = []
	const color3: string[] = []
	color.forEach(item => {
		color1.push(item, 'transparent')
		color2.push(hexToRgba(item, 0.7), 'transparent')
		color3.push(hexToRgba(item, 0.4), 'transparent')
	})
	const pieDataList: any[] = []
	let sum = 0
	pieData.forEach(item => (sum += item.value))
	pieData.forEach(item => {
		pieDataList.push(item, {
			name: '',
			value: sum / 70,
			label: {
				show: false
			}
		})
	})
	/**
	 * ['50%', '54%]
	 * ['54%', '58%]
	 * ['58%', '62%]
	 */
	const radius2 = [Number(radius[1].split('%')[0]) + '%', Number(radius[1].split('%')[0]) + 4 + '%']
	const radius3 = [Number(radius[1].split('%')[0]) + 4 + '%', Number(radius[1].split('%')[0]) + 8 + '%']
	return {
		title: {
			text: 53,
			subtext: '党员数',
			x: 'center',
			y: '35.5%',
			itemGap: 5, //主副标题间距
			textStyle: {
				color: '#fff',
				fontSize: 34,
				fontFamily: 'DS-DIGIT'
			},
			subtextStyle: {
				color: '#42B9FE',
				fontSize: 12
			}
		},
		tooltip: {
			show: true,
			formatter: (params: { name: string; value: string; percent: string }) => {
				if (params.name !== '') {
					return params.name + ':' + params.value + '<br />' + '(' + params.percent + '%)'
				}
			}
		},
		series: [
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: radius3,
				// hoverAnimation: false,
				startAngle: 90,
				//选中模式
				selectedMode: 'single',
				selectedOffset: 0,
				itemStyle: {
					color: (params: { dataIndex: number }) => {
						console.log(params)
						return color1[params.dataIndex]
					}
				},
				label: {
					show: true,
					position: 'outside',
					color: '#fff',
					lineHeight: 20,
					formatter: (params: { name: string; percent: string }) => {
						// return params.name + ':' + params.percent + '%'
						return `${params.name}:\n${params.percent}%`
					}
				},
				// 鼠标移入饼图hover的效果 用这个代替hoverAnimation
				emphasis: {
					scale: 0
				},
				data: pieDataList,
				z: 666
			},
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: radius2,
				// hoverAnimation: false,
				startAngle: 90,
				//选中模式
				selectedMode: 'single',
				selectedOffset: 0,
				itemStyle: {
					color: (params: { dataIndex: number }) => {
						console.log(params)
						return color2[params.dataIndex]
					}
				},
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				// 鼠标移入饼图hover的效果
				emphasis: {
					scale: 0
				},
				data: pieDataList,
				z: 666
			},
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: radius,
				// hoverAnimation: false,
				startAngle: 90,
				//选中模式
				selectedMode: 'single',
				selectedOffset: 0,
				itemStyle: {
					color: (params: { dataIndex: number }) => {
						console.log(params)
						return color3[params.dataIndex]
					}
				},
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				// 鼠标移入饼图hover的效果
				emphasis: {
					scale: 0
				},
				data: pieDataList,
				z: 666
			}
		]
	}
}
/**
 * 动态仪表盘
 */
export const setDashboardOption = (angle: number) => {
	return {
		title: {
			text: '{valueStyle|' + '72' + '}{unitStyle|%}', //当有多个样式时采用这种方式
			x: 'center',
			y: 'center',
			textStyle: {
				rich: {
					valueStyle: {
						color: '#42b9fe',
						fontSize: 34
					},
					unitStyle: {
						color: '#fff',
						fontSize: 12
					}
				}
			}
		},
		series: [
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							// 定位、形状相关的设置
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * 0.87,
							startAngle: (angle * Math.PI) / 180,
							endAngle: ((90 + angle) * Math.PI) / 180
						},
						style: {
							// 样式相关的设置
							stroke: '#0CD3DB', // 轮廓线颜色
							fill: 'transparent',
							lineWidth: 1.5
						},
						// 不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							// 定位、形状相关的设置
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * 0.87,
							startAngle: ((180 + angle) * Math.PI) / 180,
							endAngle: ((270 + angle) * Math.PI) / 180
						},
						style: {
							// 样式相关的设置
							stroke: '#0CD3DB', // 轮廓线颜色
							fill: 'transparent',
							lineWidth: 1.5
						},
						// 不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							// 定位、形状相关的设置
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * (0.87 + 0.05),
							startAngle: ((270 + angle) * Math.PI) / 180,
							endAngle: ((40 + angle) * Math.PI) / 180
						},
						style: {
							// 样式相关的设置
							stroke: '#0CD3DB', // 轮廓线颜色
							fill: 'transparent',
							lineWidth: 1.5
						},
						// 不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					return {
						type: 'arc',
						shape: {
							// 定位、形状相关的设置
							cx: api.getWidth() / 2,
							cy: api.getHeight() / 2,
							r: (Math.min(api.getWidth(), api.getHeight()) / 2.2) * (0.87 + 0.05),
							startAngle: ((90 + angle) * Math.PI) / 180,
							endAngle: ((220 + angle) * Math.PI) / 180
						},
						style: {
							// 样式相关的设置
							stroke: '#0CD3DB', // 轮廓线颜色
							fill: 'transparent',
							lineWidth: 1.5
						},
						// 不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					const x0 = api.getWidth() / 2
					const y0 = api.getHeight() / 2
					const r = (Math.min(api.getWidth(), api.getHeight()) / 2.2) * (0.87 + 0.05)
					const point = getCirclePoint(x0, y0, r, 90 - angle)
					return {
						type: 'circle',
						shape: {
							// 定位、形状相关的设置
							cx: point.x,
							cy: point.y,
							r: 4
						},
						style: {
							// 样式相关的设置
							stroke: '#0CD3DB',
							fill: '#0CD3DB'
						},
						// 不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'custom',
				coordinateSystem: 'none',
				renderItem: (params: any, api: any) => {
					const x0 = api.getWidth() / 2
					const y0 = api.getHeight() / 2
					const r = (Math.min(api.getWidth(), api.getHeight()) / 2.2) * (0.87 + 0.05)
					const point = getCirclePoint(x0, y0, r, 270 - angle)
					return {
						type: 'circle',
						shape: {
							// 定位、形状相关的设置
							cx: point.x,
							cy: point.y,
							r: 4
						},
						style: {
							// 样式相关的设置
							stroke: '#0CD3DB',
							fill: '#0CD3DB'
						},
						// 不响应和触发鼠标事件
						silent: true
					}
				},
				data: [0]
			},
			{
				type: 'pie',
				radius: ['68%', '55%'],
				center: ['50%', '50%'],
				startAngle: 90,
				label: {
					position: 'center'
				},
				silent: true,
				z: 0,
				zlevel: 0,
				data: [
					{
						name: '',
						value: 72,
						label: {
							show: false
						},
						itemStyle: {
							color: {
								colorStops: [
									{
										offset: 0,
										color: '#4FADFD'
									},
									{
										offset: 1,
										color: '#28E8FA'
									}
								]
							}
						}
					},
					{
						name: '',
						value: 100,
						label: {
							normal: {
								show: false
							}
						},
						itemStyle: {
							normal: {
								color: '#173164'
							}
						}
					}
				]
			},
			{
				type: 'gauge',
				radius: '68%',
				center: ['50%', '50%'],
				startAngle: 0,
				endAngle: 360,
				splitNumber: 8,
				// 刻度样式
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false
				},
				pointer: {
					show: false
				},
				splitLine: {
					length: 120,
					lineStyle: {
						width: 3,
						color: '#061740'
					}
				},
				axisLine: {
					lineStyle: {
						opacity: 0
					}
				},
				detail: {
					show: false
				},
				data: [
					{
						name: '',
						value: 0
					}
				]
			}
		]
	}
}
/**
 * 获取圆上某点的坐标
 * @params x0 表示x坐标
 * @params y0 表示y坐标
 * @params r 表示半径
 * @params angle 表示角度
 */
function getCirclePoint(x0: number, y0: number, r: number, angle: number) {
	const x1 = x0 + r * Math.cos((angle * Math.PI) / 180)
	const y1 = y0 + r * Math.sin((angle * Math.PI) / 180)
	return {
		x: x1,
		y: y1
	}
}
/**
 * 柱状图
 */
export const setBarOption = (dataConfig: { xAxisData: number[]; legendData: string[]; seriesData: number[][] }) => {
	return {
		title: {
			text: '单位 万元',
			left: '1%',
			top: '10.8%',
			textStyle: {
				color: '#fff',
				fontSize: 14,
				align: 'center'
			}
		},
		xAxis: {
			type: 'category',
			data: dataConfig.xAxisData,
			axisTick: {
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#fff',
					width: 2
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16,
				margin: 10
			}
		},
		yAxis: {
			type: 'value',
			axisLine: {
				show: false
			},
			axisLabel: {
				show: true,
				color: '#fff'
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255,255,255,0.5)'
				}
			}
		},
		legend: {
			data: dataConfig.legendData,
			left: 100,
			top: 25,
			textStyle: {
				color: '#fff',
				fontSize: 14
			}
		},
		tooltip: {
			show: true
		},
		grid: {
			left: '15%',
			right: '10%',
			top: '25%',
			bottom: '20%'
		},
		series: [
			{
				type: 'bar',
				name: dataConfig.legendData[0],
				barWidth: 10,
				barGap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#43b9fe'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: dataConfig.seriesData[0]
			},
			{
				type: 'bar',
				name: dataConfig.legendData[2],
				barWidth: 10,
				barGap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#51ffc1'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: dataConfig.seriesData[1]
			},
			// 占位的柱子
			{
				type: 'bar',
				name: ' ',
				barWidth: 15,
				animationDuration: 2000,
				animationEasing: 'cubicInOut'
			},
			{
				type: 'bar',
				name: dataConfig.legendData[1],
				barWidth: 10,
				barGap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#f8af3c'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: dataConfig.seriesData[2]
			},
			{
				type: 'bar',
				name: dataConfig.legendData[2],
				barWidth: 10,
				barGap: '90%',
				itemStyle: {
					borderRadius: [2, 2, 0, 0],
					color: '#51ffc1'
				},
				animationDuration: 2000,
				animationEasing: 'cubicInOut',
				data: dataConfig.seriesData[3]
			}
		]
	}
}
/**
 * 折线图
 */
export const setLineOption = (dataConfig: { xAxisData: string[]; legendData: string[]; seriesData: number[][] }) => {
	return {
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: dataConfig.xAxisData,
			axisTick: {
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#fff',
					width: 2
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 12,
				margin: 10
			}
		},
		yAxis: [
			{
				type: 'value',
				position: 'left',
				min: 0,
				max: 75,
				interval: 15,
				axisLine: {
					show: false
				},
				axisLabel: {
					show: true,
					color: '#fff'
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'rgba(255,255,255,0.5)'
					}
				}
			},
			{
				type: 'value',
				position: 'right',
				min: 0,
				max: 100,
				interval: 20,
				axisLine: {
					show: false
				},
				axisLabel: {
					show: true,
					color: '#fff'
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'rgba(255,255,255,0.5)'
					}
				}
			}
		],
		legend: {
			data: dataConfig.legendData,
			icon: 'roundRect',
			itemHeight: 4, // 修改icon图形大小
			itemWidth: 14,
			right: 0,
			top: 25,
			textStyle: {
				color: '#fff',
				fontSize: 14
			}
		},
		tooltip: {
			show: true
		},
		grid: {
			left: '15%',
			right: '10%',
			top: '25%',
			bottom: '20%'
		},
		series: [
			{
				name: '活动次数',
				type: 'line',
				yAxisIndex: 0,
				lineStyle: {
					color: '#43b9fe',
					width: 2
				},
				areaStyle: {
					type: 'linear',
					color: {
						colorStops: [
							{
								offset: 0,
								color: 'rgba(67,185,254,0.7)'
							},
							{
								offset: 1,
								color: 'rgba(67,185,254,0.1)'
							}
						]
					}
				},
				symbol: 'circle',
				symbolSize: 5,
				itemStyle: {
					color: '#43b9fe',
					borderColor: 'rgba(221,220,107,0.1)',
					borderWidth: 12
				},
				showSymbol: false,
				data: dataConfig.seriesData[0]
			},
			{
				name: '党员参与率',
				type: 'line',
				yAxisIndex: 1,
				lineStyle: {
					color: '#51ffc1',
					width: 2
				},
				areaStyle: {
					type: 'linear',
					color: {
						colorStops: [
							{
								offset: 0,
								color: 'rgba(81,255,193,0.7)'
							},
							{
								offset: 1,
								color: 'rgba(81,255,193,0.1)'
							}
						]
					}
				},
				symbol: 'circle',
				symbolSize: 5,
				itemStyle: {
					color: '#51ffc1',
					borderColor: 'rgba(221,220,107,0.1)',
					borderWidth: 12
				},
				showSymbol: false,
				data: dataConfig.seriesData[1]
			}
		]
	}
}
/**
 * bottom柱状图
 */
export const setBar1Option = (dataConfig: { seriesData: number }) => {
	return {
		grid: {
			left: '0%',
			right: '4%',
			bottom: '200%',
			containLabel: true
		},
		xAxis: {
			show: false
		},
		yAxis: [
			{
				type: 'category',
				data: [0],
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					fontSize: 18,
					color: '#fff'
				}
			},
			{
				show: true,
				data: [0],
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					fontSize: 18,
					color: '#fff'
				}
			}
		],
		series: [
			{
				name: '2011',
				type: 'bar',
				data: [dataConfig.seriesData],
				yAxisIndex: 0,
				barWidth: 6,
				itemStyle: {
					normal: {
						barBorderRadius: 20,
						color: '#3bb0f1'
					}
				}
			},
			{
				name: '2012',
				type: 'bar',
				data: [100],
				yAxisIndex: 1,
				barWidth: 15,
				itemStyle: {
					color: 'none',
					borderColor: '#fff',
					borderWidth: 2,
					barBorderRadius: 15
				}
			}
		]
	}
}
export const setBar2Option = (dataConfig: { seriesData: number }) => {
	return {
		grid: {
			left: '0%',
			right: '4%',
			bottom: '200%',
			containLabel: true
		},
		xAxis: {
			show: false
		},
		yAxis: [
			{
				type: 'category',
				data: [0],
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					fontSize: 18,
					color: '#fff'
				}
			},
			{
				show: true,
				data: [0],
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					fontSize: 18,
					color: '#fff'
				}
			}
		],
		series: [
			{
				name: '2011',
				type: 'bar',
				data: [dataConfig.seriesData],
				yAxisIndex: 0,
				barWidth: 6,
				itemStyle: {
					normal: {
						barBorderRadius: 20,
						color: '#3bb0f1'
					}
				}
			},
			{
				name: '2012',
				type: 'bar',
				data: [100],
				yAxisIndex: 1,
				barWidth: 15,
				itemStyle: {
					color: 'none',
					borderColor: '#fff',
					borderWidth: 2,
					barBorderRadius: 15
				}
			}
		]
	}
}
export const setBar3Option = (dataConfig: { seriesData: number }) => {
	return {
		grid: {
			left: '0%',
			right: '4%',
			bottom: '200%',
			containLabel: true
		},
		xAxis: {
			show: false
		},
		yAxis: [
			{
				type: 'category',
				data: [0],
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					fontSize: 18,
					color: '#fff'
				}
			},
			{
				show: true,
				data: [0],
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					fontSize: 18,
					color: '#fff'
				}
			}
		],
		series: [
			{
				name: '2011',
				type: 'bar',
				data: [dataConfig.seriesData],
				yAxisIndex: 0,
				barWidth: 6,
				itemStyle: {
					normal: {
						barBorderRadius: 20,
						color: '#3bb0f1'
					}
				}
			},
			{
				name: '2012',
				type: 'bar',
				data: [100],
				yAxisIndex: 1,
				barWidth: 15,
				itemStyle: {
					color: 'none',
					borderColor: '#fff',
					borderWidth: 2,
					barBorderRadius: 15
				}
			}
		]
	}
}
export const setBar4Option = (dataConfig: { seriesData: number }) => {
	return {
		grid: {
			left: '0%',
			right: '4%',
			bottom: '200%',
			containLabel: true
		},
		xAxis: {
			show: false
		},
		yAxis: [
			{
				type: 'category',
				data: [0],
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					fontSize: 18,
					color: '#fff'
				}
			},
			{
				show: true,
				data: [0],
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					fontSize: 18,
					color: '#fff'
				}
			}
		],
		series: [
			{
				name: '2011',
				type: 'bar',
				data: [dataConfig.seriesData],
				yAxisIndex: 0,
				barWidth: 6,
				itemStyle: {
					normal: {
						barBorderRadius: 20,
						color: '#3bb0f1'
					}
				}
			},
			{
				name: '2012',
				type: 'bar',
				data: [100],
				yAxisIndex: 1,
				barWidth: 15,
				itemStyle: {
					color: 'none',
					borderColor: '#fff',
					borderWidth: 2,
					barBorderRadius: 15
				}
			}
		]
	}
}
/**
 * bottom水滴图
 */
export const setLiquid1Option = () => {
	return {
		series: [
			{
				type: 'liquidFill',
				data: [0.8],
				radius: '90%',
				// 水球颜色
				color: ['#43b9fd'],
				center: ['50%', '50%'],
				// outline  外边
				outline: {
					// show: false
					borderDistance: 3,
					itemStyle: {
						borderWidth: 3,
						borderColor: '#43b9fd'
					}
				},
				// 内图 背景色 边
				backgroundStyle: {
					color: 'rgba(4,24,74,0.8)'
				},
				label: {
					show: true,
					fontSize: 13,
					position: ['50%', '50%'],
					color: '#fefefe',
					formatter: '{value|' + '1' + '}' + '\n' + '{text|镇排名}',
					rich: {
						value: {
							fontSize: 21
						},
						text: {
							fontSize: 13
						}
					}
				}
			}
		]
	}
}
export const setLiquid2Option = () => {
	return {
		series: [
			{
				type: 'liquidFill',
				data: [0.8],
				radius: '90%',
				// 水球颜色
				color: ['#f8b03d'],
				center: ['50%', '50%'],
				// outline  外边
				outline: {
					// show: false
					borderDistance: 3,
					itemStyle: {
						borderWidth: 3,
						borderColor: '#f8b03d'
					}
				},
				// 内图 背景色 边
				backgroundStyle: {
					color: 'rgb(13,31,66)'
				},
				label: {
					show: true,
					fontSize: 13,
					position: ['50%', '50%'],
					color: '#fefefe',
					formatter: '{value|' + '3' + '}' + '\n' + '{text|区排名}',
					rich: {
						value: {
							fontSize: 21
						},
						text: {
							fontSize: 13
						}
					}
				}
			}
		]
	}
}
/**
 * right1群众满意率柱状图
 */
export const setBar5Option = (dataConfig: { seriesData: number }) => {
	return {
		grid: {
			left: '3%',
			right: '4%',
			bottom: '200%',
			containLabel: true
		},
		xAxis: {
			show: false
		},
		yAxis: [
			{
				type: 'category',
				data: ['群众满意率'],
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					fontSize: 16,
					color: '#fff'
				}
			},
			{
				show: true,
				data: [],
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					fontSize: 16,
					color: '#fff'
				}
			}
		],
		series: [
			{
				name: '条',
				type: 'bar',
				data: [dataConfig.seriesData],
				barWidth: 18,
				yAxisIndex: 0,
				itemStyle: {
					normal: {
						barBorderRadius: 15,
						type: 'linear',
						color: {
							colorStops: [
								{
									offset: 0,
									color: 'rgb(2,228,255)'
								},
								{
									offset: 1,
									color: 'rgb(244,168,46)'
								}
							]
						}
					}
				},
				// 文字标签
				label: {
					normal: {
						show: true,
						position: 'insideRight',
						fontSize: 10,
						color: '#021232',
						formatter: '{c}%'
					}
				}
			},
			{
				name: '框',
				type: 'bar',
				data: [100],
				yAxisIndex: 1,
				barWidth: 18,
				itemStyle: {
					color: 'none',
					borderColor: '#1c76b8',
					borderWidth: 1,
					barBorderRadius: 15
				}
			}
		]
	}
}
