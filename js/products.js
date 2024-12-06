/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - priceD: Number, the unit priceD of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  /*
    {
      id: "P1",
      title: "Title 1",
      description: "Description 1...",
      price: 199,
      discontinued: false,
      categories: ["c1"]
    },
  */
  /* TODO */
  {
    id: "P1",
    title: "HURKUS",
    description:
      "The TUSAŞ Hürkuş is a two-seat turboprop trainer and light attack aircraft named after Turkish aviation pioneer Vecihi Hürkuş.",
    priceD: 19000,
    priceC: 99,
    discontinued: false,
    categories: "c2",
    imageURL: "visual/planes/Military/plane11.png"
  },
  {
    id: "P2",
    title: "ARI",
    description:
      "Produced in September 2009, this black-and-white training and combat aircraft is a modernized version of the T-38 by TAI-SSM.",
    priceD: 20000,
    priceC: 99,
    discontinued: false,
    categories: "c1",
    imageURL: "visual/planes/Traditional/plane1.png"
  },
  {
    id: "P3",
    title: "KESKIN-1",
    description:
      "Keskin 1, donated to the Turkish Air Force in 1926, was funded by Keskin residents and delivered by Müftü Sadık Cönger.",
    priceD: 31229,
    priceC: 99,
    discontinued: false,
    categories: "c1",
    imageURL: "visual/planes/Traditional/plane12.png"
  },
  {
    id: "P4",
    title: "MKEK-1",
    description:
      "The MKEK-1 Gözcü was Turkey's first locally designed observation aircraft, developed in 1952 for artillery and liaison duties.",
    priceD: 14229,
    priceC: 99,
    discontinued: true,
    categories: "c3",
    imageURL: "visual/planes/Passenger/plane2.png"
  },
  {
    id: "P5",
    title: "NuD-36",
    description:
      "The NUD-36, Turkey's second domestically made fighter, was built by Nuri Demirağ in 1936, served as a trainer, and was retired in 1942 after his factory's closure.",
    priceD: 19239,
    priceC: 99,
    discontinued: false,
    categories: "c1",
    imageURL: "visual/planes/Traditional/plane15.png"
  },
  {
    id: "P6",
    title: "THK-11",
    description:
      "The THK-11, a four-seat prototype by the Turkish Aeronautical Association, first flew in 1947 with fixed nosewheel landing gear.",
    priceD: 13219,
    priceC: 99,
    discontinued: false,
    categories: "c1",
    imageURL: "visual/planes/Traditional/plane16.png"
  },
  {
    id: "P7",
    title: "THK-15",
    description:
      "The THK-15 (MKEK-4 Uğur) was a trainer aircraft based on the Miles Magister, used by the Turkish Air Force from 1955 to 1963, with 57 units produced.",
    priceD: 1319,
    priceC: 99,
    discontinued: false,
    categories: "c2",
    imageURL: "visual/planes/Military/plane13.png"
  },
  {
    id: "P8",
    title: "THK-16",
    description:
      "The THK-16, also known as Mehmetçik, is a jet trainer aircraft designed by the Turkish Aeronautical Association (THK) in 1952.",
    priceD: 422229,
    priceC: 99,
    discontinued: false,
    categories: "c3",
    imageURL: "visual/planes/Traditional/plane17.png"
  },
  {
    id: "P9",
    title: "THK-2",
    description:
      "The THK-2, a single-seat aerobatic trainer developed in 1944, had six units produced and was used by the Turkish Air Force until the mid-1950s.",
    priceD: 1121239,
    priceC: 99,
    discontinued: true,
    categories: "c1",
    imageURL: "visual/planes/Passenger/plane20.png"
  },
  {
    id: "P10",
    title: "THK-5",
    description:
      "The THK-5, a Turkish ambulance aircraft from 1945, carried two pilots, two stretchers, and a medical officer, but production ended after the factory closed.",
    priceD: 1312329,
    priceC: 99,
    discontinued: false,
    categories: "c2",
    imageURL: "visual/planes/Military/plane19.png"
  },
  {
    id: "P11",
    title: "TUSAS-KAAN",
    description:
      "The TUSAŞ Kaan is a fifth-generation fighter jet with stealth and advanced combat features, set for mass production by the late 2020s.",
    priceD: 1321,
    priceC: 99,
    discontinued: false,
    categories: "c1",
    imageURL: "visual/planes/Traditional/plane18.png"
  },
  {
    id: "P12",
    title: "Asisguard-Songar",
    description:
      "Songar is a four-propeller drone by Asisguard, offering autonomous flight and return-to-base features, introduced at the 2019 IDEF.",
    priceD: 3219,
    priceC: 99,
    discontinued: false,
    categories: "c2",
    imageURL: "visual/planes/Military/plane3.png"
  },
  {
    id: "P13",
    title: "KIZILELMA",
    description:
      "The Bayraktar Kızılelma is a Turkish unmanned combat aircraft with stealth, a turbofan engine, and missile capabilities.",
    priceD: 1219,
    priceC: 99,
    discontinued: false,
    categories: "c3",
    imageURL: "visual/planes/Passenger/plane4.png"
  },
  {
    id: "P14",
    title: "TB-1",
    description:
      "In 2009, the Bayraktar Çaldıran won the Tactical UAV Program, but production shifted to the Bayraktar TB2 instead of the TB1.",
    priceD: 1921,
    priceC: 99,
    discontinued: false,
    categories: "c1",
    imageURL: "visual/planes/Traditional/plane5.png"
  },
  {
    id: "P15",
    title: "Bayraktar",
    description:
      "The Baykar Bayraktar TB2 (Tactical Block 2) is an armed unmanned aerial vehicle produced by the Turkey-based company Baykar Defense.",
    priceD: 2023,
    priceC: 99,
    discontinued: false,
    categories: "c2",
    imageURL: "visual/planes/Military/plane6.png"
  },
  {
    id: "P16",
    title: "PELIKAN",
    description:
      "The TAI Pelikan (IHA-X2) is a UAV by TUSAŞ for reconnaissance and surveillance, based on the TAI Baykuş platform.",
    priceD: 1412,
    priceC: 99,
    discontinued: false,
    categories: "c3",
    imageURL: "visual/planes/Passenger/plane7.png"
  },
  {
    id: "P17",
    title: "KEKLIK",
    description:
      "The TUSAŞ Keklik, introduced in 2001, is a target UAV used by the Turkish Armed Forces for artillery exercises, named after the keklik bird.",
    priceD: 1329,
    priceC: 99,
    discontinued: false,
    categories: "c2",
    imageURL: "visual/planes/Military/plane8.png"
  },
  {
    id: "P18",
    title: "SUPER-SIMSEK",
    description:
      "The TUSAŞ Süper Şimşek is a target UAV developed by TUSAŞ for the Turkish Armed Forces, simulating air-to-ground and air-to-air missile targets.",
    priceD: 1122,
    priceC: 99,
    discontinued: false,
    categories: "c1",
    imageURL: "visual/planes/Traditional/plane9.png"
  },
  {
    id: "P19",
    title: "SIMSEK",
    description:
      "The TUSAŞ Şimşek is a turbojet-powered target UAV used by the Turkish Armed Forces, simulating enemy threats and, since 2021, capable of striking ground targets.",
    priceD: 4231,
    priceC: 99,
    discontinued: false,
    categories: "c3",
    imageURL: "visual/planes/Passenger/plane10.png"
  },
  {
    id: "P20",
    title: "HURJET",
    description:
      "The HÜRJET is a single-engine jet trainer with advanced avionics, with the armed variant offering superior performance and exceptional payload capacity for various missions.",
    priceD: 4120,
    priceC: 99,
    discontinued: false,
    categories: "c3",
    imageURL: "visual/planes/Passenger/plane14.png"
  }
];
