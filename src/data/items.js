// function getImagePath(category, theme, filename) {
//    return `/images/${category}/${theme}/${filename}`;
// }

export const ITEMS_DATABASE = [
  {
  // ============ ОБРАЗ - ВЕЧЕРИНКА ============

    id: 'outfit_party_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'party',
    name: 'Кружевной корсет + джинсовая юбка',
    description: 'Женственный вечерний образ',
    //image: '/images/capsules/outfit/party/capsule-1.jpg'
  },
  {
    id: 'outfit_party_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'party',
    capsule: 'outfit_party_capsule_1',
    name: 'Кружевной белый корсет',
    description: 'Нежный кружевной корсет, идеальный для праздничной вечеринки',
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
    description: 'Короткая джинсовая юбка для нежного, но уверенного образа',
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
    name: 'Кожаный топ + кожаные брюки',
    description: 'Смелый и стильный образ: кожаный топ с кожаными брюками для дерзкой девушки',
    //image: '/images/capsules/outfit/party/capsule-2.jpg'
  },
  {
    id: 'outfit_party_item_3',
    type: 'item',
    category: 'outfit',
    theme: 'party',
    capsule: 'outfit_party_capsule_2',
    name: 'Кожаный чёрный топ',
    description: 'Стильный чёрный топ из мягкой кожи',
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
    name: 'Кожаные брюки',
    description: 'Черные кожаные брюки-клёш',
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
    name: 'Блузка + юбка-карандаш',
    description: 'Элегантный офисный образ',
    //image: '/images/capsules/outfit/work/capsule-1.jpg'
  },
  {
    id: 'outfit_work_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'work',
    capsule: 'outfit_work_capsule_1',
    name: 'Шёлковая белая блузка',
    description: 'Изысканная шелковая блузка с идеальной посадкой',
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
    name: 'Юбка карандаш чёрная',
    description: 'Классическая офисная юбка-карандаш',
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
    name: 'Чёрный пиджак + чёрные брюки',
    description: 'Строгий и стильный образ',
    //image: '/images/capsules/outfit/work/capsule-2.jpg'
  },
  {
    id: 'outfit_work_item_3',
    type: 'item',
    category: 'outfit',
    theme: 'work',
    capsule: 'outfit_work_capsule_2',
    name: 'Чёрный пиджак',
    description: 'Строгий чёрный пиджак прямого кроя из качественных материалов',
    image: '/images/outfit/work/black-jacket.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1KRK3/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: "https://www.wildberries.ru/catalog/208437035/detail.aspx" },
      { name: 'Ozon', url: "https://ozon.ru/t/b2door3" }
    ]
  },
  {
    id: 'outfit_work_item_4',
    type: 'item',
    category: 'outfit',
    theme: 'work',
    capsule: 'outfit_work_capsule_2',
    name: 'Чёрные брюки',
    description: 'Классические чёрные брюки из приятной ткани - универсальная база для рабочих образов',
    image: '/images/outfit/work/black-pants.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1CUDD/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: "https://www.wildberries.ru/catalog/58253040/detail.aspx"},
      { name: 'Ozon', url: 'https://ozon.ru/t/rlb5Og1' }
    ]
  },

  // ============ ОБРАЗ - УЧЕБА ============

  {
    id: 'outfit_study_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'study',
    name: 'Свитер + джинсы',
    description: 'Уютный и удобный образ для учёбы',
    //image: '/images/capsules/outfit/study/capsule-1.jpg'
  },
  {
    id: 'outfit_study_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'study',
    capsule: 'outfit_study_capsule_1',
    name: 'Свитер синий',
    description: 'Теплый синий свитер для комфортного образа',
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
    description: 'Классические голубые джинсы',
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
    name: 'Белая рубашка + серые брюки',
    description: 'Строгий, но стильный учебный образ',
    //image: '/images/capsules/outfit/study/capsule-2.jpg'
  },
  {
    id: 'outfit_study_item_3',
    type: 'item',
    category: 'outfit',
    theme: 'study',
    capsule: 'outfit_study_capsule_2',
    name: 'Белая рубашка',
    description: 'Белая рубашка из хлопка с лёгкой текстурой. Можно сочетать как с джинсами, так и с брюками и пиджаком',
    image: '/images/outfit/study/shirt.jpg',
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
    description: 'Удобные серые брюки. Нейтральный оттенок легко комбинируется с футболками, свитерами и рубашками',
    image: '/images/outfit/study/grey-pants.jpg',
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
    name: 'Бежевое платье + бежевый кардиган',
    description: 'Нежный романтичный образ',
    //image: '/images/capsules/outfit/date/capsule-1.jpg'
  },
  {
    id: 'outfit_date_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'date',
    capsule: 'outfit_date_capsule_1',
    name: 'Бежевое платье',
    description: 'Женственное платье подчеркнёт ваши достоинства и сразит всех наповал своей лёгкостью и сексуальностью',
    image: '/images/outfit/date/beige-dress.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/mp002xw1egr2/',
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
    name: 'Бежевый кардиган',
    description: 'Элегантные бежевый кружевной кардиган добавит образу нежности и игривости',
    image: '/images/outfit/date/beige-cardigan.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/mp002xw1d81z/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/382460587/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/p5ou3fq' }
    ]
  },
  {
    id: 'outfit_date_capsule_2',
    type: 'capsule',
    category: 'outfit',
    theme: 'date',
    name: 'Шёлковый белый топ + светлые джинсы клёш',
    description: 'Соблазнительный и стильный образ',
    //image: '/images/capsules/outfit/date/capsule-2.jpg'
  },
  {
    id: 'outfit_date_item_3',
    type: 'item',
    category: 'outfit',
    theme: 'date',
    capsule: 'outfit_date_capsule_2',
    name: 'Шёлковый белый топ',
    description: 'Изысканный топ из натурального шёлка. Нежный крой создаёт романтичный и женственный образ',
    image: '/images/outfit/date/white-top.jpg',
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
    description: 'Джинсы клёш из мягкого денима светлого оттенка. Низкая посадка добавит образу женственности, а расклешённый крой — легкости и свободы. Идеальны для активного свидания',
    image: '/images/outfit/date/jeans.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/mp002xw1eozs/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/786119924/detail.aspx'},
      { name: 'Ozon', url: 'https://ozon.ru/t/tK0KJMM' }
    ]
  },

   // ============ ОБРАЗ - СПОРТ ============

  {
    id: 'outfit_sport_capsule_1',
    type: 'capsule',
    category: 'outfit',
    theme: 'sport',
    name: 'Спортивный комбинезон + олимпийка',
    description: 'Стильный и удобный для тренировок',
    //image: '/images/capsules/outfit/sport/capsule-1.jpg'
  },
  {
    id: 'outfit_sport_item_1',
    type: 'item',
    category: 'outfit',
    theme: 'sport',
    capsule: 'outfit_sport_capsule_1',
    name: 'Спортивный комбинезон',
    description: 'Цельный спортивный комбинезон из мягкого, дышащего материала',
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
    name: 'Олимпийка',
    description: 'Дополнит образ и согреет в прохладную погоду или под конционерами в зале',
    image: '/images/outfit/sport/olimp.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/mp002xw1dgv8/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/142680838/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/6dabbJN' }
    ]
  },
  {
    id: 'outfit_sport_capsule_2',
    type: 'capsule',
    category: 'outfit',
    theme: 'sport',
    name: 'Топ + леггинсы',
    description: 'Классический спортивный сет',
    //image: '/images/capsules/outfit/sport/capsule-2.jpg'
  },
  {
    id: 'outfit_sport_item_2',
    type: 'item',
    category: 'outfit',
    theme: 'sport',
    capsule: 'outfit_sport_capsule_2',
    name: 'Спортивный топ',
    description: 'Дышащий топ для активных тренировок',
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
    description: 'Удобные чёрные леггинсы из эластичного, дышащего материала с высокой посадкой',
    image: '/images/outfit/sport/leggins.jpg',
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
    name: 'Сумка + серьги',
    description: 'Вечерний комплект аксессуаров',
    //image: '/images/capsules/accessories/party/capsule-1.jpg'
  },
  {
    id: 'acc_party_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'party',
    capsule: 'acc_party_capsule_1',
    name: 'Сумка',
    description: 'Элегантная мини-сумка',
    image: '/images/accessories/party/bag.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1CWBW/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/156624460/detail.aspx?size=261256450'},
      { name: 'Ozon', url: 'https://ozon.ru/t/7Wq2Aho' }
    ]
  },
  {
    id: 'acc_party_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'party',
    capsule: 'acc_party_capsule_1',
    name: 'Серьги',
    description: 'Изящные серьги для вечеринки',
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
    name: 'Клатч + чокер',
    description: 'Вечерний сет',
    //image: '/images/capsules/accessories/party/capsule-2.jpg'
  },
  {
    id: 'acc_party_item_3',
    type: 'item',
    category: 'accessories',
    theme: 'party',
    capsule: 'acc_party_capsule_2',
    name: 'Клатч',
    description: 'Маленький элегантный клатч сделает ваш образ роскошным',
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
    description: 'Чёрный бархатный чокер с подвеской',
    image: '/images/accessories/party/choker.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/mp002xw1cywc/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/209126006/detail.aspx'},
      { name: 'Ozon', url: 'https://ozon.ru/t/aH1bVr4' }
    ]
  },

  // ============ АКСЕССУАРЫ - РАБОТА ============

  {
    id: 'acc_work_capsule_1',
    type: 'capsule',
    category: 'accessories',
    theme: 'work',
    name: 'Часы + сумка',
    description: 'Классический деловой набор',
    //image: '/images/capsules/accessories/work/capsule-1.jpg'
  },
  {
    id: 'acc_work_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'work',
    capsule: 'acc_work_capsule_1',
    name: 'Часы классические',
    description: 'Элегантные женские часы',
    image: '/images/accessories/work/watch.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/RTLAEP370901/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/75451387/detail.aspx?size=127013840'},
      { name: 'Ozon', url: 'https://ozon.ru/t/q40WD1z' }
    ]
  },
  {
    id: 'acc_work_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'work',
    capsule: 'acc_work_capsule_1',
    name: 'Сумка',
    description: 'Кожаная сумка, в которую поместится даже ноутбук',
    image: '/images/accessories/work/big-bag.jpg',
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
    name: 'Рюкзак + ремень + серьги',
    description: 'Сдержанные офисные акценты',
    //image: '/images/capsules/accessories/work/capsule-2.jpg'
  },
  {
    id: 'acc_work_item_3',
    type: 'item',
    category: 'accessories',
    theme: 'work',
    capsule: 'acc_work_capsule_2',
    name: 'Ремень',
    description: 'Тонкий чёрный ремень с пряжкой',
    image: '/images/accessories/work/belt.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW0Q4Q9/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/145529980/detail.aspx' },
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
    description: 'Аккуратные сдержанные, но эстетичные серьги',
    image: '/images/accessories/work/earrings.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/mp002xw1d8eu/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/99808291/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/ZplxIpT' }
    ]
  },
  {
    id: 'acc_work_item_5',
    type: 'item',
    category: 'accessories',
    theme: 'work',
    capsule: 'acc_work_capsule_2',
    name: 'Рюкзак',
    description: 'Небольшой стильный и очень удобный рюкзак для ценительниц комфорта',
    image: '/images/accessories/work/backpack.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/mp002xw0g1nx/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/253138570/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/VaQirhv' }
    ]
  },

  // ============ АКСЕССУАРЫ - УЧЕБА ============

  {
    id: 'acc_study_capsule_1',
    type: 'capsule',
    category: 'accessories',
    theme: 'study',
    name: 'Рюкзак + заколки',
    description: 'Практичный и милый набор',
    //image: '/images/capsules/accessories/study/capsule-1.jpg'
  },
  {
    id: 'acc_study_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'study',
    capsule: 'acc_study_capsule_1',
    name: 'Рюкзак',
    description: 'Повседневный рюкзак для учёбы',
    image: '/images/accessories/study/backpack.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1DMTW/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/437319749/detail.aspx?size=620265747'},
      { name: 'Ozon', url: 'https://ozon.ru/t/DusWMfJ' }
    ]
  },
  {
    id: 'acc_study_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'study',
    capsule: 'acc_study_capsule_1',
    name: 'Заколки',
    description: 'Набор стильных заколок',
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
    name: 'Сумка на плечо + гетры',
    description: 'Сет для модниц, которые хотят выглядеть комфортно, просто и стильно',
    //image: '/images/capsules/accessories/study/capsule-2.jpg'
  },
  {
    id: 'acc_study_item_3',
    type: 'item',
    category: 'accessories',
    theme: 'study',
    capsule: 'acc_study_capsule_2',
    name: 'Сумка на плечо',
    description: 'Удобная сумка через плечо',
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
    description: 'Тёплые гетры для прохладной погоды',
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
    name: 'Сумка + cерьги',
    description: 'Нежный комплект для романтичного вечера',
    //image: '/images/capsules/accessories/date/capsule-1.jpg'
  },
  {
    id: 'acc_date_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'date',
    capsule: 'acc_date_capsule_1',
    name: 'Сумка',
    description: 'Элегантная сумка через плечо нейтрального оттенка. Компактная, но вместительная — идеальна для свидания',
    image: '/images/accessories/date/bag.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1EN35/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/337953705/detail.aspx?size=504119689'},
      { name: 'Ozon', url: 'https://ozon.ru/t/sSR4TGN' }
    ]
  },
  {
    id: 'acc_date_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'date',
    capsule: 'acc_date_capsule_1',
    name: 'Серьги',
    description: 'Изящные серьги с нежным блеском. Подчеркивают женственность и добавляют образу лёгкости',
    image: '/images/accessories/date/earrings.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW131US/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/308118083/detail.aspx'},
      { name: 'Ozon', url: 'https://ozon.ru/t/7WOlr3r' }
    ]
  },
  {
    id: 'acc_date_capsule_2',
    type: 'capsule',
    category: 'accessories',
    theme: 'date',
    name: 'Сумка + кулон + лента для волос',
    description: 'Романтичный набор для особого вечера',
    //image: '/images/capsules/accessories/date/capsule-2.jpg'
  },
  {
    id: 'acc_date_item_3',
    type: 'item',
    category: 'accessories',
    theme: 'date',
    capsule: 'acc_date_capsule_2',
    name: 'Сумка',
    description: 'Небольшая сумка-кроссбоди нежного цвета. Идеально дополняет романтичный образ',
    image: '/images/accessories/date/bag-pink.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/mp002xw1dn2v/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/243803300/detail.aspx?targetUrl=MI'},
      { name: 'Ozon', url: 'https://ozon.ru/t/EAnOb9Z' }
    ]
  },
  {
    id: 'acc_date_item_4',
    type: 'item',
    category: 'accessories',
    theme: 'date',
    capsule: 'acc_date_capsule_2',
    name: 'Кулон',
    description: 'Нежная подвеска добавит вашему образу утончённости',
    image: '/images/accessories/date/pendant.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/rtlaes096501/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/248958621/detail.aspx?size=389701104'},
      { name: 'Ozon', url: 'https://ozon.ru/t/ueSv9PA' }
    ]
  },
  {
    id: 'acc_date_item_5',
    type: 'item',
    category: 'accessories',
    theme: 'date',
    capsule: 'acc_date_capsule_2',
    name: 'Лента для волос',
    description: 'Шёлковая лента для волос нежного оттенка на заколке. Завершает романтичный образ',
    image: '/images/accessories/date/hair-ribbon.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/rtlaei835101/',
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
    name: 'Сумка + повязка на голову',
    description: 'Практичный набор для тренировок',
    //image: '/images/capsules/accessories/sport/capsule-1.jpg'
  },
  {
    id: 'acc_sport_item_1',
    type: 'item',
    category: 'accessories',
    theme: 'sport',
    capsule: 'acc_sport_capsule_1',
    name: 'Сумка',
    description: 'Лёгкая спортивная сумка из прочной ткани. Вместительная и удобная',
    image: '/images/accessories/sport/gym-bag.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/MP002XW1KD9M/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/374923063/detail.aspx'},
      { name: 'Ozon', url: 'https://ozon.ru/t/q40G902' }
    ]
  },
  {
    id: 'acc_sport_item_2',
    type: 'item',
    category: 'accessories',
    theme: 'sport',
    capsule: 'acc_sport_capsule_1',
    name: 'Повязка на голову',
    description: 'Мягкая повязка отводит влагу и убирает волосы с лица. Не скользит во время тренировки',
    image: '/images/accessories/sport/headband.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/rtlafd524201/',
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
    name: 'Поясная сумка + умные часы + перчатки',
    description: 'Технологичный набор для активного спорта',
    //image: '/images/capsules/accessories/sport/capsule-2.jpg'
  },
  {
    id: 'acc_sport_item_3',
    type: 'item',
    category: 'accessories',
    theme: 'sport',
    capsule: 'acc_sport_capsule_2',
    name: 'Поясная сумка',
    description: 'Лёгкая и вместительная сумка на пояс станет идеальным решением для кардио-тренировки',
    image: '/images/accessories/sport/sports-bag.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/rtladh880801/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/154006434/detail.aspx'},
      { name: 'Ozon', url: 'https://ozon.ru/t/LnFVYO6' }
    ]
  },
  {
    id: 'acc_sport_item_4',
    type: 'item',
    category: 'accessories',
    theme: 'sport',
    capsule: 'acc_sport_capsule_2',
    name: 'Перчатки для фитнеса',
    description: 'Дышащие перчатки с усиленными ладонями. Защищают руки от мозолей и улучшают хват',
    image: '/images/accessories/sport/fitness-gloves.jpg',
    mainMarketplace: 'Ламода',
    mainMarketplaceUrl: 'https://www.lamoda.ru/p/RTLABC793604/',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/760455161/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/d78bgDR' }
    ]
  },
  {
    id: 'acc_sport_item_5',
    type: 'item',
    category: 'accessories',
    theme: 'sport',
    capsule: 'acc_sport_capsule_2',
    name: 'Умные часы',
    description: 'Фитнес-трекер с пульсометром и шагомером. Отслеживает активность и помогает достигать целей',
    image: '/images/accessories/sport/smart-watch.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000401930-redmi-watch-5-active',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/732874146/detail.aspx'},
      { name: 'Ozon', url: 'https://ozon.ru/t/Wv484uw' }
    ]
  },
 // ============ МАКИЯЖ - ВЕЧЕРИНКА ============

  {
    id: 'care_party_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'party',
    name: 'Смоки айс',
    description: 'Драматичный вечерний макияж с дымчатым эффектом',
    //image: '/images/capsules/care/party/capsule-1.jpg'
  },
  {
    id: 'care_party_item_1',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_1',
    name: 'Палетка теней для век',
    description: 'Насыщенная палетка с матовыми и шиммерными оттенками. Идеальна для создания смоки айс',
    image: '/images/care/party/palette.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000129129-quadro-eleganto',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/494952096/detail.aspx?targetUrl=MI' },
      { name: 'Ozon', url: 'https://ozon.ru/t/Wv48ROn' }
    ]
  },
  {
    id: 'care_party_item_2',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_1',
    name: 'Накладные ресницы',
    description: 'Объёмные накладные ресницы с эффектом кукольного взгляда. Легко крепятся и держатся всю ночь',
    image: '/images/care/party/lashes.jpg',
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
    name: 'Красная помада + стразы',
    description: 'Яркий акцент на губах с праздничным декором',
    //image: '/images/capsules/care/party/capsule-2.jpg'
  },
  {
    id: 'care_party_item_3',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_2',
    name: 'Красная помада',
    description: 'Насыщенная красная помада привлечёт внимание и сделает вас звездой вечеринки',
    image: '/images/care/party/lipstick-red.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19760327251-color-riche',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/807092863/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/Lnxfqin' }
    ]
  },
  {
    id: 'care_party_item_4',
    type: 'item',
    category: 'care',
    theme: 'party',
    capsule: 'care_party_capsule_2',
    name: 'Стразы',
    description: 'Набор декоративных страз для макияжа. Легко фиксируются и создают праздничное настроение',
    image: '/images/care/party/shinestones.jpg',
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
    name: 'Нюдовая помада + нюдовые тени',
    description: 'Естественный и свежий офисный макияж',
    //image: '/images/capsules/care/work/capsule-1.jpg'
  },
  {
    id: 'care_work_item_1',
    type: 'item',
    category: 'care',
    theme: 'work',
    capsule: 'care_work_capsule_1',
    name: 'Нюдовая помада',
    description: 'Нежная помада естественного оттенка с кремовой текстурой. Увлажняет губы и выглядит максимально натурально',
    image: '/images/care/work/lipstick-nude.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000359867-rich-nude',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/139279942/detail.aspx?targetUrl=MI' },
      { name: 'Ozon', url: 'https://ozon.ru/t/MtFEX8i' }
    ]
  },
  {
    id: 'care_work_item_2',
    type: 'item',
    category: 'care',
    theme: 'work',
    capsule: 'care_work_capsule_1',
    name: 'Палетка теней для век',
    description: 'Лёгкие нюдовые тени создадут деликатное сияние на веках и подчеркнут вашу естественную красоту',
    image: '/images/care/work/eyeshadow.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000007278-ultimate-nudes',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/10168018/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/b2wr9eD' }
    ]
  },
  {
    id: 'care_work_capsule_2',
    type: 'capsule',
    category: 'care',
    theme: 'work',
    name: 'Тональная основа + пудра',
    description: 'Идеальный тон для рабочего дня освежит ваше прекрасное лицо',
    //image: '/images/capsules/care/work/capsule-2.jpg'
  },
  {
    id: 'care_work_item_3',
    type: 'item',
    category: 'care',
    theme: 'work',
    capsule: 'care_work_capsule_2',
    name: 'Тональная основа',
    description: 'Лёгкая тональная основа со средней степенью покрытия. Выравнивает тон, не создавая эффекта маски',
    image: '/images/care/work/ton.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/9481900002-perfect-cover',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/138742829/detail.aspx?size=235729482' },
      { name: 'Ozon', url: 'https://ozon.ru/t/c0KMC9X' }
    ]
  },
  {
    id: 'care_work_item_4',
    type: 'item',
    category: 'care',
    theme: 'work',
    capsule: 'care_work_capsule_2',
    name: 'Пудра',
    description: 'Матирующая пудра фиксирует макияж и убирает жирный блеск на весь день',
    image: '/images/care/work/powder.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000451373-soft-blur-matte-setting',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/147796707/detail.aspx?size=248386617' },
      { name: 'Ozon', url: 'https://ozon.ru/t/jQHVKby' }
    ]
  },

  // ============ МАКИЯЖ - УЧЕБА ============

  {
    id: 'care_study_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'study',
    name: 'Блеск для губ + тушь',
    description: 'Быстрый и свежий макияж для учёбы',
    //image: '/images/capsules/care/study/capsule-1.jpg'
  },
  {
    id: 'care_study_item_1',
    type: 'item',
    category: 'care',
    theme: 'study',
    capsule: 'care_study_capsule_1',
    name: 'Блеск для губ',
    description: 'Блеск с лёгким увлажнением. Придаёт губам объём и свежий вид',
    image: '/images/care/study/lip-gloss.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19760306117-le-grand-volume',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/15904002/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/aHWdQqZ' }
    ]
  },
  {
    id: 'care_study_item_2',
    type: 'item',
    category: 'care',
    theme: 'study',
    capsule: 'care_study_capsule_1',
    name: 'Тушь',
    description: 'Классическая тушь с разделяющей щёточкой. Создаёт естественный объём без комочков',
    image: '/images/care/study/mascara.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/3216800001-cabaret-premiere',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/349497702/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/ofzK316' }
    ]
  },
  {
    id: 'care_study_capsule_2',
    type: 'capsule',
    category: 'care',
    theme: 'study',
    name: 'Консилер + цветная тушь',
    description: 'Маскировка несовершенств без сложного макияжа',
    //image: '/images/capsules/care/study/capsule-2.jpg'
  },
  {
    id: 'care_study_item_3',
    type: 'item',
    category: 'care',
    theme: 'study',
    capsule: 'care_study_capsule_2',
    name: 'Консилер',
    description: 'Кремовый консилер со средней плотностью. Перекрывает покраснения и тени под глазами',
    image: '/images/care/study/concealer.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000000799-perfect-concealer',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/70492070/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/BYrunij' }
    ]
  },
  {
    id: 'care_study_item_4',
    type: 'item',
    category: 'care',
    theme: 'study',
    capsule: 'care_study_capsule_2',
    name: 'Цветная тушь',
    description: 'Цветная тушь разбавит скучные учебные будни и сделает ваш образ дерзким и ярким',
    image: '/images/care/study/color-mascara.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000162144-all-that-juice-mascara',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/892751736/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/jQ5u5Pf' }
    ]
  },
  // ============ МАКИЯЖ - СВИДАНИЕ ============

  {
    id: 'care_date_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'date',
    name: 'Розовая помада + розовые тени',
    description: 'Романтичный и нежный образ',
    //image: '/images/capsules/care/date/capsule-1.jpg'
  },
  {
    id: 'care_date_item_1',
    type: 'item',
    category: 'care',
    theme: 'date',
    capsule: 'care_date_capsule_1',
    name: 'Розовая помада',
    description: 'Нежная перламутрово-розовая помада будет очень романтично смотреться на губах и заворожит любого',
    image: '/images/care/date/lipstick-rose.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/3016400047-colour-elixir',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/806905792/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/BY6w97h' }
    ]
  },
  {
    id: 'care_date_item_2',
    type: 'item',
    category: 'care',
    theme: 'date',
    capsule: 'care_date_capsule_1',
    name: 'Палетка теней для век',
    description: 'Палетка с насыщенными розовыми оттенками создаст мягкое сияние на веках',
    image: '/images/care/date/eyeshadow-pink.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000143513-mini-match-palette',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/287591942/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/c0kG2XT' }
    ]
  },
  {
    id: 'care_date_capsule_2',
    type: 'capsule',
    category: 'care',
    theme: 'date',
    name: 'Румяна + хайлайтер',
    description: 'Свежий и сияющий образ для свидания',
    //image: '/images/capsules/care/date/capsule-2.jpg'
  },
  {
    id: 'care_date_item_3',
    type: 'item',
    category: 'care',
    theme: 'date',
    capsule: 'care_date_capsule_2',
    name: 'Румяна',
    description: 'Нежные розовые румяна освежат ваше прекрасное лицо и придадут здоровый румянец',
    image: '/images/care/date/blush.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000007948-flush-blush',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/10111638/detail.aspx?size=32994153' },
      { name: 'Ozon', url: 'https://ozon.ru/t/TzGgQ3t' }
    ]
  },
  {
    id: 'care_date_item_4',
    type: 'item',
    category: 'care',
    theme: 'date',
    capsule: 'care_date_capsule_2',
    name: 'Хайлайтер',
    description: 'Хайлайтер с мелкими частицами сделает из вас сияющую нимфу',
    image: '/images/care/date/highlighter.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000455221-capsule',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/17196521/detail.aspx?size=47954737' },
      { name: 'Ozon', url: 'https://ozon.ru/t/4kSqa4z' }
    ]
  },

  // ============ МАКИЯЖ - СПОРТ ============

  {
    id: 'care_sport_capsule_1',
    type: 'capsule',
    category: 'care',
    theme: 'sport',
    name: 'Водостойкая тушь + гигиеническая помада',
    description: 'Минимальный уход для активных тренировок',
    //image: '/images/capsules/care/sport/capsule-1.jpg'
  },
  {
    id: 'care_sport_item_1',
    type: 'item',
    category: 'care',
    theme: 'sport',
    capsule: 'care_sport_capsule_1',
    name: 'Тушь',
    description: 'Водостойкая тушь, которая не осыпается и не размазывается даже во время интенсивного потоотделения',
    image: '/images/care/sport/waterproof-mascara.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/3305000009-vamp-waterproof',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/568707708/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/3hmKusq' }
    ]
  },
  {
    id: 'care_sport_item_2',
    type: 'item',
    category: 'care',
    theme: 'sport',
    capsule: 'care_sport_capsule_1',
    name: 'Гигиеническая помада',
    description: 'Увлажняющая гигиеническая помада защитит губы от обветривания и сухости',
    image: '/images/care/sport/lip-balm.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000052026-panthenol',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/162924063/detail.aspx?size=271354854' },
      { name: 'Ozon', url: 'https://ozon.ru/t/3hmKnbk' }
    ]
  },
  {
    id: 'care_sport_capsule_2',
    type: 'capsule',
    category: 'care',
    theme: 'sport',
    name: 'Гель для бровей',
    description: 'Аккуратные брови без макияжа',
    //image: '/images/capsules/care/sport/capsule-2.jpg'
  },
  {
    id: 'care_sport_item_3',
    type: 'item',
    category: 'care',
    theme: 'sport',
    capsule: 'care_sport_capsule_2',
    name: 'Гель для бровей',
    description: 'Фиксирующий гель для бровей с натуральным составом. Укладывает волоски и держит форму весь день',
    image: '/images/care/sport/brow-gel.jpg',
    mainMarketplace: 'Золотое Яблоко',
    mainMarketplaceUrl: 'https://goldapple.ru/19000062318-brow-fix-gel',
    partnerMarketplaces: [
      { name: 'Wildberries', url: 'https://www.wildberries.ru/catalog/381083306/detail.aspx' },
      { name: 'Ozon', url: 'https://ozon.ru/t/ofLQE1u' }
    ]
  }
];

