const dishes = [
  // === СУПЫ (6 блюд: 2 рыбных, 2 мясных, 2 вегетарианских) ===
  { keyword: "fish-soup-1", name: "Уха классическая", price: 160, category: "soup", count: "300 мл", kind: "fish", image: "https://i.pinimg.com/originals/db/2d/26/db2d26f7d1372e91ee6e3a1de47a7406.jpg" },
  { keyword: "fish-soup-2", name: "Суп из лосося с овощами", price: 180, category: "soup", count: "300 мл", kind: "fish", image: "https://www.bahroma1.ru/goods/1200_800_uha.jpg" },
  { keyword: "meat-soup-1", name: "Куриный суп с лапшой", price: 120, category: "soup", count: "300 мл", kind: "meat", image: "https://rugpt.io/_next/image?url=https%3A%2F%2Frugpt.hb.bizmrg.com%2Fchats%2Fe1c884cc-85ea-4745-88a8-8effc9aef296%2F488cf29b-0252-4807-bb30-14a2c5986c59.png&w=3840&q=100" },
  { keyword: "meat-soup-2", name: "Борщ с говядиной", price: 140, category: "soup", count: "300 мл", kind: "meat", image: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_674e198f2146a638307fe33b_674e19e21b9398224bbbe32a/scale_1200" },
  { keyword: "veg-soup-1", name: "Свекольник с яйцом", price: 130, category: "soup", count: "300 мл", kind: "veg", image: "https://rugpt.io/_next/image?url=https%3A%2F%2Frugpt.hb.bizmrg.com%2Fchats%2F4add59ff-679b-4cda-8a5b-6916aace38ed%2Fe9fe4888-7d05-429f-8713-bb6cb0255936.png&w=3840&q=100" },
  { keyword: "veg-soup-2", name: "Грибной крем-суп", price: 150, category: "soup", count: "300 мл", kind: "veg", image: "https://rugpt.io/_next/image?url=https%3A%2F%2Frugpt.hb.bizmrg.com%2Fchats%2F4add59ff-679b-4cda-8a5b-6916aace38ed%2F5bc70949-5a55-4f4c-9885-87d7ade6dc28.png&w=3840&q=100" },

  // === ГЛАВНЫЕ БЛЮДА (6 блюд: 2 рыбных, 2 мясных, 2 вегетарианских) ===
  { keyword: "fish-main-1", name: "Лосось на пару с киноа", price: 450, category: "main", count: "380 г", kind: "fish", image: "https://i.pinimg.com/originals/5d/ef/24/5def249dba97180ad98f6161f378d767.jpg" },
  { keyword: "fish-main-2", name: "Форель с лимоном и овощами", price: 480, category: "main", count: "400 г", kind: "fish", image: "https://avatars.mds.yandex.net/i?id=b17225bf2624ebc66531bc70c2e19bb6_l-4479063-images-thumbs&n=13" },
  { keyword: "meat-main-1", name: "Курица с овощами и рисом", price: 320, category: "main", count: "400 г", kind: "meat", image: "https://i.pinimg.com/originals/54/f4/77/54f477a8c3d67774fd047a3076eaaccc.jpg" },
  { keyword: "meat-main-2", name: "Говядина по-строгановски", price: 390, category: "main", count: "380 г", kind: "meat", image: "https://avatars.mds.yandex.net/i?id=d858d833fed60952673ddec8e5a15672_l-11922792-images-thumbs&n=13" },
  { keyword: "veg-main-1", name: "Овощное рагу с тофу", price: 290, category: "main", count: "420 г", kind: "veg", image: "https://i.pinimg.com/originals/b9/4d/88/b94d885a577677f1f20e90da1dc1694b.jpg" },
  { keyword: "veg-main-2", name: "Паста с овощами и базиликом", price: 310, category: "main", count: "400 г", kind: "veg", image: "https://i.pinimg.com/originals/29/0c/3f/290c3f12030f8e331c17660fcedae441.jpg" },

  // === САЛАТЫ И СТАРТЕРЫ (6 блюд: 1 рыбный, 1 мясной, 4 вегетарианских) ===
  { keyword: "starter-fish", name: "Тартар из лосося", price: 220, category: "starter", count: "200 г", kind: "fish", image: "https://avatars.mds.yandex.net/i?id=ec6339ef930d2ebe99402211b404d664_l-9044992-images-thumbs&n=13" },
  { keyword: "starter-meat", name: "Куриные наггетсы с соусом", price: 190, category: "starter", count: "250 г", kind: "meat", image: "https://avatars.mds.yandex.net/i?id=dbd8fda2e623f5bade0732627d32977f_l-4090774-images-thumbs&n=13" },
  { keyword: "starter-veg-1", name: "Греческий салат", price: 180, category: "starter", count: "250 г", kind: "veg", image: "https://i.pinimg.com/736x/86/3e/97/863e973cb2f6a3e26265afa8dcafe68a.jpg" },
  { keyword: "starter-veg-2", name: "Салат Цезарь с курицей", price: 200, category: "starter", count: "250 г", kind: "veg", image: "https://avatars.mds.yandex.net/i?id=8465a205c6dc1908268dffc4bb9d9cc3_l-5227767-images-thumbs&n=13" },
  { keyword: "starter-veg-3", name: "Овощи гриль", price: 170, category: "starter", count: "220 г", kind: "veg", image: "https://i.pinimg.com/originals/5c/01/b8/5c01b89c27877a0d5b3807dc3c8ba12d.jpg" },
  { keyword: "starter-veg-4", name: "Авокадо с креветками", price: 240, category: "starter", count: "200 г", kind: "veg", image: "https://i.pinimg.com/736x/c7/78/db/c778db4da0a5f7e5532afaee4ffcdb6c.jpg" },

  // === НАПИТКИ (6 блюд: 3 холодных, 3 горячих) ===
  { keyword: "cold-drink-1", name: "Свежевыжатый апельсиновый сок", price: 140, category: "drink", count: "250 мл", kind: "cold", image: "https://media.leverans.ru/product_images_inactive/perm/belyi-slon/IMG_7428_1.jpg" },
  { keyword: "cold-drink-2", name: "Клюквенный морс", price: 90, category: "drink", count: "250 мл", kind: "cold", image: "https://avatars.mds.yandex.net/i?id=fad77a007fabcbd0751badebcaad1ca3_l-3514751-images-thumbs&n=13" },
  { keyword: "cold-drink-3", name: "Лимонад домашний", price: 110, category: "drink", count: "300 мл", kind: "cold", image: "https://avatars.mds.yandex.net/i?id=19b9210ede6fff7b8c0713dde54047fc2214ceb4-5086971-images-thumbs&n=13" },
  { keyword: "hot-drink-1", name: "Зелёный чай", price: 60, category: "drink", count: "250 мл", kind: "hot", image: "https://avatars.mds.yandex.net/i?id=0afaa6c3d4757f1787cb5f8b60cb9c17_l-4146380-images-thumbs&n=13" },
  { keyword: "hot-drink-2", name: "Кофе американо", price: 120, category: "drink", count: "200 мл", kind: "hot", image: "https://i.ytimg.com/vi/q21ZkEt7Ec4/maxresdefault.jpg" },
  { keyword: "hot-drink-3", name: "Какао с зефиром", price: 130, category: "drink", count: "250 мл", kind: "hot", image: "https://i.pinimg.com/736x/70/43/13/7043135cc6814ff6d7cc86153e8159fb.jpg" },

  // === ДЕСЕРТЫ (6 блюд: 3 маленьких, 2 средних, 1 большой) ===
  { keyword: "dessert-small-1", name: "Тирамису", price: 180, category: "dessert", count: "100 г", kind: "small", image: "https://avatars.mds.yandex.net/i?id=028a87be9cbdbd40b9a66e291471b5d7_l-4347893-images-thumbs&n=13" },
  { keyword: "dessert-small-2", name: "Шоколадный мусс", price: 160, category: "dessert", count: "120 г", kind: "small", image: "https://cdn.lifehacker.ru/wp-content/uploads/2024/11/shutterstock_1033452436_1_1685022770_1730562637.jpg" },
  { keyword: "dessert-small-3", name: "Фруктовое желе", price: 120, category: "dessert", count: "150 г", kind: "small", image: "https://avatars.mds.yandex.net/i?id=3065dec106110e253f349d98d13d727a_l-12511685-images-thumbs&n=13" },
  { keyword: "dessert-medium-1", name: "Чизкейк Нью-Йорк", price: 220, category: "dessert", count: "200 г", kind: "medium", image: "https://avatars.mds.yandex.net/i?id=26992d57bc434da29f04bbe5d34c786a_l-9065739-images-thumbs&n=13" },
  { keyword: "dessert-medium-2", name: "Панна-котта с ягодами", price: 200, category: "dessert", count: "180 г", kind: "medium", image: "https://t3.ftcdn.net/jpg/02/39/13/02/360_F_239130233_voKdm4HAPkinj5GQ9aJIGoCYat7B3BPp.jpg" },
  { keyword: "dessert-large", name: "Торт «Медовик»", price: 280, category: "dessert", count: "250 г", kind: "large", image: "https://myastoriya.com.ua/upload/iblock/f0b/65kpzdrhqb44v0uy546fj79s0gcntfb4.jpg" }
];
