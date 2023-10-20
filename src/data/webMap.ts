import WebScene from "@arcgis/core/WebScene.js";
import SceneView from "@arcgis/core/views/SceneView.js";
import Search from "@arcgis/core/widgets/Search.js";
import WebMap from "@arcgis/core/WebMap.js";
import MapView from "@arcgis/core/views/MapView.js";

const noop = () => {

}
export const webMap = new WebMap({
    portalItem: { // autocasts as new PortalItem()
        id: "e691172598f04ea8881cd2a4adaa45ba"  // ID of the WebScene on the on-premise portal
    }
});
export const view = new MapView({
    map: webMap
})

// export const search = new Search({ view });
// view.ui.add(search, "top-right");

export const initialize = (container: any) => {
    view.container = container;
    view.when().then(_ => {
        console.log("Map and View are ready")
    }).catch(noop);
    return () => {
        view.container = container
    }
}