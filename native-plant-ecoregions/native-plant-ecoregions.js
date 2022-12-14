//initalize map variable, lat long is center of texas
let map = L.map("native-plant-map", { zoomSnap: 0.25 }).setView(
  [31.75, -99.9],
  5.75
);

//set map tile layer to openstreet maps, bind zoom min max to avoid zooming to entire planet
L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 10,
    minZoom: 5,
    attribution:
      "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community",
  }
).addTo(map);

//array of ecoregion objects.  ID is for the epa.gov API.  Can customize styling here, right now all layers are green.
let ecoObj = [
  {
    name: "Chihuahuan Deserts",
    id: 17,
    style: "green",
  },
  {
    name: "High Plains",
    id: 18,
    style: "green",
  },
  {
    name: "Southwestern Tablelands",
    id: 19,
    style: "green",
  },
  {
    name: "Central Great Plains",
    id: 20,
    style: "green",
  },
  {
    name: "Cross Timbers",
    id: 22,
    style: "green",
  },
  {
    name: "Edwards Plateau",
    id: 24,
    style: "green",
  },
  {
    name: "Southern Texas Plains",
    id: 25,
    style: "green",
  },
  {
    name: "Texas Blackland Prairies",
    id: 26,
    style: "green",
  },
  {
    name: "East Central Texas Plains",
    id: 27,
    style: "green",
  },
  {
    name: "Gulf Coast Prairies and Marshes",
    id: 28,
    style: "green",
  },
  {
    name: "Western Gulf Coastal Plain",
    id: 29,
    style: "green",
  },
];

//texas boundry geojson
let texasGeo = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "USA-TX",
      properties: { fips: "48", name: "Texas" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-101.812942, 36.501861],
            [-100.000075, 36.501861],
            [-100.000075, 34.563024],
            [-99.923398, 34.573978],
            [-99.698843, 34.382285],
            [-99.57835, 34.415147],
            [-99.260688, 34.404193],
            [-99.189488, 34.2125],
            [-98.986841, 34.223454],
            [-98.767763, 34.135823],
            [-98.570593, 34.146777],
            [-98.488439, 34.064623],
            [-98.36247, 34.157731],
            [-98.170777, 34.113915],
            [-98.088623, 34.004376],
            [-97.946222, 33.987946],
            [-97.869545, 33.851022],
            [-97.694283, 33.982469],
            [-97.458774, 33.905791],
            [-97.371143, 33.823637],
            [-97.256128, 33.861976],
            [-97.173974, 33.736006],
            [-96.922034, 33.960561],
            [-96.850834, 33.845545],
            [-96.631756, 33.845545],
            [-96.423633, 33.774345],
            [-96.346956, 33.686714],
            [-96.149786, 33.840068],
            [-95.936185, 33.889361],
            [-95.8376, 33.834591],
            [-95.602092, 33.933176],
            [-95.547322, 33.878407],
            [-95.289906, 33.87293],
            [-95.224183, 33.960561],
            [-94.966767, 33.861976],
            [-94.868182, 33.74696],
            [-94.484796, 33.637421],
            [-94.380734, 33.544313],
            [-94.183564, 33.593606],
            [-94.041164, 33.54979],
            [-94.041164, 33.018527],
            [-94.041164, 31.994339],
            [-93.822086, 31.775262],
            [-93.816609, 31.556184],
            [-93.542762, 31.15089],
            [-93.526331, 30.93729],
            [-93.630393, 30.679874],
            [-93.728978, 30.575812],
            [-93.696116, 30.438888],
            [-93.767317, 30.334826],
            [-93.690639, 30.143133],
            [-93.926148, 29.787132],
            [-93.838517, 29.688547],
            [-94.002825, 29.68307],
            [-94.523134, 29.546147],
            [-94.70935, 29.622824],
            [-94.742212, 29.787132],
            [-94.873659, 29.672117],
            [-94.966767, 29.699501],
            [-95.016059, 29.557101],
            [-94.911997, 29.496854],
            [-94.895566, 29.310638],
            [-95.081782, 29.113469],
            [-95.383014, 28.867006],
            [-95.985477, 28.604113],
            [-96.045724, 28.647929],
            [-96.226463, 28.582205],
            [-96.23194, 28.642452],
            [-96.478402, 28.598636],
            [-96.593418, 28.724606],
            [-96.664618, 28.697221],
            [-96.401725, 28.439805],
            [-96.593418, 28.357651],
            [-96.774157, 28.406943],
            [-96.801542, 28.226204],
            [-97.026096, 28.039988],
            [-97.256128, 27.694941],
            [-97.404005, 27.333463],
            [-97.513544, 27.360848],
            [-97.540929, 27.229401],
            [-97.425913, 27.262263],
            [-97.480682, 26.99937],
            [-97.557359, 26.988416],
            [-97.562836, 26.840538],
            [-97.469728, 26.758384],
            [-97.442344, 26.457153],
            [-97.332805, 26.353091],
            [-97.30542, 26.161398],
            [-97.217789, 25.991613],
            [-97.524498, 25.887551],
            [-97.650467, 26.018997],
            [-97.885976, 26.06829],
            [-98.198161, 26.057336],
            [-98.466531, 26.221644],
            [-98.669178, 26.238075],
            [-98.822533, 26.369522],
            [-99.030656, 26.413337],
            [-99.173057, 26.539307],
            [-99.266165, 26.840538],
            [-99.446904, 27.021277],
            [-99.424996, 27.174632],
            [-99.50715, 27.33894],
            [-99.479765, 27.48134],
            [-99.605735, 27.640172],
            [-99.709797, 27.656603],
            [-99.879582, 27.799003],
            [-99.934351, 27.979742],
            [-100.082229, 28.14405],
            [-100.29583, 28.280974],
            [-100.399891, 28.582205],
            [-100.498476, 28.66436],
            [-100.629923, 28.905345],
            [-100.673738, 29.102515],
            [-100.799708, 29.244915],
            [-101.013309, 29.370885],
            [-101.062601, 29.458516],
            [-101.259771, 29.535193],
            [-101.413125, 29.754271],
            [-101.851281, 29.803563],
            [-102.114174, 29.792609],
            [-102.338728, 29.869286],
            [-102.388021, 29.765225],
            [-102.629006, 29.732363],
            [-102.809745, 29.524239],
            [-102.919284, 29.190146],
            [-102.97953, 29.184669],
            [-103.116454, 28.987499],
            [-103.280762, 28.982022],
            [-103.527224, 29.135376],
            [-104.146119, 29.381839],
            [-104.266611, 29.513285],
            [-104.507597, 29.639255],
            [-104.677382, 29.924056],
            [-104.688336, 30.181472],
            [-104.858121, 30.389596],
            [-104.896459, 30.570335],
            [-105.005998, 30.685351],
            [-105.394861, 30.855136],
            [-105.602985, 31.085167],
            [-105.77277, 31.167321],
            [-105.953509, 31.364491],
            [-106.205448, 31.468553],
            [-106.38071, 31.731446],
            [-106.528588, 31.786216],
            [-106.643603, 31.901231],
            [-106.616219, 31.999816],
            [-103.067161, 31.999816],
            [-103.067161, 33.002096],
            [-103.045254, 34.01533],
            [-103.039777, 36.501861],
            [-103.001438, 36.501861],
            [-101.812942, 36.501861],
          ],
        ],
      },
    },
  ],
};

//add texas boundry geojson to map
L.geoJSON(texasGeo, {
  style: { weight: "5", fillOpacity: 0, color: "#3c5799" },
}).addTo(map);

//wait for page to load
window.addEventListener("load", function () {
  // get array of ecoregions from the page
  // const plantArr = document
  //   .querySelector("#ecoregion-list")
  //   .childNodes[1].innerText.split(",");

  // array for testing
  const plantArr = [
    "Chihuahuan Deserts",
    "High Plains",
    "Southwestern Tablelands",
    "Central Great Plains",
    "Cross Timbers",
    "Edwards Plateau",
    "Southern Texas Plains",
    "Texas Blackland Prairies",
    "East Central Texas Plains",
    "Western Gulf Coastal Plain",
    "Gulf Coast Prairies and Marshes",
  ];

  //loop over texas ecoregions & the ecoregions for the plant, load overlays if they match
  let loadEcos = async () => {
    const promises = [];
    for (let eco of ecoObj) {
      for (let geoArea of plantArr) {
        if (geoArea.trim() === eco.name) {
          try {
            let res = await fetch(
              `https://geodata.epa.gov/arcgis/rest/services/ORD/USEPA_Ecoregions_Level_III_and_IV/MapServer/11/query?where=&text=&objectIds=${eco.id}&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=geojson`
            );
            let json = await res.json();
            //add ecoregion name so it can be bound to tooltip
            json.name = eco.name;
            promises.push(json);
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
    Promise.all(promises).then((res) => {
      document.querySelector(".spinner-container").hidden = true;
      for (let ecoregion of res) {
        L.geoJSON(ecoregion, {
          style: { color: "#3c5799  ", weight: 1, fillOpacity: 0.3 },
        })
          .bindTooltip(ecoregion.name, { className: "ecoregion-popup" })
          .addTo(map);
      }
    });
  };

  loadEcos();
});
