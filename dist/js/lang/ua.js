
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 3.1.4
  * @author Adam Chaboryk
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2024 Toronto Metropolitan University.
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
var ua = {
  // Ukrainian
  strings: {
    LANG_CODE: 'ua',
    MAIN_TOGGLE_LABEL: 'Перевірка доступності',
    CONTAINER_LABEL: 'Засіб перевірки доступності',
    ERROR: 'Помилка',
    ERRORS: 'Помилки',
    WARNING: 'Попередження',
    WARNINGS: 'Попередження',
    GOOD: 'Добре',
    ON: 'Увімкнено',
    OFF: 'Вимкнено',
    ALERT_TEXT: 'Попередження',
    ALERT_CLOSE: 'Закрити',
    OUTLINE: 'Контури сторінки',
    PAGE_ISSUES: 'Проблеми зі сторінкою',
    SETTINGS: 'Налаштування',
    CONTRAST: 'Контраст',
    FORM_LABELS: 'Назви форми',
    LINKS_ADVANCED: 'Посилання (Розширені)',
    DARK_MODE: 'Темний режим',
    SHORTCUT_SCREEN_READER: 'Перейти до проблеми. Комбінація клавіш: Option крапка',
    SHORTCUT_TOOLTIP: 'Перейти до проблеми',
    NEW_TAB: 'Відкривається у новій вкладці',
    PANEL_HEADING: 'Перевірка доступності',
    PANEL_STATUS_NONE: 'Помилок не знайдено.',
    PANEL_ICON_WARNINGS: 'знайдені попередження.',
    PANEL_ICON_TOTAL: 'всього знайдених проблем.',
    NOT_VISIBLE_ALERT: 'Елемент, який ви намагаєтеся переглянути, не відображується; можливо, він прихований або знаходиться усередині компонента вкладки чи випадаючого списку («акордеону»). Ось попередній перегляд:',
    ERROR_MISSING_ROOT_TARGET: 'Було здійснено перевірку доступності всієї сторінки, оскільки цільова область <code>%(root)</code> не існує.',
    HEADING_NOT_VISIBLE_ALERT: 'Заголовок не видно; він може бути прихованим або всередині акордеона чи вкладки.',
    SKIP_TO_PAGE_ISSUES: 'Перейти до сторінки Проблеми',
    CONSOLE_ERROR_MESSAGE: 'Вибачте, але на цій сторінці виникла проблема з перевіркою доступності. Чи можете ви <a href="%(link)">повідомити про це за допомогою цієї форми</a> або на <a href="%(link)">GitHub</a>?',

    // Dismiss
    PANEL_DISMISS_BUTTON: 'Показати %(dismissCount) проігнорованих попереджень',
    DISMISS: 'Ігнорувати',
    DISMISSED: 'Проігноровані попередження',
    DISMISS_REMINDER: 'Зауважте, що попередження лише <strong>тимчасово</strong> відхиляються. Очищення історії веб-переглядача та файлів cookie відновить усі раніше відхилені попередження на всіх сторінках.',

    // Export
    DATE: 'Дата',
    PAGE_TITLE: 'Заголовок сторінки',
    RESULTS: 'Результати',
    EXPORT_RESULTS: 'Експорт результатів',
    GENERATED: 'Результати згенеровані за допомогою %(tool).',
    PREVIEW: 'Перегляд',
    ELEMENT: 'Елемент',
    PATH: 'Шлях',

    // Color filters
    COLOUR_FILTER: 'Фільтр кольорів',
    PROTANOPIA: 'Протанопія',
    DEUTERANOPIA: 'Девтеранопія',
    TRITANOPIA: 'Тританопія',
    MONOCHROMACY: 'Монохромність',
    COLOUR_FILTER_MESSAGE: 'Перевірте наявність елементів, які важко сприйняти або виділити на тлі інших кольорів.',
    RED_EYE: 'Червоний дальтонізм.',
    GREEN_EYE: 'Зелений дальтонізм.',
    BLUE_EYE: 'Синій дальтонізм.',
    MONO_EYE: 'Червона, зелена і синя сліпота.',
    COLOUR_FILTER_HIGH_CONTRAST_MESSAGE: 'Кольорові фільтри не працюють у режимі високої контрастності.',

    // Alternative text module stop words
    SUSPICIOUS_ALT_STOPWORDS: ['зображення', 'графічний об’єкт', 'малюнок', 'фото'],
    PLACEHOLDER_ALT_STOPWORDS: ['alt', 'зображення', 'фото', 'декоративне', 'фотографія', 'заповнювач', 'зображення-заповнювач', 'роздільник'],
    PARTIAL_ALT_STOPWORDS: [
      'натиснути',
      'натиснути тут',
      'натиснути тут щоб дізнатися більше',
      'натиснути тут для отримання додаткової інформації',
      'перевірити',
      'завантажити',
      'завантажити тут',
      'дізнатися',
      'дізнатися більше',
      'форма',
      'тут',
      'інфа',
      'інформація',
      'посилання',
      'взнати',
      'взнати більше',
      'вивчити',
      'більше',
      'сторінка',
      'стаття',
      'прочитати більше',
      'читати',
      'читати це',
      'це',
      'ця сторінка',
      'цей вебсайт',
      'переглянути',
      'переглянути наш',
      'вебсайт',
    ],
    WARNING_ALT_STOPWORDS: ['натиснути тут'],
    NEW_WINDOW_PHRASES: ['зовнішнє', 'нова вкладка', 'нове вікно', 'спливаюче вікно', 'спливаючий елемент'],
    FILE_TYPE_PHRASES: ['документ', 'електронна таблиця', 'розрахункова таблиця', 'стиснутий файл', 'заархівований файл', 'робочий аркуш', 'powerpoint', 'презентація', 'встановити', 'відео', 'аудіо', 'pdf', 'пдф'],

    // Readability
    LANG_READABILITY: 'Читабельність',
    LANG_AVG_SENTENCE: 'Середня кількість слів в одному реченні:',
    LANG_COMPLEX_WORDS: 'Складні слова:',
    LANG_TOTAL_WORDS: 'Слова:',
    LANG_VERY_DIFFICULT: 'Дуже складно',
    LANG_DIFFICULT: 'Складно',
    LANG_FAIRLY_DIFFICULT: 'Достатньо складно',
    LANG_GOOD: 'Добре',
    READABILITY_NO_P_OR_LI_MESSAGE: 'Неможливо визначити показник читабельності. Не знайдено жодного абзацу <code>&lt;p&gt;</code> або вмісту списку <code>&lt;li&gt;</code>.',
    READABILITY_NOT_ENOUGH_CONTENT_MESSAGE: 'Недостатньо вмісту для розрахунку оцінки читабельності.',

    // Headings
    HEADING_NON_CONSECUTIVE_LEVEL: 'Використано непослідовні рівні заголовків. Заголовки ніколи не повинні пропускати рівні або переходити від <strong>заголовка %(prevLevel)</strong> до <strong {r}>заголовка %(level)</strong>.',
    HEADING_EMPTY: 'Знайдено порожній заголовок! Щоб виправити, видаліть цей рядок або змініть його формат: замість <strong {r}>Заголовок %(level)</strong> оберіть <strong>Звичайний</strong> або <strong>Абзац</strong>.',
    HEADING_LONG: 'Заголовки задовгі! Заголовки слід використовувати для організації змісту та передачі структури. Вони мають бути короткими, інформативними та унікальними. Будь ласка, не виходьте за 160 символів (не більше одного речення).<hr>Кількість символів: <strong {r}>%(headingLength)</strong>',
    HEADING_FIRST: 'Першим заголовком на сторінці зазвичай повинен бути Заголовок 1 або Заголовок 2. Заголовок 1 має бути початком частини основного змісту та є основним заголовком, що описує загальну мету сторінки. Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">структуру заголовків.</a>',
    HEADING_MISSING_ONE: 'Відсутній Заголовок 1. Заголовок 1 повинен бути початком області основного змісту та є основним заголовком, який описує загальну мету сторінки. Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">структуру заголовків.</a>',
    HEADING_EMPTY_WITH_IMAGE: 'Заголовок не має тексту, але містить зображення. Якщо це не заголовок, змініть його формат: замість <strong {r}>Заголовок %(level)</strong> поставте <strong>Звичайний</strong> або <strong>Абзац</strong>. В іншому разі додайте текст заміщення до зображення, якщо воно не є декоративним.',
    PANEL_HEADING_MISSING_ONE: 'Відсутній заголовок 1!',
    PANEL_NO_HEADINGS: 'Заголовки не знайдено.',

    // Links
    LINK_EMPTY: 'Видаліть пусті посилання без тексту.',
    LINK_EMPTY_LABELLEDBY: 'Лінк має значення для <code>aria-labelledby</code>, яке є порожнім або не відповідає значенню атрибута <code>id</code> іншого елемента на сторінці.',
    LINK_EMPTY_LINK_NO_LABEL: 'Посилання не має тексту для розпізнавання, який є видимим для читання з екрана та інших допоміжних технологій. Щоб виправити:<ul><li>Додайте короткий текст, який описує куди веде посилання.</li><li>У разі коли це посилання на <a href="https://a11y-101.com/development/icons-and-links">іконку або SVG, то, швидше за все, відсутній опис.</a></li><li>Якщо ви вважаєте, що це помилкове посилання викликане сбоєм копіювання/вставки, розгляньте його видалення.</li></ul>',
    LINK_LABEL: '<strong>Назва посилання:</strong> %(sanitizedText)',
    LINK_STOPWORD: 'Текст посилання може бути недостатньо описовим поза контекстом: <strong {r}>%(error)</strong><hr><strong>Порада!</strong> Текст посилання завжди має бути чітким, унікальним та змістовним. Уникайте поширених слів типу &quot;натисніть тут&quot; або &quot;дізнатися більше&quot;.',
    LINK_BEST_PRACTICES: 'Розгляньте можливість заміни тексту посилання: <strong {r}>%(error)</strong><hr><ul><li>&quot;Натисніть тут&quot; стосується механіки миші, позаяк багато людей не користуються мишею або можуть переглядати цей вебсайт на мобільному пристрої. Розгляньте можливість використання іншого дієслова, що стосується виконання завдання.</li><li>Уникайте використання символів HTML у якості закликів до дії, якщо вони не приховані для допоміжних технологій.</li></ul>',
    LINK_URL: 'Довгі, менш розбірливі URL-адреси, які використовуються як текст посилання, можуть бути складними для прослуховування з використанням допоміжних технологій. У більшості випадків замість URL краще використовувати текст, придатний для читання людиною. Короткі URL-адреси (такі як  домашня сторінка сайту) цілком допустимі. <hr><strong>Порада!</strong> Текст посилання завжди має бути чітким, унікальним та значущім, щоб його можна було зрозуміти поза контекстом.',
    LINK_DOI: 'Для веб-сторінок або ресурсів, доступних лише в Інтернеті, посібник зі <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">стилю APA</a> рекомендує використовувати описові посилання, обгортаючи URL-адресу або DOI роботи навколо її назви. Довгі, менш розбірливі URL-адреси, які використовуються як текст посилання, можуть бути складними для прослуховування з використанням допоміжних технологій.',

    // Links advanced
    NEW_TAB_WARNING: 'Посилання відкривається у новій вкладці або вікні без попередження. Це може дезорієнтувати, особливо людей, які мають труднощі зі сприйняттям візуального контенту. До того ж, не завжди добре контролювати чийсь досвід чи приймати рішення за іншу особу. У тексті посилання вказуйте, що посилання відкривається у новому вікні. <hr> <strong>Порада!</strong> Вивчіть найкращі практики: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">відкриття посилань у нових вікнах та вкладках браузера.</a>',
    FILE_TYPE_WARNING: 'Посилання вказує на PDF або файл, що завантажується (наприклад, MP3, Zip, Word Doc) без попередження. Вкажіть тип файлу у тексті посилання. Якщо це великий файл, вкажіть його розмір. <hr> <strong>Приклад:</strong> Виконавчий звіт (PDF, 3 МБ)',
    LINK_IDENTICAL_NAME: 'Посилання має той самий текст, що й інше посилання, але вказує на іншу сторінку. Декілька посилань з однаковим текстом можуть заплутати людей, які використовують програми для читання з екрана. <hr> Розгляньте можливість зробити наступне посилання більш описовим, щоб відрізнити його від інших посилань: <strong {r}>%(sanitizedText)</strong>',

    // Images
    MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE: 'Зображення використовується як посилання з оточуючим текстом, хоча атрибут текст заміщення повинен бути позначений як декоративний або нульовий.',
    MISSING_ALT_LINK_MESSAGE: 'Зображення використовується як посилання, але відсутній текст заміщення! Переконайтеся, що текст заміщення описує, куди веде посилання.',
    MISSING_ALT_MESSAGE: 'Відсутній текст заміщення! Якщо зображення передає історію, настрій або важливу інформацію, обов\'язково опишіть його.',
    LINK_ALT_HAS_FILE_EXTENSION: 'Знайдено розширення файлу в текст заміщенняі. Переконайтеся, що текст заміщення описує місце призначення посилання, а не надає дослівний опис зображення. Видалити: <strong {r}>%(error)</strong>. <hr> <strong>текст заміщення:</strong> %(altText)',
    LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE: 'Виявлено не описовий або заповнюючий текст заміщення усередині зв\'язаного зображення. Переконайтеся, що текст заміщення визначає місце призначення посилання, а не надає дослівний опис зображення. Замініть наступний текст: <strong {r}>%(altText)</strong>',
    LINK_IMAGE_SUS_ALT_MESSAGE: 'Допоміжні технології вже вказують, що це зображення, тому &quot;<strong {r}>%(error)</strong>&quot; можуть бути зайвими. Переконайтеся, що текст заміщення описує місце призначення посилання, а не надає дослівний опис зображення. <hr> <strong>текст заміщення:</strong> %(altText)',
    ALT_HAS_FILE_EXTENSION: 'Знайдено розширення файлу в текст заміщенняі. Якщо зображення передає історію, настрій або важливу інформацію, обов\'язково опишіть його. Видалити: <strong {r}>%(error)</strong>. <hr> <strong>текст заміщення:</strong> %(altText)',
    ALT_PLACEHOLDER_MESSAGE: 'Виявлено не описовий або заповнюючий текст заміщення. Замініть наступний текст заміщення чимось більш значущим: <strong {r}>%(altText)</strong>',
    ALT_HAS_SUS_WORD: 'Допоміжні технології вже вказують, що це зображення, тому &quot;<strong {r}>%(error)</strong>&quot; можуть бути зайвими. <hr> <strong>текст заміщення:</strong> %(altText)',
    LINK_HIDDEN_FOCUSABLE: 'Посилання має <code>aria-hidden=&quot;true&quot;</code>, але все ще доступне для фокусування за допомогою клавіатури. Якщо ви плануєте приховати зайве або дубльоване посилання, також додайте <code>tabindex=&quot;-1&quot;</code>.',
    LINK_IMAGE_NO_ALT_TEXT: 'Зображення у посиланні позначене як декоративне, а текст посилання відсутній. Будь ласка, додайте до зображення текст заміщення, який визначає місце призначення посилання.',
    LINK_IMAGE_HAS_TEXT: 'Зображення позначене як декоративне, хоча посилання використовує навколишній текст як описову назву.',
    LINK_IMAGE_LONG_ALT: 'Опис текст заміщенняу на пов\'язаному зображенні <strong>занадто довгий.</strong> текст заміщення на пов\'язаних зображеннях повинен вказувати, куди веде посилання, а не містити дослівний опис зображення. <strong>Розгляньте можливість використання заголовка сторінки в якості текст заміщенняу, яку веде посилання.</strong> <hr> <strong>текст заміщення (<span {r}>%(altLength)</span> символів):</strong> %(altText)',
    LINK_IMAGE_ALT_WARNING: 'Посилання на зображення містить альтернативний текст. <strong>Чи описує альтернативний текст, куди веде посилання?</strong> Подумайте про використання назви сторінки, на яку веде посилання, в якості альтернативного тексту. <hr> <strong>текст заміщення:</strong> %(altText)',
    LINK_IMAGE_ALT_AND_TEXT_WARNING: 'Посилання на зображення містить як текст заміщення, так і <strong>текст навколишнього посилання.</strong> Якщо зображення є декоративним і використовується як функціональне посилання на іншу сторінку, розгляньте можливість помітити зображення як декоративне або нульове ‒ тексту навколишнього посилання має бути достатньо. <hr> <strong>текст заміщення:</strong> %(altText) <hr> <strong>Назва посилання:</strong> %(sanitizedText)',
    IMAGE_FIGURE_DECORATIVE: 'Зображення позначене як <strong>декоративне</strong> та буде проігноровано допоміжними технологіями. <hr> Незважаючи на наявність підпису, у більшості випадків зображення також повинно містити текст заміщення.<ul><li>текст заміщення повинен містити короткий опис того, що зображенно.</li><li>Підпис зазвичай повинен надавати контекст, щоб встановити зв’язок зображення з навколишнім змістом, або привернути увагу до певної інформації.</li></ul>Дізнайтесь більше: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">: alt (текст заміщення) в порівнянні з figcaption (підписом).</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: 'Не використовуйте однакові слова для текст заміщенняу та підпису. Пристрої читання з екрана будуть зчитувати їх двічі.<ul><li>текст заміщення повинен містити короткий опис того, що зображенно.</li><li>Підпис зазвичай повинен надавати контекст, щоб встановити зв’язок зображення з навколишнім змістом, або привернути увагу до певної інформації.</li></ul>Дізнайтесь більше: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">: alt (текст заміщення) в порівнянні з figcaption (підписом).</a><hr><strong>текст заміщення:</strong> %(altText)',
    IMAGE_DECORATIVE: 'Зображення позначене як <strong>декоративне</strong> та буде проігноровано допоміжними технологіями. Якщо зображення передає історію, настрій або важливу інформацію, переконайтесь, що до нього додано текст заміщення.',
    IMAGE_ALT_TOO_LONG: 'Опис текст заміщенняу задовгий. текст заміщення має бути коротким, але змістовним, як твіт (близько 100 символів). Якщо це складне зображення або діаграма, подумайте про те, щоб помістити довгий опис зображення в текст нижче або в компонент випадаючого списку (акордеону). <hr> <strong>текст заміщення (<span {r}>%(altLength)</span> символів):</strong> %(altText)',
    IMAGE_PASS: '<strong>текст заміщення:</strong> %(altText)',

    // Labels
    LABELS_MISSING_IMAGE_INPUT_MESSAGE: 'На кнопці зображення не вистачає текст заміщенняу. Будь ласка, додайте текст заміщення, щоб надати доступну назву. Наприклад: <em>Пошук</em> або <em>Подати</em>.',
    LABELS_INPUT_RESET_MESSAGE: 'Кнопки перезавантаження не слід використовувати без необхідності, оскільки їх легко активувати помилково. <hr> <strong>Порада!</strong> Дізнайтеся, чому <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">кнопки перезавантаження та відміни викликають проблеми зі зручністю використання.</a>',
    LABELS_ARIA_LABEL_INPUT_MESSAGE: 'Введення має доступне ім\'я, проте, будь ласка, переконайтеся, що у нього є видимий підпис. <hr> <strong>Етикетка для введення:</strong> %(sanitizedText)',
    LABELS_NO_FOR_ATTRIBUTE_MESSAGE: 'Із цим введенням не пов\'язана жодна назва. Додайте атрибут <code>for</code> що відповідає ідентифікатору цього входу. <hr> Ідентифікатор цього входу: <strong>id=&#34;%(id)&#34;</strong>',
    LABELS_MISSING_LABEL_MESSAGE: 'Із цим введенням не пов\'язана жодна назва. Будь ласка, додайте <code>id</code> до цього введення та додайте відповідний атрибут <code>for</code> до назви.',

    // Embedded content
    EMBED_VIDEO: 'Будь ласка, переконайтеся, що всі <strong>відеоматеріали мають приховані титри.</strong> Надання титрів для всіх аудіо- та відеоматеріалів є обов\'язковою вимогою рівня А. Титри допомагають людям з порушенням слуху або глухотою.',
    EMBED_AUDIO: 'Будь ласка, забезпечте транскрипцію всіх подкастів. Надання розшифровки аудіоконтенту є обов\'язковою вимогою рівня А. Транскрипція допомагає людям з порушенням слуху або глухотою, але можуть бути корисні всім. Розгляньте можливість розміщення транскрипції нижче або всередині випадаючого списку (акордеону).',
    EMBED_DATA_VIZ: 'Віджети візуалізації даних, подібні до цього, часто викликають труднощі у людей, які використовують клавіатуру або програму читання з екрана для навігації, і можуть становити значні труднощі для людей із слабким зором або дальтоніків. Рекомендується надавати ту саму інформацію в альтернативному (текстовому або табличному) форматі під віджетом. <hr> Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/images/complex/"> комплексні зображення.</a>',
    EMBED_MISSING_TITLE: 'Вбудований контент потребує доступної назви, що описує його вміст. Вкажіть унікальний заголовок (<code>title</code>) або атрибут <code>aria-label</code> на елементі <code>iframe</code>. Дізнайтесь більше про <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames.</a>',
    EMBED_GENERAL_WARNING: 'Неможливо перевірити вбудований вміст. Будь ласка, переконайтеся, що зображення мають текст заміщення, до відео є титри, текст має достатній контраст, а інтерактивні <a href="https://webaim.org/techniques/keyboard/">компоненти доступні для клавіатури.</a>',
    EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code> з елементами, на які не можна фокусуватися, не повинен мати <code>tabindex="-1"</code>. Вбудований вміст не буде доступний за допомогою клавіатури.',

    // Quality assurance
    QA_BAD_LINK: 'Знайдено неякісне посилання. Схоже, що посилання вказує на середовище розробки. <hr> Це посилання вказує на: <br> <strong {r}>%(el)</strong>',
    QA_IN_PAGE_LINK: 'Пошкоджений посилання в межах сторінки. Ціль посилання не відповідає жодному елементу на цій сторінці.',
    QA_BAD_ITALICS: 'Теги жирним шрифтом і курсивом мають змістовне значення і <strong>не</strong> повинні використовуватися для виділення цілих абзаців. Жирний текст слід використовувати для виділення слова або фрази. Курсив слід використовувати для виділення власних назв (наприклад, назв книг і статей), іноземних слів, цитат. Довгі цитати слід оформлювати як блокові цитати.',
    QA_PDF: 'Неможливо перевірити PDF-файли на доступність. PDF-файли вважаються веб-контентом і повинні бути доступні. PDF-файли часто створюють проблеми для користувачів програм читання з екрана (відсутні структурні теги або відсутні мітки полів форми) і для людей зі слабким зором (текст не розгортається під час збільшення).<ul><li>Якщо це форма, розгляньте можливість використання доступної HTML-форми у якості альтернативи.</li><li>Якщо це документ, розгляньте можливість перетворення його на веб-сторінку.</li></ul> В іншому випадку, перевірте <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">файли PDF на доступність у Acrobat DC.</a>',
    QA_DOCUMENT: 'Не вдалося перевірити документ на доступність. Документи, на які є посилання, вважаються веб-вмістом і також повинні бути доступними. Будь ласка, перегляньте цей документ вручну. <ul><li>Зробіть <a href="https://support.google.com/docs/answer/6199477?hl=uk">документ або презентацію в Google Workspace більш доступною.</a></li><li>Зробіть <a href="https://support.microsoft.com/uk-ua/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">документи Office більш доступними.</a></li></ul>',
    QA_PAGE_LANGUAGE: 'Мова сторінки не вказана! Будь ласка, <a href="https://www.w3.org/International/questions/qa-html-language-declarations">вкажіть мову в тезі HTML.</a>',
    QA_PAGE_TITLE: 'Відсутня назва сторінки! <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title">Укажіть назву сторінки.</a>',
    QA_BLOCKQUOTE_MESSAGE: 'Це заголовок? <strong {r}>%(sanitizedText)</strong> <hr> Блок-цитати слід використовувати лише для цитат. Якщо це задумано як заголовок, змініть блокову цитату на змістовний заголовок (наприклад, Заголовок 2 або Заголовок 3).',
    QA_FAKE_HEADING: 'Це заголовок? <strong {r}>%(boldtext)</strong><hr>Рядок жирного або великого тексту може виглядати як заголовок, але хтось, але людина, яка використовує програму читання з екрана, не зможе визначити його важливість або перейти до його змісту. Жирний або великий текст ніколи не повинен замінювати семантичні заголовки (від заголовка 2 до заголовка 6).',
    QA_SHOULD_BE_LIST: 'Ви намагаєтесь створити список? Знайдено можливий елемент списку: <strong {r}>%(firstPrefix)</strong> <hr> Переконайтеся, що ви використовуєте змістовні списки, вживаючи маркування або нумерацію. У разі використання змістовного списку допоміжні технології можуть передавати таку інформацію, як загальна кількість елементів та відносне положення кожного елемента у списку. Дізнайтесь більше про <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">змістовні списки.</a>',
    QA_UPPERCASE_WARNING: 'Знайдено  текст великими літерами. Деякі програми читання з екрана можуть інтерпретувати текст, написаний великими літерами, як абревіатуру і читати кожну літеру окремо. Крім того, деяким людям важче читати текст, написаний великими літерами, і він може виглядати як КРИК.',
    QA_DUPLICATE_ID: 'Виявлено <strong>дублікат ID</strong>. Відомо, що помилки дублювання ID можуть викликати проблеми для допоміжних технологій, коли вони намагаються взаємодіяти із вмістом. <hr> Будь ласка, видаліть або змініть наступний ідентифікатор: <strong {r}>%(id)</strong>',
    QA_TEXT_UNDERLINE_WARNING: 'Підкреслений текст можна переплутати з посиланнями. Розгляньте можливість використання іншого стилю, наприклад &lt;strong&gt;<strong>сильного акценту</strong>&lt;/strong&gt; або &lt;em&gt;<em>наголос</em>&lt;/em&gt;.',
    QA_SUBSCRIPT_WARNING: 'Параметри форматування нижнього та верхнього індексу слід використовувати лише для зміни положення тексту відповідно до друкарських угод або стандартів. Його <strong>не</strong> слід використовувати лише для презентації чи зовнішнього вигляду. Форматування цілих речень створює проблеми з читабельністю. Відповідні випадки використання включатимуть відображення степеня, порядкових номерів, наприклад 4<sup>th</sup> замість четвертого, і хімічних формул (H<sub>2</sub>O).',

    // Tables
    TABLES_MISSING_HEADINGS: 'Відсутні заголовки таблиць! Доступні таблиці потребують HTML-розмітки, яка вказує на клітинки заголовків та клітинки даних, визначаючи їх взаємозв\'язок. Ця інформація надає контекст для людей, які використовують допоміжні технології. Таблиці слід використовувати лише для табличних даних. <hr> Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/tables/">доступні таблиці.</a>',
    TABLES_SEMANTIC_HEADING: 'Семантичні заголовки, такі як Заголовок 2 або Заголовок 3, слід використовувати лише для розділів вмісту; над таблицях HTML. Вказуйте заголовки таблиць за допомогою елемента <code>&lt;th&gt;</code>. <hr> Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/tables/">доступні таблиці.</a>',
    TABLES_EMPTY_HEADING: 'Знайдено порожній заголовок таблиці! Заголовки таблиць ніколи не повинні бути порожніми. Важливо позначати заголовки рядків та/або стовпців, щоб передавати їх зв\'язок. Ця інформація забезпечує контекст для людей, які використовують допоміжні технології. Пам\'ятайте, що таблиці слід використовувати лише для табличних даних. Дізнайтеся більше про доступні таблиці. <hr> Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/tables/">доступні таблиці.</a>',

    // Contrast
    CONTRAST_ERROR: 'Цей текст недостатньо контрастний щодо фону. Коефіцієнт контрастності має бути не менше 4,5:1 для звичайного тексту та 3:1 для великого тексту. <hr> Коефіцієнт контрастності становить <strong {r}>%(cratio)</strong> для даного тексту: <strong {r}>%(sanitizedText)</strong>',
    CONTRAST_WARNING: 'Контрастність цього тексту не встановлена і потребує перевірки вручну. Переконайтеся, що текст і фон мають різко контрастні кольори. Коефіцієнт контрастності має бути не менше 4,5:1 для звичайного тексту та 3:1 для великого тексту. <hr> <strong>Будь ласка, перевірте:</strong> %(sanitizedText)',
    CONTRAST_INPUT_ERROR: 'Текст у цьому введенні недостатньо контрастний щодо фону. Коефіцієнт контрастності має бути не менше 4,5:1 для звичайного тексту та 3:1 для великого. <hr> Коефіцієнт контрастності: <strong {r}>%(cratio)</strong>',
  },
};

export { ua as default };
