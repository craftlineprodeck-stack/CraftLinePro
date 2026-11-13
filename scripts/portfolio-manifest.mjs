// Which portfolio photos go on the site (source: docs/portfolio-review.md).
// Output: public/projects/<slug>/<slug>-NN.webp, NN = position in `photos` (01, 02, ...).
// `crop` (optional) = fractions of the upright image { left, top, width, height } —
// used to cut out house numbers, or a person awkwardly cut off at the frame edge.
// Everyone in these photos is the owner or his partner — people are not cropped otherwise. Run: npm run import-portfolio
export const PORTFOLIO_DIR = '../Portfolio';

export const manifest = [
  {
    slug: 'fair-oaks-ipe-spa-deck-rebuild',
    folder: 'Fair Oaks IPE  Spa deck  rebuild and main deck restoration',
    photos: [
      { src: 'IMG_6993.jpeg' },
      { src: '83F35EB8-F76C-4CC3-BCBB-BFDBE6980BE4.JPG' },
      { src: 'IMG_7034.jpeg' },
      { src: '0f6af6f0-38bd-4edc-a365-89abe186e7e5.JPG' },
      { src: 'IMG_7025.jpeg' },
      { src: '8ceba5ee-db62-4a64-ab18-43082adc7769.JPG' },
      { src: 'IMG_7010.jpeg' },
      { src: 'IMG_6902.jpeg' },
      { src: 'IMG_6905.jpeg' },
      { src: 'IMG_6909.jpeg' },
      { src: 'IMG_6914.jpeg' },
      { src: 'IMG_6917.jpeg' },
      { src: 'IMG_6919.jpeg' },
    ],
  },
  {
    slug: 'fair-oaks-redwood-deck-restoration',
    folder: 'Fair Oaks Redwood deck restoration',
    photos: [
      { src: 'IMG_6586.jpeg' },
      { src: 'IMG_6544.jpeg' },
      { src: 'IMG_6585.jpeg' },
      { src: 'IMG_6541.jpeg' },
      { src: 'IMG_7831.jpg' },
      { src: 'IMG_6564.jpeg' },
    ],
  },
  {
    slug: 'folsom-redwood-deck-stairs-restoration',
    folder: 'Folsom RedWood restoration deck + staircases',
    photos: [
      { src: 'IMG_2746.jpeg' },
      { src: 'IMG_2692.jpeg' },
      { src: 'IMG_2697.jpeg' },
      { src: 'IMG_2737.jpeg' },
    ],
  },
  {
    slug: 'folsom-custom-redwood-deck',
    folder: 'Folsom_Custom Redwood deck construction',
    photos: [
      { src: '79912369100__6AE121DB-87D9-4350-9CD7-4E814983431A.jpeg' },
      { src: 'IMG_0594.jpeg' },
      { src: 'IMG_0869.jpeg' },
      { src: 'IMG_0638.jpeg' },
      { src: 'IMG_0643.jpeg' },
      { src: 'IMG_0657.jpeg' },
      { src: 'IMG_0659.jpeg' },
      { src: 'IMG_0834.jpeg' },
    ],
  },
  {
    slug: 'folsom-bamboo-deck-restoration',
    folder: 'Folsom_Bamboo Deck restoration',
    photos: [
      { src: 'IMG_1484.jpeg' },
      { src: 'IMG_0618.jpeg' },
      { src: 'IMG_1485.jpeg' },
      { src: 'IMG_1478.jpeg' },
    ],
  },
  {
    slug: 'granite-bay-ipe-deck-restoration',
    folder: 'Granite Bay IPE deck restoration',
    photos: [
      { src: 'e97b975a-0c06-428a-a1a8-a25dcb230257.JPG' },
      { src: '23d3e8f2-9a8d-4c24-97a5-dd03e8888fce.JPG' },
      { src: 'IMG_7704.jpeg' },
      { src: '9700334f-50a5-434c-99c0-d538c73aa9b0.JPG' },
      { src: 'IMG_7710.jpeg' },
      { src: 'IMG_7693.jpeg' },
      { src: 'IMG_7689.jpeg' },
    ],
  },
  {
    slug: 'granite-bay-redwood-premium-restoration',
    folder: 'Granite Bay_Premium Redwood restoration',
    photos: [
      { src: 'IMG_2669.jpeg' },
      { src: '0fe4750a-3950-423f-bfe3-8bb2827ae4eb.JPG' },
      { src: 'IMG_2671.jpeg' },
      { src: '9657550e-f044-4de8-858e-06cfe1c6a05d.JPG' },
      { src: 'IMG_2672.jpeg' },
      { src: 'IMG_2665.jpeg' },
      { src: 'IMG_2666.jpeg' },
    ],
  },
  {
    slug: 'orangevale-20-year-ipe-restoration',
    folder: 'Orangevale 20 years IPE deck restoration',
    photos: [
      { src: 'IMG_7312 2.jpeg' },
      { src: 'IMG_7306 2.jpeg' },
      { src: 'IMG_7309 2.jpeg' },
      { src: 'IMG_7310 2.jpeg' },
      { src: 'IMG_7311 2.jpeg' },
    ],
  },
  {
    slug: 'orangevale-redwood-deck-restoration',
    folder: 'Orangevale_Redwood DEck restoration april 28 2026',
    photos: [
      { src: 'IMG_0861.jpeg' },
      { src: 'IMG_0344.jpeg' },
      { src: 'IMG_0854.jpeg' },
      { src: 'IMG_0348.jpeg' },
      { src: 'IMG_0838.jpeg' },
      { src: 'IMG_0773.jpeg' },
    ],
  },
  {
    slug: 'citrus-heights-deck-repair-pergola',
    folder: 'Citrus Hights Redwood deck repair, boards replacement, Pergola restoration',
    photos: [
      { src: 'IMG_7434.jpeg' },
      { src: 'IMG_7387.jpeg' },
      { src: 'IMG_7441.jpeg' },
      { src: 'IMG_6927.jpeg' },
      { src: 'IMG_7444.jpeg' },
      { src: 'IMG_7390.jpeg' },
      { src: 'IMG_7442.jpeg' },
      { src: 'IMG_7428.jpeg' },
    ],
  },
  {
    slug: 'citrus-heights-old-deck-repair',
    folder: 'Citrus Hights_Old Redwood deck repair and Restoration',
    photos: [{ src: 'IMG_9846.jpeg' }, { src: 'IMG_9812.jpeg' }, { src: 'IMG_9850.jpeg' }],
  },
  {
    slug: 'roseville-redwood-deck-refinishing',
    folder: 'Rosevile Redwood Deck refinishing',
    photos: [
      { src: 'IMG_5654.jpeg' },
      { src: 'IMG_5597.jpeg' },
      { src: 'IMG_5655.jpeg' },
      { src: 'IMG_5599.jpeg' },
    ],
  },
  {
    slug: 'auburn-redwood-deck-railings-stairs',
    folder: 'Auburn Redwood Deck Restoration Railings and stairs',
    photos: [
      { src: 'IMG_5127.jpeg' },
      { src: 'IMG_5012.jpeg' },
      { src: 'IMG_5113.jpeg' },
      { src: 'IMG_5013.jpeg' },
      { src: 'IMG_5129.jpeg' },
      { src: 'IMG_7827.jpg' },
      { src: 'IMG_7828.jpg' },
    ],
  },
  {
    slug: 'rancho-cordova-trex-deck-rebuild',
    folder: 'Rancho Cordova  Composite Trex Deck boards_railings_stairs replacement',
    photos: [
      { src: 'IMG_5371.jpeg' },
      { src: 'IMG_4835.jpeg' },
      { src: 'IMG_5386.jpeg', crop: { left: 0, top: 0.09, width: 1, height: 0.91 } }, // house number
      { src: 'IMG_4836.jpeg' },
      { src: 'IMG_5395.jpeg', crop: { left: 0, top: 0, width: 0.8, height: 1 } }, // person half-hidden by the tree, cut off at the right edge
      { src: 'IMG_5083.jpeg' },
      { src: 'IMG_5382.jpeg' },
      { src: 'IMG_5089.jpeg', crop: { left: 0, top: 0.13, width: 1, height: 0.87 } }, // house number
      { src: 'IMG_5092.jpeg', crop: { left: 0, top: 0.15, width: 1, height: 0.85 } }, // house number
    ],
  },
  {
    slug: 'elk-grove-deck-repair-restoration',
    folder: 'Elk Grove repair&restoration redwood  deck',
    photos: [
      { src: 'IMG_3640.jpeg' },
      { src: 'IMG_3588.jpeg' },
      { src: 'IMG_3641.jpeg' },
      { src: 'IMG_3591.jpeg' },
      { src: 'IMG_3622.jpeg' },
    ],
  },
  {
    slug: 'west-sacramento-railings-staining',
    folder: 'West Sacramento redwood deck staining and railings repair',
    photos: [
      { src: 'IMG_6405.jpeg' },
      { src: 'IMG_6400.jpeg' },
      { src: 'IMG_6402.jpeg' },
      { src: 'IMG_6403.jpeg' },
    ],
  },
  {
    slug: 'east-sacramento-mahogany-restoration',
    folder: 'East Sacramento Fijian Mahogame DEck restoration',
    photos: [{ src: 'IMG_4352.jpeg' }, { src: 'IMG_4336.jpeg' }, { src: 'IMG_4356.jpeg' }],
  },
  {
    slug: 'folsom-large-redwood-deck-restoration',
    folder: 'Folsom large redwood deck restotration',
    photos: [
      { src: 'IMG_7966.JPG' },
      { src: 'IMG_7812.JPG' },
      { src: 'IMG_7869.JPG' },
      { src: 'IMG_7813.JPG' },
      { src: 'IMG_7962.JPG' },
      { src: 'IMG_7814.JPG' },
      { src: 'IMG_7876.JPG' },
    ],
  },
];
