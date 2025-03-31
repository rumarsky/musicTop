const tracks = [
    { "Название трека": 'Асфальт', "Исполнитель": 'Jakone', "Альбом": 'Сингл', "Год выпуска": 2024, "Жанр": 'русская поп-музыка', "Прослушивания": 355300 },
    { "Название трека": 'Океан', "Исполнитель": 'Мари Краймбрери', "Альбом": 'Кино', "Год выпуска": 2023, "Жанр": 'русская поп-музыка', "Прослушивания": 498300 },
    { "Название трека": 'Сияние', "Исполнитель": 'Егор Крид', "Альбом": 'Мир', "Год выпуска": 2022, "Жанр": 'русский рэп', "Прослушивания": 750200 },
    { "Название трека": 'Лето', "Исполнитель": 'Макс Корж', "Альбом": 'Звуки улиц', "Год выпуска": 2025, "Жанр": 'русский рэп', "Прослушивания": 612400 },
    { "Название трека": 'Мечта', "Исполнитель": 'Баста', "Альбом": 'Баста 10', "Год выпуска": 2021, "Жанр": 'русский рэп', "Прослушивания": 402300 },
    { "Название трека": 'Падение', "Исполнитель": 'Скриптонит', "Альбом": 'Психо', "Год выпуска": 2024, "Жанр": 'альтернативный рэп', "Прослушивания": 387600 },
    { "Название трека": 'Искра', "Исполнитель": 'Дора', "Альбом": 'Дорама', "Год выпуска": 2023, "Жанр": 'инди-поп', "Прослушивания": 302400 },
    { "Название трека": 'Космос', "Исполнитель": 'Федук', "Альбом": 'Галактика', "Год выпуска": 2025, "Жанр": 'русская поп-музыка', "Прослушивания": 540200 },
    { "Название трека": 'Район', "Исполнитель": 'Тима Белорусских', "Альбом": 'Навсегда', "Год выпуска": 2022, "Жанр": 'русская поп-музыка', "Прослушивания": 403000 },
    { "Название трека": 'Грусть', "Исполнитель": 'Zivert', "Альбом": 'Красота', "Год выпуска": 2023, "Жанр": 'русская поп-музыка', "Прослушивания": 520000 },
    { "Название трека": 'Север', "Исполнитель": 'Клава Кока', "Альбом": 'Сияние', "Год выпуска": 2024, "Жанр": 'русская поп-музыка', "Прослушивания": 480500 },
    { "Название трека": 'Звезда', "Исполнитель": 'ЛСП', "Альбом": 'Магнит', "Год выпуска": 2025, "Жанр": 'русский рэп', "Прослушивания": 390400 },
    { "Название трека": 'Тьма', "Исполнитель": 'ATL', "Альбом": 'Триады', "Год выпуска": 2023, "Жанр": 'альтернативный рэп', "Прослушивания": 340300 },
    { "Название трека": 'Пламя', "Исполнитель": 'Oxxxymiron', "Альбом": 'Горизонт', "Год выпуска": 2022, "Жанр": 'русский рэп', "Прослушивания": 620500 },
    { "Название трека": 'Ближе', "Исполнитель": 'Пошлая Молли', "Альбом": 'Фиаско', "Год выпуска": 2024, "Жанр": 'панк-поп', "Прослушивания": 350300 },
    { "Название трека": 'Море', "Исполнитель": 'Елена Темникова', "Альбом": 'Портал', "Год выпуска": 2025, "Жанр": 'русская поп-музыка', "Прослушивания": 480400 },
    { "Название трека": 'Огонь', "Исполнитель": 'Слава КПСС', "Альбом": 'Пламя', "Год выпуска": 2023, "Жанр": 'альтернативный рэп', "Прослушивания": 310200 },
    { "Название трека": 'Закат', "Исполнитель": 'Noize MC', "Альбом": 'Звук', "Год выпуска": 2024, "Жанр": 'русский рэп', "Прослушивания": 600500 },
    { "Название трека": 'Туман', "Исполнитель": 'HammAli & Navai', "Альбом": 'Любовь', "Год выпуска": 2025, "Жанр": 'русская поп-музыка', "Прослушивания": 640300 },
    { "Название трека": 'Эхо', "Исполнитель": 'Jah Khalib', "Альбом": 'Романтика', "Год выпуска": 2023, "Жанр": 'русский рэп', "Прослушивания": 470200 },
    { "Название трека": 'Дождь', "Исполнитель": 'Светлана Лобода', "Альбом": 'Крик', "Год выпуска": 2024, "Жанр": 'русская поп-музыка', "Прослушивания": 550300 },
    { "Название трека": 'Шум', "Исполнитель": 'Мияги & Энди Панда', "Альбом": 'Горизонт', "Год выпуска": 2023, "Жанр": 'русский рэп', "Прослушивания": 710400 },
    { "Название трека": 'Свет', "Исполнитель": 'Хаски', "Альбом": 'Мрак', "Год выпуска": 2025, "Жанр": 'альтернативный рэп', "Прослушивания": 300600 },
    { "Название трека": 'Песня', "Исполнитель": 'Монеточка', "Альбом": 'Трек', "Год выпуска": 2024, "Жанр": 'инди-поп', "Прослушивания": 370300 },
    { "Название трека": 'Луна', "Исполнитель": 'Макс Барских', "Альбом": 'Звезда', "Год выпуска": 2022, "Жанр": 'русская поп-музыка', "Прослушивания": 560400 },
    { "Название трека": 'Голоса', "Исполнитель": 'Jah Khalib', "Альбом": 'Галактика', "Год выпуска": 2023, "Жанр": 'русский рэп', "Прослушивания": 470500 },
    { "Название трека": 'Любовь', "Исполнитель": 'Мари Краймбрери', "Альбом": 'Кино', "Год выпуска": 2023, "Жанр": 'русская поп-музыка', "Прослушивания": 510400 },
    { "Название трека": 'Зима', "Исполнитель": 'Скриптонит', "Альбом": 'Психо', "Год выпуска": 2024, "Жанр": 'альтернативный рэп', "Прослушивания": 420500 },
    { "Название трека": 'Небо', "Исполнитель": 'Федук', "Альбом": 'Галактика', "Год выпуска": 2025, "Жанр": 'русская поп-музыка', "Прослушивания": 550100 },
    { "Название трека": 'Тени', "Исполнитель": 'ATL', "Альбом": 'Триады', "Год выпуска": 2023, "Жанр": 'альтернативный рэп', "Прослушивания": 300300 },
    { "Название трека": 'Ветер', "Исполнитель": 'Хаски', "Альбом": 'Мрак', "Год выпуска": 2025, "Жанр": 'альтернативный рэп', "Прослушивания": 360700 },
    { "Название трека": 'Мосты', "Исполнитель": 'Пошлая Молли', "Альбом": 'Фиаско', "Год выпуска": 2024, "Жанр": 'панк-поп', "Прослушивания": 370400 },
    { "Название трека": 'Глубина', "Исполнитель": 'Монеточка', "Альбом": 'Трек', "Год выпуска": 2024, "Жанр": 'инди-поп', "Прослушивания": 350600 },
    { "Название трека": 'Капли', "Исполнитель": 'Макс Корж', "Альбом": 'Звуки улиц', "Год выпуска": 2025, "Жанр": 'русский рэп', "Прослушивания": 620400 },
    { "Название трека": 'Забвение', "Исполнитель": 'Noize MC', "Альбом": 'Звук', "Год выпуска": 2024, "Жанр": 'русский рэп', "Прослушивания": 590800 },
    { "Название трека": 'Забота', "Исполнитель": 'Zivert', "Альбом": 'Красота', "Год выпуска": 2023, "Жанр": 'русская поп-музыка', "Прослушивания": 520200 },
    { "Название трека": 'Горы', "Исполнитель": 'Мияги & Энди Панда', "Альбом": 'Горизонт', "Год выпуска": 2023, "Жанр": 'русский рэп', "Прослушивания": 710300 },
    { "Название трека": 'Огонёк', "Исполнитель": 'Дора', "Альбом": 'Дорама', "Год выпуска": 2023, "Жанр": 'инди-поп', "Прослушивания": 320200 },
    { "Название трека": 'Крик', "Исполнитель": 'Светлана Лобода', "Альбом": 'Крик', "Год выпуска": 2024, "Жанр": 'русская поп-музыка', "Прослушивания": 550100 },
    { "Название трека": 'Волна', "Исполнитель": 'Елена Темникова', "Альбом": 'Портал', "Год выпуска": 2025, "Жанр": 'русская поп-музыка', "Прослушивания": 490500 },
    { "Название трека": 'Война', "Исполнитель": 'Oxxxymiron', "Альбом": 'Горизонт', "Год выпуска": 2022, "Жанр": 'русский рэп', "Прослушивания": 630700 },
    { "Название трека": 'Маска', "Исполнитель": 'ЛСП', "Альбом": 'Магнит', "Год выпуска": 2025, "Жанр": 'русский рэп', "Прослушивания": 400500 },
    { "Название трека": 'Погода', "Исполнитель": 'Jakone', "Альбом": 'Сингл', "Год выпуска": 2024, "Жанр": 'русская поп-музыка', "Прослушивания": 360400 },
    { "Название трека": 'Магия', "Исполнитель": 'Федук', "Альбом": 'Галактика', "Год выпуска": 2025, "Жанр": 'русская поп-музыка', "Прослушивания": 540300 },
    { "Название трека": 'Рассвет', "Исполнитель": 'Макс Корж', "Альбом": 'Звуки улиц', "Год выпуска": 2025, "Жанр": 'русский рэп', "Прослушивания": 580200 },
    { "Название трека": 'Город', "Исполнитель": 'Zivert', "Альбом": 'Красота', "Год выпуска": 2023, "Жанр": 'русская поп-музыка', "Прослушивания": 490100 },
    { "Название трека": 'Метеор', "Исполнитель": 'Jakone', "Альбом": 'Сингл', "Год выпуска": 2024, "Жанр": 'русская поп-музыка', "Прослушивания": 320500 },
    { "Название трека": 'Одиночество', "Исполнитель": 'Мари Краймбрери', "Альбом": 'Кино', "Год выпуска": 2023, "Жанр": 'русская поп-музыка', "Прослушивания": 470800 },
    { "Название трека": 'Пульс', "Исполнитель": 'Скриптонит', "Альбом": 'Психо', "Год выпуска": 2024, "Жанр": 'альтернативный рэп', "Прослушивания": 410300 },
    { "Название трека": 'Снег', "Исполнитель": 'Монеточка', "Альбом": 'Трек', "Год выпуска": 2024, "Жанр": 'инди-поп', "Прослушивания": 340200 },
    { "Название трека": 'Код', "Исполнитель": 'Oxxxymiron', "Альбом": 'Горизонт', "Год выпуска": 2022, "Жанр": 'русский рэп', "Прослушивания": 605600 },
    { "Название трека": 'Пыль', "Исполнитель": 'Хаски', "Альбом": 'Мрак', "Год выпуска": 2025, "Жанр": 'альтернативный рэп', "Прослушивания": 290400 },
    { "Название трека": 'Ритм', "Исполнитель": 'Мияги & Энди Панда', "Альбом": 'Горизонт', "Год выпуска": 2023, "Жанр": 'русский рэп', "Прослушивания": 690100 },
    { "Название трека": 'Сон', "Исполнитель": 'Федук', "Альбом": 'Галактика', "Год выпуска": 2025, "Жанр": 'русская поп-музыка', "Прослушивания": 510700 },
    { "Название трека": 'Яд', "Исполнитель": 'ATL', "Альбом": 'Триады', "Год выпуска": 2023, "Жанр": 'альтернативный рэп', "Прослушивания": 330600 },
    { "Название трека": 'Пламя', "Исполнитель": 'Пошлая Молли', "Альбом": 'Фиаско', "Год выпуска": 2024, "Жанр": 'панк-поп', "Прослушивания": 360900 },
    { "Название трека": 'Тайна', "Исполнитель": 'ЛСП', "Альбом": 'Магнит', "Год выпуска": 2025, "Жанр": 'русский рэп', "Прослушивания": 380200 },
    { "Название трека": 'Шёпот', "Исполнитель": 'Дора', "Альбом": 'Дорама', "Год выпуска": 2023, "Жанр": 'инди-поп', "Прослушивания": 310500 },
    { "Название трека": 'Мгла', "Исполнитель": 'Noize MC', "Альбом": 'Звук', "Год выпуска": 2024, "Жанр": 'русский рэп', "Прослушивания": 570300 },
    { "Название трека": 'Судьба', "Исполнитель": 'Егор Крид', "Альбом": 'Мир', "Год выпуска": 2022, "Жанр": 'русский рэп', "Прослушивания": 720800 },
    { "Название трека": 'Вода', "Исполнитель": 'Светлана Лобода', "Альбом": 'Крик', "Год выпуска": 2024, "Жанр": 'русская поп-музыка', "Прослушивания": 530600 },
    { "Название трека": 'Жара', "Исполнитель": 'Тима Белорусских', "Альбом": 'Навсегда', "Год выпуска": 2022, "Жанр": 'русская поп-музыка', "Прослушивания": 390700 },
    { "Название трека": 'Лёд', "Исполнитель": 'Баста', "Альбом": 'Баста 10', "Год выпуска": 2021, "Жанр": 'русский рэп', "Прослушивания": 410900 },
    { "Название трека": 'Пылай', "Исполнитель": 'Слава КПСС', "Альбом": 'Пламя', "Год выпуска": 2023, "Жанр": 'альтернативный рэп', "Прослушивания": 290800 },
    { "Название трека": 'Барьер', "Исполнитель": 'Jah Khalib', "Альбом": 'Романтика', "Год выпуска": 2023, "Жанр": 'русский рэп', "Прослушивания": 460300 },
    { "Название трека": 'Круги', "Исполнитель": 'HammAli & Navai', "Альбом": 'Любовь', "Год выпуска": 2025, "Жанр": 'русская поп-музыка', "Прослушивания": 630500 },
    { "Название трека": 'Вихрь', "Исполнитель": 'Елена Темникова', "Альбом": 'Портал', "Год выпуска": 2025, "Жанр": 'русская поп-музыка', "Прослушивания": 480600 },
    { "Название трека": 'Следы', "Исполнитель": 'Макс Барских', "Альбом": 'Звезда', "Год выпуска": 2022, "Жанр": 'русская поп-музыка', "Прослушивания": 540900 },
    { "Название трека": 'Поле', "Исполнитель": 'Клава Кока', "Альбом": 'Сияние', "Год выпуска": 2024, "Жанр": 'русская поп-музыка', "Прослушивания": 460800 }
];