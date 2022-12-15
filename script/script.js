let correct = 0, incorrect = 0, curr = 0;

let dict = [];

const easy_dict = [
    { eng: 'incomparable', uk: 'незрівнянний' },
    { eng: 'man', uk: 'чоловік' },
    { eng: 'for example', uk: 'наприклад' },
    { eng: 'frankly speaking', uk: 'коротше кажучи' },
    { eng: 'newspaper', uk: 'газета' },
    { eng: 'car', uk: 'автомобіль' },
    { eng: 'background', uk: 'фон' },
    { eng: 'lady', uk: 'пані' },
    { eng: 'clothes', uk: 'одяг' },
    { eng: 'offer', uk: 'запропонувати' },
];

const mid_dict = [
    { eng: 'amateur', uk: 'любитель' },
    { eng: 'crawl', uk: 'повзати' },
    { eng: 'depth', uk: 'глибина' },
    { eng: 'destination', uk: 'призначення' },
    { eng: 'famine', uk: 'голод' },
    { eng: 'honesty', uk: 'чесність' },
    { eng: 'humiliate', uk: 'принижувати' },
    { eng: 'kindness', uk: 'доброта' },
    { eng: 'judge', uk: 'суддя' },
    { eng: 'rehearsal', uk: 'репетиція' },
];

const hard_dict = [
    { eng: 'polite to', uk: 'віччливий' },
    { eng: 'proud of', uk: 'пишатися' },
    { eng: 'I didn’t get it', uk: 'я не зрозумів' },
    { eng: 'crazy about', uk: 'божеволіти від' },
    { eng: 'that\'s all right', uk: 'все гаразд' },
    { eng: 'no worries', uk: 'не хвилюйтеся' },
    { eng: 'feral', uk: 'дикий' },
    { eng: 'wanton', uk: 'безпричинний' },
    { eng: 'therefore', uk: 'з цієї причини' },
    { eng: 'scholar', uk: 'вчений' },
];

$('#content').hide();
$("#repeat-box button").click(() => window.location.reload());
$("button#check").click(check);
$('#level-box button').click(() => {
    $('#level-box').hide();
    shuffleAnswers();
    $('#card').text(dict[curr].eng);
    $('#content').show();
});

function shuffleAnswers() {
    let level = $('#level-box select').val();

    if (level === 'easy') dict = [...easy_dict];
    if (level === 'mid') dict = [...mid_dict];
    if (level === 'hard') dict = [...hard_dict];

    for (let i = dict.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [dict[i], dict[j]] = [dict[j], dict[i]];
    }
}

function check() {
    if ($('#answer').val().toLowerCase().trim() === dict[curr].uk) {
        correct++;
        $('#correct').text(correct + '/10');
    } else {
        incorrect++;
        $('#incorrect').text(incorrect + '/10');
    }

    if (curr === 9) {
        $('#repeat-box .message').text('You guessed ' + correct + ' words from 10!');
        $('#repeat-box').show();
        $('#check').prop('disabled', true);
        return;
    }

    curr++;
    $('#card').text(dict[curr].eng);
    $('#cards-left').text((curr + 1) + '/10');
    $('#answer').val(null);
}
