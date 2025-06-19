const tableHeader = {
    "name": "Название группы",
    "country": "Страна",
    "year": "Год основания",
    "genre": "Основной жанр",
    "popular": "Самая популярная песня",
    "last": "Последняя песня",
    "avgDuration": "Средняя длительность песен, сек",
    "listens": "Прослушивания"
}

const bandsData = [
    {
        "name": "Queen",
        "country": "Великобритания",
        "year": 1970,
        "genre": "Рок",
        "popular": "Bohemian Rhapsody",
        "last": "The Show Must Go On",
        "avgDuration": 240,
        "listens": 100.5
    },
    {
        "name": "The Beatles",
        "country": "Великобритания",
        "year": 1960,
        "genre": "Рок",
        "popular": "Hey Jude",
        "last": "Let It Be",
        "avgDuration": 210,
        "listens": 600.2
    },
    {
        "name": "Led Zeppelin",
        "country": "Великобритания",
        "year": 1968,
        "genre": "Хард-рок",
        "popular": "Stairway to Heaven",
        "last": "Kashmir",
        "avgDuration": 420,
        "listens": 300.7
    },
    {
        "name": "Pink Floyd",
        "country": "Великобритания",
        "year": 1965,
        "genre": "Прогрессивный рок",
        "popular": "Comfortably Numb",
        "last": "High Hopes",
        "avgDuration": 360,
        "listens": 250.1
    },
    {
        "name": "Metallica",
        "country": "США",
        "year": 1981,
        "genre": "Хеви-метал",
        "popular": "Enter Sandman",
        "last": "Hardwired",
        "avgDuration": 330,
        "listens": 200.9
    },
    {
        "name": "Nirvana",
        "country": "США",
        "year": 1987,
        "genre": "Гранж",
        "popular": "Smells Like Teen Spirit",
        "last": "You Know You're Right",
        "avgDuration": 210,
        "listens": 180.3
    },
    {
        "name": "AC/DC",
        "country": "Австралия",
        "year": 1973,
        "genre": "Хард-рок",
        "popular": "Highway to Hell",
        "last": "Rock or Bust",
        "avgDuration": 240,
        "listens": 220.4
    },
    {
        "name": "The Rolling Stones",
        "country": "Великобритания",
        "year": 1962,
        "genre": "Рок",
        "popular": "Paint It Black",
        "last": "Living in a Ghost Town",
        "avgDuration": 270,
        "listens": 280.6
    },
    {
        "name": "Guns N' Roses",
        "country": "США",
        "year": 1985,
        "genre": "Хард-рок",
        "popular": "Sweet Child O' Mine",
        "last": "Absurd",
        "avgDuration": 300,
        "listens": 150.8
    },
    {
        "name": "Black Sabbath",
        "country": "Великобритания",
        "year": 1968,
        "genre": "Хеви-метал",
        "popular": "Paranoid",
        "last": "God Is Dead?",
        "avgDuration": 360,
        "listens": 120.5
    },
    {
        "name": "Deep Purple",
        "country": "Великобритания",
        "year": 1968,
        "genre": "Хард-рок",
        "popular": "Smoke on the Water",
        "last": "All the Time in the World",
        "avgDuration": 270,
        "listens": 110.7
    },
    {
        "name": "Iron Maiden",
        "country": "Великобритания",
        "year": 1975,
        "genre": "Хеви-метал",
        "popular": "Fear of the Dark",
        "last": "The Writing on the Wall",
        "avgDuration": 390,
        "listens": 90.3
    },
    {
        "name": "Radiohead",
        "country": "Великобритания",
        "year": 1985,
        "genre": "Альтернативный рок",
        "popular": "Creep",
        "last": "Daydreaming",
        "avgDuration": 330,
        "listens": 85.2
    },
    {
        "name": "Red Hot Chili Peppers",
        "country": "США",
        "year": 1983,
        "genre": "Фанк-рок",
        "popular": "Californication",
        "last": "Black Summer",
        "avgDuration": 240,
        "listens": 130.4
    },
    {
        "name": "The Doors",
        "country": "США",
        "year": 1965,
        "genre": "Психоделический рок",
        "popular": "Light My Fire",
        "last": "Riders on the Storm",
        "avgDuration": 270,
        "listens": 95.8
    },
    {
        "name": "U2",
        "country": "Ирландия",
        "year": 1976,
        "genre": "Рок",
        "popular": "With or Without You",
        "last": "Your Song Saved My Life",
        "avgDuration": 300,
        "listens": 160.1
    },
    {
        "name": "Linkin Park",
        "country": "США",
        "year": 1996,
        "genre": "Альтернативный метал",
        "popular": "In the End",
        "last": "Lost",
        "avgDuration": 210,
        "listens": 170.5
    },
    {
        "name": "Foo Fighters",
        "country": "США",
        "year": 1994,
        "genre": "Альтернативный рок",
        "popular": "Everlong",
        "last": "Shame Shame",
        "avgDuration": 240,
        "listens": 75.9
    },
    {
        "name": "The Who",
        "country": "Великобритания",
        "year": 1964,
        "genre": "Рок",
        "popular": "Baba O'Riley",
        "last": "Ball and Chain",
        "avgDuration": 330,
        "listens": 65.4
    },
    {
        "name": "Rammstein",
        "country": "Германия",
        "year": 1994,
        "genre": "Индастриал-метал",
        "popular": "Du Hast",
        "last": "Zeit",
        "avgDuration": 270,
        "listens": 55.7
    },
    {
        "name": "Green Day",
        "country": "США",
        "year": 1986,
        "genre": "Панк-рок",
        "popular": "Basket Case",
        "last": "Father of All...",
        "avgDuration": 180,
        "listens": 80.2
    },
    {
        "name": "System of a Down",
        "country": "США",
        "year": 1994,
        "genre": "Альтернативный метал",
        "popular": "Chop Suey!",
        "last": "Protect the Land",
        "avgDuration": 210,
        "listens": 70.6
    },
    {
        "name": "Pearl Jam",
        "country": "США",
        "year": 1990,
        "genre": "Гранж",
        "popular": "Alive",
        "last": "Dance of the Clairvoyants",
        "avgDuration": 270,
        "listens": 60.3
    },
    {
        "name": "The Cure",
        "country": "Великобритания",
        "year": 1976,
        "genre": "Пост-панк",
        "popular": "Friday I'm in Love",
        "last": "Alone",
        "avgDuration": 240,
        "listens": 50.8
    },
    {
        "name": "Depeche Mode",
        "country": "Великобритания",
        "year": 1980,
        "genre": "Синтипоп",
        "popular": "Enjoy the Silence",
        "last": "Ghosts Again",
        "avgDuration": 270,
        "listens": 45.9
    },
    {
        "name": "Muse",
        "country": "Великобритания",
        "year": 1994,
        "genre": "Альтернативный рок",
        "popular": "Uprising",
        "last": "Won't Stand Down",
        "avgDuration": 240,
        "listens": 65.1
    },
    {
        "name": "Coldplay",
        "country": "Великобритания",
        "year": 1996,
        "genre": "Альтернативный рок",
        "popular": "Yellow",
        "last": "Higher Power",
        "avgDuration": 240,
        "listens": 120.7
    },
    {
        "name": "Arctic Monkeys",
        "country": "Великобритания",
        "year": 2002,
        "genre": "Инди-рок",
        "popular": "Do I Wanna Know?",
        "last": "There'd Better Be a Mirrorball",
        "avgDuration": 210,
        "listens": 55.3
    },
    {
        "name": "Oasis",
        "country": "Великобритания",
        "year": 1991,
        "genre": "Брит-поп",
        "popular": "Wonderwall",
        "last": "Stop Crying Your Heart Out",
        "avgDuration": 240,
        "listens": 70.4
    },
    {
        "name": "Blur",
        "country": "Великобритания",
        "year": 1988,
        "genre": "Брит-поп",
        "popular": "Song 2",
        "last": "The Narcissist",
        "avgDuration": 180,
        "listens": 40.6
    },
    {
        "name": "The Strokes",
        "country": "США",
        "year": 1998,
        "genre": "Инди-рок",
        "popular": "Last Nite",
        "last": "The Adults Are Talking",
        "avgDuration": 210,
        "listens": 35.2
    },
    {
        "name": "Korn",
        "country": "США",
        "year": 1993,
        "genre": "Ню-метал",
        "popular": "Freak on a Leash",
        "last": "Start the Healing",
        "avgDuration": 240,
        "listens": 45.8
    },
    {
        "name": "Slipknot",
        "country": "США",
        "year": 1995,
        "genre": "Ню-метал",
        "popular": "Duality",
        "last": "The Chapeltown Rag",
        "avgDuration": 270,
        "listens": 50.1
    },
    {
        "name": "Megadeth",
        "country": "США",
        "year": 1983,
        "genre": "Трэш-метал",
        "popular": "Symphony of Destruction",
        "last": "We'll Be Back",
        "avgDuration": 300,
        "listens": 40.3
    },
    {
        "name": "Judas Priest",
        "country": "Великобритания",
        "year": 1969,
        "genre": "Хеви-метал",
        "popular": "Breaking the Law",
        "last": "Panic Attack",
        "avgDuration": 270,
        "listens": 35.7
    },
    {
        "name": "Scorpions",
        "country": "Германия",
        "year": 1965,
        "genre": "Хард-рок",
        "popular": "Wind of Change",
        "last": "Rock Believer",
        "avgDuration": 300,
        "listens": 60.2
    },
    {
        "name": "Bon Jovi",
        "country": "США",
        "year": 1983,
        "genre": "Хард-рок",
        "popular": "It's My Life",
        "last": "Limitless",
        "avgDuration": 240,
        "listens": 85.4
    },
    {
        "name": "Def Leppard",
        "country": "Великобритания",
        "year": 1977,
        "genre": "Хард-рок",
        "popular": "Pour Some Sugar on Me",
        "last": "Kick",
        "avgDuration": 240,
        "listens": 55.6
    },
    {
        "name": "Aerosmith",
        "country": "США",
        "year": 1970,
        "genre": "Хард-рок",
        "popular": "I Don't Want to Miss a Thing",
        "last": "Legendary Child",
        "avgDuration": 270,
        "listens": 75.3
    },
    {
        "name": "Van Halen",
        "country": "США",
        "year": 1972,
        "genre": "Хард-рок",
        "popular": "Jump",
        "last": "Tattoo",
        "avgDuration": 240,
        "listens": 65.8
    },
    {
        "name": "Kiss",
        "country": "США",
        "year": 1973,
        "genre": "Хард-рок",
        "popular": "I Was Made for Lovin' You",
        "last": "Say Yeah",
        "avgDuration": 210,
        "listens": 50.9
    },
    {
        "name": "Motörhead",
        "country": "Великобритания",
        "year": 1975,
        "genre": "Хеви-метал",
        "popular": "Ace of Spades",
        "last": "When the Sky Comes Looking for You",
        "avgDuration": 180,
        "listens": 40.2
    },
    {
        "name": "The Clash",
        "country": "Великобритания",
        "year": 1976,
        "genre": "Панк-рок",
        "popular": "Should I Stay or Should I Go",
        "last": "This Is England",
        "avgDuration": 210,
        "listens": 45.5
    },
    {
        "name": "Ramones",
        "country": "США",
        "year": 1974,
        "genre": "Панк-рок",
        "popular": "Blitzkrieg Bop",
        "last": "I Don't Want to Grow Up",
        "avgDuration": 150,
        "listens": 30.8
    },
    {
        "name": "The Police",
        "country": "Великобритания",
        "year": 1977,
        "genre": "Рок",
        "popular": "Every Breath You Take",
        "last": "Synchronicity II",
        "avgDuration": 240,
        "listens": 55.1
    },
    {
        "name": "Dire Straits",
        "country": "Великобритания",
        "year": 1977,
        "genre": "Рок",
        "popular": "Sultans of Swing",
        "last": "Brothers in Arms",
        "avgDuration": 360,
        "listens": 60.7
    },
    {
        "name": "Eagles",
        "country": "США",
        "year": 1971,
        "genre": "Рок",
        "popular": "Hotel California",
        "last": "I Don't Want to Hear Any More",
        "avgDuration": 390,
        "listens": 110.3
    },
    {
        "name": "Fleetwood Mac",
        "country": "Великобритания",
        "year": 1967,
        "genre": "Рок",
        "popular": "Go Your Own Way",
        "last": "Everywhere",
        "avgDuration": 240,
        "listens": 65.9
    },
    {
        "name": "Genesis",
        "country": "Великобритания",
        "year": 1967,
        "genre": "Прогрессивный рок",
        "popular": "Invisible Touch",
        "last": "The Carpet Crawlers",
        "avgDuration": 300,
        "listens": 50.4
    },
    {
        "name": "Yes",
        "country": "Великобритания",
        "year": 1968,
        "genre": "Прогрессивный рок",
        "popular": "Roundabout",
        "last": "The Ice Bridge",
        "avgDuration": 420,
        "listens": 40.6
    },
    {
        "name": "Rush",
        "country": "Канада",
        "year": 1968,
        "genre": "Прогрессивный рок",
        "popular": "Tom Sawyer",
        "last": "Headlong Flight",
        "avgDuration": 360,
        "listens": 35.2
    },
    {
        "name": "Dream Theater",
        "country": "США",
        "year": 1985,
        "genre": "Прогрессивный метал",
        "popular": "Pull Me Under",
        "last": "The Alien",
        "avgDuration": 480,
        "listens": 25.8
    },
    {
        "name": "Tool",
        "country": "США",
        "year": 1990,
        "genre": "Прогрессивный метал",
        "popular": "Schism",
        "last": "Fear Inoculum",
        "avgDuration": 540,
        "listens": 30.5
    },
    {
        "name": "Opeth",
        "country": "Швеция",
        "year": 1990,
        "genre": "Прогрессивный метал",
        "popular": "Windowpane",
        "last": "Heart in Hand",
        "avgDuration": 480,
        "listens": 20.7
    }
]