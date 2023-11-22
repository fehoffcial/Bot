require('dotenv').config();
const { Telegraf }= require('telegraf');
const bot = new Telegraf("6976106927:AAGdjD1kXC50CZdT3VUhMjAEAZddFfSyS6M");
async function AntrazGangBot(){
    bot.on('new_chat_members', (ctx) => {
        ctx.replyWithHTML(`<i>Olá <b>${ctx.from.first_name}</b>, seja bem-vindo a nossa comunidade, aqui é um grupo onde você pode interagir com outros programadores e dev's, fique à vontade!😁\nPara não ser advertido ou banido do grupo, cumpra as <b>/regras</b>.\n\nPrecisa de suporte para tirar dúvidas ou reportar um lotter? Chame um dos administradores.\n<b>@Antrazs 🥷🏿</b>\n<b>@Sparrowxl 🥷🏾</b>\n<b>@TheCunningX 🥷🏾</b>\n\nPara consultar todos os comandos do grupo, digite: <b>/comandos</b></i>`)
    });
    bot.command('regras', (ctx) => {
        ctx.replyWithHTML(`🔺<b>REGRAS BÁSICAS </b>🔻\n<i>❌<b>NÃO É PERMITIDO VENDAS DE TERCEIROS SEM A PERMISSÃO DO ADMINISTRADOR.</b>\n❌<b>NÃO ACEITAMOS NENHUM GIF/MÍDIA QUE CONTENHAM CONTEÚDOS SEXUAIS/NUDEZ DE PESSOAS.</b>\n❌<b>NÃO É PERMITIDO A DIVULGAÇÃO DE LINKS DE OUTROS CHECKERS.</b>\n❌<b>POR FAVOR RESPEITE OS MEMBROS DO GRUPO E PRINCIPALMENTE OS MODERADORES, CASO DE DESRESPEITO SOMOS OBRIGADO A TIRAR DO GRUPO.</b>\n❌<b>NÃO DIVULGUE LINKS DE COISAS FALSAS/MARKETING QUE PROMOVAM DINHEIRO FALSO PARA OS MEMBROS.</b>\n❌<b>NÃO REALIZE TESTE DE CARTÕES GERADOS, ISSO IRÁ LEVAR VOCÊ A SER BANIDO DO GRUPO.\n⚠️Em caso de denúncia ou de golpe "lotter": /denunciar</b></i>\n`)
    })
    bot.command('comandos', (ctx) => {
        ctx.replyWithHTML(`🔺<b>TODOS OS COMANDOS</b>🔻\n<i><b>/regras</b> - Mostra as regras do grupo!😄\n<b>/suporte</b> - Mostra o @ dos moderadores e administradores para caso tenha identificado um lotter ou tenha alguma dúvida.😁\n<b>/tabela</b> - Mostra os produtos disponíveis.\n<b>/comandos</b> - Mostra todos os comandos do BOT @AntrazGangBOT</i>`)
    })
    bot.command('denunciar', (ctx) => {
        ctx.replyWithHTML(`<b>ATENÇÃO CAROS PARTICIPANTES!</b>\n\n<i>ESTE GRUPO ESTÁ LIBERADO APENAS O BATE PAPO ENTRE OS INTEGRANTES, VENDAS OU DIVULGAÇÃO SÃO PROIBIDAS❌\nPOREM, EM CASOS DE GOLPES/LOTTERS CHAMEM O @ PARA DENUNCIAR COM ID E USER DA PESSOA\n\n❗️MANDEM PROVAS❗️\n\n-USER + ID \n- PROVAS MOSTRANDO CONVERSAS E COMPROVANTES ( ESTES IRÃO SER ENVIADOS PRA DENÚNCIA NO @)</i>`, {
            reply_markup:{
              inline_keyboard:[
                [
                    {text:"Sparrowxl 👨‍💻", url:"https://t.me/Sparrowxl"},
                    {text:"Antrazs 💎", url:"https://t.me/Antrazs"},
                    {text:"Cunningx ⚒", url:"https://t.me/thecunningx"},
            ]
              ]
            }
          })
    })
    bot.startPolling();
}
AntrazGangBot();