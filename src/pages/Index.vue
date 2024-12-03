<script setup>
import { onMounted, reactive, ref } from 'vue'
import Dialog from 'primevue/dialog'
import Popover from 'primevue/popover'

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
    name: 'ООО «3СПОРТ»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address:
      '105082, г.Москва, вн.тёр.г. муниципальный округ Басманный, пл Спартаковская, д.10, стр.12 (Бизнес-центр «Флеш Ланж 10с12»)',
    ogrn: '1127746355670',
    registrationDate: '04.05.2012',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      { year: 2022, count: 3 },
      { year: 2023, count: 2 },
      { year: 2024, count: 4 },
    ],
  },
  {
    name: 'АНО «КЛУБ «САМБО-80»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address: '105064, г.Москва, ул. Земляной вал, д.36',
    ogrn: '1087799026193',
    registrationDate: '11.06.2008',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      { year: 2022, count: 3 },
      { year: 2023, count: 2 },
      { year: 2024, count: 4 },
    ],
  },
  {
    name: 'АНО «ПБЛ»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address: '105066, г.Москва, муниципальный округ Басманный, пер Токмаков, д. 16,стр. 2',
    ogrn: '1127799014155',
    registrationDate: '23.07.2012',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      { year: 2022, count: 3 },
      { year: 2023, count: 2 },
      { year: 2024, count: 4 },
    ],
  },
  {
    name: 'АНО «ЦРД «БГ КОДОКАН»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address: '101000, г.Москва, ул Покровка, д. 41, стр. 1',
    ogrn: '1077799021530',
    registrationDate: '26.09.2007',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      { year: 2022, count: 3 },
      { year: 2023, count: 2 },
      { year: 2024, count: 4 },
    ],
  },
  {
    name: 'АНО РИВС «Ноев ковчег»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address: '105005, г.Москва, пер. Технический, д.2, пом. № 3',
    ogrn: '1117799004531',
    registrationDate: '15.03.2011',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      { year: 2022, count: 3 },
      { year: 2023, count: 2 },
      { year: 2024, count: 4 },
    ],
  },
  {
    name: 'АССОЦИАЦИЯ «МСКЛП «СТРАННИК»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address: '105005, г.москва, ул. Бауманская, д. 20, стр. 7, этаж 1 пом. ii, часть комн. 40',
    ogrn: '1057748621260',
    registrationDate: '14.10.2005',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      { year: 2022, count: 3 },
      { year: 2023, count: 2 },
      { year: 2024, count: 4 },
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
  console.log(state.searchInput)
  filteredSportObjects.value = sportObjects.value.filter((item) =>
    item.name.toLowerCase().includes(state.searchInput.toLowerCase()),
  )
}

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
      <!-- TODO нет карточек -->
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
    pt:root="max-w-5xl w-full"
    pt:mask="backdrop-blur-lg"
    pt:header="lg:px-9 pt-9 pb-5"
    pt:content="lg:px-9 pt-0 pb-9"
  >
    <template #header>
      <h2 class="text-modalHeading font-medium">{{ sportObject.name }}</h2>
    </template>

    <template #closeicon>
      <CloseModal class="w-8 h-8 text-main" />
    </template>

    <Tabs :value="tabValue" scrollable>
      <TabList>
        <Tab value="0"><span class="text-sm font-normal">Общие сведения</span></Tab>
        <Tab value="1"><span class="text-sm font-normal">Характеристики</span></Tab>
        <Tab value="2"><span class="text-sm font-normal">Контакты</span></Tab>
        <Tab value="3"><span class="text-sm font-normal">Финансы</span></Tab>
      </TabList>
      <TabPanels>
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
                    <Info class="inline align-top w-4 h-4 text-main" role="button" />
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
                    <Info class="inline align-top w-4 h-4 text-main" role="button" />
                  </h3>
                  <p>{{ sportObject.ogrn }}</p>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">
                    ОГРН
                    <Info class="inline align-top w-4 h-4 text-main" role="button" />
                  </h3>
                  <p>{{ sportObject.inn }}</p>
                </div>
                <div class="flex flex-col">
                  <h3 class="text-xs text-textSecondary">
                    Уставный капитал, руб.
                    <Info class="inline align-top w-4 h-4 text-main" role="button" />
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
                  <p>3 чел.</p>
                </div>
              </div>
            </div>
            <div class="h-px bg-divider"></div>
            <h2 class="text-2xl font-medium">Руководитель</h2>
            <div class="flex items-center gap-4">
              <img class="w-16 h-16 rounded-md" :src="Avatar" alt="Фото руководителя" />
              <div>
                <h3 class="text-base">Генеральный директор</h3>
                <p class="text-xl">Громов Михаил Николаевич</p>
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
                <Info class="inline align-top w-4 h-4 text-main" role="button" />
              </h3>
              <p>Деятельность в области спорта</p>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                ОКВЭД дополнительный
                <Info class="inline align-top w-4 h-4 text-main" role="button" />
              </h3>
              <ul class="list-disc pl-6">
                <li>Торговля розничная спортивной одежой в специализированных магазинах</li>
                <li>Производство пищевой продукции для питания спортсменов</li>
                <li>
                  Производство спортивных костюмов, лыжных костюмов, купальных костюмов и прочей
                  трикотажной или вязаной одежды
                </li>
                <li>Производство спортивной обуви</li>
                <li>Торговля оптовая спортивными товарами, включая велосипеды</li>
                <li>
                  Торговля розничная спортивным оборудованием и спортивными товарами
                  в специализированных магазинах
                </li>
                <li>Торговля розничная спортивной одеждой в специализированных магазинах</li>
                <li>Прокат и аренда товаров для отдыха и спортивных товаров</li>
                <li>Деятельность спортивных объектов</li>
                <li>Деятельность спортивных клубов</li>
                <li>Деятельность фитнес-центров</li>
                <li>Ремонт спортивного и туристского оборудования</li>
                <li>Деятельность физкультурно — оздоровительная</li>
                <li>Деятельность в области спорта прочая</li>
              </ul>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                Организационно-правовая форма
                <Info class="inline align-top w-4 h-4 text-main" role="button" />
              </h3>
              <p>Общества с ограниченной ответственностью</p>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                Форма собственности
                <Info class="inline align-top w-4 h-4 text-main" role="button" />
              </h3>
              <p>Частная собственность</p>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                Ведомственная принадлежность
                <Info class="inline align-top w-4 h-4 text-main" role="button" />
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
            <div class="flex flex-wrap gap-4">
              <div class="flex-auto flex flex-col">
                <h3 class="text-xs text-textSecondary">Телефон</h3>
                <a href="tel:+79268600934" class="flex items-center gap-2">
                  <Telephone class="flex-none w-4 h-4 text-icon" />
                  +7 926 860-09-34</a
                >
              </div>
              <div class="flex-auto flex flex-col">
                <h3 class="text-xs text-textSecondary">Почта</h3>
                <a href="mailto:grom@3sport.org" class="flex items-center gap-2">
                  <Envelope class="flex-none w-4 h-4 text-icon" />
                  grom@3sport.org</a
                >
              </div>
              <div class="flex-auto flex flex-col">
                <h3 class="text-xs text-textSecondary">Сайт в сети Интернет</h3>
                <a href="mailto:grom@3sport.org" class="flex items-center gap-2">
                  <Website class="flex-none w-4 h-4 text-icon" />
                  www.test.ru</a
                >
              </div>
            </div>
            <div class="flex flex-col">
              <h3 class="text-xs text-textSecondary">
                Юридический адрес (адрес регистрации организации)
              </h3>
              <p>
                105082, г. Москва, вн.тёр.г. муниципальный округ Басманный, пл. Спартаковская,
                д. 10, стр. 12 (Бизнес-центр «Флеш Ланж 10с12»)
              </p>
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
                <p class="text-lg xl:text-2xl">90 041 000</p>
              </article>
              <article
                class="flex flex-col bg-bgColor rounded-2xl border border-bgSecondaryColor shadow-button gap-1 px-4 pt-4 pb-3"
              >
                <h3 class="text-xs md:text-sm font-normal text-textSecondary">Налоги, руб.</h3>
                <p class="text-lg xl:text-2xl">1 784 494</p>
              </article>
              <article
                class="flex flex-col bg-bgColor rounded-2xl border border-bgSecondaryColor shadow-button gap-1 px-4 pt-4 pb-3"
              >
                <h3 class="text-xs md:text-sm font-normal text-textSecondary">Расходы, руб.</h3>
                <p class="text-lg xl:text-2xl">80 926 000</p>
              </article>
              <article
                class="flex flex-col bg-bgColor rounded-2xl border border-bgSecondaryColor shadow-button gap-1 px-4 pt-4 pb-3"
              >
                <h3 class="text-xs md:text-sm font-normal text-textSecondary">Доходы, руб.</h3>
                <p class="text-lg xl:text-2xl">92 823 000</p>
              </article>
            </div>
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
  @apply text-main cursor-pointer active:translate-y-px;
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
