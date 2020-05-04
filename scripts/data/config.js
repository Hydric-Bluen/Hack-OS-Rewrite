////// TODO: OPTIMIZE THE HELL OUT OF THIS FILE

// pause menu variables
const pauseMenu              = document.getElementById('pause-menu');
const pauseMenuIcon          = document.getElementById('pause-menu-icon');

// console window variables
const consoleWindow          = document.getElementById('console-window');
const consoleWindowInput     = document.getElementById('command-line-input');
const consoleWindowIcon      = document.getElementById('console-window-icon');
const consoleWindowOutput    = document.getElementById('command-line-output');

// email window variables
const emailWindow            = document.getElementById('email-window');
const emailWindowIcon        = document.getElementById('email-window-icon');
const emailWindowBody        = document.getElementById('email-window-body-table');

// specific email variables
const specificEmailTopic     = document.getElementById('topic');
const specificEmailAuthor    = document.getElementById('author');
const specificEmailBody      = document.getElementById('body-content');
const specificEmail          = document.getElementById('specific-email');

// new email count notification
const newEmailContainer      = document.getElementById('new-emails');
const newEmailCount          = document.getElementById('new-email-count');

// shop window
const shopWindow             = document.getElementById('shop-window');
const shopHeader             = document.getElementById('shop-header');
const shopWindowIcon         = document.getElementById('shop-window-icon');
const shopWindowTable        = document.getElementById('shop-window-table');

// back door hack
const quantityText           = document.getElementById('quantity');

// day job variables
const overlay                = document.getElementById('overlay');
const specificDayJobName     = document.getElementById('day-job-name');
const dayJobIcon             = document.getElementById('day-jobs-icon');
const dayJobWindow           = document.getElementById('day-jobs-window');
const dayJobDescription      = document.getElementById('day-job-description');
const dayJobBody             = document.getElementById('day-jobs-window-body');
const dayJobTable            = document.getElementById('day-jobs-window-table');
const specificDayJobWindow   = document.getElementById('specific-day-job-window');

// Audio
const clickAudio             = document.getElementById('click');
const notificationAudio      = document.getElementById('notification');

// config things
let pauseMenuOpen     = false;
let consoleWindowOpen = false;
let emailWindowOpen   = false;
let specificEmailOpen = false;
let shopWindowOpen    = false;
let dayJobWindowOpen = false;

// timers
let emailTimer = Math.floor(Math.random() * 5000);

// emails
let emails     = [];
let maxEmails  = 10;
let emailCount = 0;
let newEmails  = 0;

// accepted emails
let acceptedEmails     = [];
let maxAcceptedEmails  = 5;
let acceptedEmailCount = 0;

// a bunch of shop items
let shopItems = [
  {name: "Back Door Hack", price: 50, quantity: 0, infinite: true, icon: document.getElementById("back-door-hack-icon")},
  {name: "WiFi Cracker", price: 100, quantity: 0, infinite: false, bought: false, icon: document.getElementById("wifi-cracker-icon")},
  {name: "Password Cracker", price: 75, quantity: 0, infinite: false, bought: false, icon: document.getElementById("password-cracker-icon")},
  {name: "PHP Injector", price: 250, quantity: 0, infinite: false, bought: false, icon: document.getElementById("php-injector-icon")},
  {name: "Network Scanner", price: 125, quantity: 0, infinite: false, bought: false, icon: document.getElementById("network-scanner-icon")}
];

// dayJobs variables
let dayJobs = [
  {name: "Mow Lawns", duration: 500, description: "Mow the lawns of your neighbours and have them pay you!", pay: 25},
  {name: "Deliver Newspapers", duration: 1000, description: "Deliver newspapers around the entire neighbourhood!", pay: 50},
  {name: "Washing Cars", duration: 750, description: "Wash the cars at a local gas station, this pays well for you hard labour.", pay: 75}
];
let pay = 0;
let dayJobsCooldown = 2500;
let doingJob = false;
let jobCountdown = 0;
let jobFinished = false;

// back door hack variables
let moneyAmount = 5;
let backDoorHackTimer = 1500;

// the player wallet
let wallet = 50;

// pausing
let paused = false;
