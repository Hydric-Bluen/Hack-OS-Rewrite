// pause menu variables
const pauseMenu           = document.getElementById('pause-menu');
const pauseMenuIcon       = document.getElementById('pause-menu-icon');
// console window variables
const consoleWindow       = document.getElementById('console-window');
// email window variables
const emailWindow         = document.getElementById('email-window');
const emailWindowIcon     = document.getElementById('email-window-icon');
const emailWindowBody     = document.getElementById('email-window-body-table');
// specific email variables
const specificEmail       = document.getElementById('specific-email');
const specificEmailAuthor = document.getElementById('author');
const specificEmailTopic  = document.getElementById('topic');
const specificEmailBody   = document.getElementById('body-content');

// Audio
const clickAudio = document.getElementById('click');

// config things
let pauseMenuOpen     = false;
let consoleWindowOpen = false;
let emailWindowOpen   = false;
let specificEmailOpen = false;

// timers
let emailTimer = 100;
//Math.floor(Math.random() * 10000);

// emails object
let emails = [];
let maxEmails = 10;
let emailCount = 0;
