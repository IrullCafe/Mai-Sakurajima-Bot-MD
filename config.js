const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = true
global.antitags = false


global.Owner = ['6285731251154']
global.OwnerNumber = ['6285731251154']
global.ownertag = ['6285731251154']
global.BotName = "Itsuki Nakano"
global.packname = "Whatsapp Bot"
global.author = "Itsuki Nakano"
global.OwnerName = "ShoEru"
global.BotSourceCode = "https://nekopoi.care"
global.SupportGroupLink = "https://chat.whatsapp.com"
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ['-'] 


global.location = "isekai"
global.reactmoji = "🌙"
global.themeemoji = "🦋"
global.vidmenu = { url: 'https://media.tenor.com/PGQKCAVKUTkAAAAC/mai-sakurajima-bunny-girl-senpai.gif' }
global.websitex = "https://nekopoi.care"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'Job done...',
    useradmin: 'Sorry, only *Sho Senpai or Group Admins* can use this command *Baka*!',
    botadmin: 'Sorry, i cant execute this command without being an *Admin* of this group.',
    botowner: 'Only my *Owner or Group Admin* can use this command, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Chotto Matte...',
    nolink: 'Please provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You are *Banned* fron using commands!',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert Baka! *Ask Lord Atharv or Group Admin* This is not a NSFW enabled group!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 10,
    monayawal: 0
}
   global.rpg = {
   darahawal: 100,
   besiawal: 0,
   goldawal: 0,
   emeraldawal: 0,
   umpanawal: 0,
   potionawal: 1
}
global.limitawal = {
    rakyat: "Infinity",
    free: 30
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
