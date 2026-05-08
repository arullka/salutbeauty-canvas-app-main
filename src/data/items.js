// function getImagePath(category, theme, filename) {
//   return `/images/${category}/${theme}/${filename}`;
// }

export const ITEMS_DATABASE = [
  {
  // ============ ОБРАЗ - ВЕЧЕРИНКА ============

    id: 'outfit_party_capsule_1',
    type: 'capcule',
    category: 'outfit',
    theme: 'party',
    name: 'Кружевной корсет + Джинсовая юбка',
    description: 'Женственный вечерний образ',
    image: '/images/capsules/outfit/party/capsule-1.jpg'
  },
  {
    id: 'outfit_party_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'party',
    capsule: 'outfit_party_capsule_1',
    name: 'Кружевной белый корсет',
    description: 'Нежный кружевной корсет, идеален для вечеринки.',
    image: '/images/outfit/party/corset-white.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1L4SZ/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/387821507/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/AFtRtUA' }
    ]
  },
  {
    id: 'outfit_party_item_2',
    type: 'item',
    category: 'outfit',
    theme: 'party',
    capsule: 'outfit_party_capsule_1',
    name: 'Джинсовая юбка мини',
    description: 'Короткая джинсовая юбка для яркого образа.',
    image: '/images/outfit/party/denim-skirt.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1LCHD/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/330533771/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/yCIZZ9o' }
    ]
  },
  {
    id: 'outfit_party_capsule_2',
    type: 'capsule',
    category: 'outfit',
    theme: 'party',
    name: 'Кожаный топ + Кожаные штаны',
    description: 'Смелый и стильный образ: кожаный топ с кожаными брюками для уверенной девушки',
    image: '/images/capsules/outfit/party/capsule-2.jpg'
  },
  {
    id: 'outfit_party_item_3',
    type: 'item',
    category: 'outfit',
    theme: 'party',
    capsule: 'outfit_party_capsule_2',
    name: 'Кожаный черный топ с рукавами',
    description: 'Стильный черный топ из мягкой натуральной кожи. Облегающий крой и минималистичный дизайн делают его идеальным для смелого вечернего образа.',
    image: '/images/outfit/party/leather-top.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW0WFLN/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/303523921/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/wG8u2Yr' }
    ]
  },
  {
    id: 'outfit_party_item_4',
    type: 'item',
    category: 'outfit',
    theme: 'party',
    capsule: 'outfit_party_capsule_2',
    name: 'Кожаные штаны',
    description: 'Черные кожаные брюки-скинни.',
    image: '/images/outfit/party/leather-pants.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW0G1V8/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/171031458/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/AFtRLyX' }
    ]
  },

  // ============ ОБРАЗ - РАБОТА ============

  {
    id: 'outfit_work_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'work',
    name: 'Блузка + Юбка-карандаш',
    description: 'Элегантный офисный образ.',
    image: '/images/capsules/outfit/work/capsule-1.jpg'
  },
  {
    id: 'outfit_work_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'work',
    capsule: 'outfit_work_capsule_1',
    name: 'Шелковая белая блузка',
    description: 'Изысканная шелковая блузка с идеальной посадкой. Классический фасон подходит для любого офиса и легко комбинируется с другими предметами гардероба.',
    image: '/images/outfit/work/silk-blouse.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1DR5L/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/458575854/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/Vaj1vdr' }
    ]
  },
  {
    id: 'outfit_work_item_2',
    type: 'item',
    category: 'outfit',
    theme: 'work',
    capsule: 'outfit_work_capsule_1',
    name: 'Юбка карандаш черная',
    description: 'Классическая офисная юбка-карандаш.',
    image: '/images/outfit/work/pencil-skirt.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1DX7I/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/806287460/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/p5hG7EQ' }
    ]
  },
  {
    id: 'outfit_work_capsule_2',
    type: 'capsule',
    category: 'outfit',
    theme: 'work',
    name: 'Черный пиджак + черные брюки',
    description: 'Строгий и стильный образ',
    image: '/images/capsules/outfit/work/capsule-2.jpg'
  },
  {
    id: 'outfit_work_item_3',
    type: 'item',
    category: 'outfit',
    theme: 'work',
    capsule: 'outfit_work_capsule_2',
    name: 'Черный пиджак',
    description: 'Строгий черный пиджак прямого кроя из качественной костюмной ткани. Классический лацкан и приталенный силуэт делают его незаменимой основой делового гардероба. Идеально сочетается с брюками, юбкой-карандаш и даже платьем.',
    image: '/images/outfit/work/black-dress.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1KRK3/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: "https://www.wildberries.ru/catalog/552493313/detail.aspx:" },
      { name: 'Ozon', url: "https://ozon.ru/t/b2door3" }
    ]
  },
  {
    id: 'outfit_work_item_4',
    type: 'item',
    category: 'outfit',
    theme: 'work',
    capsule: 'outfit_work_capsule_2',
    name: 'Черные брюки',
    description: 'Классические черные брюки со стрелками из плотной ткани с добавлением эластана. Идеальная посадка по талии и длина до середины каблука обеспечивают безупречный вид в офисе. Универсальная база для рабочих образов.',
    image: '/images/outfit/work/vest.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1CUDD/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: "https://www.wildberries.ru/catalog/58253040/detail.aspx:"},
      { name: 'Ozon', url: 'https://ozon.ru/t/rlb5Og1' }
    ]
  },

  // ============ ОБРАЗ - УЧЕБА ============

  {
    id: 'outfit_study_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'study',
    name: 'Свитер + Джинсы',
    description: 'Уютный и удобный образ для учебы',
    image: '/images/capsules/outfit/study/capsule-1.jpg'
  },
  {
    id: 'outfit_study_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'study',
    capsule: 'outfit_study_capsule_1',
    name: 'Свитер синий',
    description: 'Теплый синий свитер.',
    image: '/images/outfit/study/sweater-blue.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW0VMPX/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/668819466/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/3hgqrHn' }
    ]
  },
  {
    id: 'outfit_study_item_2',
    type: 'item',
    category: 'outfit',
    theme: 'study',
    capsule: 'outfit_study_capsule_1',
    name: 'Джинсы',
    description: 'Классические голубые джинсы.',
    image: '/images/outfit/study/jeans.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1DSUS/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/275655189/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/BYnhimg' }
    ]
  },
  {
    id: 'outfit_study_capsule_2',
    type: 'capsule',
    category: 'outfit',
    theme: 'study',
    name: 'Белая рубашка + Серые брюки',
    description: 'Базовый академичный стиль',
    image: '/images/capsules/outfit/study/capsule-2.jpg'
  },
  {
    id: 'outfit_study_item_3',
    type: 'item',
    category: 'outfit',
    theme: 'study',
    capsule: 'outfit_study_capsule_2',
    name: 'Белая рубашка',
    description: 'Свежая белая рубашка из хлопка с легкой текстурой. Классический воротник и удобный крой позволяют носить её как с джинсами, так и с брюками или под пиджак.',
    image: '/images/outfit/study/blazer.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1K4ZN/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/448051223/detail.aspx'},
      { name: 'Ozon', url: 'https://ozon.ru/t/jQJMObx' }
    ]
  },
  {
    id: 'outfit_study_item_4',
    type: 'item',
    category: 'outfit',
    theme: 'study',
    capsule: 'outfit_study_capsule_2',
    name: 'Серые брюки',
    description: 'Удобные серые брюки зауженного кроя из мягкой, но держащей форму ткани. Нейтральный оттенок легко комбинируется с футболками, свитерами и рубашками.',
    image: '/images/outfit/study/t-shirt.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1DT52/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/634952911/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/zMWYgfe'}
    ]
  },

  // ============ ОБРАЗ - СВИДАНИЕ ============

  {
    id: 'outfit_date_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'date',
    name: 'Бежевое платье с открытой спиной + Туфли',
    description: 'Нежный романтичный образ',
    image: '/images/capsules/outfit/date/capsule-1.jpg'
  },
  {
    id: 'outfit_date_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'date',
    capsule: 'outfit_date_capsule_1',
    name: 'Бежевое платье с открытой спиной',
    description: 'Очень нежное и женственное платье.',
    image: '/images/outfit/date/beige-dress.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1L1IL/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/715890589/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/1EzEXsM' }
    ]
  },
  {
    id: 'outfit_date_item_2',
    type: 'item',
    category: 'outfit',
    theme: 'date',
    capsule: 'outfit_date_capsule_1',
    name: 'Бежевые лаковые туфли',
    description: 'Элегантные бежевые туфли-лодочки.',
    image: '/images/outfit/date/beige-pumps.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1ES0Q/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/632543089/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/Qi5ikcA' }
    ]
  },
  {
    id: 'outfit_date_capsule_2',
    type: 'capsule',
    category: 'outfit',
    theme: 'date',
    name: 'Шелковый белый топ + Светлые джинсы клёш + Черные лаковые туфли',
    description: 'Соблазнительный и стильный лук',
    image: '/images/capsules/outfit/date/capsule-2.jpg'
  },
  {
    id: 'outfit_date_item_3',
    type: 'item',
    category: 'outfit',
    theme: 'date',
    capsule: 'outfit_date_capsule_2',
    name: 'Шелковый белый топ',
    description: 'Изысканный топ из натурального шелка с деликатным блеском. Нежный крой и струящаяся ткань создают романтичный и женственный образ.',
    image: '/images/outfit/date/corset-black.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1LCUE/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/924316742/detail.aspx?size=1396127422'},
      { name: 'Ozon', url: 'https://ozon.ru/t/1EzEVk'}
    ]
  },
  {
    id: 'outfit_date_item_4',
    type: 'item',
    category: 'outfit',
    theme: 'date',
    capsule: 'outfit_date_capsule_2',
    name: 'Светлые джинсы клёш',
    description: 'Джинсы клеш из мягкого денима светлого оттенка. Низкая посадка добавит образу женственности, а расклешенный крой — легкости и свободы. Идеальны для свидания.',
    image: '/images/outfit/date/satin-skirt.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1DSUS/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/786119924/detail.aspx'},
      { name: 'Ozon', url: 'https://ozon.ru/t/tK0KJMM' }
    ]
  },
  {
    id: 'outfit_date_item_5',
    type: 'item',
    category: 'outfit',
    theme: 'date',
    capsule: 'outfit_date_capsule_2',
    name: 'Черные лаковые туфли',
    description: 'Классические лаковые туфли.',
    image: '/images/outfit/date/black-patent-pumps.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW0T1HL/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/697482225/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/rlblmuP' }
    ]
  },

   // ============ ОБРАЗ - СПОРТ ============

  {
    id: 'outfit_sport_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'sport',
    name: 'Спортивный комбинезон + Кроссовки',
    description: 'Стильный total look для тренировок',
    image: '/images/capsules/outfit/sport/capsule-1.jpg'
  },
  {
    id: 'outfit_sport_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'sport',
    capsule: 'outfit_sport_capsule_1',
    name: 'Спортивный комбинезон',
    description: 'Цельный спортивный комбинезон из мягкого, дышащего материала. Удобство одного предмета вместо двух, идеальная посадка и свобода движений — лучший выбор для тренировок в зале или на улице.',
    image: '/images/outfit/sport/bodysuit.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1B5O4/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/337431360/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/QimnPNP' }
    ]
  },
  {
    id: 'outfit_sport_item_4',
    type: 'item',
    category: 'outfit',
    theme: 'sport',
    capsule: 'outfit_sport_capsule_1',
    name: 'Кроссовки',
    description: 'Лёгкие дышащие кроссовки на амортизирующей подошве. Удобная шнуровка и анатомическая стелька снижают усталость ног даже при длительных нагрузках. Идеальны для бега, фитнеса и активного образа жизни.',
    image: '/images/outfit/sport/sneakers.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/RTLAEZ128201/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/881149749/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/q4Ng1h5' }
    ]
  },
  {
    id: 'outfit_sport_capsule_2',
    type: 'capsule',
    category: 'outfit',
    theme: 'sport',
    name: 'Топ + Леггинсы',
    description: 'Классический спортивный сет',
    image: '/images/capsules/outfit/sport/capsule-2.jpg'
  },
  {
    id: 'outfit_sport_item_2',
    type: 'item',
    category: 'outfit',
    theme: 'sport',
    capsule: 'outfit_sport_capsule_2',
    name: 'Спортивный топ',
    description: 'Дышащий топ для активных тренировок.',
    image: '/images/outfit/sport/sports-top.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1DE8D/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/252681730/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/OLGZtYL' }
    ]
  },
  {
    id: 'outfit_sport_item_3',
    type: 'item',
    category: 'outfit',
    theme: 'sport',
    capsule: 'outfit_sport_capsule_2',
    name: 'Леггинсы',
    description: 'Удобные черные леггинсы из эластичного, дышащего материала с высокой посадкой. Плотная ткань обеспечивает комфорт и поддержку во время любых тренировок, не сковывая движений. Идеальны для фитнеса, йоги или повседневной носки.',
    image: '/images/outfit/sport/leggings.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW0OSM6/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/103445141/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/1E8KXN0' }
    ]
  },

  // ============ АКСЕССУАРЫ - ВЕЧЕРИНКА ============

  {
    id: 'acc_party_capsule_1',
    type: 'capsule',
    category: 'accessories',
    theme: 'party',
    name: 'Сумка + Серьги',
    description: 'Вечерний комплект аксессуаров',
    image: '/images/capsules/accessories/party/capsule-1.jpg'
  },
  {
    id: 'acc_party_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'party',
    capsule: 'acc_party_capsule_1',
    name: 'Сумка',
    description: 'Элегантная мини-сумка.',
    image: '/images/accessories/party/bag.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1CWBW/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/156624460/detail.aspx?size=261256450'},
      { name: 'Ozon', url: 'https://ozon.ru/t/p5wVVY1' }
    ]
  },
  {
    id: 'acc_party_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'party',
    capsule: 'acc_party_capsule_1',
    name: 'Серьги',
    description: 'Изящные серьги для вечеринки.',
    image: '/images/accessories/party/earrings.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW16N5F/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/334019729/detail.aspx?size=499345793'},
      { name: 'Ozon', url: 'https://ozon.ru/t/lw5R6Fj' }
    ]
  },
  {
    id: 'acc_party_capsule_2',
    type: 'capsule',
    category: 'accessories',
    theme: 'party',
    name: 'Клатч + Чокер',
    description: 'Вечерний сет',
    image: '/images/capsules/accessories/party/capsule-2.jpg'
  },
  {
    id: 'acc_party_item_3',
    type: 'item',
    category: 'accessories',
    theme: 'party',
    capsule: 'acc_party_capsule_2',
    name: 'Клатч',
    description: 'Маленький клатч с цепочкой.',
    image: '/images/accessories/party/clutch.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1L1PF/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/275810490/detail.aspx?size=425068156'},
      { name: 'Ozon', url: 'https://ozon.ru/t/3h2PKHd' }
    ]
  },
  {
    id: 'acc_party_item_4',
    type: 'item',
    category: 'accessories',
    theme: 'party',
    capsule: 'acc_party_capsule_2',
    name: 'Чокер',
    description: 'Черный бархатный чокер с подвеской.',
    image: '/images/accessories/party/choker.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1E7H0/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/932749013/detail.aspx?size=1406802818'},
      { name: 'Ozon', url: 'https://ozon.ru/t/aH1bVr4' }
    ]
  },

  // ============ АКСЕССУАРЫ - РАБОТА ============

  {
    id: 'acc_work_capsule_1',
    type: 'capsule',
    category: 'accessories',
    theme: 'work',
    name: 'Часы + Сумка',
    description: 'Классический деловой набор',
    image: '/images/capsules/accessories/work/capsule-1.jpg'
  },
  {
    id: 'acc_work_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'work',
    capsule: 'acc_work_capsule_1',
    name: 'Часы классические',
    description: 'Элегантные женские часы.',
    image: '/images/accessories/work/watch.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/RTLAEP370901/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/75451387/detail.aspx?size=127013840'},
      { name: 'Ozon', url: 'https://ozon.ru/t/Va9YstK' }
    ]
  },
  {
    id: 'acc_work_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'work',
    capsule: 'acc_work_capsule_1',
    name: 'Сумка',
    description: 'Кожаная сумка для ноутбука.',
    image: '/images/accessories/work/briefcase.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/RTLAEX867101/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/722489822/detail.aspx?size=1018096556'},
      { name: 'Ozon', url: 'https://ozon.ru/t/ofqQelh' }
    ]
  },
  {
    id: 'acc_work_capsule_2',
    type: 'capsule',
    category: 'accessories',
    theme: 'work',
    name: 'Сумка + Ремень + Серьги',
    description: 'Сдержанные офисные акценты',
    image: '/images/capsules/accessories/work/capsule-2.jpg'
  },
  {
    id: 'acc_work_item_3',
    type: 'item',
    category: 'accessories',
    theme: 'work',
    capsule: 'acc_work_capsule_2',
    name: 'Ремень',
    description: 'Тонкий черный ремень с пряжкой.',
    image: '/images/accessories/work/belt.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW0Q4Q9/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/213892750/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/Va9YS33' }
    ]
  },
  {
    id: 'acc_work_item_4',
    type: 'item',
    category: 'accessories',
    theme: 'work',
    capsule: 'acc_work_capsule_2',
    name: 'Серьги',
    description: 'Аккуратные серьги-кольца.',
    image: '/images/accessories/work/earrings.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW0SEZE/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/99808291/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/ZplxIpT' }
    ]
  },

  // ============ АКСЕССУАРЫ - УЧЕБА ============

  {
    id: 'acc_study_capsule_1',
    type: 'capsule',
    category: 'accessories',
    theme: 'study',
    name: 'Рюкзак + Заколки',
    description: 'Практичный и милый набор',
    image: '/images/capsules/accessories/study/capsule-1.jpg'
  },
  {
    id: 'acc_study_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'study',
    capsule: 'acc_study_capsule_1',
    name: 'Рюкзак',
    description: 'Повседневный рюкзак для учебы.',
    image: '/images/accessories/study/backpack.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1DMTW/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/437319749/detail.aspx?size=620265747'},
      { name: 'Ozon', url: 'https://ozon.ru/t/d7mrtBy' }
    ]
  },
  {
    id: 'acc_study_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'study',
    capsule: 'acc_study_capsule_1',
    name: 'Заколки',
    description: 'Набор стильных заколок.',
    image: '/images/accessories/study/hairpins.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW0UDA0/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/995446544/detail.aspx?size=1489370205'},
      { name: 'Ozon', url: 'https://ozon.ru/t/QizdekV' }
    ]
  },
  {
    id: 'acc_study_capsule_2',
    type: 'capsule',
    category: 'accessories',
    theme: 'study',
    name: 'Сумка на плечо + Гетры',
    description: 'Комфорт и стиль для пар',
    image: '/images/capsules/accessories/study/capsule-2.jpg'
  },
  {
    id: 'acc_study_item_3',
    type: 'item',
    category: 'accessories',
    theme: 'study',
    capsule: 'acc_study_capsule_2',
    name: 'Сумка на плечо',
    description: 'Удобная сумка через плечо.',
    image: '/images/accessories/study/shoulder-bag.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1K53J/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/281675493/detail.aspx?size=432139497'},
      { name: 'Ozon', url: 'https://ozon.ru/t/aH1bNgT' }
    ]
  },
  {
    id: 'acc_study_item_4',
    type: 'item',
    category: 'accessories',
    theme: 'study',
    capsule: 'acc_study_capsule_2',
    name: 'Гетры',
    description: 'Тёплые гетры для прохладной погоды.',
    image: '/images/accessories/study/legwarmers.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW0VE9K/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/198425704/detail.aspx?size=321494029'},
      { name: 'Ozon', url: 'https://ozon.ru/t/ho8je07' }
    ]
  },

  // ============ АКСЕССУАРЫ - СВИДАНИЕ ============

  {
    id: 'acc_date_capsule_1',
    type: 'capsule',
    category: 'accessories',
    theme: 'date',
    name: 'Сумка + Серьги',
    description: 'Нежный комплект для романтичного вечера',
    image: '/images/capsules/accessories/date/capsule-1.jpg'
  },
  {
    id: 'acc_date_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'date',
    capsule: 'acc_date_capsule_1',
    name: 'Сумка',
    description: 'Элегантная сумка через плечо нейтрального оттенка. Компактная, но вместительная — идеальна для свидания.',
    image: '/images/accessories/date/bag.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1EN35/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/337953705/detail.aspx?size=504119689'},
      { name: 'Ozon', url: 'https://ozon.ru/t/Zplxwvg' }
    ]
  },
  {
    id: 'acc_date_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'date',
    capsule: 'acc_date_capsule_1',
    name: 'Серьги',
    description: 'Изящные серьги-подвески с нежным блеском. Подчеркивают женственность и добавляют образу лёгкости.',
    image: '/images/accessories/date/earrings.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW131US/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/207452094/detail.aspx?size=332807090'},
      { name: 'Ozon', url: 'https://ozon.ru/t/7WOlr3r' }
    ]
  },
  {
    id: 'acc_date_capsule_2',
    type: 'capsule',
    category: 'accessories',
    theme: 'date',
    name: 'Сумка + Кулон + Лента для волос',
    description: 'Романтичный набор для особого вечера',
    image: '/images/capsules/accessories/date/capsule-2.jpg'
  },
  {
    id: 'acc_date_item_3',
    type: 'item',
    category: 'accessories',
    theme: 'date',
    capsule: 'acc_date_capsule_2',
    name: 'Сумка',
    description: 'Небольшая сумка-кроссбоди нежного цвета. Идеально дополняет романтичный образ.',
    image: '/images/accessories/date/bag-pink.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1EN35/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/337953705/detail.aspx?size=504119689'},
      { name: 'Ozon', url: 'https://ozon.ru/t/Zplxwvg' }
    ]
  },
  {
    id: 'acc_date_item_4',
    type: 'item',
    category: 'accessories',
    theme: 'date',
    capsule: 'acc_date_capsule_2',
    name: 'Кулон',
    description: 'Нежная подвеска в виде капли на тонкой цепочке. Добавляет образу утончённости.',
    image: '/images/accessories/date/pendant.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1LUZ4/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/248958621/detail.aspx?size=389701104'},
      { name: 'Ozon', url: 'https://ozon.ru/t/rlpk4US' }
    ]
  },
  {
    id: 'acc_date_item_5',
    type: 'item',
    category: 'accessories',
    theme: 'date',
    capsule: 'acc_date_capsule_2',
    name: 'Лента для волос',
    description: 'Шёлковая лента для волос нежного оттенка. Завершает романтичный образ.',
    image: '/images/accessories/date/hair-ribbon.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/RTLAEL685001/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/234512796/detail.aspx?size=369561559'},
      { name: 'Ozon', url: 'https://ozon.ru/t/ho8j3FC' }
    ]
  },

  // ============ АКСЕССУАРЫ - СПОРТ ============

  {
    id: 'acc_sport_capsule_1',
    type: 'capsule',
    category: 'accessories',
    theme: 'sport',
    name: 'Сумка + Повязка на голову',
    description: 'Практичный набор для тренировок',
    image: '/images/capsules/accessories/sport/capsule-1.jpg'
  },
  {
    id: 'acc_sport_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'sport',
    capsule: 'acc_sport_capsule_1',
    name: 'Сумка',
    description: 'Лёгкая спортивная сумка-шоппер из прочной ткани. Вместительная и удобная — идеальна для зала.',
    image: '/images/accessories/sport/gym-bag.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1KD9M/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/492571049/detail.aspx?size=685619309'},
      { name: 'Ozon', url: 'https://ozon.ru/t/aH1gHS1' }
    ]
  },
  {
    id: 'acc_sport_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'sport',
    capsule: 'acc_sport_capsule_1',
    name: 'Повязка на голову',
    description: 'Мягкая повязка из хлопка, отводит влагу и убирает волосы с лица. Не скользит во время тренировки.',
    image: '/images/accessories/sport/headband.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/RTLAEN073501/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/183761213/detail.aspx?size=302866810'},
      { name: 'Ozon', url: 'https://ozon.ru/t/vsnEYUU' }
    ]
  },
  {
    id: 'acc_sport_capsule_2',
    type: 'capsule',
    category: 'accessories',
    theme: 'sport',
    name: 'Сумка + Умные часы + Перчатки',
    description: 'Технологичный набор для активного спорта',
    image: '/images/capsules/accessories/sport/capsule-2.jpg'
  },
  {
    id: 'acc_sport_item_3',
    type: 'item',
    category: 'accessories',
    theme: 'sport',
    capsule: 'acc_sport_capsule_2',
    name: 'Сумка',
    description: 'Компактная спортивная сумка с отделением для обуви. Лёгкая и вместительная.',
    image: '/images/accessories/sport/sports-bag.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1KD9M/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/492571049/detail.aspx?size=685619309'},
      { name: 'Ozon', url: 'https://ozon.ru/t/aH1gHS1' }
    ]
  },
  {
    id: 'acc_sport_item_4',
    type: 'item',
    category: 'accessories',
    theme: 'sport',
    capsule: 'acc_sport_capsule_2',
    name: 'Умные часы',
    description: 'Фитнес-трекер с пульсометром и шагомером. Отслеживают активность и помогают достигать целей.',
    image: '/images/accessories/sport/smart-watch.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://goldapple.ru/19000401930-redmi-watch-5-active',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/984494651/detail.aspx?size=1473736869'},
      { name: 'Ozon', url: 'https://ozon.ru/t/7WOlQL2' }
    ]
  },
  {
    id: 'acc_sport_item_5',
    type: 'item',
    category: 'accessories',
    theme: 'sport',
    capsule: 'acc_sport_capsule_2',
    name: 'Перчатки для фитнеса',
    description: 'Дышащие перчатки с усиленными ладонями. Защищают руки от мозолей и улучшают хват.',
    image: '/images/accessories/sport/fitness-gloves.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/RTLABC793604/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/760455161/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/tKYL4V3' }
    ]
  },
 // ============ МАКИЯЖ - ВЕЧЕРИНКА ============

  {
    id: 'care_party_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'party',
    name: 'Смоки айс + Накладные ресницы',
    description: 'Драматичный вечерний макияж с дымчатым эффектом',
    image: '/images/capsules/care/party/capsule-1.jpg'
  },
  {
    id: 'care_party_item_1',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_1',
    name: 'Палетка теней для век',
    description: 'Насыщенная палетка с матовыми и шиммерными оттенками от бежевого до угольно-черного. Идеальна для создания смоки айс.',
    image: '/images/care/party/eyeshadow-palette.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000129129-quadro-eleganto',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/550549741/detail.aspx?size=757567418' },
      { name: 'Ozon', url: 'https://ozon.ru/t/EAMP6HP' }
    ]
  },
  {
    id: 'care_party_item_2',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_1',
    name: 'Накладные ресницы',
    description: 'Объёмные накладные ресницы с эффектом кукольного взгляда. Легко крепятся и держатся всю ночь.',
    image: '/images/care/party/false-lashes.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000382830-individual-lashes-mermaid',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/547823970/detail.aspx?size=754296944' },
      { name: 'Ozon', url: 'https://ozon.ru/t/ueBgJ7s' }
    ]
  },
  {
    id: 'care_party_capsule_2',
    type: 'capsule',
    category: 'care',
    theme: 'party',
    name: 'Красная помада + Стразы',
    description: 'Яркий акцент на губах с праздничным декором',
    image: '/images/capsules/care/party/capsule-2.jpg'
  },
  {
    id: 'care_party_item_3',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_2',
    name: 'Красная помада',
    description: 'Насыщенная красная помада с матовым финишем. Стойкая формула не растекается и держится весь вечер.',
    image: '/images/care/party/lipstick-red.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19760327251-color-riche',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/807080118/detail.aspx?size=1207173340' },
      { name: 'Ozon', url: 'https://ozon.ru/t/jQpD5If' }
    ]
  },
  {
    id: 'care_party_item_4',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_2',
    name: 'Стразы',
    description: 'Набор декоративных страз для макияжа. Легко фиксируются и создают праздничное настроение.',
    image: '/images/care/party/rhinestones.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000055599-pure-gold-stars',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/343296684/detail.aspx?size=510490115' },
      { name: 'Ozon', url: 'https://ozon.ru/t/3hJUzPF' }
    ]
  },

  // ============ МАКИЯЖ - РАБОТА ============

  {
    id: 'care_work_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'work',
    name: 'Нюдовая помада + Кремовые тени',
    description: 'Естественный и свежий офисный макияж',
    image: '/images/capsules/care/work/capsule-1.jpg'
  },
  {
    id: 'care_work_item_1',
    type: 'item',
    category: 'care',
    theme: 'work',
    capsule: 'care_work_capsule_1',
    name: 'Нюдовая помада',
    description: 'Нежная помада естественного оттенка с кремовой текстурой. Увлажняет губы и выглядит максимально натурально.',
    image: '/images/care/work/lipstick-nude.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000359867-rich-nude',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/868527127/detail.aspx?size=1308033060' },
      { name: 'Ozon', url: 'https://ozon.ru/t/wG8uBch' }
    ]
  },
  {
    id: 'care_work_item_2',
    type: 'item',
    category: 'care',
    theme: 'work',
    capsule: 'care_work_capsule_1',
    name: 'Кремовые нюдовые тени',
    description: 'Лёгкие кремовые тени с шиммером. Создают деликатное сияние на веках и не скатываются весь день.',
    image: '/images/care/work/cream-eyeshadow.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000007278-ultimate-nudes',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/373276873/detail.aspx?size=544938792' },
      { name: 'Ozon', url: 'https://ozon.ru/t/homM7FO' }
    ]
  },
  {
    id: 'care_work_capsule_2',
    type: 'capsule',
    category: 'care',
    theme: 'work',
    name: 'Тональная основа + Пудра',
    description: 'Идеальный тон для рабочего дня',
    image: '/images/capsules/care/work/capsule-2.jpg'
  },
  {
    id: 'care_work_item_3',
    type: 'item',
    category: 'care',
    theme: 'work',
    capsule: 'care_work_capsule_2',
    name: 'Тональная основа',
    description: 'Лёгкая тональная основа со средней степенью покрытия. Выравнивает тон, не создавая эффекта маски.',
    image: '/images/care/work/foundation.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/9481900002-perfect-cover',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/138742829/detail.aspx?size=235729482' },
      { name: 'Ozon', url: 'https://ozon.ru/t/BYnQ1ma' }
    ]
  },
  {
    id: 'care_work_item_4',
    type: 'item',
    category: 'care',
    theme: 'work',
    capsule: 'care_work_capsule_2',
    name: 'Пудра',
    description: 'Матирующая пудра с микронизированными частицами. Фиксирует макияж и убирает жирный блеск на весь день.',
    image: '/images/care/work/powder.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000451373-soft-blur-matte-setting',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/147796707/detail.aspx?size=248386617' },
      { name: 'Ozon', url: 'https://ozon.ru/t/DuNFOWt' }
    ]
  },

  // ============ МАКИЯЖ - УЧЕБА ============

  {
    id: 'care_study_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'study',
    name: 'Блеск для губ + Тушь',
    description: 'Быстрый и свежий макияж для универа',
    image: '/images/capsules/care/study/capsule-1.jpg'
  },
  {
    id: 'care_study_item_1',
    type: 'item',
    category: 'care',
    theme: 'study',
    capsule: 'care_study_capsule_1',
    name: 'Блеск для губ',
    description: 'Прозрачный блеск с лёгким увлажнением. Придаёт губам объём и свежий вид.',
    image: '/images/care/study/lip-gloss.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19760306117-le-grand-volume',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/115940834/detail.aspx?size=207488596' },
      { name: 'Ozon', url: 'https://ozon.ru/t/nP0mq4n' }
    ]
  },
  {
    id: 'care_study_item_2',
    type: 'item',
    category: 'care',
    theme: 'study',
    capsule: 'care_study_capsule_1',
    name: 'Тушь',
    description: 'Классическая тушь с разделяющей щёточкой. Создаёт естественный объём без комочков.',
    image: '/images/care/study/mascara.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/3216800001-cabaret-premiere',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/349497697/detail.aspx?size=517612016' },
      { name: 'Ozon', url: 'https://ozon.ru/t/ofzK316' }
    ]
  },
  {
    id: 'care_study_capsule_2',
    type: 'capsule',
    category: 'care',
    theme: 'study',
    name: 'Тональная основа + Консилер',
    description: 'Маскировка несовершенств без сложного макияжа',
    image: '/images/capsules/care/study/capsule-2.jpg'
  },
  {
    id: 'care_study_item_3',
    type: 'item',
    category: 'care',
    theme: 'study',
    capsule: 'care_study_capsule_2',
    name: 'Тональная основа',
    description: 'Лёгкая ВВ-основа с увлажнением. Подходит для ежедневного использования.',
    image: '/images/care/study/bb-cream.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/9481900002-perfect-cover',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/138742829/detail.aspx?size=235729482' },
      { name: 'Ozon', url: 'https://ozon.ru/t/BYnQ1ma' }
    ]
  },
  {
    id: 'care_study_item_4',
    type: 'item',
    category: 'care',
    theme: 'study',
    capsule: 'care_study_capsule_2',
    name: 'Консилер',
    description: 'Кремовый консилер со средней плотностью. Перекрывает покраснения и тени под глазами.',
    image: '/images/care/study/concealer.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000000799-perfect-concealer',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/663778504/detail.aspx?size=892317684' },
      { name: 'Ozon', url: 'https://ozon.ru/t/5U1Fmti' }
    ]
  },

  // ============ МАКИЯЖ - СВИДАНИЕ ============

  {
    id: 'care_date_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'date',
    name: 'Розовая помада + Шиммер-тени',
    description: 'Романтичный и нежный образ',
    image: '/images/capsules/care/date/capsule-1.jpg'
  },
  {
    id: 'care_date_item_1',
    type: 'item',
    category: 'care',
    theme: 'date',
    capsule: 'care_date_capsule_1',
    name: 'Нюдовая помада',
    description: 'Нежная розово-бежевая помада с матовым финишем. Выглядит очень естественно и романтично.',
    image: '/images/care/date/lipstick-rose.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000359867-rich-nude',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/868527127/detail.aspx?size=1308033060' },
      { name: 'Ozon', url: 'https://ozon.ru/t/91To1Cj' }
    ]
  },
  {
    id: 'care_date_item_2',
    type: 'item',
    category: 'care',
    theme: 'date',
    capsule: 'care_date_capsule_1',
    name: 'Палетка теней для век',
    description: 'Палетка с нежными розовыми и шиммерными оттенками. Создаёт мягкое сияние на веках.',
    image: '/images/care/date/eyeshadow-shimmer.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000007278-ultimate-nudes',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/379906475/detail.aspx?size=552731340' },
      { name: 'Ozon', url: 'https://ozon.ru/t/p5hHmGj' }
    ]
  },
  {
    id: 'care_date_capsule_2',
    type: 'capsule',
    category: 'care',
    theme: 'date',
    name: 'Румяна + Хайлайтер',
    description: 'Свежий и сияющий образ для свидания',
    image: '/images/capsules/care/date/capsule-2.jpg'
  },
  {
    id: 'care_date_item_3',
    type: 'item',
    category: 'care',
    theme: 'date',
    capsule: 'care_date_capsule_2',
    name: 'Румяна',
    description: 'Нежные розовые румяна с лёгким шиммером. Освежают лицо и придают здоровый румянец.',
    image: '/images/care/date/blush.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/89459600003-blusher-reloaded',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/10111638/detail.aspx?size=32994153' },
      { name: 'Ozon', url: 'https://ozon.ru/t/yCApLP4' }
    ]
  },
  {
    id: 'care_date_item_4',
    type: 'item',
    category: 'care',
    theme: 'date',
    capsule: 'care_date_capsule_2',
    name: 'Хайлайтер',
    description: 'Хайлайтер с мелкими частицами. Создаёт деликатное сияние на скулах и над губой.',
    image: '/images/care/date/highlighter.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/89458900002-highlight-reloaded',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/17196521/detail.aspx?size=47954737' },
      { name: 'Ozon', url: 'https://ozon.ru/t/5U1FpBq' }
    ]
  },

  // ============ МАКИЯЖ - СПОРТ ============

  {
    id: 'care_sport_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'sport',
    name: 'Водостойкая тушь + Гигиеническая помада',
    description: 'Минимальный уход для активных тренировок',
    image: '/images/capsules/care/sport/capsule-1.jpg'
  },
  {
    id: 'care_sport_item_1',
    type: 'item',
    category: 'care',
    theme: 'sport',
    capsule: 'care_sport_capsule_1',
    name: 'Тушь',
    description: 'Водостойкая тушь, которая не осыпается и не размазывается даже во время интенсивного потоотделения.',
    image: '/images/care/sport/waterproof-mascara.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/3216800001-cabaret-premiere',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/93048650/detail.aspx?size=149050945' },
      { name: 'Ozon', url: 'https://ozon.ru/t/yCAav89' }
    ]
  },
  {
    id: 'care_sport_item_2',
    type: 'item',
    category: 'care',
    theme: 'sport',
    capsule: 'care_sport_capsule_1',
    name: 'Гигиеническая помада',
    description: 'Увлажняющая гигиеническая помада с SPF. Защищает губы от обветривания и сухости.',
    image: '/images/care/sport/lip-balm.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000052026-panthenol',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/162924063/detail.aspx?size=271354854' },
      { name: 'Ozon', url: 'https://ozon.ru/t/rlVq2pY' }
    ]
  },
  {
    id: 'care_sport_capsule_2',
    type: 'capsule',
    category: 'care',
    theme: 'sport',
    name: 'Гель для бровей',
    description: 'Аккуратные брови без макияжа',
    image: '/images/capsules/care/sport/capsule-2.jpg'
  },
  {
    id: 'care_sport_item_3',
    type: 'item',
    category: 'care',
    theme: 'sport',
    capsule: 'care_sport_capsule_2',
    name: 'Гель для бровей',
    description: 'Фиксирующий гель для бровей с натуральным составом. Укладывает волоски и держит форму весь день.',
    image: '/images/care/sport/brow-gel.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000062318-brow-fix-gel',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/51524888/detail.aspx?size=97285677' },
      { name: 'Ozon', url: 'https://ozon.ru/t/91246fN' }
    ]
  }
];
