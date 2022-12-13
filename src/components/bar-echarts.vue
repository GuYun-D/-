<template>
  <div
    ref="divRef"
    class="home"
    :style="{ width: width, height: height }"
  ></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import useEcharts from "../hooks/useEcharts";

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "100%",
  },
  echartsData: {
    type: Array,
    default: () => [],
  },
});

const divRef = ref(null);
let myEcharts = null;

onMounted(() => {
  setupEcharts(props.echartsData);
});

watch(
  () => props.echartsData,
  (newVal) => setupEcharts(newVal)
);

const setupEcharts = (data) => {
  if (!myEcharts) {
    myEcharts = useEcharts(divRef.value);
  }
  const option = getOption(data);
  myEcharts.setOption(option);
};

const getOption = (echartDatas) => {
  let categoryData = echartDatas.map((item) => {
    return item.name;
  });
  let bardata = echartDatas.map((item) => {
    return item.value;
  });

  let option = {
    grid: {
      left: "5%",
      right: "5%",
      top: "30%",
      bottom: "5%",
      containLabel: true, // grid 区域是否包含坐标轴的刻度标签
    },
    tooltip: {},
    xAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "white",
      },

      data: categoryData,
    },
    yAxis: {
      name: "个",
      nameTextStyle: {
        color: "white",
        fontSize: 13,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisLabel: {
        color: "white",
      },
    },
    series: [
      {
        name: "销量",
        type: "bar",
        barWidth: 17,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#01B1FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#033BFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        data: bardata,
      },
    ],
  };

  return option;
};
</script>