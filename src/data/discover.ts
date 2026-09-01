/**
 * Discover Lysos — legends, food, wild land.
 *
 * SOURCING RULE, same as the churches: everything here comes from
 * lyssos.org.cy, except the Digenis place-names, which are also attested on
 * the Greek Wikipedia entry for the village. Nothing is invented.
 *
 * DELIBERATELY LEFT OUT, on Kleo's instruction:
 *  - The tale of Anthousa. No trace of her could be found tied to Lysos in the
 *    village's own site, Greek Wikipedia, or the wider web. Only legends with
 *    definite origins go on this site.
 *  - Bonelli's eagles. The village record lists hawks, partridges, pheasants
 *    and doves; it does not name that species, so neither do we.
 *  - EOKA and Evagoras Pallikaridis. Documented and significant, but Kleo
 *    asked for it to stay off the site.
 */

export interface Discovery {
  id: string;
  title: { en: string; el: string };
  hook: { en: string; el: string };
  detail: { en: string; el: string };
  /** Short facts shown as a list under the detail. */
  facts?: { en: string; el: string }[];
  /** True when a photograph would lift this card and we don't have one. */
  wantsPhoto?: boolean;
}

export const discoveries: Discovery[] = [
  {
    id: 'legends',
    wantsPhoto: true,
    title: { en: 'Legends & folklore', el: 'Θρύλοι & παραδόσεις' },
    hook: {
      en: 'The hero who left his footprint on the village.',
      el: 'Ο ήρωας που άφησε το πατήμα του στο χωριό.',
    },
    detail: {
      en: 'Lysos has stood since medieval times, and the legends of Digenis — hero of the medieval Greek epics — still survive around it. He is not only remembered here, he is written into the ground: the village keeps the place-names «Πατιά του Διγενή», the footstep of Digenis, and «Πέτρα της Χαρτζιής», the Stone of Chartzi, where the village record places his dwelling.',
      el: 'Ο Λυσός στέκει από τα μεσαιωνικά χρόνια, και οι θρύλοι του Διγενή — του ήρωα των μεσαιωνικών επών — επιζούν ακόμα γύρω του. Δεν τον θυμούνται μόνο εδώ· είναι γραμμένος στο ίδιο το χώμα: το χωριό κρατά τα τοπωνύμια «Πατιά του Διγενή» και «Πέτρα της Χαρτζιής», όπου η καταγραφή του χωριού τοποθετεί την κατοικία του.',
    },
  },
  {
    id: 'food',
    wantsPhoto: true,
    title: { en: 'Maxilles', el: 'Μαξιλλές' },
    hook: {
      en: "The village's own sweet, made from a fig.",
      el: 'Το δικό του γλυκό του χωριού, από σύκο.',
    },
    detail: {
      en: 'Maxilles belong to Lysos: dried figs, eaten as a sweetener on their own, or taken with almonds or walnuts. They come out of a countryside that also gives cherries, olives, carob, citrus, pulses and cereals — and the wine routes run through these same hills.',
      el: 'Οι Μαξιλλές ανήκουν στον Λυσό: ξερά σύκα, που τρώγονται σκέτα σαν γλυκαντικό ή με αμύγδαλα και καρύδια. Βγαίνουν από μια ύπαιθρο που δίνει επίσης κεράσια, ελιές, χαρούπια, εσπεριδοειδή, όσπρια και δημητριακά — και οι δρόμοι του κρασιού περνούν μέσα από τους ίδιους αυτούς λόφους.',
    },
  },
  {
    id: 'nature',
    title: { en: 'Forest & wildlife', el: 'Δάσος & άγρια ζωή' },
    hook: {
      en: 'Pine, cedar, and the wild mouflon at the door.',
      el: 'Πεύκο, κέδρος, και το αγρινό στην πόρτα.',
    },
    detail: {
      en: 'The Paphos Forest begins where the village ends — pine, cedar, cypress and fir, with wild olive, mastic and myrtle in the scrub between. In spring the ground turns: Cyprus tulips, Orchis morio orchids, cyclamen, anemones and wild iris. Among the trees move foxes, hares and hedgehogs, and the agrino — the mouflon, Cyprus’s own wild sheep. Overhead there are hawks, partridges, pheasants, doves and the migrants passing through; below, tortoises and freshwater crabs.',
      el: 'Το Δάσος της Πάφου αρχίζει εκεί που τελειώνει το χωριό — πεύκα, κέδροι, κυπαρίσσια και έλατα, με αγριελιές, σχίνους και μυρτιές στους θάμνους ανάμεσα. Την άνοιξη το χώμα αλλάζει: κυπριακές τουλίπες, ορχιδέες Orchis morio, κυκλάμινα, ανεμώνες και άγριες ίριδες. Ανάμεσα στα δέντρα κινούνται αλεπούδες, λαγοί και σκαντζόχοιροι, και το αγρινό — το ενδημικό άγριο πρόβατο της Κύπρου. Από πάνω γεράκια, πέρδικες, φασιανοί, περιστέρια και τα αποδημητικά που περνούν· από κάτω χελώνες και ποταμοκάβουρα.',
    },
    facts: [
      {
        en: 'The Lysos–Stavros tis Psokas trail runs right through the forest',
        el: 'Το μονοπάτι Λυσός–Σταυρός της Ψώκας περνά μέσα από το δάσος',
      },
      {
        en: 'A horse-riding farm takes riders through woodland, streams and chapels',
        el: 'Φάρμα ιππασίας οδηγεί τους αναβάτες μέσα από δάση, ρυάκια και ξωκλήσια',
      },
      {
        en: 'From the Prosefchi viewpoint you can see as far as Lara and the Troodos',
        el: 'Από το σημείο θέας «Προσευχή» φτάνει το μάτι ως τη Λάρα και τον Τρόοδο',
      },
      {
        en: 'Tripylos, the highest point of the village lands, stands at 1,362 m',
        el: 'Ο Τρίπυλος, το ψηλότερο σημείο της περιοχής, φτάνει τα 1.362 μ.',
      },
    ],
  },
];
