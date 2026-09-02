/**
 * The walks from Lysos.
 *
 * SOURCES. The three routes and their distances come from the Lysos Community
 * Council's own trails page, which is credited on the site. That the E4 passes
 * this way is confirmed independently in OpenStreetMap, which carries the
 * relation "European Walking Route E4, Cyprus, Main Route" through here.
 *
 * WHAT IS ESTIMATED, AND SAID TO BE. No source gives a walking time or a
 * difficulty grade for any of these. Times below are worked from distance at
 * an unhurried pace on hill tracks and are labelled as estimates on the page.
 * Difficulty is not graded at all rather than invented.
 */

export interface Walk {
  id: string;
  name: { en: string; el: string };
  km: number;
  /** Estimated, and labelled as such. */
  hours: { en: string; el: string };
  shape: { en: string; el: string };
  what: { en: string; el: string };
  /** Where it begins. */
  start: { en: string; el: string };
}

export const walks: Walk[] = [
  {
    id: 'short',
    name: { en: 'The short circuit', el: 'Ο μικρός κύκλος' },
    km: 6,
    hours: { en: 'about 1½–2 hours', el: 'περίπου 1½–2 ώρες' },
    shape: { en: 'Circular — ends where it starts', el: 'Κυκλική — τελειώνει εκεί που αρχίζει' },
    what: {
      en: 'The shorter of the village’s two loops, out into the country and back. Walked or ridden on a bike.',
      el: 'Ο μικρότερος από τους δύο κύκλους του χωριού, έξω στην ύπαιθρο και πίσω. Με τα πόδια ή με ποδήλατο.',
    },
    start: { en: 'The village centre', el: 'Το κέντρο του χωριού' },
  },
  {
    id: 'long',
    name: { en: 'The long circuit', el: 'Ο μεγάλος κύκλος' },
    km: 12,
    hours: { en: 'about 3–4 hours', el: 'περίπου 3–4 ώρες' },
    shape: { en: 'Circular — ends where it starts', el: 'Κυκλική — τελειώνει εκεί που αρχίζει' },
    what: {
      en: 'Twice the distance and further out, through the forest and the fields around the village. Walked or ridden.',
      el: 'Διπλάσια απόσταση και πιο μακριά, μέσα από το δάσος και τα χωράφια γύρω από το χωριό. Με τα πόδια ή με ποδήλατο.',
    },
    start: { en: 'The village centre', el: 'Το κέντρο του χωριού' },
  },
  {
    id: 'e4',
    name: { en: 'Lysos to Kritou Terra — the E4', el: 'Λυσός προς Κρίτου Τέρρα — το E4' },
    km: 24,
    hours: { en: 'a full day', el: 'μια ολόκληρη μέρα' },
    shape: { en: 'One way — arrange a lift back', el: 'Μονή διαδρομή — κανόνισε μεταφορά για την επιστροφή' },
    what: {
      en: 'The old road that linked Lysos and Meladia with Kritou Terra, now part of the E4 — the European long-distance path that crosses the whole of Cyprus, and the continent beyond it.',
      el: 'Ο παλιός δρόμος που ένωνε τον Λυσό και τη Μελάδεια με την Κρίτου Τέρρα, σήμερα κομμάτι του E4 — του ευρωπαϊκού μονοπατιού μεγάλων αποστάσεων που διασχίζει όλη την Κύπρο, και την ήπειρο πιο πέρα.',
    },
    start: { en: 'The village centre', el: 'Το κέντρο του χωριού' },
  },
];
