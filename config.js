const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "94761106323" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94785967837";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_30_06_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDcsXG4gICAgICAgIDc5LFxuICAgICAgICA2NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEzLFxuICAgICAgICA2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDg1LFxuICAgICAgICA0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyLFxuICAgICAgICAyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwVDI2MFBIN0JkbEJiRDB2TU9NbnkyS3JIM0ladmpIdXdVYk1WMFZCNE5vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSQmJ3dWp0MFRnS0xBU2J6TmwtbnhBXCIsXG4gIFwicGhvbmVJZFwiOiBcImNkODhlZWU4LWE3NmUtNDI0Yi05YzA1LWE0ZTRmNGQwZTE2YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDYsXG4gICAgICAxODksXG4gICAgICAyNTIsXG4gICAgICAzMyxcbiAgICAgIDExNSxcbiAgICAgIDExMyxcbiAgICAgIDIxLFxuICAgICAgMTY2LFxuICAgICAgMjI2LFxuICAgICAgMTMyLFxuICAgICAgNDQsXG4gICAgICA2MCxcbiAgICAgIDIwMSxcbiAgICAgIDE0MyxcbiAgICAgIDc1LFxuICAgICAgNyxcbiAgICAgIDI1LFxuICAgICAgMTA2LFxuICAgICAgODcsXG4gICAgICAxMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAxNDgsXG4gICAgICAxMTIsXG4gICAgICAxNjMsXG4gICAgICAyNDMsXG4gICAgICAxMixcbiAgICAgIDE4NyxcbiAgICAgIDg2LFxuICAgICAgMTIxLFxuICAgICAgMjUsXG4gICAgICAxOTcsXG4gICAgICAxNTEsXG4gICAgICAxODEsXG4gICAgICAyMDYsXG4gICAgICAyNTIsXG4gICAgICAyMzQsXG4gICAgICAyNixcbiAgICAgIDEyLFxuICAgICAgMTM5LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdFRkVTTDkyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MTEwNjMyMzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MDE5ODMzOTk5NDExOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkdNbnlRUS9xRzFzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRR0pFVG9YRG9OWmFwN3lCeGhuczRNZUlKSnhLMmRXbWV0djlDN3dSeVMwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZTYXJkMXY0TnVEMyswaEpyaDI0ZWs0ME5LMGlXV01YOHZVUXg5UDU1ei9ia0NxSU4wQU52VUpHZ1pKRTBiTnkzNnhJU2I0bDlmeHJ6QU91Rk8yM0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllsKzJvQ0dXUDBnUGZsbW5odFJlZ3lERm4wei9ETzFtRUNBUVFxV1V2MGl0ODY0U05iWmVCMmZJbStHNWZOL2d2c3VKUzdsK2c5N2s1WnAyUDFtaGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYxMTA2MzIzOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NDQwMTk1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
