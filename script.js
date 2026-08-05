/* ============================= ICONS ============================= */
// Minimal stroke-based line icons, 24x24, colored via currentColor.

const ICONS = {
  paw: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="7.5" r="1.6"/><circle cx="12" cy="5.5" r="1.6"/><circle cx="16" cy="7.5" r="1.6"/><ellipse cx="12" cy="14.5" rx="5" ry="4.2"/></svg>`,
  wing: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15c4-1 6-5 9-11 3 6 5 10 9 11-3 3-7 3-9 0-2 3-6 3-9 0z"/></svg>`,
  fin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c3-4 8-6 13-4 2 .8 4 2.4 5 4-1 1.6-3 3.2-5 4-5 2-10 0-13-4z"/><path d="M16 9l3-3M16 15l3 3"/><circle cx="8" cy="12" r="0.8" fill="currentColor" stroke="none"/></svg>`,
  shell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4a8 5 0 0 1 8 5c0 3-3.5 5-8 5s-8-2-8-5a8 5 0 0 1 8-5z"/><path d="M4 12c0 3 3 6 8 6s8-3 8-6"/><path d="M12 9v5M9 9.5l1.5 4M15 9.5L13.5 13.5"/></svg>`,
  bug: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="13" rx="5" ry="6"/><path d="M12 7V4M9 5l-2-2M15 5l2-2M6 11H3M6 15H3M21 11h-3M21 15h-3M9 19l-2 2M15 19l2 2"/></svg>`,
  spiral: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c0-2 1.5-3.5 3.5-3.5S19 10 19 12s-1.5 3-3.5 3-4-1.5-4-4 2-5 5-5 6 2.5 6 6"/></svg>`,
  heartbeat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-6 3 12 2-9 1.5 3H21"/></svg>`,
  wind: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10a2.5 2.5 0 1 0-2.5-2.5"/><path d="M3 12.5h14a2.5 2.5 0 1 1-2.5 2.5"/><path d="M3 17h8a2.5 2.5 0 1 0-2.5 2.5"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.6"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/></svg>`,
  calendarLoop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M9 15.5a3 3 0 1 1 3 3"/><path d="M12 18.5l-1.4 1.3M12 18.5l1.4-1.4" stroke-width="1.3"/></svg>`,
  calendarStar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M12 13l1 2 2 .3-1.5 1.4.4 2-1.9-1-1.9 1 .4-2L9 15.3l2-.3 1-2z"/></svg>`,
};

const icon = (name) => ICONS[name] || "";

/* ============================= DATA ============================= */

const DAY_MS = 86400000;

const ANIMALS = [
  { name: "African Elephant", days: 60 * 365, icon: "paw", note: "Wild elephants often live around 60 years." },
  { name: "Domestic Dog", days: 12 * 365, icon: "paw", note: "The average dog lives about 12 years." },
  { name: "House Cat", days: 15 * 365, icon: "paw", note: "Indoor cats average roughly 15 years." },
  { name: "Galápagos Tortoise", days: 100 * 365, icon: "shell", note: "Some individuals live well past 150 years." },
  { name: "Blue Whale", days: 85 * 365, icon: "fin", note: "The largest animal ever also lives among the longest." },
  { name: "Mayfly", days: 1, icon: "bug", note: "Most adult mayflies live less than 24 hours as adults." },
  { name: "Common Octopus", days: Math.round(1.5 * 365), icon: "spiral", note: "One of the smartest animals alive, gone in about 18 months." },
  { name: "Honeybee (summer worker)", days: 42, icon: "bug", note: "A worker bee born in summer lives roughly six weeks." },
  { name: "African Grey Parrot", days: 50 * 365, icon: "wing", note: "Parrots like this one can outlive the humans who raise them." },
  { name: "Chimpanzee", days: 40 * 365, icon: "paw", note: "Wild chimpanzees average around 40 years." },
  { name: "Domestic Rabbit", days: 9 * 365, icon: "paw", note: "A well-kept house rabbit lives about 9 years." },
  { name: "Horse", days: 27 * 365, icon: "paw", note: "Horses typically live into their late twenties." },
  { name: "Lion", days: 13 * 365, icon: "paw", note: "Wild lions rarely make it past their early teens." },
  { name: "Greenland Shark", days: 300 * 365, icon: "fin", note: "Possibly the longest-lived vertebrate, some may reach 300 to 500 years." },
  { name: "Bowhead Whale", days: 200 * 365, icon: "fin", note: "Some carry harpoon fragments in their blubber over a century old." },
  { name: "Domestic Pig", days: 18 * 365, icon: "paw", note: "A well-kept pig can live close to two decades." },
  { name: "Giant Panda", days: 20 * 365, icon: "paw", note: "Pandas in the wild average around 20 years." },
  { name: "Golden Hamster", days: Math.round(2.5 * 365), icon: "paw", note: "A hamster's whole life fits inside a couple of your years." },
  { name: "Housefly", days: 28, icon: "bug", note: "A housefly's entire adult life lasts about four weeks." },
  { name: "Grey Wolf", days: 7 * 365, icon: "paw", note: "Wild wolves rarely live past their late single digits." },
  { name: "Grizzly Bear", days: 25 * 365, icon: "paw", note: "Wild grizzlies average around 25 years." },
  { name: "Bottlenose Dolphin", days: 45 * 365, icon: "fin", note: "Dolphins in the wild can live into their forties." },
  { name: "Komodo Dragon", days: 30 * 365, icon: "shell", note: "The world's largest lizard can live three decades." },
  { name: "Camel", days: 45 * 365, icon: "paw", note: "Camels routinely live into their forties." },
  { name: "Koala", days: 15 * 365, icon: "paw", note: "Wild koalas average around 15 years." },
  { name: "Red Fox", days: Math.round(3.5 * 365), icon: "paw", note: "Wild foxes rarely make it past 4 years." },
  { name: "Green Sea Turtle", days: 75 * 365, icon: "shell", note: "Sea turtles can live 70 to 80 years, sometimes past 100." },
  { name: "American Alligator", days: 50 * 365, icon: "shell", note: "Alligators can live 50 years or more in the wild." },
  { name: "Sea Otter", days: 18 * 365, icon: "fin", note: "Wild sea otters typically live 15 to 20 years." },
  { name: "Domestic Cow", days: 20 * 365, icon: "paw", note: "Dairy cows can live two decades when kept past their working years." },
  { name: "Vampire Bat", days: 9 * 365, icon: "wing", note: "Wild vampire bats average about 9 years." },
];

const LEGENDS = [
  { name: "Kurt Cobain", birth: "1967-02-20", death: "1994-04-05", role: "Musician" },
  { name: "Amy Winehouse", birth: "1983-09-14", death: "2011-07-23", role: "Musician" },
  { name: "Jimi Hendrix", birth: "1942-11-27", death: "1970-09-18", role: "Musician" },
  { name: "River Phoenix", birth: "1970-08-23", death: "1993-10-31", role: "Actor" },
  { name: "Heath Ledger", birth: "1979-04-04", death: "2008-01-22", role: "Actor" },
  { name: "Bruce Lee", birth: "1940-11-27", death: "1973-07-20", role: "Martial Artist" },
  { name: "Anne Frank", birth: "1929-06-12", death: "1945-02-28", role: "Diarist" },
  { name: "Wolfgang Amadeus Mozart", birth: "1756-01-27", death: "1791-12-05", role: "Composer" },
  { name: "Princess Diana", birth: "1961-07-01", death: "1997-08-31", role: "Royal" },
  { name: "Martin Luther King Jr.", birth: "1929-01-15", death: "1968-04-04", role: "Activist" },
  { name: "Tupac Shakur", birth: "1971-06-16", death: "1996-09-13", role: "Musician" },
  { name: "The Notorious B.I.G.", birth: "1972-05-21", death: "1997-03-09", role: "Musician" },
  { name: "Selena Quintanilla", birth: "1971-04-16", death: "1995-03-31", role: "Musician" },
  { name: "Buddy Holly", birth: "1936-09-07", death: "1959-02-03", role: "Musician" },
  { name: "John Keats", birth: "1795-10-31", death: "1821-02-23", role: "Poet" },
  { name: "Sylvia Plath", birth: "1932-10-27", death: "1963-02-11", role: "Poet" },
  { name: "James Dean", birth: "1931-02-08", death: "1955-09-30", role: "Actor" },
  { name: "Jean-Michel Basquiat", birth: "1960-12-22", death: "1988-08-12", role: "Artist" },
  { name: "Malcolm X", birth: "1925-05-19", death: "1965-02-21", role: "Activist" },
  { name: "Aaliyah", birth: "1979-01-16", death: "2001-08-25", role: "Musician" },
  { name: "Alan Turing", birth: "1912-06-23", death: "1954-06-07", role: "Mathematician" },
  { name: "Percy Bysshe Shelley", birth: "1792-08-04", death: "1822-07-08", role: "Poet" },
  { name: "Lord Byron", birth: "1788-01-22", death: "1824-04-19", role: "Poet" },
  { name: "Emily Brontë", birth: "1818-07-30", death: "1848-12-19", role: "Novelist" },
  { name: "Vincent van Gogh", birth: "1853-03-30", death: "1890-07-29", role: "Painter" },
  { name: "Egon Schiele", birth: "1890-06-12", death: "1918-10-31", role: "Painter" },
  { name: "Amedeo Modigliani", birth: "1884-07-12", death: "1920-01-24", role: "Painter" },
  { name: "Franz Schubert", birth: "1797-01-31", death: "1828-11-19", role: "Composer" },
  { name: "Otis Redding", birth: "1941-09-09", death: "1967-12-10", role: "Musician" },
  { name: "Janis Joplin", birth: "1943-01-19", death: "1970-10-04", role: "Musician" },
  { name: "Jim Morrison", birth: "1943-12-08", death: "1971-07-03", role: "Musician" },
  { name: "Robert Johnson", birth: "1911-05-08", death: "1938-08-16", role: "Musician" },
  { name: "Sid Vicious", birth: "1957-05-10", death: "1979-02-02", role: "Musician" },
  { name: "Che Guevara", birth: "1928-06-14", death: "1967-10-09", role: "Revolutionary" },
  { name: "Joan of Arc", birth: "1412-01-06", death: "1431-05-30", role: "Historical Figure" },
  { name: "Steve Prefontaine", birth: "1951-01-25", death: "1975-05-30", role: "Athlete" },
  { name: "Florence Griffith-Joyner", birth: "1959-12-21", death: "1998-09-21", role: "Athlete" },
  { name: "Lou Gehrig", birth: "1903-06-19", death: "1941-06-02", role: "Athlete" },
];

const PLANETS = [
  { name: "Mercury", orbitDays: 87.97, color: "#b9a184" },
  { name: "Venus", orbitDays: 224.7, color: "#e0c28c" },
  { name: "Mars", orbitDays: 686.98, color: "#c1552c" },
  { name: "Jupiter", orbitDays: 4332.59, color: "#d9b38c" },
  { name: "Saturn", orbitDays: 10759.22, color: "#e3d1a3" },
  { name: "Uranus", orbitDays: 30688.5, color: "#9fd6e0" },
  { name: "Neptune", orbitDays: 60182.0, color: "#5b7fd9" },
];

const ZODIAC = [
  { name: "Capricorn", from: [12,22], to: [1,19], icon: "♑" },
  { name: "Aquarius", from: [1,20], to: [2,18], icon: "♒" },
  { name: "Pisces", from: [2,19], to: [3,20], icon: "♓" },
  { name: "Aries", from: [3,21], to: [4,19], icon: "♈" },
  { name: "Taurus", from: [4,20], to: [5,20], icon: "♉" },
  { name: "Gemini", from: [5,21], to: [6,20], icon: "♊" },
  { name: "Cancer", from: [6,21], to: [7,22], icon: "♋" },
  { name: "Leo", from: [7,23], to: [8,22], icon: "♌" },
  { name: "Virgo", from: [8,23], to: [9,22], icon: "♍" },
  { name: "Libra", from: [9,23], to: [10,22], icon: "♎" },
  { name: "Scorpio", from: [10,23], to: [11,21], icon: "♏" },
  { name: "Sagittarius", from: [11,22], to: [12,21], icon: "♐" },
];

const GENERATIONS = [
  { before: 1928, name: "Greatest Generation" },
  { before: 1946, name: "Silent Generation" },
  { before: 1965, name: "Baby Boomer" },
  { before: 1981, name: "Generation X" },
  { before: 1997, name: "Millennial" },
  { before: 2013, name: "Generation Z" },
  { before: Infinity, name: "Generation Alpha" },
];

function getGeneration(year) {
  return GENERATIONS.find(g => year < g.before).name;
}

const CHINESE_ZODIAC_ANIMALS = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Goat","Monkey","Rooster","Dog","Pig"];
const CHINESE_ZODIAC_ELEMENTS = ["Wood","Wood","Fire","Fire","Earth","Earth","Metal","Metal","Water","Water"];

function getChineseZodiac(year) {
  const animal = CHINESE_ZODIAC_ANIMALS[((year - 4) % 12 + 12) % 12];
  const element = CHINESE_ZODIAC_ELEMENTS[((year - 4) % 10 + 10) % 10];
  return `${element} ${animal}`;
}

// Capped at 30,000 days (~82 years): a bit beyond the 73-year global average,
// but stretching to 35,000-40,000 (96-110 years) stopped feeling like a fun
// milestone and started feeling like an unlikely stretch.
const MILESTONE_DAYS = [1000, 5000, 10000, 15000, 20000, 25000, 30000];

// Years ago. Widely-cited approximate figures, not lab-grade precision.
const TIMELINE_EVENTS = [
  { label: "Big Bang", yearsAgo: 13.8e9, desc: "Space, time, and matter begin." },
  { label: "Earth forms", yearsAgo: 4.6e9, desc: "Our planet takes shape around the young Sun." },
  { label: "First life", yearsAgo: 3.8e9, desc: "The earliest single-celled organisms appear in Earth's oceans." },
  { label: "Cambrian explosion", yearsAgo: 540e6, desc: "Complex, multicellular life rapidly diversifies." },
  { label: "Dinosaurs extinct", yearsAgo: 66e6, desc: "An asteroid impact ends the age of dinosaurs." },
  { label: "Agriculture begins", yearsAgo: 12000, desc: "Humans start farming instead of foraging." },
  { label: "Writing invented", yearsAgo: 5500, desc: "The first writing systems appear in Mesopotamia." },
  { label: "Early mathematics", yearsAgo: 5000, desc: "Formal mathematics starts to take shape." },
  { label: "Modern science", yearsAgo: 400, desc: "The scientific method reshapes how we understand the world." },
];
// Universe-history distance scale, matching the widely used "walk of time"
// convention: 2,000,000 years of history = 1 meter = 1,000,000 micrometers.
const MICROMETERS_PER_YEAR = 1000000 / 2000000;
const HAIR_WIDTH_MICROMETERS = 70;

const AVG_LIFESPAN_DAYS = 73 * 365.25; // global average, rough
const EARTH_ORBIT_SPEED_KMH = 107208; // ~29.78 km/s
const GALACTIC_SPEED_KMH = 828000; // solar system around galactic center, ~230 km/s
const MOON_DIST_KM = 384400;
const AU_KM = 149600000;
const LUNAR_CYCLE_DAYS = 29.53;

/* ============================= HELPERS ============================= */

const fmt = (n, digits = 0) => Number(n).toLocaleString(undefined, { maximumFractionDigits: digits });

const formatDate = (d) => d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

function daysBetween(a, b) {
  return Math.floor((b - a) / DAY_MS);
}

function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

function getZodiac(month, day) {
  return ZODIAC.find(z => {
    const [fm, fd] = z.from, [tm, td] = z.to;
    if (fm === tm) return month === fm && day >= fd && day <= td;
    if (fm < tm) return (month === fm && day >= fd) || (month === tm && day <= td);
    // wraps around year end (Capricorn)
    return (month === fm && day >= fd) || (month === tm && day <= td);
  }) || ZODIAC[0];
}

function countFridays13th(start, end) {
  let count = 0;
  const d = new Date(start.getFullYear(), start.getMonth(), 1);
  while (d <= end) {
    const the13th = new Date(d.getFullYear(), d.getMonth(), 13);
    if (the13th >= start && the13th <= end && the13th.getDay() === 5) count++;
    d.setMonth(d.getMonth() + 1);
  }
  return count;
}

function countLeapDaysLived(start, end) {
  let count = 0;
  for (let y = start.getFullYear(); y <= end.getFullYear(); y++) {
    if (isLeapYear(y)) {
      const feb29 = new Date(y, 1, 29);
      if (feb29 >= start && feb29 <= end) count++;
    }
  }
  return count;
}

// Seeded RNG so each birthdate always gets the same mix, but different
// birthdates land on a different mix. Not for anything security-sensitive.
function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickSubset(pool, count, seed) {
  return seededShuffle(pool, mulberry32(seed)).slice(0, count);
}

/* ============================= COUNT-UP ANIMATION ============================= */

function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }

function animateCountUp(el, target, duration = 1400) {
  if (el.dataset.done === "1") return;
  el.dataset.done = "1";
  const start = performance.now();
  const decimals = el.dataset.decimals ? Number(el.dataset.decimals) : 0;
  function tick(now) {
    const p = Math.min(1, (now - start) / duration);
    const val = target * easeOutExpo(p);
    el.textContent = fmt(val, decimals);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = fmt(target, decimals);
  }
  requestAnimationFrame(tick);
}

/* ============================= STARFIELD ============================= */

function initStarfield() {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let comets = [];
  let lastT = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const count = Math.floor((canvas.width * canvas.height) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.02 + 0.005,
    }));
  }

  function maybeSpawnComet() {
    if (comets.length > 0 || Math.random() > 0.0035) return;
    const fromLeft = Math.random() > 0.5;
    const startY = Math.random() * canvas.height * 0.6;
    comets.push({
      x: fromLeft ? -20 : canvas.width + 20,
      y: startY,
      vx: (fromLeft ? 1 : -1) * (5 + Math.random() * 3),
      vy: 2.2 + Math.random() * 1.4,
      life: 0,
      maxLife: 70,
    });
  }

  function drawComets() {
    comets.forEach(c => {
      c.x += c.vx;
      c.y += c.vy;
      c.life++;
      const tailX = c.x - c.vx * 9;
      const tailY = c.y - c.vy * 9;
      const grad = ctx.createLinearGradient(c.x, c.y, tailX, tailY);
      grad.addColorStop(0, "#f3ede1ee");
      grad.addColorStop(1, "transparent");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
    });
    comets = comets.filter(c =>
      c.life < c.maxLife &&
      c.x > -40 && c.x < canvas.width + 40 &&
      c.y < canvas.height + 40
    );
  }

  function draw(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#f3ede1";
    for (const s of stars) {
      const tw = 0.4 + 0.6 * Math.abs(Math.sin(s.phase + t * s.speed));
      ctx.globalAlpha = tw * 0.7;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    if (t - lastT > 16) {
      maybeSpawnComet();
      lastT = t;
    }
    drawComets();

    requestAnimationFrame(draw);
  }
  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(draw);
}

/* ============================= SCROLL FX (accent + progress) ============================= */

function buildRail() {
  const rail = document.getElementById("rail");
  const sections = document.querySelectorAll("section[data-accent]");
  rail.innerHTML = "";
  sections.forEach(s => {
    const dot = document.createElement("button");
    dot.className = "rail-dot";
    dot.dataset.target = s.id;
    dot.setAttribute("aria-label", s.dataset.nav || s.id);
    dot.addEventListener("click", () => {
      document.getElementById(s.id).scrollIntoView({ behavior: "smooth" });
    });
    rail.appendChild(dot);
  });
}

function initScrollFx() {
  const sections = document.querySelectorAll("section[data-accent]");
  const glow = document.getElementById("glow");
  const progressFill = document.getElementById("progressFill");

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const accent = entry.target.dataset.accent;
        document.documentElement.style.setProperty("--accent", accent);
        glow.style.background = `radial-gradient(closest-side, color-mix(in srgb, ${accent} 22%, transparent), transparent 70%)`;
        entry.target.querySelectorAll("[data-countup]").forEach(el => {
          animateCountUp(el, Number(el.dataset.countup));
        });
        entry.target.querySelectorAll(".lifegrid .wk.lived").forEach((el, i) => {
          el.style.transitionDelay = Math.min(i * 0.6, 400) + "ms";
        });
        entry.target.querySelectorAll("[data-target]").forEach(el => {
          requestAnimationFrame(() => { el.style.width = el.dataset.target; });
        });
        document.querySelectorAll(".rail-dot").forEach(d => {
          d.classList.toggle("active", d.dataset.target === entry.target.id);
        });
      }
    });
  }, { threshold: 0, rootMargin: "-45% 0px -45% 0px" });

  sections.forEach(s => io.observe(s));

  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
    progressFill.style.width = Math.max(0, Math.min(1, scrolled)) * 100 + "%";
  }, { passive: true });
}

function initRevealFx() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

/* ============================= DEEP TIME (vertical timeline) ============================= */

function formatYearsAgo(yearsAgo) {
  if (yearsAgo >= 1e9) return `${fmt(yearsAgo / 1e9, 1)} billion years ago`;
  if (yearsAgo >= 1e6) return `${fmt(yearsAgo / 1e6, 1)} million years ago`;
  return `${fmt(yearsAgo)} years ago`;
}

// Positions each point by its true linear share of 13.8 billion years
// (oldest at top, now at bottom). This is deliberately NOT a log scale:
// log scale is easier to fit on a screen, but it flatters recent history by
// giving it visual weight it hasn't earned. On the real, linear timeline,
// the 9.2-billion-year gap between the Big Bang and Earth forming dwarfs
// everything that comes after it combined, and the only honest way to show
// that is to make the empty space between them dwarf everything else too,
// even if it takes thousands of pixels of scrolling through nothing to
// cross it. That length IS the point.
//
// The one place linear scale breaks down is the tail: agriculture, writing,
// math, science, and your own life are all within 12,000 years of "now",
// which is such a small sliver of 13.8 billion years that they'd overlap
// into unreadable mush. So each pair still gets a minimum gap, but that
// floor is kept small relative to the deep-time distances, and it scales
// with each pair's own real (raw, non-log) difference so no two gaps in
// that crowded tail end up identical either.
function renderDeepTimeline(containerId, yourYearsAgo, birth) {
  const TRACK_HEIGHT = 13800; // 1000px per billion years
  const BASE_GAP = 140;
  const EXTRA_GAP_RANGE = 100;

  const all = [
    ...TIMELINE_EVENTS,
    { label: "You", yearsAgo: yourYearsAgo, desc: "Every birthday, every memory, everything you've ever done happened in the last blink of this timeline.", isYou: true },
  ];
  const maxYearsAgo = all[0].yearsAgo; // Big Bang

  const rawGapLogs = all.slice(1).map((e, i) => Math.log10(all[i].yearsAgo - e.yearsAgo));
  const minRawLog = Math.min(...rawGapLogs);
  const maxRawLog = Math.max(...rawGapLogs);
  const rawLogSpan = maxRawLog - minRawLog || 1;

  let prevY = -Infinity;
  const positioned = all.map((e, i) => {
    const idealY = (1 - e.yearsAgo / maxYearsAgo) * TRACK_HEIGHT;
    const minGap = i === 0 ? 0 : BASE_GAP + ((rawGapLogs[i - 1] - minRawLog) / rawLogSpan) * EXTRA_GAP_RANGE;
    const y = Math.max(idealY, prevY + minGap);
    prevY = y;
    return { ...e, y };
  });
  // Generous trailing buffer: the last item's own text block needs room
  // below its `top`, or it overflows into whatever follows the timeline.
  const totalHeight = prevY + BASE_GAP;

  const items = positioned.map(e => `<div class="vt-item${e.isYou ? " you" : ""}" style="top:${e.y}px">
    <span class="vt-dot"></span>
    <span class="vt-title">${e.label}</span>
    <span class="vt-meta">${e.isYou ? `Born ${formatDate(birth)}` : formatYearsAgo(e.yearsAgo)}</span>
    <p class="vt-desc">${e.desc}</p>
  </div>`).join("");

  const ticks = [];
  for (let y = 40; y < totalHeight - 30; y += 200) {
    if (!positioned.some(p => Math.abs(p.y - y) < 60)) {
      ticks.push(`<span class="vt-tick" style="top:${y}px"></span>`);
    }
  }

  const el = document.getElementById(containerId);
  el.style.height = totalHeight + "px";
  el.innerHTML = items + ticks.join("");
}

/* ============================= MAIN COMPUTE + RENDER ============================= */

function computeAndRender(birth) {
  const now = new Date();
  const days = daysBetween(birth, now);
  const weeks = days / 7;
  const months = days / 30.4368;
  const years = days / 365.25;
  const hours = days * 24;

  const weekdayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const bornWeekday = weekdayNames[birth.getDay()];
  const zodiac = getZodiac(birth.getMonth() + 1, birth.getDate());
  const zodiacIndex = ZODIAC.indexOf(zodiac);

  const seasonsLived = days / 91.31;
  let nextBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
  if (nextBirthday < now) nextBirthday.setFullYear(now.getFullYear() + 1);
  const daysToNextBirthday = Math.max(1, daysBetween(now, nextBirthday));

  // Seed off the calendar date (not the year) so the mix feels tied to
  // "this kind of birthday" while still varying widely person to person.
  const seed = (birth.getMonth() + 1) * 3100 + birth.getDate() * 97 + birth.getFullYear();
  const pickedAnimals = pickSubset(ANIMALS, 6, seed);
  const pickedLegends = pickSubset(LEGENDS, 6, seed * 7 + 13);

  const generation = getGeneration(birth.getFullYear());
  const chineseZodiac = getChineseZodiac(birth.getFullYear());

  // ---- Basics ----
  document.getElementById("daysCount").dataset.countup = days;
  document.getElementById("basicsChips").innerHTML = `
    <span class="chip">Born a <b>${bornWeekday}</b></span>
    <span class="chip">${zodiac.icon} <b>${zodiac.name}</b></span>
    <span class="chip"><b>${fmt(years, 1)}</b> years old</span>
    <span class="chip"><b>${generation}</b></span>
    <span class="chip">Chinese zodiac: <b>${chineseZodiac}</b></span>
  `;
  document.getElementById("basicsGrid").innerHTML = [
    [fmt(weeks), "Weeks"],
    [fmt(months, 1), "Months"],
    [fmt(seasonsLived), "Seasons lived"],
    [fmt(daysToNextBirthday), "Days to next birthday"],
  ].map(([v, l]) => `<div class="mini-cell"><span class="v">${v}</span><span class="l">${l}</span></div>`).join("");

  // ---- Life in weeks grid ----
  const avgWeeks = Math.round(AVG_LIFESPAN_DAYS / 7);
  const isBonus = weeks > avgWeeks;
  const weeksLived = Math.round(weeks);
  const gridTotal = isBonus ? weeksLived : avgWeeks;
  const grid = document.getElementById("lifeGrid");
  const frag = document.createDocumentFragment();
  for (let i = 0; i < gridTotal; i++) {
    const d = document.createElement("div");
    const cls = i < avgWeeks ? (isBonus || i < weeksLived ? " lived" : "") : " bonus";
    d.className = "wk" + cls;
    frag.appendChild(d);
  }
  grid.innerHTML = "";
  grid.appendChild(frag);
  document.getElementById("legendBonus").classList.toggle("show", isBonus);

  const pctLife = (days / AVG_LIFESPAN_DAYS) * 100;
  const lifebarFill = document.getElementById("lifebarFill");
  lifebarFill.dataset.target = Math.min(100, pctLife) + "%";
  lifebarFill.classList.toggle("bonus", isBonus);
  document.getElementById("lifebarLabel").textContent = isBonus
    ? `${fmt(pctLife, 1)}% of an average lifespan, you're ${fmt(days - Math.round(AVG_LIFESPAN_DAYS))} days into bonus time`
    : `${fmt(pctLife, 1)}% of an average ${Math.round(AVG_LIFESPAN_DAYS/365.25)}-year global lifespan`;
  document.getElementById("lifeweeksSub").textContent = isBonus
    ? `You've lived ${fmt(weeksLived)} weeks, ${fmt(weeksLived - avgWeeks)} beyond the global average. Everything from here is bonus.`
    : `${fmt(weeksLived)} of ~${fmt(avgWeeks)} weeks, if life runs to the global average.`;

  // ---- Animals ----
  document.getElementById("animalGrid").innerHTML = pickedAnimals.map(a => {
    const diff = days - a.days;
    const verb = diff >= 0 ? "more" : "fewer";
    return `<div class="fcard">
      <span class="icon">${icon(a.icon)}</span>
      <span class="stat">${fmt(Math.abs(diff))} days ${verb}</span>
      <span class="name">than an average ${a.name}'s lifespan</span>
      <p class="desc">${a.note}</p>
    </div>`;
  }).join("");

  // ---- Legends ----
  document.getElementById("legendGrid").innerHTML = pickedLegends.map(p => {
    const b = new Date(p.birth), d = new Date(p.death);
    const lifespanDays = daysBetween(b, d);
    const diff = days - lifespanDays;
    const line = diff >= 0
      ? `You've lived ${fmt(diff)} days longer`
      : `They still had ${fmt(Math.abs(diff))} more days than you, so far`;
    const maxVal = Math.max(days, lifespanDays);
    const youPct = (days / maxVal) * 100;
    const themPct = (lifespanDays / maxVal) * 100;
    return `<div class="fcard">
      <span class="stat">${p.name}</span>
      <span class="name">${p.role}</span>
      <div class="bar-compare">
        <div class="bar-row">
          <span class="bar-label">You</span>
          <div class="bar-track"><div class="bar-fill you" style="width:${youPct}%"></div></div>
          <span class="bar-value">${fmt(days)}d</span>
        </div>
        <div class="bar-row">
          <span class="bar-label">Them</span>
          <div class="bar-track"><div class="bar-fill them" style="width:${themPct}%"></div></div>
          <span class="bar-value">${fmt(lifespanDays)}d</span>
        </div>
      </div>
      <p class="desc">${line}.</p>
    </div>`;
  }).join("");

  // ---- Cosmic ----
  document.getElementById("orbitsCount").dataset.countup = Math.floor(years);
  document.getElementById("orbitsCount").dataset.decimals = 0;
  const totalKm = hours * (EARTH_ORBIT_SPEED_KMH + GALACTIC_SPEED_KMH);
  const moonTrips = totalKm / (MOON_DIST_KM * 2);
  const auTraveled = totalKm / AU_KM;
  const moonsWitnessed = Math.floor(days / LUNAR_CYCLE_DAYS);
  document.getElementById("cosmicGrid").innerHTML = [
    [fmt(totalKm / 1e9, 2) + "B km", "Traveled through space"],
    [fmt(moonTrips, 1) + "x", "Round trips to the Moon"],
    [fmt(auTraveled, 1), "Astronomical Units covered"],
    [fmt(moonsWitnessed), "Full lunar cycles"],
  ].map(([v, l]) => `<div class="mini-cell"><span class="v">${v}</span><span class="l">${l}</span></div>`).join("");

  // ---- Planets ----
  document.getElementById("planetRow").innerHTML = PLANETS.map(p => {
    const age = days / p.orbitDays;
    return `<div class="planet">
      <div class="dot" style="background:${p.color}; box-shadow:0 0 24px ${p.color}88;"></div>
      <span class="age">${fmt(age, age < 10 ? 1 : 0)}</span>
      <span class="unit">${p.name.toLowerCase()} years old</span>
      <span class="pname">${p.name}</span>
    </div>`;
  }).join("");

  // ---- Body ----
  const heartbeats = days * 80 * 60 * 24;
  const breaths = days * 16 * 60 * 24;
  const blinks = days * 14400;
  const sleepDays = days / 3;
  document.getElementById("bodyGrid").innerHTML = [
    ["heartbeat", fmt(heartbeats), "Heartbeats", "At a resting ~80 bpm."],
    ["wind", fmt(breaths), "Breaths taken", "At ~16 breaths per minute."],
    ["eye", fmt(blinks), "Blinks", "At ~15 blinks/min while awake."],
    ["moon", fmt(sleepDays), "Days asleep", "Assuming 8 hours a night."],
  ].map(([ic, v, l, d]) => `<div class="fcard"><span class="icon">${icon(ic)}</span><span class="stat">${v}</span><span class="name">${l}</span><p class="desc">${d}</p></div>`).join("");

  // ---- Calendar quirks ----
  const leapDays = countLeapDaysLived(birth, now);
  const fridays13 = countFridays13th(birth, now);
  document.getElementById("calendarGrid").innerHTML = [
    ["calendarLoop", fmt(leapDays), "Leap days lived through", "Feb 29ths you've actually seen."],
    ["calendarStar", fmt(fridays13), "Friday the 13ths survived", "And you're still here."],
  ].map(([ic, v, l, d]) => `<div class="fcard"><span class="icon">${icon(ic)}</span><span class="stat">${v}</span><span class="name">${l}</span><p class="desc">${d}</p></div>`).join("");

  // ---- Checkpoints (milestone days + golden birthday) ----
  let nextMarked = false;
  const milestones = MILESTONE_DAYS.map(m => {
    const hit = new Date(birth.getTime() + m * DAY_MS);
    const achieved = hit <= now;
    const isNext = !achieved && !nextMarked;
    if (isNext) nextMarked = true;
    return { m, hit, achieved, isNext };
  });

  const goldenAge = birth.getDate();
  const goldenDate = new Date(birth);
  goldenDate.setFullYear(birth.getFullYear() + goldenAge);
  const goldenAchieved = goldenDate <= now;
  const goldenDays = daysBetween(birth, goldenDate);

  // Timeline
  const trackMax = Math.max(...MILESTONE_DAYS, days, goldenDays) * 1.08;
  const pct = (v) => Math.min(100, (v / trackMax) * 100);
  const timelinePoints = milestones.map(({ m, achieved, isNext }) => {
    const status = achieved ? "reached" : isNext ? "next" : "future";
    return `<div class="tl-point ${status}" style="left:${pct(m)}%" title="Day ${fmt(m)}">
      <span class="tl-dot"></span>
      <span class="tl-label">${m >= 1000 ? fmt(m / 1000) + "K" : fmt(m)}</span>
    </div>`;
  }).join("");
  document.getElementById("timeline").innerHTML = `
    <div class="timeline-track"></div>
    <div class="timeline-progress" id="timelineProgress" style="width:0%" data-target="${pct(days)}%"></div>
    ${timelinePoints}
    <div class="tl-point golden" style="left:${pct(goldenDays)}%" title="Golden birthday">
      <span class="tl-dot"></span>
      <span class="tl-label">Golden</span>
    </div>
    <div class="tl-point today" style="left:${pct(days)}%" title="Today">
      <span class="tl-dot"></span>
      <span class="tl-label">Today</span>
    </div>
  `;

  // Detail cards
  const milestoneCards = milestones.map(({ m, hit, achieved, isNext }) => {
    const tag = isNext ? `<span class="tag">Next up</span>` : "";
    const desc = achieved
      ? `You crossed this on ${formatDate(hit)}.`
      : `Arrives ${formatDate(hit)}, in ${fmt(daysBetween(now, hit))} days.`;
    return `<div class="fcard${isNext ? " next" : ""}">${tag}
      <span class="stat">Day ${fmt(m)}</span>
      <span class="name">${achieved ? "reached" : "upcoming"}</span>
      <p class="desc">${desc}</p>
    </div>`;
  });

  const goldenCard = `<div class="fcard">
    <span class="tag tag-static">Golden birthday</span>
    <span class="stat">Turning ${fmt(goldenAge)}</span>
    <span class="name">${goldenAchieved ? "already happened" : "still ahead"}</span>
    <p class="desc">${goldenAchieved
      ? `On ${formatDate(goldenDate)}, your age caught up with your birth date: you turned ${fmt(goldenAge)} on the ${fmt(goldenAge)}${goldenAge === 1 ? "st" : goldenAge === 2 ? "nd" : goldenAge === 3 ? "rd" : "th"} of the month.`
      : `On ${formatDate(goldenDate)}, your age will catch up with your birth date: you'll turn ${fmt(goldenAge)} on the ${fmt(goldenAge)}${goldenAge === 1 ? "st" : goldenAge === 2 ? "nd" : goldenAge === 3 ? "rd" : "th"} of the month.`}</p>
  </div>`;

  document.getElementById("milestoneGrid").innerHTML = goldenCard + milestoneCards.join("");

  // ---- The scale of it all (deep time walk) ----
  renderDeepTimeline("deepTimeline", years, birth);

  const hairMicrometers = years * MICROMETERS_PER_YEAR;
  document.getElementById("hairWidth").dataset.countup = hairMicrometers;
  document.getElementById("hairWidth").dataset.decimals = hairMicrometers < 10 ? 2 : 1;
  document.getElementById("hairCompare").textContent = hairMicrometers < HAIR_WIDTH_MICROMETERS
    ? `That's ${fmt(HAIR_WIDTH_MICROMETERS / hairMicrometers, 1)} times thinner than a single human hair.`
    : `That's about ${fmt(hairMicrometers / HAIR_WIDTH_MICROMETERS, 1)} human hairs laid side by side.`;

  // ---- Share card ----
  drawShareCard({
    days, years, weeks, zodiac, zodiacIndex, bornWeekday,
    marsAge: days / PLANETS.find(p => p.name === "Mars").orbitDays,
    animal: pickedAnimals[0],
    legend: pickedLegends[0],
  });
}

/* ============================= SHARE CARD (canvas) ============================= */

// A generative, deterministic "constellation" per zodiac sign: same sign
// always draws the same pattern, purely decorative, not astronomically real.
function buildConstellation(zodiacIndex, pointCount = 7) {
  const rng = mulberry32(1000 + zodiacIndex * 97);
  const points = [];
  for (let i = 0; i < pointCount; i++) {
    points.push({
      x: 0.1 + rng() * 0.8,
      y: 0.12 + rng() * 0.76,
      r: 1.6 + rng() * 2.6,
    });
  }
  const edges = [];
  for (let i = 0; i < pointCount - 1; i++) edges.push([i, i + 1]);
  edges.push([0, Math.floor(pointCount / 2)]);
  return { points, edges };
}

function drawConstellation(ctx, box, zodiacIndex, accent) {
  const { points, edges } = buildConstellation(zodiacIndex);
  ctx.save();
  ctx.strokeStyle = accent + "70";
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  edges.forEach(([a, b]) => {
    const pa = points[a], pb = points[b];
    ctx.moveTo(box.x + pa.x * box.w, box.y + pa.y * box.h);
    ctx.lineTo(box.x + pb.x * box.w, box.y + pb.y * box.h);
  });
  ctx.stroke();
  points.forEach(p => {
    const px = box.x + p.x * box.w, py = box.y + p.y * box.h;
    const glow = ctx.createRadialGradient(px, py, 0, px, py, p.r * 7);
    glow.addColorStop(0, "#f3ede1cc");
    glow.addColorStop(1, "transparent");
    ctx.fillStyle = glow;
    ctx.beginPath(); ctx.arc(px, py, p.r * 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#f3ede1";
    ctx.beginPath(); ctx.arc(px, py, p.r, 0, Math.PI * 2); ctx.fill();
  });
  ctx.restore();
}

// Shrinks font-size until the text fits maxWidth, then draws it centered at (cx, y).
function drawFittedText(ctx, text, cx, y, maxWidth, { family, weight = 400, startSize, minSize = 14, color }) {
  let size = startSize;
  ctx.textAlign = "center";
  while (size > minSize) {
    ctx.font = `${weight} ${size}px '${family}'`;
    if (ctx.measureText(text).width <= maxWidth) break;
    size -= 2;
  }
  ctx.fillStyle = color;
  ctx.fillText(text, cx, y);
}

function drawStatTile(ctx, x, y, w, h, value, label, accent) {
  ctx.strokeStyle = "#f3ede122";
  ctx.lineWidth = 1;
  ctx.strokeRect(x, y, w, h);
  drawFittedText(ctx, value, x + w / 2, y + h * 0.52, w - 36, {
    family: "Fraunces", weight: 700, startSize: 46, minSize: 22, color: "#f3ede1",
  });
  drawFittedText(ctx, label.toUpperCase(), x + w / 2, y + h * 0.76, w - 36, {
    family: "Space Mono", weight: 700, startSize: 16, minSize: 11, color: accent,
  });
}

async function drawShareCard(data) {
  const canvas = document.getElementById("shareCanvas");
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;

  if (document.fonts && document.fonts.ready) {
    try { await document.fonts.ready; } catch (e) {}
  }

  const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#f4b942";

  // background
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#0d0e1a");
  bg.addColorStop(1, "#08080f");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  const glow = ctx.createRadialGradient(W/2, H*0.16, 20, W/2, H*0.16, W*0.9);
  glow.addColorStop(0, accent + "3a");
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // ambient stars
  ctx.fillStyle = "#f3ede1";
  for (let i = 0; i < 140; i++) {
    ctx.globalAlpha = Math.random() * 0.45 + 0.08;
    ctx.beginPath();
    ctx.arc(Math.random() * W, Math.random() * H, Math.random() * 1.3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // frame with corner ticks
  ctx.strokeStyle = accent + "aa";
  ctx.lineWidth = 2;
  ctx.strokeRect(36, 36, W - 72, H - 72);
  ctx.strokeStyle = accent + "44";
  ctx.lineWidth = 1;
  ctx.strokeRect(46, 46, W - 92, H - 92);

  ctx.textAlign = "center";

  // eyebrow
  ctx.fillStyle = accent;
  ctx.font = "700 22px 'Space Mono'";
  ctx.fillText("E P O C H", W / 2, 116);

  // constellation
  drawConstellation(ctx, { x: 250, y: 150, w: 500, h: 250 }, data.zodiacIndex, accent);

  ctx.font = "700 26px 'Space Mono'";
  ctx.fillStyle = "#f3ede1";
  ctx.fillText(data.zodiac.name.toUpperCase(), W / 2, 450);
  ctx.font = "400 18px 'Space Mono'";
  ctx.fillStyle = accent;
  ctx.fillText(`BORN A ${data.bornWeekday.toUpperCase()}`, W / 2, 480);

  // divider
  ctx.strokeStyle = "#f3ede122";
  ctx.beginPath();
  ctx.moveTo(150, 520);
  ctx.lineTo(W - 150, 520);
  ctx.stroke();

  // big number, auto-shrunk to fit
  drawFittedText(ctx, fmt(data.days), W / 2, 690, W - 180, {
    family: "Fraunces", weight: 900, startSize: 190, minSize: 90, color: "#f3ede1",
  });
  ctx.font = "500 32px 'Space Mono'";
  ctx.fillStyle = accent;
  ctx.fillText("DAYS ALIVE", W / 2, 745);

  ctx.strokeStyle = "#f3ede122";
  ctx.beginPath();
  ctx.moveTo(150, 780);
  ctx.lineTo(W - 150, 780);
  ctx.stroke();

  // stat tile grid
  const animalDiff = data.days - data.animal.days;
  const legendBirth = new Date(data.legend.birth), legendDeath = new Date(data.legend.death);
  const legendDays = daysBetween(legendBirth, legendDeath);

  const gx = 120, gy = 815, gw = W - 240, gh = 420, gap = 20;
  const tileW = (gw - gap) / 2, tileH = (gh - gap) / 2;

  drawStatTile(ctx, gx, gy, tileW, tileH, fmt(data.years, 1), "years old", accent);
  drawStatTile(ctx, gx + tileW + gap, gy, tileW, tileH, fmt(data.weeks), "weeks lived", accent);
  drawStatTile(
    ctx, gx, gy + tileH + gap, tileW, tileH,
    (animalDiff >= 0 ? "+" : "-") + fmt(Math.abs(animalDiff)),
    `days vs. ${data.animal.name}`, accent
  );
  drawStatTile(
    ctx, gx + tileW + gap, gy + tileH + gap, tileW, tileH,
    fmt(legendDays),
    `${data.legend.name}'s lifespan (days)`, accent
  );

  ctx.font = "400 22px 'Space Mono'";
  ctx.fillStyle = "#f3ede166";
  ctx.textAlign = "center";
  ctx.fillText("EPOCH · YOUR LIFE, BY THE NUMBERS", W / 2, H - 100);

  ctx.font = "700 24px 'Space Mono'";
  ctx.fillStyle = accent;
  ctx.fillText("Get yours at https://epoch.snanu.com", W / 2, H - 68);
}

/* ============================= DATE INPUT (DD / MM / YYYY segments) ============================= */

function initDateInputs() {
  const segs = [document.getElementById("bday"), document.getElementById("bmonth"), document.getElementById("byear")];
  const maxValues = [31, 12, null];

  segs.forEach((seg, i) => {
    const max = maxValues[i];
    seg.addEventListener("input", () => {
      let val = seg.value.replace(/[^0-9]/g, "").slice(0, seg.maxLength);
      if (max && val !== "" && Number(val) > max) {
        val = String(max);
      }
      seg.value = val;
      if (val.length === seg.maxLength && segs[i + 1]) {
        segs[i + 1].focus();
        segs[i + 1].select();
      }
    });
    seg.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && seg.value === "" && segs[i - 1]) {
        segs[i - 1].focus();
      }
    });
  });
}

function readBirthInput() {
  const day = Number(document.getElementById("bday").value);
  const month = Number(document.getElementById("bmonth").value);
  const year = Number(document.getElementById("byear").value);

  if (!day || !month || !year || String(year).length < 4) {
    return { error: "Fill in a full date: day, month, and a 4-digit year." };
  }
  if (month < 1 || month > 12) {
    return { error: "That month doesn't exist. Try 01 to 12." };
  }
  if (year < 1900 || year > new Date().getFullYear()) {
    return { error: "That year seems off. Try a real birth year." };
  }
  const birth = new Date(year, month - 1, day);
  if (birth.getFullYear() !== year || birth.getMonth() !== month - 1 || birth.getDate() !== day) {
    return { error: "That date doesn't exist on the calendar." };
  }
  return { birth };
}

/* ============================= INIT ============================= */

function init() {
  initStarfield();
  buildRail();
  initScrollFx();
  initRevealFx();
  initDateInputs();

  const form = document.getElementById("dateForm");
  const errorEl = document.getElementById("heroError");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const { birth, error } = readBirthInput();
    if (error) {
      errorEl.textContent = error;
      return;
    }
    if (birth > new Date()) {
      errorEl.textContent = "That's in the future. Try a date you've actually lived.";
      return;
    }
    errorEl.textContent = "";
    document.body.classList.add("revealed");
    computeAndRender(birth);
    document.querySelectorAll(".bignum[data-done]").forEach(el => delete el.dataset.done);
    requestAnimationFrame(() => {
      document.getElementById("sec-basics").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.getElementById("downloadBtn").addEventListener("click", () => {
    const canvas = document.getElementById("shareCanvas");
    const a = document.createElement("a");
    a.download = "epoch-card.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });

  document.getElementById("restartBtn").addEventListener("click", () => {
    document.body.classList.remove("revealed");
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", init);
