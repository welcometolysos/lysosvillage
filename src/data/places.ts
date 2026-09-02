/**
 * What is actually in the village.
 *
 * SOURCES. Coordinates come from OpenStreetMap and were checked by distance
 * from the church before anything was called "in the village". Phone numbers,
 * addresses and what each place serves come from the Lysos Community Council's
 * own site, lyssos.org.cy — which is credited on the page. Facts are used;
 * their wording is not.
 *
 * The map records Maros Place twice, as a café and as a shop. Kleo says it is
 * one place doing both, so it appears once.
 *
 * NO OPENING HOURS. The map data carries them, but the businesses have not
 * confirmed them, and a visitor who drives 36km from Paphos to a shut taverna
 * has been misled by this site. Hours go in only when the village confirms.
 */

export type PlaceKind = 'eat' | 'stay' | 'do' | 'village';

export interface Place {
  id: string;
  kind: PlaceKind;
  name: string;
  what: { en: string; el: string };
  /** How far from Panagia Chryseleousa. */
  fromChurch: { en: string; el: string };
  phone?: string;
  website?: string;
  address?: string;
  /** Coordinates where we have them; otherwise we search by name. */
  lat?: number;
  lon?: number;
}

export const places: Place[] = [
  // ——— eat & drink ———
  {
    id: 'maros',
    kind: 'eat',
    name: "Maro's Place",
    what: {
      en: 'The village café and shop in one. Cypriot coffee, homemade jams, eggs, local halloumi and bread baked that morning.',
      el: 'Το καφενείο και το μαγαζί του χωριού μαζί. Κυπριακός καφές, σπιτικές μαρμελάδες, αυγά, ντόπιο χαλλούμι και ψωμί ψημένο το πρωί.',
    },
    fromChurch: { en: 'Twenty metres from the church', el: 'Είκοσι μέτρα από την εκκλησία' },
    lat: 34.9950147,
    lon: 32.5117925,
  },
  {
    id: 'tavern',
    kind: 'eat',
    name: 'Lysos Tavern',
    what: {
      en: 'On the square. Cypriot meze, souvlaki, sheftalies and everything off the grill, with tables outside.',
      el: 'Στην πλατεία. Κυπριακός μεζές, σουβλάκι, σεφταλιές και ό,τι βγαίνει από τα κάρβουνα, με τραπέζια έξω.',
    },
    fromChurch: { en: 'On the square, by the church', el: 'Στην πλατεία, δίπλα στην εκκλησία' },
    lat: 34.9952872,
    lon: 32.5118539,
  },
  {
    id: 'paradisos-restaurant',
    kind: 'eat',
    name: 'Paradisos Hills — restaurant',
    what: {
      en: 'Cypriot and international cooking at the hotel, looking down over the village. Sunday buffet with live music.',
      el: 'Κυπριακή και διεθνής κουζίνα στο ξενοδοχείο, με θέα πάνω από το χωριό. Κυριακάτικος μπουφές με ζωντανή μουσική.',
    },
    fromChurch: { en: 'A kilometre above the village', el: 'Ένα χιλιόμετρο πάνω από το χωριό' },
    phone: '+357 26 322287',
    lat: 35.0025914,
    lon: 32.5182533,
  },

  // ——— stay ———
  {
    id: 'hotel',
    kind: 'stay',
    name: 'Paradisos Hills Hotel',
    what: {
      en: 'The village hotel, up the hill above the houses, looking out over the valleys.',
      el: 'Το ξενοδοχείο του χωριού, ψηλά στον λόφο πάνω από τα σπίτια, με θέα στις κοιλάδες.',
    },
    fromChurch: { en: 'Evagora Pallikaridi 11', el: 'Ευαγόρα Παλληκαρίδη 11' },
    phone: '+357 26 322287',
    website: 'https://paradisoshills.com/',
    lat: 35.0025914,
    lon: 32.5182533,
  },
  {
    id: 'marmaras',
    kind: 'stay',
    name: 'Marmaras Guest House',
    what: {
      en: 'A guest house and training centre in the middle of the village.',
      el: 'Ξενώνας και κέντρο εκπαίδευσης, μέσα στο χωριό.',
    },
    fromChurch: { en: 'Iosif Michail 18', el: 'Ιωσήφ Μιχαήλ 18' },
    phone: '+357 26 221216',
    website: 'https://marmaras-lysos.com/',
  },
  {
    id: 'nicolas-villa',
    kind: 'stay',
    name: 'Nicolas Villa',
    what: { en: 'A villa to rent in the village.', el: 'Βίλα προς ενοικίαση στο χωριό.' },
    fromChurch: { en: 'In Lysos, 8800', el: 'Στον Λυσό, 8800' },
    phone: '+357 99 683168',
  },
  {
    id: 'villa-anna',
    kind: 'stay',
    name: 'Villa Anna',
    what: { en: 'A villa to rent in the village.', el: 'Βίλα προς ενοικίαση στο χωριό.' },
    fromChurch: { en: 'In Lysos, 8800', el: 'Στον Λυσό, 8800' },
    phone: '+357 97 870231',
  },

  // ——— things to do ———
  {
    id: 'horse',
    kind: 'do',
    name: 'Maria Horse Trekking',
    what: {
      en: 'Riding out through the woods, the streams and the chapels, for beginners and for those who can already ride.',
      el: 'Ιππασία μέσα από δάση, ρυάκια και ξωκλήσια, για αρχάριους και για έμπειρους αναβάτες.',
    },
    fromChurch: { en: 'Two kilometres east', el: 'Δύο χιλιόμετρα ανατολικά' },
    lat: 34.9967877,
    lon: 32.5332926,
  },

  // ——— the village itself ———
  {
    id: 'forest-station',
    kind: 'village',
    name: 'Lysos Forest Station',
    what: {
      en: 'The forestry station — the Paphos Forest is worked and watched over from here, in the middle of the village.',
      el: 'Ο δασικός σταθμός — από εδώ, μέσα στο χωριό, φυλάγεται και δουλεύεται το Δάσος της Πάφου.',
    },
    fromChurch: { en: 'A hundred metres from the church', el: 'Εκατό μέτρα από την εκκλησία' },
    lat: 34.9940142,
    lon: 32.5113694,
  },
  {
    id: 'cultural-centre',
    kind: 'village',
    name: 'Lysos Cultural Centre',
    what: {
      en: 'Where the village gathers, on Makariou III.',
      el: 'Εκεί που μαζεύεται το χωριό, στη Λεωφόρο Μακαρίου Γ΄.',
    },
    fromChurch: { en: 'Four hundred metres', el: 'Τετρακόσια μέτρα' },
    lat: 34.9925357,
    lon: 32.508989,
  },
];

export const groups: { kind: PlaceKind; key: string }[] = [
  { kind: 'eat', key: 'places.eat' },
  { kind: 'stay', key: 'places.stay' },
  { kind: 'do', key: 'places.do' },
  { kind: 'village', key: 'places.village' },
];
