<script setup>
import { onMounted, reactive, ref, watchEffect } from 'vue'
import Dialog from 'primevue/dialog'
import Popover from 'primevue/popover'
import Chart from 'primevue/chart'
import Tooltip from 'primevue/tooltip'

import Info from '@/assets/images/icons/info.svg'
import Filter from '@/assets/images/icons/filter.svg'
import Search from '@/assets/images/icons/search.svg'
import ArrowDown from '@/assets/images/icons/arrow-down.svg'
import Company from '@/assets/images/icons/company.svg'
import CheckCircle from '@/assets/images/icons/check-circle.svg'
import ArrowLeft from '@/assets/images/icons/arrow-left.svg'
import Telephone from '@/assets/images/icons/telephone.svg'
import Envelope from '@/assets/images/icons/envelope.svg'
import Website from '@/assets/images/icons/website.svg'
import CloseModal from '@/assets/images/icons/close-modal.svg'
import Avatar from '@/assets/images/avatar.jpg'

const tabValue = ref('0')
const isFilterShow = ref(false)
const isDialogOpen = ref(false)
const searchInput = ref(null)
const isFilterActivityTypeOpen = ref(false)
const state = reactive({
  searchInput: '',
  selectedActivityTypes: [],
})

const sportObject = ref(null)
const sportObjects = ref([
  {
    reestrNumber: 1,
    ogrn: '1127746355670',
    alterName: 'ООО «3СПОРТ»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    name: 'ООО «3СПОРТ»',
    address:
      '105082, г. Москва, вн.тер.г. муниципальный округ Басманный, пл Спартаковская, д. 10, стр. 12 (Бизнес-центр «Флеш Ланж 10с12»)',
    directorPosition: 'генеральный директор',
    directorName: 'Громов Михаил Николаевич',
    registrationDate: '04.05.2012',
    inn: '7708762136',
    region: 'Москва',
    activityType: 'Деятельность в области спорта',
    activityTypeAdditional:
      'Торговля розничная спортивной одеждой в специализированных магазинах; Производство пищевой продукции для питания спортсменов; Производство спортивных костюмов, лыжных костюмов, купальных костюмов и прочей трикотажной или вязаной одежды; Производство спортивной обуви; Торговля оптовая спортивными товарами, включая велосипеды; Торговля розничная спортивным оборудованием и спортивными товарами в специализированных магазинах; Торговля розничная спортивной одеждой в специализированных магазинах; Прокат и аренда товаров для отдыха и спортивных товаров; Деятельность спортивных объектов; Деятельность спортивных клубов; Деятельность фитнес-центров; Ремонт спортивного и туристского оборудования; Деятельность физкультурно- оздоровительная; Деятельность в области спорта прочая',
    ownershipForm: 'Частная собственность',
    departmentAffiliation:
      'Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно',
    organizationCategory: 'Организация прочая спортивная',
    FK1Form: 'да',
    phones: ['+7 (926) 860-09-34'],
    emails: ['grom@3sport.ru'],
    site: 'www.3sport.ru',
    firmSize: 'Микропредприятия',
    capital: 10000,
    years: [
      {
        year: 2022,
        employers: 3,
        income: 92823000,
        expense: 80926000,
        tax: 1784494,
        earnings: 90041000,
      },
      {
        year: 2023,
        employers: 5,
        income: 113456890,
        expense: 56999000,
        tax: 2310345,
        earnings: 92560000,
      },
    ],
  },
  {
    reestrNumber: 2,
    ogrn: '5187746004507',
    alterName: 'ООО «ДИКОМ СПОРТ»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ДИКОМ СПОРТ»',
    name: 'ООО «ДИКОМ СПОРТ»',
    address: '119049, г. Москва, ул. Донская, д. 6 стр. 1 этаж ПОДВАЛ, пом. 1, офис 4С',
    directorPosition: 'генеральный директор',
    directorName: 'Бубело Михаил Сергеевич',
    registrationDate: '14.12.2018',
    inn: '7706463324',
    region: 'Москва',
    activityType: 'Производство спортивных товаров',
    activityTypeAdditional:
      'Деятельность спортивных объектов; Деятельность в области спорта прочая; Торговля розничная спортивным оборудованием и спортивными товарами в специализированных магазинах; Торговля оптовая спортивными товарами, включая велосипеды',
    organizationalLegalForm: 'Общества с ограниченной ответственностью',
    ownershipForm: 'Частная собственность',
    departmentAffiliation:
      'Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно',
    organizationCategory: 'Организация прочая спортивная',
    FK1Form: 'да',
    phones: ['+7 (926) 860-09-34'],
    emails: ['grom@3sport.ru'],
    site: 'www.123.ru',
    firmSize: 'Микропредприятия',
    capital: 10000,
    years: [
      {
        year: 2022,
        employers: 1,
        income: 92823000,
        expense: 80926000,
        tax: 14488000,
        earnings: 113456890,
      },
      {
        year: 2023,
        employers: 5,
        income: 113456890,
        expense: 56999000,
        tax: 604940,
        earnings: 14488000,
      },
    ],
  },
  {
    reestrNumber: 3,
    ogrn: '1112130002951',
    alterName: 'ООО «ДИНШЭН ГРУПП»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ДИНШЭН ГРУПП»',
    name: 'ООО «ДИНШЭН ГРУПП»',
    address:
      '123098, г. Москва, вн.тер.г. муниципальный округ Щукино, ул Гамалеи, д. 19, к. 2, помещ. 1/1',
    directorPosition: 'генеральный директор',
    directorName: 'Чижов Александр Игоревич',
    registrationDate: '08.12.2017',
    inn: '7703438760',
    region: 'Москва',
    activityType:
      'Торговля оптовая лесоматериалами, строительными материалами и санитарно-техническим оборудованием',
    activityTypeAdditional: 'Торговля розничная спортивной одежой в специализированных магазинах',
    organizationalLegalForm: 'Общества с ограниченной ответственностью',
    ownershipForm: 'Совместная частная и иностранная собственность',
    departmentAffiliation:
      'Хозяйственные общества и товарищества с участием иностранных юридических и (или) физических лиц, а также лиц без гражданства',
    organizationCategory: 'Организация прочая спортивная',
    FK1Form: 'нет',
    phones: ['+7 (926) 860-09-34'],
    emails: ['grom@3sport.ru'],
    site: 'www.123.ru',
    firmSize: 'Микропредприятия',
    capital: 1000000,
    years: [
      {
        year: 2022,
        employers: 3,
        income: 92823000,
        expense: 80926000,
        tax: 14488000,
        earnings: 309000,
      },
      {
        year: 2023,
        employers: 5,
        income: 309000,
        expense: 309000,
        tax: 604940,
        earnings: 14488000,
      },
    ],
  },
  {
    reestrNumber: 4,
    ogrn: '5177746306612',
    alterName: 'ООО «ДИОН»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ДИОН»',
    name: 'ООО «ДИОН»',
    address:
      '125047, г. Москва, вн.тер.г. муниципальный округ Тверской, ул 4-я Тверская-Ямская, д. 24, помещ./ком. 1/4-5',
    directorPosition: 'генеральный директор',
    directorName: 'Папикян Тамара Валерьевна',
    registrationDate: '09.08.2022',
    inn: '9710101240',
    region: 'Москва',
    activityType: 'Предоставление услуг парикмахерскими и салонами красоты',
    activityTypeAdditional: 'Деятельность физкультурно-оздоровительная',
    organizationalLegalForm: 'Общества с ограниченной ответственностью',
    ownershipForm: 'Частная собственность',
    departmentAffiliation:
      'Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно',
    organizationCategory: 'Организация прочая спортивная',
    FK1Form: 'нет',
    phones: ['+7 (926) 860-09-34'],
    emails: ['grom@3sport.ru'],
    site: 'http://pandapark.org/',
    firmSize: 'Микропредприятия',
    capital: 10000,
    years: [
      {
        year: 2022,
        employers: 1,
        income: 2482000,
        expense: 2569000,
        tax: 264425,
        earnings: 2482000,
      },
      { year: 2023, employers: 5, income: 569000, expense: 602000, tax: 604940, earnings: 569000 },
    ],
  },
  {
    reestrNumber: 5,
    ogrn: '1107746719310',
    alterName: 'ООО «ДИСК»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ДИСК»',
    name: 'ООО «ДИСК»',
    address: '119034, г. Москва, пер. Мансуровский, д. 10 стр. 1 ПОДВ. 0 пом. VI ком. 1',
    directorPosition: 'генеральный директор',
    directorName: 'Пекло Виктория Станиславовна',
    registrationDate: '20.04.2011',
    inn: '7704781138',
    region: 'Москва',
    activityType: 'Деятельность в области спорта прочая',
    activityTypeAdditional:
      'Деятельность в области спорта прочая; Деятельность спортивных объектов; Деятельность спортивных клубов; Деятельность физкультурно-оздоровительная',
    organizationalLegalForm: 'Общества с ограниченной ответственностью',
    ownershipForm: 'Частная собственность',
    departmentAffiliation:
      'Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно',
    organizationCategory: 'Организация прочая спортивная',
    FK1Form: 'нет',
    phones: ['+7 (903) 7801122'],
    emails: ['grom@3sport.ru'],
    site: 'http://pandapark.org/',
    firmSize: 'Микропредприятия',
    capital: 25000,
    years: [
      {
        year: 2022,
        employers: 3,
        income: 36948000,
        expense: 36948000,
        tax: 264425,
        earnings: 1632000,
      },
      {
        year: 2023,
        employers: 5,
        income: 42734000,
        expense: 44422000,
        tax: 604940,
        earnings: 40146000,
      },
    ],
  },
  {
    reestrNumber: 6,
    ogrn: '1127747177051',
    alterName: 'ООО «ДМ-ФИТНЕС»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ДМ-ФИТНЕС»',
    name: 'ООО «ДМ-ФИТНЕС»',
    address:
      '125466, г. Москва, вн.тер.г. муниципальный округ Куркино, км МКАД 73-й, д. 7 (Торговый центр «Арфа»)',
    directorPosition: 'генеральный директор',
    directorName: 'Питерскова Юлия Алексеевна',
    registrationDate: '15.08.2022',
    inn: '7733389334',
    region: 'Москва',
    activityType: 'Деятельность спортивных объектов',
    activityTypeAdditional:
      'Деятельность в области спорта прочая; Деятельность физкультурно-оздоровительная; Торговля розничная спортивным оборудованием и спортивными товарами в специализированных магазинах',
    organizationalLegalForm: 'Общества с ограниченной ответственностью',
    ownershipForm: 'Частная собственность',
    departmentAffiliation:
      'Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно',
    organizationCategory: 'Организация прочая спортивная',
    FK1Form: 'нет',
    phones: ['+7 (926) 860-09-34'],
    emails: ['grom@3sport.ru'],
    site: 'putilkovo-fitness.ru',
    firmSize: 'Микропредприятия',
    capital: 10000,
    years: [
      {
        year: 2022,
        employers: 10,
        income: 39630000,
        expense: 36948000,
        tax: 14488000,
        earnings: 39630000,
      },
      {
        year: 2023,
        employers: 11,
        income: 14488000,
        expense: 13963000,
        tax: 264425,
        earnings: 14488000,
      },
    ],
  },
  {
    reestrNumber: 7,
    ogrn: '1227700494229',
    alterName: 'ООО «ДМ»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ДМ»',
    name: 'ООО «ДМ»',
    address:
      '127410, г. Москва, вн.тер.г. муниципальный округ Отрадное, ш Алтуфьевское, влд. 31Г, стр. 5, ком. 8',
    directorPosition: 'генеральный директор',
    directorName: 'Смирнова Ирина Ивановна',
    registrationDate: '25.05.2015',
    inn: '7725274499',
    region: 'Москва',
    activityType:
      'Деятельность по предоставлению прочих вспомогательных услуг для бизнеса, не включенная в другие группировки',
    activityTypeAdditional:
      'Деятельность в области спорта прочая; Торговля оптовая спортивными товарами, включая велосипеды; Торговля розничная спортивной одеждой в специализированных магазинах',
    organizationalLegalForm: 'Общества с ограниченной ответственностью',
    ownershipForm: 'Частная собственность',
    departmentAffiliation:
      'Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно',
    organizationCategory: 'Организация прочая спортивная',
    FK1Form: 'да',
    phones: ['+7 (916) 3917114', '+7 (926) 9146680'],
    emails: ['grom@3sport.ru'],
    site: 'www.123.ru',
    firmSize: 'Микропредприятия',
    capital: 10000,
    years: [
      {
        year: 2022,
        employers: 1,
        income: 1741000,
        expense: 1632000,
        tax: 14488000,
        earnings: 1741000,
      },
      {
        year: 2023,
        employers: 5,
        income: 2069000,
        expense: 1907000,
        tax: 57540,
        earnings: 2069000,
      },
    ],
  },
  {
    reestrNumber: 8,
    ogrn: '1157746469033',
    alterName: 'ООО «ДМД»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ДМД»',
    name: 'ООО «ДМД»',
    address: '109156, г. Москва, ул. Генерала Кузнецова, д. 20 этаж / пом. 1/3',
    directorPosition: 'генеральный директор',
    directorName: 'Полякова Ирина Васильевна',
    registrationDate: '25.11.2015',
    inn: '7729483447',
    region: 'Москва',
    activityType: 'Деятельность в области медицины прочая, не включенная в другие группировки',
    activityTypeAdditional: 'Деятельность физкультурно-оздоровительная',
    organizationalLegalForm: 'Общества с ограниченной ответственностью',
    ownershipForm: 'Частная собственность',
    departmentAffiliation:
      'Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно',
    organizationCategory: 'Организация прочая спортивная',
    FK1Form: 'нет',
    phones: ['+7 (926) 860-09-34'],
    emails: ['grom@3sport.ru'],
    site: 'www.123.ru',
    firmSize: 'Микропредприятия',
    capital: 10000,
    years: [
      {
        year: 2022,
        employers: 3,
        income: 27214000,
        expense: 24894000,
        tax: 1632000,
        earnings: 27109000,
      },
      {
        year: 2023,
        employers: 5,
        income: 27472000,
        expense: 22171000,
        tax: 773594,
        earnings: 27425000,
      },
    ],
  },
])
const filteredSportObjects = ref([])
const activityTypes = ref([
  { name: 'Деятельность 1', value: 'Деятельность 1' },
  { name: 'Деятельность 2', value: 'Деятельность 2' },
  { name: 'Деятельность 3', value: 'Деятельность 3' },
])

const onSportObjectClick = (item) => {
  sportObject.value = item
  isDialogOpen.value = true
}
const onSearch = () => {
  filteredSportObjects.value = sportObjects.value.filter((item) =>
    item.name.toLowerCase().includes(state.searchInput.toLowerCase()),
  )
}

watchEffect(() => {
  console.log(sportObject.value)
})

onMounted(() => {
  onSearch()
})
</script>

<template>
  <!-- Главный поиск -->
  <section class="w-viewport max-w-full mx-auto px-main py-section">
    <div class="flex gap-3 flex-col md:mb-3 xl:flex-row xl:items-center xl:justify-between">
      <h1 class="max-w-max font-heading text-4xl md:text-heading uppercase leading-none">
        Реестр физкультурно-спортивных организаций
        <Info
          class="inline align-top w-6 h-6 text-main active:translate-y-px"
          role="button"
          aria-label="Подробная информация"
        />
      </h1>
      <div class="flex-auto flex gap-4 xl:justify-end">
        <div
          class="w-full md:max-w-96 rounded-full bg-bgColor shadow-button flex gap-2 items-center pr-4"
        >
          <input
            type="search"
            class="w-full py-2 px-4 rounded-full focus:outline-none"
            placeholder="Поиск по наименованию, адресу и виду спорта"
            v-model="state.searchInput"
            v-on:keyup.enter="onSearch"
          />
          <div class="search-divider"></div>
          <Button
            class="p-2 flex items-center justify-center bg-transparent border-transparent active:translate-y-px"
            @click="onSearch"
          >
            <Search class="text-icon w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
        <Button
          class="flex-none p-2 flex items-center justify-center bg-main text-textAccent rounded-2xl shadow-button active:translate-y-px border-transparent hover:bg-linkHover md:bg-bgColor md:text-icon"
          @click="isFilterShow = !isFilterShow"
          v-tooltip.top="{
            value: 'Скрыть и очистить все',
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
    <div
      v-if="isFilterShow"
      class="flex flex-col gap-4 max-md:px-main max-md:shadow-filter bg-bgColor max-md:fixed max-md:left-0 max-md:right-0 max-md:bottom-0 md:flex-wrap md:flex-row xl:justify-end"
    >
      <div class="flex gap-3 items-center py-10 md:hidden">
        <Button
          class="flex-none p-0 flex items-center justify-center bg-bgColor text-main rounded-2xl active:translate-y-px border-transparent"
          @click="isFilterShow = !isFilterShow"
        >
          <ArrowLeft class="w-6 h-6" />
        </Button>
        <h3 class="text-2xl">Фильтры</h3>
      </div>
      <Button
        rounded
        class="bg-bgColor bg-transparent border-divider xl:border-transparent xl:shadow-button flex gap-2 items-center px-4 py-2 text-textMain hover:bg-main hover:text-textAccent active:translate-y-px"
        @click="(event) => isFilterActivityTypeOpen.toggle(event)"
      >
        <span class="flex-auto text-left xl:text-center xl:flex-none">Вид деятельности</span>
        <ArrowDown class="w-6 h-6" aria-hidden="true" />
      </Button>
      <Button
        rounded
        class="bg-bgColor bg-transparent border-divider xl:border-transparent xl:shadow-button flex gap-2 items-center px-4 py-2 text-textMain hover:bg-main hover:text-textAccent active:translate-y-px"
      >
        <span class="flex-auto text-left xl:text-center xl:flex-none">Правовая форма</span>
        <ArrowDown class="w-6 h-6" aria-hidden="true" />
      </Button>
      <Button
        rounded
        class="bg-bgColor bg-transparent border-divider xl:border-transparent xl:shadow-button flex gap-2 items-center px-4 py-2 text-textMain hover:bg-main hover:text-textAccent active:translate-y-px"
      >
        <span class="flex-auto text-left xl:text-center xl:flex-none">Форма собственности</span>
        <ArrowDown class="w-6 h-6" aria-hidden="true" />
      </Button>
      <Button
        rounded
        class="bg-bgColor bg-transparent border-divider xl:border-transparent xl:shadow-button flex gap-2 items-center px-4 py-2 text-textMain hover:bg-main hover:text-textAccent active:translate-y-px"
      >
        <span class="flex-auto text-left xl:text-center xl:flex-none"
          >Ведомственная принадлежность</span
        >
        <ArrowDown class="w-6 h-6" aria-hidden="true" />
      </Button>
      <div class="flex gap-3 justify-center py-10 md:hidden">
        <Button
          class="flex-none px-12 py-2 bg-main text-textAccent text-sm rounded-full active:translate-y-px border-transparent shadow-authButton tracking-wide"
        >
          <span>Искать</span>
        </Button>
        <Button
          class="flex-none px-12 py-2 bg-bgColor text-main text-sm rounded-full active:translate-y-px border-transparent tracking-wide"
        >
          <span>Очистить</span>
        </Button>
      </div>

      <Popover ref="isFilterActivityTypeOpen">
        <div class="-m-3">
          <div class="m-2 flex gap-2 px-2 items-center rounded-xl bg-bgColor border border-divider">
            <Button
              class="flex-none p-0 flex items-center justify-center bg-transparent border-transparent active:translate-y-px"
            >
              <Search class="text-icon w-6 h-6" aria-hidden="true" />
            </Button>
            <input
              type="search"
              class="w-full py-2 rounded-2xl focus:outline-none"
              placeholder="Поиск по наименованию, адресу и виду спорта"
            />
          </div>
          <ul class="max-w-lg max-h-48 xl:max-w-none overflow-y-auto">
            <li class="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-linkHover">
              <CheckCircle class="flex-none w-5 h-5 text-icon" />
              <p>
                Растениеводство и животноводство, охота и предоставление соответствующих услуг в
                этих областях
              </p>
            </li>
            <li class="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-linkHover">
              <CheckCircle class="flex-none w-5 h-5 text-main" />
              <p>Лесоводство и лесозаготовки</p>
            </li>
            <li class="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-linkHover">
              <CheckCircle class="flex-none w-5 h-5 text-icon" />
              <p>Предоставление услуг в области добычи полезных ископаемых</p>
            </li>
            <li class="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-linkHover">
              <CheckCircle class="flex-none w-5 h-5 text-icon" />
              <p>Деятельность в области спорта</p>
            </li>
          </ul>
        </div>
      </Popover>
    </div>
  </section>
  <!-- Результаты поиска -->
  <section class="w-viewport max-w-full mx-auto px-main pb-section" aria-label="Результаты поиска">
    <p v-if="filteredSportObjects.length !== 0" class="text-center mb-10 md:text-right">
      Всего найдено: {{ filteredSportObjects.length }}
    </p>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
      <p
        v-if="filteredSportObjects.length === 0"
        class="col-span-full flex items-center justify-center gap-4"
      >
        <Search class="text-icon w-8 h-8" aria-hidden="true" />
        Не найдено ни одного объекта. <br />
        Попробуйте изменить критерии поиска
      </p>

      <!-- Карточка организации -->
      <article
        v-for="item in filteredSportObjects"
        class="p-6 pb-4 bg-bgColor shadow-card rounded-2xl flex flex-col gap-3 cursor-pointer border-icon hover:shadow-cardHover transition-shadow active:shadow-card"
        @click="() => onSportObjectClick(item)"
      >
        <div class="flex items-end gap-3">
          <Company class="flex-none w-8 h-8 text-main" aria-hidden="true" />
          <h3 class="text-xl font-medium">{{ item.name }}</h3>
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
            <p class="text-sm font-medium">{{ item.registrationDate }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>

  <Dialog
    v-model:visible="isDialogOpen"
    modal
    close-on-escape
    :pt="{
      root: 'w-[calc(100%-32px)] lg:w-full max-w-5xl m-0 max-h-[calc(100%-32px)]',
      mask: 'backdrop-blur-lg',
      header: 'px-4 pt-6 pb-5 lg:px-9 lg:pt-9',
      content: 'px-4 pb-6 pt-0 lg:px-9 lg:pb-9',
    }"
  >
    <template #header>
      <h2 class="text-modalHeading font-medium truncate">{{ sportObject.name }}</h2>
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
              <p>{{ sportObject.fullName }}</p>
            </div>
            <div class="flex flex-col gap-4 md:flex-row">
              <div class="flex-auto flex flex-col gap-4">
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">Краткое наименование организации</h3>
                  <p>{{ sportObject.name }}</p>
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
                  <p>{{ sportObject.firmSize }}</p>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">Дата регистрации</h3>
                  <p>{{ sportObject.registrationDate }}</p>
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
                  <p>{{ sportObject.ogrn }}</p>
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
                  <p>{{ sportObject.inn }}</p>
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
                  <p>{{ sportObject.capital }}</p>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">
                    Среднесписочная численность сотрудников в
                    <span class="select-yrs"
                      >2022 <ArrowDown class="inline align-top w-4 h-4 text-icon" role="button"
                    /></span>
                  </h3>
                  <p>{{ sportObject.years[0].employers }} чел.</p>
                </div>
              </div>
            </div>
            <div class="h-px bg-divider"></div>
            <h2 class="text-2xl font-medium">Руководитель</h2>
            <div class="flex items-center gap-4">
              <img class="w-16 h-16 rounded-md" :src="Avatar" alt="Фото руководителя" />
              <div>
                <h3 class="text-base capitalize-first">{{ sportObject.directorPosition }}</h3>
                <p class="text-xl">{{ sportObject.directorName }}</p>
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
              <p>{{ sportObject.activityType }}</p>
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
                <li v-for="item in sportObject.activityTypeAdditional.split(';')">
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
              <p>Общества с ограниченной ответственностью</p>
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
              <p>Частная собственность</p>
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
                Организации, учреждённые юридическими лицами или гражданами, или юридическими лицами
                и гражданами совместно
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
                <a
                  v-bind:href="'tel:' + sportObject.phones[0]"
                  class="flex w-fit items-center gap-2 border-b-2 border-b-transparent hover:border-main hover:bg-linkHover transition"
                >
                  <Telephone class="flex-none w-4 h-4 text-icon" />
                  {{ sportObject.phones[0] }}</a
                >
              </div>
              <div class="flex-auto flex flex-col">
                <h3 class="text-xs text-textSecondary">Почта</h3>
                <a
                  v-bind:href="'mailto:' + sportObject.emails[0]"
                  class="flex w-fit items-center gap-2 border-b-2 border-b-transparent hover:border-main hover:bg-linkHover transition"
                >
                  <Envelope class="flex-none w-4 h-4 text-icon" />
                  {{ sportObject.emails[0] }}</a
                >
              </div>
              <div class="flex-auto flex flex-col">
                <h3 class="text-xs text-textSecondary">Сайт в сети Интернет</h3>
                <a
                  v-bind:href="sportObject.site"
                  class="flex w-fit items-center gap-2 border-b-2 border-b-transparent hover:border-main hover:bg-linkHover transition"
                  target="_blank"
                >
                  <Website class="flex-none w-4 h-4 text-icon" />
                  {{ sportObject.site }}</a
                >
              </div>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                Юридический адрес (адрес регистрации организации)
              </h3>
              <p>{{ sportObject.address }}</p>
            </div>
            <div class="min-h-96 bg-bgSecondaryColor rounded-2xl">
              <!-- Место для карты -->
            </div>
          </section>
        </TabPanel>
        <TabPanel value="3">
          <section class="flex flex-col gap-4">
            <div>
              <h2 class="text-2xl font-medium">Финансы</h2>
              <h3 class="text-sm text-textSecondary">
                Основные показатели за
                <span class="select-yrs"
                  >2022 <ArrowDown class="inline align-top w-4 h-4 text-icon" role="button"
                /></span>
              </h3>
            </div>
            <div class="grid grid-cols-2 gap-2 lg:grid-cols-4">
              <article
                class="flex flex-col bg-bgColor rounded-2xl border border-bgSecondaryColor shadow-button gap-1 px-4 pt-4 pb-3"
              >
                <h3 class="text-xs md:text-sm font-normal text-textSecondary">Выручка, руб.</h3>
                <p class="text-lg xl:text-2xl">{{ sportObject.years[0].income }}</p>
              </article>
              <article
                class="flex flex-col bg-bgColor rounded-2xl border border-bgSecondaryColor shadow-button gap-1 px-4 pt-4 pb-3"
              >
                <h3 class="text-xs md:text-sm font-normal text-textSecondary">Налоги, руб.</h3>
                <p class="text-lg xl:text-2xl">{{ sportObject.years[0].tax }}</p>
              </article>
              <article
                class="flex flex-col bg-bgColor rounded-2xl border border-bgSecondaryColor shadow-button gap-1 px-4 pt-4 pb-3"
              >
                <h3 class="text-xs md:text-sm font-normal text-textSecondary">Расходы, руб.</h3>
                <p class="text-lg xl:text-2xl">{{ sportObject.years[0].expense }}</p>
              </article>
              <article
                class="flex flex-col bg-bgColor rounded-2xl border border-bgSecondaryColor shadow-button gap-1 px-4 pt-4 pb-3"
              >
                <h3 class="text-xs md:text-sm font-normal text-textSecondary">Доходы, руб.</h3>
                <p class="text-lg xl:text-2xl">{{ sportObject.years[0].earnings }}</p>
              </article>
            </div>
            <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[30rem]" />
          </section>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Dialog>
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
.myBtn {
  inline-size: 100px;
  height: 100px;
}
</style>
