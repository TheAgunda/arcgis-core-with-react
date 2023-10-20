import WebScene from "@arcgis/core/WebScene.js";
import SceneView from "@arcgis/core/views/SceneView.js";
import Search from "@arcgis/core/widgets/Search.js";
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";
import Map from "@arcgis/core/Map";
const noop = () => {

}

const view = new SceneView({
    map: new Map({
        basemap: "hybrid",
        ground: 'world-elevation'
    }),
    viewingMode: 'global',
});

export const initialize = (container: any) => {
    view.container = container;
    view.when().then(_ => {
        console.log("Map and View are ready")
    }).catch(noop);
    return () => {
        view.container = container
    }
}