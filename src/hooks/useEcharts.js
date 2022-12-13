import * as echarts from 'echarts'
import { onUnmounted } from 'vue'

export default (divEl) => {
  const echartsInit = echarts.init(divEl, null, {
    renderer: 'svg'
  })

  const setOption = (option) => {
    echartsInit.setOption(option)
  }

  const resizeEcharts = () => {
    echartsInit.resize()
  }


  onUnmounted(() => {
    echartsInit.dispose()
  })

  return { echartsInit, setOption, resizeEcharts }
}
