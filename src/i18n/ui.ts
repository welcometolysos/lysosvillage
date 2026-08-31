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
    'hero.sub': "Cyprus's largest mountain village.",
    'hero.alt':
      'The church of Panagia Chryseleousa standing above the old stone fountain, mirrored in the still water of the village pool.',
    'hero.scroll': 'Explore',
    'building.kicker': 'Being built',
    'building.title': 'The village is coming online',
    'building.body':
      'Lysos is being carved into the web, stone by stone — the churches, the stories, the forest and the night sky above it. Come back soon.',
    'nav.language': 'Language',
    'skip': 'Skip to main content',
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
    'hero.sub': 'Το μεγαλύτερο ορεινό χωριό της Κύπρου.',
    'hero.alt':
      'Η εκκλησία της Παναγίας Χρυσελεούσας πάνω από την παλιά πέτρινη βρύση, καθρεφτισμένη στα ήρεμα νερά της δεξαμενής του χωριού.',
    'hero.scroll': 'Εξερευνήστε',
    'building.kicker': 'Υπό κατασκευή',
    'building.title': 'Το χωριό ανεβαίνει στο διαδίκτυο',
    'building.body':
      'Ο Λυσός χτίζεται στο διαδίκτυο, πέτρα πέτρα — οι εκκλησίες, οι ιστορίες, το δάσος και ο νυχτερινός ουρανός από πάνω του. Επιστρέψτε σύντομα.',
    'nav.language': 'Γλώσσα',
    'skip': 'Μετάβαση στο κύριο περιεχόμενο',
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
