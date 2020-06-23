// utils/map.js

import "leaflet/dist/leaflet.css"
import $L from "leaflet";

const createMap = (divId, options) => {
    let map = $L.map(divId, options);
    return map;
};

/**
 * 创建 Icon
 *
 * @param {Oject} options
 */
const createIcon = options => {
    return $L.icon(options);
};

const createTileLayer = async (map, url, options) => {
    let tileLayer = await $L.tileLayer(url, options);
    tileLayer.addTo(map);
    return tileLayer;
};

/**
 * 通过 [x, y] 坐标添加 Maker
 *
 * @param {Object} map
 * @param {Object} latLng
 * @param {Object} options
 * 
 */
const createMakerByXY = (map, coordinate, options = {}) => {
    let marker = $L.marker($L.latLng(coordinate[1], coordinate[0]), options);
    marker.addTo(map);
    return marker;
};

export default { createMap, createTileLayer, createIcon, createMakerByXY };
