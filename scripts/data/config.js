// pause menu variables
const pauseMenu           = document.getElementById('pause-menu');
const pauseMenuIcon       = document.getElementById('pause-menu-icon');

// console window variables
const consoleWindow       = document.getElementById('console-window');
const consoleWindowIcon   = document.getElementById('console-window-icon');
const consoleWindowInput  = document.getElementById('command-line-input');
const consoleWindowOutput = document.getElementById('command-line-output');

// email window variables
const emailWindow         = document.getElementById('email-window');
const emailWindowIcon     = document.getElementById('email-window-icon');
const emailWindowBody     = document.getElementById('email-window-body-table');

// specific email variables
const specificEmail       = document.getElementById('specific-email');
const specificEmailAuthor = document.getElementById('author');
const specificEmailTopic  = document.getElementById('topic');
const specificEmailBody   = document.getElementById('body-content');

// new email count notification
const newEmailContainer   = document.getElementById('new-emails');
const newEmailCount       = document.getElementById('new-email-count');

// shop window
const shopWindow          = document.getElementById('shop-window');
const shopHeader          = document.getElementById('shop-header');
const shopWindowIcon      = document.getElementById('shop-window-icon');
const shopWindowTable     = document.getElementById('shop-window-table');

// back door hack
const quantityText        = document.getElementById('quantity');

// Audio
const clickAudio          = document.getElementById('click');
const notificationAudio   = document.getElementById('notification');

// config things
let pauseMenuOpen     = false;
let consoleWindowOpen = false;
let emailWindowOpen   = false;
let specificEmailOpen = false;
let shopWindowOpen    = false;

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

// back door hack variables
let moneyAmount = 5;
let backDoorHackTimer = 5000;

// the player wallet
let wallet = 50;

// pausing
let paused = false;
