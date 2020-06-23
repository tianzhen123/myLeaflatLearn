
<template>
  <div>
    <div class="map-container" id="map-container"></div>
    <NavigationCtrl @zoomIn="zoomIn" @zoomOut="zoomOut" @resetMap="resetMap"></NavigationCtrl>
    <MapTools @marker="addMarker" @polyline="addPolyline" @polygon="addPolygon"></MapTools>
  </div>
</template>

<script>
import NavigationCtrl from "@/components/NavigationCtrl.vue";
import MapTools from "@/components/MapTools.vue";
export default {
  name: "mapCtr",
  components: {
    NavigationCtrl,
    MapTools
  },
  data(){
    return {
      map: null,
      OSMUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    }
  },
  mounted() {
    this.map = this.$utils.map.createMap("map-container",{
        zoomControl: false, // 放大与缩小
        scrollWheelZoom: true //默认开启鼠标滚轮缩放
    });

    // 加载 open street map 图层服务
    this.$utils.map.createTileLayer(this.map, this.OSMUrl, {});

    // 设施地图视图 中心位置
    this.map.setView([51.505, -0.09], 13);
  },
  methods:{
    zoomIn() {
      this.map.zoomIn();
    },
    zoomOut() {
      this.map.zoomOut();
    },
    resetMap() {
      this.map.setView([51.505, -0.09], 13);
    },
    addMarker() {
      this.$utils.map.createMakerByXY(this.map, [51.505, -0.09]);
    },
    addPolyline() {},
    addPolygon() {}
  }
};
</script>
<style lang="less">
.map-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
