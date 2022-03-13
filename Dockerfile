FROM nishnishendanidu/redblacky:fullcontrol 

RUN git clone https://github.com/NishNishendanidu/redblacky/root/RedBlackyWhatsappBot

WORKDIR /root/BlackyRedWhatsappBot/

ENV TZ=Asia/Colombo

RUN npm install supervisor -g

RUN yarn install --no-audit 

CMD ["node", "bot.js"]
