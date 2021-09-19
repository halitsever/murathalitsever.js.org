

var botNames = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
var regex_bot = new RegExp(botNames, 'i');
var userAgent = navigator.userAgent; 
if (!regex_bot.test(userAgent)) {
    fetchData();
}

async function fetchData() {
await fetch("https://api.github.com/users/halitsever/repos?sort=updated")
.then((response) => response.json())
.then((data) => {
  for(var i = 0; 6>i; i++) {
    if (i === 0) {
    title = document.querySelector("#project" + 1);
    description = document.querySelector("#project" + 1 + "desc");
    }
    else {
    title = document.querySelector("#project" + i);
    description = document.querySelector("#project" + i + "desc");
    }
    //  For lastest repo names data[<nmbr>].name;
    //  For lastest repo descriptions data[<nmbr>].description;
    //  For lastest repo link  data[<nmbr>].clone_url
      title.innerHTML  = data[i].name;
      title.setAttribute("href", data[i].clone_url);
      description.innerHTML = data[i].description
  }
}).catch((error) => {
  console.error('Error:', error);
});
}



var cards = document.querySelector("#cards");
var body = document.querySelector("body");
var header = document.querySelector(".header");
var lista = document.querySelectorAll("a");
var listh = document.querySelectorAll("h2");
var listp = document.querySelectorAll("p");
function lightMode() {
for (var i = 0; lista.length > lista.length - 1; i++) {
  console.log(i);
  lista[i].style.color = "black";
  if (i === lista.length - 1) break;
}
for (var i = 0; listh.length > listh.length - 1; i++) {
  console.log(i);
  listh[i].style.color = "black";
  if (i === listh.length - 1) break;
}
for (var i = 0; listp.length > listp.length - 1; i++) {
  console.log(i);
  listp[i].style.color = "black";
  if (i === listp.length - 1) break;
}
body.style.backgroundColor = "whitesmoke";
header.style.backgroundColor = "#dbdbdb";
}



function darkMode() {
  for (var i = 0; lista.length > lista.length - 1; i++) {
    console.log(i);
    lista[i].style.color = "white";
    if (i === lista.length - 1) break;
  }
  for (var i = 0; listh.length > listh.length - 1; i++) {
    console.log(i);
    listh[i].style.color = "white";
    if (i === listh.length - 1) break;
  }
  for (var i = 0; listp.length > listp.length - 1; i++) {
    console.log(i);
    listp[i].style.color = "white";
    if (i === listp.length - 1) break;
  }
  body.style.backgroundColor = "#393e46";
  header.style.backgroundColor = "#222831";
  }


function openMenu() {

}
