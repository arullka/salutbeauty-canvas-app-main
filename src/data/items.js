// function getImagePath(category, theme, filename) {
//   return `/images/${category}/${theme}/${filename}`;
// }
export const ITEMS_DATABASE = [
  // ============ ОБРАЗ - ВЕЧЕРИНКА ============
  {
    id: 'outfit_party_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'party',
    name: 'Платье + Туфли',
    description: 'Классический вечерний набор: черное платье и элегантные туфли',
    image: '/images/capsules/outfit/party/capsule-1.jpg'
  },
  {
    id: 'outfit_party_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'party',
    capsule: 'outfit_party_capsule_1',
    name: 'Черное платье',
    description: 'Универсальное черное платье с элегантным кроем, идеально для вечеринки. Приталенный силуэт подчеркивает фигуру, а длина до колена выглядит стильно и современно.',
    image: '/images/outfit/party/dress-black.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'outfit_party_item_2',
    type: 'item',
    category: 'outfit',
    theme: 'party',
    capsule: 'outfit_party_capsule_1',
    name: 'Черные туфли',
    description: 'Элегантные туфли с тонким каблуком из натуральной кожи. Классический силуэт делает их универсальным выбором для любого вечернего наряда.',
    image: '/images/outfit/party/heels-black.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'outfit_party_capsule_2',
    type: 'capsule',
    category: 'outfit',
    theme: 'party',
    name: 'Кожаный топ + Кожаные брюки',
    description: 'Смелый и стильный образ: кожаный топ с кожаными брюками для уверенной девушки',
    image: '/images/capsules/outfit/party/capsule-2.jpg'
  },
  {
    id: 'outfit_party_item_3',
    type: 'item',
    category: 'outfit',
    theme: 'party',
    capsule: 'outfit_party_capsule_2',
    name: 'Кожаный топ',
    description: 'Стильный черный топ из мягкой натуральной кожи. Облегающий крой и минималистичный дизайн делают его идеальным для смелого вечернего образа.',
    image: '/images/outfit/party/leather-top.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'outfit_party_item_4',
    type: 'item',
    category: 'outfit',
    theme: 'party',
    capsule: 'outfit_party_capsule_2',
    name: 'Кожаные брюки',
    description: 'Классические черные брюки из качественной кожи с идеальной посадкой. Универсальный предмет гардероба, который подходит для любого вечера.',
    image: '/images/outfit/party/leather-pants.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },

  // ============ ОБРАЗ - РАБОТА ============
  {
    id: 'outfit_work_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'work',
    name: 'Блузка + Брюки',
    description: 'Профессиональный набор для офиса: классическая блузка и строгие брюки',
    image: '/images/capsules/outfit/work/capsule-1.jpg'
  },
  {
    id: 'outfit_work_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'work',
    capsule: 'outfit_work_capsule_1',
    name: 'Белая блузка',
    description: 'Элегантная белая блузка из хлопка с идеальной посадкой. Классический фасон подходит для любого офиса и легко комбинируется с другими предметами гардероба.',
    image: '/images/outfit/work/blouse-white.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'outfit_work_item_2',
    type: 'item',
    category: 'outfit',
    theme: 'work',
    capsule: 'outfit_work_capsule_1',
    name: 'Брюки черные',
    description: 'Строгие офисные брюки из качественной ткани с идеальным кроем. Удобный пояс и правильная длина делают их идеальным выбором для работы.',
    image: '/images/outfit/work/pants-black.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'outfit_work_capsule_2',
    type: 'capsule',
    category: 'outfit',
    theme: 'work',
    name: 'Рубашка + Юбка',
    description: 'Женственный деловой образ: приталенная рубашка и юбка до колена',
    image: '/images/capsules/outfit/work/capsule-2.jpg'
  },
  {
    id: 'outfit_work_item_3',
    type: 'item',
    category: 'outfit',
    theme: 'work',
    capsule: 'outfit_work_capsule_2',
    name: 'Рубашка голубая',
    description: 'Нежная голубая рубашка с приталенным силуэтом. Классический цвет и качественная ткань делают её незаменимой в деловом гардеробе.',
    image: '/images/outfit/work/shirt-blue.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'outfit_work_item_4',
    type: 'item',
    category: 'outfit',
    theme: 'work',
    capsule: 'outfit_work_capsule_2',
    name: 'Юбка серая',
    description: 'Элегантная серая юбка-карандаш до колена из легкой ткани. Универсальный цвет и классический крой делают её основой любого офисного гардероба.',
    image: '/images/outfit/work/skirt-gray.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },

  // ============ ОБРАЗ - УЧЕБА ============
  {
    id: 'outfit_study_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'study',
    name: 'Футболка + Джинсы',
    description: 'Классический комфортный набор для университета: простая футболка и удобные джинсы',
    image: '/images/capsules/outfit/study/capsule-1.jpg'
  },
  {
    id: 'outfit_study_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'study',
    capsule: 'outfit_study_capsule_1',
    name: 'Футболка серая',
    description: 'Простая и удобная серая футболка из мягкого хлопка. Нейтральный цвет легко комбинируется с любыми другими предметами гардероба.',
    image: '/images/outfit/study/tshirt-gray.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'outfit_study_item_2',
    type: 'item',
    category: 'outfit',
    theme: 'study',
    capsule: 'outfit_study_capsule_1',
    name: 'Джинсы голубые',
    description: 'Удобные джинсы светлого оттенка с классическим кроем. Идеальны для повседневного ношения благодаря хорошей растяжимости ткани.',
    image: '/images/outfit/study/jeans-light.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },

  // ============ ОБРАЗ - СВИДАНИЕ ============
  {
    id: 'outfit_date_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'date',
    name: 'Платье + Туфли',
    description: 'Нежный и элегантный набор для первого свидания: светлое платье и туфли нюд',
    image: '/images/capsules/outfit/date/capsule-1.jpg'
  },
  {
    id: 'outfit_date_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'date',
    capsule: 'outfit_date_capsule_1',
    name: 'Платье светлое',
    description: 'Элегантное платье светлого оттенка с мягким силуэтом. Нежный цвет и изящный крой создают романтичный образ для особого вечера.',
    image: '/images/outfit/date/dress-light.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'outfit_date_item_2',
    type: 'item',
    category: 'outfit',
    theme: 'date',
    capsule: 'outfit_date_capsule_1',
    name: 'Туфли нюд',
    description: 'Элегантные туфли нейтрального цвета из качественной кожи. Универсальный оттенок удлиняет ногу и подходит к любому нарядному платью.',
    image: '/images/outfit/date/heels-nude.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },

  // ============ ОБРАЗ - СПОРТ ============
  {
    id: 'outfit_sport_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'sport',
    name: 'Спортивный топ + Леггинсы',
    description: 'Комфортный спортивный набор: дышащий топ и удобные леггинсы для тренировок',
    image: '/images/capsules/outfit/sport/capsule-1.jpg'
  },
  {
    id: 'outfit_sport_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'sport',
    capsule: 'outfit_sport_capsule_1',
    name: 'Спортивный топ',
    description: 'Дышащий спортивный топ из высокотехнологичной ткани. Удобный крой поддерживает во время активных тренировок и обеспечивает свободу движений.',
    image: '/images/outfit/sport/top-sport.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'outfit_sport_item_2',
    type: 'item',
    category: 'outfit',
    theme: 'sport',
    capsule: 'outfit_sport_capsule_1',
    name: 'Леггинсы черные',
    description: 'Удобные спортивные леггинсы с высокой талией. Эластичная ткань обеспечивает идеальную посадку и полную свободу движений во время тренировки.',
    image: '/images/outfit/sport/leggings-black.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },

  // ============ АКСЕССУАРЫ - ВЕЧЕРИНКА ============
  {
    id: 'acc_party_capsule_1',
    type: 'capsule',
    category: 'accessories',
    theme: 'party',
    name: 'Сумка + Серьги',
    description: 'Стильный комплект аксессуаров: черная сумка и золотые серьги',
    image: '/images/capsules/accessories/party/capsule-1.jpg'
  },
  {
    id: 'acc_party_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'party',
    capsule: 'acc_party_capsule_1',
    name: 'Сумка черная',
    description: 'Элегантная черная сумка из качественной кожи. Просторная, но компактная - идеальна для вечеринки, когда нужно носить минимум вещей с максимальным стилем.',
    image: '/images/accessories/party/bag-black.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'acc_party_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'party',
    capsule: 'acc_party_capsule_1',
    name: 'Серьги золотые',
    description: 'Изящные золотые серьги с классическим дизайном. Универсальны и элегантны - отлично дополняют любой вечерний образ.',
    image: '/images/accessories/party/earrings-gold.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },

  // ============ АКСЕССУАРЫ - РАБОТА ============
  {
    id: 'acc_work_capsule_1',
    type: 'capsule',
    category: 'accessories',
    theme: 'work',
    name: 'Часы + Портфель',
    description: 'Деловой комплект: классические часы и функциональный портфель',
    image: '/images/capsules/accessories/work/capsule-1.jpg'
  },
  {
    id: 'acc_work_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'work',
    capsule: 'acc_work_capsule_1',
    name: 'Часы классические',
    description: 'Элегантные наручные часы с классическим циферблатом. Деловой стиль и надежность - идеальный аксессуар для офиса.',
    image: '/images/accessories/work/watch.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'acc_work_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'work',
    capsule: 'acc_work_capsule_1',
    name: 'Портфель черный',
    description: 'Функциональный черный портфель из кожи с удобными ручками. Просторный и стильный - идеален для работы и деловых встреч.',
    image: '/images/accessories/work/briefcase.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },

  // ============ МАКИЯЖ - ВЕЧЕРИНКА ============
  {
    id: 'care_party_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'party',
    name: 'Смоки Айс',
    description: 'Дымчатый макияж для вечеринки: темные тени и объемная тушь',
    image: '/images/capsules/care/party/smoky-eyes.jpg'
  },
  {
    id: 'care_party_item_1',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_1',
    name: 'Палетка теней',
    description: 'Профессиональная палетка с 12 оттенками от светлых до угольно-черных. Идеальна для создания дымчатого макияжа с плавными переходами.',
    image: '/images/care/party/eyeshadow-palette.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'care_party_item_2',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_1',
    name: 'Тушь объемная',
    description: 'Объемная тушь с питательной формулой. Легко наносится, создает эффект густых ресниц и держится весь вечер без смазывания.',
    image: '/images/care/party/mascara.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'care_party_capsule_2',
    type: 'capsule',
    category: 'care',
    theme: 'party',
    name: 'Красная помада',
    description: 'Классический вечерний макияж: красная помада и нейтральные тени',
    image: '/images/capsules/care/party/red-lips.jpg'
  },
  {
    id: 'care_party_item_3',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_2',
    name: 'Помада красная',
    description: 'Насыщенная красная помада с матовым финишем. Классический выбор для вечеринки - смелый, элегантный и всегда актуальный.',
    image: '/images/care/party/lipstick-red.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'care_party_item_4',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_2',
    name: 'Тени нейтральные',
    description: 'Палетка с нежными нейтральными оттенками. Идеальная база для красной помады - не отвлекает от губ и подчеркивает их.',
    image: '/images/care/party/eyeshadow-neutral.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },

  // ============ МАКИЯЖ - РАБОТА ============
  {
    id: 'care_work_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'work',
    name: 'Нюдовый макияж',
    description: 'Свежий офисный макияж: нюдовая помада и легкие нейтральные тени',
    image: '/images/capsules/care/work/nude-makeup.jpg'
  },
  {
    id: 'care_work_item_1',
    type: 'item',
    category: 'care',
    theme: 'work',
    capsule: 'care_work_capsule_1',
    name: 'Помада нюд',
    description: 'Нежная помада естественного оттенка. Деловая и ненавязчивая - идеальна для офиса и деловых встреч.',
    image: '/images/care/work/lipstick-nude.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'care_work_item_2',
    type: 'item',
    category: 'care',
    theme: 'work',
    capsule: 'care_work_capsule_1',
    name: 'ВВ крем',
    description: 'Легкий ВВ крем с SPF защитой. Выравнивает тон кожи и обеспечивает свежий, ухоженный вид в течение всего рабочего дня.',
    image: '/images/care/work/bb-cream.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },

  // ============ МАКИЯЖ - УЧЕБА ============
  {
    id: 'care_study_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'study',
    name: 'Естественный макияж',
    description: 'Легкий повседневный макияж: прозрачный блеск и тонкая подводка',
    image: '/images/capsules/care/study/natural-makeup.jpg'
  },
  {
    id: 'care_study_item_1',
    type: 'item',
    category: 'care',
    theme: 'study',
    capsule: 'care_study_capsule_1',
    name: 'Блеск для губ',
    description: 'Прозрачный блеск с едва заметным перламутром. Подчеркивает естественную красоту губ и придает свежий, ухоженный вид.',
    image: '/images/care/study/lip-gloss.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'care_study_item_2',
    type: 'item',
    category: 'care',
    theme: 'study',
    capsule: 'care_study_capsule_1',
    name: 'Подводка коричневая',
    description: 'Мягкая коричневая подводка для век. Создает естественный, но ухоженный взгляд - идеальна для повседневного макияжа.',
    image: '/images/care/study/eyeliner-brown.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },

  // ============ МАКИЯЖ - СВИДАНИЕ ============
  {
    id: 'care_date_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'date',
    name: 'Романтичный макияж',
    description: 'Нежный макияж для свидания: розовые тени и легкая помада',
    image: '/images/capsules/care/date/romantic-makeup.jpg'
  },
  {
    id: 'care_date_item_1',
    type: 'item',
    category: 'care',
    theme: 'date',
    capsule: 'care_date_capsule_1',
    name: 'Помада роза',
    description: 'Нежная помада розового цвета. Создает романтичный и женственный образ, идеальна для особого вечера.',
    image: '/images/care/date/lipstick-rose.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'care_date_item_2',
    type: 'item',
    category: 'care',
    theme: 'date',
    capsule: 'care_date_capsule_1',
    name: 'Тени шимер',
    description: 'Палетка с нежными оттенками и мягким блеском. Создает деликатный, но выразительный макияж.',
    image: '/images/care/date/eyeshadow-shimmer.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },

  // ============ МАКИЯЖ - СПОРТ ============
  {
    id: 'care_sport_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'sport',
    name: 'Спортивный макияж',
    description: 'Водостойкий макияж для тренировок: помада и тушь',
    image: '/images/capsules/care/sport/sport-makeup.jpg'
  },
  {
    id: 'care_sport_item_1',
    type: 'item',
    category: 'care',
    theme: 'sport',
    capsule: 'care_sport_capsule_1',
    name: 'Помада водостойкая',
    description: 'Водостойкая помада, которая держится даже во время интенсивной тренировки. Комфортная и стойкая к поту.',
    image: '/images/care/sport/lipstick-waterproof.jpg',
    mainMarketplace: 'Сбе�� Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
  {
    id: 'care_sport_item_2',
    type: 'item',
    category: 'care',
    theme: 'sport',
    capsule: 'care_sport_capsule_1',
    name: 'Тушь спортивная',
    description: 'Водостойкая спортивная тушь, которая не размазывается и держится весь день. Идеальна для активного образа жизни.',
    image: '/images/care/sport/mascara-sport.jpg',
    mainMarketplace: 'Сбер Маркет',
    mainMarketplaceUrl: 'https://sbermegamarket.ru/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/' },
      { name: 'Ozon', url: 'https://www.ozon.ru/' }
    ]
  },
];