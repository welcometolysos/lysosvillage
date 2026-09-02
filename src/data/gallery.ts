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
import figsDrying from '../assets/village/maxilles.jpg';
import elderWaving from '../assets/village/whatsapp-image-2026-09-02-at-00-04-31.jpg';
import fountainArches from '../assets/village/12-04-5.jpg';
import sunThroughOak from '../assets/village/12-04-13.jpg';
import oldOak from '../assets/village/12-04-12.jpg';
import greenTunnel from '../assets/village/12-04-9.jpg';
import windingRoad from '../assets/village/whatsapp-image-2026-09-02-at-00-09-06.jpg';
import digenisIcon from '../assets/village/digenis-akritas-made-for-this-site.jpg';

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

/** Maxilles being made: the fresh figs, and the split ones drying behind. */
export const figs: Photo = {
  image: figsDrying,
  alt: {
    en: 'Fresh figs laid out on pine needles in the sun, with split figs drying behind them.',
    el: 'Φρέσκα σύκα απλωμένα σε πευκοβελόνες στον ήλιο, με ανοιγμένα σύκα να στεγνώνουν πιο πίσω.',
  },
};

/**
 * A well-known figure of the village festivals, long since passed away.
 * A village photograph, supplied by Kleo. His name is not recorded here yet —
 * the caption says so rather than leaving him an anonymous decoration.
 */
export const elder: Photo = {
  image: elderWaving,
  alt: {
    en: 'An older man in traditional Cypriot dress, one hand raised in greeting, the other on his stick, before a whitewashed wall and green shutters.',
    el: 'Ηλικιωμένος άνδρας με παραδοσιακή κυπριακή φορεσιά, το ένα χέρι σηκωμένο σε χαιρετισμό, το άλλο στο μπαστούνι του, μπροστά σε ασβεστωμένο τοίχο και πράσινα παντζούρια.',
  },
  caption: {
    en: 'And the village said it in person too. One of the familiar figures of the Lysos festivals, gone many years now. If you know his name, the village would like it written down.',
    el: 'Και το χωριό το έλεγε και από κοντά. Μια από τις γνώριμες μορφές των πανηγυριών του Λυσού, χαμένη εδώ και πολλά χρόνια. Αν ξέρετε το όνομά του, το χωριό θα ήθελε να καταγραφεί.',
  },
};

/**
 * Digenis Akritas, made for this site with an image generator on Kleo's own
 * prompt. Not a historical icon, not from Lysos, and the halo it carries is a
 * saint's — which Digenis is not. The caption says all of that plainly,
 * because this page sits directly below nine real churches with real icons and
 * a visitor should never have to wonder which is which.
 */
export const digenis: Photo = {
  image: digenisIcon,
  alt: {
    en: 'A mosaic-style image of Digenis Akritas holding a sword and a round shield, made for this website.',
    el: 'Εικόνα του Διγενή Ακρίτα σε ύφος ψηφιδωτού, με σπαθί και στρογγυλή ασπίδα, φτιαγμένη για αυτή την ιστοσελίδα.',
  },
  caption: {
    en: 'Digenis as the songs describe him — an image made for this website, not an old icon and not one of the village’s own.',
    el: 'Ο Διγενής όπως τον περιγράφουν τα τραγούδια — εικόνα φτιαγμένη για αυτή την ιστοσελίδα, όχι παλιά εικόνα ούτε του χωριού.',
  },
};

/** The old fountain below the church, close up. */
export const fountain: Photo = {
  image: fountainArches,
  alt: {
    en: 'The arches of the old stone fountain beneath the church, a cross carved into the wall beside them.',
    el: 'Οι καμάρες της παλιάς πέτρινης βρύσης κάτω από την εκκλησία, με έναν σταυρό σκαλισμένο στον τοίχο δίπλα τους.',
  },
  caption: {
    en: 'The fountain the village drew from, under the church that watches it.',
    el: 'Η βρύση απ᾽ όπου έπαιρνε νερό το χωριό, κάτω από την εκκλησία που τη φυλάει.',
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
/**
 * The wider village, as a swipeable band under Visit.
 *
 * ORDER MATTERS: these are deliberately interleaved — a wide view, then a
 * track, then something built or worked — so you never swipe past three
 * versions of the same picture in a row.
 */
export const around: Photo[] = [
  {
    image: coastalPlain,
    alt: {
      en: 'The coastal plain and the bay far below the village, in early morning light.',
      el: 'Η παραλιακή πεδιάδα και ο κόλπος πολύ πιο κάτω από το χωριό, στο πρωινό φως.',
    },
    caption: { en: 'The whole coast, from up here.', el: 'Όλη η ακτή, από εδώ πάνω.' },
  },
  {
    image: sunThroughOak,
    alt: {
      en: 'The sun breaking through the branches of an old oak above a mown field.',
      el: 'Ο ήλιος που σπάει μέσα από τα κλαδιά μιας γέρικης βελανιδιάς πάνω από θερισμένο χωράφι.',
    },
    caption: { en: 'Late sun, through the oak.', el: 'Απογευματινός ήλιος, μέσα από τη βελανιδιά.' },
  },
  {
    image: horseFarm,
    alt: {
      en: 'A riding stable among olive trees on the hillside above the village.',
      el: 'Στάβλος ιππασίας ανάμεσα σε ελιές, στην πλαγιά πάνω από το χωριό.',
    },
    caption: { en: 'The riding farm, up on the hillside.', el: 'Η φάρμα ιππασίας, ψηλά στην πλαγιά.' },
  },
  {
    image: greenTunnel,
    alt: {
      en: 'A track running under a closed canopy of green trees.',
      el: 'Μονοπάτι που περνά κάτω από κλειστή πράσινη σκεπή δέντρων.',
    },
    caption: {
      en: 'In spring the trees close over the road.',
      el: 'Την άνοιξη τα δέντρα κλείνουν πάνω από τον δρόμο.',
    },
  },
  {
    image: akamasView,
    alt: {
      en: 'Hills and olive groves falling away towards the Akamas peninsula and the sea.',
      el: 'Λόφοι και ελαιώνες που κατεβαίνουν προς τη χερσόνησο του Ακάμα και τη θάλασσα.',
    },
    caption: { en: 'Towards the Akamas.', el: 'Προς τον Ακάμα.' },
  },
  {
    image: ploughedField,
    alt: {
      en: 'A ploughed field of red earth under a heavy sky, a single tree against the last of the sun.',
      el: 'Οργωμένο χωράφι με κόκκινο χώμα κάτω από βαρύ ουρανό, ένα δέντρο μπροστά στο τελευταίο φως.',
    },
    caption: { en: 'Red earth, turned and waiting.', el: 'Κόκκινο χώμα, οργωμένο και περιμένει.' },
  },
  {
    image: oldOak,
    alt: {
      en: 'A broad old oak standing at the bend of a track through the woods.',
      el: 'Μια πλατιά γέρικη βελανιδιά στη στροφή ενός μονοπατιού μέσα στο δάσος.',
    },
    caption: {
      en: 'The oak has the bend of the track to itself.',
      el: 'Η βελανιδιά έχει δική της τη στροφή του δρόμου.',
    },
  },
  {
    image: bayMorning,
    alt: {
      en: 'Houses at the edge of the village with the bay and headland beyond.',
      el: 'Σπίτια στην άκρη του χωριού, με τον κόλπο και το ακρωτήρι πιο πέρα.',
    },
    caption: { en: 'The edge of the village, first thing.', el: 'Η άκρη του χωριού, πρωί πρωί.' },
  },
  {
    image: windingRoad,
    alt: {
      en: 'A forest road winding out of sight between banks of pine and red earth.',
      el: 'Δασικός δρόμος που στρίβει και χάνεται ανάμεσα σε πεύκα και κόκκινο χώμα.',
    },
    caption: {
      en: 'The road into the forest, going on without you.',
      el: 'Ο δρόμος προς το δάσος, που συνεχίζει χωρίς εσένα.',
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
