const trasa1 = document.getElementById("trasa1");
const trasa2 = document.getElementById("trasa2");
const trasa3 = document.getElementById("trasa3");
const trasa4 = document.getElementById("trasa4");
const trasa5 = document.getElementById("trasa5");
const trasa6 = document.getElementById("trasa6");
const trasa7 = document.getElementById("trasa7");
const trasa8 = document.getElementById("trasa8");
const trasa9 = document.getElementById("trasa9");
const trasa10 = document.getElementById("trasa10");
const trasa11 = document.getElementById("trasa11");
const trasa12 = document.getElementById("trasa12");
const trasa13 = document.getElementById("trasa13");

for (let i = 1; i <= 13; i++) {
  eval(
    "var liTrasa" +
      i +
      " = " +
      'document.getElementById("' +
      "liTrasa" +
      i +
      '");'
  );
}

trasa1.addEventListener("click", function () {
  liTrasa1.classList.toggle("liTrasa1Back");
});
trasa2.addEventListener("click", function () {
  liTrasa2.classList.toggle("liTrasa2Back");
});
trasa3.addEventListener("click", function () {
  liTrasa3.classList.toggle("liTrasa3Back");
});
trasa4.addEventListener("click", function () {
  liTrasa4.classList.toggle("liTrasa4Back");
});
trasa5.addEventListener("click", function () {
  liTrasa5.classList.toggle("liTrasa5Back");
});
trasa6.addEventListener("click", function () {
  liTrasa6.classList.toggle("liTrasa6Back");
});
trasa7.addEventListener("click", function () {
  liTrasa7.classList.toggle("liTrasa7Back");
});
trasa8.addEventListener("click", function () {
  liTrasa8.classList.toggle("liTrasa8Back");
});
trasa9.addEventListener("click", function () {
  liTrasa9.classList.toggle("liTrasa9Back");
});
trasa10.addEventListener("click", function () {
  liTrasa10.classList.toggle("liTrasa10Back");
});
trasa11.addEventListener("click", function () {
  liTrasa11.classList.toggle("liTrasa11Back");
});
trasa12.addEventListener("click", function () {
  liTrasa12.classList.toggle("liTrasa12Back");
});
trasa13.addEventListener("click", function () {
  liTrasa13.classList.toggle("liTrasa13Back");
});

let flag = true;
let flag2 = true;
let flag3 = true;
let flag4 = true;
let flag5 = true;
let flag6 = true;
let flag7 = true;
let flag8 = true;
let flag9 = true;
let flag10 = true;
let flag11 = true;
let flag12 = true;
let flag13 = true;

for (let i = 1; i <= 34; i++) {
  eval(
    "var markerCheckbox" +
      i +
      " = " +
      'document.getElementById("' +
      "marker" +
      i +
      '");'
  );
}

for (let i = 1; i <= 34; i++) {
  eval("var flagMarker" + i + " = true;");
}

for (let i = 1; i <= 34; i++) {
  eval("var flagCheckbox" + i + " = true;");
}

const strokeWeight = 3;
const familyColor = "#916996";

function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService2 = new google.maps.DirectionsService();
  const directionsRenderer2 = new google.maps.DirectionsRenderer();
  const directionsService3 = new google.maps.DirectionsService();
  const directionsRenderer3 = new google.maps.DirectionsRenderer();
  const directionsService4 = new google.maps.DirectionsService();
  const directionsRenderer4 = new google.maps.DirectionsRenderer();
  const directionsService5 = new google.maps.DirectionsService();
  const directionsRenderer5 = new google.maps.DirectionsRenderer();
  const directionsService6 = new google.maps.DirectionsService();
  const directionsRenderer6 = new google.maps.DirectionsRenderer();
  const directionsService7 = new google.maps.DirectionsService();
  const directionsRenderer7 = new google.maps.DirectionsRenderer();
  const directionsService8 = new google.maps.DirectionsService();
  const directionsRenderer8 = new google.maps.DirectionsRenderer();
  const directionsService9 = new google.maps.DirectionsService();
  const directionsRenderer9 = new google.maps.DirectionsRenderer();
  const directionsService10 = new google.maps.DirectionsService();
  const directionsRenderer10 = new google.maps.DirectionsRenderer();
  const directionsService11 = new google.maps.DirectionsService();
  const directionsRenderer11 = new google.maps.DirectionsRenderer();
  const directionsService12 = new google.maps.DirectionsService();
  const directionsRenderer12 = new google.maps.DirectionsRenderer();
  const directionsService13 = new google.maps.DirectionsService();
  const directionsRenderer13 = new google.maps.DirectionsRenderer();
  console.log(directionsRenderer);
  const Pleszew = { lat: 51.897361, lng: 17.785614 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: Pleszew,
  });

  directionsRenderer.setOptions({
    polylineOptions: {
      strokeColor: "#d5edad",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer2.setOptions({
    polylineOptions: {
      strokeColor: "#d1adea",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer3.setOptions({
    polylineOptions: {
      strokeColor: "#c6c8fa",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer4.setOptions({
    polylineOptions: {
      strokeColor: familyColor,
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer5.setOptions({
    polylineOptions: {
      strokeColor: "#af8b8c",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer6.setOptions({
    polylineOptions: {
      strokeColor: "#af8b8c",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer7.setOptions({
    polylineOptions: {
      strokeColor: "#916996",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer8.setOptions({
    polylineOptions: {
      strokeColor: "#a7cd69",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer9.setOptions({
    polylineOptions: {
      strokeColor: "#4388ab",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer10.setOptions({
    polylineOptions: {
      strokeColor: "#4388ab",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer11.setOptions({
    polylineOptions: {
      strokeColor: "#e28743",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer12.setOptions({
    polylineOptions: {
      strokeColor: "#666699",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer13.setOptions({
    polylineOptions: {
      strokeColor: "#339933",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer.setMap(map);
  directionsRenderer2.setMap(map);
  directionsRenderer3.setMap(map);
  directionsRenderer4.setMap(map);
  directionsRenderer5.setMap(map);
  directionsRenderer6.setMap(map);
  directionsRenderer7.setMap(map);
  directionsRenderer8.setMap(map);
  directionsRenderer9.setMap(map);
  directionsRenderer10.setMap(map);
  directionsRenderer11.setMap(map);
  directionsRenderer12.setMap(map);
  directionsRenderer13.setMap(map);

  //calculateRoute(directionsService, directionsRenderer);

  const onChangeHandler = function (
    directionsService,
    directionsRenderer,
    originDestinationArray,
    id
  ) {
    calculateRoute(
      directionsService,
      directionsRenderer,
      originDestinationArray,
      id
    );
  };

  trasa1.addEventListener("change", function () {
    onChangeHandler(
      directionsService,
      directionsRenderer,
      [
        { lat: 51.89542634621091, lng: 17.787226367424775 },
        { lat: 51.892805355856666, lng: 17.774515595876846 },
      ],
      1
    );

    if (
      (flag == true && flagCheckbox1 == false) ||
      (flag3 == false && flagCheckbox1 == true) ||
      (flag4 == false && flagCheckbox1 == true) ||
      (flag7 == false && flagCheckbox1 == true) ||
      (flag2 == false && flagCheckbox1 == true) ||
      (flag9 == false && flagCheckbox1 == true) ||
      (flag10 == false && flagCheckbox1 == true)
    ) {
    } else {
      flagMarker1 = toggleMarker(marker1, map, flagMarker1);
      map.panTo(marker1.getPosition());
      marker1.addListener("click", () => {
        infowindow1.open({
          anchor: marker1,
          map,
        });
      });
    }

    if (flag == true && flagCheckbox8 == false) {
    } else {
      flagMarker8 = toggleMarker(marker8, map, flagMarker8);
      map.panTo(marker8.getPosition());
      marker8.addListener("click", () => {
        infowindow8.open({
          anchor: marker8,
          map,
        });
      });
    }

    if (
      (flag == true && flagCheckbox10 == false) ||
      (flag3 == false && flagCheckbox10 == true) ||
      (flag4 == false && flagCheckbox10 == true) ||
      (flag7 == false && flagCheckbox10 == true) ||
      (flag8 == false && flagCheckbox10 == true) ||
      (flag10 == false && flagCheckbox10 == true)
    ) {
    } else {
      flagMarker10 = toggleMarker(marker10, map, flagMarker10);
      map.panTo(marker10.getPosition());
      marker10.addListener("click", () => {
        infowindow10.open({
          anchor: marker10,
          map,
        });
      });
    }

    if (
      (flag == true && flagCheckbox32 == false) ||
      (flag3 == false && flagCheckbox32 == true) ||
      (flag7 == false && flagCheckbox32 == true) ||
      (flag8 == false && flagCheckbox32 == true) ||
      (flag9 == false && flagCheckbox32 == true)
    ) {
    } else {
      flagMarker32 = toggleMarker(marker32, map, flagMarker32);
      map.panTo(marker32.getPosition());
      marker32.addListener("click", () => {
        infowindow32.open({
          anchor: marker32,
          map,
        });
      });
    }
  });
  trasa2.addEventListener("change", function () {
    onChangeHandler(
      directionsService2,
      directionsRenderer2,
      [
        { lat: 51.895996219528755, lng: 17.786380257567878 },
        { lat: 51.895996219528755, lng: 17.786380257567878 },
        { lat: 51.906705998026204, lng: 17.778847340495126 },
        { lat: 51.90515303305568, lng: 17.784319736197144 },
        { lat: 51.90301408563158, lng: 17.781526472302787 },
        { lat: 51.90112560187134, lng: 17.789839282844323 },
        { lat: 51.89672463638253, lng: 17.78880065365483 },
        { lat: 51.895414445193374, lng: 17.788917762756373 },
        { lat: 51.89551297142139, lng: 17.78694400483262 },
      ],
      2
    );
    if (
      (flag2 == true && flagCheckbox1 == false) ||
      (flag3 == false && flagCheckbox1 == true) ||
      (flag4 == false && flagCheckbox1 == true) ||
      (flag7 == false && flagCheckbox1 == true) ||
      (flag == false && flagCheckbox1 == true) ||
      (flag9 == false && flagCheckbox1 == true) ||
      (flag10 == false && flagCheckbox1 == true)
    ) {
    } else {
      flagMarker1 = toggleMarker(marker1, map, flagMarker1);
      map.panTo(marker1.getPosition());
      marker1.addListener("click", () => {
        infowindow1.open({
          anchor: marker1,
          map,
        });
      });
    }

    if (
      (flag2 == true && flagCheckbox6 == false) ||
      (flag7 == false && flagCheckbox6 == true)
    ) {
    } else {
      flagMarker6 = toggleMarker(marker6, map, flagMarker6);
      map.panTo(marker6.getPosition());
      marker6.addListener("click", () => {
        infowindow6.open({
          anchor: marker6,
          map,
        });
      });
    }

    if (
      (flag2 == true && flagCheckbox9 == false) ||
      (flag4 == false && flagCheckbox9 == true) ||
      (flag7 == false && flagCheckbox9 == true)
    ) {
    } else {
      flagMarker9 = toggleMarker(marker9, map, flagMarker9);
      map.panTo(marker9.getPosition());
      marker9.addListener("click", () => {
        infowindow9.open({
          anchor: marker9,
          map,
        });
      });
    }

    if (flag2 == true && flagCheckbox13 == false) {
    } else {
      flagMarker13 = toggleMarker(marker13, map, flagMarker13);
      map.panTo(marker13.getPosition());
      marker13.addListener("click", () => {
        infowindow13.open({
          anchor: marker13,
          map,
        });
      });
    }
  });

  trasa3.addEventListener("change", function () {
    onChangeHandler(
      directionsService3,
      directionsRenderer3,
      [
        { lat: 51.895996219528755, lng: 17.786380257567878 },
        { lat: 51.895996219528755, lng: 17.786380257567878 },
        { lat: 51.89351708810884, lng: 17.78377326771659 },
        { lat: 51.89422678762591, lng: 17.77621694794884 },
        { lat: 51.88764319124861, lng: 17.73003273349742 },
        { lat: 51.89855091531895, lng: 17.757923054599043 },
        { lat: 51.895983299326375, lng: 17.763707932404632 },
      ],
      3
    );

    if (
      (flag3 == true && flagCheckbox1 == false) ||
      (flag2 == false && flagCheckbox1 == true) ||
      (flag4 == false && flagCheckbox1 == true) ||
      (flag7 == false && flagCheckbox1 == true) ||
      (flag == false && flagCheckbox1 == true) ||
      (flag9 == false && flagCheckbox1 == true) ||
      (flag10 == false && flagCheckbox1 == true)
    ) {
    } else {
      flagMarker1 = toggleMarker(marker1, map, flagMarker1);
      map.panTo(marker1.getPosition());
      marker1.addListener("click", () => {
        infowindow1.open({
          anchor: marker1,
          map,
        });
      });
    }

    if (
      (flag3 == true && flagCheckbox4 == false) ||
      (flag7 == false && flagCheckbox4 == true) ||
      (flag9 == false && flagCheckbox4 == true)
    ) {
    } else {
      flagMarker4 = toggleMarker(marker4, map, flagMarker4);
      map.panTo(marker4.getPosition());
      marker4.addListener("click", () => {
        infowindow4.open({
          anchor: marker4,
          map,
        });
      });
    }

    if (
      (flag3 == true && flagCheckbox10 == false) ||
      (flag == false && flagCheckbox10 == true) ||
      (flag4 == false && flagCheckbox10 == true) ||
      (flag7 == false && flagCheckbox10 == true) ||
      (flag8 == false && flagCheckbox10 == true) ||
      (flag10 == false && flagCheckbox10 == true)
    ) {
    } else {
      flagMarker10 = toggleMarker(marker10, map, flagMarker10);
      map.panTo(marker10.getPosition());
      marker10.addListener("click", () => {
        infowindow10.open({
          anchor: marker10,
          map,
        });
      });
    }

    if (flag3 == true && flagCheckbox11 == false) {
    } else {
      flagMarker11 = toggleMarker(marker11, map, flagMarker11);
      map.panTo(marker11.getPosition());
      marker11.addListener("click", () => {
        infowindow11.open({
          anchor: marker11,
          map,
        });
      });
    }

    if (flag3 == true && flagCheckbox12 == false) {
    } else {
      flagMarker12 = toggleMarker(marker12, map, flagMarker12);
      map.panTo(marker12.getPosition());
      marker12.addListener("click", () => {
        infowindow12.open({
          anchor: marker12,
          map,
        });
      });
    }

    if (flag3 == true && flagCheckbox33 == false) {
    } else {
      flagMarker33 = toggleMarker(marker33, map, flagMarker33);
      map.panTo(marker33.getPosition());
      marker33.addListener("click", () => {
        infowindow33.open({
          anchor: marker33,
          map,
        });
      });
    }

    if (flag3 == true && flagCheckbox32 == false) {
    } else {
      flagMarker32 = toggleMarker(marker32, map, flagMarker32);
      map.panTo(marker32.getPosition());
      marker32.addListener("click", () => {
        infowindow32.open({
          anchor: marker32,
          map,
        });
      });
    }

    if (
      (flag3 == true && flagCheckbox11 == false) ||
      (flag7 == false && flagCheckbox11 == true)
    ) {
    } else {
      flagMarker11 = toggleMarker(marker11, map, flagMarker11);
      map.panTo(marker11.getPosition());
      marker11.addListener("click", () => {
        infowindow11.open({
          anchor: marker11,
          map,
        });
      });
    }

    if (
      (flag3 == true && flagCheckbox12 == false) ||
      (flag4 == true && flagCheckbox12 == false) ||
      (flag7 == false && flagCheckbox12 == true)
    ) {
    } else {
      flagMarker12 = toggleMarker(marker12, map, flagMarker12);
      map.panTo(marker12.getPosition());
      marker12.addListener("click", () => {
        infowindow12.open({
          anchor: marker12,
          map,
        });
      });
    }

    if (
      (flag3 == true && flagCheckbox32 == false) ||
      (flag == false && flagCheckbox32 == true) ||
      (flag7 == false && flagCheckbox32 == true) ||
      (flag8 == false && flagCheckbox32 == true) ||
      (flag9 == false && flagCheckbox32 == true)
    ) {
    } else {
      flagMarker32 = toggleMarker(marker32, map, flagMarker32);
      map.panTo(marker32.getPosition());
      marker32.addListener("click", () => {
        infowindow32.open({
          anchor: marker32,
          map,
        });
      });
    }

    if (
      (flag3 == true && flagCheckbox33 == false) ||
      (flag10 == false && flagCheckbox33 == true)
    ) {
    } else {
      flagMarker33 = toggleMarker(marker33, map, flagMarker33);
      map.panTo(marker33.getPosition());
      marker33.addListener("click", () => {
        infowindow33.open({
          anchor: marker33,
          map,
        });
      });
    }
  });

  trasa4.addEventListener("change", function () {
    onChangeHandler(
      directionsService4,
      directionsRenderer4,
      [
        { lat: 51.895996219528755, lng: 17.786380257567878 },
        { lat: 51.895996219528755, lng: 17.786380257567878 },
        { lat: 51.89190243927007, lng: 17.7835967222476 },
        { lat: 51.88765243050768, lng: 17.778180261337102 },
        { lat: 51.8838154454794, lng: 17.788408086197222 },
        { lat: 51.88372964967429, lng: 17.791119934704 },
        { lat: 51.88622899285266, lng: 17.798974051483352 },
      ],
      4
    );

    if (
      (flag4 == true && flagCheckbox1 == false) ||
      (flag3 == false && flagCheckbox1 == true) ||
      (flag2 == false && flagCheckbox1 == true) ||
      (flag7 == false && flagCheckbox1 == true) ||
      (flag == false && flagCheckbox1 == true) ||
      (flag9 == false && flagCheckbox1 == true) ||
      (flag10 == false && flagCheckbox1 == true)
    ) {
    } else {
      flagMarker1 = toggleMarker(marker1, map, flagMarker1);
      map.panTo(marker1.getPosition());
      marker1.addListener("click", () => {
        infowindow1.open({
          anchor: marker1,
          map,
        });
      });
    }

    if (
      (flag4 == true && flagCheckbox9 == false) ||
      (flag2 == false && flagCheckbox9 == true) ||
      (flag7 == false && flagCheckbox9 == true)
    ) {
    } else {
      flagMarker9 = toggleMarker(marker9, map, flagMarker9);
      map.panTo(marker9.getPosition());
      marker9.addListener("click", () => {
        infowindow9.open({
          anchor: marker9,
          map,
        });
      });
    }

    if (
      (flag4 == true && flagCheckbox10 == false) ||
      (flag3 == false && flagCheckbox10 == true) ||
      (flag == false && flagCheckbox10 == true) ||
      (flag7 == false && flagCheckbox10 == true) ||
      (flag8 == false && flagCheckbox10 == true) ||
      (flag10 == false && flagCheckbox10 == true)
    ) {
    } else {
      flagMarker10 = toggleMarker(marker10, map, flagMarker10);
      map.panTo(marker10.getPosition());
      marker10.addListener("click", () => {
        infowindow10.open({
          anchor: marker10,
          map,
        });
      });
    }

    if (
      (flag4 == true && flagCheckbox12 == false) ||
      (flag3 == false && flagCheckbox12 == false) ||
      (flag7 == false && flagCheckbox12 == true)
    ) {
    } else {
      flagMarker12 = toggleMarker(marker12, map, flagMarker12);
      map.panTo(marker12.getPosition());
      marker12.addListener("click", () => {
        infowindow12.open({
          anchor: marker12,
          map,
        });
      });
    }

    if (flag4 == true && flagCheckbox14 == false) {
    } else {
      flagMarker14 = toggleMarker(marker14, map, flagMarker14);
      map.panTo(marker14.getPosition());
      marker14.addListener("click", () => {
        infowindow14.open({
          anchor: marker14,
          map,
        });
      });
    }

    if (flag4 == true && flagCheckbox15 == false) {
    } else {
      flagMarker15 = toggleMarker(marker15, map, flagMarker15);
      map.panTo(marker15.getPosition());
      marker15.addListener("click", () => {
        infowindow15.open({
          anchor: marker15,
          map,
        });
      });
    }

    if (flag4 == true && flagCheckbox18 == false) {
    } else {
      flagMarker18 = toggleMarker(marker18, map, flagMarker18);
      map.panTo(marker18.getPosition());
      marker18.addListener("click", () => {
        infowindow18.open({
          anchor: marker18,
          map,
        });
      });
    }

    if (
      (flag4 == true && flagCheckbox28 == false) ||
      (flag8 == false && flagCheckbox28 == true) ||
      (flag10 == false && flagCheckbox28 == true)
    ) {
    } else {
      flagMarker28 = toggleMarker(marker28, map, flagMarker28);
      map.panTo(marker28.getPosition());
      marker28.addListener("click", () => {
        infowindow12.open({
          anchor: marker28,
          map,
        });
      });
    }
  });

  trasa5.addEventListener("change", function () {
    onChangeHandler(
      directionsService5,
      directionsRenderer5,
      [
        { lat: 51.89891508350769, lng: 17.775806445351236 },
        { lat: 51.89891508350769, lng: 17.775806445351236 },
        { lat: 51.9069219025304, lng: 17.778309542049826 },
        { lat: 51.90186567713561, lng: 17.781711274178353 },
        { lat: 51.90102236073968, lng: 17.78982924926793 },
        { lat: 51.89897807414778, lng: 17.787977735095748 },
        { lat: 51.898875226228945, lng: 17.784252821350236 },
        { lat: 51.89658569235979, lng: 17.782942876079115 },
        { lat: 51.8962573242653, lng: 17.7860286772145 },
        { lat: 51.89483599693496, lng: 17.798640079645754 },
        { lat: 51.888880357601344, lng: 17.79501086438889 },
        { lat: 51.88426024591688, lng: 17.803246013339482 },
        { lat: 51.88637117114815, lng: 17.786243904166643 },
        { lat: 51.88661729794219, lng: 17.782350868206365 },
        { lat: 51.884214375290924, lng: 17.781066706915716 },
        { lat: 51.88785382275178, lng: 17.777015964075858 },
        { lat: 51.89222765380093, lng: 17.780964399934156 },
        { lat: 51.89212889237092, lng: 17.781821634172925 },
        { lat: 51.891926010357786, lng: 17.78359581540696 },
        { lat: 51.894949450562066, lng: 17.781188632869398 },
        { lat: 51.89424763811835, lng: 17.77617826648364 },
        { lat: 51.89623387150954, lng: 17.76338949394088 },
      ],
      5
    );
  });

  trasa6.addEventListener("change", function () {
    onChangeHandler(
      directionsService6,
      directionsRenderer6,
      [
        { lat: 51.89931305349203, lng: 17.772201741485564 },
        { lat: 51.89931305349203, lng: 17.772201741485564 },
        { lat: 51.90692143434774, lng: 17.778306831171555 },
        { lat: 51.901108007568325, lng: 17.789866311264564 },
        { lat: 51.89657445743327, lng: 17.78295958416555 },
        { lat: 51.89483202862853, lng: 17.7987712615649 },
        { lat: 51.884606516532436, lng: 17.802279841325706 },
        { lat: 51.88635458473901, lng: 17.78624014686981 },
        { lat: 51.884222222090386, lng: 17.78107957677354 },
        { lat: 51.887857773412584, lng: 17.776970432581003 },
        { lat: 51.88976967498124, lng: 17.784840901348325 },
        { lat: 51.89189940832092, lng: 17.783588103950592 },
        { lat: 51.892021881029066, lng: 17.782711696925663 },
        { lat: 51.89493962966713, lng: 17.781187180480504 },
        { lat: 51.89421585850748, lng: 17.776211635850945 },
        { lat: 51.89617606003335, lng: 17.763430157867703 },
      ],
      6
    );
  });

  trasa7.addEventListener("change", function () {
    onChangeHandler(
      directionsService7,
      directionsRenderer7,
      [
        { lat: 51.89619807483754, lng: 17.786998863480836 },
        { lat: 51.892805355856666, lng: 17.774515595876846 },
        { lat: 51.8953906675741, lng: 17.78893150220146 },
        { lat: 51.897077273491924, lng: 17.788604272691472 },
        { lat: 51.89735689457594, lng: 17.78703249909907 },
        { lat: 51.896662296927666, lng: 17.781629681350523 },
        { lat: 51.894186072898336, lng: 17.784028119796027 },
        { lat: 51.89189589605822, lng: 17.783594111285726 },
      ],
      7
    );

    if (
      (flag7 == true && flagCheckbox1 == false) ||
      (flag3 == false && flagCheckbox1 == true) ||
      (flag4 == false && flagCheckbox1 == true) ||
      (flag2 == false && flagCheckbox1 == true) ||
      (flag == false && flagCheckbox1 == true) ||
      (flag9 == false && flagCheckbox1 == true) ||
      (flag10 == false && flagCheckbox1 == true)
    ) {
    } else {
      flagMarker1 = toggleMarker(marker1, map, flagMarker1);
      map.panTo(marker1.getPosition());
      marker1.addListener("click", () => {
        infowindow1.open({
          anchor: marker1,
          map,
        });
      });
    }

    if (
      (flag7 == true && flagCheckbox4 == false) ||
      (flag3 == false && flagCheckbox4 == true) ||
      (flag9 == false && flagCheckbox4 == true)
    ) {
    } else {
      flagMarker4 = toggleMarker(marker4, map, flagMarker4);
      map.panTo(marker4.getPosition());
      marker4.addListener("click", () => {
        infowindow4.open({
          anchor: marker4,
          map,
        });
      });
    }

    if (
      (flag7 == true && flagCheckbox6 == false) ||
      (flag2 == false && flagCheckbox6 == true)
    ) {
    } else {
      flagMarker6 = toggleMarker(marker6, map, flagMarker6);
      map.panTo(marker6.getPosition());
      marker6.addListener("click", () => {
        infowindow6.open({
          anchor: marker6,
          map,
        });
      });
    }

    if (
      (flag7 == true && flagCheckbox9 == false) ||
      (flag4 == false && flagCheckbox9 == true) ||
      (flag2 == false && flagCheckbox9 == true)
    ) {
    } else {
      flagMarker9 = toggleMarker(marker9, map, flagMarker9);
      map.panTo(marker9.getPosition());
      marker9.addListener("click", () => {
        infowindow9.open({
          anchor: marker9,
          map,
        });
      });
    }

    if (
      (flag7 == true && flagCheckbox10 == false) ||
      (flag3 == false && flagCheckbox10 == true) ||
      (flag4 == false && flagCheckbox10 == true) ||
      (flag == false && flagCheckbox10 == true) ||
      (flag8 == false && flagCheckbox10 == true) ||
      (flag10 == false && flagCheckbox10 == true)
    ) {
    } else {
      flagMarker10 = toggleMarker(marker10, map, flagMarker10);
      map.panTo(marker10.getPosition());
      marker10.addListener("click", () => {
        infowindow10.open({
          anchor: marker10,
          map,
        });
      });
    }

    if (
      (flag7 == true && flagCheckbox11 == false) ||
      (flag3 == false && flagCheckbox11 == true)
    ) {
    } else {
      flagMarker11 = toggleMarker(marker11, map, flagMarker11);
      map.panTo(marker11.getPosition());
      marker11.addListener("click", () => {
        infowindow11.open({
          anchor: marker11,
          map,
        });
      });
    }

    if (
      (flag7 == true && flagCheckbox12 == false) ||
      (flag4 == true && flagCheckbox12 == false) ||
      (flag3 == false && flagCheckbox12 == true)
    ) {
    } else {
      flagMarker12 = toggleMarker(marker12, map, flagMarker12);
      map.panTo(marker12.getPosition());
      marker12.addListener("click", () => {
        infowindow12.open({
          anchor: marker12,
          map,
        });
      });
    }

    if (
      (flag7 == true && flagCheckbox31 == false) ||
      (flag9 == false && flagCheckbox31 == true)
    ) {
    } else {
      flagMarker31 = toggleMarker(marker31, map, flagMarker31);
      map.panTo(marker31.getPosition());
      marker31.addListener("click", () => {
        infowindow31.open({
          anchor: marker31,
          map,
        });
      });
    }

    if (
      (flag7 == true && flagCheckbox32 == false) ||
      (flag9 == false && flagCheckbox32 == true) ||
      (flag8 == false && flagCheckbox32 == true)
    ) {
    } else {
      flagMarker32 = toggleMarker(marker32, map, flagMarker32);
      map.panTo(marker32.getPosition());
      marker32.addListener("click", () => {
        infowindow32.open({
          anchor: marker32,
          map,
        });
      });
    }

    if (
      (flag7 == true && flagCheckbox32 == false) ||
      (flag3 == false && flagCheckbox32 == true) ||
      (flag == false && flagCheckbox32 == true) ||
      (flag8 == false && flagCheckbox32 == true) ||
      (flag9 == false && flagCheckbox32 == true)
    ) {
    } else {
      flagMarker32 = toggleMarker(marker32, map, flagMarker32);
      map.panTo(marker32.getPosition());
      marker32.addListener("click", () => {
        infowindow32.open({
          anchor: marker32,
          map,
        });
      });
    }
  });

  trasa8.addEventListener("change", function () {
    onChangeHandler(
      directionsService8,
      directionsRenderer8,
      [
        { lat: 51.883612132604945, lng: 17.793074101016664 },
        { lat: 51.892805355856666, lng: 17.774515595876846 },
        { lat: 51.890978640712035, lng: 17.78534139017074 },
        { lat: 51.89418449915074, lng: 17.784004772703963 },
        { lat: 51.89527857673943, lng: 17.78126004483987 },
        { lat: 51.89229085383291, lng: 17.78106354389872 },
        { lat: 51.89227587776001, lng: 17.777641994373287 },
      ],
      8
    );

    if (
      (flag8 == true && flagCheckbox10 == false) ||
      (flag3 == false && flagCheckbox10 == true) ||
      (flag4 == false && flagCheckbox10 == true) ||
      (flag7 == false && flagCheckbox10 == true) ||
      (flag == false && flagCheckbox10 == true) ||
      (flag10 == false && flagCheckbox10 == true)
    ) {
    } else {
      flagMarker10 = toggleMarker(marker10, map, flagMarker10);
      map.panTo(marker10.getPosition());
      marker10.addListener("click", () => {
        infowindow10.open({
          anchor: marker10,
          map,
        });
      });
    }

    if (flag8 == true && flagCheckbox23 == false) {
    } else {
      flagMarker23 = toggleMarker(marker23, map, flagMarker23);
      map.panTo(marker23.getPosition());
      marker23.addListener("click", () => {
        infowindow23.open({
          anchor: marker23,
          map,
        });
      });
    }

    if (flag8 == true && flagCheckbox24 == false) {
    } else {
      flagMarker24 = toggleMarker(marker24, map, flagMarker24);
      map.panTo(marker24.getPosition());
      marker24.addListener("click", () => {
        infowindow24.open({
          anchor: marker24,
          map,
        });
      });
    }

    if (flag8 == true && flagCheckbox25 == false) {
    } else {
      flagMarker25 = toggleMarker(marker25, map, flagMarker25);
      map.panTo(marker25.getPosition());
      marker25.addListener("click", () => {
        infowindow25.open({
          anchor: marker25,
          map,
        });
      });
    }

    if (flag8 == true && flagCheckbox26 == false) {
    } else {
      flagMarker26 = toggleMarker(marker26, map, flagMarker26);
      map.panTo(marker26.getPosition());
      marker26.addListener("click", () => {
        infowindow26.open({
          anchor: marker26,
          map,
        });
      });
    }

    if (flag8 == true && flagCheckbox27 == false) {
    } else {
      flagMarker27 = toggleMarker(marker27, map, flagMarker27);
      map.panTo(marker27.getPosition());
      marker27.addListener("click", () => {
        infowindow27.open({
          anchor: marker27,
          map,
        });
      });
    }

    if (
      (flag8 == true && flagCheckbox28 == false) ||
      (flag4 == false && flagCheckbox28 == true) ||
      (flag10 == false && flagCheckbox28 == true)
    ) {
    } else {
      flagMarker28 = toggleMarker(marker28, map, flagMarker28);
      map.panTo(marker28.getPosition());
      marker28.addListener("click", () => {
        infowindow12.open({
          anchor: marker28,
          map,
        });
      });
    }

    if (
      (flag8 == true && flagCheckbox32 == false) ||
      (flag7 == false && flagCheckbox32 == true) ||
      (flag9 == false && flagCheckbox32 == true)
    ) {
    } else {
      flagMarker32 = toggleMarker(marker32, map, flagMarker32);
      map.panTo(marker32.getPosition());
      marker32.addListener("click", () => {
        infowindow32.open({
          anchor: marker32,
          map,
        });
      });
    }

    if (
      (flag8 == true && flagCheckbox32 == false) ||
      (flag3 == false && flagCheckbox32 == true) ||
      (flag7 == false && flagCheckbox32 == true) ||
      (flag == false && flagCheckbox32 == true) ||
      (flag9 == false && flagCheckbox32 == true)
    ) {
    } else {
      flagMarker32 = toggleMarker(marker32, map, flagMarker32);
      map.panTo(marker32.getPosition());
      marker32.addListener("click", () => {
        infowindow32.open({
          anchor: marker32,
          map,
        });
      });
    }
  });

  trasa9.addEventListener("change", function () {
    onChangeHandler(
      directionsService9,
      directionsRenderer9,
      [
        { lat: 51.89624422595957, lng: 17.786197929905953 },
        { lat: 51.89624422595957, lng: 17.786197929905953 },
        { lat: 51.89736283837389, lng: 17.78697770910913 },
        { lat: 51.89829717752578, lng: 17.78998633038816 },
        { lat: 51.89620244015586, lng: 17.789058211065097 },
        { lat: 51.89669168607226, lng: 17.781752052075177 },
        { lat: 51.89765158692682, lng: 17.775576444575933 },
        { lat: 51.89130617760594, lng: 17.775192685575846 },
        { lat: 51.891825210956135, lng: 17.762843596914582 },
        { lat: 51.890368615372154, lng: 17.779527332777747 },
        { lat: 51.891907554994845, lng: 17.783621716661273 },
        { lat: 51.89143117182561, lng: 17.783570681430497 },
        { lat: 51.89339105868223, lng: 17.782874019231194 },
        { lat: 51.89345894458114, lng: 17.781808125472747 },
        { lat: 51.89418929673059, lng: 17.783913360476088 },
        { lat: 51.89431336178159, lng: 17.78406508912498 },
      ],
      9
    );

    if (
      (flag9 == true && flagCheckbox1 == false) ||
      (flag3 == false && flagCheckbox1 == true) ||
      (flag4 == false && flagCheckbox1 == true) ||
      (flag7 == false && flagCheckbox1 == true) ||
      (flag == false && flagCheckbox1 == true) ||
      (flag2 == false && flagCheckbox1 == true) ||
      (flag10 == false && flagCheckbox1 == true)
    ) {
    } else {
      flagMarker1 = toggleMarker(marker1, map, flagMarker1);
      map.panTo(marker1.getPosition());
      marker1.addListener("click", () => {
        infowindow1.open({
          anchor: marker1,
          map,
        });
      });
    }

    if (flag9 == true && flagCheckbox2 == false) {
    } else {
      flagMarker2 = toggleMarker(marker2, map, flagMarker2);
      map.panTo(marker2.getPosition());
      marker2.addListener("click", () => {
        infowindow2.open({
          anchor: marker2,
          map,
        });
      });
    }

    if (
      (flag9 == true && flagCheckbox3 == false) ||
      (flag10 == false && flagCheckbox3 == true)
    ) {
    } else {
      flagMarker3 = toggleMarker(marker3, map, flagMarker3);
      map.panTo(marker3.getPosition());
      marker3.addListener("click", () => {
        infowindow3.open({
          anchor: marker3,
          map,
        });
      });
    }

    if (
      (flag9 == true && flagCheckbox4 == false) ||
      (flag7 == false && flagCheckbox4 == true) ||
      (flag3 == false && flagCheckbox4 == true)
    ) {
    } else {
      flagMarker4 = toggleMarker(marker4, map, flagMarker4);
      map.panTo(marker4.getPosition());
      marker4.addListener("click", () => {
        infowindow4.open({
          anchor: marker4,
          map,
        });
      });
    }

    if (flag9 == true && flagCheckbox5 == false) {
    } else {
      flagMarker5 = toggleMarker(marker5, map, flagMarker5);
      map.panTo(marker5.getPosition());
      marker5.addListener("click", () => {
        infowindow5.open({
          anchor: marker5,
          map,
        });
      });
    }

    if (flag9 == true && flagCheckbox7 == false) {
    } else {
      flagMarker7 = toggleMarker(marker7, map, flagMarker7);
      map.panTo(marker7.getPosition());
      marker7.addListener("click", () => {
        infowindow7.open({
          anchor: marker7,
          map,
        });
      });
    }

    if (flag9 == true && flagCheckbox16 == false) {
    } else {
      flagMarker16 = toggleMarker(marker16, map, flagMarker16);
      map.panTo(marker16.getPosition());
      marker16.addListener("click", () => {
        infowindow16.open({
          anchor: marker16,
          map,
        });
      });
    }

    if (flag9 == true && flagCheckbox17 == false) {
    } else {
      flagMarker17 = toggleMarker(marker17, map, flagMarker17);
      map.panTo(marker17.getPosition());
      marker17.addListener("click", () => {
        infowindow17.open({
          anchor: marker17,
          map,
        });
      });
    }

    if (flag9 == true && flagCheckbox20 == false) {
    } else {
      flagMarker20 = toggleMarker(marker20, map, flagMarker20);
      map.panTo(marker20.getPosition());
      marker20.addListener("click", () => {
        infowindow20.open({
          anchor: marker20,
          map,
        });
      });
    }

    if (flag9 == true && flagCheckbox21 == false) {
    } else {
      flagMarker21 = toggleMarker(marker21, map, flagMarker21);
      map.panTo(marker21.getPosition());
      marker21.addListener("click", () => {
        infowindow21.open({
          anchor: marker21,
          map,
        });
      });
    }

    if (flag9 == true && flagCheckbox22 == false) {
    } else {
      flagMarker22 = toggleMarker(marker22, map, flagMarker22);
      map.panTo(marker22.getPosition());
      marker22.addListener("click", () => {
        infowindow22.open({
          anchor: marker22,
          map,
        });
      });
    }

    if (flag9 == true && flagCheckbox29 == false) {
    } else {
      flagMarker29 = toggleMarker(marker29, map, flagMarker29);
      map.panTo(marker29.getPosition());
      marker29.addListener("click", () => {
        infowindow29.open({
          anchor: marker29,
          map,
        });
      });
    }

    if (
      (flag9 == true && flagCheckbox31 == false) ||
      (flag7 == false && flagCheckbox31 == true)
    ) {
    } else {
      flagMarker31 = toggleMarker(marker31, map, flagMarker31);
      map.panTo(marker31.getPosition());
      marker31.addListener("click", () => {
        infowindow31.open({
          anchor: marker31,
          map,
        });
      });
    }

    if (
      (flag9 == true && flagCheckbox32 == false) ||
      (flag7 == false && flagCheckbox32 == true) ||
      (flag8 == false && flagCheckbox32 == true)
    ) {
    } else {
      flagMarker32 = toggleMarker(marker32, map, flagMarker32);
      map.panTo(marker32.getPosition());
      marker32.addListener("click", () => {
        infowindow32.open({
          anchor: marker32,
          map,
        });
      });
    }

    if (
      (flag9 == true && flagCheckbox32 == false) ||
      (flag3 == false && flagCheckbox32 == true) ||
      (flag7 == false && flagCheckbox32 == true) ||
      (flag8 == false && flagCheckbox32 == true) ||
      (flag == false && flagCheckbox32 == true)
    ) {
    } else {
      flagMarker32 = toggleMarker(marker32, map, flagMarker32);
      map.panTo(marker32.getPosition());
      marker32.addListener("click", () => {
        infowindow32.open({
          anchor: marker32,
          map,
        });
      });
    }
  });

  trasa10.addEventListener("change", function () {
    onChangeHandler(
      directionsService10,
      directionsRenderer10,
      [
        { lat: 51.89624422595957, lng: 17.786197929905953 },
        { lat: 51.89624422595957, lng: 17.786197929905953 },
        { lat: 51.89557541412078, lng: 17.78446470071467 },
        { lat: 51.89140368443657, lng: 17.783606190219054 },
        { lat: 51.886656570307174, lng: 17.782407711468284 },
        { lat: 51.88359339979757, lng: 17.793113525370117 },
        { lat: 51.884191475576344, lng: 17.788083615364158 },
        { lat: 51.88423452120643, lng: 17.781104507574888 },
        { lat: 51.869775375500566, lng: 17.773668179335957 },
        { lat: 51.87024790459729, lng: 17.752995053700786 },
        { lat: 51.88031832792614, lng: 17.753850161250107 },
        { lat: 51.88312567462732, lng: 17.725468782003013 },
      ],
      10
    );

    if (
      (flag10 == true && flagCheckbox1 == false) ||
      (flag3 == false && flagCheckbox1 == true) ||
      (flag4 == false && flagCheckbox1 == true) ||
      (flag7 == false && flagCheckbox1 == true) ||
      (flag == false && flagCheckbox1 == true) ||
      (flag9 == false && flagCheckbox1 == true) ||
      (flag2 == false && flagCheckbox1 == true)
    ) {
    } else {
      flagMarker1 = toggleMarker(marker1, map, flagMarker1);
      map.panTo(marker1.getPosition());
      marker1.addListener("click", () => {
        infowindow1.open({
          anchor: marker1,
          map,
        });
      });
    }

    if (
      (flag10 == true && flagCheckbox3 == false) ||
      (flag9 == false && flagCheckbox3 == true)
    ) {
    } else {
      flagMarker3 = toggleMarker(marker3, map, flagMarker3);
      map.panTo(marker3.getPosition());
      marker3.addListener("click", () => {
        infowindow3.open({
          anchor: marker3,
          map,
        });
      });
    }

    if (
      (flag10 == true && flagCheckbox10 == false) ||
      (flag3 == false && flagCheckbox10 == true) ||
      (flag4 == false && flagCheckbox10 == true) ||
      (flag7 == false && flagCheckbox10 == true) ||
      (flag8 == false && flagCheckbox10 == true) ||
      (flag == false && flagCheckbox10 == true)
    ) {
    } else {
      flagMarker10 = toggleMarker(marker10, map, flagMarker10);
      map.panTo(marker10.getPosition());
      marker10.addListener("click", () => {
        infowindow10.open({
          anchor: marker10,
          map,
        });
      });
    }

    if (
      (flag10 == true && flagCheckbox28 == false) ||
      (flag8 == false && flagCheckbox28 == true) ||
      (flag4 == false && flagCheckbox28 == true)
    ) {
    } else {
      flagMarker28 = toggleMarker(marker28, map, flagMarker28);
      map.panTo(marker28.getPosition());
      marker28.addListener("click", () => {
        infowindow28.open({
          anchor: marker28,
          map,
        });
      });
    }

    if (
      (flag10 == true && flagCheckbox33 == false) ||
      (flag3 == false && flagCheckbox33 == true)
    ) {
    } else {
      flagMarker33 = toggleMarker(marker33, map, flagMarker33);
      map.panTo(marker33.getPosition());
      marker33.addListener("click", () => {
        infowindow33.open({
          anchor: marker33,
          map,
        });
      });
    }

    if (flag10 == true && flagCheckbox34 == false) {
    } else {
      flagMarker34 = toggleMarker(marker34, map, flagMarker34);
      map.panTo(marker34.getPosition());
      marker34.addListener("click", () => {
        infowindow34.open({
          anchor: marker34,
          map,
        });
      });
    }
  });

  trasa11.addEventListener("change", function () {
    onChangeHandler(
      directionsService11,
      directionsRenderer11,
      [
        { lat: 51.89737118360369, lng: 17.786874106593714 },
        { lat: 51.89136999137996, lng: 17.779985054667453 },
        { lat: 51.89617937114917, lng: 17.78715800706718 },
        { lat: 51.89550180198689, lng: 17.786912185657204 },
      ],
      11
    );
  });

  trasa12.addEventListener("change", function () {
    onChangeHandler(
      directionsService12,
      directionsRenderer12,
      [
        { lat: 51.89556617353168, lng: 17.78597146802227 },
        { lat: 51.91793489680233, lng: 17.658341117139592 },
        { lat: 51.891618266935524, lng: 17.77529744603731 },
        { lat: 51.89327769817929, lng: 17.74166605521401 },
        { lat: 51.888240594701074, lng: 17.72746526648438 },
      ],
      12
    );
  });

  trasa13.addEventListener("change", function () {
    onChangeHandler(
      directionsService13,
      directionsRenderer13,
      [
        { lat: 51.894925924954144, lng: 17.78119986534384 },
        { lat: 51.84074253488349, lng: 17.93829407072576 },
        { lat: 51.88382226754961, lng: 17.788427096496257 },
        { lat: 51.88369979526238, lng: 17.7912238733486 },
        { lat: 51.88622600089567, lng: 17.798953806347253 },
      ],
      13
    );
  });

  const marker1 = new google.maps.Marker({
    position: { lat: 51.8960138469201, lng: 17.786460676606847 },
    title: "Rynek",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/picnic.png",
    },
  });
  const marker1Route4 = new google.maps.Marker({
    position: { lat: 51.8960138469201, lng: 17.786460676606847 },
    title: "Rynek",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/picnic.png",
    },
  });
  const infowindow1 = new google.maps.InfoWindow({
    content: "Rynek w Pleszewie",
    ariaLabel: "Rynek",
  });

  markerCheckbox1.addEventListener("change", function () {
    marker1.addListener("click", () => {
      infowindow1.open({
        anchor: marker1,
        map,
      });
    });

    if (
      (flag == false && flagCheckbox1 == true) ||
      (flag3 == false && flagCheckbox1 == true) ||
      (flag2 == false && flagCheckbox1 == true) ||
      (flag4 == false && flagCheckbox1 == true) ||
      (flag7 == false && flagCheckbox1 == true) ||
      (flag9 == false && flagCheckbox1 == true) ||
      (flag10 == false && flagCheckbox1 == true)
    ) {
      flagCheckbox1 = !flagCheckbox1;
    } else if (
      (flag == false && flagCheckbox1 == false) ||
      (flag3 == false && flagCheckbox1 == false) ||
      (flag2 == false && flagCheckbox1 == false) ||
      (flag4 == false && flagCheckbox1 == false) ||
      (flag7 == false && flagCheckbox1 == false) ||
      (flag9 == false && flagCheckbox1 == false) ||
      (flag10 == false && flagCheckbox1 == false)
    ) {
      flagCheckbox1 = !flagCheckbox1;
    } else {
      flagMarker1 = toggleMarker(marker1, map, flagMarker1);
      map.panTo(marker1.getPosition());
      flagCheckbox1 = !flagCheckbox1;
    }
  });

  const marker2 = new google.maps.Marker({
    position: { lat: 51.895731389933964, lng: 17.78647662511584 },
    title: "Urząd",
    icon: {
      url: "img/cityHall.png",
    },
  });
  const infowindow2 = new google.maps.InfoWindow({
    content: "Urząd miasta",
    ariaLabel: "Urząd",
  });

  markerCheckbox2.addEventListener("change", function () {
    marker2.addListener("click", () => {
      infowindow2.open({
        anchor: marker2,
        map,
      });
    });

    if (flag9 == false && flagCheckbox2 == true) {
      flagCheckbox2 = !flagCheckbox2;
    } else if (flag9 == false && flagCheckbox2 == false) {
      flagCheckbox2 = !flagCheckbox2;
    } else {
      flagMarker2 = toggleMarker(marker2, map, flagMarker2);
      map.panTo(marker2.getPosition());
      flagCheckbox2 = !flagCheckbox2;
    }
  });

  const marker3 = new google.maps.Marker({
    position: { lat: 51.89641963899831, lng: 17.78619468124088 },
    title: "Hotel",
    icon: {
      url: "img/hotel.png",
    },
  });
  const infowindow3 = new google.maps.InfoWindow({
    content: "Hotel",
    ariaLabel: "Hotel",
  });

  markerCheckbox3.addEventListener("change", function () {
    marker3.addListener("click", () => {
      infowindow3.open({
        anchor: marker3,
        map,
      });
    });

    if (
      (flag9 == false && flagCheckbox3 == true) ||
      (flag10 == false && flagCheckbox3 == true)
    ) {
      flagCheckbox3 = !flagCheckbox3;
    } else if (
      (flag9 == false && flagCheckbox3 == false) ||
      (flag10 == false && flagCheckbox3 == true)
    ) {
      flagCheckbox3 = !flagCheckbox3;
    } else {
      flagMarker3 = toggleMarker(marker3, map, flagMarker3);
      map.panTo(marker3.getPosition());
      flagCheckbox3 = !flagCheckbox3;
    }
  });

  const marker4 = new google.maps.Marker({
    position: { lat: 51.896373709229636, lng: 17.78475344231338 },
    title: "Ulica Poznańska jako centrum Gastronomiczne",
  });
  const infowindow4 = new google.maps.InfoWindow({
    content: "Ulica Poznańska jako centrum Gastronomiczne",
    ariaLabel: "Poznańska",
  });

  markerCheckbox4.addEventListener("change", function () {
    marker4.addListener("click", () => {
      infowindow4.open({
        anchor: marker4,
        map,
      });
    });

    if (
      (flag3 == false && flagCheckbox4 == true) ||
      (flag7 == false && flagCheckbox4 == true) ||
      (flag9 == false && flagCheckbox4 == true)
    ) {
      flagCheckbox4 = !flagCheckbox4;
    } else if (
      (flag3 == false && flagCheckbox4 == false) ||
      (flag7 == false && flagCheckbox4 == true) ||
      (flag9 == false && flagCheckbox4 == true)
    ) {
      flagCheckbox4 = !flagCheckbox4;
    } else {
      flagMarker4 = toggleMarker(marker4, map, flagMarker4);
      map.panTo(marker4.getPosition());
      flagCheckbox4 = !flagCheckbox4;
    }
  });

  const marker5 = new google.maps.Marker({
    position: { lat: 51.89685829625867, lng: 17.780760076362544 },
    title: "Kino Hel",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/movies.png",
    },
  });
  const infowindow5 = new google.maps.InfoWindow({
    content: "Kino Hel",
    ariaLabel: "Kino",
  });

  markerCheckbox5.addEventListener("change", function () {
    marker5.addListener("click", () => {
      infowindow5.open({
        anchor: marker5,
        map,
      });
    });

    if (flag9 == false && flagCheckbox5 == true) {
      flagCheckbox5 = !flagCheckbox5;
    } else if (flag9 == false && flagCheckbox5 == false) {
      flagCheckbox5 = !flagCheckbox5;
    } else {
      flagMarker5 = toggleMarker(marker5, map, flagMarker5);
      map.panTo(marker5.getPosition());
      flagCheckbox5 = !flagCheckbox5;
    }
  });

  const marker6 = new google.maps.Marker({
    position: { lat: 51.895919792155844, lng: 17.78616691985445 },
    title: "Lodziarnia",
    icon: {
      url: "img/iceCream.png",
    },
  });
  const infowindow6 = new google.maps.InfoWindow({
    content: "Lodziarnia",
    ariaLabel: "Lodziarnia",
  });

  markerCheckbox6.addEventListener("change", function () {
    marker6.addListener("click", () => {
      infowindow6.open({
        anchor: marker6,
        map,
      });
    });

    if (
      (flag2 == false && flagCheckbox6 == true) ||
      (flag7 == false && flagCheckbox6 == true)
    ) {
      flagCheckbox6 = !flagCheckbox6;
    } else if (
      (flag2 == false && flagCheckbox6 == false) ||
      (flag7 == false && flagCheckbox6 == false)
    ) {
      flagCheckbox6 = !flagCheckbox6;
    } else {
      flagMarker6 = toggleMarker(marker6, map, flagMarker6);
      map.panTo(marker6.getPosition());
      flagCheckbox6 = !flagCheckbox6;
    }
  });

  const marker7 = new google.maps.Marker({
    position: { lat: 51.89544097985568, lng: 17.78473886228255 },
    title: "Kawiarnia",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/coffeehouse.png",
    },
  });
  const infowindow7 = new google.maps.InfoWindow({
    content: "Kawiarnia",
    ariaLabel: "Kawiarnia",
  });

  markerCheckbox7.addEventListener("change", function () {
    marker7.addListener("click", () => {
      infowindow7.open({
        anchor: marker7,
        map,
      });
    });

    if (flag9 == false && flagCheckbox7 == true) {
      flagCheckbox7 = !flagCheckbox7;
    } else if (flag9 == false && flagCheckbox7 == false) {
      flagCheckbox7 = !flagCheckbox7;
    } else {
      flagMarker7 = toggleMarker(marker7, map, flagMarker7);
      map.panTo(marker7.getPosition());
      flagCheckbox7 = !flagCheckbox7;
    }
  });

  const marker8 = new google.maps.Marker({
    position: { lat: 51.89543161425292, lng: 17.787234332877592 },
    title: "Pub Piwnica",
    icon: {
      url: "img/pub.png",
    },
  });
  const infowindow8 = new google.maps.InfoWindow({
    content: "Pub Piwnica",
    ariaLabel: "Pub Piwnica",
  });

  markerCheckbox8.addEventListener("change", function () {
    marker8.addListener("click", () => {
      infowindow8.open({
        anchor: marker8,
        map,
      });
    });

    if (flag == false && flagCheckbox8 == true) {
      flagCheckbox8 = !flagCheckbox8;
    } else if (flag == false && flagCheckbox8 == false) {
      flagCheckbox8 = !flagCheckbox8;
    } else {
      flagMarker8 = toggleMarker(marker8, map, flagMarker8);
      map.panTo(marker8.getPosition());
      flagCheckbox8 = !flagCheckbox8;
    }
  });

  const marker9 = new google.maps.Marker({
    position: { lat: 51.89535820187878, lng: 17.78911227430774 },
    title: "Pączkownia",
    icon: {
      url: "img/donut.png",
    },
  });
  const infowindow9 = new google.maps.InfoWindow({
    content: "Pączkownia",
    ariaLabel: "Pączkownia",
  });

  markerCheckbox9.addEventListener("change", function () {
    marker9.addListener("click", () => {
      infowindow9.open({
        anchor: marker9,
        map,
      });
    });

    if (
      (flag2 == false && flagCheckbox9 == true) ||
      (flag4 == false && flagCheckbox9 == true) ||
      (flag7 == false && flagCheckbox9 == true)
    ) {
      flagCheckbox9 = !flagCheckbox9;
    } else if (
      (flag2 == false && flagCheckbox9 == false) ||
      (flag4 == false && flagCheckbox9 == false) ||
      (flag7 == false && flagCheckbox9 == false)
    ) {
      flagCheckbox9 = !flagCheckbox9;
    } else {
      flagMarker9 = toggleMarker(marker9, map, flagMarker9);
      map.panTo(marker9.getPosition());
      flagCheckbox9 = !flagCheckbox9;
    }
  });

  const marker10 = new google.maps.Marker({
    position: { lat: 51.894350952936705, lng: 17.782599826472836 },
    title: "Park Miejski",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/tree.png",
    },
  });
  const infowindow10 = new google.maps.InfoWindow({
    content: "Park Miejski",
    ariaLabel: "Park Miejski",
  });

  markerCheckbox10.addEventListener("change", function () {
    marker10.addListener("click", () => {
      infowindow10.open({
        anchor: marker10,
        map,
      });
    });

    if (
      (flag3 == false && flagCheckbox10 == true) ||
      (flag4 == false && flagCheckbox10 == true) ||
      (flag7 == false && flagCheckbox10 == true) ||
      (flag == false && flagCheckbox10 == true) ||
      (flag8 == false && flagCheckbox10 == true) ||
      (flag10 == false && flagCheckbox10 == true)
    ) {
      flagCheckbox10 = !flagCheckbox10;
    } else if (
      (flag3 == false && flagCheckbox10 == false) ||
      (flag4 == false && flagCheckbox10 == false) ||
      (flag7 == false && flagCheckbox10 == false) ||
      (flag == false && flagCheckbox10 == false) ||
      (flag8 == false && flagCheckbox10 == false) ||
      (flag10 == false && flagCheckbox10 == false)
    ) {
      flagCheckbox10 = !flagCheckbox10;
    } else {
      flagMarker10 = toggleMarker(marker10, map, flagMarker10);
      map.panTo(marker10.getPosition());
      flagCheckbox10 = !flagCheckbox10;
    }
  });

  const marker11 = new google.maps.Marker({
    position: { lat: 51.894459029286494, lng: 17.78255399350101 },
    title: "Staw",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/water.png",
    },
  });
  const infowindow11 = new google.maps.InfoWindow({
    content: "Staw",
    ariaLabel: "Staw",
  });

  markerCheckbox11.addEventListener("change", function () {
    marker11.addListener("click", () => {
      infowindow11.open({
        anchor: marker11,
        map,
      });
    });

    if (
      (flag3 == false && flagCheckbox11 == true) ||
      (flag7 == false && flagCheckbox11 == true)
    ) {
      flagCheckbox11 = !flagCheckbox11;
    } else if (
      (flag3 == false && flagCheckbox11 == false) ||
      (flag7 == false && flagCheckbox11 == false)
    ) {
      flagCheckbox11 = !flagCheckbox11;
    } else {
      flagMarker11 = toggleMarker(marker11, map, flagMarker11);
      map.panTo(marker11.getPosition());
      flagCheckbox11 = !flagCheckbox11;
    }
  });

  const marker12 = new google.maps.Marker({
    position: { lat: 51.894052503653576, lng: 17.782989497853862 },
    title: "Plac Zabaw Park Miejski",
    icon: {
      url: "img/playground.png",
    },
  });
  const infowindow12 = new google.maps.InfoWindow({
    content: "Plac Zabaw Park Miejski",
    ariaLabel: "Plac Zabaw Park Miejski",
  });

  markerCheckbox12.addEventListener("change", function () {
    marker12.addListener("click", () => {
      infowindow12.open({
        anchor: marker12,
        map,
      });
    });

    if (
      (flag3 == false && flagCheckbox12 == true) ||
      (flag4 == false && flagCheckbox12 == true) ||
      (flag7 == false && flagCheckbox12 == true)
    ) {
      flagCheckbox12 = !flagCheckbox12;
    } else if (
      (flag3 == false && flagCheckbox12 == false) ||
      (flag4 == false && flagCheckbox12 == false) ||
      (flag7 == false && flagCheckbox12 == false)
    ) {
      flagCheckbox12 = !flagCheckbox12;
    } else {
      flagMarker12 = toggleMarker(marker12, map, flagMarker12);
      map.panTo(marker12.getPosition());
      flagCheckbox12 = !flagCheckbox12;
    }
  });

  const marker13 = new google.maps.Marker({
    position: { lat: 51.905758839365554, lng: 17.784867341856806 },
    title: "Plac Zabaw Osiedle Wokół Wieży",
    icon: {
      url: "img/playground.png",
    },
  });
  const infowindow13 = new google.maps.InfoWindow({
    content: "Plac Zabaw Osiedle Wokół Wieży",
    ariaLabel: "Plac Zabaw Osiedle Wokół Wieży",
  });

  markerCheckbox13.addEventListener("change", function () {
    marker13.addListener("click", () => {
      infowindow13.open({
        anchor: marker13,
        map,
      });
    });

    if (flag2 == false && flagCheckbox13 == true) {
      flagCheckbox13 = !flagCheckbox13;
    } else if (flag2 == false && flagCheckbox13 == false) {
      flagCheckbox13 = !flagCheckbox13;
    } else {
      flagMarker13 = toggleMarker(marker13, map, flagMarker13);
      map.panTo(marker13.getPosition());
      flagCheckbox13 = !flagCheckbox13;
    }
  });

  const marker14 = new google.maps.Marker({
    position: { lat: 51.886986499318375, lng: 17.779304675891606 },
    title: "Plac Zabaw Ulica Krzywoustego",
    icon: {
      url: "img/playground.png",
    },
  });
  const infowindow14 = new google.maps.InfoWindow({
    content: "Plac Zabaw Ulica Krzywoustego",
    ariaLabel: "Plac Zabaw Ulica Krzywoustego",
  });

  markerCheckbox14.addEventListener("change", function () {
    marker14.addListener("click", () => {
      infowindow14.open({
        anchor: marker14,
        map,
      });
    });

    if (flag4 == false && flagCheckbox14 == true) {
      flagCheckbox14 = !flagCheckbox14;
    } else if (flag4 == false && flagCheckbox14 == false) {
      flagCheckbox14 = !flagCheckbox14;
    } else {
      flagMarker14 = toggleMarker(marker14, map, flagMarker14);
      map.panTo(marker14.getPosition());
      flagCheckbox14 = !flagCheckbox14;
    }
  });

  const marker15 = new google.maps.Marker({
    position: { lat: 51.88706872096141, lng: 17.78131133470587 },
    title: "Plac Zabaw „Małpi Gaj",
    icon: {
      url: "img/playground.png",
    },
  });
  const infowindow15 = new google.maps.InfoWindow({
    content: "Plac Zabaw „Małpi Gaj",
    ariaLabel: "Plac Zabaw „Małpi Gaj",
  });

  markerCheckbox15.addEventListener("change", function () {
    marker15.addListener("click", () => {
      infowindow15.open({
        anchor: marker15,
        map,
      });
    });

    if (flag4 == false && flagCheckbox15 == true) {
      flagCheckbox15 = !flagCheckbox15;
    } else if (flag4 == false && flagCheckbox15 == false) {
      flagCheckbox15 = !flagCheckbox15;
    } else {
      flagMarker15 = toggleMarker(marker15, map, flagMarker15);
      map.panTo(marker15.getPosition());
      flagCheckbox15 = !flagCheckbox15;
    }
  });

  const marker16 = new google.maps.Marker({
    position: { lat: 51.89610215912502, lng: 17.788425699322378 },
    title: "Kościół pw. Ścięcia Jana Chrzciciela przy Rynku",
    icon: {
      url: "img/church.png",
    },
  });
  const infowindow16 = new google.maps.InfoWindow({
    content: "Kościół pw. Ścięcia Jana Chrzciciela przy Rynku",
    ariaLabel: "Kościół pw. Ścięcia Jana Chrzciciela przy Rynku",
  });

  markerCheckbox16.addEventListener("change", function () {
    marker16.addListener("click", () => {
      infowindow16.open({
        anchor: marker16,
        map,
      });
    });

    if (flag9 == false && flagCheckbox16 == true) {
      flagCheckbox16 = !flagCheckbox16;
    } else if (flag9 == false && flagCheckbox16 == false) {
      flagCheckbox16 = !flagCheckbox16;
    } else {
      flagMarker16 = toggleMarker(marker16, map, flagMarker16);
      map.panTo(marker16.getPosition());
      flagCheckbox16 = !flagCheckbox16;
    }
  });

  const marker17 = new google.maps.Marker({
    position: { lat: 51.897705248450414, lng: 17.776018985754032 },
    title: "Kościół Świętego Floriana",
    icon: {
      url: "img/church.png",
    },
  });
  const infowindow17 = new google.maps.InfoWindow({
    content: "Kościół Świętego Floriana",
    ariaLabel: "Kościół Świętego Floriana",
  });

  markerCheckbox17.addEventListener("change", function () {
    marker17.addListener("click", () => {
      infowindow17.open({
        anchor: marker17,
        map,
      });
    });

    if (flag9 == false && flagCheckbox17 == true) {
      flagCheckbox17 = !flagCheckbox17;
    } else if (flag9 == false && flagCheckbox17 == false) {
      flagCheckbox17 = !flagCheckbox17;
    } else {
      flagMarker17 = toggleMarker(marker17, map, flagMarker17);
      map.panTo(marker17.getPosition());
      flagCheckbox17 = !flagCheckbox17;
    }
  });

  const marker18 = new google.maps.Marker({
    position: { lat: 51.88436907711972, lng: 17.788731451356444 },
    title: "OSiR Pleszew",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/swimming.png",
    },
  });
  const infowindow18 = new google.maps.InfoWindow({
    content: "OSiR Pleszew",
    ariaLabel: "OSiR Pleszew",
  });

  markerCheckbox18.addEventListener("change", function () {
    marker18.addListener("click", () => {
      infowindow18.open({
        anchor: marker18,
        map,
      });
    });

    if (flag4 == false && flagCheckbox18 == true) {
      flagCheckbox18 = !flagCheckbox18;
    } else if (flag4 == false && flagCheckbox18 == false) {
      flagCheckbox18 = !flagCheckbox18;
    } else {
      flagMarker18 = toggleMarker(marker18, map, flagMarker18);
      map.panTo(marker18.getPosition());
      flagCheckbox18 = !flagCheckbox18;
    }
  });

  const marker19 = new google.maps.Marker({
    position: { lat: 51.88399468980463, lng: 17.793311634965605 },
    title: "Amfiteatr",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/arts.png",
    },
  });
  const infowindow19 = new google.maps.InfoWindow({
    content: "Amfiteatr",
    ariaLabel: "Amfiteatr",
  });

  markerCheckbox19.addEventListener("change", function () {
    marker19.addListener("click", () => {
      infowindow19.open({
        anchor: marker19,
        map,
      });
    });

    flagMarker19 = toggleMarker(marker19, map, flagMarker19);
    map.panTo(marker19.getPosition());
  });

  const marker20 = new google.maps.Marker({
    position: { lat: 51.89732801437519, lng: 17.787038887959763 },
    title: "Muzeum Piekarnictwa",
    icon: {
      url: "img/museum.png",
    },
  });
  const infowindow20 = new google.maps.InfoWindow({
    content: "Muzeum Piekarnictwa",
    ariaLabel: "Muzeum Piekarnictwa",
  });

  markerCheckbox20.addEventListener("change", function () {
    marker20.addListener("click", () => {
      infowindow20.open({
        anchor: marker20,
        map,
      });
    });

    if (flag9 == false && flagCheckbox20 == true) {
      flagCheckbox20 = !flagCheckbox20;
    } else if (flag9 == false && flagCheckbox20 == false) {
      flagCheckbox20 = !flagCheckbox20;
    } else {
      flagMarker20 = toggleMarker(marker20, map, flagMarker20);
      map.panTo(marker20.getPosition());
      flagCheckbox20 = !flagCheckbox20;
    }
  });

  const marker21 = new google.maps.Marker({
    position: { lat: 51.89797447289455, lng: 17.78962489882941 },
    title: "Muzeum Szewstwa",
    icon: {
      url: "img/museum.png",
    },
  });
  const infowindow21 = new google.maps.InfoWindow({
    content: "Muzeum Szewstwa",
    ariaLabel: "Muzeum Szewstwa",
  });

  markerCheckbox21.addEventListener("change", function () {
    marker21.addListener("click", () => {
      infowindow21.open({
        anchor: marker21,
        map,
      });
    });

    if (flag9 == false && flagCheckbox21 == true) {
      flagCheckbox21 = !flagCheckbox21;
    } else if (flag9 == false && flagCheckbox21 == false) {
      flagCheckbox21 = !flagCheckbox21;
    } else {
      flagMarker21 = toggleMarker(marker21, map, flagMarker21);
      map.panTo(marker21.getPosition());
      flagCheckbox21 = !flagCheckbox21;
    }
  });

  const marker22 = new google.maps.Marker({
    position: { lat: 51.886668068668264, lng: 17.782766621063693 },
    title: "Muzeum Rzemiosła",
    icon: {
      url: "img/museum.png",
    },
  });
  const infowindow22 = new google.maps.InfoWindow({
    content: "Muzeum Rzemiosła",
    ariaLabel: "Muzeum Rzemiosła",
  });

  markerCheckbox22.addEventListener("change", function () {
    marker22.addListener("click", () => {
      infowindow22.open({
        anchor: marker22,
        map,
      });
    });

    if (flag9 == false && flagCheckbox22 == true) {
      flagCheckbox22 = !flagCheckbox22;
    } else if (flag9 == false && flagCheckbox22 == false) {
      flagCheckbox22 = !flagCheckbox22;
    } else {
      flagMarker22 = toggleMarker(marker22, map, flagMarker22);
      map.panTo(marker22.getPosition());
      flagCheckbox22 = !flagCheckbox22;
    }
  });

  const marker23 = new google.maps.Marker({
    position: { lat: 51.88423002633104, lng: 17.78806110157781 },
    title: "Skatepark",
    icon: {
      url: "img/skatepark.png",
    },
  });
  const infowindow23 = new google.maps.InfoWindow({
    content: "Skatepark",
    ariaLabel: "Skatepark",
  });

  markerCheckbox23.addEventListener("change", function () {
    marker23.addListener("click", () => {
      infowindow23.open({
        anchor: marker23,
        map,
      });
    });

    if (flag8 == false && flagCheckbox23 == true) {
      flagCheckbox23 = !flagCheckbox23;
    } else if (flag8 == false && flagCheckbox23 == false) {
      flagCheckbox23 = !flagCheckbox23;
    } else {
      flagMarker23 = toggleMarker(marker23, map, flagMarker23);
      map.panTo(marker23.getPosition());
      flagCheckbox23 = !flagCheckbox23;
    }
  });

  const marker24 = new google.maps.Marker({
    position: { lat: 51.88492998220363, lng: 17.78832452031398 },
    title: "Kort tenisowy",
    icon: {
      url: "img/tennis.png",
    },
  });
  const infowindow24 = new google.maps.InfoWindow({
    content: "Kort tenisowy",
    ariaLabel: "Kort tenisowy",
  });

  markerCheckbox24.addEventListener("change", function () {
    marker24.addListener("click", () => {
      infowindow24.open({
        anchor: marker24,
        map,
      });
    });

    if (flag8 == false && flagCheckbox24 == true) {
      flagCheckbox24 = !flagCheckbox24;
    } else if (flag8 == false && flagCheckbox24 == false) {
      flagCheckbox24 = !flagCheckbox24;
    } else {
      flagMarker24 = toggleMarker(marker24, map, flagMarker24);
      map.panTo(marker24.getPosition());
      flagCheckbox24 = !flagCheckbox24;
    }
  });

  const marker25 = new google.maps.Marker({
    position: { lat: 51.884563128791655, lng: 17.789674672144596 },
    title: "Stadion Miejski",
    icon: {
      url: "img/stadium2.png",
    },
  });
  const infowindow25 = new google.maps.InfoWindow({
    content: "Stadion Miejski",
    ariaLabel: "Stadion Miejski",
  });

  markerCheckbox25.addEventListener("change", function () {
    marker25.addListener("click", () => {
      infowindow25.open({
        anchor: marker25,
        map,
      });
    });

    if (flag8 == false && flagCheckbox25 == true) {
      flagCheckbox25 = !flagCheckbox25;
    } else if (flag8 == false && flagCheckbox25 == false) {
      flagCheckbox25 = !flagCheckbox25;
    } else {
      flagMarker25 = toggleMarker(marker25, map, flagMarker25);
      map.panTo(marker25.getPosition());
      flagCheckbox25 = !flagCheckbox25;
    }
  });

  const marker26 = new google.maps.Marker({
    position: { lat: 51.88313880639179, lng: 17.79337740094785 },
    title: "Kręgielnia",
    icon: {
      url: "img/bowling.png",
    },
  });
  const infowindow26 = new google.maps.InfoWindow({
    content: "Kręgielnia",
    ariaLabel: "Kręgielnia",
  });

  markerCheckbox26.addEventListener("change", function () {
    marker26.addListener("click", () => {
      infowindow26.open({
        anchor: marker26,
        map,
      });
    });

    if (flag8 == false && flagCheckbox26 == true) {
      flagCheckbox26 = !flagCheckbox26;
    } else if (flag8 == false && flagCheckbox26 == false) {
      flagCheckbox26 = !flagCheckbox26;
    } else {
      flagMarker26 = toggleMarker(marker26, map, flagMarker26);
      map.panTo(marker26.getPosition());
      flagCheckbox26 = !flagCheckbox26;
    }
  });

  const marker27 = new google.maps.Marker({
    position: { lat: 51.88349738540381, lng: 17.793273892830612 },
    title: "Park wodny",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/swimming.png",
    },
  });
  const infowindow27 = new google.maps.InfoWindow({
    content: "Park wodny",
    ariaLabel: "Park wodny",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/swimming.png",
    },
  });

  markerCheckbox27.addEventListener("change", function () {
    marker27.addListener("click", () => {
      infowindow27.open({
        anchor: marker27,
        map,
      });
    });

    if (flag8 == false && flagCheckbox27 == true) {
      flagCheckbox27 = !flagCheckbox27;
    } else if (flag8 == false && flagCheckbox27 == false) {
      flagCheckbox27 = !flagCheckbox27;
    } else {
      flagMarker27 = toggleMarker(marker27, map, flagMarker27);
      map.panTo(marker27.getPosition());
      flagCheckbox27 = !flagCheckbox27;
    }
  });

  const marker28 = new google.maps.Marker({
    position: { lat: 51.88338037261172, lng: 17.795546933758363 },
    title: 'Park "Planty"',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/swimming.png",
    },
  });
  const infowindow28 = new google.maps.InfoWindow({
    content: 'Park "Planty"',
    ariaLabel: 'Park "Planty"',
  });

  markerCheckbox28.addEventListener("change", function () {
    marker28.addListener("click", () => {
      infowindow28.open({
        anchor: marker28,
        map,
      });
    });

    if (
      (flag8 == false && flagCheckbox28 == true) ||
      (flag4 == false && flagCheckbox28 == true) ||
      (flag10 == false && flagCheckbox28 == true)
    ) {
      flagCheckbox28 = !flagCheckbox28;
    } else if (
      (flag8 == false && flagCheckbox28 == false) ||
      (flag4 == false && flagCheckbox28 == false) ||
      (flag10 == false && flagCheckbox28 == false)
    ) {
      flagCheckbox28 = !flagCheckbox28;
    } else {
      flagMarker28 = toggleMarker(marker28, map, flagMarker28);
      map.panTo(marker28.getPosition());
      flagCheckbox28 = !flagCheckbox28;
    }
  });

  const marker29 = new google.maps.Marker({
    position: { lat: 51.89074856323925, lng: 17.784720162989718 },
    title: "Zajezdnia Kultury",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/arts.png",
    },
  });
  const infowindow29 = new google.maps.InfoWindow({
    content: "Zajezdnia Kultury",
    ariaLabel: "Zajezdnia Kultury",
  });

  markerCheckbox29.addEventListener("change", function () {
    marker29.addListener("click", () => {
      infowindow29.open({
        anchor: marker29,
        map,
      });
    });

    if (flag9 == false && flagCheckbox29 == true) {
      flagCheckbox29 = !flagCheckbox29;
    } else if (flag9 == false && flagCheckbox29 == false) {
      flagCheckbox29 = !flagCheckbox29;
    } else {
      flagMarker29 = toggleMarker(marker29, map, flagMarker29);
      map.panTo(marker29.getPosition());
      flagCheckbox29 = !flagCheckbox29;
    }
  });

  const marker30 = new google.maps.Marker({
    position: { lat: 51.89114790691487, lng: 17.78315956357188 },
    title: "Kolejka Wąskotorowa",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/rail.png",
    },
  });
  const infowindow30 = new google.maps.InfoWindow({
    content: "Kolejka Wąskotorowa",
    ariaLabel: "Kolejka Wąskotorowa",
  });

  markerCheckbox30.addEventListener("change", function () {
    marker30.addListener("click", () => {
      infowindow30.open({
        anchor: marker30,
        map,
      });
    });

    if (
      (flag7 == false && flagCheckbox30 == true) ||
      (flag9 == false && flagCheckbox30 == true)
    ) {
      flagCheckbox30 = !flagCheckbox30;
    } else if (
      (flag7 == false && flagCheckbox30 == false) ||
      (flag9 == false && flagCheckbox30 == false)
    ) {
      flagCheckbox30 = !flagCheckbox30;
    } else {
      flagMarker30 = toggleMarker(marker30, map, flagMarker30);
      map.panTo(marker30.getPosition());
      flagCheckbox30 = !flagCheckbox30;
    }
  });

  const marker31 = new google.maps.Marker({
    position: { lat: 51.891416720620214, lng: 17.78289172270069 },
    title: "Zabytkowa Lokomotywa",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/rail.png",
    },
  });
  const infowindow31 = new google.maps.InfoWindow({
    content: "Zabytkowa Lokomotywa",
    ariaLabel: "Zabytkowa Lokomotywa",
  });

  markerCheckbox31.addEventListener("change", function () {
    marker31.addListener("click", () => {
      infowindow31.open({
        anchor: marker31,
        map,
      });
    });

    if (
      (flag7 == false && flagCheckbox31 == true) ||
      (flag9 == false && flagCheckbox31 == true) ||
      (flag8 == false && flagCheckbox31 == true)
    ) {
      flagCheckbox31 = !flagCheckbox31;
    } else if (
      (flag7 == false && flagCheckbox31 == false) ||
      (flag9 == false && flagCheckbox31 == false) ||
      (flag8 == false && flagCheckbox31 == false)
    ) {
      flagCheckbox31 = !flagCheckbox31;
    } else {
      flagMarker31 = toggleMarker(marker31, map, flagMarker31);
      map.panTo(marker31.getPosition());
      flagCheckbox31 = !flagCheckbox31;
    }
  });

  const marker32 = new google.maps.Marker({
    position: { lat: 51.89287348221559, lng: 17.773658985542777 },
    title: 'Miejsce Spotkań "nad Nerem"',
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/picnic.png",
    },
  });
  const infowindow32 = new google.maps.InfoWindow({
    content: 'Miejsce Spotkań "nad Nerem"',
    ariaLabel: 'Miejsce Spotkań "nad Nerem"',
  });

  markerCheckbox32.addEventListener("change", function () {
    marker32.addListener("click", () => {
      infowindow32.open({
        anchor: marker32,
        map,
      });
    });

    if (
      (flag7 == false && flagCheckbox32 == true) ||
      (flag9 == false && flagCheckbox32 == true) ||
      (flag8 == false && flagCheckbox32 == true) ||
      (flag3 == false && flagCheckbox32 == true) ||
      (flag == false && flagCheckbox32 == true)
    ) {
      flagCheckbox32 = !flagCheckbox21;
    } else if (
      (flag7 == false && flagCheckbox32 == false) ||
      (flag9 == false && flagCheckbox32 == false) ||
      (flag8 == false && flagCheckbox32 == false) ||
      (flag3 == false && flagCheckbox32 == false) ||
      (flag == false && flagCheckbox32 == false)
    ) {
      flagCheckbox32 = !flagCheckbox32;
    } else {
      flagMarker32 = toggleMarker(marker32, map, flagMarker32);
      map.panTo(marker32.getPosition());
      flagCheckbox32 = !flagCheckbox32;
    }
  });

  const marker33 = new google.maps.Marker({
    position: { lat: 51.888119784547264, lng: 17.728507185011676 },
    title: "Pałac w Kowalewie",
    icon: {
      url: "img/palace.png",
    },
  });
  const infowindow33 = new google.maps.InfoWindow({
    content: "Pałac w Kowalewie",
    ariaLabel: "Pałac w Kowalewie",
  });

  markerCheckbox33.addEventListener("change", function () {
    marker33.addListener("click", () => {
      infowindow33.open({
        anchor: marker33,
        map,
      });
    });

    if (
      (flag3 == false && flagCheckbox33 == true) ||
      (flag10 == false && flagCheckbox33 == true)
    ) {
      flagCheckbox33 = !flagCheckbox33;
    } else if (
      (flag3 == false && flagCheckbox33 == false) ||
      (flag10 == false && flagCheckbox33 == false)
    ) {
      flagCheckbox33 = !flagCheckbox33;
    } else {
      flagMarker33 = toggleMarker(marker33, map, flagMarker33);
      map.panTo(marker33.getPosition());
      flagCheckbox33 = !flagCheckbox33;
    }
  });

  const marker34 = new google.maps.Marker({
    position: { lat: 51.88860694296506, lng: 17.764161976453096 },
    title: "Boreczek",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/tree.png",
    },
  });
  const infowindow34 = new google.maps.InfoWindow({
    content: "Boreczek",
    ariaLabel: "Boreczek",
  });

  markerCheckbox34.addEventListener("change", function () {
    marker34.addListener("click", () => {
      infowindow34.open({
        anchor: marker34,
        map,
      });
    });

    if (flag10 == false && flagCheckbox34 == true) {
      flagCheckbox34 = !flagCheckbox34;
    } else if (flag10 == false && flagCheckbox34 == false) {
      flagCheckbox34 = !flagCheckbox34;
    } else {
      flagMarker34 = toggleMarker(marker34, map, flagMarker34);
      map.panTo(marker34.getPosition());
      flagCheckbox34 = !flagCheckbox34;
    }
  });

  /* const marker35 = new google.maps.Marker({
    position: { lat: 51.891250647438476, lng: 17.783527436115193 },
    title: "Stacja Kolejowa Pleszew",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/rail.png",
    },
  });
  const infowindow35 = new google.maps.InfoWindow({
    content: "Stacja Kolejowa Pleszew",
    ariaLabel: "Stacja Kolejowa Pleszew",
  });

  markerCheckbox35.addEventListener("change", function () {
    marker35.addListener("click", () => {
      infowindow35.open({
        anchor: marker35,
        map,
      });
    });

    flagMarker35 = toggleMarker(marker35, map, flagMarker35);
    map.panTo(marker35.getPosition());
  });*/
}

function toggleMarker(marker, map, flag) {
  if (flag === true) {
    marker.setMap(map);
    flag = !flag;
    return flag;
  } else if (flag === false) {
    marker.setMap(null);
    flag = !flag;
    return flag;
  }
}

function calculateRoute(
  directionsService,
  directionsRenderer,
  originDestinationArray,
  id
) {
  switch (id) {
    case 1:
      if (flag == false) {
        directionsRenderer.set("directions", null);
        flag = true;
      } else if (flag == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            travelMode: google.maps.DirectionsTravelMode.DRIVING,
          })
          .then((response) => {
            flag = false;
            directionsRenderer.setDirections(response);
            console.log(response);
            console.log(directionsRenderer);
            console.log(directionsRenderer.h.markers);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;
    case 2:
      if (flag2 == false) {
        directionsRenderer.set("directions", null);
        flag2 = true;
      } else if (flag2 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[4].lat,
                  originDestinationArray[4].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[5].lat,
                  originDestinationArray[5].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[6].lat,
                  originDestinationArray[6].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[7].lat,
                  originDestinationArray[7].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[8].lat,
                  originDestinationArray[8].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.WALKING,
          })
          .then((response) => {
            flag2 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;

    case 3:
      if (flag3 == false) {
        directionsRenderer.set("directions", null);
        flag3 = true;
      } else if (flag3 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[4].lat,
                  originDestinationArray[4].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[5].lat,
                  originDestinationArray[5].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[6].lat,
                  originDestinationArray[6].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.BICYCLING,
          })
          .then((response) => {
            flag3 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;

    case 4:
      if (flag4 == false) {
        directionsRenderer.set("directions", null);
        flag4 = true;
      } else if (flag4 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[4].lat,
                  originDestinationArray[4].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[5].lat,
                  originDestinationArray[5].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[6].lat,
                  originDestinationArray[6].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.WALKING,
          })
          .then((response) => {
            flag4 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;

    case 5:
      if (flag5 == false) {
        directionsRenderer.set("directions", null);
        flag5 = true;
      } else if (flag5 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[4].lat,
                  originDestinationArray[4].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[5].lat,
                  originDestinationArray[5].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[6].lat,
                  originDestinationArray[6].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[7].lat,
                  originDestinationArray[7].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[8].lat,
                  originDestinationArray[8].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[9].lat,
                  originDestinationArray[9].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[10].lat,
                  originDestinationArray[10].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[11].lat,
                  originDestinationArray[11].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[12].lat,
                  originDestinationArray[12].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[13].lat,
                  originDestinationArray[13].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[14].lat,
                  originDestinationArray[14].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[15].lat,
                  originDestinationArray[15].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[16].lat,
                  originDestinationArray[16].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[17].lat,
                  originDestinationArray[17].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[18].lat,
                  originDestinationArray[18].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[19].lat,
                  originDestinationArray[19].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[20].lat,
                  originDestinationArray[20].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[21].lat,
                  originDestinationArray[21].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.DRIVING,
          })
          .then((response) => {
            flag5 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;

    case 6:
      if (flag6 == false) {
        directionsRenderer.set("directions", null);
        flag6 = true;
      } else if (flag6 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[4].lat,
                  originDestinationArray[4].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[5].lat,
                  originDestinationArray[5].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[6].lat,
                  originDestinationArray[6].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[7].lat,
                  originDestinationArray[7].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[8].lat,
                  originDestinationArray[8].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[9].lat,
                  originDestinationArray[9].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[10].lat,
                  originDestinationArray[10].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[11].lat,
                  originDestinationArray[11].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[12].lat,
                  originDestinationArray[12].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[13].lat,
                  originDestinationArray[13].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[14].lat,
                  originDestinationArray[14].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[15].lat,
                  originDestinationArray[15].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.DRIVING,
          })
          .then((response) => {
            flag6 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;

    case 7:
      if (flag7 == false) {
        directionsRenderer.set("directions", null);
        flag7 = true;
      } else if (flag7 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[4].lat,
                  originDestinationArray[4].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[5].lat,
                  originDestinationArray[5].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[6].lat,
                  originDestinationArray[6].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[7].lat,
                  originDestinationArray[7].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.WALKING,
          })
          .then((response) => {
            flag7 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;

    case 8:
      if (flag8 == false) {
        directionsRenderer.set("directions", null);
        flag8 = true;
      } else if (flag8 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[4].lat,
                  originDestinationArray[4].lng
                ),
                stopover: true,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[5].lat,
                  originDestinationArray[5].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[6].lat,
                  originDestinationArray[6].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.WALKING,
          })
          .then((response) => {
            flag8 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;

    case 9:
      if (flag9 == false) {
        directionsRenderer.set("directions", null);
        flag9 = true;
      } else if (flag9 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: true,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[4].lat,
                  originDestinationArray[4].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[5].lat,
                  originDestinationArray[5].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[6].lat,
                  originDestinationArray[6].lng
                ),
                stopover: true,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[7].lat,
                  originDestinationArray[7].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[8].lat,
                  originDestinationArray[8].lng
                ),
                stopover: true,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[9].lat,
                  originDestinationArray[9].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[10].lat,
                  originDestinationArray[10].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[11].lat,
                  originDestinationArray[11].lng
                ),
                stopover: true,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[12].lat,
                  originDestinationArray[12].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[13].lat,
                  originDestinationArray[13].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[14].lat,
                  originDestinationArray[14].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[15].lat,
                  originDestinationArray[15].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.WALKING,
          })
          .then((response) => {
            flag9 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;

    case 10:
      if (flag10 == false) {
        directionsRenderer.set("directions", null);
        flag10 = true;
      } else if (flag10 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[4].lat,
                  originDestinationArray[4].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[5].lat,
                  originDestinationArray[5].lng
                ),
                stopover: true,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[6].lat,
                  originDestinationArray[6].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[7].lat,
                  originDestinationArray[7].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[8].lat,
                  originDestinationArray[8].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[9].lat,
                  originDestinationArray[9].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[10].lat,
                  originDestinationArray[10].lng
                ),
                stopover: true,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[11].lat,
                  originDestinationArray[11].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.WALKING,
          })
          .then((response) => {
            flag10 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;

    case 11:
      if (flag11 == false) {
        directionsRenderer.set("directions", null);
        flag11 = true;
      } else if (flag11 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.WALKING,
          })
          .then((response) => {
            flag11 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;

    case 12:
      if (flag12 == false) {
        directionsRenderer.set("directions", null);
        flag12 = true;
      } else if (flag12 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[4].lat,
                  originDestinationArray[4].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.WALKING,
          })
          .then((response) => {
            flag12 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;

    case 13:
      if (flag13 == false) {
        directionsRenderer.set("directions", null);
        flag13 = true;
      } else if (flag13 == true) {
        directionsService
          .route({
            origin: {
              lat: originDestinationArray[0].lat,
              lng: originDestinationArray[0].lng,
            },
            destination: {
              lat: originDestinationArray[1].lat,
              lng: originDestinationArray[1].lng,
            },
            waypoints: [
              {
                location: new google.maps.LatLng(
                  originDestinationArray[2].lat,
                  originDestinationArray[2].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[3].lat,
                  originDestinationArray[3].lng
                ),
                stopover: false,
              },
              {
                location: new google.maps.LatLng(
                  originDestinationArray[4].lat,
                  originDestinationArray[4].lng
                ),
                stopover: false,
              },
            ],
            travelMode: google.maps.DirectionsTravelMode.WALKING,
          })
          .then((response) => {
            flag13 = false;
            directionsRenderer.setDirections(response);
          })
          .catch((e) => {
            window.alert("Directions request failed due to ");
          });
      }
      break;
  }
}

window.initMap = initMap;

const checkboxesDropDown = document.querySelectorAll(".checkbox-dropdown");
const checkboxesDropDownUl = document.querySelectorAll(
  ".checkbox-dropdown-list"
);

checkboxesDropDown.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    checkbox.classList.toggle("is-active");
  });
});

checkboxesDropDownUl.forEach((checkbox) => {
  checkbox.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});
/*
checkboxDropDown.addEventListener("click", () => {
  checkboxDropDown.classList.toggle("is-active");
});

checkboxDropDownUl.addEventListener("click", (event) => {
  event.stopPropagation();
});*/
