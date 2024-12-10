<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  lon: {
    type: String,
    required: true
  },
  lat: {
    type: String,
    required: true
  },
});

const initializeYandexMap = () => {
  ymaps.ready(() => {
    let map = new ymaps.Map("yandex-map", {
      center: [props.lat, props.lon],
      zoom: 15
    }, {
      suppressMapOpenBlock: true,
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    //map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']);

    let placemark = new ymaps.Placemark([props.lat, props.lon], {
      iconContent: '',
      hintContent: props.title
    }, { preset: 'islands#redIcon' });
    map.geoObjects.add(placemark);
  });
}

onMounted(() => {
  initializeYandexMap();
})
</script>

<template>
  <div id="yandex-map" class="min-h-96 min-w-96 bg-bgSecondaryColor rounded-2xl"/>
</template>
