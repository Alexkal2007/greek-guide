const ISLANDS = [
  {
    slug: 'santorini',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Santorini', el: 'Σαντορίνη' },
    tagline: { en: 'Volcanic caldera views', el: 'Θέα στην ηφαιστειογενή καλντέρα' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Santorini%2C_Oia_32.jpg?width=1400',
    credit: 'LBM1948, CC BY-SA 4.0',
    desc: {
      en: 'Santorini is built along the rim of a collapsed volcanic caldera, with whitewashed villages perched hundreds of metres above the sea. Oia is famous for its sunsets, while Fira offers lively cafés and cable-car views over the crater.',
      el: 'Η Σαντορίνη είναι χτισμένη στα χείλη μιας βυθισμένης ηφαιστειακής καλντέρας, με ασβεστωμένα χωριά χτισμένα εκατοντάδες μέτρα πάνω από τη θάλασσα. Η Οία φημίζεται για τα ηλιοβασιλέματά της, ενώ τα Φηρά προσφέρουν ζωντανά καφέ και θέα στον κρατήρα από το τελεφερίκ.'
    },
    best: { en: 'April–October, quietest in May, June & September', el: 'Απρίλιος–Οκτώβριος, πιο ήσυχα τον Μάιο, Ιούνιο & Σεπτέμβριο' },
    highlights: {
      en: ['Sunset in Oia', 'Caldera-view villages', 'Volcanic black-sand beaches'],
      el: ['Ηλιοβασίλεμα στην Οία', 'Χωριά με θέα στην καλντέρα', 'Ηφαιστειογενείς μαύρες παραλίες']
    }
  },
  {
    slug: 'mykonos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Mykonos', el: 'Μύκονος' },
    tagline: { en: 'Cosmopolitan island life', el: 'Κοσμοπολίτικο νησί' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Little_Venice%2C_Mykonos.jpg?width=1400',
    credit: 'Bgag, CC BY-SA 3.0',
    desc: {
      en: 'Mykonos pairs whitewashed alleyways and iconic windmills with some of the liveliest nightlife in Greece. Little Venice, with its balconies over the water, is the classic postcard view of the island.',
      el: 'Η Μύκονος συνδυάζει ασβεστωμένα σοκάκια και εμβληματικούς ανεμόμυλους με μια από τις πιο ζωντανές νυχτερινές ζωές της Ελλάδας. Η Μικρή Βενετία, με τα μπαλκόνια πάνω από το νερό, είναι η κλασική εικόνα-καρτ ποστάλ του νησιού.'
    },
    best: { en: 'May–September, peak nightlife July–August', el: 'Μάιος–Σεπτέμβριος, αιχμή νυχτερινής ζωής Ιούλιος–Αύγουστος' },
    highlights: {
      en: ['Little Venice', 'Windmills of Kato Mili', 'Beach clubs at Paradise & Super Paradise'],
      el: ['Μικρή Βενετία', 'Ανεμόμυλοι Κάτω Μύλοι', 'Beach clubs στο Paradise & Super Paradise']
    }
  },
  {
    slug: 'chania',
    group: 'crete',
    groupName: { en: 'Crete', el: 'Κρήτη' },
    name: { en: 'Chania', el: 'Χανιά' },
    tagline: { en: 'Venetian harbour town', el: 'Ενετική πόλη-λιμάνι' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aerial_view_of_the_Old_Venetian_Harbour_in_Chania%2C_Greece.jpg?width=1400',
    credit: 'dronepicr, CC BY 2.0',
    desc: {
      en: 'Chania, on the island of Crete, is built around a beautifully preserved Venetian harbour lined with cafés, a 16th-century lighthouse, and narrow old-town lanes. It is also the gateway to the Samaria Gorge.',
      el: 'Τα Χανιά, στο νησί της Κρήτης, είναι χτισμένα γύρω από ένα εξαιρετικά διατηρημένο ενετικό λιμάνι με καφέ, έναν φάρο του 16ου αιώνα, και στενά δρομάκια στην παλιά πόλη. Είναι επίσης η πύλη προς το φαράγγι της Σαμαριάς.'
    },
    best: { en: 'April–June & September–October for hiking, July–August for beaches', el: 'Απρίλιος–Ιούνιος & Σεπτέμβριος–Οκτώβριος για πεζοπορία, Ιούλιος–Αύγουστος για παραλίες' },
    highlights: {
      en: ['Old Venetian Harbour', 'Samaria Gorge', 'Balos & Elafonisi beaches'],
      el: ['Παλιό Ενετικό Λιμάνι', 'Φαράγγι Σαμαριάς', 'Παραλίες Μπάλος & Ελαφονήσι']
    }
  },
  {
    slug: 'rhodes',
    group: 'dodecanese',
    groupName: { en: 'Dodecanese', el: 'Δωδεκάνησα' },
    name: { en: 'Rhodes', el: 'Ρόδος' },
    tagline: { en: 'Medieval old town', el: 'Μεσαιωνική παλιά πόλη' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Street_of_Knights_%28Rhodes%29_03.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Rhodes\' Old Town is a UNESCO World Heritage Site, ringed by medieval walls. The Street of the Knights leads up to the Palace of the Grand Master, while the coastline offers everything from resort beaches to quiet coves.',
      el: 'Η Παλιά Πόλη της Ρόδου είναι μνημείο παγκόσμιας κληρονομιάς της UNESCO, περιτριγυρισμένη από μεσαιωνικά τείχη. Η Οδός των Ιπποτών οδηγεί στο Παλάτι του Μεγάλου Μαγίστρου, ενώ η ακτογραμμή προσφέρει από οργανωμένες παραλίες μέχρι ήσυχους κολπίσκους.'
    },
    best: { en: 'May–October, warm sea through late autumn', el: 'Μάιος–Οκτώβριος, ζεστή θάλασσα μέχρι αργά το φθινόπωρο' },
    highlights: {
      en: ['Street of the Knights', 'Palace of the Grand Master', 'Lindos acropolis & beach'],
      el: ['Οδός των Ιπποτών', 'Παλάτι του Μεγάλου Μαγίστρου', 'Ακρόπολη & παραλία Λίνδου']
    }
  },
  {
    slug: 'corfu',
    group: 'ionian',
    groupName: { en: 'Ionian Islands', el: 'Ιόνια Νησιά' },
    name: { en: 'Corfu', el: 'Κέρκυρα' },
    tagline: { en: 'Venetian-style old town', el: 'Παλιά πόλη σε βενετσιάνικο ρυθμό' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Liston_-_Corfu_Old_Town.jpg?width=1400',
    credit: 'Amethyst forest, CC BY-SA 4.0',
    desc: {
      en: 'Corfu\'s old town blends Venetian, French and British influences, best seen along the arcaded Liston promenade. Beyond the town, the island is green and lush, with olive groves running down to quiet beaches.',
      el: 'Η παλιά πόλη της Κέρκυρας συνδυάζει βενετσιάνικες, γαλλικές και βρετανικές επιρροές, με πιο χαρακτηριστικό σημείο τη στοά του Λιστόν. Έξω από την πόλη, το νησί είναι καταπράσινο, με ελαιώνες που φτάνουν μέχρι ήσυχες παραλίες.'
    },
    best: { en: 'May–June & September for mild weather, July–August for swimming', el: 'Μάιος–Ιούνιος & Σεπτέμβριος για ήπιο καιρό, Ιούλιος–Αύγουστος για μπάνιο' },
    highlights: {
      en: ['Liston promenade', 'Old Fortress', 'Paleokastritsa coastline'],
      el: ['Στοά Λιστόν', 'Παλαιό Φρούριο', 'Ακτογραμμή Παλαιοκαστρίτσας']
    }
  },
  {
    slug: 'naxos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Naxos', el: 'Νάξος' },
    tagline: { en: 'The largest Cycladic island', el: 'Το μεγαλύτερο νησί των Κυκλάδων' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/GR-naxos-chora-pano_%28cropped%29.jpg?width=1400',
    credit: 'Bgabel, CC BY-SA 3.0',
    desc: {
      en: 'Naxos combines sandy beaches with a mountainous, traditional interior of stone villages. The marble Portara gate, standing alone at the harbour entrance, is the island\'s best-known landmark.',
      el: 'Η Νάξος συνδυάζει αμμουδερές παραλίες με μια ορεινή, παραδοσιακή ενδοχώρα με πέτρινα χωριά. Η μαρμάρινη Πορτάρα, που στέκεται μόνη της στην είσοδο του λιμανιού, είναι το πιο γνωστό ορόσημο του νησιού.'
    },
    best: { en: 'June–September for beaches, spring for hiking in the villages', el: 'Ιούνιος–Σεπτέμβριος για παραλίες, άνοιξη για πεζοπορία στα χωριά' },
    highlights: {
      en: ['Portara gate', 'Mountain villages of Apeiranthos & Halki', 'Plaka & Agios Prokopios beaches'],
      el: ['Πορτάρα', 'Ορεινά χωριά Απείρανθος & Χαλκί', 'Παραλίες Πλάκα & Άγιος Προκόπιος']
    }
  },
  {
    slug: 'paros',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Paros', el: 'Πάρος' },
    tagline: { en: 'Traditional Cycladic villages', el: 'Παραδοσιακά κυκλαδίτικα χωριά' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kastro_in_Parikia_on_Paros%2C_075822.jpg?width=1400',
    credit: 'Wikimedia Commons contributor, CC BY-SA 4.0',
    desc: {
      en: 'Paros is known for the Kastro quarter in Parikia, built partly from stones of an ancient temple, and for well-preserved villages like Lefkes and Naoussa, a former fishing harbour turned relaxed evening hub.',
      el: 'Η Πάρος είναι γνωστή για τη συνοικία του Κάστρου στην Παροικιά, χτισμένη εν μέρει με πέτρες από αρχαίο ναό, καθώς και για καλοδιατηρημένα χωριά όπως η Λεύκες και η Νάουσα, ένα παλιό ψαράδικο λιμανάκι που σήμερα ζωντανεύει τα βράδια.'
    },
    best: { en: 'June–September, ferries connect easily to nearby islands', el: 'Ιούνιος–Σεπτέμβριος, εύκολη σύνδεση με πλοία προς κοντινά νησιά' },
    highlights: {
      en: ['Kastro quarter, Parikia', 'Naoussa harbour', 'Lefkes mountain village'],
      el: ['Κάστρο, Παροικιά', 'Λιμάνι Νάουσας', 'Ορεινό χωριό Λεύκες']
    }
  },
  {
    slug: 'milos',
    group: 'cyclades',
    groupName: { en: 'Cyclades', el: 'Κυκλάδες' },
    name: { en: 'Milos', el: 'Μήλος' },
    tagline: { en: 'Moon-like volcanic coastline', el: 'Σεληνιακή ηφαιστειογενής ακτογραμμή' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sarakiniko_Beach_on_the_island_of_Milos%2C_Greece.jpg?width=1400',
    credit: 'dronepicr, CC BY 2.0',
    desc: {
      en: 'Milos is shaped by its volcanic past, nowhere more strikingly than at Sarakiniko, a beach of smooth white rock that looks almost lunar. The island counts more than 70 beaches around its coastline.',
      el: 'Η Μήλος είναι διαμορφωμένη από το ηφαιστειογενές παρελθόν της, πουθενά πιο εντυπωσιακά απ\' ό,τι στο Σαρακήνικο, μια παραλία από λείο λευκό βράχο που μοιάζει σχεδόν σεληνιακή. Το νησί μετρά πάνω από 70 παραλίες γύρω από την ακτογραμμή του.'
    },
    best: { en: 'June–September for swimming, boat tours run all summer', el: 'Ιούνιος–Σεπτέμβριος για μπάνιο, βαρκάδες όλο το καλοκαίρι' },
    highlights: {
      en: ['Sarakiniko beach', 'Kleftiko sea caves by boat', 'Plaka village & castle view'],
      el: ['Παραλία Σαρακήνικο', 'Σπηλιές Κλέφτικο με βάρκα', 'Χωριό Πλάκα & θέα από το κάστρο']
    }
  },
  {
    slug: 'zakynthos',
    group: 'ionian',
    groupName: { en: 'Ionian Islands', el: 'Ιόνια Νησιά' },
    name: { en: 'Zakynthos', el: 'Ζάκυνθος' },
    tagline: { en: 'Home of Navagio beach', el: 'Το νησί της παραλίας Ναυάγιο' },
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Navagio_Beach_and_Shipwreck_of_the_Panagiotis_at_%27Smugglers_Cove%27_Zakynthos.JPG?width=1400',
    credit: 'Badgernet, CC BY-SA 3.0',
    desc: {
      en: 'Zakynthos is best known for Navagio, a shipwreck beach enclosed by tall white cliffs and reachable only by boat. The island\'s coastline also holds blue sea caves and nesting grounds for loggerhead turtles.',
      el: 'Η Ζάκυνθος είναι πιο γνωστή για το Ναυάγιο, μια παραλία με το ναυάγιο πλοίου, κλεισμένη ανάμεσα σε ψηλούς λευκούς βράχους και προσβάσιμη μόνο με βάρκα. Η ακτογραμμή του νησιού κρύβει επίσης γαλάζιες σπηλιές και σημεία φωλιάσματος καρέτα-καρέτα.'
    },
    best: { en: 'May–September, calmest seas for the boat trip to Navagio in early summer', el: 'Μάιος–Σεπτέμβριος, πιο ήρεμη θάλασσα για τη βαρκάδα στο Ναυάγιο νωρίς το καλοκαίρι' },
    highlights: {
      en: ['Navagio (Shipwreck) beach', 'Blue Caves', 'Loggerhead turtle nesting beaches'],
      el: ['Παραλία Ναυάγιο', 'Γαλάζιες Σπηλιές', 'Παραλίες φωλιάσματος καρέτα-καρέτα']
    }
  }
];
