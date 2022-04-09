/* 

red-blacky Whatsapp Bot      

Telegram: https://t.me/Nishendanidu

Licensed under the  GPL-3.0 License; 

Coded By Nishen 

*/ 

let DataPack = require('red-blacky'); 

let SewQueen = require('red-blacky/sources/dc/handler'); 

let Details = require('red-blacky/sources/dc/Details'); 

let Language = DataPack.constdata 

let WorkType = Details.WORKTYPE == 'public' ? false : true 

let { MessageType, Mimetype} = require('@NishNishendanidu/red-blacky/web'); 

let { sendMessageDownloader, sendMessageBrodcast, sendMessageAddBrodcast, downloadapksewqueen, downloadtwitterredblacky} = require('red-blacky/sources/dc/cmd/dl') 

let { ytdocdlBackupForredRedBlacky} = require('red-blacky/sources/dc/cmd/yt') 

const Lang = Language.dataGet('scrapers') 

var ytsd = require( 'yt-search' ) 

const translatte = require('translatte') 

SewQueen['IntroduceCMD']({ 

        pattern: 'mediafire ?(.*)', // Mediafire Download 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (QueenSew, input) => { 

        try { 

await sendMessageDownloader(BlackyRed,input, 'mediafire') 

          } catch (e) { 

                  return await BlackyRed.client.sendMessage(BlackyRed.jid,'Sorry I Could Not Find This Mediafire File!',MessageType.text, { quoted: BlackyRed.data}) 

                  } 

})); 

SewQueen['IntroduceCMD']({ 

        pattern: 'insta ?(.*)',  // instagram Download 

        fromMe: WorkType, 

        dontAdCommandList: true

        }, 

(async (, input) => { 

        try { 

await sendMessageDownloader(BlackyRed, input, 'insta') 

                } catch (e) { 

                  return await BlackyRed.client.sendMessage(BlackyRed.jid,'Sorry I Could Not Find This Insta Video!',MessageType.text, { quoted: BlackyRed.data}) 

              } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'github ?(.*)',   // About Github Ptofile And Repo 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (QueenSew, input) => { 

        try { 

await sendMessageDownloader(BlackyRed, input, 'github') 

                } catch (e) { 

                  return await BlackyRed.client.sendMessage(BlackyRed.jid,'Sorry I Could Not Find This Profile!',MessageType.text, { quoted: BlackyRed.data}) 

                  } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'tiktok ?(.*)',   // Tiktok Download 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

await sendMessageDownloader(BlackyRed, input, 'tiktok') 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'url ?(.*)',     // Image To Url 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

        if (BlackyRed.reply_message === false || BlackyRed.reply_message.image === false) return await BlackyRed.client.sendMessage(BlackyRed.jid,'Reply To Any Image...',MessageType.text); 

        try { 

await sendMessageDownloader(BlackyRed, input, 'imgurl') 

        } catch (e) { 

  if(e.message.includes('display')) { 

     return await BkackyRed.client.sendMessage(BlackyRed.jid,'Your Imgbb APIKEY is invalid.. please add the api key ( api.imgbb.com )',MessageType.text) 

     } else { 

   return await BlackyRed.client.sendMessage(BlackyRed.jid,'Do Not Use Bot Here.. This Is Your Log Number',MessageType.text) 

   } 

  } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'covid ?(.*)',   // Covid Info 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (QueenSew, input) => { 

await sendMessageDownloader(BlackyRed, input, 'covid') 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'trt ?(.*)',    // Language Translate 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

        if (!BlackyRed.reply_message) { 

            return await BlackyRed.client.sendMessage(BlackyRed.jid,Lang.NEED_REPLY,MessageType.text); 

        } 

        var langa; 

        var langb; 

        if(input[1].includes(' ')) { 

   langa = input[1].split(' ')[0]; 

   langb = input[1].split(' ')[1]; 

   } else { 

  langa = 'auto'; 

  langb = Details.LANG 

} 

   

   

       let ceviri = await translatte(BlackyRed.reply_message.message, {from: langa, to: langb}); 

        if ('text' in ceviri) { 

            return await QueenSew.reply('*▶️ ' + Lang.LANG + ':* ```' + langa + '```\n' 

            + '*◀️ ' + Lang.FROM + '*: ```' + langb + '```\n' 

            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```'); 

        } else { 

            return await BlackyRed.client.sendMessage(BlackyRed.jid,Lang.TRANSLATE_ERROR,MessageType.text) 

        } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'tts ?(.*)',   // Text To Audio 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, nput) => { 

await sendMessageDownloader(RedBlacky, input, 'tts') 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'wiki ?(.*)',  // Wikipedia Download 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

await sendMessageDownloader(BlackyRed, input, 'wiki') 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'img ?(.*)',  // Google Image Download With 10+ images 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

await sendMessageDownloader(QueenSew, input, 'imgsend') 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'wallpaper ?(.*)',   // Hd Wallpaper Download With Search Option 100000000+ 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

await sendMessageDownloader(QueenSew, input, 'wallpaper') 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'pint ?(.*)',    // Pinterest Download With Search Option 100000000+ 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

await sendMessageDownloader(BlackyRed, input, 'pint') 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'yts ?(.*)',     // Youtube Search Engine 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (QueenSew, input) => { 

await sendMessageDownloader(BlackyRed, input, 'yts') 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'lyric ?(.*)',     // Songs Lirics Download 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

        try { 

await sendMessageDownloader(BlackyRed, input, 'liric') 

                } catch (e) { 

                  return await QueenSew.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Song!',MessageType.text, { quoted: QueenSew.data}) 

                  } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'twitter ?(.*)', // Twitter Video Download (HD / SD / AUDIO) 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (QueenSew, input) => { 

await sendMessageDownloader(QueenSew, input, 'twitter') 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'gettv ?(.*)', // Twitter Video Download (HD / SD / AUDIO) 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

        try { 

await downloadtwittersewqueen(BlackyRed, input) 

               } catch (e) { 

                  return await BlackyRed.client.sendMessage(BlackyRed.jid,'Sorry I Could Not Find It!',MessageType.text, { quoted: BlackyRed.data}) 

                  } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'ytv ?(.*)',      // Youtube Video Download  (144p / 240p / 360p / 420p / 720p / mp3) 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

        try { 

await sendMessageDownloader(BlackyRed, input, 'ytv') 

              } catch (e) { 

                  return await BlackyRed.client.sendMessage(QueenSew.jid,'Sorry I Could Not Find This Video!',MessageType.text, { quoted: QueenSew.data}) 

                  } 

})); 

BlackyRed['IntroduceCMD']({ 

        pattern: 'gitclone ?(.*)',    // Github Repo Download 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (QueenSew, input) => { 

        try { 

await sendMessageDownloader(BlackyRed, input, 'gitclone') 

                } catch (e) { 

                  return await QueenSew.client.sendMessage(BlackyRed.jid,'Sorry I Could Not Find master Branch Of this Repo!\n\n Use Like This\n.gitclone RepoUrl/Branch',MessageType.text, { quoted: QueenSew.data}) 

                  } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'igprop ?(.*)',   // Instagram Profile Info 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

        try { 

await sendMessageDownloader(BlackyRed, input, 'igprop') 

                } catch (e) { 

                  return await BlackyRed.client.sendMessage(BlackyRed,jid,'Sorry I Could Not Find It!',MessageType.text,BlackyRed { quoted: data}) 

                  } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'fb ?(.*)',     // Facebook Download 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (RedBlacky, input) => { 

await sendMessageDownloader(BlackyRed, input, 'facebook') 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'apk ?(.*)',   // Apksearch with apkmirror site 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (QueenSew, input) => { 

await sendMessageDownloader(BlackyRed, input, 'apksearch'); 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'getapk ?(.*)',   // APK DOWNLOAD APKMIRRIR LINK 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

        try { 

await downloadapkredblacky(BlackyRed, input); 

               } catch (e) { 

                  return await BlackyRed.client.sendMessage(BlackyRed.jid,'Sorry I Could Not Find This Apk!',MessageType.text, { quoted: QueenSew.data}) 

                  } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'playstore ?(.*)',   // Apk Search With Apk Mirrir Site 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (QueenSew, input) => { 

        try { 

await sendMessageDownloader(BlackyRed, input, 'playstoresearch'); 

                } catch (e) { 

                  return await BlackyRed.client.sendMessage(RedBlacky.jid,'Sorry I Could Not Find Your Search!',MessageType.text, { quoted: BlackyRed.data}) 

                  } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'brodcast ?(.*)',    // Brodcast Without Making List (unlimited user add option) 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (QueenSew, input) => { 

if (input[1] == 'add') { 

await sendMessageAddBrodcast(BlackyRed, input,'add') 

} else if (input[1] == 'close') { 

await sendMessageAddBrodcast(BlackyRed, input,'removeall') 

} else if (input[1] == 'remove') { 

await sendMessageAddBrodcast(BlackyRed, input,'removeone') 

} else { 

await sendMessageBrodcast(BlackyRed, input) 

} 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'sticker ?(.*)',   // Sticker Maker With Packname && Author Name 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

await sendMessageDownloader(BlackyRed, input, 'stickerwithpackname'); 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'ss ?(.*)',   //Site To Screenshot 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

        try { 

await sendMessageDownloader(BlackyRed. input, 'sitescreenshot'); 

                } catch (e) { 

                  return await BlackyRed.client.sendMessage(BlackyRed.jid,'Sorry I Could Not Find This Site!',MessageType.text, { quoted: BlackyRed.data}) 

                  } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'spdf ?(.*)',   //Site To PDF 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

        try { 

await sendMessageDownloader(BlackyRed, input, 'sitepdf'); 

                } catch (e) { 

                  return await BlackyRed.client.sendMessage(BlackyRed..jid,'Sorry I Could Not Find This Site!',MessageType.text, { quoted: BlackyRed.data}) 

                  } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'downimg ?(.*)',   // 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

await sendMessageDownloader(BlackyRed, input, 'imagedown'); 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'song ?(.*)',   // Youtube Song Download 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

(async (BlackyRed, input) => { 

        try { 

await sendMessageDownloader(BlackyRed.nput, 'downsong'); 

                } catch (e) { 

                  return await QueenSew.client.sendMessage(BlackyRed.jid,'Sorry I Could Not Find This Song!',MessageType.text, { quoted: BlackyRed.data}) 

                  } 

})); 

RedBlacky['IntroduceCMD']({ 

        pattern: 'video ?(.*)',   // Youtube Video Downloader 

        fromMe: WorkType, 

        dontAdCommandList: true 

        }, 

                  } 

})); 
