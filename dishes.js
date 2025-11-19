const dishes = [
  // === СУПЫ (6 блюд: 2 рыбных, 2 мясных, 2 вегетарианских) ===
  { keyword: "fish-soup-1", name: "Уха классическая", price: 160, category: "soup", count: "300 мл", kind: "fish", image: "???" },
  { keyword: "fish-soup-2", name: "Суп из лосося с овощами", price: 180, category: "soup", count: "300 мл", kind: "fish", image: "???" },
  { keyword: "meat-soup-1", name: "Куриный суп с лапшой", price: 120, category: "soup", count: "300 мл", kind: "meat", image: "https://rugpt.io/_next/image?url=https%3A%2F%2Frugpt.hb.bizmrg.com%2Fchats%2Fe1c884cc-85ea-4745-88a8-8effc9aef296%2F488cf29b-0252-4807-bb30-14a2c5986c59.png&w=3840&q=100" },
  { keyword: "meat-soup-2", name: "Борщ с говядиной", price: 140, category: "soup", count: "300 мл", kind: "meat", image: "???" },
  { keyword: "veg-soup-1", name: "Свекольник с яйцом", price: 130, category: "soup", count: "300 мл", kind: "veg", image: "https://rugpt.io/_next/image?url=https%3A%2F%2Frugpt.hb.bizmrg.com%2Fchats%2F4add59ff-679b-4cda-8a5b-6916aace38ed%2Fe9fe4888-7d05-429f-8713-bb6cb0255936.png&w=3840&q=100" },
  { keyword: "veg-soup-2", name: "Грибной крем-суп", price: 150, category: "soup", count: "300 мл", kind: "veg", image: "https://rugpt.io/_next/image?url=https%3A%2F%2Frugpt.hb.bizmrg.com%2Fchats%2F4add59ff-679b-4cda-8a5b-6916aace38ed%2F5bc70949-5a55-4f4c-9885-87d7ade6dc28.png&w=3840&q=100" },

  // === ГЛАВНЫЕ БЛЮДА (6 блюд: 2 рыбных, 2 мясных, 2 вегетарианских) ===
  { keyword: "fish-main-1", name: "Лосось на пару с киноа", price: 450, category: "main", count: "380 г", kind: "fish", image: "https://i.pinimg.com/originals/5d/ef/24/5def249dba97180ad98f6161f378d767.jpg" },
  { keyword: "fish-main-2", name: "Форель с лимоном и овощами", price: 480, category: "main", count: "400 г", kind: "fish", image: "???" },
  { keyword: "meat-main-1", name: "Курица с овощами и рисом", price: 320, category: "main", count: "400 г", kind: "meat", image: "https://i.pinimg.com/originals/54/f4/77/54f477a8c3d67774fd047a3076eaaccc.jpg" },
  { keyword: "meat-main-2", name: "Говядина по-строгановски", price: 390, category: "main", count: "380 г", kind: "meat", image: "???" },
  { keyword: "veg-main-1", name: "Овощное рагу с тофу", price: 290, category: "main", count: "420 г", kind: "veg", image: "https://i.pinimg.com/originals/b9/4d/88/b94d885a577677f1f20e90da1dc1694b.jpg" },
  { keyword: "veg-main-2", name: "Паста с овощами и базиликом", price: 310, category: "main", count: "400 г", kind: "veg", image: "???" },

  // === САЛАТЫ И СТАРТЕРЫ (6 блюд: 1 рыбный, 1 мясной, 4 вегетарианских) ===
  { keyword: "starter-fish", name: "Тартар из лосося", price: 220, category: "starter", count: "200 г", kind: "fish", image: "???" },
  { keyword: "starter-meat", name: "Куриные наггетсы с соусом", price: 190, category: "starter", count: "250 г", kind: "meat", image: "???" },
  { keyword: "starter-veg-1", name: "Греческий салат", price: 180, category: "starter", count: "250 г", kind: "veg", image: "???" },
  { keyword: "starter-veg-2", name: "Салат Цезарь с курицей", price: 200, category: "starter", count: "250 г", kind: "veg", image: "???" },
  { keyword: "starter-veg-3", name: "Овощи гриль", price: 170, category: "starter", count: "220 г", kind: "veg", image: "???" },
  { keyword: "starter-veg-4", name: "Авокадо с креветками", price: 240, category: "starter", count: "200 г", kind: "veg", image: "???" },

  // === НАПИТКИ (6 блюд: 3 холодных, 3 горячих) ===
  { keyword: "cold-drink-1", name: "Свежевыжатый апельсиновый сок", price: 140, category: "drink", count: "250 мл", kind: "cold", image: "https://media.leverans.ru/product_images_inactive/perm/belyi-slon/IMG_7428_1.jpg" },
  { keyword: "cold-drink-2", name: "Клюквенный морс", price: 90, category: "drink", count: "250 мл", kind: "cold", image: "https://avatars.mds.yandex.net/i?id=fad77a007fabcbd0751badebcaad1ca3_l-3514751-images-thumbs&n=13" },
  { keyword: "cold-drink-3", name: "Лимонад домашний", price: 110, category: "drink", count: "300 мл", kind: "cold", image: "???" },
  { keyword: "hot-drink-1", name: "Зелёный чай", price: 60, category: "drink", count: "250 мл", kind: "hot", image: "https://avatars.mds.yandex.net/i?id=0afaa6c3d4757f1787cb5f8b60cb9c17_l-4146380-images-thumbs&n=13" },
  { keyword: "hot-drink-2", name: "Кофе американо", price: 120, category: "drink", count: "200 мл", kind: "hot", image: "???" },
  { keyword: "hot-drink-3", name: "Какао с зефиром", price: 130, category: "drink", count: "250 мл", kind: "hot", image: "???" },

  // === ДЕСЕРТЫ (6 блюд: 3 маленьких, 2 средних, 1 большой) ===
  { keyword: "dessert-small-1", name: "Тирамису", price: 180, category: "dessert", count: "100 г", kind: "small", image: "???" },
  { keyword: "dessert-small-2", name: "Шоколадный мусс", price: 160, category: "dessert", count: "120 г", kind: "small", image: "???" },
  { keyword: "dessert-small-3", name: "Фруктовое желе", price: 120, category: "dessert", count: "150 г", kind: "small", image: "???" },
  { keyword: "dessert-medium-1", name: "Чизкейк Нью-Йорк", price: 220, category: "dessert", count: "200 г", kind: "medium", image: "???" },
  { keyword: "dessert-medium-2", name: "Панна-котта с ягодами", price: 200, category: "dessert", count: "180 г", kind: "medium", image: "???" },
  { keyword: "dessert-large", name: "Торт «Медовик»", price: 280, category: "dessert", count: "250 г", kind: "large", image: "???" }
];
