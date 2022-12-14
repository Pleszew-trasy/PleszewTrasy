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

const checkboxDropDown = document.querySelector(".checkbox-dropdown");
const checkboxDropDownUl = document.querySelector(".checkbox-dropdown-list");

checkboxDropDown.addEventListener("click", () => {
  checkboxDropDown.classList.toggle("is-active");
});

checkboxDropDownUl.addEventListener("click", (event) => {
  event.stopPropagation();
});
