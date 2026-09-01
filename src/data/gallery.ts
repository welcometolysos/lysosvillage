/**
 * Kleo's own photographs of the village.
 *
 * CAPTIONS: written from what is visible in each photograph, not from
 * knowledge of the exact spot. Where a place could be named but isn't certain,
 * the caption stays general rather than guessing. Kleo can correct any of them
 * and they are all in one place here.
 */

import welcomeStone from '../assets/village/20240422-120648.jpg';
import sunsetMeadow from '../assets/village/20240324-182343.jpg';
import pulseField from '../assets/village/20240331-173216.jpg';
import hazyValley from '../assets/village/20240406-180634.jpg';
import ploughedField from '../assets/village/20240417-190137.jpg';
import horseFarm from '../assets/village/20240515-182034.jpg';
import forestRoad from '../assets/village/20240515-183506.jpg';
import bayMorning from '../assets/village/20240602-061544.jpg';
import coastalPlain from '../assets/village/20240602-061555.jpg';
import akamasView from '../assets/village/beautiful-akamas-from-lysos.jpg';

export interface Photo {
  image: ImageMetadata;
  alt: { en: string; el: string };
  caption?: { en: string; el: string };
}

/** The carved stone at the edge of the village. */
export const welcomeSign: Photo = {
  image: welcomeStone,
  alt: {
    en: 'A stone tablet set into a dry-stone wall, carved in Greek and English: Lysos welcomes you.',
    el: 'Πέτρινη πλάκα σε ξερολιθιά, σκαλισμένη στα ελληνικά και στα αγγλικά: Η Λυσός σας καλωσορίζει.',
  },
  caption: {
    en: 'The village says it in stone, at the roadside, before you have arrived.',
    el: 'Το χωριό το λέει στην πέτρα, στην άκρη του δρόμου, πριν καν φτάσεις.',
  },
};

/** Dusk over the sea — the lead into the night sky. */
export const dusk: Photo = {
  image: sunsetMeadow,
  alt: {
    en: 'Sunset over the sea seen from a wildflower meadow above the village, a lone tree in silhouette.',
    el: 'Ηλιοβασίλεμα πάνω από τη θάλασσα, ιδωμένο από ανθισμένο λιβάδι πάνω από το χωριό, με ένα δέντρο σε σιλουέτα.',
  },
  caption: {
    en: 'The last light goes down over the sea. Then the sky below begins.',
    el: 'Το τελευταίο φως πέφτει πάνω από τη θάλασσα. Μετά αρχίζει ο ουρανός πιο κάτω.',
  },
};

export const crops: Photo = {
  image: pulseField,
  alt: {
    en: 'A field of flowering pulses in front of pine woodland.',
    el: 'Χωράφι με ανθισμένα όσπρια μπροστά από πευκόδασος.',
  },
};

export const forest: Photo = {
  image: forestRoad,
  alt: {
    en: 'A dirt road climbing through pines, a crescent moon already up in the daytime sky.',
    el: 'Χωματόδρομος που ανηφορίζει μέσα στα πεύκα, με μισοφέγγαρο ήδη στον ουρανό μέσα στη μέρα.',
  },
};

/** The wider village, shown as a band under Visit. */
export const around: Photo[] = [
  {
    image: coastalPlain,
    alt: {
      en: 'The coastal plain and the bay far below the village, in early morning light.',
      el: 'Η παραλιακή πεδιάδα και ο κόλπος πολύ πιο κάτω από το χωριό, στο πρωινό φως.',
    },
    caption: {
      en: 'The whole coast, from up here.',
      el: 'Όλη η ακτή, από εδώ πάνω.',
    },
  },
  {
    image: akamasView,
    alt: {
      en: 'Hills and olive groves falling away towards the Akamas peninsula and the sea.',
      el: 'Λόφοι και ελαιώνες που κατεβαίνουν προς τη χερσόνησο του Ακάμα και τη θάλασσα.',
    },
    caption: {
      en: 'Towards the Akamas.',
      el: 'Προς τον Ακάμα.',
    },
  },
  {
    image: bayMorning,
    alt: {
      en: 'Houses at the edge of the village with the bay and headland beyond.',
      el: 'Σπίτια στην άκρη του χωριού, με τον κόλπο και το ακρωτήρι πιο πέρα.',
    },
    caption: {
      en: 'The edge of the village, first thing.',
      el: 'Η άκρη του χωριού, πρωί πρωί.',
    },
  },
  {
    image: horseFarm,
    alt: {
      en: 'A riding stable among olive trees on the hillside above the village.',
      el: 'Στάβλος ιππασίας ανάμεσα σε ελιές, στην πλαγιά πάνω από το χωριό.',
    },
    caption: {
      en: 'The riding farm, up on the hillside.',
      el: 'Η φάρμα ιππασίας, ψηλά στην πλαγιά.',
    },
  },
  {
    image: ploughedField,
    alt: {
      en: 'A ploughed field of red earth under a heavy sky, a single tree against the last of the sun.',
      el: 'Οργωμένο χωράφι με κόκκινο χώμα κάτω από βαρύ ουρανό, ένα δέντρο μπροστά στο τελευταίο φως.',
    },
    caption: {
      en: 'Red earth, turned and waiting.',
      el: 'Κόκκινο χώμα, οργωμένο και περιμένει.',
    },
  },
  {
    image: hazyValley,
    alt: {
      en: 'Green valleys and terraces receding into haze below the village.',
      el: 'Πράσινες κοιλάδες και πεζούλες που χάνονται στην καταχνιά κάτω από το χωριό.',
    },
    caption: {
      en: 'Valley after valley, into the haze.',
      el: 'Κοιλάδα μετά την κοιλάδα, μέσα στην καταχνιά.',
    },
  },
];
