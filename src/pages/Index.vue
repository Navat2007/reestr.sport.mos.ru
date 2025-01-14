<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import moment from 'moment'
import Dialog from 'primevue/dialog'
import Popover from 'primevue/popover'
import Chart from 'primevue/chart'

import MyYandexMap from '@/components/MyYandexMap.vue'
import Info from '@/assets/images/icons/info.svg'
import Filter from '@/assets/images/icons/filter.svg'
import Search from '@/assets/images/icons/search.svg'
import ArrowDown from '@/assets/images/icons/arrow-down.svg'
import Company from '@/assets/images/icons/company.svg'
import ArrowLeft from '@/assets/images/icons/arrow-left.svg'
import Telephone from '@/assets/images/icons/telephone.svg'
import Envelope from '@/assets/images/icons/envelope.svg'
import Website from '@/assets/images/icons/website.svg'
import CloseModal from '@/assets/images/icons/close-modal.svg'
import Avatar from '@/assets/images/avatar.jpg'
import MyFilter from '@/components/MyFilter.vue'

const tabValue = ref('0')

const isDialogOpen = ref(false)
const searchInput = ref(null)
const yearSelectPopover = ref()
const state = reactive({
  searchInput: '',
  selectedActivityTypes: [],
})

const sportObjectCurrentYear = ref(parseInt(moment().format('YYYY')))
const sportObject = ref(null)
const sportObjectsLoading = ref(true)
const sportObjects = ref([])

const activityTypes = computed(() => {
  let array = []

  sportObjects.value.map((sportObject) => {
    if (!array.includes(sportObject.activity_type)) {
      array.push(sportObject.activity_type)
    }
  })

  array.sort()

  return array
})
const organizationalLegalForms = computed(() => {
  let array = []

  sportObjects.value.map((sportObject) => {
    if (!array.includes(sportObject.organizational_legal_form)) {
      array.push(sportObject.organizational_legal_form)
    }
  })

  array.sort()

  return array
})
const ownershipForms = computed(() => {
  let array = []

  sportObjects.value.map((sportObject) => {
    if (!array.includes(sportObject.ownership_form)) {
      array.push(sportObject.ownership_form)
    }
  })

  array.sort()

  return array
})
const departmentAffiliations = computed(() => {
  let array = []

  sportObjects.value.map((sportObject) => {
    if (!array.includes(sportObject.department_affiliation)) {
      array.push(sportObject.department_affiliation)
    }
  })

  array.sort()

  return array
})

const filteredSportObjects = ref([])
const selectedActivityTypes = ref([])
const selectedOrganizationalLegalForms = ref([])
const selectedOwnershipForms = ref([])
const selectedDepartmentAffiliations = ref([])

const isFilterShow = ref(false)
const isAnyFilterSelected = computed(() => {
  return (
    selectedActivityTypes.value.length > 0 ||
    selectedOrganizationalLegalForms.value.length > 0 ||
    selectedOwnershipForms.value.length > 0 ||
    selectedDepartmentAffiliations.value.length > 0
  )
})

const chartData = ref()
const chartOptions = ref()
const setChartData = (data) => {
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    labels: data.years.map((year) => year.year),
    datasets: [
      {
        type: 'bar',
        label: 'Выручка',
        backgroundColor: documentStyle.getPropertyValue('--p-primary-color'),
        borderColor: documentStyle.getPropertyValue('--p-primary-color'),
        borderRadius: 4,
        data: data.years.map((year) => year.earnings),
      },
      {
        type: 'bar',
        label: 'Доходы',
        backgroundColor: documentStyle.getPropertyValue('--p-blue-500'),
        borderColor: documentStyle.getPropertyValue('--p-blue-500'),
        borderRadius: 4,
        data: data.years.map((year) => year.income),
      },
    ],
  }
}
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color')

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500,
          },
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
      },
    },
  }
}

const onSportObjectClick = async (data) => {
  if (!data.years.find((item) => item.year === sportObjectCurrentYear.value)) {
    sportObjectCurrentYear.value = Math.max(...data.years.map((item) => item.year))
  }

  chartData.value = setChartData(data);

  console.log(data)

  if(data.lat === null || data.lon === null){
    const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=0af8f1a2-66fe-4b67-a879-42fb1f35cfdb&geocode=${data.address}&format=json`);
    const result = await response.json();

    try {
      const coordinates = result.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
      data.lat = coordinates[1];
      data.lon = coordinates[0];

      if(coordinates){
        let form = new FormData();
        form.append('id', data.ID);
        form.append('lat', data.lat);
        form.append('lon', data.lon);


        let response = await fetch('http://reestr.sport.mos.ru/php/yandex/save_coordinates.php', {
          method: 'POST',
          body: form
        });

        //let result = await response?.json();
      }
    }
    catch (e){}
  }

  sportObject.value = data
  isDialogOpen.value = true
}
const onSearch = () => {
  filteredSportObjects.value = sportObjects.value
    .filter(
      (item) =>
        item.full_title.toLowerCase().includes(state.searchInput.toLowerCase()) ||
        item.address.toLowerCase().includes(state.searchInput.toLowerCase()),
    )
    .filter(
      (item) =>
        selectedActivityTypes.value.length === 0 ||
        selectedActivityTypes.value.includes(item.activity_type),
    )
    .filter(
      (item) =>
        selectedOrganizationalLegalForms.value.length === 0 ||
        selectedOrganizationalLegalForms.value.includes(item.organizational_legal_form),
    )
    .filter(
      (item) =>
        selectedOwnershipForms.value.length === 0 ||
        selectedOwnershipForms.value.includes(item.ownership_form),
    )
    .filter(
      (item) =>
        selectedDepartmentAffiliations.value.length === 0 ||
        selectedDepartmentAffiliations.value.includes(item.department_affiliation),
    )
}
const onClear = () => {
  selectedActivityTypes.value = []
  selectedOrganizationalLegalForms.value = []
  selectedOwnershipForms.value = []
  selectedDepartmentAffiliations.value = []

  onSearch()
}
const toggleFilter = () => {
  isFilterShow.value = !isFilterShow.value

  if (!isFilterShow.value) onClear()
}

const fetchSportObjects = async () => {
  sportObjectsLoading.value = true;
  let form = new FormData();

  let response = await fetch('http://reestr.sport.mos.ru/php/sportobjects/load.php', {
    method: 'POST',
    body: form
  });

  let result = await response?.json();

  sportObjects.value = result;
  sportObjectsLoading.value = false;
}

onMounted(async () => {
  await fetchSportObjects();
  onSearch()
  chartOptions.value = setChartOptions()
})
</script>

<template>
  <!-- Главный поиск -->
  <section class="w-viewport max-w-full mx-auto px-main py-section">
    <div class="flex gap-3 flex-col md:mb-3 xl:flex-row xl:items-center xl:justify-between">
      <h1 class="max-w-max font-heading text-4xl md:text-heading uppercase leading-none">
        Реестр физкультурно-спортивных организаций
        <Info
          class="inline align-top w-6 h-6 text-main active:translate-y-px hidden"
          role="button"
          aria-label="Подробная информация"
        />
      </h1>
      <div class="flex-auto flex gap-4 xl:justify-end">
        <div
          class="w-full md:max-w-96 rounded-full bg-bgColor shadow-button flex gap-2 items-center pr-4"
        >
          <input
            :disabled="sportObjectsLoading"
            type="search"
            class="w-full py-2 px-4 rounded-full focus:outline-none"
            placeholder="Поиск по наименованию, адресу и виду спорта"
            v-model="state.searchInput"
            v-on:keyup.enter="onSearch"
          />
          <div class="search-divider"></div>
          <Button
            :disabled="sportObjectsLoading"
            class="p-2 flex items-center justify-center bg-transparent border-transparent active:translate-y-px"
            @click="onSearch"
          >
            <Search class="text-icon w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
        <Button
          :disabled="sportObjectsLoading"
          class="flex-none p-2 flex items-center justify-center bg-main text-textAccent rounded-2xl shadow-button active:translate-y-px border-transparent hover:bg-linkHover"
          :class="{
            'md:bg-bgColor md:text-icon': !isAnyFilterSelected,
          }"
          @click="toggleFilter"
          v-tooltip.top="{
            value: isFilterShow ? 'Скрыть и очистить все' : 'Открыть фильтр',
            pt: {
              arrow: 'border-b-bgColor border-t-bgColor',
              text: 'p-3 rounded-lg bg-bgColor text-textMain text-xs text-center shadow-card',
            },
          }"
        >
          <Filter class="w-6 h-6" aria-hidden="true" />
        </Button>
      </div>
    </div>
    <!-- Фильтры -->
    <div v-if="isFilterShow" class="filter-container">
      <div class="flex gap-3 items-center py-10 md:hidden">
        <Button
          class="flex-none p-0 flex items-center justify-center bg-bgColor text-main rounded-2xl active:translate-y-px border-transparent"
          @click="isFilterShow = false"
        >
          <ArrowLeft class="w-6 h-6" />
        </Button>
        <h3 class="text-2xl">Фильтры</h3>
      </div>
      <MyFilter
        title="Вид деятельности"
        :items="activityTypes"
        :itemSelected="selectedActivityTypes"
        @onSelect="
          (data) => {
            selectedActivityTypes = data
            onSearch()
          }
        "
      />
      <MyFilter
        title="Правовая форма"
        :items="organizationalLegalForms"
        :itemSelected="selectedOrganizationalLegalForms"
        @onSelect="
          (data) => {
            selectedOrganizationalLegalForms = data
            onSearch()
          }
        "
      />
      <MyFilter
        title="Форма собственности"
        :items="ownershipForms"
        :itemSelected="selectedOwnershipForms"
        @onSelect="
          (data) => {
            selectedOwnershipForms = data
            onSearch()
          }
        "
      />
      <MyFilter
        title="Ведомственная принадлежность"
        :items="departmentAffiliations"
        :itemSelected="selectedDepartmentAffiliations"
        @onSelect="
          (data) => {
            selectedDepartmentAffiliations = data
            onSearch()
          }
        "
      />

      <div class="flex gap-3 justify-center py-10 md:hidden">
        <Button
          class="flex-none px-12 py-2 bg-main text-textAccent text-sm rounded-full active:translate-y-px border-transparent shadow-authButton tracking-wide"
          @click="
            () => {
              isFilterShow = false
              onSearch()
            }
          "
        >
          <span>Искать</span>
        </Button>
        <Button
          class="flex-none px-12 py-2 bg-bgColor text-main text-sm rounded-full active:translate-y-px border-transparent tracking-wide"
          @click="
            () => {
              isFilterShow = false
              onClear()
            }
          "
        >
          <span>Очистить</span>
        </Button>
      </div>
    </div>
  </section>
  <!-- Загрузка -->
  <section v-if="sportObjectsLoading" class="w-viewport max-w-full mx-auto px-main pb-section" aria-label="Результаты поиска">
    <DataView :value="['1']" layout="grid">
      <template #grid>
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
          <article
            v-for="i in 9" :key="i"
            class="p-6 pb-4 bg-bgColor shadow-card rounded-2xl flex flex-col gap-3 cursor-pointer border-icon hover:shadow-cardHover transition-shadow active:shadow-card"
          >
            <div class="flex items-end gap-3">
              <Company class="flex-none w-8 h-8 text-main" aria-hidden="true" />
              <Skeleton width="100%" height="2rem" />
            </div>
            <div>
              <p class="text-sm text-textSecondary mb-1">Юридический адрес</p>
              <Skeleton width="100%" height="1rem" />
            </div>
            <div class="flex gap-2">
              <div class="flex-auto">
                <p class="text-sm text-textSecondary mb-1">ОГРН</p>
                <Skeleton width="100%" height="1rem" />
              </div>
              <div class="flex-auto">
                <p class="text-sm text-textSecondary mb-1">Дата регистрации</p>
                <Skeleton width="100%" height="1rem" />
              </div>
            </div>
          </article>
        </div>
      </template>
    </DataView>
  </section>
  <!-- Результаты поиска -->
  <section v-if="!sportObjectsLoading" class="w-viewport max-w-full mx-auto px-main pb-section" aria-label="Результаты поиска">
    <p v-if="filteredSportObjects.length !== 0" class="text-center mb-10 md:text-right">
      Всего найдено: {{ filteredSportObjects.length }}
    </p>

    <DataView :value="filteredSportObjects" layout="grid" paginator :rows="9">
      <template #grid="slotProps">
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
          <article
            v-for="item in slotProps.items"
            class="p-6 pb-4 bg-bgColor shadow-card rounded-2xl flex flex-col gap-3 cursor-pointer border-icon hover:shadow-cardHover transition-shadow active:shadow-card"
            @click="() => onSportObjectClick(item)"
          >
            <div class="flex items-end gap-3">
              <Company class="flex-none w-8 h-8 text-main" aria-hidden="true" />
              <h3 class="text-xl font-medium tracking-tight leading-tight">{{ item.short_title }}</h3>
            </div>
            <div>
              <p class="text-sm text-textSecondary mb-1">Юридический адрес</p>
              <p class="text-sm font-medium">{{ item.address }}</p>
            </div>
            <div class="flex gap-2">
              <div class="flex-auto">
                <p class="text-sm text-textSecondary mb-1">ОГРН</p>
                <p class="text-sm font-medium">{{ item.ogrn }}</p>
              </div>
              <div class="flex-auto">
                <p class="text-sm text-textSecondary mb-1">Дата регистрации</p>
                <p class="text-sm font-medium">{{ moment(item.registration_date).format('DD.MM.YYYY') }}</p>
              </div>
            </div>
          </article>
        </div>
      </template>
      <template #empty>
        <p
          v-if="filteredSportObjects.length === 0"
          class="col-span-full flex items-center justify-center gap-4"
        >
          <Search class="text-icon w-8 h-8" aria-hidden="true" />
          Не найдено ни одного объекта. <br />
          Попробуйте изменить критерии поиска
        </p>
      </template>
    </DataView>
  </section>

  <Dialog
    v-model:visible="isDialogOpen"
    modal
    close-on-escape
    :pt="{
      root: 'w-[calc(100%-32px)] lg:w-full max-w-5xl m-0 max-h-[calc(100%-32px)]',
      mask: 'backdrop-blur-lg',
      header: 'px-4 pt-6 pb-5 lg:px-9 lg:pt-9 items-start',
      content: 'px-4 pb-6 pt-0 lg:px-9 lg:pb-9',
    }"
  >
    <template #header>
      <h2 class="text-modalHeading font-medium tracking-tight leading-tight">{{ sportObject.short_title }}</h2>
    </template>

    <template #closeicon>
      <CloseModal class="w-6 h-6 lg:w-8 lg:h-8 text-main" />
    </template>

    <Tabs :value="tabValue" scrollable>
      <TabList pt:root="border-divider" pt:activeBar="border-2 border-main">
        <Tab value="0" pt:root="py-2 px-0 mr-5 text-sm font-normal">Общие сведения</Tab>
        <Tab value="1" pt:root="py-2 px-0 mr-5 text-sm font-normal">Характеристики</Tab>
        <Tab value="2" pt:root="py-2 px-0 mr-5 text-sm font-normal">Контакты</Tab>
        <Tab value="3" pt:root="py-2 px-0 mr-5 text-sm font-normal">Финансы</Tab>
      </TabList>
      <TabPanels pt:root="px-0 pt-5 pb-0">
        <TabPanel value="0">
          <section class="flex flex-col gap-4">
            <h2 class="text-2xl font-medium">Общие сведения</h2>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">Полное наименование организации</h3>
              <p>{{ sportObject.full_title }}</p>
            </div>
            <div class="flex flex-col gap-4 md:flex-row">
              <div class="flex-auto flex flex-col gap-4">
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">Краткое наименование организации</h3>
                  <p>{{ sportObject.short_title }}</p>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">Регион регистрации</h3>
                  <p>{{ sportObject.region }}</p>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">
                    Размер организации
                    <Info
                      class="inline align-top w-4 h-4 text-main"
                      role="button"
                      v-tooltip.top="{
                        value:
                          'Размер организации (микропредприятия/малые предприятия/средние предприятия/ крупные предприятия)',
                        pt: {
                          root: 'ml-2',
                          arrow: 'border-b-bgToolpitColor border-t-bgToolpitColor',
                          text: 'p-3 rounded-lg bg-bgToolpitColor text-textMain text-xs shadow-card',
                        },
                      }"
                    />
                  </h3>
                  <p>{{ sportObject.firm_size === 'NULL' ? 'Не указан' : sportObject.firm_size }}</p>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">Дата регистрации</h3>
                  <p>{{ moment(sportObject.registration_date).format('DD.MM.YYYY') }}</p>
                </div>
              </div>
              <div class="w-px bg-divider"></div>
              <div class="flex-auto flex flex-col gap-4">
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">
                    ИНН
                    <Info
                      class="inline align-top w-4 h-4 text-main"
                      role="button"
                      v-tooltip.top="{
                        value:
                          'Идентификационный номер налогоплательщика-организации, ИНН (цифровой код, который упорядочивает учёт налогоплательщиков)',
                        pt: {
                          root: 'ml-2',
                          arrow: 'border-b-bgToolpitColor border-t-bgToolpitColor',
                          text: 'p-3 rounded-lg bg-bgToolpitColor text-textMain text-xs shadow-card',
                        },
                      }"
                    />
                  </h3>
                  <p>{{ sportObject.inn }}</p>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">
                    ОГРН
                    <Info
                      class="inline align-top w-4 h-4 text-main"
                      role="button"
                      v-tooltip.top="{
                        value:
                          'Регистрационный номер организации, ОГРН (цифровой идентификатор организации, который подтверждает, что сведения о ней внесены в Единый государственный реестр юридических лиц)',
                        pt: {
                          root: 'ml-2',
                          arrow: 'border-b-bgToolpitColor border-t-bgToolpitColor',
                          text: 'p-3 rounded-lg bg-bgToolpitColor text-textMain text-xs shadow-card',
                        },
                      }"
                    />
                  </h3>
                  <p>{{ sportObject.ogrn }}</p>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">
                    Уставный капитал, руб.
                    <Info
                      class="inline align-top w-4 h-4 text-main"
                      role="button"
                      v-tooltip.top="{
                        value:
                          'Уставный капитал (сумма средств, которую учредители или собственники организации вносят с целью обеспечения её функционирования)',
                        pt: {
                          root: 'ml-2',
                          arrow: 'border-b-bgToolpitColor border-t-bgToolpitColor',
                          text: 'p-3 rounded-lg bg-bgToolpitColor text-textMain text-xs shadow-card',
                        },
                      }"
                    />
                  </h3>
                  <p>{{ vueNumberFormat(sportObject.capital, { precision: 0 }) }}</p>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">
                    Среднесписочная численность сотрудников в
                    <span class="select-yrs" @click="(event) => yearSelectPopover.toggle(event)">
                      {{ sportObjectCurrentYear }}
                      <ArrowDown class="inline align-top w-4 h-4 text-icon" role="button" />
                    </span>
                  </h3>
                  <p>
                    {{
                      sportObject.years.find((year) => year.year === sportObjectCurrentYear)
                        ?.employers
                    }} чел.
                  </p>
                </div>
              </div>
            </div>
            <div class="h-px bg-divider"></div>
            <h2 class="text-2xl font-medium">Руководитель</h2>
            <div class="flex items-center gap-4">
              <img class="w-16 h-16 rounded-md" :src="Avatar" alt="Фото руководителя" />
              <div>
                <h3 class="text-base capitalize-first">{{ sportObject.director_position }}</h3>
                <p class="text-xl">{{ sportObject.director_fio }}</p>
              </div>
            </div>
          </section>
        </TabPanel>
        <TabPanel value="1">
          <section class="flex flex-col gap-4">
            <h2 class="text-2xl font-medium">Характеристики</h2>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                ОКВЭД основной
                <Info
                  class="inline align-top w-4 h-4 text-main"
                  role="button"
                  v-tooltip.top="{
                    value:
                      'Вид деятельности/отрасль, основная (общероссийский классификатор видов экономической деятельности, ОКВЭД)',
                    pt: {
                      root: 'ml-2',
                      arrow: 'border-b-bgToolpitColor border-t-bgToolpitColor',
                      text: 'p-3 rounded-lg bg-bgToolpitColor text-textMain text-xs shadow-card',
                    },
                  }"
                />
              </h3>
              <p>{{ sportObject.activity_type }}</p>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                ОКВЭД дополнительный
                <Info
                  class="inline align-top w-4 h-4 text-main"
                  role="button"
                  v-tooltip.top="{
                    value:
                      'Вид деятельности/отрасль, дополнительная (общероссийский классификатор видов экономической деятельности, ОКВЭД) (при наличии)',
                    pt: {
                      root: 'ml-2',
                      arrow: 'border-b-bgToolpitColor border-t-bgToolpitColor',
                      text: 'p-3 rounded-lg bg-bgToolpitColor text-textMain text-xs shadow-card',
                    },
                  }"
                />
              </h3>
              <ul class="list-disc pl-6">
                <li v-for="item in sportObject.activity_type_additional.split(';')">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                Организационно-правовая форма
                <Info
                  class="inline align-top w-4 h-4 text-main"
                  role="button"
                  v-tooltip.top="{
                    value:
                      'Организационно-правовая форма (характеристика юридического лица, которая раскрывает его внутреннюю структуру и механизмы взаимодействия между структурными элементами)',
                    pt: {
                      root: 'ml-2',
                      arrow: 'border-b-bgToolpitColor border-t-bgToolpitColor',
                      text: 'p-3 rounded-lg bg-bgToolpitColor text-textMain text-xs shadow-card',
                    },
                  }"
                />
              </h3>
              <p>{{ sportObject.organizational_legal_form }}</p>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                Форма собственности
                <Info
                  class="inline align-top w-4 h-4 text-main"
                  role="button"
                  v-tooltip.top="{
                    value:
                      'Форма собственности (форма прав владельца на определённое имущество: частная, коммерческая, иностранная, совместная)',
                    pt: {
                      root: 'ml-2',
                      arrow: 'border-b-bgToolpitColor border-t-bgToolpitColor',
                      text: 'p-3 rounded-lg bg-bgToolpitColor text-textMain text-xs shadow-card',
                    },
                  }"
                />
              </h3>
              <p>{{ sportObject.ownership_form }}</p>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                Ведомственная принадлежность
                <Info
                  class="inline align-top w-4 h-4 text-main"
                  role="button"
                  v-tooltip.top="{
                    value:
                      'Ведомственная принадлежность (показывает, какому именно ведомству принадлежит организация: федерального, регионального, либо иного органа исполнительной (законодательной, судебной) власти на территории города Москвы)',
                    pt: {
                      root: 'ml-2',
                      arrow: 'border-b-bgToolpitColor border-t-bgToolpitColor',
                      text: 'p-3 rounded-lg bg-bgToolpitColor text-textMain text-xs shadow-card',
                    },
                  }"
                />
              </h3>
              <p>
                {{ sportObject.department_affiliation }}
              </p>
            </div>
          </section>
        </TabPanel>
        <TabPanel value="2">
          <section class="flex flex-col gap-4">
            <h2 class="text-2xl font-medium">Контактная информация</h2>
            <div class="flex max-sm:flex-col flex-wrap gap-4">
              <div class="flex-auto flex flex-col">
                <h3 class="text-xs text-textSecondary">Телефон</h3>
                <p class="flex gap-2">
                  <Telephone class="flex-none w-4 h-4 text-icon mt-1" />
                  <span v-if="sportObject.phones === 'NULL'" class="flex-auto flex flex-col">
                    Не указан
                  </span>
                  <span v-else class="flex-auto flex flex-col">
                    <a
                      v-for="phone in sportObject.phones.split(';')"
                      v-bind:href="'tel:' + phone"
                      target="_blank"
                      class="w-fit border-b-2 border-b-transparent hover:border-main hover:bg-linkHover transition"
                    >
                      {{ phone }}
                    </a>
                  </span>
                </p>
              </div>
              <div class="flex-auto flex flex-col">
                <h3 class="text-xs text-textSecondary">Почта</h3>
                <p class="flex gap-2">
                  <Envelope class="flex-none w-4 h-4 text-icon mt-1" />
                  <span v-if="sportObject.emails === 'NULL'" class="flex-auto flex flex-col">
                    Не указана
                  </span>
                  <span v-else class="flex-auto flex flex-col">
                    <a
                      v-for="email in sportObject.emails.split(';')"
                      v-bind:href="'mailto:' + email"
                      target="_blank"
                      class="w-fit border-b-2 border-b-transparent hover:border-main hover:bg-linkHover transition"
                    >
                      {{ email }}
                    </a>
                  </span>
                </p>
              </div>
              <div class="flex-auto flex flex-col">
                <h3 class="text-xs text-textSecondary">Сайт в сети Интернет</h3>
                <p class="flex gap-2">
                  <Website class="flex-none w-4 h-4 text-icon mt-1" />
                  <span v-if="sportObject.sites === 'NULL'" class="flex-auto flex flex-col">
                    Не указан
                  </span>
                  <span v-else class="flex-auto flex flex-col">
                    <a
                      v-for="site in sportObject.sites.split(';')"
                      v-bind:href="site.includes('http') ? site : 'https://' + site"
                      target="_blank"
                      class="w-fit border-b-2 border-b-transparent hover:border-main hover:bg-linkHover transition"
                    >
                      {{ site }}
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                Юридический адрес (адрес регистрации организации)
              </h3>
              <p>{{ sportObject.address }}</p>
            </div>

            <MyYandexMap
              :title="sportObject.name"
              :lon="sportObject.lon"
              :lat="sportObject.lat"
            />
          </section>
        </TabPanel>
        <TabPanel value="3">
          <section class="flex flex-col gap-4">
            <div>
              <h2 class="text-2xl font-medium">Финансы</h2>
              <h3 class="text-sm text-textSecondary">
                Основные показатели за
                <span class="select-yrs" @click="(event) => yearSelectPopover.toggle(event)">
                  {{ sportObjectCurrentYear }}
                  <ArrowDown class="inline align-top w-4 h-4 text-icon" role="button" />
                </span>
              </h3>
            </div>
            <div class="grid grid-cols-2 gap-2 lg:grid-cols-4">
              <article
                class="flex flex-col bg-bgColor rounded-2xl border border-bgSecondaryColor shadow-button gap-1 px-4 pt-4 pb-3"
              >
                <h3 class="text-xs md:text-sm font-normal text-textSecondary">Выручка, руб.</h3>
                {{
                  vueNumberFormat(
                    sportObject.years.find((year) => year.year === sportObjectCurrentYear)
                      ?.earnings,
                    { precision: 0 },
                  )
                }}
              </article>
              <article
                class="flex flex-col bg-bgColor rounded-2xl border border-bgSecondaryColor shadow-button gap-1 px-4 pt-4 pb-3"
              >
                <h3 class="text-xs md:text-sm font-normal text-textSecondary">Налоги, руб.</h3>
                {{
                  vueNumberFormat(
                    sportObject.years.find((year) => year.year === sportObjectCurrentYear)?.tax,
                    { precision: 0 },
                  )
                }}
              </article>
              <article
                class="flex flex-col bg-bgColor rounded-2xl border border-bgSecondaryColor shadow-button gap-1 px-4 pt-4 pb-3"
              >
                <h3 class="text-xs md:text-sm font-normal text-textSecondary">Расходы, руб.</h3>
                {{
                  vueNumberFormat(
                    sportObject.years.find((year) => year.year === sportObjectCurrentYear)?.expense,
                    { precision: 0 },
                  )
                }}
              </article>
              <article
                class="flex flex-col bg-bgColor rounded-2xl border border-bgSecondaryColor shadow-button gap-1 px-4 pt-4 pb-3"
              >
                <h3 class="text-xs md:text-sm font-normal text-textSecondary">Доходы, руб.</h3>
                {{
                  vueNumberFormat(
                    sportObject.years.find((year) => year.year === sportObjectCurrentYear)?.income,
                    { precision: 0 },
                  )
                }}
              </article>
            </div>

            <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]" />
          </section>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Dialog>
  <Popover ref="yearSelectPopover" pt:content="p-0">
    <ul>
      <li
        class="px-3 p-[6px] pb-1 cursor-pointer hover:bg-linkHover transition"
        v-for="year in sportObject.years"
        v-bind:key="year.year"
        @click="
          () => {
            sportObjectCurrentYear = year.year
            yearSelectPopover.toggle()
          }
        "
      >
        {{ year.year }}
      </li>
    </ul>
  </Popover>
</template>

<style scoped>
.search-divider {
  @apply bg-divider;
  inline-size: 1px;
  block-size: 24px;
}

.select-yrs {
  @apply text-main cursor-pointer hover:bg-linkHover active:translate-y-px transition;
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: 8%;
  text-underline-offset: auto;
  text-underline-position: from-font;
}

.filter-container {
  @apply flex flex-col gap-4 max-md:px-main max-md:shadow-filter bg-bgColor max-md:fixed max-md:left-0 max-md:right-0 max-md:bottom-0 md:flex-wrap md:flex-row xl:justify-end;
}
</style>
