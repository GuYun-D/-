<template>
  <main class="screen-bg">
    <div class="header"></div>

    <div class="left-top">
      <Pie :echartsData="charginPile"></Pie>
    </div>
    <div class="left-bottom">
      <Line :echartsData="processMonitoring"></Line>
    </div>

    <div class="right-top">
      <WaterBallPane></WaterBallPane>
    </div>
    <div class="right-center">
      <Bar :echartsData="chargingStatistics"></Bar>
    </div>
    <div class="right-bottom">
      <Error :dots="error"></Error>
    </div>

    <div class="center">
      <Center></Center>
    </div>
    <div class="bottom">
      <BottomPane :panelItems="unuaualData"></BottomPane>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import {
  charginPileData,
  processMonitoringData,
  chargingStatisticsData,
  errorData,
  shujufenxu,
} from "./config/home-data";
import { getPowerScreenData } from "../services";
import Pie from "../components/pie-echarts.vue";
import Line from "../components/line-echarts.vue";
import Bar from "../components/bar-echarts.vue";
import Error from "../components/error-echarts.vue";
import Center from "../components/center.vue";
import BottomPane from "../components/bottom-pane.vue";
import WaterBallPane from "../components/right-top-panel.vue";

const charginPile = ref(charginPileData);
const processMonitoring = ref(processMonitoringData);
const chargingStatistics = ref(chargingStatisticsData);
const error = ref(errorData);
const unuaualData = ref(shujufenxu);

getPowerScreenData().then((res) => {
  if (res.code === 200) {
    charginPile.value = res.data.chargingPile.data;
    processMonitoring.value = res.data.processMonitoring.data;
    chargingStatistics.value = res.data.chargingStatistics.data;
    error.value = res.data.exceptionMonitoring.data;
    unuaualData.value = res.data.dataAnalysis.data;
  }
});
</script>

<style scoped>
.screen-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/bg.png");
}

.header {
  position: absolute;
  top: 21px;
  left: 0;
  height: 56px;
  width: 100%;
  background-image: url("@/assets/images/bg_header.svg");
}

.left-top {
  position: absolute;
  top: 116px;
  left: 16px;
  width: 536px;
  height: 443px;
  background-image: url("../assets/images/bg_left-top.svg");
}

.left-bottom {
  position: absolute;
  bottom: 49px;
  left: 16px;
  width: 536px;
  height: 443px;
  background-image: url("../assets/images/bg_left_bottom.svg");
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_top.svg);
}

.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_center.svg);
}

.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(../assets/images/bg_right_bottom.svg);
}
.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;
  text-align: center;

  /* border: 2px solid rgb(255, 255, 255); */
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(../assets/images/bg_bottom.svg);
}
</style>