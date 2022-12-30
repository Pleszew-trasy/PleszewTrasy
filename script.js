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

for (let i = 1; i <= 35; i++) {
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

for (let i = 1; i <= 35; i++) {
  eval("var flagMarker" + i + " = true;");
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
  const Pleszew = { lat: 51.897361, lng: 17.785614 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: Pleszew,
  });

  directionsRenderer.setOptions({
    polylineOptions: {
      strokeColor: "red",
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer2.setOptions({
    polylineOptions: {
      strokeColor: familyColor,
      strokeWeight: strokeWeight,
      strokeOpacity: 1.0,
    },
    suppressMarkers: true,
  });

  directionsRenderer3.setOptions({
    polylineOptions: {
      strokeColor: familyColor,
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
      strokeColor: familyColor,
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer6.setOptions({
    polylineOptions: {
      strokeColor: familyColor,
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer7.setOptions({
    polylineOptions: {
      strokeColor: familyColor,
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer8.setOptions({
    polylineOptions: {
      strokeColor: familyColor,
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer9.setOptions({
    polylineOptions: {
      strokeColor: familyColor,
      strokeWeight: strokeWeight,
    },
    suppressMarkers: true,
  });

  directionsRenderer10.setOptions({
    polylineOptions: {
      strokeColor: familyColor,
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
  });

  const marker1 = new google.maps.Marker({
    position: { lat: 51.8960138469201, lng: 17.786460676606847 },
    title: "Rynek",
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

    flagMarker1 = toggleMarker(marker1, map, flagMarker1);
  });

  const marker2 = new google.maps.Marker({
    position: { lat: 51.895731389933964, lng: 17.78647662511584 },
    title: "Urząd",
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

    flagMarker2 = toggleMarker(marker2, map, flagMarker2);
  });

  const marker3 = new google.maps.Marker({
    position: { lat: 51.89641963899831, lng: 17.78619468124088 },
    title: "Hotel",
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

    flagMarker3 = toggleMarker(marker3, map, flagMarker3);
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

    flagMarker4 = toggleMarker(marker4, map, flagMarker4);
  });

  const marker5 = new google.maps.Marker({
    position: { lat: 51.89685829625867, lng: 17.780760076362544 },
    title: "Kino Hel",
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

    flagMarker5 = toggleMarker(marker5, map, flagMarker5);
  });

  const marker6 = new google.maps.Marker({
    position: { lat: 51.895919792155844, lng: 17.78616691985445 },
    title: "Lodziarnia",
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

    flagMarker6 = toggleMarker(marker6, map, flagMarker6);
  });

  const marker7 = new google.maps.Marker({
    position: { lat: 51.89544097985568, lng: 17.78473886228255 },
    title: "Kawiarnia",
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

    flagMarker7 = toggleMarker(marker7, map, flagMarker7);
  });

  const marker8 = new google.maps.Marker({
    position: { lat: 51.89543161425292, lng: 17.787234332877592 },
    title: "Pub Piwnica",
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

    flagMarker8 = toggleMarker(marker8, map, flagMarker8);
  });

  const marker9 = new google.maps.Marker({
    position: { lat: 51.89535820187878, lng: 17.78911227430774 },
    title: "Pączkownia",
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

    flagMarker9 = toggleMarker(marker9, map, flagMarker9);
  });

  const marker10 = new google.maps.Marker({
    position: { lat: 51.894350952936705, lng: 17.782599826472836 },
    title: "Park Miejski",
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

    flagMarker10 = toggleMarker(marker10, map, flagMarker10);
  });

  const marker11 = new google.maps.Marker({
    position: { lat: 51.894459029286494, lng: 17.78255399350101 },
    title: "Staw",
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

    flagMarker11 = toggleMarker(marker11, map, flagMarker11);
  });

  const marker12 = new google.maps.Marker({
    position: { lat: 51.894052503653576, lng: 17.782989497853862 },
    title: "Plac Zabaw Park Miejski",
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

    flagMarker12 = toggleMarker(marker12, map, flagMarker12);
  });

  const marker13 = new google.maps.Marker({
    position: { lat: 51.905758839365554, lng: 17.784867341856806 },
    title: "Plac Zabaw Osiedle Wokół Wieży",
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

    flagMarker13 = toggleMarker(marker13, map, flagMarker13);
  });

  const marker14 = new google.maps.Marker({
    position: { lat: 51.886986499318375, lng: 17.779304675891606 },
    title: "Plac Zabaw Ulica Krzywoustego",
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

    flagMarker14 = toggleMarker(marker14, map, flagMarker14);
  });

  const marker15 = new google.maps.Marker({
    position: { lat: 51.88706872096141, lng: 17.78131133470587 },
    title: "Plac Zabaw „Małpi Gaj",
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

    flagMarker15 = toggleMarker(marker15, map, flagMarker15);
  });

  const marker16 = new google.maps.Marker({
    position: { lat: 51.89610215912502, lng: 17.788425699322378 },
    title: "Kościół pw. Ścięcia Jana Chrzciciela przy Rynku",
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

    flagMarker16 = toggleMarker(marker16, map, flagMarker16);
  });

  const marker17 = new google.maps.Marker({
    position: { lat: 51.897705248450414, lng: 17.776018985754032 },
    title: "Kościół Świętego Floriana",
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

    flagMarker17 = toggleMarker(marker17, map, flagMarker17);
  });

  const marker18 = new google.maps.Marker({
    position: { lat: 51.88436907711972, lng: 17.788731451356444 },
    title: "OSiR Pleszew",
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

    flagMarker18 = toggleMarker(marker18, map, flagMarker18);
  });

  const marker19 = new google.maps.Marker({
    position: { lat: 51.88399468980463, lng: 17.793311634965605 },
    title: "Amfiteatr",
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
  });

  const marker20 = new google.maps.Marker({
    position: { lat: 51.89732801437519, lng: 17.787038887959763 },
    title: "Muzeum Piekarnictwa",
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

    flagMarker20 = toggleMarker(marker20, map, flagMarker20);
  });

  const marker21 = new google.maps.Marker({
    position: { lat: 51.89797447289455, lng: 17.78962489882941 },
    title: "Muzeum Szewstwa",
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

    flagMarker21 = toggleMarker(marker21, map, flagMarker21);
  });

  const marker22 = new google.maps.Marker({
    position: { lat: 51.886668068668264, lng: 17.782766621063693 },
    title: "Muzeum Rzemiosła",
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

    flagMarker22 = toggleMarker(marker22, map, flagMarker22);
  });

  const marker23 = new google.maps.Marker({
    position: { lat: 51.88423002633104, lng: 17.78806110157781 },
    title: "Skatepark",
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

    flagMarker23 = toggleMarker(marker23, map, flagMarker23);
  });

  const marker24 = new google.maps.Marker({
    position: { lat: 51.88492998220363, lng: 17.78832452031398 },
    title: "Kort tenisowy",
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

    flagMarker24 = toggleMarker(marker24, map, flagMarker24);
  });

  const marker25 = new google.maps.Marker({
    position: { lat: 51.884563128791655, lng: 17.789674672144596 },
    title: "Stadion Miejski",
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

    flagMarker25 = toggleMarker(marker25, map, flagMarker25);
  });

  const marker26 = new google.maps.Marker({
    position: { lat: 51.88313880639179, lng: 17.79337740094785 },
    title: "Kręgielnia",
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

    flagMarker26 = toggleMarker(marker26, map, flagMarker26);
  });

  const marker27 = new google.maps.Marker({
    position: { lat: 51.88349738540381, lng: 17.793273892830612 },
    title: "Park wodny",
  });
  const infowindow27 = new google.maps.InfoWindow({
    content: "Park wodny",
    ariaLabel: "Park wodny",
  });

  markerCheckbox27.addEventListener("change", function () {
    marker27.addListener("click", () => {
      infowindow27.open({
        anchor: marker27,
        map,
      });
    });

    flagMarker27 = toggleMarker(marker27, map, flagMarker27);
  });

  const marker28 = new google.maps.Marker({
    position: { lat: 51.88338037261172, lng: 17.795546933758363 },
    title: 'Park "Planty"',
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

    flagMarker28 = toggleMarker(marker28, map, flagMarker28);
  });

  const marker29 = new google.maps.Marker({
    position: { lat: 51.89074856323925, lng: 17.784720162989718 },
    title: "Zajezdnia Kultury",
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

    flagMarker29 = toggleMarker(marker29, map, flagMarker29);
  });

  const marker30 = new google.maps.Marker({
    position: { lat: 51.89114790691487, lng: 17.78315956357188 },
    title: "Kolejka Wąskotorowa",
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

    flagMarker30 = toggleMarker(marker30, map, flagMarker30);
  });

  const marker31 = new google.maps.Marker({
    position: { lat: 51.891416720620214, lng: 17.78289172270069 },
    title: "Zabytkowa Lokomotywa",
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

    flagMarker31 = toggleMarker(marker31, map, flagMarker31);
  });

  const marker32 = new google.maps.Marker({
    position: { lat: 51.89287348221559, lng: 17.773658985542777 },
    title: 'Miejsce Spotkań "nad Nerem"',
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

    flagMarker32 = toggleMarker(marker32, map, flagMarker32);
  });

  const marker33 = new google.maps.Marker({
    position: { lat: 51.888119784547264, lng: 17.728507185011676 },
    title: "Pałac w Kowalewie",
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

    flagMarker33 = toggleMarker(marker33, map, flagMarker33);
  });

  const marker34 = new google.maps.Marker({
    position: { lat: 51.88860694296506, lng: 17.764161976453096 },
    title: "Boreczek",
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

    flagMarker34 = toggleMarker(marker34, map, flagMarker34);
  });

  const marker35 = new google.maps.Marker({
    position: { lat: 51.891250647438476, lng: 17.783527436115193 },
    title: "Stacja Kolejowa Pleszew",
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
  });
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
