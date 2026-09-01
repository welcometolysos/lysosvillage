/**
 * The nine churches and chapels of Lysos.
 *
 * SOURCING RULE: every fact here comes from the official village website,
 * lyssos.org.cy, except where marked. Nothing is invented. If we don't know
 * something, the entry says so rather than filling the gap.
 *
 * Agia Marina is NOT listed on lyssos.org.cy — it is included on Kleo's own
 * knowledge of the village (it is the cemetery chapel). Its history still
 * needs writing.
 */

// Kleo's golden-hour photograph, confirmed by him as the main church.
// The earlier daytime shot is kept at churches/panagia-chryseleousa.jpg for
// when she gets a fuller page of her own.
import panagiaChryseleousa from '../assets/village/20240414-185312.jpg';
import agiosRafail from '../assets/churches/saints-raphael.jpg';
import archangelosMichail from '../assets/churches/archangel-michael.jpg';
import agiosGeorgios from '../assets/churches/saint-george.jpg';
import agiosIlias from '../assets/churches/profitis-ilias.jpg';
import agiosMerkourios from '../assets/churches/ayios-mercourios.jpg';
import agiosKonstantinos from '../assets/churches/ayios-constantinos.jpg';
import agiosCharalambos from '../assets/churches/agios-charalambos.jpg';
import agiaMarina from '../assets/churches/agia-marina.jpg';

const BASE = 'https://lyssos.org.cy/xenagisi/thriskeftiki-zoi';

export interface Church {
  id: string;
  image: ImageMetadata;
  /** Displayed large. */
  name: { en: string; el: string };
  /** Short form, for labelling the star map where space is tight. */
  /** The one line that makes someone want to go. */
  hook: { en: string; el: string };
  /** Shown when the card is opened. */
  detail: { en: string; el: string };
  /** Page on the official village site, if it has one. */
  official?: string;
  /** True when we still owe this entry a proper history. */
  needsResearch?: boolean;
  /**
   * Real position. 'osm' = taken from OpenStreetMap and cross-checked against
   * the direction given on lyssos.org.cy. 'approx' = our best placement,
   * shown as approximate on the site.
   */
  pos: { lat: number; lon: number; source: 'osm' | 'approx' };
}

export const churches: Church[] = [
  {
    id: 'chryseleousa',
    pos: { lat: 34.99544, lon: 32.51148, source: 'osm' },
    image: panagiaChryseleousa,
    name: { en: 'Panagia Chryseleousa', el: 'Παναγία Χρυσελεούσα' },
    short: { en: 'Chryseleousa', el: 'Χρυσελεούσα' },
    hook: {
      en: 'The mother church, and the heart the village grew around.',
      el: 'Η μητέρα εκκλησία, η καρδιά γύρω από την οποία μεγάλωσε το χωριό.',
    },
    detail: {
      en: 'Built in the late 15th or early 16th century in the Frank-Byzantine style — Byzantine bones with Gothic arches. A single-chamber cross plan under a dome, its drum octagonal on the outside, the masonry careful and even. The Gothic window in the sanctuary apse was altered around the early 17th century, when a niche was cut for an icon of the Virgin and Child. The western wall was pushed out in the early 20th century as the village grew. Two coats of arms sit on the exterior, probably taken from older buildings: one of the medieval Goure family, the other close to the arms of the noblewoman Alice Neville, whose tomb slab lies in the Armenian church in Nicosia.',
      el: 'Χτισμένη στα τέλη του 15ου ή στις αρχές του 16ου αιώνα σε φραγκοβυζαντινό ρυθμό — βυζαντινός σκελετός με γοτθικές καμάρες. Μονόχωρος σταυροειδής ναός με τρούλο, το τύμπανο οκταγωνικό εξωτερικά, η τοιχοποιία προσεγμένη. Το γοτθικό παράθυρο της αψίδας του ιερού μετατράπηκε γύρω στις αρχές του 17ου αιώνα, όταν ανοίχτηκε κόγχη για εικόνα της Παναγίας Βρεφοκρατούσας. Ο δυτικός τοίχος επεκτάθηκε στις αρχές του 20ού αιώνα καθώς μεγάλωνε το χωριό. Δύο οικόσημα κοσμούν το εξωτερικό, πιθανόν παρμένα από παλαιότερα κτίσματα: το ένα της μεσαιωνικής οικογένειας Goure, το άλλο κοντά στα οικόσημα της αρχόντισσας Alice Neville, της οποίας η ταφόπλακα βρίσκεται στην αρμενική εκκλησία της Λευκωσίας.',
    },
    official: `${BASE}/ekklisia-panagia-chryseleousa/`,
  },
  {
    id: 'rafail',
    // Not on any map under its own name — too new. Located from Kleo's
    // Google Maps screenshots, matched to the new chapel OpenStreetMap has
    // here, and confirmed by him.
    pos: { lat: 34.9981, lon: 32.52789, source: 'osm' },
    image: agiosRafail,
    name: { en: 'Saint Raphael', el: 'Άγιος Ραφαήλ' },
    short: { en: 'Raphael', el: 'Ραφαήλ' },
    hook: {
      en: 'Built because one man kept a promise.',
      el: 'Χτίστηκε επειδή ένας άνθρωπος κράτησε το τάμα του.',
    },
    detail: {
      en: 'A villager fell seriously ill and prayed to Saint Raphael every day, vowing to raise a church in his name if he was healed. He recovered — a miracle, as he saw it — and kept his word, helped by his neighbours and the wider community. The church held its first liturgy on Easter Tuesday 2024. Its feast is 22 April, for Saints Raphael, Nicholas and Irene, marked with the Divine Liturgy. It stands in the middle of the village, and people still come from Lysos and the villages around it to light a candle.',
      el: 'Ένας χωριανός αρρώστησε βαριά και προσευχόταν κάθε μέρα στον Άγιο Ραφαήλ, τάζοντας να χτίσει εκκλησία στο όνομά του αν γιατρευόταν. Έγινε καλά — θαύμα, όπως το είδε ο ίδιος — και κράτησε τον λόγο του, με τη βοήθεια των γειτόνων και όλης της κοινότητας. Η εκκλησία λειτούργησε για πρώτη φορά την Τρίτη του Πάσχα του 2024. Γιορτάζει στις 22 Απριλίου, των Αγίων Ραφαήλ, Νικολάου και Ειρήνης, με Θεία Λειτουργία. Βρίσκεται στο κέντρο του χωριού και ακόμα έρχονται πιστοί από τον Λυσό και τα γύρω χωριά να ανάψουν κερί.',
    },
    official: `${BASE}/ekklisia-agios-rafail/`,
  },
  {
    id: 'michail',
    pos: { lat: 34.99316, lon: 32.51069, source: 'osm' },
    image: archangelosMichail,
    name: { en: 'Archangel Michael', el: 'Αρχάγγελος Μιχαήλ' },
    short: { en: 'Michael', el: 'Μιχαήλ' },
    hook: {
      en: 'Medieval walls around an 18th-century iconostasis.',
      el: 'Μεσαιωνικοί τοίχοι γύρω από ένα εικονοστάσι του 18ου αιώνα.',
    },
    detail: {
      en: 'A medieval single-chamber chapel, entered from the west, built of rough stone with carefully cut cornerstones and one small window on each of the north and south walls. The apse projects in a semicircle, with a small square opening at its centre and a carved base inside that served as the altar table. The roof is double-pitched under Marseille tiles. Inside is a wooden iconostasis, probably 18th century, and a 20th-century icon of the Archangel painted by the hierodeacon Panaretos Kousoulidis.',
      el: 'Μεσαιωνικό μονόχωρο ξωκλήσι με είσοδο από τα δυτικά, χτισμένο με αργολιθοδομή και προσεγμένους γωνιόλιθους, με ένα μικρό παράθυρο στον βόρειο και ένα στον νότιο τοίχο. Η αψίδα προεξέχει ημικυκλική, με μικρό τετράγωνο άνοιγμα στο κέντρο και λαξευτή βάση στο εσωτερικό που χρησίμευε ως Αγία Τράπεζα. Η στέγη είναι δίρριχτη με κεραμίδια τύπου Μασσαλίας. Μέσα υπάρχει ξύλινο εικονοστάσι, πιθανώς του 18ου αιώνα, και εικόνα του Αρχαγγέλου του 20ού αιώνα, έργο του ιεροδιακόνου Παναρέτου Κουσουλίδη.',
    },
    official: `${BASE}/ekklisia-archangelou-michail/`,
  },
  {
    id: 'georgios',
    pos: { lat: 35.00871, lon: 32.52124, source: 'osm' },
    image: agiosGeorgios,
    name: { en: 'Chapel of Saint George', el: 'Ξωκλήσι Αγίου Γεωργίου' },
    short: { en: 'George', el: 'Γεώργιος' },
    hook: {
      en: 'Thirteenth century, alone in the forest.',
      el: 'Του 13ου αιώνα, μόνο του μέσα στο δάσος.',
    },
    detail: {
      en: 'The oldest of them all — thirteenth century — standing east of the village in woodland on the road towards Kinousa. It is protected by the Department of Antiquities, and it still holds frescoes, among them Saint Mamas.',
      el: 'Το παλαιότερο απ᾽ όλα — του 13ου αιώνα — στέκει ανατολικά του χωριού, μέσα στο δάσος, στον δρόμο προς την Κινούσα. Προστατεύεται από το Τμήμα Αρχαιοτήτων και σώζει ακόμα τοιχογραφίες, ανάμεσά τους ο Άγιος Μάμας.',
    },
    official: `${BASE}/xoklisi-agiou-georgiou/`,
  },
  {
    id: 'ilias',
    pos: { lat: 34.99999, lon: 32.50879, source: 'osm' },
    image: agiosIlias,
    name: { en: 'Chapel of Prophet Elias', el: 'Ξωκλήσι Αγίου Ηλία' },
    short: { en: 'Elias', el: 'Ηλίας' },
    hook: {
      en: 'A new chapel beside medieval ruins and an ancient tree.',
      el: 'Νέο ξωκλήσι δίπλα σε μεσαιωνικά ερείπια και ένα αρχαίο δέντρο.',
    },
    detail: {
      en: 'North of the village stands a modern single-chamber, vault-roofed chapel with two doors, one west and one facing south. What makes the spot worth the walk is what lies beside it: the ruins of an earlier medieval single-chamber church, and near them an ancient terebinth — a natural monument in its own right.',
      el: 'Βόρεια του χωριού στέκει ένα σύγχρονο μονόχωρο, καμαροσκέπαστο ξωκλήσι με δύο εισόδους, μία δυτικά και μία προς τον νότο. Αυτό που αξίζει τον δρόμο είναι όσα βρίσκονται δίπλα του: τα ερείπια παλαιότερης μεσαιωνικής μονόχωρης εκκλησίας και, κοντά τους, μια αρχαία τρεμιθιά — φυσικό μνημείο από μόνη της.',
    },
    official: `${BASE}/xoklisi-agiou-ilia/`,
  },
  {
    id: 'merkourios',
    pos: { lat: 35.03073, lon: 32.54454, source: 'osm' },
    image: agiosMerkourios,
    name: { en: 'Chapel of Saint Mercurius', el: 'Ξωκλήσι Αγίου Μερκουρίου' },
    short: { en: 'Mercurius', el: 'Μερκούριος' },
    hook: {
      en: 'The church of a village that emptied in 1948.',
      el: 'Η εκκλησία ενός οικισμού που ερήμωσε το 1948.',
    },
    detail: {
      en: 'Deep in the Paphos Forest east of Lysos, on the way to Stavros tis Psokas. It was the main church of a settlement abandoned in 1948. The building you see is entirely new, raised on the site of the old one, whose size and style are now unknown. Its 19th-century wooden processional cross survived and is kept at Panagia Chryseleousa — the Baptism carved on one face, the Crucifixion on the other.',
      el: 'Βαθιά μέσα στο Δάσος της Πάφου, ανατολικά του Λυσού, στον δρόμο προς τον Σταυρό της Ψώκας. Ήταν η κεντρική εκκλησία ενός οικισμού που εγκαταλείφθηκε το 1948. Το κτίσμα που βλέπετε είναι εξ ολοκλήρου νέο, στη θέση του παλιού, του οποίου το μέγεθος και ο ρυθμός δεν είναι πια γνωστά. Ο ξύλινος λιτανευτικός σταυρός του 19ου αιώνα σώθηκε και φυλάσσεται στην Παναγία Χρυσελεούσα — η Βάπτιση σκαλισμένη στη μία όψη, η Σταύρωση στην άλλη.',
    },
    official: `${BASE}/xoklisi-agiou-merkouriou/`,
  },
  {
    id: 'konstantinos',
    pos: { lat: 34.99498, lon: 32.50667, source: 'osm' },
    image: agiosKonstantinos,
    name: { en: 'Saints Constantine and Helen', el: 'Άγιος Κωνσταντίνος και Ελένη' },
    short: { en: 'Constantine', el: 'Κωνσταντίνος' },
    hook: {
      en: 'Repaired in June 1947 — it says so on the Holy Table.',
      el: 'Επισκευάστηκε τον Ιούνιο του 1947 — το λέει η ίδια η Αγία Τράπεζα.',
    },
    detail: {
      en: 'A medieval single-chamber chapel at the western edge of the village, built of rubble masonry with dressed corners, a projecting semicircular apse and a pitched roof. Unusually the main door is on the north side, with small windows west and south, and the apse carries two small round light openings instead of the usual icon door. An inscription on the Holy Table records repairs in June 1947. The veneration icon — Saint Constantine holding a great wooden cross, Saint Helen the True Cross — is 20th century, by the hierodeacon Panaretos Kousoulidis.',
      el: 'Μεσαιωνικό μονόχωρο ξωκλήσι στο δυτικό άκρο του οικισμού, με αργολιθοδομή και λαξευτούς γωνιόλιθους, προεξέχουσα ημικυκλική αψίδα και δίρριχτη στέγη. Ασυνήθιστα, η κύρια είσοδος είναι στη βόρεια πλευρά, με μικρά παράθυρα δυτικά και νότια, ενώ η αψίδα έχει δύο μικρά στρογγυλά φεγγίτες αντί για το συνηθισμένο θυρίδιο. Επιγραφή στην Αγία Τράπεζα καταγράφει επισκευές τον Ιούνιο του 1947. Η προσκυνηματική εικόνα — ο Άγιος Κωνσταντίνος με μεγάλο ξύλινο σταυρό, η Αγία Ελένη με τον Τίμιο Σταυρό — είναι του 20ού αιώνα, έργο του ιεροδιακόνου Παναρέτου Κουσουλίδη.',
    },
    official: `${BASE}/xoklisi-agiou-konstantinou-kai-elenis/`,
  },
  {
    id: 'charalambos',
    pos: { lat: 34.97792, lon: 32.52071, source: 'osm' },
    image: agiosCharalambos,
    name: {
      en: 'Holy Spring & Cave of Saint Charalambos',
      el: 'Αγίασμα και Σπήλαιο Αγίου Χαραλάμπους',
    },
    short: { en: 'Charalambos', el: 'Χαράλαμπος' },
    hook: {
      en: 'Christians and Muslims alike came here to heal their animals.',
      el: 'Χριστιανοί και μουσουλμάνοι έρχονταν εδώ για να γιατρέψουν τα ζώα τους.',
    },
    detail: {
      en: 'The church is single-chamber and vaulted, dated 1909 on its lintel, with a three-sided apse and 18th-century carved wooden furnishings brought over from Panagia Chryseleousa. South of it opens a cave about six metres wide and four deep, with a cement altar used for the occasional service and niches cut into the rock that may once have been graves or a hermit’s cell. A sacred spring ran nearby. Saint Charalambos was held the protector of the flocks by Christian and Muslim villagers alike from all the settlements around: when animals fell sick, people took white earth from the cave and holy water and sprinkled it over them. His feast is 10 February, and until 1963 it drew a great livestock fair into the churchyard.',
      el: 'Η εκκλησία είναι μονόχωρη και καμαροσκέπαστη, με χρονολογία 1909 στο υπέρθυρο, τρίπλευρη αψίδα και ξυλόγλυπτο εξοπλισμό του 18ου αιώνα φερμένο από την Παναγία Χρυσελεούσα. Νότια της ανοίγει σπήλαιο περίπου έξι μέτρα πλάτος και τέσσερα βάθος, με τσιμεντένια Αγία Τράπεζα για περιστασιακές λειτουργίες και λαξευμένες κόγχες που ίσως ήταν τάφοι ή ασκητήριο. Κοντά ανέβλυζε αγίασμα. Ο Άγιος Χαράλαμπος θεωρούνταν προστάτης των κοπαδιών από χριστιανούς και μουσουλμάνους χωρικούς όλων των γύρω οικισμών: όταν αρρώσταιναν τα ζώα, έπαιρναν άσπρο χώμα από τη σπηλιά και αγιασμό και τα ράντιζαν. Γιορτάζει στις 10 Φεβρουαρίου και μέχρι το 1963 η γιορτή έφερνε μεγάλο ζωοπανήγυρι στον αυλόγυρο.',
    },
    official: `${BASE}/agiasma-kai-spilaio-agiou-charalabous/`,
  },
  {
    id: 'marina',
    pos: { lat: 34.99817, lon: 32.51443, source: 'osm' },
    image: agiaMarina,
    name: { en: 'Agia Marina', el: 'Αγία Μαρίνα' },
    short: { en: 'Marina', el: 'Μαρίνα' },
    hook: {
      en: 'The chapel that keeps the village cemetery.',
      el: 'Το ξωκλήσι που φυλάει το κοιμητήριο του χωριού.',
    },
    detail: {
      en: 'The chapel in the village cemetery. Its history has not been written down yet — if you know when it was built, who built it, or when it keeps its feast, the village would like to hear from you.',
      el: 'Το ξωκλήσι στο κοιμητήριο του χωριού. Η ιστορία του δεν έχει καταγραφεί ακόμα — αν ξέρετε πότε χτίστηκε, ποιος το έχτισε ή πότε γιορτάζει, το χωριό θα ήθελε να το μάθει.',
    },
    needsResearch: true,
  },
];
