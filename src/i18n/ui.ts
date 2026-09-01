/**
 * All site text lives here, in both languages.
 * Adding a new string means adding it to BOTH `en` and `el`.
 * German can be added later as a third key without touching anything else.
 */

export const languages = {
  en: 'English',
  el: 'Ελληνικά',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** The one-page scroll order. Used for the menu and the page itself. */
export const sections = [
  'welcome',
  'churches',
  'sky',
  'discover',
  'thennow',
  'wall',
  'visit',
  'ask',
] as const;

export const ui = {
  en: {
    'site.name': 'Lysos',
    'site.region': 'Village · Cyprus',
    'site.title': 'Lysos Village — Paphos, Cyprus',
    'site.description':
      "Cyprus's largest mountain village. Heritage, churches, forest and night sky — carved from stone, lit by the future.",
    'site.tagline': 'Carved from stone, lit by the future.',

    'hero.kicker': 'Paphos Highlands · 560 m · Cyprus',
    'hero.welcome': 'Welcome to Lysos',
    'hero.alt':
      'The church of Panagia Chryseleousa standing above the old stone fountain, mirrored in the still water of the village pool.',
    'hero.scroll': 'Explore',

    'nav.language': 'Language',
    'nav.menu': 'Sections',
    'nav.close': 'Close',
    skip: 'Skip to main content',
    soon: 'In progress',

    // — Welcome —
    'welcome.nav': 'Welcome',
    'welcome.kicker': 'The village',
    'welcome.title': "Cyprus's largest mountain village",
    'welcome.body':
      'Lysos sits at 560 metres in the Paphos Forest, high above the valleys that run down to the Akamas. Around the church of Panagia Chryseleousa the village has kept its stories, its chapels and its people through the centuries.',

    // — Churches —
    'churches.nav': 'Churches',
    'churches.kicker': 'Nine churches & chapels',
    'churches.title': 'Where the village begins',
    'churches.body':
      'Panagia Chryseleousa is the mother church — late 15th to early 16th century, Frank-Byzantine, with Gothic arches. Around it stand the chapels the village has kept and rebuilt across generations.',
    'churches.note': 'Each church gets its own photograph, history and place on the map.',

    // — Sacred Sky —
    'sky.nav': 'Sacred Sky',
    'sky.kicker': 'A dark sky village',
    'sky.title': 'The Sacred Sky of Lysos',
    'sky.body':
      'Far from the coastal glare, the Milky Way still burns over Lysos. The nine churches drawn as a constellation across the real night sky, with Chryseleousa as the anchor star.',
    'sky.note': 'The night-sky feature is being built.',

    // — Discover —
    'discover.nav': 'Discover',
    'discover.kicker': 'Stories, food, wild land',
    'discover.title': 'Discover Lysos',
    'discover.legends.title': 'Legends & folklore',
    'discover.legends.body':
      'The hero Digenis, and the tale of Anthousa — stories the village has carried for generations.',
    'discover.food.title': 'Maxilles',
    'discover.food.body':
      "The village's own sweet dried figs, alongside the wine routes that thread through these hills.",
    'discover.nature.title': 'Forest & wildlife',
    'discover.nature.body':
      'The Paphos Forest at the door: the wild Mouflon, Bonelli’s eagles overhead, and trails through the pines.',

    // — Then & Now —
    'thennow.nav': 'Then & Now',
    'thennow.kicker': 'Then & now',
    'thennow.title': 'The same stones, a century apart',
    'thennow.body':
      'Old photographs of Lysos set beside the very same places today — drag between them and watch the village change and stay the same.',
    'thennow.note': 'Waiting on the old village photographs.',

    // — Memory Wall —
    'wall.nav': 'Memory Wall',
    'wall.kicker': 'Your village',
    'wall.title': 'The Memory Wall',
    'wall.body':
      'A wall the village writes itself. Villagers here and family abroad add their own photographs and their own stories — a wedding, a harvest, a summer that is still remembered.',
    'wall.note': 'Needs its database connecting before people can post.',

    // — Visit —
    'visit.nav': 'Visit',
    'visit.kicker': 'Plan your visit',
    'visit.title': 'Come find us in the mountains',
    'visit.getting.title': 'Getting here',
    'visit.getting.body':
      'From Paphos take the B7, then the E723 north-east — about 36 km, roughly 40 minutes, climbing the whole way into the Paphos Forest.',
    'visit.doing.title': 'What to do',
    'visit.doing.body':
      'Walk the forest trails, follow the wine routes, visit the nine churches and the holy spring and cave of Agios Charalambos.',
    'visit.map.alt':
      'Map of Lysos and the surrounding Paphos Forest, with the village marked at its centre.',
    'visit.directions': 'Get directions',
    'visit.bigmap': 'Open larger map',

    // — Ask Lysos —
    'ask.nav': 'Ask Lysos',
    'ask.kicker': 'Ask anything',
    'ask.title': 'Ask Lysos',
    'ask.body':
      'A guide to the village, in your own language. Ask how to get here, what to eat, which church is which, or where to stand to see the stars.',
    'ask.note': 'The guide is being taught about the village.',
  },

  el: {
    'site.name': 'Λυσός',
    'site.region': 'Χωριό · Κύπρος',
    'site.title': 'Λυσός — Πάφος, Κύπρος',
    'site.description':
      'Το μεγαλύτερο ορεινό χωριό της Κύπρου. Κληρονομιά, εκκλησίες, δάσος και νυχτερινός ουρανός — σκαλισμένο στην πέτρα, φωτισμένο από το μέλλον.',
    'site.tagline': 'Σκαλισμένο στην πέτρα, φωτισμένο από το μέλλον.',

    'hero.kicker': 'Ορεινή Πάφος · 560 μ. · Κύπρος',
    'hero.welcome': 'Καλώς ήρθατε στον Λυσό',
    'hero.alt':
      'Η εκκλησία της Παναγίας Χρυσελεούσας πάνω από την παλιά πέτρινη βρύση, καθρεφτισμένη στα ήρεμα νερά της δεξαμενής του χωριού.',
    'hero.scroll': 'Εξερευνήστε',

    'nav.language': 'Γλώσσα',
    'nav.menu': 'Ενότητες',
    'nav.close': 'Κλείσιμο',
    skip: 'Μετάβαση στο κύριο περιεχόμενο',
    soon: 'Σε εξέλιξη',

    // — Welcome —
    'welcome.nav': 'Καλωσόρισμα',
    'welcome.kicker': 'Το χωριό',
    'welcome.title': 'Το μεγαλύτερο ορεινό χωριό της Κύπρου',
    'welcome.body':
      'Ο Λυσός βρίσκεται στα 560 μέτρα, μέσα στο Δάσος της Πάφου, ψηλά πάνω από τις κοιλάδες που κατεβαίνουν προς τον Ακάμα. Γύρω από την εκκλησία της Παναγίας Χρυσελεούσας, το χωριό κράτησε τις ιστορίες του, τα ξωκλήσια του και τους ανθρώπους του μέσα στους αιώνες.',

    // — Churches —
    'churches.nav': 'Εκκλησίες',
    'churches.kicker': 'Εννιά εκκλησίες & ξωκλήσια',
    'churches.title': 'Εκεί που αρχίζει το χωριό',
    'churches.body':
      'Η Παναγία η Χρυσελεούσα είναι η μητέρα εκκλησία — τέλη 15ου με αρχές 16ου αιώνα, φραγκοβυζαντινή, με γοτθικές καμάρες. Γύρω της στέκουν τα ξωκλήσια που το χωριό κράτησε και ξανάχτισε από γενιά σε γενιά.',
    'churches.note':
      'Κάθε εκκλησία θα αποκτήσει τη δική της φωτογραφία, ιστορία και θέση στον χάρτη.',

    // — Sacred Sky —
    'sky.nav': 'Ιερός Ουρανός',
    'sky.kicker': 'Χωριό με σκοτεινό ουρανό',
    'sky.title': 'Ο Ιερός Ουρανός του Λυσού',
    'sky.body':
      'Μακριά από τα φώτα της παραλίας, ο Γαλαξίας καίει ακόμα πάνω από τον Λυσό. Οι εννιά εκκλησίες σχεδιασμένες σαν αστερισμός στον πραγματικό νυχτερινό ουρανό, με τη Χρυσελεούσα για άστρο-οδηγό.',
    'sky.note': 'Η ενότητα του νυχτερινού ουρανού είναι υπό κατασκευή.',

    // — Discover —
    'discover.nav': 'Ανακάλυψε',
    'discover.kicker': 'Ιστορίες, γεύσεις, άγρια γη',
    'discover.title': 'Ανακάλυψε τον Λυσό',
    'discover.legends.title': 'Θρύλοι & παραδόσεις',
    'discover.legends.body':
      'Ο ήρωας Διγενής και ο θρύλος της Ανθούσας — ιστορίες που το χωριό κουβαλά από γενιά σε γενιά.',
    'discover.food.title': 'Μαξιλλές',
    'discover.food.body':
      'Τα ξερά γλυκά σύκα του χωριού, μαζί με τους δρόμους του κρασιού που περνούν μέσα από αυτούς τους λόφους.',
    'discover.nature.title': 'Δάσος & άγρια ζωή',
    'discover.nature.body':
      'Το Δάσος της Πάφου στην πόρτα σου: το αγρινό, οι σπιζαετοί από ψηλά, και μονοπάτια μέσα στα πεύκα.',

    // — Then & Now —
    'thennow.nav': 'Τότε & Τώρα',
    'thennow.kicker': 'Τότε & τώρα',
    'thennow.title': 'Οι ίδιες πέτρες, έναν αιώνα μετά',
    'thennow.body':
      'Παλιές φωτογραφίες του Λυσού δίπλα στα ίδια ακριβώς σημεία σήμερα — σύρε ανάμεσά τους και δες το χωριό να αλλάζει και να μένει ίδιο.',
    'thennow.note': 'Αναμένονται οι παλιές φωτογραφίες του χωριού.',

    // — Memory Wall —
    'wall.nav': 'Τοίχος Μνήμης',
    'wall.kicker': 'Το χωριό σου',
    'wall.title': 'Ο Τοίχος της Μνήμης',
    'wall.body':
      'Ένας τοίχος που τον γράφει το ίδιο το χωριό. Οι χωριανοί εδώ και οι δικοί μας στο εξωτερικό προσθέτουν τις δικές τους φωτογραφίες και ιστορίες — έναν γάμο, έναν τρύγο, ένα καλοκαίρι που ακόμα θυμούνται.',
    'wall.note': 'Χρειάζεται σύνδεση με τη βάση δεδομένων για να μπορεί ο κόσμος να ανεβάζει.',

    // — Visit —
    'visit.nav': 'Επίσκεψη',
    'visit.kicker': 'Σχεδίασε την επίσκεψη',
    'visit.title': 'Έλα να μας βρεις στα βουνά',
    'visit.getting.title': 'Πώς θα έρθεις',
    'visit.getting.body':
      'Από την Πάφο πάρε τον B7 και μετά τον E723 βορειοανατολικά — περίπου 36 χλμ., γύρω στα 40 λεπτά, ανηφορίζοντας συνεχώς μέσα στο Δάσος της Πάφου.',
    'visit.doing.title': 'Τι να κάνεις',
    'visit.doing.body':
      'Περπάτησε τα μονοπάτια του δάσους, ακολούθησε τους δρόμους του κρασιού, επισκέψου τις εννιά εκκλησίες και το αγίασμα και τη σπηλιά του Αγίου Χαραλάμπους.',
    'visit.map.alt':
      'Χάρτης του Λυσού και του γύρω Δάσους της Πάφου, με το χωριό σημειωμένο στο κέντρο.',
    'visit.directions': 'Οδηγίες διαδρομής',
    'visit.bigmap': 'Μεγαλύτερος χάρτης',

    // — Ask Lysos —
    'ask.nav': 'Ρώτα τον Λυσό',
    'ask.kicker': 'Ρώτα ό,τι θέλεις',
    'ask.title': 'Ρώτα τον Λυσό',
    'ask.body':
      'Ένας οδηγός για το χωριό, στη γλώσσα σου. Ρώτα πώς θα έρθεις, τι να φας, ποια εκκλησία είναι ποια, ή πού να σταθείς για να δεις τα αστέρια.',
    'ask.note': 'Ο οδηγός μαθαίνει ακόμα για το χωριό.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

/** Returns a `t('some.key')` function for the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** '/about' -> '/el/about' for Greek, '/about' for English. */
export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}
