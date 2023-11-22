require('dotenv').config();
const { Telegraf }= require('telegraf');
const bot = new Telegraf("6976106927:AAGdjD1kXC50CZdT3VUhMjAEAZddFfSyS6M");
async function AntrazGangBot(){
    bot.on('new_chat_members', (ctx) => {
        ctx.replyWithHTML(`<i>Olá <b>${ctx.from.first_name}</b>, seja bem-vindo a nossa comunidade, aqui é um grupo onde você pode interagir com outros programadores e dev's, fique à vontade!😁\nPara não ser advertido ou banido do grupo, cumpra as <b>/regras</b>.\n\nPrecisa de suporte para tirar dúvidas ou reportar um lotter? Digite: <b>/suporte</b>\n\nPara consultar todos os comandos do grupo, digite: <b>/comandos</b></i>`,{
                reply_markup:{
                inline_keyboard:[
                        [
                            {text:"REPOSITÓRIO - ANTRAZCENTRAL 📚", url:"https://t.me/AntrazRepositorio"},
                        ]
                    ]
                }
            }
        )
    });
    bot.command('suporte', (ctx) => {
        ctx.replyWithHTML(`<i>Está precisando de suporte para tirar dúvidas ou denunciar um lotter? <b>Chame um dos administradores nos botões abaixo.</b>🧰\n\nEm caso de dúvidas, chame um administrador e envie uma mensagem com a frase: <b>"Olá, preciso de suporte."</b>\n\nEm caso de denúncias, chame um administrador e envie uma mensagem com a seguinte frase: <b>"Olá, preciso fazer uma denúncia."</b>\n\n<b>Obs</b>: Para denúncia de lotter, envie prints comprovando o golpe; ID e @ do golpista.</i>`, {
                reply_markup:{
                inline_keyboard:[
                        [
                            {text:"Sparrowxl 👨‍💻", url:"https://t.me/Sparrowxl"},
                            {text:"Antrazs 💎", url:"https://t.me/Antrazs"},
                            {text:"Cunningx ⚒", url:"https://t.me/thecunningx"},
                    ]
                ]
                }
            }
        )
    })
    bot.command('regras', (ctx) => {
        ctx.replyWithHTML(`<i>Favor, respeite às normas e regras  abaixo estabelecidas pelos administradores para garantir a harmonia e o respeito entre todos!🚨\n\nEm primeiro lugar, o <b><u>respeito</u></b> deve ser a base das regras, isso é algo indiscutível. É fundamental que todos evitem discursos de ódio, agressões verbais, ou qualquer tipo de comportamento que possa ofender ou desrespeitar os membros e participantes da nossa comunidade.🤝\n\nPARE E PENSE nos <b><u>conteúdos</u></b>, <b><u>imagens</u></b>, <b><u>textos</u></b> e <b><u>mídias</u></b> que você irá mandar no grupo. Se atente à veracidade das informações que compartilha, evitando assim a propagação de notícias <b><u>falsas</u></b>, <b><u>nudez</u></b>, <b><u>fraudes</u></b>, <b><u>links de outros grupos</u></b>, <b><u>URLs</u></b>, <b><u>divulgação</u></b>.🧐\n\nPor fim, a <b><u>colaboração</u></b>. O compartilhamento de conhecimentos e experiências <b><u>enriquece</u></b> a comunidade e fortalece os laços entre os <b><u>participantes</u></b>. Portanto, mantenha uma postura colaborativa e empática, isso é fundamental para que todos possam desfrutar de uma experiência positiva e enriquecedora na nossa <b><u>comunidade</u></b>.🪢\n\nO <b><u>cumprimento</u></b> dessas normas é essencial para a construção de uma <b><u>comunidade saudável</u></b> e <b><u>enriquecedora</u></b>, onde a troca de ideias e a interação entre os membros aconteça de maneira positiva e <b><u>construtiva</u></b>.✅\nViu algum participante do grupo descumprindo essas regras? Digite: <b>/suporte</b> ⚠️</i>`)
    })
    bot.command('comandos', (ctx) => {
        ctx.replyWithHTML(`<i>Comandos do @AntrazGangBOT abaixo!✅\n\n<b>/regras</b> - Mostra as regras do grupo!😄\n\n<b>/suporte</b> - Mostra o @ dos moderadores e administradores para caso tenha identificado um lotter ou tenha alguma dúvida.😁\n\n<b>/tabela</b> - Mostra os produtos disponíveis.\n\n<b>/comandos</b> - Mostra todos os comandos do BOT @AntrazGangBOT</i>`)
    })
    bot.command('tabela', (ctx) => {
        ctx.replyWithHTML(`<i><b>🥷Olá  <b>${ctx.from.first_name}</b>, está a procura de api's, checkers, central, bot's e muito mais?</b>Chame um dos administradores no privado e consulte a tabela de preços!\n<b>Para ser redirecionado ao privado de um dos administradores, selecione um dos perfis abaixo.</b>🧰\n@Antrazs 💎\n@Sparrowxl 👨‍💻\n@TheCunningX ⚒\n\n<b>🔻 APIS 🔻</b>\nMANUTENÇÃO 🟡\n\n<b>🔻 CHECKERS LOGIN 🔻</b>\n✅ AZUL\n✅ LATAM\n✅ SMILES\n✅ UOL MAIL\n✅ NUBANK\n✅ BRADESCO\n✅ ITAÚ\n\n<b>🔻 CHECKERS  🔻</b>\nMANUTENÇÃO 🟡\n\n<b>🔻 LOGINS DISPONÍVEIS  🔻</b>\n✅ SMILES\n\n\<b>🔻  DB  🔻</b>\nESTOQUE VAZIO❌\n\nNão achou a <b><u>PLATAFORMA</u></b> que quer no <b><u>SERVIÇO</u></b> que VOCÊ quer?🤔\n\nContate um dos administradores para consultar o preço do produto que você quer, do jeito que você quer!\n\nAchou seu produto na tabela acima? Chame um admin para consultar os preços.😁</i>`,{
            reply_markup:{
            inline_keyboard:[
                    [
                        {text:"SMILES ✅", callback_data:"smiles"},
                    ]
                ]
            }
        })
    })
    // ! PRÇOS [[[[[[ TEABLEAS ]]]]]]
    bot.action('smiles', (ctx) => {
        ctx.replyWithHTML(`<b>LOGIN E CHECKER SMILES ON✅</b>\n\n<i>O que é <u>Smiles</u>? A <u>Smiles</u> é o programa de fidelidade da <b><u>GOL</u></b> e uma plataforma completa de viagens. Ao se cadastrar, o cliente passa a acumular milhas das mais diferentes formas e podem usá-las para voar com mais de <u>50 companhias</u> aéreas parceiras, reservar hotéis, alugar carros, comprar ingressos de atrações ou passeios turísticos.\n\n🥇<b>15R$ LOGIN OURO</b> - Contém login; senha; cpf; endereço; email; telefone; informações da CC; BIN; Gateway.\n(Todas as informações são do login, não são retirados de puxadas de terceiros.)\n\n🥈<b>10R$ LOGIN PRATA</b> - Contém login; senha; cpf; endereço; email; telefone.\n\n🥉<b>(Sem taxa) LOGIN BRONZE</b> - Contém login; senha.\n\nComo funciona a classe de venda de logins? Independente da quantidade de milhas do seu login, o que vai determinar o sucesso do seu trampo é a classe de login, quanto maior a classe, mais informações adicionais terá.\n\n\n😔<b>VALOR ATUAL DO MILHEIRO</b> (Smiles - GOL) = R$16,00\n😱<b>VALOR ATUAL DO MILHEIRO</b> (Smiles - GOL) na @AntrazCentral = R$2,00\n\n<b>LOGINS DISPONÍVEIS✅</b>\n<b>10K</b> MILHAS - R$20\n<b>50K</b> MILHAS - R$100\n<b>100K</b> MILHAS - R$200\n<b>150K</b> MILHAS - R$285 (05% Desconto.)\n<b>200K</b> MILHAS - R$360 (10% Desconto.)\n<b>250K</b> MILHAS - R$425 (15% Desconto.)\n<b>500K</b> MILHAS - R$820 (18% Desconto.)\n<b>750K</b> MILHAS - R$1200 (20% Desconto.)\n<b>1KK</b> MILHAS - R$1500 (25% Desconto.)\n\n<b>CHECKER DISPONÍVEL</b>✅\n<b>DIARIA LOGINS  -  (R$100)</b>\n<b>SEMANAL LOGINS  - (R$500)</b>\n<b>MENSAL LOGINS  - (R$1500)</b></i>`, {
            reply_markup:{
            inline_keyboard:[
                    [
                        {text:"Sparrowxl 👨‍💻", url:"https://t.me/Sparrowxl"},
                        {text:"Antrazs 💎", url:"https://t.me/Antrazs"},
                        {text:"Cunningx ⚒", url:"https://t.me/thecunningx"},
                    ]
                ]
            }
        }
    )

    });
    bot.startPolling();
}
AntrazGangBot();