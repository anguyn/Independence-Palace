require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/layers/SceneLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/request",
], function (
  Map,
  SceneView,
  GeoJSONLayer,
  SceneLayer,
  GraphicsLayer,
  Graphic,
  esriRequest
) {
  var createGraphic = function (data) {
    return new Graphic({
      geometry: data,
      symbol: data.symbol,
      attributes: data,
      popupTemplate: data.popupTemplate,
    });
  };

  const json_options = {
    query: {
      f: "json",
    },
    responseType: "json",
  };

  // request json
  esriRequest("./data.json", json_options).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });

  esriRequest("./Json/bottomWindows.json", json_options).then(function (
    response
  ) {
    var graphicsLayer = new GraphicsLayer();
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });

  esriRequest("./Json/blackDoors.json", json_options).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });

  esriRequest("./Json/violetWindowsLeft.json", json_options).then(function (
    response
  ) {
    var graphicsLayer = new GraphicsLayer();
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });

  esriRequest("./Json/way.json", json_options).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });

  esriRequest("./Json/CrazyPatterns/Duyen/faceBlock1.json", json_options).then(
    function (response) {
      var graphicsLayer = new GraphicsLayer();
      console.log(response);
      response.data.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
      });
      map.add(graphicsLayer);
    }
  );

  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block1.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block2.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block3.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block4.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block5.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block6.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block7.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block8.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block9.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block10.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block11.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block12.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block13.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block14.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block15.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block16.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block17.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block18.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block19.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/RightSide/Block20.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });

  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block1.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block2.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block3.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block4.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block5.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block6.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block7.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block8.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block9.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block10.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block11.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block12.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block13.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block14.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block15.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block16.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block17.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block18.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block19.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });
  esriRequest(
    "./Json/CrazyPatterns/An/LeftSide/Block20.json",
    json_options
  ).then(function (response) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });

  const geojsonLayer = new GeoJSONLayer({
    url: "./GeoJson/stairsInFront.geojson",
  });
  geojsonLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.3,
          material: {
            color: "#cccccc",
          },
        },
      ],
    },
  };

  const geojsonLayerAn1 = new GeoJSONLayer({
    url: "./GeoJson/bottomFrame.geojson",
  });
  geojsonLayerAn1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.92,
          material: {
            color: "#A6A395",
          },
        },
      ],
    },
  };

  const geojsonLayerAn2 = new GeoJSONLayer({
    url: "./GeoJson/edge1Frame.geojson",
  });
  geojsonLayerAn2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.25,
          material: {
            color: "#ffffff",
          },
        },
      ],
    },
  };

  const geojsonLayerAn3 = new GeoJSONLayer({
    url: "./GeoJson/innermostWall.geojson",
  });
  geojsonLayerAn3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 5.68,
          material: {
            color: "#D3AFDD",
          },
        },
      ],
    },
  };

  const geojsonLayerAn4 = new GeoJSONLayer({
    url: "./GeoJson/outsideColumns.geojson",
  });
  geojsonLayerAn4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.35,
          material: {
            color: "#9BE8BC",
          },
        },
      ],
    },
  };

  const geojsonLayerAn5 = new GeoJSONLayer({
    url: "./GeoJson/bottomBarsColumn.geojson",
  });
  geojsonLayerAn5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.75,
          material: {
            color: "#F5455A",
          },
        },
      ],
    },
  };

  const geojsonLayerAn6 = new GeoJSONLayer({
    url: "./GeoJson/secondFloorBG.geojson",
  });
  geojsonLayerAn6.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.6,
          material: {
            color: "#6A6A63",
          },
        },
      ],
    },
  };

  const geojsonLayerAn7 = new GeoJSONLayer({
    url: "./GeoJson/verticalColumns.geojson",
  });
  geojsonLayerAn7.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 12.44,
          material: {
            color: "#A7D3ED",
          },
        },
      ],
    },
  };

  const geojsonLayerAn8 = new GeoJSONLayer({
    url: "./GeoJson/firstRafters.geojson",
  });
  geojsonLayerAn8.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.33,
          material: {
            color: "#BB8B3D",
          },
        },
      ],
    },
  };

  const geojsonLayerAn9 = new GeoJSONLayer({
    url: "./GeoJson/decorationWall.geojson",
  });
  geojsonLayerAn9.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 8.33,
          material: {
            color: "#83878D",
          },
        },
      ],
    },
  };

  const geojsonLayerAn10 = new GeoJSONLayer({
    url: "./GeoJson/decorationFrameWidth.geojson",
  });
  geojsonLayerAn10.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.1,
          material: {
            color: "#F5F5AE",
          },
        },
      ],
    },
  };

  const geojsonLayerAn11 = new GeoJSONLayer({
    url: "./GeoJson/aboveGlass.geojson",
  });
  geojsonLayerAn11.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          // 1.87 nhung an gian len
          size: 1.88,
          material: {
            color: "#D0C9B8",
          },
        },
      ],
    },
  };

  const geojsonLayerAn12 = new GeoJSONLayer({
    url: "./GeoJson/innermostWall2.geojson",
  });
  geojsonLayerAn12.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 5.1,
          material: {
            color: "#D0C9B8",
          },
        },
      ],
    },
  };

  const geojsonLayerAn13 = new GeoJSONLayer({
    url: "./GeoJson/innermostWall3.geojson",
  });
  geojsonLayerAn13.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.58,
          material: {
            color: "#8EE5EB",
          },
        },
      ],
    },
  };

  const geojsonLayerAn14 = new GeoJSONLayer({
    url: "./GeoJson/decorationWall2.geojson",
  });
  geojsonLayerAn14.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.04,
          material: {
            color: "#83878D",
          },
        },
      ],
    },
  };

  const geojsonLayerAn15 = new GeoJSONLayer({
    url: "./GeoJson/decorationWall1.geojson",
  });
  geojsonLayerAn15.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.95,
          material: {
            color: "#83878D",
          },
        },
      ],
    },
  };

  const geojsonLayerAn16 = new GeoJSONLayer({
    url: "./GeoJson/decorationGlass.geojson",
  });
  geojsonLayerAn16.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 7.38,
          material: {
            color: "#333332",
          },
        },
      ],
    },
  };

  const geojsonLayerAn17 = new GeoJSONLayer({
    url: "./GeoJson/AnPattern1.geojson",
  });
  geojsonLayerAn17.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.89,
          material: {
            color: "#bfbfb3",
          },
        },
      ],
    },
  };

  const geojsonLayerAn18 = new GeoJSONLayer({
    url: "./GeoJson/AnPattern2.geojson",
  });
  geojsonLayerAn18.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.89,
          material: {
            color: "#bfbfb3",
          },
        },
      ],
    },
  };

  const geojsonLayerChau1 = new GeoJSONLayer({
    url: "./GeoJson/stairsLeft.geojson",
  });
  geojsonLayerChau1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.23,
          material: {
            color: "#fccac9",
          },
        },
      ],
    },
  };

  const geojsonLayerChau2 = new GeoJSONLayer({
    url: "./GeoJson/stairsRight.geojson",
  });
  geojsonLayerChau2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.23,
          material: {
            color: "#ddc410",
          },
        },
      ],
    },
  };

  const geojsonLayerChau3 = new GeoJSONLayer({
    url: "./GeoJson/wallInFront.geojson",
  });
  geojsonLayerChau3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.92,
          material: {
            color: "#e7f9fd",
          },
        },
      ],
    },
  };

  const geojsonLayerChau4 = new GeoJSONLayer({
    url: "./GeoJson/overWallInFront.geojson",
  });
  geojsonLayerChau4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.25,
          material: {
            color: "#fff",
          },
        },
      ],
    },
  };

  const geojsonLayerChau5 = new GeoJSONLayer({
    url: "./GeoJson/windowHeight.geojson",
  });
  geojsonLayerChau5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.63,
          material: {
            color: "#fff",
          },
        },
      ],
    },
  };

  const geojsonLayerChau6 = new GeoJSONLayer({
    url: "./GeoJson/windowWeightBottom.geojson",
  });
  geojsonLayerChau6.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.11,
          material: {
            color: "#fff",
          },
        },
      ],
    },
  };

  const geojsonLayerChau7 = new GeoJSONLayer({
    url: "./GeoJson/windowWeightTop.geojson",
  });
  geojsonLayerChau7.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.11,
          material: {
            color: "#fff",
          },
        },
      ],
    },
  };

  const geojsonLayerChau8 = new GeoJSONLayer({
    url: "./GeoJson/columnOverStair.geojson",
  });
  geojsonLayerChau8.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.71,
          material: {
            color: "#fff",
          },
        },
      ],
    },
  };

  const geojsonLayerChau9 = new GeoJSONLayer({
    url: "./GeoJson/aboveColumnStair.geojson",
  });
  geojsonLayerChau9.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.93,
          material: {
            color: "#fff",
          },
        },
      ],
    },
  };

  const geojsonLayerChau10 = new GeoJSONLayer({
    url: "./GeoJson/heighestColumnStair.geojson",
  });
  geojsonLayerChau10.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 10.89,
          material: {
            color: "#fff",
          },
        },
      ],
    },
  };

  const geojsonLayerNhi = new GeoJSONLayer({
    url: "./GeoJson/violetBaseLeft.geojson",
  });
  geojsonLayerNhi.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.92,
          material: {
            color: "#A6A395",
          },
        },
      ],
    },
  };

  const geojsonLayerNhi1 = new GeoJSONLayer({
    url: "./GeoJson/violetNextBase.geojson",
  });
  geojsonLayerNhi1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.4,
          material: {
            color: "#FFFFFF",
          },
        },
      ],
    },
  };

  const geojsonLayerNhi2 = new GeoJSONLayer({
    url: "./GeoJson/violetColumn.geojson",
  });
  geojsonLayerNhi2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 4.35,
          material: {
            color: "#9BE8BC",
          },
        },
      ],
    },
  };

  const geojsonLayerNhi3 = new GeoJSONLayer({
    url: "./GeoJson/violetHorizontalColum.geojson",
  });
  geojsonLayerNhi3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.75,
          material: {
            color: "#F5455A",
          },
        },
      ],
    },
  };

  const geojsonLayerNhi4 = new GeoJSONLayer({
    url: "./GeoJson/violetHeightColumn.geojson",
  });
  geojsonLayerNhi4.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 9.97,
          material: {
            color: "#A7D3ED",
          },
        },
      ],
    },
  };

  const geojsonLayerNhi5 = new GeoJSONLayer({
    url: "./GeoJson/violetRafters.geojson",
  });
  geojsonLayerNhi5.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.33,
          material: {
            color: "#BB8B3D",
          },
        },
      ],
    },
  };

  const geojsonLayerNhi6 = new GeoJSONLayer({
    url: "./GeoJson/violetWallInside.geojson",
  });
  geojsonLayerNhi6.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 5.68,
          material: {
            color: "#A7D3ED",
          },
        },
      ],
    },
  };

  ////////////////////////////////////////////////////
  const geojsonLayerTam2 = new GeoJSONLayer({
    url: "./GeoJson/edge2Frame.geojson",
  });
  geojsonLayerTam2.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.25,
          material: {
            color: "#ffffff",
          },
        },
      ],
    },
  };

  const geojsonLayerTam3 = new GeoJSONLayer({
    url: "./GeoJson/HorizontalColumn.geojson",
  });
  geojsonLayerTam3.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.75,
          material: {
            color: "#F5455A",
          },
        },
      ],
    },
  };

  ////////////////////////////////////////////////////

  const way1 = new GeoJSONLayer({
    url: "./GeoJson/way1.geojson",
  });
  way1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.1,
          material: {
            color: "#ffffff",
          },
        },
      ],
    },
  };

  //geojson layer

  const firstTopLayer = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/firstTop.geojson",
  });

  const middleFirstTopLayer = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/middleFirstTop.geojson",
  });

  const wallMiddleFirstTopLayer = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/wallMiddleFirstTop.geojson",
  });

  const turretTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/turretTop.geojson",
  });

  const topTurretTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/topTurretTop.geojson",
  });

  const firstLayerSecondTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/firstLayerSecondTop.geojson",
  });

  const secondLayerSecondTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/secondLayerSecondTop.geojson",
  });

  const thirdLayerSecondTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/thirdLayerSecondTop.geojson",
  });

  const floorThirdLayerSecondTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/floorThirdLayerSecondTop.geojson",
  });

  const secondTurretTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/secondTurretTop.geojson",
  });

  const secondTopTurretTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/secondTopTurretTop.geojson",
  });

  const middleTurretTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/middleTurretTop.geojson",
  });

  const topMiddleTurretTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/topMiddleTurretTop.geojson",
  });

  const secondTopMiddleTurretTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/secondTopMiddleTurretTop.geojson",
  });

  const middleHoleTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/middleHoleTop.geojson",
  });

  const floorMiddleHoleTop = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/floorMiddleHoleTop.geojson",
  });

  const placeOfFlag = new GeoJSONLayer({
    url: "./GeoJson/TopDinh/placeOfFlag.geojson",
  });

  placeOfFlag.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.4,
          material: {
            color: "#ffffff",
          },
        },
      ],
    },
  };

  floorMiddleHoleTop.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.21,
          material: {
            color: "#ffffff",
          },
        },
      ],
    },
  };

  middleHoleTop.renderer = {
    type: "simple",
    symbol: {
      type: "line-3d",
      symbolLayers: [
        {
          type: "path",
          profile: "quad",
          material: {
            color: "#c0bb9e",
          },
          width: 0.2, // the width in m
          height: 1, // the height in m
          anchor: "bottom", // the vertical anchor is set to the lowest point of the wall
          profileRotation: "heading",
        },
      ],
    },
  };

  secondTopMiddleTurretTop.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.95,
          material: {
            color: "#bdb8ab",
          },
        },
      ],
    },
  };

  topMiddleTurretTop.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.94,
          material: {
            color: "#e8e5dd",
          },
        },
      ],
    },
  };

  middleTurretTop.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.8,
          material: {
            color: "#cccccc",
          },
        },
      ],
    },
  };

  secondTopTurretTop.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.5,
          material: {
            color: "#ffffff",
          },
        },
      ],
    },
  };

  secondTurretTop.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 3.14,
          material: {
            color: "#cccccc",
          },
        },
      ],
    },
  };

  floorThirdLayerSecondTop.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.2,
          material: {
            color: "#dbb874",
          },
        },
      ],
    },
  };

  middleFirstTopLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.2,
          material: {
            color: "#dbb874",
          },
        },
      ],
    },
  };

  //thirdLayerSecondTop renderer with symbol type line-3d and symbolLayer type path
  thirdLayerSecondTop.renderer = {
    type: "simple",
    symbol: {
      type: "line-3d",
      symbolLayers: [
        {
          type: "path",
          profile: "quad",
          material: {
            color: "#c0bb9e",
          },
          width: 0.2, // the width in m
          height: 1, // the height in m
          anchor: "bottom", // the vertical anchor is set to the lowest point of the wall
          profileRotation: "heading",
        },
      ],
    },
  };

  secondLayerSecondTop.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.16,
          material: {
            color: "#ffffff",
          },
          edges: {
            type: "solid", // autocasts as new SolidEdges3D()
            color: [50, 50, 50, 0.5],
          },
        },
      ],
    },
  };

  firstLayerSecondTop.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 1.24,
          material: {
            color: "#cccccc",
          },
        },
      ],
    },
  };

  topTurretTop.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.6,
          material: {
            color: "#ffffff",
          },
        },
      ],
    },
  };

  turretTop.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 2.5,
          material: {
            color: "#cccccc",
          },
        },
      ],
    },
  };

  wallMiddleFirstTopLayer.renderer = {
    type: "simple",
    symbol: {
      type: "line-3d",
      symbolLayers: [
        {
          type: "path",
          profile: "quad",
          material: {
            color: "#c0bb9e",
          },
          width: 0.2, // the width in m
          height: 1, // the height in m
          anchor: "bottom", // the vertical anchor is set to the lowest point of the wall
          profileRotation: "heading",
        },
      ],
    },
  };

  firstTopLayer.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.6,
          material: {
            color: "#ffffff",
          },
        },
      ],
    },
  };

  const block1 = new GeoJSONLayer({
    url: "./GeoJson/block1.geojson",
  });

  block1.renderer = {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: 0.89,
          material: {
            color: "#bfbfb3",
          },
        },
      ],
    },
  };

  const map = new Map({
    basemap: "topo-vector",
    ground: "world-elevation",
    layers: [
      geojsonLayer,
      geojsonLayerAn1,
      geojsonLayerAn2,
      geojsonLayerAn3,
      geojsonLayerAn4,
      geojsonLayerAn5,
      geojsonLayerAn6,
      geojsonLayerAn7,
      geojsonLayerAn8,
      geojsonLayerAn9,
      geojsonLayerAn10,
      geojsonLayerAn11,
      geojsonLayerAn12,
      geojsonLayerAn13,
      geojsonLayerAn14,
      geojsonLayerAn15,
      geojsonLayerAn16,
      geojsonLayerAn17,
      geojsonLayerAn18,
      geojsonLayerChau1,
      geojsonLayerChau2,
      geojsonLayerChau3,
      geojsonLayerChau4,
      geojsonLayerChau5,
      geojsonLayerChau6,
      geojsonLayerChau7,
      geojsonLayerChau8,
      geojsonLayerChau9,
      geojsonLayerChau10,
      geojsonLayerNhi,
      geojsonLayerNhi1,
      geojsonLayerNhi2,
      geojsonLayerNhi3,
      geojsonLayerNhi4,
      geojsonLayerNhi6,
      geojsonLayerNhi5,
      geojsonLayerTam2,
      geojsonLayerTam3,
      way1,
      block1,
      geojsonLayer,
      firstTopLayer,
      middleFirstTopLayer,
      turretTop,
      topTurretTop,
      firstLayerSecondTop,
      secondLayerSecondTop,
      thirdLayerSecondTop,
      floorThirdLayerSecondTop,
      secondTurretTop,
      secondTopTurretTop,
      middleTurretTop,
      topMiddleTurretTop,
      secondTopMiddleTurretTop,
      middleHoleTop,
      floorMiddleHoleTop,
      placeOfFlag,
    ], //end layers
  });

  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [106.69565140222676, 10.778448137494399, 100],
      heading: 910,
      tilt: 60,
    },
  });

  view.popup.defaultPopupTemplateEnabled = true;
});
