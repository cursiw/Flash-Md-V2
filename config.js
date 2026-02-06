require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : ['.'],

    NUMBER: process.env.YOUR_NUMBER || '242041029122',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'FLASH-MD',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AR: process.env.AUTO_REACTION || 'off',

    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0gwRzVmRlNGbWZoWGZaV3F3c3Y2ZXZjZHRMQnNYUVF2QTNpT2piM25XTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWEZjem9zcndIRERvb3RHOElET0JjSUFqbFBqeWRKUENUU0lseVpabW5qYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTEFSZ3ZyQWZpYUJOMUx1THZ6QlMxSGhtWTQ1TWlPKzczb3lLQW9qM1VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyL1NPZ3hza3h6eThSTE4vb2hxYklveDFlNmI3WDRqTGg2Z0tPbGw1WlhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdMcDJjcmFLanZnYjhQTTYyQ0J0L3hYSllxa3lOTkJPL2JvRTFIYi9LMUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imx6ZXhadHRjdEUxUnpxcDIxQjdRbUdHcVhHRFdkdVIvVDYxVWpGMVpwVmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR09yVW03ekhyQzh0RGZkalcxZWVqd1ZlL0pGd1c0VGdYOXVQbG1EeHptOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnlWUzdLSEJSSW13eUFKcFZER0pGdkxET3BKa1hPT0x6UGk4VFQ0MWtpYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZXSVJHb0h2QU9uZUErMSthaGhVREFnWUxPa1lkUGJyYWE1OGhZZEw3K0s0NWtNVmV3S1dnMU41bnNobGNNc3B1OUh2Q3dTaDh6WFdibXhKS25FdWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJSQVR4b1dCb05qMlJXM2VMc0tINk1sY3NzSi9vcDJCUmhINFkveWpHT1U4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJRTTM1V1ZUSyIsIm1lIjp7ImlkIjoiMjQyMDQxMDI5MTIyOjE2QHMud2hhdHNhcHAubmV0IiwibGlkIjoiODk3Njk4NTAwNjA5OToxNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tYc29wd0hFS25tbWN3R0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImFjRDUyWGJObFM5OVFJdVhYWEl6bkZIZURTbmxwdmwwdU9pODdMS1B4aUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjQzbHJybW5rYzFEQkhXZTR3THNJV2w0VFAzQU5JTzFZbGRjY1F6Q0s5bFZYOEJQamRzM29OZ1kyeC9MWFBCOG1ITUg2RDROcXJZWGIxYzZHT1JWOEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2YjNFWmNCV3JCWTlSK2N6UGc2cTUvenNFY0MwQ2I5ZUNmWjkxZS94NDFMcTNsaW1RQ3dod250VGc5Rm43VldZRitjcFlJQUk4V3VtU3ZJQ1pVZFpqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MjA0MTAyOTEyMjoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXbkErZGwyelpVdmZVQ0xsMTF5TTV4UjNnMHA1YWI1ZExqb3ZPeXlqOFlpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVRQXhBQSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzA0MTg5ODksImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPaDgifQ==',
    timezone: 'Africa/Nairobi',

    USER_LID: process.env.YOUR_LID || null,

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
