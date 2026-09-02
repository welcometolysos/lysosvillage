/**
 * What is actually in the village.
 *
 * Every entry, and every coordinate, comes from OpenStreetMap and was checked
 * by distance against the church before being called "in the village".
 *
 * The map records Maros Place twice, as a café and as a shop. Kleo says it is
 * one place doing both, so it appears once.
 *
 * NO OPENING HOURS. The map data carries them, but they are not confirmed by
 * the businesses, and a visitor who drives 36km from Paphos to a shut taverna
 * has been actively misled. Hours go in only when the village confirms them.
 */

export type PlaceKind = 'eat' | 'stay' | 'do' | 'village';

export interface Place {
  id: string;
  kind: PlaceKind;
  name: string;
  what: { en: string; el: string };
  /** Metres from Panagia Chryseleousa, rounded honestly. */
  fromChurch: { en: string; el: string };
  lat: number;
  lon: number;
}

export const places: Place[] = [
  {
    id: 'maros',
    kind: 'eat',
    name: 'Maros Place',
    what: {
      en: 'The village café and the shop in one — coffee, something to eat, and what you need off the shelves.',
      el: 'Το καφενείο και το μαγαζί του χωριού μαζί — καφές, κάτι να φας, και ό,τι χρειάζεσαι από τα ράφια.',
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
      en: 'On the square. Regional cooking, pizza and coffee, with tables outside.',
      el: 'Στην πλατεία. Τοπική κουζίνα, πίτσα και καφές, με τραπέζια έξω.',
    },
    fromChurch: { en: 'On the square, by the church', el: 'Στην πλατεία, δίπλα στην εκκλησία' },
    lat: 34.9952872,
    lon: 32.5118539,
  },
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
  {
    id: 'hotel',
    kind: 'stay',
    name: 'Paradisos Hills',
    what: {
      en: 'The village hotel, up the hill above the houses.',
      el: 'Το ξενοδοχείο του χωριού, ψηλά στον λόφο πάνω από τα σπίτια.',
    },
    fromChurch: { en: 'A kilometre above the village', el: 'Ένα χιλιόμετρο πάνω από το χωριό' },
    lat: 35.0025914,
    lon: 32.5182533,
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
