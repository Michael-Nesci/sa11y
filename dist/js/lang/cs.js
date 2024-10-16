
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
var cs = {
  // Czech
  strings: {
    LANG_CODE: 'cs',
    MAIN_TOGGLE_LABEL: 'Zkontrolujte přístupnost',
    CONTAINER_LABEL: 'Kontrola přístupnosti',
    ERROR: 'Chyba',
    ERRORS: 'Chyby',
    WARNING: 'Varování',
    WARNINGS: 'Varování',
    GOOD: 'Dobrý',
    ON: 'Zapnuto',
    OFF: 'Vypnuto',
    ALERT_TEXT: 'Upozornění',
    ALERT_CLOSE: 'Zavřít',
    OUTLINE: 'Obsah',
    TITLE: 'Titul',
    ALT: 'ALT',
    IMAGES: 'Obrázky',
    EDIT: 'Upravit',
    NO_IMAGES: 'Žádné obrázky nenalezeny.',
    DECORATIVE: 'Dekorativní',
    MISSING: 'Chybějící',
    PAGE_ISSUES: 'Problémy se stránkami',
    SETTINGS: 'Nastavení',
    DEVELOPER_CHECKS: 'Kontrola vývojáře',
    DEVELOPER_DESC: 'Kontroluje problémy, které mohou vyžadovat znalosti programování k opravě.',
    DARK_MODE: 'Tmavý režim',
    SHORTCUT_SR: 'Přeskočit na vydání. Klávesová zkratka: Alt S',
    SKIP_TO_ISSUE: 'Přeskočit na vydání',
    NEW_TAB: 'Otevře novou kartu',
    LINKED: 'Propojeno',
    PANEL_HEADING: 'Kontrola přístupnosti',
    NO_ERRORS_FOUND: 'Nebyly nalezeny žádné chyby.',
    WARNINGS_FOUND: 'nalezená varování.',
    TOTAL_FOUND: 'celkový počet nalezených problémů.',
    NOT_VISIBLE: 'Položka, kterou se snažíte zobrazit, není viditelná; může být skrytá nebo se může nacházet uvnitř akordeonu nebo karty. Zde je náhled:',
    MISSING_ROOT: 'Byla zkontrolována přístupnost celé stránky, protože cílová oblast <code>%(root)</code> neexistuje.',
    HEADING_NOT_VISIBLE: 'Záhlaví není viditelné; může být skryté nebo se může nacházet v komponentě akordeonu nebo karty.',
    SKIP_TO_PAGE_ISSUES: 'Přeskočit na stránku Problémy',
    CONSOLE_ERROR: 'Omlouváme se, ale na této stránce je problém s kontrolou přístupnosti. Můžete ji prosím <a href="%(link)">nahlásit prostřednictvím tohoto formuláře</a> nebo na <a href="%(link)">GitHubu</a>?',

    // Dismiss
    PANEL_DISMISS_BUTTON: 'Zobrazit %(dismissCount) zamítnutá',
    DISMISS: 'Zamítnout',
    DISMISS_ALL: 'Zamítnout vše',
    DISMISSED: 'Zamítnuto',
    DISMISS_REMINDER: 'Vezměte prosím na vědomí, že upozornění jsou pouze <strong>dočasně</strong> zamítnuta. Vymazání historie prohlížeče a cookies obnoví všechna dříve zamítnutá upozornění na všech stránkách.',

    // Export
    DATE: 'Datum',
    PAGE_TITLE: 'Název stránky',
    RESULTS: 'Výsledky',
    EXPORT_RESULTS: 'Exportovat výsledky',
    GENERATED: 'Výsledky generovány s %(tool).',
    PREVIEW: 'Náhled',
    ELEMENT: 'Prvek',
    PATH: 'Cesta',

    // Colour filters
    COLOUR_FILTER: 'Barevný filtr',
    PROTANOPIA: 'Protanopia',
    DEUTERANOPIA: 'Deuteranopia',
    TRITANOPIA: 'Tritanopia',
    MONOCHROMACY: 'Monochromatičnost',
    COLOUR_FILTER_MESSAGE: 'Zkontrolujte, zda nejsou prvky, které jsou obtížně vnímatelné nebo odlišitelné od jiných barev.',
    RED_EYE: 'Červený slepec.',
    GREEN_EYE: 'Zelená roleta.',
    BLUE_EYE: 'Modrá roleta.',
    MONO_EYE: 'Červená, modrá a zelená barva pro nevidomé.',
    COLOUR_FILTER_HIGH_CONTRAST: 'Barevné filtry nefungují v režimu vysokého kontrastu.',

    // Alternative text stop words
    SUS_ALT_STOPWORDS: [
      'obrázek',
      'grafika',
      'obrázek',
      'foto',
    ],
    PLACEHOLDER_ALT_STOPWORDS: [
      'alt',
      'obrázek',
      'foto',
      'dekorativní',
      'zástupný symbol',
      'zástupný obrázek',
      'distanční rámeček',
    ],
    PARTIAL_ALT_STOPWORDS: [
      'klikněte na',
      'klikněte zde',
      'klikněte zde pro více informací',
      'klikněte zde a dozvíte se více',
      'kliknutím zde',
      'podívejte se',
      'podrobně zde',
      'ke stažení',
      'ke stažení zde',
      'zjistit',
      'zjistit více',
      'formulář',
      'zde',
      'informace',
      'odkaz',
      'naučit se',
      'dozvědět se více',
      'více informací',
      'naučit se',
      'více',
      'stránka',
      'papír',
      'přečtěte si',
      'přečtěte si více',
      'přečtěte si toto',
      'tento',
      'tato stránka',
      'tyto webové stránky',
      'na těchto webových stránkách',
      'zobrazit',
      'prohlédněte si naše',
      'webové stránky',
    ],
    WARNING_ALT_STOPWORDS: [
      'klikněte zde',
    ],
    NEW_WINDOW_PHRASES: [
      'externí',
      'nová karta',
      'nové okno',
      'pop-up',
      'vyskakovat',
    ],
    FILE_TYPE_PHRASES: ['document', 'dokument', 'tabulka', 'výpočtový list', 'komprimovaný soubor', 'archivovaný soubor', 'pracovní list', 'powerpoint', 'prezentace', 'instalace', 'video', 'zvuk', 'pdf'],

    // Readability
    READABILITY: 'Čitelnost',
    AVG_SENTENCE: 'Průměrný počet slov na větu:',
    COMPLEX_WORDS: 'Složitá slova:',
    TOTAL_WORDS: 'Slova:',
    VERY_DIFFICULT: 'Velmi obtížné',
    DIFFICULT: 'Obtížné',
    FAIRLY_DIFFICULT: 'Poměrně obtížné',
    READABILITY_NO_CONTENT: 'Nelze vypočítat skóre čitelnosti. Nebyl nalezen žádný odstavec <code>&lt;p&gt;</code> ani obsah seznamu <code>&lt;li&gt;</code>.',
    READABILITY_NOT_ENOUGH: 'Nedostatečný obsah pro výpočet skóre čitelnosti.',

    // Headings
    HEADING_SKIPPED_LEVEL: 'Použitá úroveň nadpisu, která není po sobě jdoucí. Nadpisy by nikdy neměly přeskakovat úrovně nebo přecházet z <strong>Nadpisu %(prevLevel)</strong> na <strong {C}>Nadpis %(level)</strong>.',
    HEADING_EMPTY: 'Nalezena prázdná rubrika! Chcete-li to opravit, odstraňte tento řádek nebo změňte jeho formát z <strong {C}>Záhlaví %(level)</strong> na <strong>Normální</strong> nebo <strong>Odstavec</strong>.',
    HEADING_LONG: 'Záhlaví je dlouhé! Nadpisy by měly sloužit k uspořádání obsahu a vyjádření struktury. Měly by být stručné, informativní a jedinečné. Udržujte nadpisy kratší než 160 znaků (ne delší než jedna věta). <hr> <strong {B}>%(HEADING_LENGTH) Znaků</strong>',
    HEADING_FIRST: 'Prvním nadpisem na stránce by obvykle měl být nadpis 1 nebo nadpis 2. Nadpis 1 by měl být začátkem hlavní části obsahu a je hlavním nadpisem, který popisuje celkový účel stránky. Více informací o <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Struktuře nadpisů.</a>.',
    HEADING_MISSING_ONE: 'Chybějící nadpis 1. Nadpis 1 by měl být začátkem hlavní oblasti obsahu a je to hlavní nadpis, který popisuje celkový účel stránky. Více informací o <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Struktuře nadpisů.</a>.',
    HEADING_EMPTY_WITH_IMAGE: 'Nadpis neobsahuje žádný text, ale obrázek. Pokud se nejedná o nadpis, změňte jeho formát z <strong {C}>Nadpis %(level)</strong> na <strong>Normální</strong> nebo <strong>Odstavec</strong>. V opačném případě přidejte k obrázku alt text, pokud není ozdobný.',
    PANEL_HEADING_MISSING_ONE: 'Chybí nadpis 1!',
    PANEL_NO_HEADINGS: 'Nebyly nalezeny žádné záhlaví.',

    // Links
    LINK_EMPTY: 'Odstranění prázdných odkazů bez textu.',
    LINK_EMPTY_LABELLEDBY: 'Odkaz má hodnotu <code>aria-labelledby</code>, která je prázdná nebo neodpovídá hodnotě atributu <code>id</code> jiného prvku na stránce.',
    LINK_EMPTY_NO_LABEL: 'Odkaz nemá čitelný text, který by byl viditelný pro čtečky obrazovky a další asistenční technologie. Oprava: </li><li>Přidejte stručný text, který popisuje, kam odkaz vede.</li><li>Jestliže se jedná o <a href="https://a11y-101.com/development/icons-and-links">odkaz na ikonu nebo SVG,</a> pravděpodobně chybí popisný štítek.</li><li>Pokud si myslíte, že tento odkaz je chybou způsobenou chybou kopírování/vkládání, zvažte jeho odstranění.</li></ul>',
    LINK_STOPWORD: 'Text odkazu nemusí být z kontextu dostatečně popisný: <strong {C}>%(ERROR)</strong> <hr> <strong>Tip!</strong> Text odkazu by měl být vždy jasný, jedinečný a smysluplný. Vyhněte se běžným slovům jako &quot;klikněte zde&quot; nebo &quot;dozvědět se více&quot;',
    LINK_BEST_PRACTICES: 'Zvažte nahrazení textu odkazu: <strong {C}>%(ERROR)</strong><hr><ul><li>&quot;Klikněte zde&quot; klade důraz na mechaniku myši, ačkoli mnoho lidí myš nepoužívá nebo si tyto webové stránky prohlíží na mobilním zařízení. Zvažte použití jiného slovesa, které se vztahuje k danému úkolu.</li><li>Vyhněte se používání symbolů HTML jako výzvy k akci, pokud nejsou skryté pro asistenční technologie.</li></ul>',
    LINK_URL: 'Delší a méně srozumitelné adresy URL použité jako text odkazu by mohly být obtížně poslouchatelné pomocí asistenční technologie. Ve většině případů je lepší použít místo adresy URL lidsky čitelný text. Krátké adresy URL (například domovská stránka webu) jsou v pořádku.<hr><strong>Tip!</strong> Text odkazu by měl být vždy jasný, jedinečný a smysluplný, aby mohl být pochopen i mimo kontext.',
    LINK_DOI: 'Pro webové stránky nebo zdroje pouze online doporučuje <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">průvodce stylem APA</a> používat popisné odkazy tak, že kolem názvu díla uvedete adresu URL nebo DOI. Delší a méně srozumitelné adresy URL použité jako text odkazu by mohly být při přístupu pomocí asistenčních technologií obtížně srozumitelné.',
    LINK_NEW_TAB: 'Odkaz se bez varování otevře v nové kartě nebo okně. To může být dezorientující, zejména pro lidi, kteří mají potíže s vnímáním vizuálního obsahu. Za druhé, není vždy vhodné kontrolovat něčí zážitek nebo rozhodovat za něj. Uveďte, že se odkaz otevírá v novém okně, v textu odkazu<hr><strong>Tip!</strong> Naučte se osvědčené postupy: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">otevírání odkazů v nových oknech a kartách prohlížeče.</a>',
    LINK_FILE_EXT: 'Odkaz odkazuje na soubor PDF nebo soubor ke stažení (např. MP3, Zip, dokument Word) bez varování. Typ souboru uveďte v textu odkazu. Pokud se jedná o velký soubor, zvažte uvedení jeho velikosti.<hr><strong>Příklad:</strong> Výkonná zpráva (PDF, 3 MB)',
    LINK_IDENTICAL_NAME: 'Odkaz má stejný text jako jiný odkaz, přestože odkazuje na jinou stránku. Více odkazů se stejným textem může způsobit zmatek u lidí, kteří používají čtečky obrazovky. <strong>Zvažte, zda následující odkaz nebude více popisný, abyste ho lépe odlišili od ostatních odkazů.</strong> <hr> <strong {B}>Přístupné jméno</strong> <strong {C}>%(TEXT)</strong>',

    // Images
    MISSING_ALT_LINK_HAS_TEXT: 'Obrázek se používá jako odkaz s okolním textem, ačkoli atribut alt by měl být označen jako dekorativní nebo nulový.',
    MISSING_ALT_LINK: 'Obrázek se používá jako odkaz, ale chybí text alt! Ujistěte se, že text alt popisuje, kam odkaz vede.',
    MISSING_ALT: 'Chybějící text alt! Pokud obrázek vyjadřuje příběh, náladu nebo důležitou informaci, nezapomeňte ho popsat.',
    LINK_ALT_FILE_EXT: 'Nalezená přípona souboru v textu alt. Ujistěte se, že text alt popisuje cíl odkazu, nikoli doslovný popis obrázku. Odstranit: <strong {C}>%(ERROR)</strong> <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_PLACEHOLDER_ALT: 'Nalezen nepopsaný nebo zástupný text alt v odkazovaném obrázku. Ujistěte se, že text alt popisuje cíl odkazu, nikoli doslovný popis obrázku. Nahraďte následující text alt. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_SUS_ALT: 'Asistivní technologie již indikují, že se jedná o obrázek, takže &quot;<strong {C}>%(ERROR)</strong>&quot; může být zbytečné. Zajistěte, aby text alt popisoval cíl odkazu, nikoli doslovný popis obrázku. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    ALT_FILE_EXT: 'Nalezená přípona souboru v textu alt. Pokud obrázek vyjadřuje příběh, náladu nebo důležitou informaci, nezapomeňte ho popsat. Odstraňte: <strong {C}>%(ERROR)</strong> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    ALT_PLACEHOLDER: 'Nalezen nepopsaný nebo zástupný text alt. Nahraďte následující alt text něčím smysluplnějším. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>.',
    SUS_ALT: 'Asistivní technologie již indikují, že se jedná o obrázek, takže &quot;<strong {C}>%(ERROR)</strong>&quot; může být zbytečné. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_NO_ALT_TEXT: 'Obrázek v odkazu je označen jako dekorativní a není v něm žádný text odkazu. Přidejte prosím k obrázku text alt, který popisuje cíl odkazu.',
    LINK_IMAGE_TEXT: 'Obrázek je označen jako dekorativní, ačkoli odkaz používá okolní text jako popisek.',
    LINK_IMAGE_LONG_ALT: 'Popis Alt textu u odkazovaného obrázku je <strong>příliš dlouhý</strong>. Text alt u odkazovaných obrázků by měl popisovat, kam odkaz vede, nikoli doslovný popis obrázku. <strong>Zvažte, zda jako alt text nepoužít název stránky, na kterou odkazuje.</strong> <hr> {ALT} {L} <strong {B}>%(altLength) Znaků</strong> <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT: 'Odkaz na obrázek obsahuje text alt. <strong>Popisuje text alt, kam vás odkaz zavede?</strong> Zvažte, zda jako alt text nepoužít název stránky, na kterou odkazuje. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT_AND_TEXT: 'Odkaz na obrázek obsahuje <strong>jak text alt, tak okolní text odkazu.</strong> Pokud je tento obrázek dekorativní a používá se jako funkční odkaz na jinou stránku, zvažte označení obrázku jako dekorativního nebo nulového - okolní text odkazu by měl být dostačující. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong> <hr> <strong {B}>Přístupné jméno</strong> {L} <strong {C}>%(TEXT)</strong>',
    IMAGE_FIGURE_DECORATIVE: 'Obrázek je označen jako <strong>dekorativní</strong> a asistenční technologie jej budou ignorovat. <hr> Přestože byl uveden <strong>nadpis</strong>, obrázek by měl mít ve většině případů také alt text. <ul><li>Titul alt by měl obsahovat stručný popis toho, co je na obrázku.</li><li>Titul by měl obvykle poskytovat kontext, aby obrázek souvisel s okolním obsahem, nebo upozorňovat na konkrétní informaci.</li></ul>Zjistěte více: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: 'Nepoužívejte stejná slova pro text alt i titulek. Čtečky obrazovky budou informace oznamovat dvakrát.<ul><li>Text alt by měl obsahovat stručný popis toho, co je na obrázku.</li><li>Titul by měl obvykle poskytovat kontext, aby obrázek souvisel s okolním obsahem, nebo upozorňovat na konkrétní informaci.</li></ul> Další informace: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    IMAGE_DECORATIVE: 'Obrázek je označen jako <strong>dekorativní</strong> a asistenční technologie jej budou ignorovat. Pokud obrázek vyjadřuje příběh, náladu nebo důležitou informaci - nezapomeňte přidat alt text.',
    IMAGE_ALT_TOO_LONG: 'Alt text popisu je <strong>příliš dlouhý</strong>. Alt text by měl být stručný, ale výstižný jako <em>tweet</em> (přibližně 100 znaků). Pokud se jedná o složitý obrázek nebo graf, zvažte umístění dlouhého popisu obrázku do textu pod ním nebo do akordeonové komponenty. <hr> {ALT} <strong {B}>%(altLength) Znaků</strong> <strong {C}>%(ALT_TEXT)</strong>',
    IMAGE_DECORATIVE_CAROUSEL: 'Obrázek je označen jako dekorativní, ale všechny obrázky v kolotoči nebo galerii by měly obsahovat popisný alternativní text, aby byla zajištěna rovnocenná zkušenost pro každého.',
    IMAGE_PASS: '{ALT} %(ALT_TEXT)',

    // Form labels
    LABELS_MISSING_IMAGE_INPUT: 'U tlačítka obrázku chybí text alt. Přidejte prosím text alt a uveďte přístupný název. Například: <em>Hledat</em> nebo <em>Odeslat</em>.',
    LABELS_INPUT_RESET: 'Tlačítka resetování by se neměla používat, pokud to není výslovně nutné, protože je lze snadno aktivovat omylem. <hr> <strong>Tip!</strong> Přečtěte si, proč <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">tlačítka Reset a Cancel představují problém s použitelností.</a>',
    LABELS_ARIA_LABEL_INPUT: 'Vstup má přístupný název, ale zajistěte, aby byl viditelný i štítek. <hr> <strong {B}>Přístupné jméno</strong> <strong {C}>%(TEXT)</strong>',
    LABELS_NO_FOR_ATTRIBUTE: 'K tomuto vstupu není přiřazen žádný štítek. Přidejte atribut <code>for</code> ke štítku, který odpovídá <code>id</code> tohoto vstupu. <hr> ID tohoto vstupu je: <strong>id=&#34;%(id)&#34;</strong>.',
    LABELS_MISSING_LABEL: 'K tomuto vstupu není přiřazen žádný štítek. Přidejte prosím k tomuto vstupu <code>id</code> a ke štítku přidejte odpovídající atribut <code>for</code>.',

    // Embedded content
    EMBED_VIDEO: 'Zajistěte, aby <strong>všechna videa byla opatřena skrytými titulky.</strong> Poskytování titulků pro veškerý audio a video obsah je povinným požadavkem úrovně A. Titulky podporují osoby s postižením D/neslyšící nebo nedoslýchavé.',
    EMBED_AUDIO: 'Ujistěte se prosím, že jste poskytli <strong>přepis všech podcastů.</strong> Poskytování přepisů zvukového obsahu je povinným požadavkem úrovně A. Přepisy podporují osoby s poruchou sluchu nebo neslyšící, ale mohou být přínosem pro všechny. Zvažte umístění přepisu pod nebo v rámci akordeonového panelu.',
    EMBED_DATA_VIZ: 'Widgety pro vizualizaci dat, jako je tento, jsou často problematické pro lidi, kteří k navigaci používají klávesnici nebo čtečku obrazovky, a mohou představovat značné potíže pro lidi se slabým zrakem nebo barvoslepostí. Doporučujeme poskytovat stejné informace v alternativním (textovém nebo tabulkovém) formátu pod widgetem. <hr> Další informace o <a href="https://www.w3.org/WAI/tutorials/images/complex">komplexních obrázcích.</a>',
    EMBED_MISSING_TITLE: 'Vložený obsah vyžaduje přístupný název, který popisuje jeho obsah. Uveďte jedinečný atribut <code>title</code> nebo <code>aria-label</code> na elementu <code>iframe</code>. Další informace o <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrame.</a>.',
    EMBED_GENERAL: 'Nelze zkontrolovat vložený obsah. Ujistěte se prosím, že obrázky mají alt text, videa mají titulky, text je dostatečně kontrastní a interaktivní komponenty jsou <a href="https://webaim.org/techniques/keyboard/">přístupné z klávesnice.</a>.',
    EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code> s nezaměřitelnými prvky by nemělo mít <code>tabindex="-1"</code>. Vložený obsah nebude přístupný klávesnicí.',

    // QA
    QA_BAD_LINK: 'Nalezen špatný odkaz. Zdá se, že odkaz vede na vývojové prostředí. <hr> Tento odkaz odkazuje na: <br> <strong {C}>%(LINK)</strong>',
    QA_IN_PAGE_LINK: 'Porušený odkaz na stejnou stránku. Cíl odkazu neodpovídá žádnému prvku na této stránce.',
    QA_STRONG_ITALICS: 'Tučné písmo a kurzíva mají sémantický význam a neměly by se <strong>používat</strong> ke zvýraznění celých odstavců. Tučný text by měl být používán k výraznému <strong>zdůraznění</strong> slova nebo slovního spojení. Kurzíva by se měla používat ke zvýraznění vlastních jmen (tj. názvů knih a článků), cizích slov, citátů. Dlouhé citace by měly být formátovány jako blokové citace.',
    QA_PDF: 'Nelze zkontrolovat přístupnost souborů PDF. Soubory PDF jsou považovány za webový obsah a musí být také zpřístupněny. Soubory PDF často obsahují problémy pro lidi, kteří používají čtečky obrazovky (chybějící strukturální značky nebo chybějící popisky formulářových polí), a pro lidi se slabým zrakem (text se při zvětšení nezvětšuje). <ul><li>Jestliže se jedná o formulář, zvažte jako alternativu použití přístupného formuláře HTML.</li><li>Jestliže se jedná o dokument, zvažte jeho převedení na webovou stránku.</li></ul>V opačném případě zkontrolujte <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF pro přístupnost v Acrobatu DC.</a>.',
    QA_DOCUMENT: 'Nelze zkontrolovat přístupnost dokumentu. Propojené dokumenty jsou považovány za webový obsah a musí být rovněž zpřístupněny. Zkontrolujte prosím tento dokument ručně. <ul><li>Zpřístupněte svůj <a href="https://support.google.com/docs/answer/6199477?hl=en">dokument nebo prezentaci v prostředí Google Workspace.</a></li><li>Zpřístupněte své <a href="https://support.microsoft.com/en-us/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">dokumenty Office.</a></li></ul>',
    QA_BLOCKQUOTE: 'Je to nadpis? <strong {C}>%(TEXT)</strong> <hr> Blokové uvozovky by se měly používat pouze pro citace. Pokud se má jednat o nadpis, změňte tento blokový citát na sémantický nadpis (např. Nadpis 2 nebo Nadpis 3).',
    QA_FAKE_HEADING: 'Je to nadpis? <strong {C}>%(TEXT)</strong> <hr> Řádek tučného nebo velkého textu může vypadat jako nadpis, ale člověk používající čtečku obrazovky nemůže poznat, že je důležitý, nebo přejít na jeho obsah. Tučný nebo velký text by nikdy neměl nahrazovat sémantické nadpisy (Nadpis 2 až Nadpis 6).',
    QA_FAKE_LIST: 'Snažíte se vytvořit seznam? Nalezena možná položka seznamu: <strong {C}>%(firstPrefix)</strong> <hr> Ujistěte se, že používáte sémantické seznamy tak, že místo nich použijete tlačítka pro formátování odrážek nebo čísel. Při použití sémantického seznamu jsou asistenční technologie schopny zprostředkovat informace, jako je celkový počet položek a relativní pozice každé položky v seznamu. Další informace o <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">sémantických seznamech.</a>.',
    QA_UPPERCASE: 'Nalezena všechna velká písmena. Některé čtečky obrazovky mohou text psaný velkými písmeny interpretovat jako zkratku a budou číst každé písmeno zvlášť. Kromě toho se některým lidem všechna velká písmena hůře čtou a mohou působit dojmem, jako by se jednalo o KŘIK.',
    QA_UNDERLINE: 'Podtržený text může být zaměněn za odkazy. Zvažte použití jiného stylu, například <code>&lt;strong&gt;</code><strong>důležitost</strong><code>&lt;/strong&gt;</code> nebo <code>&lt;em&gt;</code><em>důraz</em><code>&lt;/em&gt;</code>.',
    QA_SUBSCRIPT: 'Možnosti formátování dolního a horního indexu by se měly používat pouze ke změně pozice textu kvůli typografickým konvencím nebo normám. Neměly by se <strong>používat</strong> výhradně pro účely prezentace nebo vzhledu. Formátování celých vět představuje problém s čitelností. Mezi vhodné případy použití patří zobrazování exponentů, řadových čísel, jako je 4<sup>th</sup> místo fourth, a chemických vzorců (např. H<sub>2</sub>O).',
    QA_NESTED_COMPONENTS: 'Vyhněte se vnoření interaktivních komponentů rozvržení, jako je umístění akordeonů do záložek nebo záložek do akordeonů. To může komplikovat navigaci, zvyšovat kognitivní zátěž a vést k přehlédnutí obsahu.',
    QA_JUSTIFY: 'Vyhněte se používání zarovnaného textu, který je zarovnán jak vlevo, tak vpravo. To může být pro některé lidi obtížné číst kvůli nerovnoměrným mezerám mezi slovy. Použijte text zarovnaný vlevo pro lepší čitelnost.',
    QA_SMALL_TEXT: 'Malý text je těžší číst, zejména pro osoby se slabým zrakem. Pro lepší čitelnost se vyhněte používání velikostí písma menších než výchozí.',

    // Shared
    ACC_NAME: '<strong {B}>Přístupné jméno</strong> %(TEXT)',
    ACC_NAME_TIP: '<hr><strong>Tip!</strong> "Přístupné jméno" je konečný štítek, který je komunikován lidem používajícím asistenční technologie. To jim pomáhá pochopit účel odkazu nebo tlačítka.',
    HIDDEN_FOCUSABLE: 'Odkaz nebo tlačítko má <code>aria-hidden=&quot;true&quot;</code>, ale je stále přístupné klávesnicí. Pokud máte v úmyslu skrýt duplicitní odkaz nebo tlačítko, přidejte také <code>tabindex=&quot;-1&quot;</code>. Jinak by se <code>aria-hidden=&quot;true&quot;</code> nemělo používat na prvcích, které mohou získat fokus. <hr> Další informace o <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">atributu aria-hidden.</a>',

    // Developer
    DUPLICATE_ID: 'Nalezeno <strong>duplicitní ID</strong>. Je známo, že chyby duplicitního ID způsobují asistenčním technologiím problémy při pokusech o interakci s obsahem. Odstraňte nebo změňte následující ID. <hr> <strong {B}>ID</strong> <strong {C}>#%(id)</strong>',
    UNCONTAINED_LI: 'Všechny <code>&lt;li&gt;</code> položky seznamu musí být umístěny uvnitř <code>&lt;ul&gt;</code> neuspořádaných nebo <code>&lt;ol&gt;</code> uspořádaných prvků. Tato struktura pomáhá čtečkám obrazovky správně hlásit seznam a jeho položky.',
    TABINDEX_ATTR: 'Prvek by neměl mít atribut <code>tabindex</code> větší než 0.',

    // Meta checks
    META_LANG: 'Jazyk stránky není deklarován! Prosím <a href="https://www.w3.org/International/questions/qa-html-language-declarations">deklarujte jazyk v tagu HTML.</a>',
    META_TITLE: 'Chybí název stránky! Uveďte prosím <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title">název stránky.</a>',
    META_SCALABLE: 'Odstraňte parametr <code>user-scalable="no"</code> v <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">meta tagu pro viewport</a>, abyste umožnili přibližování.',
    META_MAX: 'Ujistěte se, že parametr <code>maximum-scale</code> v <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">meta tagu pro viewport</a> není menší než 2.',
    META_REFRESH: 'Stránka by se neměla automaticky obnovovat pomocí meta tagu.',

    // Buttons
    BTN_EMPTY: 'Tlačítku chybí přístupné jméno, které popisuje jeho účel.',
    BTN_EMPTY_LABELLEDBY: 'Tlačítko má hodnotu <code>aria-labelledby</code>, která je prázdná nebo neodpovídá hodnotě <code>id</code> jiného prvku na stránce.',
    BTN: 'tlačítko',
    BTN_TIP: 'Naučte se, jak vytvořit <a href="https://www.sarasoueidan.com/blog/accessible-icon-buttons/">přístupné tlačítko.</a>',
    BTN_ROLE_IN_NAME: 'Nezahrnujte slovo „tlačítko“ do názvu tlačítka. Čtečky obrazovky již oznamují roli prvku kromě jeho názvu.',
    LABEL_IN_NAME: 'Viditelný text tohoto prvku se zdá být odlišný od přístupného jména, což může způsobit zmatek u uživatelů asistivních technologií. Prosím, zkontrolujte: <hr> <strong {B}>Přístupné jméno</strong> <strong {C}>%(TEXT)</strong>',

    // Tables
    TABLES_MISSING_HEADINGS: 'Chybějící záhlaví tabulky! Přístupné tabulky potřebují značku HTML, která označuje buňky záhlaví a datové buňky a definuje jejich vzájemný vztah. Tyto informace poskytují kontext lidem, kteří používají asistenční technologie. Tabulky by se měly používat pouze pro tabulková data. <hr> Další informace o <a href="https://www.w3.org/WAI/tutorials/tables/">přístupných tabulkách.</a>',
    TABLES_SEMANTIC_HEADING: 'Sémantické nadpisy, jako je Nadpis 2 nebo Nadpis 3, by se měly používat pouze pro části obsahu; <strong>ne</strong> v tabulkách HTML. Nadpisy tabulek označujte místo toho pomocí elementu <code>&lt;th&gt;</code>. <hr> Další informace o <a href="https://www.w3.org/WAI/tutorials/tables/">přístupných tabulkách.</a>',
    TABLES_EMPTY_HEADING: 'Nalezeno prázdné záhlaví tabulky! Záhlaví tabulky by <strong>nikdy</strong> nemělo být prázdné. Je důležité označit záhlaví řádků a/nebo sloupců, aby byl vyjádřen jejich vztah. Tyto informace poskytují kontext osobám, které používají asistenční technologie. Mějte na paměti, že tabulky by se měly používat pouze pro tabulková data. <hr> Další informace o <a href="https://www.w3.org/WAI/tutorials/tables/">přístupných tabulkách.</a>.',

    // Contrast
    CONTRAST_OPACITY: 'Zvyšte neprůhlednost textu pro lepší viditelnost:',
    CONTRAST_APCA: 'Toto není dostatečný kontrast pro žádnou velikost textu. Zvažte použití této kombinace barvy a velikosti textu?',
    CONTRAST_COLOR: 'Zvažte použití této barvy místo?',
    CONTRAST_SIZE: 'Zvažte zvětšení velikosti textu pro tuto barevnou kombinaci?',
    CONTRAST_ERROR: 'Tento text není dostatečně kontrastní s pozadím. Kontrastní poměr by měl být alespoň 4,5:1 pro normální text a 3:1 pro velký text. <hr> <strong {B}>Kontrastní poměr</strong> <strong {B}>%(RATIO)</strong> <strong {C}>%(TEXT)</strong>',
    CONTRAST_WARNING: 'Kontrast tohoto textu není znám a je třeba jej ručně zkontrolovat. Ujistěte se, že text a pozadí mají výrazně kontrastní barvy. Kontrastní poměr by měl být alespoň 4,5:1 pro normální text a 3:1 pro velký text. <hr> <strong {B}>Poměr kontrastu</strong> <strong {B}>Neznámý</strong> <strong {C}>%(TEXT)</strong>',
    CONTRAST_INPUT: 'Text v tomto vstupu není dostatečně kontrastní s pozadím. Kontrastní poměr by měl být alespoň 4,5:1 pro normální text a 3:1 pro velký text. <hr> <strong {B}>Kontrastní poměr</strong> <strong {B}>%(RATIO)</strong>',
  },
};

export { cs as default };
