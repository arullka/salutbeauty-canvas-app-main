function getImagePath(category, theme, filename) {
  return `/images/${category}/${theme}/${filename}`;
}
export const ITEMS_DATABASE = [
  // ОБРАЗ - ВЕЧЕРИНКА
  {
    id: '1',
    category: 'outfit',
    theme: 'party',
    name: 'Блестящее платье-мини',
    description: '',
    image: getImagePath('outfit', 'party', 'black-dress.jpg'),
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/585298722/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/homMkMw' },
    ]
  },
  {
    id: '2',
    category: 'outfit',
    theme: 'party',
    name: 'Кожаный топ',
    description: '',
    image: getImagePath('outfit', 'party', 'white-top.jpg'),
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/303523921/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/wG8u2Yr' },
    ]
  },
  {
    id: '3',
    category: 'outfit',
    theme: 'party',
    name: 'Кожаные брюки',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/171031458/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/AFtRLyX' },
    ]
  },
  {
    id: '4',
    category: 'outfit',
    theme: 'party',
    name: 'Туфли',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/211671986/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/BYClETx' },
    ]
  },
  {
    id: '5',
    category: 'outfit',
    theme: 'party',
    name: 'Кеды',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/342441320/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/QimnsEE' },
    ]
  },

  // ОБРАЗ - РАБОТА
  {
    id: '6',
    category: 'outfit',
    theme: 'work',
    name: 'Белая блузка',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/458575854/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/Vaj1vdr' },
    ]
  },
  {
    id: '7',
    category: 'outfit',
    theme: 'work',
    name: 'Юбка-карандаш',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/806287460/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/p5hG7EQ' },
    ]
  },
  {
    id: '8',
    category: 'outfit',
    theme: 'work',
    name: 'Вязаный топ',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/342132944/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/p5hG1CU' },
    ]
  },
  {
    id: '9',
    category: 'outfit',
    theme: 'work',
    name: 'Черные брюки',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/58253040/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/rlb5Og1' },
    ]
  },
  {
    id: '10',
    category: 'outfit',
    theme: 'work',
    name: 'Пиджак',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/552493313/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/b2door3' },
    ]
  },
  {
    id: '11',
    category: 'outfit',
    theme: 'work',
    name: 'Туфли',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/265838244/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/1EzuC0Y' },
    ]
  },

    // ОБРАЗ - УЧЕБА
  {
    id: '12',
    category: 'outfit',
    theme: 'study',
    name: 'Джинсы',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/275655189/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/BYnhimg' },
    ]
  },
  {
    id: '13',
    category: 'outfit',
    theme: 'study',
    name: 'Свитер',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/668819466/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/3hgqrHn' },
    ]
  },
  {
    id: '14',
    category: 'outfit',
    theme: 'study',
    name: 'Рубашка',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/446925160/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/sSCQChf' },
    ]
  },
  {
    id: '15',
    category: 'outfit',
    theme: 'study',
    name: 'Серые брюки',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/634952911/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/zMWYgfe' },
    ]
  },
  {
    id: '16',
    category: 'outfit',
    theme: 'study',
    name: 'Кеды',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/389152314/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/7WzZT07' },
    ]
  },

    // ОБРАЗ - СВИДАНИЕ
  {
    id: '17',
    category: 'outfit',
    theme: 'date',
    name: 'Бежевое платье с открытой спиной',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/715890589/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/1EzEXsM' },
    ]
  },
  {
    id: '18',
    category: 'outfit',
    theme: 'date',
    name: 'Шелковый топ',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/924316742/detail.aspx?size=1396127422' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/1EzEVkM' },
    ]
  },
  {
    id: '19',
    category: 'outfit',
    theme: 'date',
    name: 'Светлые джинсы клеш',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/786119924/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/tK0KJMM' },
    ]
  },
  {
    id: '20',
    category: 'outfit',
    theme: 'date',
    name: 'Бежевые туфли',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/632543089/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/Qi5ikcA' },
    ]
  },
  {
    id: '26',
    category: 'outfit',
    theme: 'date',
    name: 'Балетки Мэри Джейн',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/790401131/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/MtI7GZi' },
    ]
  },

    // ОБРАЗ - СПОРТ
  {
    id: '27',
    category: 'outfit',
    theme: 'sport',
    name: 'Спортивный комбинезон',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/337431360/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/QimnPNP' },
    ]
  },
  {
    id: '28',
    category: 'outfit',
    theme: 'sport',
    name: 'Спортивный топ',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/252681730/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/OLGZtYL' },
    ]
  },
  {
    id: '29',
    category: 'outfit',
    theme: 'sport',
    name: 'Велосипедки',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/21154521/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/aHhBKz3' },
    ]
  },
  {
    id: '30',
    category: 'outfit',
    theme: 'sport',
    name: 'Кроссовки',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/881149749/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/q4Ng1h5' },
    ]
  },

  // АКСЕССУАРЫ - ВЕЧЕРИНКА
  {
    id: '31',
    category: 'accessories',
    theme: 'party',
    name: 'Серьги золотые',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '32',
    category: 'accessories',
    theme: 'party',
    name: 'Сумка черная',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '33',
    category: 'accessories',
    theme: 'party',
    name: 'Браслет серебро',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '34',
    category: 'accessories',
    theme: 'party',
    name: 'Кольцо золотое',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '35',
    category: 'accessories',
    theme: 'party',
    name: 'Туфли черные',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },

  // АКСЕССУАРЫ - РАБОТА
  {
    id: '36',
    category: 'accessories',
    theme: 'work',
    name: 'Сумка портфель',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '37',
    category: 'accessories',
    theme: 'work',
    name: 'Часы классические',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '38',
    category: 'accessories',
    theme: 'work',
    name: 'Туфли бежевые',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '39',
    category: 'accessories',
    theme: 'work',
    name: 'Шарф нейтральный',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '40',
    category: 'accessories',
    theme: 'work',
    name: 'Ремень черный',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },

  // АКСЕССУАРЫ - УЧЕБА
  {
    id: '41',
    category: 'accessories',
    theme: 'study',
    name: 'Рюкзак повседневный',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '42',
    category: 'accessories',
    theme: 'study',
    name: 'Кроссовки удобные',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '43',
    category: 'accessories',
    theme: 'study',
    name: 'Шапка вязаная',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '44',
    category: 'accessories',
    theme: 'study',
    name: 'Наушники',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '45',
    category: 'accessories',
    theme: 'study',
    name: 'Сумка-мессенджер',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },

  // АКСЕССУАРЫ - СВИДАНИЕ
  {
    id: '46',
    category: 'accessories',
    theme: 'date',
    name: 'Серьги нежные',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '47',
    category: 'accessories',
    theme: 'date',
    name: 'Кольцо женское',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '48',
    category: 'accessories',
    theme: 'date',
    name: 'Сумка клатч',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '49',
    category: 'accessories',
    theme: 'date',
    name: 'Туфли нежные',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '50',
    category: 'accessories',
    theme: 'date',
    name: 'Браслет нежный',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },

  // АКСЕССУАРЫ - СПОРТ
  {
    id: '56',
    category: 'accessories',
    theme: 'sport',
    name: 'Кроссовки спортивные',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '57',
    category: 'accessories',
    theme: 'sport',
    name: 'Спортивная сумка',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '58',
    category: 'accessories',
    theme: 'sport',
    name: 'Спортивные часы',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '59',
    category: 'accessories',
    theme: 'sport',
    name: 'Бутылка для воды',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '60',
    category: 'accessories',
    theme: 'sport',
    name: 'Повязка на голову',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },

  // УХОД - ВЕЧЕРИНКА
  {
    id: '61',
    category: 'care',
    theme: 'party',
    name: 'Тональная основа',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/138742829/detail.aspx?size=235729482' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/BYnQ1ma' },
    ]
  },
  {
    id: '62',
    category: 'care',
    theme: 'party',
    name: 'Консилер',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/663778504/detail.aspx?size=892317684' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/5U1Fmti' },
    ]
  },
  {
    id: '63',
    category: 'care',
    theme: 'party',
    name: 'Скульптор',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/73446003/detail.aspx?size=124456641' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/C6xJuEw' },
    ]
  },
  {
    id: '64',
    category: 'care',
    theme: 'party',
    name: 'Румяна',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/479708377/detail.aspx?size=670372227' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/wG8yQrR' },
    ]
  },
  {
    id: '65',
    category: 'care',
    theme: 'party',
    name: 'Пудра',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/147796707/detail.aspx?size=248386617' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/DuNFOWt' },
    ]
  },
  {
    id: '66',
    category: 'care',
    theme: 'party',
    name: 'Карандаш для глаз',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/349497697/detail.aspx?size=517612016' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/ofzK316' },
    ]
  },
  {
    id: '67',
    category: 'care',
    theme: 'party',
    name: 'Тушь',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/349571965/detail.aspx?size=517696890' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/yCApHek' },
    ]
  },
  {
    id: '68',
    category: 'care',
    theme: 'party',
    name: 'Палетка теней для век',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/550549741/detail.aspx?size=757567418' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '69',
    category: 'care',
    theme: 'party',
    name: 'Карандаш для бровей',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/216652616/detail.aspx?size=345298108' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/d7aOdzj' },
    ]
  },
  {
    id: '70',
    category: 'care',
    theme: 'party',
    name: 'Гель для бровей',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/254291019/detail.aspx?size=396693773' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/BYCjg3V' },
    ]
  },
  {
    id: '71',
    category: 'care',
    theme: 'party',
    name: 'Накладные ресницы',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/547823970/detail.aspx?size=754296944' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/ueBgJ7s' },
    ]
  },
  {
    id: '72',
    category: 'care',
    theme: 'party',
    name: 'Стразы',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/343296684/detail.aspx?size=510490115' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/3hJUzPF' },
    ]
  },
  {
    id: '73',
    category: 'care',
    theme: 'party',
    name: 'Жидкая матовая помада',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/64244536/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/fI4Yift' },
    ]
  },
  {
    id: '74',
    category: 'care',
    theme: 'party',
    name: 'Карандаш для губ',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/415517603/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/NBtXSRK' },
    ]
  },
    // УХОД - РАБОТА
  {
    id: '75',
    category: 'care',
    theme: 'work',
    name: 'Тональная основа',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/138742829/detail.aspx?size=235729482' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/BYnQ1ma' },
    ]
  },
  {
    id: '76',
    category: 'care',
    theme: 'work',
    name: 'Консилер',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/663778504/detail.aspx?size=892317684' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/5U1Fmti' },
    ]
  },
  {
    id: '77',
    category: 'care',
    theme: 'work',
    name: 'Румяна',
    description: 'Палетка нейтральных оттенков',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/479708377/detail.aspx?size=670372227' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/wG8yQrR' },
    ]
  },
  {
    id: '78',
    category: 'care',
    theme: 'work',
    name: 'Пудра',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/147796707/detail.aspx?size=248386617' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/DuNFOWt' },
    ]
  },
  {
    id: '79',
    category: 'care',
    theme: 'work',
    name: 'Тушь',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/349571965/detail.aspx?size=517696890' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/yCApHek' },
    ]
  },
  {
    id: '80',
    category: 'care',
    theme: 'work',
    name: 'Кремовые нюдовые тени',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/373276873/detail.aspx?size=544938792' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/homM7FO' },
    ]
  },
  {
    id: '81',
    category: 'care',
    theme: 'work',
    name: 'Гель для бровей',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/254291019/detail.aspx?size=396693773' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/BYCjg3V' },
    ]
  },
  {
    id: '82',
    category: 'care',
    theme: 'work',
    name: 'Нюдовая помада',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/806815278/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/wG8uBch' },
    ]
  },
  {
    id: '83',
    category: 'care',
    theme: 'work',
    name: 'Нюдовый карандаш для губ',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/900899202/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/Uyckiau' },
    ]
  },

    // УХОД - УЧЕБА
  {
    id: '84',
    category: 'care',
    theme: 'study',
    name: 'BB-крем',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/97205056/detail.aspx' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/7WOAMFy' },
    ]
  },
  {
    id: '85',
    category: 'care',
    theme: 'study',
    name: 'Консилер',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/663778504/detail.aspx?size=892317684' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/5U1Fmti' },
    ]
  },
  {
    id: '86',
    category: 'care',
    theme: 'study',
    name: 'Румяна',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/10111638/detail.aspx?size=32994153' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/yCApLP4' },
    ]
  },
  {
    id: '87',
    category: 'care',
    theme: 'study',
    name: 'Хайлайтер',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/17196521/detail.aspx?size=47954737' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/5U1FpBq' },
    ]
  },
  {
    id: '88',
    category: 'care',
    theme: 'study',
    name: 'Тушь',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/catalog/349497697/detail.aspx?size=517612016' },
      { marketplace: 'Ozon', url: 'https://ozon.ru/t/ofzK316' },
    ]
  },
  {
    id: '89',
    category: 'care',
    theme: 'study',
    name: 'Мусс для бровей',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '90',
    category: 'care',
    theme: 'study',
    name: 'Хайлайтер шиммер',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },

  // УХОД - СВИДАНИЕ
  {
    id: '91',
    category: 'care',
    theme: 'date',
    name: 'Помада роза',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '92',
    category: 'care',
    theme: 'date',
    name: 'Блеск помада',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '93',
    category: 'care',
    theme: 'date',
    name: 'Тушь объемная',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '94',
    category: 'care',
    theme: 'date',
    name: 'Тени шимер',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '95',
    category: 'care',
    theme: 'date',
    name: 'Карандаш графит',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '96',
    category: 'care',
    theme: 'date',
    name: 'Румяна coral',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '97',
    category: 'care',
    theme: 'date',
    name: 'Основа под макияж',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '98',
    category: 'care',
    theme: 'date',
    name: 'Тональный крем',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '99',
    category: 'care',
    theme: 'date',
    name: 'Хайлайтер розовый',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '100',
    category: 'care',
    theme: 'date',
    name: 'Спрей фиксатор',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },

  // УХОД - СПОРТ
  {
    id: '111',
    category: 'care',
    theme: 'sport',
    name: 'Помада водостойкая',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '112',
    category: 'care',
    theme: 'sport',
    name: 'Тушь спортивная',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '113',
    category: 'care',
    theme: 'sport',
    name: 'ББ крем спорт',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '114',
    category: 'care',
    theme: 'sport',
    name: 'Пудра компактная',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '115',
    category: 'care',
    theme: 'sport',
    name: 'Румяна стойкие',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '116',
    category: 'care',
    theme: 'sport',
    name: 'Праймер водостойкий',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '117',
    category: 'care',
    theme: 'sport',
    name: 'Карандаш водостойкий',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
  {
    id: '118',
    category: 'care',
    theme: 'sport',
    name: 'Спрей фиксатор спорт',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '119',
    category: 'care',
    theme: 'sport',
    name: 'Консилер водостойкий',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.ozon.ru/' },
      { marketplace: 'Ozon', url: 'https://market.yandex.ru/' },
    ]
  },
  {
    id: '120',
    category: 'care',
    theme: 'sport',
    name: 'Масло для губ',
    description: '',
    image: '▬',
    links: [
      { marketplace: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { marketplace: 'Ozon', url: 'https://www.ozon.ru/' },
    ]
  },
];