import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import {definePreset} from "@primevue/themes";
import Aura from '@primevue/themes/aura';
import Material from '@primevue/themes/material';
import Nora from '@primevue/themes/nora';
import Lara from '@primevue/themes/lara';
import Tooltip from 'primevue/tooltip';

import App from './App.vue'
import router from './router'

import './styles/style.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

const MyPreset = definePreset(Material, {
  semantic: {
    primary: {
      50: '#6366F1',
      100: '#6366F1',
      200: '#6366F1',
      300: '#6366F1',
      400: '#6366F1',
      500: '#6366F1',
      600: '#6366F1',
      700: '#6366F1',
      800: '#6366F1',
      900: '#6366F1',
      950: '#6366F1'
    },
  }
});

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  ripple: true,
  locale: {
    "accept": "Да",
    "addRule": "Добавить правило",
    "am": "до полудня",
    "apply": "Принять",
    "cancel": "Отмена",
    "choose": "Выбрать",
    "chooseDate": "Выбрать дату",
    "chooseMonth": "Выбрать месяц",
    "chooseYear": "Выбрать год",
    "clear": "Очистить",
    "completed": "Завершено",
    "contains": "Содержит",
    "custom": "Пользовательский",
    "dateAfter": "Дата после",
    "dateBefore": "Дата до",
    "dateFormat": "dd.mm.yy",
    "dateIs": "Дата равна",
    "dateIsNot": "Дата не равна",
    "dayNames": [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота"
    ],
    "dayNamesMin": [
      "Вс",
      "Пн",
      "Вт",
      "Ср",
      "Чт",
      "Пт",
      "Сб"
    ],
    "dayNamesShort": [
      "Вск",
      "Пнд",
      "Втр",
      "Срд",
      "Чтв",
      "Птн",
      "Сбт"
    ],
    "emptyFilterMessage": "Результатов не найдено",
    "emptyMessage": "Нет доступных вариантов",
    "emptySearchMessage": "Результатов не найдено",
    "emptySelectionMessage": "Нет выбранного элемента",
    "endsWith": "Заканчивается",
    "equals": "Равно",
    "fileSizeTypes": [
      "Б",
      "Кб",
      "Мб",
      "Гб",
      "Тб",
      "Пб",
      "Эб",
      "Зб",
      "Йб"
    ],
    "filter": "Фильтр",
    "firstDayOfWeek": 1,
    "gt": "Более чем",
    "gte": "Более чем или равно",
    "lt": "Меньше чем",
    "lte": "Меньше чем или равно",
    "matchAll": "Сопоставить все",
    "matchAny": "Совпадение с любым",
    "medium": "Нормальный",
    "monthNames": [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ],
    "monthNamesShort": [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек"
    ],
    "nextDecade": "Следующее десятилетие",
    "nextHour": "Следующий час",
    "nextMinute": "Следующая минута",
    "nextMonth": "Следующий месяц",
    "nextSecond": "Следующая секунда",
    "nextYear": "Следующий год",
    "noFilter": "Нет фильтра",
    "notContains": "Не содержит",
    "notEquals": "Не равно",
    "now": "Сейчас",
    "passwordPrompt": "Введите пароль",
    "pending": "В ожидании",
    "pm": "после полудня",
    "prevDecade": "Предыдущее десятилетие",
    "prevHour": "Предыдущий час",
    "prevMinute": "Предыдущая минута",
    "prevMonth": "Предыдущий месяц",
    "prevSecond": "Предыдущая секунда",
    "prevYear": "Предыдущий год",
    "reject": "Нет",
    "removeRule": "Удалить правило",
    "searchMessage": "{0} результатов доступно",
    "selectionMessage": "{0} элементов выбрано",
    "showMonthAfterYear": false,
    "startsWith": "Начинается с",
    "strong": "Хороший",
    "today": "Сегодня",
    "upload": "Загрузить",
    "weak": "Простой",
    "weekHeader": "Нед.",
    "aria": {
      "cancelEdit": "Отменить правку",
      "close": "Закрыть",
      "collapseLabel": "Свернуть",
      "collapseRow": "Свернуть строку",
      "editRow": "Редактировать строку",
      "expandLabel": "Развернуть",
      "expandRow": "Развернуть строку",
      "falseLabel": "Неверно",
      "filterConstraint": "Ограничение фильтра",
      "filterOperator": "Оператор фильтра",
      "firstPageLabel": "Первая страница",
      "gridView": "В виде сетки",
      "hideFilterMenu": "Скрыть меню фильтра",
      "jumpToPageDropdownLabel": "Перейти к раскрывающемуся списку страниц",
      "jumpToPageInputLabel": "Перейти к вводу страницы",
      "lastPageLabel": "Последняя страница",
      "listView": "В виде списка",
      "moveAllToSource": "Переместить всё в источник",
      "moveAllToTarget": "Переместить всё в приёмник",
      "moveBottom": "Переместить в конец",
      "moveDown": "Переместить вниз",
      "moveTop": "Переместить в начало",
      "moveToSource": "Переместить в источник",
      "moveToTarget": "Переместить в приёмник",
      "moveUp": "Переместить вверх",
      "navigation": "Навигация",
      "next": "Следующий",
      "nextPageLabel": "Следующая страница",
      "nullLabel": "Не выбран",
      "otpLabel": "Введите символ одноразового пароля {0}",
      "pageLabel": "{page}",
      "passwordHide": "Скрыть пароль",
      "passwordShow": "Показать пароль",
      "previous": "Предыдущий",
      "previousPageLabel": "Предыдущая страница",
      "removeLabel": "Удалить",
      "rotateLeft": "Повернуть влево",
      "rotateRight": "Повернуть вправо",
      "rowsPerPageLabel": "Строк на странице",
      "saveEdit": "Сохранить правку",
      "scrollTop": "Прокрутить в начало",
      "selectAll": "Выбрать все строки",
      "selectLabel": "Выбрать",
      "selectRow": "Выбрать строку",
      "showFilterMenu": "Показать меню фильтра",
      "slide": "Слайд",
      "slideNumber": "{slideNumber}",
      "star": "1 звезда",
      "stars": "{star} звёзд",
      "trueLabel": "Верно",
      "unselectAll": "Отменить выбор всех строк",
      "unselectLabel": "Отменить выбор",
      "unselectRow": "Отменить выбор строки",
      "zoomImage": "Увеличить изображение",
      "zoomIn": "Увеличить",
      "zoomOut": "Уменьшить"
    },
  },
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: '.dark',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
});

app.directive('tooltip', Tooltip);

app.mount('#app')
