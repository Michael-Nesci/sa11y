
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 4.0.0
  * @author Adam Chaboryk
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2024 Toronto Metropolitan University.
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
/*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
var bg = {
  // Bulgarian
  strings: {
    LANG_CODE: 'bg',
    MAIN_TOGGLE_LABEL: 'Проверка на достъпността',
    CONTAINER_LABEL: 'Проверка за достъпност',
    ERROR: 'Грешка',
    ERRORS: 'Грешки',
    WARNING: 'Предупреждение',
    WARNINGS: 'Предупреждения',
    GOOD: 'Добър',
    ON: 'На',
    OFF: 'Изключено',
    ALERT_TEXT: 'Предупреждение',
    ALERT_CLOSE: 'Затвори',
    OUTLINE: 'Описание',
    TITLE: 'Заглавие',
    ALT: 'АЛТ',
    IMAGES: 'Изображения',
    EDIT: 'Редактиране',
    NO_IMAGES: 'Изображения не са намерени.',
    DECORATIVE: 'Декоративен',
    ADVANCED: 'Разширени проверки',
    MISSING: 'Липсващ',
    PAGE_ISSUES: 'Проблеми на страницата',
    SETTINGS: 'Настройки',
    DARK_MODE: 'Тъмният режим',
    SHORTCUT_SR: 'Преминете към въпроса. Бърза клавишна комбинация: Alt S',
    SKIP_TO_ISSUE: 'Преминаване към въпроса',
    NEW_TAB: 'Отваря нов раздел',
    LINKED: 'Свързан',
    PANEL_HEADING: 'Проверка на достъпността',
    NO_ERRORS_FOUND: 'Не са открити грешки.',
    WARNINGS_FOUND: 'намерени предупреждения.',
    TOTAL_FOUND: 'общ брой намерени проблеми.',
    NOT_VISIBLE: 'Елементът, който се опитвате да видите, не е видим; може да е скрит или да се намира в компонент на акордеон или таб. Ето един преглед:',
    MISSING_ROOT: 'Цялата страница беше проверена за достъпност, тъй като целевата област <code>%(root)</code> не съществува.',
    HEADING_NOT_VISIBLE: 'Заглавието не е видимо; то може да е скрито или да се намира в компонент на акордеон или таб.',
    SKIP_TO_PAGE_ISSUES: 'Преминаване към страница Проблеми',
    CONSOLE_ERROR: 'Съжаляваме, но има проблем с проверката за достъпност на тази страница. Можете ли да го <a href="%(link)">докладвате чрез този формуляр</a> или на <a href="%(link)">GitHub</a>?',

    // Dismiss
    PANEL_DISMISS_BUTTON: 'Показване на %(dismissCount) отхвърлени предупреждения',
    DISMISS: 'Отхвърляне на',
    DISMISSED: 'Отхвърлени предупреждения',
    DISMISS_REMINDER: 'Моля, обърнете внимание, че предупрежденията се отхвърлят само <strong>временно</strong>. Изчистването на историята на браузъра и бисквитките ще възстанови всички отхвърлени преди това предупреждения във всички страници.',

    // Export
    DATE: 'Дата',
    PAGE_TITLE: 'Заглавие на страницата',
    RESULTS: 'Резултати',
    EXPORT_RESULTS: 'Износ на резултати',
    GENERATED: 'Резултатите са генерирани с %(tool).',
    PREVIEW: 'Преглед',
    ELEMENT: 'Елемент',
    PATH: 'Път',

    // Colour filters
    COLOUR_FILTER: 'Цветен филтър',
    PROTANOPIA: 'Protanopia',
    DEUTERANOPIA: 'Deuteranopia',
    TRITANOPIA: 'Tritanopia',
    MONOCHROMACY: 'Монохромност',
    COLOUR_FILTER_MESSAGE: 'Проверете за елементи, които са трудни за възприемане или разграничаване от други цветове.',
    RED_EYE: 'Червени слепи.',
    GREEN_EYE: 'Зелена щора.',
    BLUE_EYE: 'Синя сляпа.',
    MONO_EYE: 'Червени, сини и зелени слепи.',
    COLOUR_FILTER_HIGH_CONTRAST: 'Цветните филтри не работят в режим на висок контраст.',

    // Alternative text stop words
    SUS_ALT_STOPWORDS: [
      'изображение',
      'графичен',
      'снимка',
      'снимка',
    ],
    PLACEHOLDER_ALT_STOPWORDS: [
      'alt',
      'изображение',
      'снимка',
      'Декоративен',
      'заместител',
      'заместващо изображение',
      'Разделител',
    ],
    PARTIAL_ALT_STOPWORDS: [
      'кликнете върху',
      'Кликнете тук',
      'кликнете тук за повече',
      'Кликнете тук, за да научите повече',
      'като кликнете тук',
      'разгледайте',
      'Подробности тук',
      'изтегляне',
      'Изтегляне от тук',
      'разберете',
      'Научете повече',
      'формуляр',
      'тук',
      'информация',
      'информация',
      'връзка',
      'научете',
      'научете повече',
      'да се научите да',
      'повече',
      'страница',
      'хартия',
      'прочетете повече',
      'прочетете',
      'прочетете това',
      'този',
      'тази страница',
      'този уебсайт',
      'Преглед на',
      'разгледайте нашите',
      'уебсайт',
    ],
    WARNING_ALT_STOPWORDS: [
      'Кликнете тук',
    ],
    NEW_WINDOW_PHRASES: [
      'външен',
      'нов раздел',
      'нов прозорец',
      'изскачащи прозорци',
      'изскачащи',
    ],
    FILE_TYPE_PHRASES: [
      'документ',
      'електронна таблица',
      'изчислителен лист',
      'компресиран файл',
      'архивиран файл',
      'работен лист',
      'PowerPoint',
      'презентация',
      'инсталиране на',
      'видео',
      'аудио',
      'pdf',
    ],
    READABILITY: 'Четивност',
    AVG_SENTENCE: 'Средна стойност на думите в изречение:',
    COMPLEX_WORDS: 'Сложни думи:',
    TOTAL_WORDS: 'Думи:',
    VERY_DIFFICULT: 'Много трудно',
    DIFFICULT: 'Трудно',
    FAIRLY_DIFFICULT: 'Доста трудно',
    READABILITY_NO_CONTENT: 'Невъзможно е да се изчисли оценката за четимост. Не е намерен параграф <code>&lt;p&gt;</code> или съдържание на списък <code>&lt;li&gt;</code>.',
    READABILITY_NOT_ENOUGH: 'Недостатъчно съдържание за изчисляване на оценката за четимост.',
    HEADING_SKIPPED_LEVEL: 'Използвано е непоследователно ниво на заглавието. Заглавията никога не трябва да прескачат нива или да преминават от <strong>Heading %(prevLevel)</strong> към <strong {R}>Heading %(level)</strong>.',
    HEADING_EMPTY: 'Намерено е празно заглавие! За да го поправите, изтрийте този ред или променете формата му от <strong {R}>Heading %(level)</strong> на <strong>Normal</strong> или <strong>Paragraph</strong>.',
    HEADING_LONG: 'Курсът е дълъг! Заглавията трябва да се използват за организиране на съдържанието и предаване на структурата. Те трябва да са кратки, информативни и уникални. Моля, запазете заглавията по-малко от 160 знака (не повече от едно изречение). <hr> <strong {B}>%(HEADING_LENGTH) Символа</strong>',
    HEADING_FIRST: 'Първото заглавие на страницата обикновено трябва да бъде заглавие 1 или заглавие 2. Заглавие 1 трябва да е началото на раздела с основно съдържание и е основното заглавие, което описва цялостната цел на страницата. Научете повече за <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Структурата на заглавията.</a>',
    HEADING_MISSING_ONE: 'Липсва заглавие 1. Заглавие 1 трябва да е началото на основната област на съдържанието и е основното заглавие, което описва цялостната цел на страницата. Научете повече за <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Структурата на заглавията.</a>',
    HEADING_EMPTY_WITH_IMAGE: 'Заглавието няма текст, но съдържа изображение. Ако това не е заглавие, променете формата му от <strong {R}>Heading %(level)</strong> на <strong>Normal</strong> или <strong>Paragraph</strong>. В противен случай, моля, добавете alt текст към изображението, ако то не е декоративно.',
    PANEL_HEADING_MISSING_ONE: 'Липсва заглавие 1!',
    PANEL_NO_HEADINGS: 'Няма намерени заглавия.',
    LINK_EMPTY: 'Премахване на празни връзки без текст.',
    LINK_EMPTY_LABELLEDBY: 'Линкът има стойност за <code>aria-labelledby</code>, която е празна или не съвпада със стойността на атрибута <code>id</code> на друг елемент на страницата.',
    LINK_EMPTY_NO_LABEL: 'Връзката няма различим текст, който да е видим за екранни четци и други помощни технологии. За поправка: </li><li>Прибавете кратък текст, който описва къде ще ви отведе връзката.</li><li>Ако това е <a href="https://a11y-101.com/development/icons-and-links">връзка с икона или SVG,</a> вероятно липсва описателен етикет.</li><li>Ако смятате, че тази връзка е грешка, дължаща се на грешка при копиране/вмъкване, помислете за нейното изтриване.</li></ul>',
    LINK_LABEL: '<strong>Етикет на връзката:</strong> %(TEXT)',
    LINK_STOPWORD: 'Текстът на връзката може да не е достатъчно описателен извън контекста: <strong {R}>%(грешка)</strong><hr><strong>Съвет!</strong> Текстът на връзката винаги трябва да бъде ясен, уникален и смислен. Избягвайте често срещани думи като &quot;кликнете тук&quot; или &quot;научете повече&quot;',
    LINK_BEST_PRACTICES: 'Помислете за замяна на текста на връзката: <strong {R}>%(грешка)</strong><hr><ul><li>&quot;Кликнете тук&quot; поставя акцент върху механиката на мишката, когато много хора не използват мишка или може би разглеждат този уебсайт на мобилно устройство. Помислете за използването на друг глагол, който е свързан със задачата.</li><li>Избягвайте използването на HTML символи като призив за действие, освен ако не са скрити за помощните технологии.</li></ul>',
    LINK_URL: 'По-дългите и неразбираеми URL адреси, използвани като текст на връзката, може да са трудни за възприемане с помощта на помощни технологии. В повечето случаи е по-добре вместо URL адрес да се използва текст, който може да се чете от човек. Кратките URL адреси (като например началната страница на сайта) са подходящи. <hr> <strong>Съвет!</strong> Текстът на връзката винаги трябва да бъде ясен, уникален и смислен, за да може да бъде разбран извън контекста.',
    LINK_DOI: 'За уеб страници или само онлайн ресурси, <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">Ръководството за стила на АПА</a> препоръчва да се използват описателни връзки, като URL адресът или DOI на произведението се обгръща около заглавието му. По-дългите, по-малко разбираеми URL адреси, използвани като текст на връзката, може да са трудни за възприемане с помощни технологии.',
    LINK_NEW_TAB: 'Връзката се отваря в нов раздел или прозорец без предупреждение. Това може да бъде дезориентиращо, особено за хора, които трудно възприемат визуално съдържание. Второ, не винаги е добра практика да контролирате преживяването на някого или да вземате решения вместо него. Посочете, че връзката се отваря в нов прозорец в рамките на текста на връзката<hr><strong>Съвет!</strong> Научете най-добрите практики: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">отваряне на връзки в нови прозорци и раздели на браузъра.</a>',
    LINK_FILE_EXT: 'Връзката сочи към PDF файл или файл за изтегляне (напр. MP3, Zip, Word Doc) без предупреждение. Посочете типа на файла в текста на връзката. Ако става въпрос за голям файл, помислете за включване на размера на файла. <hr> <strong>Пример:</strong> Изпълнителен доклад (PDF, 3MB)',
    LINK_IDENTICAL_NAME: 'Връзката има идентичен текст като друга връзка, въпреки че сочи към различна страница. Множество връзки с един и същ текст могат да предизвикат объркване за хората, които използват екранни четци. <hr> Помислете дали да не направите следната връзка по-описателна, за да я разграничите от другите връзки: <strong {W}>%(TEXT)</strong>',
    MISSING_ALT_LINK_HAS_TEXT: 'Изображението се използва като връзка със заобикалящ го текст, въпреки че атрибутът alt трябва да бъде маркиран като декоративен или нулев.',
    MISSING_ALT_LINK: 'Изображението се използва като връзка, но липсва алтертекст! Моля, уверете се, че алтертекстът описва мястото, до което води връзката.',
    MISSING_ALT: 'Липсващ алт текст! Ако изображението предава история, настроение или важна информация, не забравяйте да го опишете.',
    LINK_ALT_FILE_EXT: 'Намерено е разширение на файла в алтертекста. Уверете се, че текстът alt описва дестинацията на връзката, а не буквално описание на изображението. Премахване: <strong {R}>%(ERROR)</strong> <hr> {ALT} {L} <strong {R}>%(ALT_TEXT)</strong>',
    LINK_PLACEHOLDER_ALT: 'Намерен е неописан или заместващ alt текст в свързано изображение. Уверете се, че текстът alt описва дестинацията на връзката, а не буквално описание на изображението. Заменете следния alt текст. <hr> {ALT} {L} <strong {R}>%(ALT_TEXT)</strong>',
    LINK_SUS_ALT: 'Подпомагащите технологии вече показват, че това е изображение, така че &quot;<strong {R}>%(ERROR)</strong>&quot; може да е излишно. Уверете се, че текстът alt описва местоназначението на връзката, а не буквално описание на изображението. <hr> {ALT} {L} <strong {W}>%(ALT_TEXT)</strong>',
    ALT_FILE_EXT: 'Намерено е разширение на файла в алтертекста. Ако изображението предава история, настроение или важна информация - не забравяйте да опишете изображението. Премахване: <strong {R}>%(ERROR)</strong> <hr> {ALT} <strong {R}>%(ALT_TEXT)</strong>',
    ALT_PLACEHOLDER: 'Открит е текст без описание или заместител. Заменете следния alt текст с нещо по-смислено. <hr> {ALT} <strong {R}>%(ALT_TEXT)</strong>',
    SUS_ALT: 'Подпомагащите технологии вече показват, че това е изображение, така че &quot;<strong {R}>%(ERROR)</strong>&quot; може да е излишно. <hr> {ALT} <strong {W}>%(ALT_TEXT)</strong>',
    LINK_HIDDEN_FOCUSABLE: 'Връзката има <code>aria-hidden=&quot;true&quot;</code>, но все още може да се фокусира с клавиатурата. Ако намерите, че връзката е излишна или дублирана, добавете също <code>tabindex=&quot;-1&quot;</code>.',
    LINK_IMAGE_NO_ALT_TEXT: 'Изображението в линка е маркирано като декоративно и няма текст на линка. Моля, добавете alt текст към изображението, който описва предназначението на връзката.',
    LINK_IMAGE_TEXT: 'Изображението е маркирано като декоративно, въпреки че връзката използва околния текст като описателен етикет.',
    LINK_IMAGE_LONG_ALT: 'Описанието на Alt текста на свързано изображение е <strong>прекалено дълго</strong>. Alt текстът на свързаните изображения трябва да описва мястото, до което води връзката, а не буквално описание на изображението. <strong>Помислете за използване на заглавието на страницата, към която води връзката, като алт текст.</strong> <hr> {ALT} {L} <strong {B}>%(altLength) Символа</strong> <strong {W}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT: 'Връзката на изображението съдържа текст alt. Описва ли алтертекстът мястото, до което ви води връзката? <strong>Помислете дали да не използвате заглавието на страницата, към която води връзката, като алт текст.</strong> <hr> {ALT} {L} <strong {W}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT_AND_TEXT: 'Връзката към изображението съдържа <strong>както alt текст, така и заобикалящ текст на връзката.</strong> Ако това изображение е декоративно и се използва като функционална връзка към друга страница, помислете дали да не маркирате изображението като декоративно или нулево - заобикалящият текст на връзката трябва да е достатъчен. <hr> {ALT} <strong {W}>%(ALT_TEXT)</strong> <hr> <strong {B}>Етикет на връзката:</strong> {L} <strong {W}>%(TEXT)</strong>',
    IMAGE_FIGURE_DECORATIVE: 'Изображението е маркирано като <strong>декоративно</strong> и ще бъде игнорирано от помощните технологии. <hr> Въпреки че е предоставен <strong>заглавие</strong>, в повечето случаи изображението трябва да има и alt текст. <ul><li>Алттекстът трябва да предоставя кратко описание на това, което се намира на изображението.</li><li>Заглавието обикновено трябва да предоставя контекст, който да свързва изображението със заобикалящото го съдържание, или да обръща внимание на конкретна информация.</li></ul>Научете повече: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt срещу figcaption.</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: 'Не използвайте едни и същи думи за текста на алтер и надписа. Екранните четци ще обявят информацията два пъти.<ul><li>The alt text should provide a concise description of what is in the image.</li><li>The caption should usually provide context to relate the image back to the surrounding content, or give attention to a particular piece of information.</li></ul> Learn more: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt срещу figcaption.</a> <hr> {ALT} <strong {W}>%(ALT_TEXT)</strong>',
    IMAGE_DECORATIVE: 'Изображението е маркирано като <strong>декоративно</strong> и ще бъде игнорирано от помощните технологии. Ако изображението предава история, настроение или важна информация - не забравяйте да добавите alt текст.',
    IMAGE_ALT_TOO_LONG: 'Описанието на Alt текста е <strong>прекалено дълго</strong>. Alt текстът трябва да бъде кратък, но съдържателен като <em>tweet</em> (около 100 знака). Ако става въпрос за сложно изображение или графика, помислете дали да не поставите дългото описание на изображението в текста под него или в компонент на хармоника. <hr> {ALT} <strong {B}>%(altLength) Символа</strong> <strong {W}>%(ALT_TEXT)</strong>',
    IMAGE_DECORATIVE_CAROUSEL: 'Изображението е маркирано като декоративно, но всички изображения в въртележка или галерия трябва да включват описателен алтернативен текст, за да се осигури равностоен опит за всеки.',
    IMAGE_PASS: '{ALT} %(ALT_TEXT)',
    LABELS_MISSING_IMAGE_INPUT: 'В бутона за изображения липсва текст alt. Моля, добавете alt текст, за да предоставите достъпно име. Например: <em>Издирване</em> или <em>Изпращане</em>.',
    LABELS_INPUT_RESET: 'Бутоните за нулиране не трябва да се използват, освен ако не са изрично необходими, тъй като е лесно да бъдат активирани по погрешка. <hr> <strong>Съвет!</strong> Научете защо <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">бутоните за нулиране и отмяна създават проблеми с ползваемостта.</a>',
    LABELS_ARIA_LABEL_INPUT: 'Входът има достъпно име, но се уверете, че има и видим етикет. <hr> <strong {B}>Етикет за вход</strong> <strong {W}>%(TEXT)</strong>',
    LABELS_NO_FOR_ATTRIBUTE: 'Няма етикет, свързан с този вход. Добавете атрибут <code>for</code> към етикета, който съответства на <code>id</code> на този вход. <hr> Идентификаторът на този вход е: <strong>id=&#34;%(id)&#34;</strong>',
    LABELS_MISSING_LABEL: 'Няма етикет, свързан с този вход. Моля, добавете <code>id</code> към този вход и добавете съответстващ атрибут <code>for</code> към етикета.',
    EMBED_VIDEO: 'Моля, уверете се, че <strong>всички видеоклипове имат затворени субтитри.</strong> Осигуряването на субтитри за цялото аудио и видео съдържание е задължително изискване на ниво А. Субтитрите подпомагат хората с D/глухота или с увреден слух.',
    EMBED_AUDIO: 'Моля, уверете се, че предоставяте <strong>препис за всички подкастове.</strong> Предоставянето на преписи за аудиосъдържание е задължително изискване на ниво А. Транскрипциите подпомагат хората с Г/глухота или с увреден слух, но могат да бъдат от полза за всички. Помислете за поставяне на транскрипцията под или в панел с хармоника.',
    EMBED_DATA_VIZ: 'Подобни уиджети за визуализация на данни често са проблематични за хора, които използват клавиатура или екранен четец за навигация, и могат да създадат значителни трудности за хора със слабо зрение или цветна слепота. Препоръчително е да предоставите същата информация в алтернативен формат (текст или таблица) под уиджета. <hr> Научете повече за <a href="https://www.w3.org/WAI/tutorials/images/complex">сложните изображения.</a>',
    EMBED_MISSING_TITLE: 'Вграденото съдържание изисква достъпно име, което описва съдържанието му. Моля, посочете уникален атрибут <code>title</code> или <code>aria-label</code> на елемента <code>iframe</code>. Научете повече за <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames.</a>.',
    EMBED_GENERAL: 'Невъзможно е да се провери вграденото съдържание. Моля, уверете се, че изображенията имат alt текст, видеоклиповете имат надписи, текстът е достатъчно контрастен, а интерактивните компоненти са <a href="https://webaim.org/techniques/keyboard/">достъпни от клавиатурата.</a>',
    EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code> с фокусируеми елементи не трябва да има <code>tabindex="-1"</code>. Вграденото съдържание няма да бъде достъпно с клавиатурата.',
    QA_BAD_LINK: 'Открита е лоша връзка. Изглежда, че връзката сочи към среда за разработка. <hr> Тази връзка сочи към: <br> <strong {R}>%(LINK)</strong>',
    QA_IN_PAGE_LINK: 'Счупена връзка към същата страница. Целта на връзката не съответства на никакъв елемент на тази страница.',
    QA_STRONG_ITALICS: 'Таговете за удебелен шрифт и курсив имат семантично значение и не трябва да се използват за подчертаване на цели параграфи. Удебеленият текст трябва да се използва за силно <strong>подчертаване</strong> на дадена дума или фраза. Курсивът трябва да се използва за подчертаване на собствени имена (т.е. заглавия на книги и статии), чужди думи, кавички. Дългите цитати трябва да се форматират като блок-цитат.',
    QA_PDF: 'Невъзможност за проверка на PDF файловете за достъпност. PDF файловете се считат за уеб съдържание и също трябва да бъдат достъпни. PDF файловете често съдържат проблеми за хора, които използват екранни четци (липсващи структурни тагове или липсващи етикети на полетата на формулярите), и за хора със слабо зрение (текстът не се пренарежда при увеличаване). <ul><li>Ако това е формуляр, помислете за използване на достъпен HTML формуляр като алтернатива.</li><li>Ако това е документ, помислете за преобразуването му в уеб страница.</li></ul>В противен случай, моля, проверете <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF за достъпност в Acrobat DC.</a>',
    QA_DOCUMENT: 'Не мога да проверя документа за достъпност. Свързаните документи се считат за уеб съдържание и също трябва да бъдат достъпни. Моля, прегледайте ръчно този документ. <ul><li>Подобрете достъпността на Вашия <a href="https://support.google.com/docs/answer/6199477?hl=bg">документ или презентация в Google Workspace.</a></li><li>Подобрете достъпността на Вашите <a href="https://support.microsoft.com/bg/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">документи от Office.</a></li></ul>',
    QA_PAGE_LANG: 'Езикът на страницата не е обявен! Моля, <a href="https://www.w3.org/International/questions/qa-html-language-declarations">декларирайте езика в HTML тага.</a>',
    QA_PAGE_TITLE: 'Липсващо заглавие на страницата! Моля, посочете <a href="https://developer.mozilla.org/bg/docs/Web/HTML/Element/title">заглавие на страницата.</a>',
    QA_BLOCKQUOTE: 'Това заглавие ли е? <strong {W}>%(TEXT)</strong> <hr> Блок кавичките трябва да се използват само за цитати. Ако това е предназначено за заглавие, променете тази блокова кавичка на семантично заглавие (напр. заглавие 2 или заглавие 3).',
    QA_FAKE_HEADING: 'Това заглавие ли е? <strong {W}>%(TEXT)</strong> <hr> Ред с удебелен или голям текст може да изглежда като заглавие, но човек, който използва екранен четец, не може да разбере, че е важен, или да премине към съдържанието му. Удебеленият или големият текст никога не трябва да замества семантичните заглавия (заглавия от 2 до 6).',
    QA_FAKE_LIST: 'Опитвате се да създадете списък? Намерен е възможен елемент от списък: <strong {R}>%(firstPrefix)</strong> <hr> Уверете се, че използвате семантични списъци, като вместо това използвате бутоните за форматиране на курсив или число. Когато се използва семантичен списък, помощните технологии могат да предадат информация като общия брой елементи и относителната позиция на всеки елемент в списъка. Научете повече за <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">семантичните списъци.</a>',
    QA_UPPERCASE: 'Намерени са всички главни букви. Някои екранни четци могат да интерпретират текста с главни букви като акроним и да четат всяка буква поотделно. Освен това някои хора смятат, че всички главни букви се четат по-трудно и могат да създадат впечатлението, че се крещи.',
    QA_DUPLICATE_ID: 'Намерен е <strong>дубликат на ID</strong>. Известно е, че грешките с дублиращи се идентификатори причиняват проблеми на помощните технологии, когато те се опитват да взаимодействат със съдържанието. <hr> Моля, премахнете или променете следния ID: <strong {R}>%(id)</strong>',
    QA_UNDERLINE: 'Подчертаният текст може да бъде объркан с връзки. Помислете за използването на друг стил, например <code>&lt;strong&gt;</code><strong>strong importance</strong><code>&lt;/strong&gt;</code> или <code>&lt;em&gt;</code><em>emphasis</em><code>&lt;/em&gt;</code>.',
    QA_SUBSCRIPT: 'Опциите за форматиране на долни и горни индекси трябва да се използват само за промяна на позицията на текста за типографски конвенции или стандарти. Те не трябва да се използват единствено за целите на представянето или външния вид. Форматирането на цели изречения създава проблеми с четливостта. Подходящите случаи на употреба включват показване на експоненти, редови числа, като например 4<sup>th</sup> вместо fourth, и химически формули (например H<sub>2</sub>O).',
    QA_NESTED_COMPONENTS: 'Избягвайте вграждането на интерактивни компоненти на оформление, като например поставяне на акордеони в табове или табове в акордеони. Това може да усложни навигацията, да увеличи когнитивното натоварване и да доведе до пропускане на съдържание.',
    TABLES_MISSING_HEADINGS: 'Липсват заглавия на таблици! Достъпните таблици се нуждаят от HTML маркировка, която обозначава клетките със заглавия и клетките с данни и определя тяхната връзка. Тази информация осигурява контекст за хората, които използват помощни технологии. Таблиците трябва да се използват само за таблични данни. <hr> Научете повече за <a href="https://www.w3.org/WAI/tutorials/tables/">достъпните таблици.</a>',
    TABLES_SEMANTIC_HEADING: 'Семантичните заглавия, като например Heading 2 или Heading 3, трябва да се използват само за части от съдържанието; <strong>не</strong> в HTML таблици. Вместо това посочвайте заглавия на таблици, като използвате елемента <code>&lt;th&gt;</code>. <hr> Научете повече за <a href="https://www.w3.org/WAI/tutorials/tables/">достъпните таблици.</a>',
    TABLES_EMPTY_HEADING: 'Открито е празно заглавие на таблица! Заглавията на таблиците никога не трябва да са празни. Важно е да се обозначат заглавията на редовете и/или колоните, за да се предаде тяхната връзка. Тази информация предоставя контекст на хората, които използват помощни технологии. Моля, имайте предвид, че таблиците трябва да се използват само за таблични данни. <hr> Научете повече за <a href="https://www.w3.org/WAI/tutorials/tables/">достъпните таблици.</a>',
    CONTRAST_ERROR: 'Този текст не контрастира достатъчно с фона. Контрастното съотношение трябва да бъде поне 4,5:1 за нормален текст и 3:1 за голям текст. <hr> <strong {B}>Съотношение на контраста</strong> <strong {B}>%(RATIO)</strong> <strong {R}>%(TEXT)</strong>',
    CONTRAST_WARNING: 'Контрастът на този текст е неизвестен и трябва да бъде проверен ръчно. Уверете се, че текстът и фонът имат силно контрастиращи цветове. Съотношението на контраста трябва да бъде поне 4,5:1 за нормален текст и 3:1 за голям текст. <hr> Моля, прегледайте:  <strong {W}>%(TEXT)</strong>',
    CONTRAST_INPUT: 'Текстът в този вход не контрастира достатъчно с фона. Съотношението на контраста трябва да е поне 4,5:1 за нормален текст и 3:1 за голям текст. <hr>  <strong {B}>Съотношение на контраста</strong> <strong {B}>%(RATIO)</strong>',
  },
};

export { bg as default };
