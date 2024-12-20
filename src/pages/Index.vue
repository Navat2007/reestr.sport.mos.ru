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
const sportObjects = ref([
  {
    reestrNumber: 259590,
    ogrn: '1025000656185',
    alterName: 'ФГАУ «ОЗДОРОВИТЕЛЬНЫЙ КОМПЛЕКС «ДЕСНА»',
    fullName:
      'ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ АВТОНОМНОЕ УЧРЕЖДЕНИЕ «ОЗДОРОВИТЕЛЬНЫЙ КОМПЛЕКС «ДЕСНА» УПРАВЛЕНИЯ ДЕЛАМИ ПРЕЗИДЕНТА РОССИЙСКОЙ ФЕДЕРАЦИИ',
    name: 'ФГАУ «ОЗДОРОВИТЕЛЬНЫЙ КОМПЛЕКС «ДЕСНА»',
    address: '108803, г. Москва, Воскресенское пос., км. Калужское Ш 32-Й, домовладение 1 стр. 1',
    coordinates: { lat: 55.521827, lon: 37.406585 },
    directorPosition: 'Генеральный директор',
    directorName: 'Афанасьев Максим Павлович',
    registrationDate: '27.09.1994',
    inn: '5003006930',
    region: 'г. Москва',
    activityType: 'Деятельность по предоставлению мест для краткосрочного проживания',
    activityTypeAdditional:
      'Деятельность спортивных объектов; Деятельность физкультурно-оздоровительная; Прокат и аренда товаров для отдыха и спортивных товаров',
    organizationalLegalForm: 'Федеральные государственные автономные учреждения',
    ownershipForm: 'Федеральная собственность',
    departmentAffiliation:
      'Управление делами Президента Российской Федерации (федеральное агентство)',
    organizationCategory: 'Орган исполнительной власти РФ прочие',
    FK1Form: '',
    phones: [
      '+7 (495) 6593220',
      '+7 (495) 6594268',
      '+7 (495) 6594348',
      '+7 (495) 6594378',
      '+7 (495) 6594393',
      '+7 (495) 6594452',
      '+7 (495) 6594389',
      '+7 (495) 6594200',
      '+7 (495) 6594220',
      '+7 (495) 6594310',
      '+7 (495) 6594376',
      '+7 (495) 6594392',
      '+7 (495) 6594417',
    ],
    emails: ['desna@mail.ru', 'parkavenue@bk.ru', 'voskresenskoe@inbox.ru', 'vsk-hotel@mail.ru'],
    sites: ['www.desna-udp.ru'],
    firmSize: '',
    capital: '',
    years: [
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
    ],
  },
  {
    reestrNumber: 254123,
    ogrn: '1025003750628',
    alterName: 'ГБОУ ШКОЛА № 2057',
    fullName:
      'ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБЩЕОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ГОРОДА МОСКВЫ «ШКОЛА № 2057»',
    name: 'ГБОУ ШКОЛА № 2057',
    address: '108804, г. Москва, Кокошкино п, дп. Кокошкино, ул. Дачная, д. 3А',
    coordinates: { lat: 55.597821, lon: 37.160797 },
    directorPosition: 'Директор',
    directorName: 'Кусакина Светлана Николаевна',
    registrationDate: '06.12.1996',
    inn: '773172828276',
    region: 'г. Москва',
    activityType: 'Образование среднее общее',
    activityTypeAdditional:
      'Деятельность спортивных объектов; Деятельность в области спорта прочая; Деятельность физкультурно-оздоровительная',
    organizationalLegalForm: 'Государственные бюджетные учреждения субъектов Российской Федерации',
    ownershipForm: 'Собственность субъектов Российской Федерации',
    departmentAffiliation:
      'Органы власти субъектов Российской Федерации, осуществляющие функции в области образования и науки',
    organizationCategory: 'Орган исполнительной власти РФ прочие',
    FK1Form: '',
    phones: [
      '+7 (495) 8478457',
      '+7 (495) 8458557',
      '+7 (495) 8458906',
      '+7 (495) 8478661',
      '+7 (49634) 78557',
      '+7 (903) 6663582',
      '+7 (909) 1501795',
      '+7 (916) 7333210',
      '+7 (929) 6091840',
      '+7 (965) 2473550',
    ],
    emails: [
      '2057@edu.mos.ru',
      'contract2059@mail.ru',
      'pluzhnikova-taty@mail.ru',
      'tanya.sviridova2010@yandex.ru',
    ],
    sites: ['sch2057.mskobr.ru'],
    firmSize: '',
    capital: '',
    years: [
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
    ],
  },
  {
    reestrNumber: 254129,
    ogrn: '1025006034701',
    alterName: 'МАОУ «ГИМНАЗИЯ Г.ТРОИЦКА»',
    fullName: 'МУНИЦИПАЛЬНОЕ АВТОНОМНОЕ ОБЩЕОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ «ГИМНАЗИЯ Г.ТРОИЦКА»',
    name: 'МАОУ «ГИМНАЗИЯ Г.ТРОИЦКА»',
    address: '108840, г. Москва, г. Троицк, проспект Октябрьский, д. 6',
    coordinates: { lat: 55.472291, lon: 37.294502 },
    directorPosition: 'Директор',
    directorName: 'Веригина Наталия Алексеевна',
    registrationDate: '14.02.1994',
    inn: '507402514242',
    region: 'г. Москва',
    activityType: 'Образование основное общее',
    activityTypeAdditional:
      'Деятельность в области спорта прочая; Деятельность физкультурно-оздоровительная',
    organizationalLegalForm: 'Муниципальные автономные учреждения',
    ownershipForm: 'Муниципальная собственность',
    departmentAffiliation: 'Муниципальные организации',
    organizationCategory: 'Муниципалитеты',
    FK1Form: '',
    phones: [
      '+7 (495) 8510389',
      '+7 (495) 8510641',
      '+7 (495) 8510822',
      '+7 (495) 8512226',
      '+7 (495) 8512389',
      '+7 (495) 8512644',
      '+7 (495) 8512848',
      '+7 (495) 8514027',
      '+7 (495) 8514064',
      '+7 (495) 8519793',
      '+7 (49675) 10389',
      '+7 (903) 7358123',
      '+7 (910) 4156920',
      '+7 (916) 1420703',
      '+7 (916) 8380238',
    ],
    emails: ['gurova@gym.trtk.ru', 'gymtr@edu.mos.ru', 'markova@gym.trtk.ru'],
    sites: ['gymtroitska.mskobr.ru'],
    firmSize: '',
    capital: '',
    years: [
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
    ],
  },
  {
    reestrNumber: 254130,
    ogrn: '1025006034723',
    alterName: 'МАОУ «ГИМНАЗИЯ ИМ. Н.В. ПУШКОВА»',
    fullName:
      'МУНИЦИПАЛЬНОЕ АВТОНОМНОЕ ОБЩЕОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ «ГИМНАЗИЯ ИМЕНИ Н.В. ПУШКОВА»',
    name: 'МАОУ «ГИМНАЗИЯ ИМ. Н.В. ПУШКОВА»',
    address: '108840, г. Москва, г. Троицк, ул. Школьная, д. 10',
    coordinates: { lat: 55.474362, lon: 37.300808 },
    directorPosition: 'Директор',
    directorName: 'Тимошенко Наталья Анатольевна',
    registrationDate: '28.05.1996',
    inn: '507401291508',
    region: 'г. Москва',
    activityType: 'Образование основное общее',
    activityTypeAdditional:
      'Деятельность в области спорта прочая; Деятельность физкультурно-оздоровительная',
    organizationalLegalForm: 'Муниципальные автономные учреждения',
    ownershipForm: 'Муниципальная собственность',
    departmentAffiliation: 'Муниципальные организации',
    organizationCategory: 'Муниципалитеты',
    FK1Form: '',
    phones: [
      '+7 (495) 8510311',
      '+7 (495) 8510548',
      '+7 (495) 8511767',
      '+7 (495) 8513161',
      '+7 (49675) 10311',
      '+7 (903) 6155961',
      '+7 (905) 5514660',
      '+7 (905) 7736285',
    ],
    emails: [
      'elsnit@mail.ru',
      'gimnvp@mail.ru',
      'gtimofieieva@bk.ru',
      'gympushkova@edu.mos.ru',
      'tatiana-savinova@rambler.ru',
    ],
    sites: ['gympushkova.mskobr.ru'],
    firmSize: '',
    capital: '',
    years: [
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
    ],
  },
  {
    reestrNumber: 219564,
    ogrn: '1025006034900',
    alterName: 'МАУ ДО ДЮСШ-2',
    fullName:
      'МУНИЦИПАЛЬНОЕ АВТОНОМНОЕ УЧРЕЖДЕНИЕ ДОПОЛНИТЕЛЬНОГО ОБРАЗОВАНИЯ «ДЕТСКО-ЮНОШЕСКАЯ СПОРТИВНАЯ ШКОЛА-2»',
    name: 'МАУ ДО ДЮСШ-2',
    address: '108841, г. Москва, г. Троицк, микрорайон В, д. 6А',
    coordinates: { lat: 55.487764, lon: 37.295616 },
    directorPosition: 'Директор',
    directorName: 'Юдин Андрей Юрьевич',
    registrationDate: '25.01.2001',
    inn: '5046060805',
    region: 'г. Москва',
    activityType: 'Образование дополнительное детей и взрослых',
    activityTypeAdditional:
      'Деятельность спортивных объектов; Деятельность в области спорта прочая',
    organizationalLegalForm: 'Муниципальные автономные учреждения',
    ownershipForm: 'Муниципальная собственность',
    departmentAffiliation: 'Муниципальные организации',
    organizationCategory: 'Муниципалитеты',
    FK1Form: '',
    phones: [
      '+7 (495) 8510692',
      '+7 (495) 8512190',
      '+7 (495) 8512438',
      '+7 (495) 8512622',
      '+7 (495) 8514067',
      '+7 (495) 8515050',
      '+7 (495) 8516047',
      '+7 (4967) 404594',
      '+7 (49675) 16047',
      '+7 (916) 9794729',
      '+7 (968) 0138401',
    ],
    emails: ['dush2@edu.mos.ru', 'dussh2@list.ru'],
    sites: ['dusash2tn.mskobr.ru'],
    firmSize: '',
    capital: '',
    years: [
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
    ],
  },
  {
    reestrNumber: 254131,
    ogrn: '1025006036263',
    alterName: 'МАОУ «ЛИЦЕЙ ГОРОДА ТРОИЦКА»',
    fullName: 'МУНИЦИПАЛЬНОЕ АВТОНОМНОЕ ОБЩЕОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ «ЛИЦЕЙ ГОРОДА ТРОИЦКА»',
    name: 'МАОУ «ЛИЦЕЙ ГОРОДА ТРОИЦКА»',
    address: '108840, г. Москва, г. Троицк, ул. Школьная, д. 10А',
    coordinates: { lat: 55.475368, lon: 37.300808 },
    directorPosition: 'Директор',
    directorName: 'Зюзикова Юлия Мардарьевна',
    registrationDate: '25.05.1996',
    inn: '504600995768',
    region: 'г. Москва',
    activityType: 'Образование основное общее',
    activityTypeAdditional: 'Деятельность физкультурно-оздоровительная',
    organizationalLegalForm: 'Муниципальные автономные учреждения',
    ownershipForm: 'Муниципальная собственность',
    departmentAffiliation: 'Муниципальные организации',
    organizationCategory: 'Муниципалитеты',
    FK1Form: '',
    phones: [
      '+7 (495) 8510056',
      '+7 (495) 8510639',
      '+7 (495) 8510674',
      '+7 (495) 8511056',
      '+7 (495) 8513111',
      '+7 (495) 8513449',
      '+7 (495) 8514015',
      '+7 (495) 8515052',
      '+7 (495) 8519808',
      '+7 (49675) 10056',
      '+7 (903) 7399400',
      '+7 (909) 9078822',
      '+7 (916) 4878733',
    ],
    emails: [
      'akimova-msk@yandex.ru',
      'arkimilena@yandex.ru',
      'lrumyanzeva@gmail.com',
      'lyceum@trtk.ru',
      'lyctroicka@edu.mos.ru',
      'pipko_en@trlyceum.ru',
      'trlyceum@gmail.com',
      'vedeneeva.76@bk.ru',
    ],
    sites: ['lyctroicka.mskobr.ru'],
    firmSize: '',
    capital: '',
    years: [
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
    ],
  },
  {
    reestrNumber: 259938,
    ogrn: '1025007510043',
    alterName: 'МБУ «СПОРТИВНЫЙ КОМПЛЕКС «ВОРОНОВО»',
    fullName: 'МУНИЦИПАЛЬНОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ «СПОРТИВНЫЙ КОМПЛЕКС «ВОРОНОВО»',
    name: 'МБУ «СПОРТИВНЫЙ КОМПЛЕКС «ВОРОНОВО»',
    address: '108830, г. Москва, Вороновское пос., пос. Лмс, микрорайон Центральный, д. 40 к. 1',
    coordinates: { lat: 55.312573, lon: 37.181728 },
    directorPosition: 'Директор',
    directorName: 'Володин Алексей Николаевич',
    registrationDate: '02.09.2002',
    inn: '5074024492',
    region: 'г. Москва',
    activityType: 'Деятельность спортивных объектов',
    activityTypeAdditional: 'Деятельность в области спорта прочая',
    organizationalLegalForm: 'Муниципальные бюджетные учреждения',
    ownershipForm: 'Муниципальная собственность',
    departmentAffiliation: 'Муниципальные организации',
    organizationCategory: 'Муниципалитеты',
    FK1Form: '',
    phones: [
      '+7 (916) 7697130',
      '+7 (926) 0876864',
      '+7 (495) 5924678',
      '+7 (495) 5924776',
      '+7 (495) 8506686',
      '+7 (49675) 06686',
    ],
    emails: [''],
    sites: ['skvoronovo.ru'],
    firmSize: '',
    capital: '',
    years: [
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
    ],
  },
  {
    reestrNumber: 254149,
    ogrn: '1025007515510',
    alterName: 'ГБОУ ШКОЛА № 2120',
    fullName:
      'ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБЩЕОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ГОРОДА МОСКВЫ «ШКОЛА № 2120»',
    name: 'ГБОУ ШКОЛА № 2120',
    address: '108811, г. Москва, Московский пос., г. Московский, ул. Атласова, д. 7 корп. 3',
    coordinates: { lat: 55.600781, lon: 37.360295 },
    directorPosition: 'Директор',
    directorName: 'Ланщиков Дмитрий Николаевич',
    registrationDate: '30.09.1999',
    inn: '643964884563',
    region: 'г. Москва',
    activityType: 'Образование среднее общее',
    activityTypeAdditional:
      'Деятельность спортивных объектов; Деятельнось спортивных клубов; Деятельность в области спорта прочая; Деятельность физкультурно-оздоровительная',
    organizationalLegalForm: 'Государственные бюджетные учреждения субъектов Российской Федерации',
    ownershipForm: 'Собственность субъектов Российской Федерации',
    departmentAffiliation:
      'Органы власти субъектов Российской Федерации, осуществляющие функции в области образования и науки',
    organizationCategory: 'Орган исполнительной власти РФ прочие',
    FK1Form: '',
    phones: [
      '+7 (495) 8670770',
      '+7 (985) 3100556',
      '+7 (985) 7642317',
      '+7 (495) 8670232',
      '+7 (495) 9785565',
      '+7 (916) 6467715',
      '+7 (916) 8212310',
      '+7 (925) 8381030',
    ],
    emails: [
      '2120@edu.mos.ru',
      'luadmila.volkova@gmail.com',
      'natalyzubarev@yandex.ru',
      'sergeevama78@mail.ru',
    ],
    sites: ['http://sch2120tn.mskobr.ru', 'sch4tn.mskobr.ru'],
    firmSize: '',
    capital: '',
    years: [
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
    ],
  },
  {
    reestrNumber: 225251,
    ogrn: '1025007515521',
    alterName: 'МАУ ДО СШ',
    fullName:
      'МУНИЦИПАЛЬНОЕ АВТОНОМНОЕ УЧРЕЖДЕНИЕ ДОПОЛНИТЕЛЬНОГО ОБРАЗОВАНИЯ ГОРОДСКОГО ОКРУГА ЩЕРБИНКА В ГОРОДЕ МОСКВЕ СПОРТИВНАЯ ШКОЛА',
    name: 'МАУ ДО СШ',
    address: '108851, г. Москва, г. Щербинка, ул. Новостроевская, д. 4',
    coordinates: { lat: 55.505506, lon: 37.559281 },
    directorPosition: 'Директор',
    directorName: 'Шашкин Константин Анатольевич',
    registrationDate: '27.04.1998',
    inn: '5051005493',
    region: 'г. Москва',
    activityType: 'Деятельность спортивных объектов',
    activityTypeAdditional:
      'Деятельнось спортивных клубов; Деятельность в области спорта прочая; Образование в области спорта и отдыха',
    organizationalLegalForm: 'Муниципальные бюджетные учреждения',
    ownershipForm: 'Муниципальная собственность',
    departmentAffiliation: 'Муниципальные организации',
    organizationCategory: 'Муниципалитеты',
    FK1Form: '',
    phones: [
      '+7 (495) 8494655',
      '+7 (49676) 71008',
      '+7 (916) 6488923',
      '+7 (916) 7244414',
      '+7 (925) 0002216',
      '+7 (963) 6999158',
    ],
    emails: ['dush@edu.mos.ru', 'dusshsch@yandex.ru', 'sportsherbinka@yandex.ru'],
    sites: ['dusashch.mskobr.ru'],
    firmSize: '',
    capital: '',
    years: [
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
      {
        year: '',
        employers: '',
        income: '',
        expense: '',
        tax: '',
        earnings: '',
      },
    ],
  },
])

const activityTypes = computed(() => {
  let array = []

  sportObjects.value.map((sportObject) => {
    if (!array.includes(sportObject.activityType)) {
      array.push(sportObject.activityType)
    }
  })

  array.sort()

  return array
})
const organizationalLegalForms = computed(() => {
  let array = []

  sportObjects.value.map((sportObject) => {
    if (!array.includes(sportObject.organizationalLegalForm)) {
      array.push(sportObject.organizationalLegalForm)
    }
  })

  array.sort()

  return array
})
const ownershipForms = computed(() => {
  let array = []

  sportObjects.value.map((sportObject) => {
    if (!array.includes(sportObject.ownershipForm)) {
      array.push(sportObject.ownershipForm)
    }
  })

  array.sort()

  return array
})
const departmentAffiliations = computed(() => {
  let array = []

  sportObjects.value.map((sportObject) => {
    if (!array.includes(sportObject.departmentAffiliation)) {
      array.push(sportObject.departmentAffiliation)
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

const onSportObjectClick = (data) => {
  if (!data.years.find((item) => item.year === sportObjectCurrentYear.value)) {
    sportObjectCurrentYear.value = Math.max(...data.years.map((item) => item.year))
  }

  chartData.value = setChartData(data)

  sportObject.value = data
  isDialogOpen.value = true
}
const onSearch = () => {
  filteredSportObjects.value = sportObjects.value
    .filter(
      (item) =>
        item.name.toLowerCase().includes(state.searchInput.toLowerCase()) ||
        item.address.toLowerCase().includes(state.searchInput.toLowerCase()),
    )
    .filter(
      (item) =>
        selectedActivityTypes.value.length === 0 ||
        selectedActivityTypes.value.includes(item.activityType),
    )
    .filter(
      (item) =>
        selectedOrganizationalLegalForms.value.length === 0 ||
        selectedOrganizationalLegalForms.value.includes(item.organizationalLegalForm),
    )
    .filter(
      (item) =>
        selectedOwnershipForms.value.length === 0 ||
        selectedOwnershipForms.value.includes(item.ownershipForm),
    )
    .filter(
      (item) =>
        selectedDepartmentAffiliations.value.length === 0 ||
        selectedDepartmentAffiliations.value.includes(item.departmentAffiliation),
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

onMounted(() => {
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
              <p>{{ sportObject.organizationalLegalForm }}</p>
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
              <p>{{ sportObject.ownershipForm }}</p>
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
                {{ sportObject.departmentAffiliation }}
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
                  v-for="phone in sportObject.phones"
                  v-bind:href="'tel:' + phone"
                  class="flex w-fit items-center gap-2 border-b-2 border-b-transparent hover:border-main hover:bg-linkHover transition"
                >
                  <Telephone class="flex-none w-4 h-4 text-icon" />
                  {{ phone }}</a
                >
              </div>
              <div class="flex-auto flex flex-col">
                <h3 class="text-xs text-textSecondary">Почта</h3>
                <a
                  v-for="email in sportObject.emails"
                  v-bind:href="'mailto:' + email"
                  class="flex w-fit items-center gap-2 border-b-2 border-b-transparent hover:border-main hover:bg-linkHover transition"
                >
                  <Envelope class="flex-none w-4 h-4 text-icon" />
                  {{ email }}</a
                >
              </div>
              <div class="flex-auto flex flex-col">
                <h3 class="text-xs text-textSecondary">Сайт в сети Интернет</h3>
                <a
                  v-for="site in sportObject.sites"
                  v-bind:href="site"
                  class="flex w-fit items-center gap-2 border-b-2 border-b-transparent hover:border-main hover:bg-linkHover transition"
                >
                  <Website class="flex-none w-4 h-4 text-icon" />
                  {{ site }}</a
                >
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
              :lon="sportObject.coordinates.lon"
              :lat="sportObject.coordinates.lat"
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
