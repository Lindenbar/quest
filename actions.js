let actionIndex = 0;

let messages = [
    "АааАААааААААааАаАААА!!!",
    "Ты меня напугала!",
    "Фух... Сейчас... Надо перевести дух.",
    "Spirit. Кха :)",
    "Тебя ведь зовут Галя, верно? Меня зовут Павучок Роберт, приятно познакомиться.",
    "Если ты поможешь мне, то я помогу тебе.",
    "Тут такое дело. Я потерял свою семью, когда пытался угнаться за этой @#!&^* мухой!",
    "Если ты найдешь всех член... члени... членистоногих... Эээ.",
    "А да! Членов моей семьи. Найди их, а я в свою очередь...",
    "Я подглядывал за твоим двуногим самцом и видел какой пароль он установил на этот... Ээээ...",
    "Не знаю что это, похоже на дом. Я бы в нем жил.",
    "Что-то я запаутинилися.",
    "Ой! Запутался.",
    "Короче, найди мою семью и я скажу тебе пароль.",
    "Чтобы тебе проще было найти мой член. Я...",
    "/╲/\\╭(ರರ⌓ರರ)╮/\\╱\\",
    "Извини, я еще плохо знаю человеческий язык.",
    "Сейчас расскажу тебе побольше о членах нашей семьи.",
    "На нас ставили эксперименты в биолаборатории, поэтому мы светимся!",
    "Выключи свет, и убедись в этом сама.",
    "Вот видишь!",
    "Нам нравится как мы светимся, поэтому стараемся обитать в местах, где практически всегда темно.",
    "Каждому павучку присвоили номер в лаборатории.",
    "Чтобы убедиться, что ты их действительно нашла, введи их номера. А я постараюсь рассказать тебе о них побольше."
]

let spider = document.querySelector('.spider');
let music = document.getElementById('music');
let sound = document.getElementById('sound');
let sfx = document.getElementById('sfx');
let message = document.querySelector('.message');
let lamp = document.querySelector('.lamp svg');
let body = document.body;
let light = document.querySelector('.light');
let family = document.querySelector('.family');
let inputs = [...document.querySelectorAll('input')];


music.setAttribute('src', 'media/music.mp3');

spider.onclick = () => {
    switch (actionIndex) {
        case 0:
            spider.classList.remove('dance');
            document.body.classList.remove('dance_floor');
            music.setAttribute('src', 'media/background.mp3');
            sound.setAttribute('src', 'media/scream.mp3');
            message.classList.remove('invisible');
            message.style.width = '100%';
            message.style.padding = '4vw';
            message.setAttribute('data-text', messages[actionIndex]);
            animateWord(message);
            actionIndex += 1;
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 20:
        case 21:
        case 22:
            message.setAttribute('data-text', messages[actionIndex]);
            animateWord(message);
            actionIndex += 1;
            break;
        case 19:
            lamp.classList.remove('hidden');
            lamp.classList.add('visible');
            lamp.onclick = () => {
                actionIndex += 1;
                lamp.querySelector('circle').style.fillOpacity = "0";
                lamp.querySelector('path[fill="#FFD700"]').style.fillOpacity = "0";
                body.style.backgroundColor = "black";
                message.style.backgroundColor = "white";
                spider.click();
                light.classList.remove('hidden');
                lamp.classList.add('hidden');
                spider.querySelector('img').src = 'img/off_spider.png';
            }
            message.setAttribute('data-text', messages[actionIndex]);
            animateWord(message);
            break;
        case 23:
            family.classList.remove('hidden');
            message.setAttribute('data-text', messages[actionIndex]);
            animateWord(message);
            actionIndex += 1;
            break;
        case 24:
            let result = 0;
            inputs.forEach(inp => {
                if (inp.validity.valid) {
                    result += 1;
                }
            });
            if (result === 5) {
                message.setAttribute('data-text', 'Ураааа! Спасибо тебе, добрый человечек. Теперь настала моя очередь, тебе помогать. Код который я подсмотрел у этого двуногого лохмача, который не спал всю ночь 1 7 0');
                animateWord(message);
            } else {
                message.setAttribute('data-text', 'Нем как рыба, пока не найдешь всех моих братьев и сестёр. Ну, ты конечно можешь попытаться отгадать пароль сама.');
                animateWord(message);
            }
    }
}

function animateWord(word) {
    word.innerHTML = '';
    let text = word.dataset.text;
    spider.classList.add('talk');
    spider.classList.add('no-clickable');
    lamp.classList.add('no-clickable');
    inputs.forEach(inp => {
        inp.classList.add('no-clickable');
    });
    sfx.setAttribute('src', 'media/talk.mp3');
    text.split('').forEach((letter, ind) => {
        let div = document.createElement('div');
        if (letter === ' ') {
            div.classList.add('space');
        }
        div.innerHTML = letter;
        setTimeout(() => {
            word.append(div)
        }, ind * 50);
        setTimeout(() => {
            spider.classList.remove('talk');
            spider.classList.remove('no-clickable');
            lamp.classList.remove('no-clickable');
            inputs.forEach(inp => {
                inp.classList.remove('no-clickable');
            });
        }, 50 * text.length);
    });
}

function info(node) {
    message.setAttribute('data-text', node.getAttribute('info'));
    animateWord(message);
}