const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();
const text = require('./const');
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`Ну здравствуй, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}! Скорее жми /help и узнай что я умею`));
bot.help((ctx) => ctx.reply(`У меня есть несколько интересных функций ${text.commands}`));
const id_arr = [
  { mus: './playlist/Imagine Dragons/Imagine Dragons,Bad Liar.mp3' },
  { mus: './playlist/Imagine Dragons/Imagine Dragons,Believer.mp3' },
  { mus: './playlist/Imagine Dragons/Imagine Dragons,Demons.mp3' },
  { mus: './playlist/Imagine Dragons/Imagine Dragons,Monster.mp3' },
  { mus: './playlist/Imagine Dragons/Imagine Dragons,Natural.mp3' },
  { mus: './playlist/Imagine Dragons/Imagine Dragons,Radioactive.mp3' },
  { mus: './playlist/Imagine Dragons/Imagine Dragons,Rise Up.mp3' },
  { mus: './playlist/Imagine Dragons/Imagine Dragons,Thunder.mp3' },
  { mus: './playlist/Imagine Dragons/Imagine Dragons,Walking The Wire.mp3' },
  { mus: './playlist/Imagine Dragons/Imagine Dragons,Whatever It Takes.mp3' }
];
const man_arr = [
  { mus: './playlist/Maneskin/Beggin - Måneskin.mp3' },
  { mus: './playlist/Maneskin/Fear for Nobody - Måneskin.mp3' },
  { mus: './playlist/Maneskin/FOR YOUR LOVE - Måneskin.mp3' },
  { mus: './playlist/Maneskin/Laltra dimensione - Måneskin.mp3' },
  { mus: './playlist/Maneskin/MAMMAMIA - Måneskin.mp3' },
  { mus: './playlist/Maneskin/Måneskin - Are You Ready.mp3' },
  { mus: './playlist/Maneskin/Maneskin - Maneskin - Coraline.mp3' },
  { mus: './playlist/Maneskin/Maneskin con Manuel Agnelli,Amandoti.mp3' },
  { mus: './playlist/Maneskin/Maneskin,I Wanna Be Your Slave.mp3' },
  { mus: './playlist/Maneskin/Maneskin,Moriro da re.mp3' }
];
const noize_arr = [
  { mus: './playlist/Noize MC/Noize MC - В темноте.mp3' },
  { mus: './playlist/Noize MC/Noize MC - Вселенная бесконечна.mp3' },
  { mus: './playlist/Noize MC/Noize MC - Выдыхай.mp3' },
  { mus: './playlist/Noize MC/Noize MC - Грабли.mp3' },
  { mus: './playlist/Noize MC/Noize MC - Детка, послушай.mp3' },
  { mus: './playlist/Noize MC/Noize MC - Жвачка.mp3' },
  { mus: './playlist/Noize MC/Noize MC - Из окна.mp3' },
  { mus: './playlist/Noize MC/Noize MC - На Марсе классно.mp3' },
  { mus: './playlist/Noize MC/Noize MC - Ругань из-за стены.mp3' },
  { mus: './playlist/Noize MC/Noize MC feat. Чача - Устрой дестрой.mp3' }
];
bot.command('playlist', async (ctx) => {
  try {
    id_arr.length = 0;
    id_arr.push(
      { mus: './playlist/Imagine Dragons/Imagine Dragons,Bad Liar.mp3' },
      { mus: './playlist/Imagine Dragons/Imagine Dragons,Believer.mp3' },
      { mus: './playlist/Imagine Dragons/Imagine Dragons,Demons.mp3' },
      { mus: './playlist/Imagine Dragons/Imagine Dragons,Monster.mp3' },
      { mus: './playlist/Imagine Dragons/Imagine Dragons,Natural.mp3' },
      { mus: './playlist/Imagine Dragons/Imagine Dragons,Radioactive.mp3' },
      { mus: './playlist/Imagine Dragons/Imagine Dragons,Rise Up.mp3' },
      { mus: './playlist/Imagine Dragons/Imagine Dragons,Thunder.mp3' },
      { mus: './playlist/Imagine Dragons/Imagine Dragons,Walking The Wire.mp3' },
      { mus: './playlist/Imagine Dragons/Imagine Dragons,Whatever It Takes.mp3' }
    );
    man_arr.length = 0;
    man_arr.push(
      { mus: './playlist/Maneskin/Beggin - Måneskin.mp3' },
      { mus: './playlist/Maneskin/Fear for Nobody - Måneskin.mp3' },
      { mus: './playlist/Maneskin/FOR YOUR LOVE - Måneskin.mp3' },
      { mus: './playlist/Maneskin/Laltra dimensione - Måneskin.mp3' },
      { mus: './playlist/Maneskin/MAMMAMIA - Måneskin.mp3' },
      { mus: './playlist/Maneskin/Måneskin - Are You Ready.mp3' },
      { mus: './playlist/Maneskin/Maneskin - Maneskin - Coraline.mp3' },
      { mus: './playlist/Maneskin/Maneskin con Manuel Agnelli,Amandoti.mp3' },
      { mus: './playlist/Maneskin/Maneskin,I Wanna Be Your Slave.mp3' },
      { mus: './playlist/Maneskin/Maneskin,Moriro da re.mp3' }
    );
    noize_arr.length = 0;
    noize_arr.push(
      { mus: './playlist/Noize MC/Noize MC - В темноте.mp3' },
      { mus: './playlist/Noize MC/Noize MC - Вселенная бесконечна.mp3' },
      { mus: './playlist/Noize MC/Noize MC - Выдыхай.mp3' },
      { mus: './playlist/Noize MC/Noize MC - Грабли.mp3' },
      { mus: './playlist/Noize MC/Noize MC - Детка, послушай.mp3' },
      { mus: './playlist/Noize MC/Noize MC - Жвачка.mp3' },
      { mus: './playlist/Noize MC/Noize MC - Из окна.mp3' },
      { mus: './playlist/Noize MC/Noize MC - На Марсе классно.mp3' },
      { mus: './playlist/Noize MC/Noize MC - Ругань из-за стены.mp3' },
      { mus: './playlist/Noize MC/Noize MC feat. Чача - Устрой дестрой.mp3' }
    );

    await ctx.replyWithHTML('<b>Выбери исполнителя</b>', Markup.inlineKeyboard([
      [Markup.button.callback('Imagine Dragons', 'btn_id')],
      [Markup.button.callback('Maneskin', 'btn_man')],
      [Markup.button.callback('Noize MC', 'btn_noize')]
    ]));
  } catch (e) {
    console.error(e);
  }
});
const idMus = {};
const manMus = {};
const noizeMus = {};
bot.on('sticker', async (ctx) => {
  const chatId = ctx.chat.id;
  if (idMus[chatId] && !manMus[chatId] && !noizeMus[chatId]) {
    await ctx.replyWithSticker('CAACAgIAAxkBAAEJDM9kagb9g2_t8JpG4T4ylM3HCMIO5gACAQADORN4HYAqvXowmv1nLwQ');
    await ctx.replyWithHTML(
      '<b>Жми ⏭ для следующего трека</b>',
      Markup.inlineKeyboard([[Markup.button.callback('⏭', 'btn_more_id')]])
    );
  } else if (manMus[chatId] && !idMus[chatId] && !noizeMus[chatId]) {
    await ctx.replyWithSticker('CAACAgIAAxkBAAEJDNNkagcFxt5KkyM-TuaxXygC9gVYXQACCQADORN4HSDDnqxxjOLdLwQ');
    await ctx.replyWithHTML(
      '<b>Жми ⏭ для следующего трека</b>',
      Markup.inlineKeyboard([[Markup.button.callback('⏭', 'btn_more_man')]])
    );
  } else if (noizeMus[chatId] && !manMus[chatId] && !idMus[chatId]) {
    await ctx.replyWithSticker('CAACAgIAAxkBAAEJDNVkagcQ_9OyqoAJXeTbXHWcM5tH2wACEAADORN4HTnP3cPaPTF1LwQ');
    await ctx.replyWithHTML(
      '<b>Жми ⏭ для следующего трека</b>',
      Markup.inlineKeyboard([[Markup.button.callback('⏭', 'btn_more_noize')]])
    );
  }
});
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
bot.action('btn_id', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    shuffleArray(id_arr);
    const randomPair = id_arr.shift();
    delete manMus[ctx.chat.id];
    delete noizeMus[ctx.chat.id];
    idMus[ctx.chat.id] = {
      music: randomPair.mus
    };

    if (randomPair) {
      await ctx.replyWithAudio({ source: randomPair.mus })
      await ctx.replyWithHTML('<b>Жми ⏭ для следующего трека</b>', Markup.inlineKeyboard([
        [Markup.button.callback('⏭', 'btn_more_id')]
      ]));
      currentAudio =  randomPair.mus;
    } else {
      await ctx.reply('А всё... 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
bot.action('btn_man', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    shuffleArray(man_arr);
    const randomPair = man_arr.shift();
    delete idMus[ctx.chat.id];
    delete noizeMus[ctx.chat.id];
    manMus[ctx.chat.id] = {
      music: randomPair.mus
    };
    if (randomPair) {
      await ctx.replyWithAudio({ source: randomPair.mus })
      await ctx.replyWithHTML('<b>Жми ⏭ для следующего трека</b>', Markup.inlineKeyboard([
        [Markup.button.callback('⏭', 'btn_more_man')]
      ]));
      currentAudio =  randomPair.mus;
    } else {
      await ctx.reply('А всё... 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
bot.action('btn_noize', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    shuffleArray(noize_arr);
    const randomPair = noize_arr.shift();
    delete idMus[ctx.chat.id];
    delete manMus[ctx.chat.id];
    noizeMus[ctx.chat.id] = {
      music: randomPair.mus
    };
    if (randomPair) {
      await ctx.replyWithAudio({ source: randomPair.mus })
      await ctx.replyWithHTML('<b>Жми ⏭ для следующего трека</b>', Markup.inlineKeyboard([
        [Markup.button.callback('⏭', 'btn_more_noize')]
      ]));
      currentAudio =  randomPair.mus;
    } else {
      await ctx.reply('А всё... 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
bot.action('btn_more_id', async (ctx) => {
  try {
    await ctx.answerCbQuery();

    if (id_arr.length === 0) {
      await ctx.reply('А всё... 🥲');
      return;
    }
    shuffleArray(id_arr);
    const randomPair = id_arr.shift(); 
    if (randomPair) {
      await ctx.replyWithAudio({ source: randomPair.mus })
      await ctx.replyWithHTML('<b>Жми ⏭ для следующего трека</b>', Markup.inlineKeyboard([
        [Markup.button.callback('⏭', 'btn_more_id')]
      ]));
      currentAudio =  randomPair.mus;
    } else {
      await ctx.reply('А всё... 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
bot.action('btn_more_man', async (ctx) => {
  try {
    await ctx.answerCbQuery();

    if (man_arr.length === 0) {
      await ctx.reply('А всё... 🥲');
      return;
    }
    shuffleArray(man_arr);
    const randomPair = man_arr.shift(); 
    if (randomPair) {
      await ctx.replyWithAudio({ source: randomPair.mus })
      await ctx.replyWithHTML('<b>Жми ⏭ для следующего трека</b>', Markup.inlineKeyboard([
        [Markup.button.callback('⏭', 'btn_more_man')]
      ]));
      currentAudio =  randomPair.mus;
    } else {
      await ctx.reply('А всё... 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
bot.action('btn_more_noize', async (ctx) => {
  try {
    await ctx.answerCbQuery();

    if (noize_arr.length === 0) {
      await ctx.reply('А всё... 🥲');
      return;
    }
    shuffleArray(noize_arr);
    const randomPair = noize_arr.shift(); 
    if (randomPair) {
      await ctx.replyWithAudio({ source: randomPair.mus })
      await ctx.replyWithHTML('<b>Жми ⏭ для следующего трека</b>', Markup.inlineKeyboard([
        [Markup.button.callback('⏭', 'btn_more_noize')]
      ]));
      currentAudio =  randomPair.mus;
    } else {
      await ctx.reply('А всё... 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
const love_arr = [
  { image: './jokes_img/love/1.jpg', joke: `<i>— Нам надо расстаться. я не совсем тот, кто тебе нужен…\n— А кто мне нужен?\n— Психотерапевт.</i>` },
  { image: './jokes_img/love/2.jpg', joke: `<i>— Мы встречаемся уже год, думаю, пора поговорить о браке и о детях.\n— Я тебя слушаю, дорогой.\n— Знаешь, я женат и у меня двое детей.</i>` },
  { image: './jokes_img/love/3.jpg', joke: `<i>— Знаешь, сегодня была чудесная погода. Пели птички, светило ярко солнышко, чистый воздух. И тут я вспомнил о тебе. Как дела, прекрасное создание?\n— Норм.</i>` },
  { image: './jokes_img/love/4.jpg', joke: `<i>— Извини, не могла бы ты пару дней побыть холодной сукой, чтобы я вновь к тебе хоть что-то почувствовал.</i>` },
  { image: './jokes_img/love/5.jpg', joke: `<i>Если у тебя в животе бабочки, значит ты сытая птица.</i>` },
  { image: './jokes_img/love/6.jpg', joke: `<i>Если в отношениях вы не толстеете, то это фигня какая-то, а не отношения. Скорей всего, вас просто не любят. Хорошенько подумайте над этим.</i>` },
  { image: './jokes_img/love/7.jpg', joke: `<i>— Дорогой, а я у тебя одна такая единственная на всем белом свете?!\n— Конечно! Второй я такой не вынесу.</i>` },
  { image: './jokes_img/love/8.jpg', joke: `<i>— Тебя кто-нибудь любит?\n— Ага, проблемы!</i>` },
  { image: './jokes_img/love/9.jpg', joke: `<i>— Почему ты так себя любишь?\n— Из соображений психологического комфорта — было бы очень неудобно прожить всю жизнь с нелюбимым человеком!</i>` },
  { image: './jokes_img/love/10.jpg', joke: `<i>— У тебя на уме одни сериалы. Я ухожу!\n— Но мы вместе уже пять сезонов!</i>` }
];
const children_arr = [
  { image: './jokes_img/children/1.jpg', joke: `<i>— Мои родители относятся ко мне как к Богу. Они в меня не верят…</i>` },
  { image: './jokes_img/children/2.jpg', joke: `<i>Мама:\n — Тётя Света уходит, что нужно сказать?\nСын:\n — Не знаю.\nМама:\n — Ну, а что я всегда говорю?\nСын:\n — Ушла, наконец-то, дура тупая! Опять всю колбасу и сыр сожрала!</i>` },
  { image: './jokes_img/children/3.jpg', joke: `<i>Встретились женская идеальная интуиция и гениальная мужская логика и получилась у них детская посредственность.</i>` },
  { image: './jokes_img/children/4.jpg', joke: `<i>— Ты почему мне грубишь, Алёна? Я тебе мать или нет?\n— Блин, откуда я знаю?</i>` },
  { image: './jokes_img/children/5.jpg', joke: `<i>— Мам, познакомься! Это Леша.\n— Леночка, ты ж собаку хотела!..</i>` },
  { image: './jokes_img/children/6.jpg', joke: `<i>— Может, поужинаем сегодня вечером?\n— Прости, меня не интересуют парни ниже 180.\n— Мам, пожалуйста, я хочу есть.</i>` },
  { image: './jokes_img/children/7.jpg', joke: `<i>Муж купает ребёнка. Орёт из ванной:\n— Лен, он пену жрёт!\nЧерез минуту:\n— Лен, она реально вкусная!</i>` },
  { image: './jokes_img/children/8.jpg', joke: `<i>"Детям нужно наглядно демонстрировать ужасные последствия незащищенных половых связей".\nХм… Но ведь дети и так каждый день видят друг друга.</i>` },
  { image: './jokes_img/children/9.jpg', joke: `<i>Мне тогда было годика три, я тогда спал в комнате родителей, но однажды отец решил, что я уже вырос и начал уговаривать меня, спать в комнате у бабушки, на, что я ответил:\n— А давай папа, ты спи со своей мамой, а я со своей.</i>` },
  { image: './jokes_img/children/10.jpg', joke: `<i>Сейчас у девятилетних детей айфоны, айпады, фейсбук, вк…\nКогда мне было 9 лет, я бил крапиву палкой и мне было весело!</i>` }
];
const school_arr = [
  { image: './jokes_img/school/1.jpg', joke: `<i>— Папа, я решил бросить учебу.\n— Тогда запомни две вещи, сын.\n— Какие?\n— "Слушаюсь, товарищ сержант!" надо говорить без улыбки, а "Свободная касса" — с улыбкой.</i>` },
  { image: './jokes_img/school/2.jpg', joke: `<i>— Век живи, век учись!\n— Звучит как проклятие…</i>` },
  { image: './jokes_img/school/3.jpg', joke: `<i>Учиться, учиться и учиться, потому что блата у тебя, к сожалению, нет.</i>` },
  { image: './jokes_img/school/4.jpg', joke: `<i>Как я буду ходить на учебу, если я просыпаюсь, когда она заканчивается?!</i>` },
  { image: './jokes_img/school/5.jpg', joke: `<i>— Смотри, сынок, будешь хорошо учиться — купим тебе компьютер.\n— А если я буду плохо учиться?\n— Тогда пианино</i>` },
  { image: './jokes_img/school/6.jpg', joke: `<i>Учеба для нас праздник! А в праздник мы отдыхаем!</i>` },
  { image: './jokes_img/school/7.jpg', joke: `<i>Учебный год как беременность: длится девять месяцев, а тошнить начинает уже со второй недели.</i>` },
  { image: './jokes_img/school/8.jpg', joke: `<i>— Мам, а вот Артёмкины родители ему деньги дают за учёбу: за "пятёрку" — 1000 рублей, за "четвёрку" — 500 рублей, за "тройку" — отнимают 500 рублей, за "двойку" — отнимают 1000 рублей…\n— Ну, и много ли твой Артёмка заработал?\n— Нет, он сейчас на автомойке долг родителям отрабатывает…</i>` },
  { image: './jokes_img/school/9.jpg', joke: `<i>Утром в постели: Просыпаешься, смотришь на часы — 5:23. На 5 минут закрываешь глаза, открываешь — 8:55.\nНа учебе: Смотришь на часы — 9:30. На 5 минут закрываешь глаза, открываешь — 9:30.</i>` },
  { image: './jokes_img/school/10.jpg', joke: `<i>Ученье свет — а за свет надо платить.</i>` }
];
bot.command('jokes', async (ctx) => {
  try {
    love_arr.length = 0;
    love_arr.push(
      { image: './jokes_img/love/1.jpg', joke: `<i>— Нам надо расстаться. я не совсем тот, кто тебе нужен…\n— А кто мне нужен?\n— Психотерапевт.</i>` },
      { image: './jokes_img/love/2.jpg', joke: `<i>— Мы встречаемся уже год, думаю, пора поговорить о браке и о детях.\n— Я тебя слушаю, дорогой.\n— Знаешь, я женат и у меня двое детей.</i>` },
      { image: './jokes_img/love/3.jpg', joke: `<i>— Знаешь, сегодня была чудесная погода. Пели птички, светило ярко солнышко, чистый воздух. И тут я вспомнил о тебе. Как дела, прекрасное создание?\n— Норм.</i>` },
      { image: './jokes_img/love/4.jpg', joke: `<i>— Извини, не могла бы ты пару дней побыть холодной сукой, чтобы я вновь к тебе хоть что-то почувствовал.</i>` },
      { image: './jokes_img/love/5.jpg', joke: `<i>Если у тебя в животе бабочки, значит ты сытая птица.</i>` },
      { image: './jokes_img/love/6.jpg', joke: `<i>Если в отношениях вы не толстеете, то это фигня какая-то, а не отношения. Скорей всего, вас просто не любят. Хорошенько подумайте над этим.</i>` },
      { image: './jokes_img/love/7.jpg', joke: `<i>— Дорогой, а я у тебя одна такая единственная на всем белом свете?!\n— Конечно! Второй я такой не вынесу.</i>` },
      { image: './jokes_img/love/8.jpg', joke: `<i>— Тебя кто-нибудь любит?\n— Ага, проблемы!</i>` },
      { image: './jokes_img/love/9.jpg', joke: `<i>— Почему ты так себя любишь?\n— Из соображений психологического комфорта — было бы очень неудобно прожить всю жизнь с нелюбимым человеком!</i>` },
      { image: './jokes_img/love/10.jpg', joke: `<i>— У тебя на уме одни сериалы. Я ухожу!\n— Но мы вместе уже пять сезонов!</i>` }
    );
    children_arr.length = 0;
    children_arr.push(
      { image: './jokes_img/children/1.jpg', joke: `<i>— Мои родители относятся ко мне как к Богу. Они в меня не верят…</i>` },
      { image: './jokes_img/children/2.jpg', joke: `<i>Мама:\n — Тётя Света уходит, что нужно сказать?\nСын:\n — Не знаю.\nМама:\n — Ну, а что я всегда говорю?\nСын:\n — Ушла, наконец-то, дура тупая! Опять всю колбасу и сыр сожрала!</i>` },
      { image: './jokes_img/children/3.jpg', joke: `<i>Встретились женская идеальная интуиция и гениальная мужская логика и получилась у них детская посредственность.</i>` },
      { image: './jokes_img/children/4.jpg', joke: `<i>— Ты почему мне грубишь, Алёна? Я тебе мать или нет?\n— Блин, откуда я знаю?</i>` },
      { image: './jokes_img/children/5.jpg', joke: `<i>— Мам, познакомься! Это Леша.\n— Леночка, ты ж собаку хотела!..</i>` },
      { image: './jokes_img/children/6.jpg', joke: `<i>— Может, поужинаем сегодня вечером?\n— Прости, меня не интересуют парни ниже 180.\n— Мам, пожалуйста, я хочу есть.</i>` },
      { image: './jokes_img/children/7.jpg', joke: `<i>Муж купает ребёнка. Орёт из ванной:\n— Лен, он пену жрёт!\nЧерез минуту:\n— Лен, она реально вкусная!</i>` },
      { image: './jokes_img/children/8.jpg', joke: `<i>"Детям нужно наглядно демонстрировать ужасные последствия незащищенных половых связей".\nХм… Но ведь дети и так каждый день видят друг друга.</i>` },
      { image: './jokes_img/children/9.jpg', joke: `<i>Мне тогда было годика три, я тогда спал в комнате родителей, но однажды отец решил, что я уже вырос и начал уговаривать меня, спать в комнате у бабушки, на, что я ответил:\n— А давай папа, ты спи со своей мамой, а я со своей.</i>` },
      { image: './jokes_img/children/10.jpg', joke: `<i>Сейчас у девятилетних детей айфоны, айпады, фейсбук, вк…\nКогда мне было 9 лет, я бил крапиву палкой и мне было весело!</i>` }
    );
    school_arr.length = 0;
    school_arr.push(
      { image: './jokes_img/school/1.jpg', joke: `<i>— Папа, я решил бросить учебу.\n— Тогда запомни две вещи, сын.\n— Какие?\n— "Слушаюсь, товарищ сержант!" надо говорить без улыбки, а "Свободная касса" — с улыбкой.</i>` },
      { image: './jokes_img/school/2.jpg', joke: `<i>— Век живи, век учись!\n— Звучит как проклятие…</i>` },
      { image: './jokes_img/school/3.jpg', joke: `<i>Учиться, учиться и учиться, потому что блата у тебя, к сожалению, нет.</i>` },
      { image: './jokes_img/school/4.jpg', joke: `<i>Как я буду ходить на учебу, если я просыпаюсь, когда она заканчивается?!</i>` },
      { image: './jokes_img/school/5.jpg', joke: `<i>— Смотри, сынок, будешь хорошо учиться — купим тебе компьютер.\n— А если я буду плохо учиться?\n— Тогда пианино</i>` },
      { image: './jokes_img/school/6.jpg', joke: `<i>Учеба для нас праздник! А в праздник мы отдыхаем!</i>` },
      { image: './jokes_img/school/7.jpg', joke: `<i>Учебный год как беременность: длится девять месяцев, а тошнить начинает уже со второй недели.</i>` },
      { image: './jokes_img/school/8.jpg', joke: `<i>— Мам, а вот Артёмкины родители ему деньги дают за учёбу: за "пятёрку" — 1000 рублей, за "четвёрку" — 500 рублей, за "тройку" — отнимают 500 рублей, за "двойку" — отнимают 1000 рублей…\n— Ну, и много ли твой Артёмка заработал?\n— Нет, он сейчас на автомойке долг родителям отрабатывает…</i>` },
      { image: './jokes_img/school/9.jpg', joke: `<i>Утром в постели: Просыпаешься, смотришь на часы — 5:23. На 5 минут закрываешь глаза, открываешь — 8:55.\nНа учебе: Смотришь на часы — 9:30. На 5 минут закрываешь глаза, открываешь — 9:30.</i>` },
      { image: './jokes_img/school/10.jpg', joke: `<i>Ученье свет — а за свет надо платить.</i>` }
    )
    await ctx.replyWithHTML('<b>Выбери анектод</b>', Markup.inlineKeyboard([
      [Markup.button.callback('Про любовь', 'btn_love_joke')],
      [Markup.button.callback('Про детей', 'btn_children_joke')],
      [Markup.button.callback('Про школу', 'btn_school_joke')]
    ]));
  } catch (e) {
    console.error(e);
  }
});
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
bot.action('btn_love_joke', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    shuffleArray(love_arr);

    const randomPair = love_arr.shift();

    if (randomPair) {
      await ctx.replyWithPhoto({ source: randomPair.image });
      await ctx.replyWithHTML(randomPair.joke);
      await ctx.replyWithHTML('<b>Хочешь ещё?</b>', Markup.inlineKeyboard([
        [Markup.button.callback('Ещё', 'btn_more_love')]
      ]));
    } else {
      await ctx.reply('Больше шуток про любовь нет 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
bot.action('btn_more_love', async (ctx) => {
  try {
    await ctx.answerCbQuery();

    if (love_arr.length === 0) {
      await ctx.reply('Больше шуток про любовь нет 🥲');
      return;
    }
    shuffleArray(love_arr);
    const randomPair = love_arr.shift(); 
    if (randomPair) {
      await ctx.replyWithPhoto({ source: randomPair.image });
      await ctx.replyWithHTML(randomPair.joke);
      await ctx.replyWithHTML('<b>Хочешь ещё?</b>', Markup.inlineKeyboard([
        [Markup.button.callback('Ещё', 'btn_more_love')]
      ]));
    } else {
      await ctx.reply('Больше шуток про любовь нет 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
bot.action('btn_children_joke', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    shuffleArray(children_arr);

    const randomPair = children_arr.shift();

    if (randomPair) {
      await ctx.replyWithPhoto({ source: randomPair.image });
      await ctx.replyWithHTML(randomPair.joke);
      await ctx.replyWithHTML('<b>Хочешь ещё?</b>', Markup.inlineKeyboard([
        [Markup.button.callback('Ещё', 'btn_more_children')]
      ]));
    } else {
      await ctx.reply('Больше шуток про детей нет 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
bot.action('btn_more_children', async (ctx) => {
  try {
    await ctx.answerCbQuery();

    if (children_arr.length === 0) {
      await ctx.reply('Больше шуток про детей нет 🥲');
      return;
    }
    shuffleArray(children_arr);
    const randomPair = children_arr.shift(); 
    if (randomPair) {
      await ctx.replyWithPhoto({ source: randomPair.image });
      await ctx.replyWithHTML(randomPair.joke);
      await ctx.replyWithHTML('<b>Хочешь ещё?</b>', Markup.inlineKeyboard([
        [Markup.button.callback('Ещё', 'btn_more_children')]
      ]));
    } else {
      await ctx.reply('Больше шуток про детей нет 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
bot.action('btn_school_joke', async (ctx) => {
  try {
    await ctx.answerCbQuery();
    shuffleArray(school_arr);

    const randomPair = school_arr.shift();

    if (randomPair) {
      await ctx.replyWithPhoto({ source: randomPair.image });
      await ctx.replyWithHTML(randomPair.joke);
      await ctx.replyWithHTML('<b>Хочешь ещё?</b>', Markup.inlineKeyboard([
        [Markup.button.callback('Ещё', 'btn_more_school')]
      ]));
    } else {
      await ctx.reply('Больше шуток про школу нет 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
bot.action('btn_more_school', async (ctx) => {
  try {
    await ctx.answerCbQuery();

    if (school_arr.length === 0) {
      await ctx.reply('Больше шуток про школу нет 🥲');
      return;
    }
    shuffleArray(school_arr);
    const randomPair = school_arr.shift(); 
    if (randomPair) {
      await ctx.replyWithPhoto({ source: randomPair.image });
      await ctx.replyWithHTML(randomPair.joke);
      await ctx.replyWithHTML('<b>Хочешь ещё?</b>', Markup.inlineKeyboard([
        [Markup.button.callback('Ещё', 'btn_more_school')]
      ]));
    } else {
      await ctx.reply('Больше шуток про школу нет 🥲');
    }
  } catch (e) {
    console.error(e);
  }
});
const riddles = [
  { question: `Речка вышла из ума — По домам пошла сама.`, answer: 'Водопровод' },
  { question: `Что увеличивается, но никогда не уменьшается?`, answer: 'Возраст' },
  { question: `Что можно прервать или уничтожить, но никогда не увидеть?`, answer: 'Молчание' },
  { question: `Что можно удерживать, не касаясь его руками?`, answer: 'Дыхание' },
  { question: `Назови ее по имени и она исчезнет`, answer: 'Тишина' },
  { question: `Что не жует, но все пожирает?`, answer: 'Огонь' },
  { question: `Куда я, туда и она`, answer: 'Тень' },
  { question: `Какое слово всегда звучит неверно?`, answer: 'Неверно' },
  { question: `Сколько лет в году?`, answer: 'Одно' },
  { question: `Кто говорит на всех языках?`, answer: 'Эхо' },
];
const userRiddles = {};
bot.command('riddle', async (ctx) => {
  try {
    const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
    userRiddles[ctx.chat.id] = {
      riddle: randomRiddle.question,
      answer: randomRiddle.answer,
    };
    await ctx.reply(randomRiddle.question);
  } catch (e) {
    console.error(e);
  }
});
bot.on('text', async (ctx) => {
  try {
    const chatId = ctx.chat.id;
    const response = ctx.message.text;
    if (userRiddles[chatId]) {
      const { answer } = userRiddles[chatId];

      if (response.toLowerCase() === answer.toLowerCase()) {
        await ctx.reply('Правильно! Держи тортик 🎂');
        await ctx.reply('Жмакай /riddle для следующей загадки 😏');
        delete userRiddles[chatId];
      } else {
        await ctx.reply('А вот и нет 🤪. Попробуй ещё раз 🤞');
      }
    }
  } catch (e) {
    console.error(e);
  }
});
bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));