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
const backDoorHackIcon       = document.getElementById('back-door-hack-icon');

// day job variables
const overlay                = document.getElementById('overlay');
const specificDayJobName     = document.getElementById('day-job-name');
const dayJobIcon             = document.getElementById('day-jobs-icon');
const dayJobWindow           = document.getElementById('day-jobs-window');
const dayJobDescription      = document.getElementById('day-job-description');
const dayJobBody             = document.getElementById('day-jobs-window-body');
const dayJobTable            = document.getElementById('day-jobs-window-table');
const specificDayJobWindow   = document.getElementById('specific-day-job-window');

// wifi connections window variables
const wifiConnectionsIcon    = document.getElementById('wifi-connections-icon');
const wifiConnectionsWindow  = document.getElementById('wifi-connections-window');
const currentlyConnectedWifi = document.getElementById('currently-connected-wifi');

const publicDomainDropDown     = document.getElementById('public-domain-drop-down-menu');
const publicDomainDropDownBody = document.getElementById('public-domain-drop-down-menu-body');

const wpaOneDropDown         = document.getElementById('wpa-1-drop-down-menu');
const wpaOneDropDownBody     = document.getElementById('wpa-1-drop-down-menu-body');

const wpaTwoDropDown         = document.getElementById('wpa-2-drop-down-menu');
const wpaTwoDropDownBody     = document.getElementById('wpa-2-drop-down-menu-body');

// options menu variables
const optionsMenu            = document.getElementById('options-menu');
const volumeAdjuster         = document.getElementById('volume-adjuster');

// password input variables
const passwordInputWindow    = document.getElementById('password-input-window');
const passwordInputHeader    = document.getElementById('password-input-header');
const passwordInput          = document.getElementById('password-input');

// WPA One Cracker Variables
const wpaOneCrackerIcon      = document.getElementById('wpa-1-cracker-icon');
const wpaOneCrackerWindow    = document.getElementById('wpa-1-cracker-window');
const wpaOneCrackerOutput    = document.getElementById('wpa-1-output');
const wpaOneCrackerInput     = document.getElementById('wpa-1-input');

// Audio
const clickAudio             = document.getElementById('click');
const notificationAudio      = document.getElementById('notification');

// config things
let pauseMenuOpen       = false;
let consoleWindowOpen   = false;
let emailWindowOpen     = false;
let specificEmailOpen   = false;
let shopWindowOpen      = false;
let dayJobWindowOpen    = false;
let optionsMenuOpen     = false;
let wifiConnectionsOpen = false;
let passwordInputOpen   = false;
let wpaOneCrackerOpen   = false;

let publicDomainDropDownOpen = false;
let wpaOneDropDownOpen       = false;
let wpaTwoDropDownOpen       = false;

let connectedToWifi = false;
let wifiConnectedTo = "";

// wifi's
let publicDomains = [
  {"name": "The LAN Before Time"},
  {"name": "LAN Solo"},
  {"name": "House LANister"},
  {"name": "Winternet Is Coming"},
  {"name": "The Promised LAN"}
];

const wpaOnes = [
  {"name": "Nacho WiFi", "password": "*//5cwkep7"},
  {"name": "Look Man Wires", "password": "7>hp*]bd%y"},
  {"name": "Dimple Girl", "password": "@m7g585qy$"},
  {"name": "Sex is not allowed in the office", "password": "u.@cg6p}h@"},
  {"name": "Give me your number", "password": ">?*jw%8(&q"},
  {"name": "FBI Surveillance Van # 594", "password": "*g6~*]sk%+"},
  {"name": "Use this One Mom", "password": "hx`tz4=t7d"}
];

const wpaTwos = [
  {"name": "Area 51 Test Site", "password": "FJM*PrLC&-H5=Vv-"},
  {"name": "The Creep Next Door", "password": "Cw9Fn_+KaD36*EQB"},
  {"name": "Life In The Local Fast Network", "password": "^aYhPU7V*MnnxRr5"}
];

// timers
let emailTimer = Math.floor(Math.random() * 5000);

// emails
const names = ['Unknownx', 'KingLucien', 'WarGang', 'Elfy', 'Nobody Special', 'Melie', 'Dadwick', 'Gabrijel', 'Jarido12', 'Marnie'];

const topics = ['Password Cracking', 'Creditcard Cracking', 'PHP Injection', 'WiFi Cracking', 'Computer Cracking'];

const bodies = [
  `Hi! I was wondering if you could do this thing for me?`,
  `Hello there. I've heard you started hacking and I was wondering if you can do this job for me.`,
];

let prices = [100, 150, 200, 250, 50, 75, 25];

let emails     = [];
let maxEmails  = 10;
let emailCount = 0;
let newEmails  = 0;

// accepted emails
let acceptedEmails     = [];
let maxAcceptedEmails  = 5;
let acceptedEmailCount = 0;

// wifi countdown variables
const defaultWPAOneCountdown = 500;
let WPAOneCountdown = defaultWPAOneCountdown;
const defaultWPATwoCountdown = 1000;
let WPATwoCountdown = defaultWPATwoCountdown;

// a bunch of shop items
let shopItems = [
  {name: "Back Door Hack", price: 50, quantity: 0, infinite: true, icon: document.getElementById("back-door-hack-icon")},
  {name: "WPA-1 Cracker", price: 100, quantity: 0, infinite: false, bought: false, icon: document.getElementById("wpa-1-cracker-icon-container")},
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

let crackingWPAOne = false;
let finishedCrackingWPAOne = false;
let crackingWPATwo = false;
let finishedCrackingWPATwo = false;

// back door hack variables
let moneyAmount = 5;
let backDoorHackTimer = 1500;

// the player wallet
let wallet = 10000;

// options stuff
let volume = 1;
let usingDark = false;

// pausing
let paused = false;
