import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const english = {
    "translation": {
        "index": {
            "title": "What do you want to do?"
        },
        "films": {
            "title": "Videos"
        },
        "games": {
            "title": "What do you want to play?",
            "memory": "Memory",
            "tictactoe": "Tic-Tac-Toe"
        },
        "feelings": {
            "title": "How are you feeling?",
            "blij": "Happy",
            "boos": "Angry",
            "bang": "Afraid",
            "verdrietig": "Sad"
        },
        "slider": {
            "title": "How {emotion} do you feel?",
        },
        "tips": {
            "title": "Tips and tricks",
            "blij": [
                "Who do you talk to when you’re feeling happy?",
                "Go to the people that make you happy",
                "What do you enjoy doing?",
                "Give someone a hug"
            ],
            "boos": [
                "Who do you talk to when you’re feeling angry?",
                "Look for a quiet spot, count to ten, and take deep breaths",
                "Punch your fists in the air and stomp your feet on the ground",
                "Look for a distraction, like a video or a game"
            ],
            "bang": [
                "Who do you talk to when you’re feeling afraid?",
                "Look for a save space, where you feel comfortable",
                "Make a cuddle pile! Pile all your stuffed animals, pillows, and blankets in a corner",
                "Go to the people who make you feel safe, give them a hug"
            ],
            "verdrietig": [
                "Who do you talk to when you’re feeling sad?",
                "It is always okay to cry. It is a healthy way to express your emotions.",
                "Go to someone who can cheer you up",
                "Look for a distraction, like a video or a game"
            ]
        }
    }
}

const dutch = {
    "translation": {
        "index": {
            "title": "Wat gaan we doen?"
        },
        "films": {
            "title": "Filmpjes"
        },
        "games": {
            "title": "Wat gaan we spelen?",
            "memory": "Memory",
            "tictactoe": "Boter, Kaas en Eieren"
        },
        "feelings": {
            "title": "Hoe voel jij je?",
            "blij": "Blij",
            "boos": "Boos",
            "bang": "Bang",
            "verdrietig": "Verdrietig"
        },
        "tips": {
            "title": "Tips en tricks",
            "blij": [
                "Aan wie vertel je het als je je blij voelt?",
                "Ga naar de mensen toe waar jij blij van wordt",
                "Wat vind jij het leukste om te doen?",
                "Geef iemand een knuffel"
            ],
            "boos": [
                "Aan wie vertel je het als je je boos voelt?",
                "Zoek een rustig plekje, tel tot tien, haal rustig adem",
                "Boksen in de lucht en stampen op de grond",
                "Zoek afleiding, een filmpje of een spelletje"
            ],
            "bang": [
                "Aan wie vertel je het als je je bang voelt?",
                "Zoek een veilige plek op, waar jij je thuis voelt",
                "Maak een knuffelberg! Stapel al je knuffels, kussens en dekens in een hoekje",
                "Ga naar de mensen toe waar jij je veilig voelt, geef ze een knuffel"
            ],
            "verdrietig": [
                "Aan wie vertel je het als je je verdrietig voelt?",
                "Je mag altijd huilen, het is een gezonde manier om je emotie te uitten",
                "Zoek iemand op die jou kan opvrolijken",
                "Zoek afleiding, een filmpje of een spelletje"
            ]
        }
    }
}

// todo:
// const korean = {
//     "translation": {
//         "index": {
//             "title": "뭐 할까?"
//         },
//         "films": {
//             "title": "어떤 영상을 볼까?"
//         },
//         "games": {
//             "title": "뭐 할까?",
//             "memory": "기억력",
//             "tictactoe": "틱택토"
//         },
//         "tips": {
//             "title": "팁과 요령",
//             "blij": [
//                 "기쁠 때 누구에게 말하나요?",
//                 "기쁘게 하는 사람에게 가자",
//                 "가장 좋아하는 활동은 무엇인가요?",
//                 "누군가를 안아주세요"
//             ],
//             "boos": [
//                 "화날 때 누구에게 말하나요?",
//                 "조용한 곳을 찾아 열까지 세고, 천천히 숨을 쉬세요",
//                 "공중에 펀치를 날리고, 바닥을 밟으세요",
//                 "영화나 게임 등으로 주의를 돌리세요"
//             ],
//             "bang": [
//                 "무서울 때 누구에게 말하나요?",
//                 "안전한 장소, 집처럼 느껴지는 곳을 찾으세요",
//                 "안아주기 산을 만드세요! 모든 인형, 베개, 담요를 한쪽에 쌓으세요",
//                 "안전하게 느껴지는 사람에게 가서 안아주세요"
//             ],
//             "verdrietig": [
//                 "슬플 때 누구에게 말하나요?",
//                 "울어도 괜찮아요, 감정을 표현하는 건강한 방법이에요",
//                 "당신을 기분 좋게 해줄 사람을 찾아보세요",
//                 "영화나 게임 등으로 주의를 돌리세요"
//             ]
//         }
//     }
// }


i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources: {
            en: english,
            nl: dutch
        },
        lng: 'nl', // Set the default language here
        fallbackLng: 'nl', // Set the fallback language here
        interpolation: {
            escapeValue: false, // React already escapes values by default
        },
    });

export default i18n;