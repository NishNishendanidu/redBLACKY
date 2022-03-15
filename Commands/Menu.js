let DataPack = require('red-blacky'); 

let RedBlacky = require('red-blacky-pro/sources/dc/handler');

let Details = require('red-blacky/sources/dc/Details');

let {sendMessageAllMenupv,sendMessageAllMenupb, sendMessageonemenupv,sendMessageonemenupb } = require('red-blacky/sources/dc/cmd/menu')

let WorkType = Details.WORKTYPE == 'public' ? false : true

RedBlacky['IntroduceCMD']({

        pattern: 'help ?(.*)', 

        fromMe: false, 

        dontAdCommandList: true,

        }, 

(async (BlackyRed,input) => { 

if(Details.WORKTYPE !== 'public') return;

await sendMessageAllMenupb(QueenSew,input)

})); 

RedBlacky['IntroduceCMD']({

        pattern: 'help ?(.*)', 

        fromMe: true, 

        dontAdCommandList: true,

        }, 

(async (BlackyRed,input) => { 

await sendMessageAllMenupv(QueenSew,input)

})); 

RedBlacky['IntroduceCMD']({

        pattern: 'list ?(.*)', 

        fromMe: false, 

        dontAdCommandList: true,

        }, 

(async (BlackyRed,input) => { 

if(Details.WORKTYPE !== 'public') return;

await sendMessageAllMenupb(BlackyRed,input)

})); 

RedBlacky['IntroduceCMD']({

        pattern: 'list ?(.*)', 

        fromMe: true, 

        dontAdCommandList: true,

        }, 

(async (BlackyRed,input) => { 

await sendMessageAllMenupv(BlackyRed,input)

})); 

RedBlacky['IntroduceCMD']({

        pattern: 'cmd ?(.*)', 

        fromMe: false, 

        dontAdCommandList: true,

        }, 

(async (BlackyRed,input) => { 

if(Details.WORKTYPE !== 'public') return;

await sendMessageAllMenupb(BlackyRed,input)

})); 

RedBlacky['IntroduceCMD']({

        pattern: 'cmd ?(.*)', 

        fromMe: true, 

        dontAdCommandList: true,

        }, 

(async (BlackyRed.input) => { 

await sendMessageAllMenupv(QueenSew,input)

})); 

RedBlacky['IntroduceCMD']({

        pattern: 'මෙනු ?(.*)', 

        fromMe: false, 

        dontAdCommandList: true,

        }, 

(async (BlackyRed,input) => { 

if(Details.WORKTYPE !== 'public') return;

await sendMessageAllMenupb(BlackyRed,input)

})); 

RedBlacky['IntroduceCMD']({

        pattern: 'මෙනු ?(.*)', 

        fromMe: true, 

        dontAdCommandList: true,

        }, 

(async (BlackyRed,input) => { 

await sendMessageAllMenupv(BlackyRed,input)

})); 

RedBlacky['IntroduceCMD']({

        pattern: 'menu ?(.*)', 

        fromMe: false, 

        dontAdCommandList: true,

        }, 

(async (BlackyRed,input) => { 

if(Details.WORKTYPE !== 'public') return;

await sendMessageAllMenupb(BlackyRed,input)

})); 

RedBlacky['IntroduceCMD']({

        pattern: 'menu ?(.*)', 

        fromMe: true, 

        dontAdCommandList: true,

        }, 

(async (RedBlacky,input) => { 

await sendMessageAllMenupv(BlackyRed,input)

})); 

SewQueen['IntroduceCMD']({

        pattern: 'letcmd ?(.*)', 

        fromMe: false, 

        dontAdCommandList: true,

        }, 

(async (BlackyRed.,input) => { 

if(Details.WORKTYPE !== 'public') return;

await sendMessageonemenupb(BlackyRed,input)

})); 

RedBlacky['IntroduceCMD']({

        pattern: 'letcmd ?(.*)', 

        fromMe: true, 

        dontAdCommandList: true,

        }, 

(async (BlackyRed,input) => { 

await sendMessageonemenupv(QueenSew,input)

})); 
