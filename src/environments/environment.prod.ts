let siteName = "dreamcric247";
let hostname = window.origin;
let apisUrl = "https://access.streamingtv.fun:3445/api/all_apis";

let isCaptcha = false;
let isSkyView = false;
let isallSports = true;
let isIcasino = false;
let ICasinoPad = "https://icasino365.xyz/pad=85";
let isCaptchademo = false
let whatsapp = "+00 00000 00000";
let whatsapp1 = "";
let whatsapp2 = "";
let whatsapp3 = ""
let Marketing_whatsapp = ""
let Marketing_skype = ''
let AferLoginChangePassword = true
let isCasinoTab = true;
let isExchangeGames = true
let ishorseRace = true
let isNayaLudisNet = false
let isNayaLudisSite = false
let telegramBotName = ""
let origin = "";
let domain = "";
let currency = "INR";
let auto = false;
let isb2c = true;
let whatsappChat ='';
let isEtgcasino = true;
let isTraslate = true
let affiliteLink = ''
let firebase = {
  projectId: 'cricbuzzer-d42fe',
  appId: '1:445142658279:web:f367e9700079ec84160642',
  storageBucket: 'cricbuzzer-d42fe.appspot.com',
  apiKey: 'AIzaSyBdHBIDzWEcUaF4fQLv8xFzyAL7M3XbCPg',
  authDomain: 'cricbuzzer-d42fe.firebaseapp.com',
  messagingSenderId: '445142658279',
  measurementId: 'G-DGDYH1GVXW',
};
let sitekey = ""



if (hostname.indexOf('cricbuzzer.io') > -1 || hostname.indexOf('cricbuzzer.com') > -1 || hostname.indexOf('cricbuzzer.pro') > -1) {
  siteName = 'cricbuzzer';
  origin = "cricbuzzer.io"
  isCaptcha = false;
  whatsapp = "+919819052222"
  whatsapp1 = "+919819062222";
  whatsappChat = '9819052222'
  firebase = {
    projectId: 'cricbuzzer-d42fe',
    appId: '1:445142658279:web:f367e9700079ec84160642',
    storageBucket: 'cricbuzzer-d42fe.appspot.com',
    apiKey: 'AIzaSyBdHBIDzWEcUaF4fQLv8xFzyAL7M3XbCPg',
    authDomain: 'cricbuzzer-d42fe.firebaseapp.com',
    messagingSenderId: '445142658279',
    measurementId: 'G-DGDYH1GVXW',
  }
}

if (hostname.indexOf('cricbuzzer.io') > -1) {
  domain = 'cricbuzzer.io';
  telegramBotName = "cricbuzzer_bot"
  //currency = "INR";
  currency = "BDT";
  auto = true;
  affiliteLink = 'https://aff.cricbuzzer.io'

}

if (hostname.indexOf('dreamcric247.com') > -1) {
  domain = 'dreamcric247.com';
  telegramBotName = "DreamcricBot"
  currency = "INR";
  siteName = 'dreamcric';
  origin = "dreamcric247.com"
  isCaptcha = false;
  isEtgcasino = false;
  affiliteLink = 'https://aff.dreamcric247.com'

  firebase = {
    apiKey: "AIzaSyBZBk5ETh7eT5FzFkWzjLAm-0IX4LoQD-A",
    authDomain: "dreamcric247-a1d1a.firebaseapp.com",
    projectId: "dreamcric247-a1d1a",
    storageBucket: "dreamcric247-a1d1a.appspot.com",
    messagingSenderId: "1067709913101",
    appId: "1:1067709913101:web:146b6088f1334b17711d44",
    measurementId: "G-YXF9L8W7N8"
  }

}

if (hostname.indexOf('cricbuzzer.com') > -1) {
  domain = 'cricbuzzer.com';
  telegramBotName = 'cricbuzzer_com_bot';
  currency = "BDT";
  auto = true;
}

if (hostname.indexOf('cricbuzzer.pro') > -1) {
  domain = 'cricbuzzer.pro';
  telegramBotName = 'cricbuzzer_pro_bot'
  currency = "HKD";
  

}
if (hostname.indexOf('cricbuzzer.com.bd') > -1) {
  siteName = 'cricbuzzerbd';
  
}
if (hostname.indexOf('winplus247.com') > -1) {
  domain = 'winplus247.com';
  telegramBotName = 'WinPlus247Bot'
  siteName = 'winplus247';
  origin = "winplus247.com"
  isEtgcasino = false
  isCaptcha = false;
  currency = 'INR';
  whatsappChat = '8506027877';  
  whatsapp = "+919899061740"
  firebase = {
    apiKey: "AIzaSyACcp-EQzjGuEHSBmsIaUbKZF2G0mjJyfM",
    authDomain: "winplus247-3eb3f.firebaseapp.com",
    projectId: "winplus247-3eb3f",
    storageBucket: "winplus247-3eb3f.appspot.com",
    messagingSenderId: "963540842767",
    appId: "1:963540842767:web:53bf2bd19bb2b2d342e67a",
    measurementId: "G-3Y2W9Y4H80"
  }
}
if (hostname.indexOf('winplus99.com') > -1) {
  domain = 'winplus99.com';
  telegramBotName = 'winplus99Bot'
  siteName = 'winplus99';
  origin = "winplus99.com"
  isCaptcha = false;
  currency = 'INR'
  isb2c = false
  isEtgcasino = false
}
if (hostname.indexOf('lionbook247.com') > -1) {
  domain = 'lionbook247.com';
  telegramBotName = 'lionbook247Bot'
  siteName = 'lionbook247';
  origin = "lionbook247.com"
  isCaptcha = false;
  currency = 'INR'
  isb2c = false
  isTraslate = false;
  isEtgcasino = false


}
if (hostname.indexOf('tripbets.io') > -1) {
  domain = 'tripbets.io';
  telegramBotName = 'tripbetsBot'
  siteName = 'tripbets';
  origin = "tripbets.io"
  isCaptcha = false;
  currency = 'INR';
  isb2c = false;
  isTraslate = false;
}


export const environment = {
  firebase: firebase,
  recaptcha: {
    siteKey: '6LfXPpcjAAAAAHRJr1TKRVDyrQ7d5g-ZNdt-KgAB',
  },
  telegramBotName: telegramBotName,
  production: true,
  apisUrl: apisUrl,
  siteName: siteName,
  isCaptcha: isCaptcha,
  isSkyView: isSkyView,
  whatsapp: whatsapp,
  isCaptchademo: isCaptchademo,
  whatsapp1: whatsapp1,
  whatsapp2: whatsapp2,
  whatsapp3: whatsapp3,
  Marketing_whatsapp: Marketing_whatsapp,
  Marketing_skype: Marketing_skype,
  isIcasino: isIcasino,
  ICasinoPad: ICasinoPad,
  isallSports: isallSports,
  AferLoginChangePassword: AferLoginChangePassword,
  isCasinoTab: isCasinoTab,
  isExchangeGames: isExchangeGames,
  ishorseRace: ishorseRace,
  isNayaLudisSite: isNayaLudisSite,
  isNayaLudisNet: isNayaLudisNet,
  origin: origin,
  domain: domain,
  currency: currency,
  auto: auto,
  isb2c: isb2c,
  isEtgcasino: isEtgcasino,
  sitekey: sitekey,
  whatsappChat:whatsappChat,
  isTraslate:isTraslate,
  affiliteLink:affiliteLink
};
