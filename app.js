/* =========================================
   MANNA FEAST DIGITAL LIBRARY
   ========================================= */


/* =========================================
   MONTHS
   ========================================= */

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


/* =========================================
   MONTHLY THEMES

   ONLY put REAL monthly themes here.

   Example for later:

   '2014-03': 'The Month of ...',

   If a month is not listed here,
   the theme line stays empty.
   ========================================= */

const issueThemes = {

  '2026-01': 'The Month of Royal Invitation',
  '2026-02': 'The Month of DIVERSE OPERATIONS',
  '2026-03': 'The Month of GRATITUDE AND PRAISE',
  '2026-04': 'The Month of TRIUMPHANT PROGRESS',

  '2026-05':
    'The Month of Taking the Vision to Places',
  '2026-06': 'The Month of THE OUTPOUR OF FRAGRANT WORSHIP',
  '2026-07': 'The Month of CREDIBILITY AND REST',
  '2026-08': 'The Month of MEDIATION',
  '2026-09': 'The Month of TERRITORIAL ENLARGEMENT',

  '2025-01': 'The Month of ',
  '2025-02': 'The Month of ',
  '2025-03': 'The Month of ',
  '2025-04': 'The Month of ',
  '2025-05': 'The Month of ',
  '2025-06': 'The Month to Open Up the Highway',
  '2025-07': 'The Month of Go in and Possess',
  '2025-08': 'The Month of Power Shift',
  '2025-09': 'The Month of Raising a Standard of Intimacy',
  '2025-10': 'The Month of Unfolding Realms of Favour',
  '2025-11': 'The Month of Laudable Influence',
  '2025-12': 'The Month of Reflection and Adoration',

  '2024-01': 'The Month of ',
  '2024-02': 'The Month of Divine Presence and Honour',
  '2024-03': 'The Month of Ascend and Behold',
  '2024-04': 'The Month of ',
  '2024-05': 'The Month of ',
  '2024-06': 'The Month of Unraveled Influence',
  '2024-07': 'The Month of Earn Honour',
  '2024-08': 'The Month of ',
  '2024-09': 'The Month of Laughter',
  '2024-10': 'The Month of The Rising of Champions',
  '2024-11': 'The Month of Engaging your Realm of Eploits',
  '2024-12': 'The Month of Soar on Wings of Favour and Testimonies',

  '2023-01': 'The Month of Endowment and Taking Over',
  '2023-02': 'The Month of Greater Dimension Turnaround',
  '2023-03': 'The Month of ',
  '2023-04': 'The Month of ',
  '2023-05': 'The Month of ',
  '2023-06': 'The Month of Restoring Parched Grounds',
  '2023-07': 'The Month of ',
  '2023-08': 'The Month of Glorious Growth',
  '2023-09': 'The Month of Amazing Wonders',
  '2023-10': 'The Month of ',
  '2023-11': 'The Month of ',
  '2023-12': 'The Month of Vindication',

  '2022-01': 'The Month of Get It Settled',
  '2022-02': 'The Month of ',
  '2022-03': 'The Month of ',
  '2022-04': 'The Month of Outstretched Victory',
  '2022-05': 'The Month of Worthwhile Celebration',
  '2022-06': 'The Month of ',
  '2022-07': 'The Month of Dominant Influnce',
  '2022-08': 'The Month of Breaking Barriers And Limitation',
  '2022-09': 'The Month of ',
  '2022-10': 'The Month of ',
  '2022-11': 'The Month of Unfolding the Vision with Flames of Fire',
  '2022-12': 'The Month of ',

  '2021-01': 'The Month of Get It Done',
  '2021-02': 'The Month of Territorial Invasion',
  '2021-03': 'The Month of The Rain of Revival',
  '2021-04': 'The Month of Shine Forth',
  '2021-05': 'The Month of ',
  '2021-06': 'The Month of Recovery',
  '2021-07': 'The Month of Rest ',
  '2021-08': 'The Month of ',
  '2021-09': 'The Month of ',
  '2021-10': 'The Month of Majestic Greatness',
  '2021-11': 'The Month of Divine Overflow',
  '2021-12': 'The Month of ',

  '2020-01': 'The Month of ',
  '2020-02': 'The Month of ',
  '2020-03': 'The Month of ',
  '2020-04': 'The Month of Dynamic Expansion and Increase',
  '2020-05': 'The Month of ',
  '2020-06': 'The Month of Enlarge your Borders with Priase and Worship',
  '2020-07': 'The Month of Plenty',
  '2020-08': 'The Month of Greater Works',
  '2020-09': 'The Month of ',
  '2020-10': 'The Month of ',
  '2020-11': 'The Month of ',
  '2020-12': 'The Month of ',

  '2019-01': 'The Month of ',
  '2019-02': 'The Month of Uncommon Favour',
  '2019-03': 'The Month to New Horizon',
  '2019-04': 'The Month of Covenant Remembrance',
  '2019-05': 'The Month of ',
  '2019-06': 'The Month of Raising Subtances of Valour',
  '2019-07': 'The Month to Stop your Stoppers',
  '2019-08': 'The Month of Covenant Impact',
  '2019-09': 'The Month of Persist in your Pursuit',
  '2019-10': 'The Month of Supplication and Intercession(A Call to Wait Upon the Lord)',
  '2019-11': 'The Month of ',
  '2019-12': 'The Month of ',

  '2018-01': 'The Month to Dig Deep',
  '2018-02': 'The Month of ',
  '2018-03': 'The Month to ',
  '2018-04': 'The Month of ',
  '2018-05': 'The Month of Supernatural Evidence',
  '2018-06': 'The Month of ',
  '2018-07': 'The Month to ',
  '2018-08': 'The Month of ',
  '2018-09': 'The Month of Unstoppable Emergence',
  '2018-10': 'The Month of ',
  '2018-11': 'The Month of Greater Lifting',
  '2018-12': 'The Month of ',

  
  '2017-01': 'The Month of ',
  '2017-02': 'The Month of ',
  '2017-03': 'The Month to Sow',
  '2017-04': 'The Month of Covenant Remembrance',
  '2017-05': 'The Month of Greater Exploits',
  '2017-06': 'The Month of ',
  '2017-07': 'The Month to Stop your Stoppers',
  '2017-08': 'The Month of Covenant Impact',
  '2017-09': 'The Month to Shout for Joy',
  '2017-10': 'The Month of Persistence and Enlargement',
  '2017-11': 'The Month of ',
  '2017-12': 'The Month of ',
  

  '2016-02': 'The Month of ',
  '2016-03': 'The Month of ',
  '2016-04': 'The Month of ',
  '2016-05': 'The Month of ',
  '2016-06': 'The Month of ',
  '2016-07': 'The Month of ',
  '2016-08': 'The Month of ',
  '2016-09': 'The Month of Renewal and Lifting',
  '2016-10': 'The Month of ',
  '2016-11': 'The Month of ',
  '2016-12': 'The Month of ',
  

  '2015-01': 'The Month of Sighting your Horizon',
  '2015-02': 'The Month of ',
  '2015-03': 'The Month of ',
  '2015-04': 'The Month of Fruitfulness',
  '2015-05': 'The Month of ',
  '2015-06': 'The Month of ',
  '2015-07': 'The Month of ',
  '2015-08': 'The Month of Divine Compensation',
  '2015-09': 'The Month of ',
  '2015-10': 'The Month of ',
  '2015-11': 'The Month of ',
  '2015-12': 'The Month of ',
  

  
  '2014-02': 'The Month of Divine Shower',
  '2014-03': 'The Month of ',
  '2014-04': 'The Month of ',
  '2014-05': 'The Month of ',
  '2014-06': 'The Month of ',
  '2014-07': 'The Month of Advancing in Value',
  '2014-08': 'The Month of ',
  '2014-09': 'The Month of ',
  '2014-10': 'The Month of ',
  '2014-11': 'The Month of ',
  '2014-12': 'The Month of ',
  

};


/* =========================================
   COVERS CURRENTLY ADDED

   When you add another cover later,
   add its year-month code here.

   Example:
   '2021-06'
   ========================================= */

const coverIssueKeys = [

  '2026-01',
  '2026-02',
  '2026-03',
  '2026-04',
  '2026-05',
  '2026-06',
  '2026-07',
  '2026-08',
  '2026-09',

  '2025-01',
  '2025-02',
  '2025-03',
  '2025-04',
  '2025-05',
  '2025-06',
  '2025-07',
  '2025-08',
  '2025-09',
  '2025-10',
  '2025-11',
  '2025-12',

  '2024-01',
  '2024-02',
  '2024-03',
  '2024-04',
  '2024-05',
  '2024-06',
  '2024-07',
  '2024-08',
  '2024-09',
  '2024-11',
  '2024-12',

  '2023-01',
  '2023-02',
  '2023-03',
  '2023-04',
  '2023-05',
  '2023-06',
  '2023-07',
  '2023-08',
  '2023-09',
  '2023-11',
  '2023-12',

  '2022-01',
  '2022-02',
  '2022-03',
  '2022-04',
  '2022-05',
  '2022-06',
  '2022-07',
  '2022-08',
  '2022-09',
  '2022-11',
  '2022-12',

  '2021-01',
  '2021-02',
  '2021-03',
  '2021-04',
  '2021-05',
  '2021-06',
  '2021-07',
  '2021-08',
  '2021-09',
  '2021-11',
  '2021-12',

  '2020-01',
  '2020-02',
  '2020-03',
  '2020-04',
  '2020-05',
  '2020-06',
  '2020-07',
  '2020-08',
  '2020-09',
  '2020-11',
  '2020-12',

  '2019-01',
  '2019-02',
  '2019-03',
  '2019-04',
  '2019-05',
  '2019-06',
  '2019-07',
  '2019-08',
  '2019-09',
  '2019-11',
  '2019-12',

  '2018-01',
  '2018-02',
  '2018-03',
  '2018-04',
  '2018-05',
  '2018-06',
  '2018-07',
  '2018-08',
  '2018-09',
  '2018-11',
  '2018-12',

  '2017-01',
  '2017-02',
  '2017-03',
  '2017-04',
  '2017-05',
  '2017-06',
  '2017-07',
  '2017-08',
  '2017-09',
  '2017-11',
  '2017-12',

  '2016-01',
  '2016-02',
  '2016-03',
  '2016-04',
  '2016-05',
  '2016-06',
  '2016-07',
  '2016-08',
  '2016-09',
  '2016-11',
  '2016-12',

  '2015-01',
  '2015-02',
  '2015-03',
  '2015-04',
  '2015-05',
  '2015-06',
  '2015-07',
  '2015-08',
  '2015-09',
  '2015-11',
  '2015-12',

  
  '2014-02',
  '2014-03',
  '2014-04',
  '2014-05',
  '2014-06',
  '2014-07',
  '2014-08',
  '2014-09',
  '2014-11',
  '2014-12',

];


/* =========================================
   PDFs CURRENTLY ADDED

   When you add another PDF later,
   add its year-month code here too.

   A publication may have a cover before
   its PDF is available.
   ========================================= */

const pdfIssueKeys = [

  '2026-01',
  '2026-03',
  '2026-04',
  '2026-05',
  '2026-06',
  '2026-07',
  '2026-08',
  '2026-09',

  '2025-04',
  '2025-05',
  '2025-06',
  '2025-09',
  '2025-11'

];


const coverIssueSet = new Set(coverIssueKeys);
const pdfIssueSet = new Set(pdfIssueKeys);


/* =========================================
   CREATE PUBLICATION LIBRARY

   2014 through September 2026
   ========================================= */

const publications = [];


for (let year = 2026; year >= 2014; year--) {

  const monthLimit =
    year === 2026
      ? 9
      : 12;


  for (
    let monthNumber = monthLimit;
    monthNumber >= 1;
    monthNumber--
  ) {

    const month =
      months[monthNumber - 1];

    const monthSlug =
      month.toLowerCase();

    const monthCode =
      String(monthNumber).padStart(2, '0');

    const key =
      `${year}-${monthCode}`;


    publications.push({

      key,

      title:
        `Manna Feast — ${month} ${year}`,

      month,

      monthNumber,

      year,

      cover:
        `covers/manna-feast-${year}-${monthSlug}-cover.jpg`,

      pdf:
        `pdfs/manna-feast-${monthSlug}-${year}.pdf`,

      description:
        issueThemes[key] || '',

      coverAvailable:
        coverIssueSet.has(key),

      pdfAvailable:
        pdfIssueSet.has(key)

    });

  }

}


/* =========================================
   SCRIPTURES
   ========================================= */

const homeScriptures = [

  {
    text:
      'Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.',
    reference:
      'Matthew 4:4 (KJV)'
  },

  {
    text:
      'Thy word is a lamp unto my feet, and a light unto my path.',
    reference:
      'Psalm 119:105 (KJV)'
  },

  {
    text:
      'Thy word have I hid in mine heart, that I might not sin against thee.',
    reference:
      'Psalm 119:11 (KJV)'
  },

  {
    text:
      'This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success.',
    reference:
      'Joshua 1:8 (KJV)'
  },

  {
    text:
      'For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart.',
    reference:
      'Hebrews 4:12 (KJV)'
  },

  {
    text:
      'But be ye doers of the word, and not hearers only, deceiving your own selves.',
    reference:
      'James 1:22 (KJV)'
  }

];


/* =========================================
   HELPERS
   ========================================= */

function findIssue(key) {

  return publications.find(
    issue => issue.key === key
  );

}


function availableIssues() {

  return publications.filter(
    issue =>
      issue.coverAvailable ||
      issue.pdfAvailable
  );

}


function coverIssues() {

  return publications.filter(
    issue =>
      issue.coverAvailable
  );

}


function issueDate(issue) {

  return `${issue.month} ${issue.year}`;

}


function saveJSON(key, value) {

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );

}


function loadJSON(key, fallback) {

  try {

    const value =
      localStorage.getItem(key);

    return value
      ? JSON.parse(value)
      : fallback;

  } catch {

    return fallback;

  }

}


/* =========================================
   SIDEBAR + PAGE NAVIGATION
   ========================================= */

const sidebar =
  document.getElementById('sidebar');

const sidebarOverlay =
  document.getElementById('sidebarOverlay');

const menuButton =
  document.getElementById('menuButton');

const collapseButton =
  document.getElementById(
    'sidebarCollapseButton'
  );


function openMobileSidebar() {

  sidebar.classList.add('mobile-open');

  sidebarOverlay.classList.add('visible');

}


function closeMobileSidebar() {

  sidebar.classList.remove('mobile-open');

  sidebarOverlay.classList.remove('visible');

}


if (menuButton) {

  menuButton.addEventListener(
    'click',
    openMobileSidebar
  );

}


if (sidebarOverlay) {

  sidebarOverlay.addEventListener(
    'click',
    closeMobileSidebar
  );

}


if (collapseButton) {

  collapseButton.addEventListener(
    'click',
    () => {

      document.body.classList.toggle(
        'sidebar-collapsed'
      );

      localStorage.setItem(
        'mannaSidebarCollapsed',
        document.body.classList.contains(
          'sidebar-collapsed'
        )
      );

    }
  );

}


if (
  localStorage.getItem(
    'mannaSidebarCollapsed'
  ) === 'true'
) {

  document.body.classList.add(
    'sidebar-collapsed'
  );

}


function showPage(pageName) {

  const validPages = [
    'home',
    'library',
    'archive',
    'search',
    'favorites',
    'reading',
    'settings',
    'about'
  ];


  if (!validPages.includes(pageName)) {

    pageName = 'home';

  }


  document
    .querySelectorAll('.app-page')
    .forEach(page => {

      page.classList.toggle(
        'active-page',
        page.dataset.page === pageName
      );

    });


  document
    .querySelectorAll('[data-nav]')
    .forEach(link => {

      link.classList.toggle(
        'active',
        link.dataset.nav === pageName
      );

    });


  closeMobileSidebar();

  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });


  if (pageName === 'favorites') {
    renderFavorites();
  }


  if (pageName === 'reading') {
    loadLastReading();
  }

}


function readHash() {

  const page =
    window.location.hash
      .replace('#', '')
      .trim();

  showPage(
    page || 'home'
  );

}


window.addEventListener(
  'hashchange',
  readHash
);


/* =========================================
   SCRIPTURE AUTO ROTATION
   ========================================= */

const scriptureWidget =
  document.getElementById('scriptureWidget');

const scriptureText =
  document.getElementById('scriptureText');

const scriptureReference =
  document.getElementById(
    'scriptureReference'
  );


let scriptureIndex = 0;


function showScripture(index) {

  if (
    !scriptureText ||
    !scriptureReference
  ) {
    return;
  }


  const verse =
    homeScriptures[index];


  if (scriptureWidget) {

    scriptureWidget.classList.add(
      'is-changing'
    );

  }


  setTimeout(
    () => {

      scriptureText.textContent =
        `“${verse.text}”`;

      scriptureReference.textContent =
        `— ${verse.reference}`;


      if (scriptureWidget) {

        scriptureWidget.classList.remove(
          'is-changing'
        );

      }

    },
    250
  );

}


showScripture(scriptureIndex);


setInterval(
  () => {

    scriptureIndex =
      (
        scriptureIndex + 1
      ) % homeScriptures.length;

    showScripture(
      scriptureIndex
    );

  },
  30000
);


/* =========================================
   FEATURED MANNA FEAST ROTATION
   ========================================= */

const featuredCover =
  document.getElementById(
    'featuredCover'
  );

const featuredCoverPlaceholder =
  document.getElementById(
    'featuredCoverPlaceholder'
  );

const featuredTheme =
  document.getElementById(
    'featuredTheme'
  );

const featuredDate =
  document.getElementById(
    'featuredDate'
  );

const featuredReadButton =
  document.getElementById(
    'featuredReadButton'
  );

const featuredDownloadButton =
  document.getElementById(
    'featuredDownloadButton'
  );


let featuredOrder = [];
let featuredPosition = 0;
let lastFeaturedKey = null;


function shuffleArray(array) {

  const copy = [...array];


  for (
    let i = copy.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );


    [
      copy[i],
      copy[j]
    ] = [
      copy[j],
      copy[i]
    ];

  }


  return copy;

}


function makeFeaturedOrder() {

  featuredOrder =
    shuffleArray(
      coverIssues()
    );


  if (
    featuredOrder.length > 1 &&
    featuredOrder[0].key ===
      lastFeaturedKey
  ) {

    [
      featuredOrder[0],
      featuredOrder[1]
    ] = [
      featuredOrder[1],
      featuredOrder[0]
    ];

  }


  featuredPosition = 0;

}


function showFeaturedIssue(issue) {

  if (!issue) {
    return;
  }


  lastFeaturedKey =
    issue.key;


  featuredDate.textContent =
    issueDate(issue);


  featuredTheme.textContent =
    issue.description || '';


  featuredCover.src =
    issue.cover;


  featuredCover.alt =
    `${issueDate(issue)} Manna Feast cover`;


  featuredCover.style.display =
    'block';


  featuredCoverPlaceholder.style.display =
    'none';


  featuredCover.onerror =
    () => {

      featuredCover.style.display =
        'none';

      featuredCoverPlaceholder.style.display =
        'grid';

    };


  featuredReadButton.disabled =
    !issue.pdfAvailable;


  featuredDownloadButton.disabled =
    !issue.pdfAvailable;


  featuredReadButton.onclick =
    () => {

      if (issue.pdfAvailable) {

        openReader(issue);

      }

    };


  featuredDownloadButton.onclick =
    () => {

      if (issue.pdfAvailable) {

        downloadIssue(issue);

      }

    };

}


function nextFeaturedIssue() {

  if (!featuredOrder.length) {

    makeFeaturedOrder();

  }


  const issue =
    featuredOrder[
      featuredPosition
    ];


  showFeaturedIssue(issue);


  featuredPosition++;


  if (
    featuredPosition >=
    featuredOrder.length
  ) {

    makeFeaturedOrder();

  }

}


if (coverIssues().length) {

  makeFeaturedOrder();

  nextFeaturedIssue();


  setInterval(
    nextFeaturedIssue,
    30000
  );

}


/* =========================================
   FAVORITES
   ========================================= */

function getFavorites() {

  return loadJSON(
    'mannaFavorites',
    []
  );

}


function isFavorite(key) {

  return getFavorites().includes(key);

}


function toggleFavorite(key) {

  const favorites =
    getFavorites();


  const index =
    favorites.indexOf(key);


  if (index === -1) {

    favorites.push(key);

  } else {

    favorites.splice(index, 1);

  }


  saveJSON(
    'mannaFavorites',
    favorites
  );


  renderLibrary();

  renderFavorites();

  updateReaderFavoriteButton();

}


/* =========================================
   ISSUE CARD
   ========================================= */

function createIssueCard(issue) {

  const card =
    document.createElement('article');

  card.className =
    'issue-card';


  const coverArea =
    document.createElement('div');

  coverArea.className =
    'issue-cover-wrap';


  if (issue.coverAvailable) {

    const image =
      document.createElement('img');

    image.src =
      issue.cover;

    image.alt =
      `${issueDate(issue)} Manna Feast cover`;


    image.onerror =
      () => {

        image.remove();

        showCardCoverPlaceholder(
          coverArea
        );

      };


    coverArea.appendChild(
      image
    );

  } else {

    showCardCoverPlaceholder(
      coverArea
    );

  }


  const body =
    document.createElement('div');

  body.className =
    'issue-body';


  const brand =
    document.createElement('p');

  brand.className =
    'issue-brand';

  brand.textContent =
    'MANNA FEAST';


  const title =
    document.createElement('h3');

  title.textContent =
    issueDate(issue);


  const theme =
    document.createElement('p');

  theme.className =
    'issue-theme';

  theme.textContent =
    issue.description || '';


  const status =
    document.createElement('p');

  status.className =
    'issue-status';


  if (issue.pdfAvailable) {

    status.textContent =
      'Available to read online or download.';

  } else {

    status.textContent =
      'PDF will be added later.';

  }


  const actions =
    document.createElement('div');

  actions.className =
    'card-actions';


  const read =
    document.createElement('button');

  read.type =
    'button';

  read.className =
    'card-button primary';

  read.textContent =
    issue.pdfAvailable
      ? 'Read Online'
      : 'PDF Not Added';


  read.disabled =
    !issue.pdfAvailable;


  read.addEventListener(
    'click',
    () => {

      openReader(issue);

    }
  );


  const favorite =
    document.createElement('button');

  favorite.type =
    'button';

  favorite.className =
    'card-button secondary';

  favorite.textContent =
    isFavorite(issue.key)
      ? '♥ Saved'
      : '♡ Favorite';


  favorite.addEventListener(
    'click',
    () => {

      toggleFavorite(
        issue.key
      );

    }
  );


  actions.append(
    read,
    favorite
  );


  body.append(
    brand,
    title,
    theme,
    status,
    actions
  );


  card.append(
    coverArea,
    body
  );


  return card;

}


function showCardCoverPlaceholder(
  container
) {

  const placeholder =
    document.createElement('div');

  placeholder.className =
    'issue-cover-placeholder';

  placeholder.innerHTML =
    '<span>Manna Feast<br>Cover coming soon</span>';


  container.appendChild(
    placeholder
  );

}


/* =========================================
   RECENT ISSUES
   ========================================= */

const recentIssuesGrid =
  document.getElementById(
    'recentIssuesGrid'
  );


function renderRecentIssues() {

  if (!recentIssuesGrid) {
    return;
  }


  recentIssuesGrid.innerHTML =
    '';


  const issues =
    availableIssues()
      .slice(0, 6);


  issues.forEach(
    issue => {

      const card =
        document.createElement('article');

      card.className =
        'recent-card';


      const cover =
        document.createElement('div');

      cover.className =
        'recent-cover';


      if (issue.coverAvailable) {

        const image =
          document.createElement('img');

        image.src =
          issue.cover;

        image.alt =
          `${issueDate(issue)} Manna Feast cover`;

        cover.appendChild(
          image
        );

      }


      const copy =
        document.createElement('div');

      copy.className =
        'recent-copy';


      const strong =
        document.createElement('strong');

      strong.textContent =
        issue.month;


      const span =
        document.createElement('span');

      span.textContent =
        issue.year;


      copy.append(
        strong,
        span
      );


      card.append(
        cover,
        copy
      );


      if (issue.pdfAvailable) {

        card.addEventListener(
          'click',
          () => {

            openReader(issue);

          }
        );

      }


      recentIssuesGrid.appendChild(
        card
      );

    }
  );

}


/* =========================================
   LIBRARY
   ========================================= */

const libraryGrid =
  document.getElementById(
    'libraryGrid'
  );

const libraryEmpty =
  document.getElementById(
    'libraryEmpty'
  );

const librarySearch =
  document.getElementById(
    'librarySearch'
  );

const libraryYear =
  document.getElementById(
    'libraryYear'
  );

const libraryMonth =
  document.getElementById(
    'libraryMonth'
  );


function buildLibraryFilters() {

  for (
    let year = 2026;
    year >= 2014;
    year--
  ) {

    const option =
      document.createElement('option');

    option.value =
      year;

    option.textContent =
      year;

    libraryYear.appendChild(
      option
    );

  }


  months.forEach(
    (month, index) => {

      const option =
        document.createElement('option');

      option.value =
        index + 1;

      option.textContent =
        month;

      libraryMonth.appendChild(
        option
      );

    }
  );

}


function renderLibrary() {

  if (!libraryGrid) {
    return;
  }


  const query =
    librarySearch.value
      .trim()
      .toLowerCase();

  const year =
    libraryYear.value;

  const month =
    libraryMonth.value;


  const results =
    availableIssues()
      .filter(
        issue => {

          const searchable =
            [
              issue.title,
              issue.month,
              issue.year,
              issue.description
            ]
              .join(' ')
              .toLowerCase();


          const matchesSearch =
            !query ||
            searchable.includes(
              query
            );


          const matchesYear =
            !year ||
            String(issue.year) ===
              year;


          const matchesMonth =
            !month ||
            String(issue.monthNumber) ===
              month;


          return (
            matchesSearch &&
            matchesYear &&
            matchesMonth
          );

        }
      );


  libraryGrid.innerHTML =
    '';


  results.forEach(
    issue => {

      libraryGrid.appendChild(
        createIssueCard(issue)
      );

    }
  );


  libraryEmpty.classList.toggle(
    'hidden',
    results.length !== 0
  );

}


if (librarySearch) {

  librarySearch.addEventListener(
    'input',
    renderLibrary
  );

  libraryYear.addEventListener(
    'change',
    renderLibrary
  );

  libraryMonth.addEventListener(
    'change',
    renderLibrary
  );

}


/* =========================================
   ARCHIVE
   ========================================= */

const archiveYears =
  document.getElementById(
    'archiveYears'
  );


function renderArchive() {

  if (!archiveYears) {
    return;
  }


  archiveYears.innerHTML =
    '';


  for (
    let year = 2026;
    year >= 2014;
    year--
  ) {

    const issues =
      availableIssues()
        .filter(
          issue =>
            issue.year === year
        );


    const yearBox =
      document.createElement('section');

    yearBox.className =
      'archive-year';


    const button =
      document.createElement('button');

    button.type =
      'button';

    button.className =
      'archive-year-button';


    button.innerHTML =
      `
      <strong>${year}</strong>
      <span>
        ${
          issues.length
            ? `${issues.length} available issue${issues.length === 1 ? '' : 's'}`
            : 'No issues added yet'
        }
      </span>
      `;


    const content =
      document.createElement('div');

    content.className =
      'archive-year-content';


    if (issues.length) {

      const monthsGrid =
        document.createElement('div');

      monthsGrid.className =
        'archive-months';


      issues.forEach(
        issue => {

          const monthBox =
            document.createElement('div');

          monthBox.className =
            'archive-month';


          monthBox.innerHTML =
            `
            <strong>
              ${issue.month}
            </strong>

            <span>
              ${
                issue.description ||
                'Manna Feast'
              }
            </span>
            `;


          if (issue.pdfAvailable) {

            monthBox.style.cursor =
              'pointer';


            monthBox.addEventListener(
              'click',
              () => {

                openReader(issue);

              }
            );

          }


          monthsGrid.appendChild(
            monthBox
          );

        }
      );


      content.appendChild(
        monthsGrid
      );

    } else {

      content.innerHTML =
        `
        <p class="issue-status">
          Publications for this year can be added later.
        </p>
        `;

    }


    button.addEventListener(
      'click',
      () => {

        yearBox.classList.toggle(
          'open'
        );

      }
    );


    yearBox.append(
      button,
      content
    );


    archiveYears.appendChild(
      yearBox
    );

  }

}


/* =========================================
   SEARCH
   ========================================= */

const searchPageForm =
  document.getElementById(
    'searchPageForm'
  );

const searchPageInput =
  document.getElementById(
    'searchPageInput'
  );

const searchResults =
  document.getElementById(
    'searchResults'
  );

const searchEmpty =
  document.getElementById(
    'searchEmpty'
  );


function runSearch(query) {

  query =
    query
      .trim()
      .toLowerCase();


  searchResults.innerHTML =
    '';


  if (!query) {

    searchEmpty.classList.remove(
      'hidden'
    );

    searchEmpty.querySelector('h3')
      .textContent =
      'Enter a search';

    searchEmpty.querySelector('p')
      .textContent =
      'Search by month, year or monthly theme.';

    return;

  }


  const results =
    availableIssues()
      .filter(
        issue => {

          const searchable =
            [
              issue.title,
              issue.month,
              issue.year,
              issue.description
            ]
              .join(' ')
              .toLowerCase();


          return searchable.includes(
            query
          );

        }
      );


  results.forEach(
    issue => {

      searchResults.appendChild(
        createIssueCard(issue)
      );

    }
  );


  searchEmpty.classList.toggle(
    'hidden',
    results.length !== 0
  );


  if (!results.length) {

    searchEmpty.querySelector('h3')
      .textContent =
      'No results found';

    searchEmpty.querySelector('p')
      .textContent =
      'Try another month, year or keyword.';

  }

}


if (searchPageForm) {

  searchPageForm.addEventListener(
    'submit',
    event => {

      event.preventDefault();

      runSearch(
        searchPageInput.value
      );

    }
  );

}


/* HOME + TOP SEARCH */

function sendToSearch(query) {

  searchPageInput.value =
    query;

  window.location.hash =
    'search';

  runSearch(query);

}


const homeSearchForm =
  document.getElementById(
    'homeSearchForm'
  );

const homeSearchInput =
  document.getElementById(
    'homeSearchInput'
  );


if (homeSearchForm) {

  homeSearchForm.addEventListener(
    'submit',
    event => {

      event.preventDefault();

      sendToSearch(
        homeSearchInput.value
      );

    }
  );

}


const globalSearchForm =
  document.getElementById(
    'globalSearchForm'
  );

const globalSearchInput =
  document.getElementById(
    'globalSearchInput'
  );


if (globalSearchForm) {

  globalSearchForm.addEventListener(
    'submit',
    event => {

      event.preventDefault();

      sendToSearch(
        globalSearchInput.value
      );

    }
  );

}


/* =========================================
   FAVORITES PAGE
   ========================================= */

const favoritesGrid =
  document.getElementById(
    'favoritesGrid'
  );

const favoritesEmpty =
  document.getElementById(
    'favoritesEmpty'
  );


function renderFavorites() {

  if (!favoritesGrid) {
    return;
  }


  const favoriteKeys =
    getFavorites();


  const issues =
    favoriteKeys
      .map(findIssue)
      .filter(Boolean);


  favoritesGrid.innerHTML =
    '';


  issues.forEach(
    issue => {

      favoritesGrid.appendChild(
        createIssueCard(issue)
      );

    }
  );


  favoritesEmpty.classList.toggle(
    'hidden',
    issues.length !== 0
  );

}


/* =========================================
   READING
   ========================================= */

const readingEmpty =
  document.getElementById(
    'readingEmpty'
  );

const readerShell =
  document.getElementById(
    'readerShell'
  );

const readerTitle =
  document.getElementById(
    'readerTitle'
  );

const readerTheme =
  document.getElementById(
    'readerTheme'
  );

const pdfReader =
  document.getElementById(
    'pdfReader'
  );

const readerFavoriteButton =
  document.getElementById(
    'readerFavoriteButton'
  );


let currentReadingIssue =
  null;


function openReader(issue) {

  if (
    !issue ||
    !issue.pdfAvailable
  ) {
    return;
  }

  currentReadingIssue = issue;

  localStorage.setItem(
    'mannaLastRead',
    issue.key
  );

  const isMobile =
    window.innerWidth <= 860;

  if (isMobile) {

    window.open(
      issue.pdf,
      '_blank'
    );

    return;
  }

  readerTitle.textContent =
    issueDate(issue);

  readerTheme.textContent =
    issue.description || '';

  pdfReader.src =
    issue.pdf;

  readingEmpty.classList.add(
    'hidden'
  );

  readerShell.classList.remove(
    'hidden'
  );

  updateReaderFavoriteButton();

  window.location.hash =
    'reading';
}

  updateReaderFavoriteButton();


  window.location.hash =
    'reading';

}


function loadLastReading() {

  const key =
    localStorage.getItem(
      'mannaLastRead'
    );


  const issue =
    findIssue(key);


  if (
    !issue ||
    !issue.pdfAvailable
  ) {

    currentReadingIssue =
      null;

    readerShell.classList.add(
      'hidden'
    );

    readingEmpty.classList.remove(
      'hidden'
    );

    return;

  }


  currentReadingIssue =
    issue;


  readerTitle.textContent =
    issueDate(issue);


  readerTheme.textContent =
    issue.description || '';


  pdfReader.src =
    issue.pdf;


  readingEmpty.classList.add(
    'hidden'
  );


  readerShell.classList.remove(
    'hidden'
  );


  updateReaderFavoriteButton();

}


function updateReaderFavoriteButton() {

  if (
    !readerFavoriteButton ||
    !currentReadingIssue
  ) {
    return;
  }


  readerFavoriteButton.textContent =
    isFavorite(
      currentReadingIssue.key
    )
      ? '♥ Saved'
      : '♡ Favorite';

}


if (readerFavoriteButton) {

  readerFavoriteButton.addEventListener(
    'click',
    () => {

      if (currentReadingIssue) {

        toggleFavorite(
          currentReadingIssue.key
        );

      }

    }
  );

}


/* =========================================
   DOWNLOAD
   ========================================= */

function downloadIssue(issue) {

  if (
    !issue ||
    !issue.pdfAvailable
  ) {
    return;
  }


  const link =
    document.createElement('a');


  link.href =
    issue.pdf;


  link.download =
    `manna-feast-${issue.month.toLowerCase()}-${issue.year}.pdf`;


  document.body.appendChild(
    link
  );


  link.click();

  link.remove();

}


/* =========================================
   READING SETTINGS
   ========================================= */

const themeButtons =
  document.querySelectorAll(
    '[data-theme]'
  );

const fontButtons =
  document.querySelectorAll(
    '[data-font]'
  );


function applyTheme(theme) {

  const themes = [
    'forest',
    'cream',
    'blue',
    'navy',
    'burgundy',
    'gold'
  ];


  themes.forEach(
    name => {

      document.body.classList.remove(
        `theme-${name}`
      );

    }
  );


  document.body.classList.add(
    `theme-${theme}`
  );


  localStorage.setItem(
    'mannaTheme',
    theme
  );


  themeButtons.forEach(
    button => {

      button.classList.toggle(
        'active',
        button.dataset.theme === theme
      );

    }
  );

}


function applyFontSize(size) {

  [
    'small',
    'normal',
    'large'
  ]
    .forEach(
      name => {

        document.body.classList.remove(
          `font-${name}`
        );

      }
    );


  document.body.classList.add(
    `font-${size}`
  );


  localStorage.setItem(
    'mannaFontSize',
    size
  );


  fontButtons.forEach(
    button => {

      button.classList.toggle(
        'active',
        button.dataset.font === size
      );

    }
  );

}


themeButtons.forEach(
  button => {

    button.addEventListener(
      'click',
      () => {

        applyTheme(
          button.dataset.theme
        );

      }
    );

  }
);


fontButtons.forEach(
  button => {

    button.addEventListener(
      'click',
      () => {

        applyFontSize(
          button.dataset.font
        );

      }
    );

  }
);


applyTheme(
  localStorage.getItem(
    'mannaTheme'
  ) || 'forest'
);


applyFontSize(
  localStorage.getItem(
    'mannaFontSize'
  ) || 'normal'
);


/* =========================================
   INITIALIZE WEBSITE
   ========================================= */

buildLibraryFilters();

renderRecentIssues();

renderLibrary();

renderArchive();

renderFavorites();

readHash();
