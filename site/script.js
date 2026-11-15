(() => {
  // This display list is transcribed from the vocabulary entries in wiki/vocabulary/starter-set.md.
  const vocab = [{"id": "001", "word": "給料", "reading": "きゅうりょう", "meaning": "薪水", "kind": "noun", "label": "名詞"}, {"id": "002", "word": "出張", "reading": "しゅっちょう", "meaning": "出差", "kind": "noun", "label": "名詞・する動詞"}, {"id": "003", "word": "残業", "reading": "ざんぎょう", "meaning": "加班", "kind": "noun", "label": "名詞・する動詞"}, {"id": "004", "word": "会議", "reading": "かいぎ", "meaning": "會議", "kind": "noun", "label": "名詞"}, {"id": "005", "word": "問題", "reading": "もんだい", "meaning": "問題", "kind": "noun", "label": "名詞"}, {"id": "006", "word": "基礎", "reading": "きそ", "meaning": "基礎", "kind": "noun", "label": "名詞"}, {"id": "007", "word": "印象", "reading": "いんしょう", "meaning": "印象", "kind": "noun", "label": "名詞"}, {"id": "008", "word": "意識", "reading": "いしき", "meaning": "意識", "kind": "noun", "label": "名詞"}, {"id": "009", "word": "我慢", "reading": "がまん", "meaning": "忍耐", "kind": "noun", "label": "名詞・する動詞"}, {"id": "010", "word": "感覚", "reading": "かんかく", "meaning": "感覺", "kind": "noun", "label": "名詞"}, {"id": "011", "word": "気分", "reading": "きぶん", "meaning": "心情", "kind": "noun", "label": "名詞"}, {"id": "012", "word": "心配", "reading": "しんぱい", "meaning": "擔心", "kind": "noun", "label": "名詞・する動詞"}, {"id": "013", "word": "記念", "reading": "きねん", "meaning": "紀念", "kind": "noun", "label": "名詞・する動詞"}, {"id": "014", "word": "駐車場", "reading": "ちゅうしゃじょう", "meaning": "停車場", "kind": "noun", "label": "名詞"}, {"id": "015", "word": "努力（する）", "reading": "どりょく（する）", "meaning": "努力", "kind": "verb", "label": "名詞・する動詞"}, {"id": "016", "word": "快晴", "reading": "かいせい", "meaning": "晴朗", "kind": "noun", "label": "名詞"}, {"id": "017", "word": "線路", "reading": "せんろ", "meaning": "鐵路", "kind": "noun", "label": "名詞"}, {"id": "018", "word": "商業", "reading": "しょうぎょう", "meaning": "商業", "kind": "noun", "label": "名詞"}, {"id": "019", "word": "交通費", "reading": "こうつうひ", "meaning": "交通費", "kind": "noun", "label": "名詞"}, {"id": "020", "word": "ホテル代", "reading": "ホテルだい", "meaning": "住宿費", "kind": "noun", "label": "名詞"}, {"id": "021", "word": "合計", "reading": "ごうけい", "meaning": "合計", "kind": "noun", "label": "名詞・する動詞"}, {"id": "189", "word": "支出", "reading": "ししゅつ", "meaning": "支出", "kind": "noun", "label": "名詞"}, {"id": "190", "word": "病", "reading": "やまい", "meaning": "疾病", "kind": "noun", "label": "名詞"}, {"id": "191", "word": "手術", "reading": "しゅじゅつ", "meaning": "手術", "kind": "noun", "label": "名詞・する動詞"}, {"id": "192", "word": "血圧", "reading": "けつあつ", "meaning": "血壓", "kind": "noun", "label": "名詞"}, {"id": "193", "word": "書類", "reading": "しょるい", "meaning": "文件", "kind": "noun", "label": "名詞"}, {"id": "194", "word": "窓口", "reading": "まどぐち", "meaning": "窗口", "kind": "noun", "label": "名詞"}, {"id": "195", "word": "講義", "reading": "こうぎ", "meaning": "（大學）課程、授課", "kind": "noun", "label": "名詞・する動詞"}, {"id": "196", "word": "復習", "reading": "ふくしゅう", "meaning": "複習", "kind": "noun", "label": "名詞・する動詞"}, {"id": "197", "word": "試験", "reading": "しけん", "meaning": "考試", "kind": "noun", "label": "名詞"}, {"id": "198", "word": "宿題", "reading": "しゅくだい", "meaning": "作業", "kind": "noun", "label": "名詞"}, {"id": "199", "word": "研究", "reading": "けんきゅう", "meaning": "研究", "kind": "noun", "label": "名詞・する動詞"}, {"id": "200", "word": "卒業", "reading": "そつぎょう", "meaning": "畢業", "kind": "noun", "label": "名詞・する動詞"}, {"id": "201", "word": "入学", "reading": "にゅうがく", "meaning": "入學", "kind": "noun", "label": "名詞・する動詞"}, {"id": "202", "word": "成績", "reading": "せいせき", "meaning": "成績", "kind": "noun", "label": "名詞"}, {"id": "203", "word": "早退する", "reading": "そうたいする", "meaning": "早退", "kind": "verb", "label": "動詞"}, {"id": "204", "word": "応募する", "reading": "おうぼする", "meaning": "應徵", "kind": "verb", "label": "動詞"}, {"id": "205", "word": "募集する", "reading": "ぼしゅうする", "meaning": "招募", "kind": "verb", "label": "動詞"}, {"id": "206", "word": "諦める", "reading": "あきらめる", "meaning": "放棄", "kind": "verb", "label": "動詞"}, {"id": "207", "word": "怖がる", "reading": "こわがる", "meaning": "害怕", "kind": "verb", "label": "動詞"}, {"id": "208", "word": "飽きる", "reading": "あきる", "meaning": "厭倦", "kind": "verb", "label": "動詞"}, {"id": "209", "word": "嫌う", "reading": "きらう", "meaning": "討厭", "kind": "verb", "label": "動詞"}, {"id": "690", "word": "ホーム", "reading": "ホーム", "meaning": "月台", "kind": "noun", "label": "名詞"}, {"id": "691", "word": "スーツ", "reading": "スーツ", "meaning": "西裝", "kind": "noun", "label": "名詞"}, {"id": "692", "word": "アレルギー", "reading": "アレルギー", "meaning": "過敏", "kind": "noun", "label": "名詞"}, {"id": "693", "word": "穴が空く", "reading": "あながあく", "meaning": "破洞、開了個洞", "kind": "expression", "label": "慣用表現"}, {"id": "694", "word": "線を引く", "reading": "せんをひく", "meaning": "畫線", "kind": "expression", "label": "慣用表現"}, {"id": "695", "word": "幸せを願う", "reading": "しあわせをねがう", "meaning": "祈願幸福", "kind": "expression", "label": "慣用表現"}, {"id": "696", "word": "～すぎて", "reading": "～すぎて", "meaning": "太……以至於……", "kind": "expression", "label": "句型"}, {"id": "697", "word": "～にくい", "reading": "～にくい", "meaning": "難以……", "kind": "expression", "label": "句型"}, {"id": "698", "word": "水をやる", "reading": "みずをやる", "meaning": "澆水", "kind": "expression", "label": "慣用表現"}, {"id": "699", "word": "倍になる", "reading": "ばいになる", "meaning": "增加一倍、變成兩倍", "kind": "expression", "label": "慣用表現"}, {"id": "700", "word": "音がする", "reading": "おとがする", "meaning": "有聲音", "kind": "expression", "label": "慣用表現"}, {"id": "701", "word": "目が覚める", "reading": "めがさめる", "meaning": "醒來", "kind": "expression", "label": "慣用表現"}, {"id": "702", "word": "～に興味がある", "reading": "～にきょうみがある", "meaning": "對……有興趣", "kind": "expression", "label": "句型"}, {"id": "703", "word": "香りがする", "reading": "かおりがする", "meaning": "有香氣", "kind": "expression", "label": "慣用表現"}, {"id": "704", "word": "味がする", "reading": "あじがする", "meaning": "有味道", "kind": "expression", "label": "慣用表現"}, {"id": "705", "word": "～が見つかる", "reading": "～がみつかる", "meaning": "被找到、找到了", "kind": "expression", "label": "句型"}, {"id": "706", "word": "身につける", "reading": "みにつける", "meaning": "習得", "kind": "expression", "label": "慣用表現"}, {"id": "707", "word": "約～", "reading": "やく～", "meaning": "大約……", "kind": "expression", "label": "接頭語"}, {"id": "708", "word": "～に当たる", "reading": "～にあたる", "meaning": "遇到……", "kind": "expression", "label": "句型"}, {"id": "709", "word": "～にぶつかる", "reading": "～にぶつかる", "meaning": "撞上、碰上", "kind": "expression", "label": "句型"}, {"id": "710", "word": "決して～ない", "reading": "けっして～ない", "meaning": "絕不……", "kind": "expression", "label": "句型"}];

  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[char]));

  const grammar = [
    {id:'001', pattern:'～として', category:'立場・資格', form:'名詞 + として', meaning:'以……身分／資格；作為……', ja:'彼女は通訳として会議に参加しました。', zh:'她以口譯員的身分參加了會議。'},
    {id:'002', pattern:'～にとって', category:'觀點', form:'名詞 + にとって', meaning:'對……而言', ja:'この辞書は日本語を勉強する人にとって便利です。', zh:'這本字典對學日文的人來說很方便。'},
    {id:'003', pattern:'～たびに', category:'反覆', form:'動詞辭書形 + たびに；名詞 + の + たびに', meaning:'每當……就……', ja:'この歌を聞くたびに、初めて日本へ行った時を思い出します。', zh:'每次聽到這首歌，我就會想起第一次去日本的時候。'},
    {id:'004', pattern:'～一方で', category:'對照', form:'普通形 + 一方で；な形容詞／名詞 + である一方で', meaning:'另一方面；同時也……', ja:'この町は便利な一方で、家賃が高いです。', zh:'這個城鎮很方便，但另一方面租金也很高。'},
    {id:'005', pattern:'～によって', category:'依據・差異', form:'名詞 + によって', meaning:'依……而不同；根據……', ja:'国によって、食事の習慣が違います。', zh:'各國的飲食習慣都不一樣。'},
    {id:'006', pattern:'ところが', category:'逆接', form:'句首連接詞', meaning:'然而；沒想到', ja:'早く出発しました。ところが、電車が遅れて到着も遅くなりました。', zh:'我很早就出發了。沒想到電車誤點，結果還是晚到了。'},
    {id:'007', pattern:'～おかげで', category:'正面原因', form:'名詞 + の + おかげで；普通形 + おかげで', meaning:'多虧……；托……的福', ja:'先生のおかげで、作文が完成しました。', zh:'多虧老師，我完成了作文。'},
    {id:'008', pattern:'～せいで', category:'負面原因', form:'名詞 + の + せいで；普通形 + せいで', meaning:'都怪……；因為……（負面結果）', ja:'雨のせいで、試合が中止になりました。', zh:'因為下雨，比賽取消了。'},
    {id:'009', pattern:'～たとたん（に）', category:'瞬間・意外', form:'動詞た形 + とたん（に）', meaning:'剛一……就……', ja:'ドアを開けたとたん、猫が飛び出しました。', zh:'門一打開，貓就衝了出來。'},
    {id:'010', pattern:'～ば～ほど', category:'程度變化', form:'動詞ば形 + 動詞辭書形 + ほど', meaning:'越……越……', ja:'練習すればするほど、発音が自然になります。', zh:'越練習，發音就會越自然。'},
    {id:'011', pattern:'～ようとする', category:'嘗試・正要', form:'動詞意向形 + とする', meaning:'試圖……；正要……', ja:'出かけようとした時、電話が鳴りました。', zh:'正要出門時，電話響了。'},
    {id:'012', pattern:'～がち', category:'傾向', form:'動詞ます形去ます + がち；名詞 + がち', meaning:'容易……；常常……（多為不理想傾向）', ja:'忙しいと、昼食を抜きがちです。', zh:'一忙起來就容易不吃午餐。'},
    {id:'013', pattern:'～ざるを得ない', category:'不得不', form:'動詞ない形去ない + ざるを得ない（する → せざるを得ない）', meaning:'不得不……；只好……', ja:'電車が止まったので、駅で待たざるを得ませんでした。', zh:'因為電車停駛，我只好在車站等。'},
    {id:'014', pattern:'～ばかりでなく', category:'追加', form:'名詞／普通形 + ばかりでなく', meaning:'不只……；不僅……而且……', ja:'彼は日本語ばかりでなく、韓国語も話せます。', zh:'他不只會說日文，也會說韓文。'}
  ];
  const grammarGrid = document.querySelector('#grammar-grid');
  if (grammarGrid) grammar.forEach(item => {
    const card = document.createElement('article');
    card.className = 'grammar-card';
    card.innerHTML = `<div class="card-index"><span>PATTERN / ${item.id}</span><span>${esc(item.category)}</span></div><h3>${esc(item.pattern)}</h3><p class="formula">${esc(item.form)}</p><p class="grammar-meaning">${esc(item.meaning)}</p><div class="example"><p lang="ja">${esc(item.ja)}</p><p>${esc(item.zh)}</p></div><a class="wiki-link" href="../wiki/grammar/starter-patterns.md">READ GRAMMAR NOTE ↗</a>`;
    grammarGrid.append(card);
  });

  const grid = document.querySelector('#vocab-grid');
  const input = document.querySelector('#vocab-search');
  const cards = [];
  const buttons = [...document.querySelectorAll('.filter')];
  const empty = document.querySelector('#empty-state');
  let filter = 'all';

  for (const item of vocab) {
    const card = document.createElement('article');
    card.className = 'vocab-card';
    card.dataset.kind = item.kind;
    card.dataset.search = `${item.word} ${item.reading} ${item.meaning} ${item.label}`.toLowerCase();
    card.innerHTML = `<div class=\"card-index\"><span>WORD / ${esc(item.id)}</span><span>${esc(item.label)}</span></div><h3 lang=\"ja\">${esc(item.word)} <small>${esc(item.reading)}</small></h3><p class=\"meaning\">${esc(item.meaning)}</p><a class=\"wiki-link\" href=\"../wiki/vocabulary/starter-set.md\">WIKI ENTRY ↗</a>`;
    grid.append(card);
    cards.push(card);
  }
  const allCount = buttons.find(button => button.dataset.filter === 'all')?.querySelector('b');
  if (allCount) allCount.textContent = String(vocab.length).padStart(2, '0');

  // Always open the project at its home page, even if the browser restored a section anchor.
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (location.hash) {
    try { history.replaceState(null, '', location.href.split('#')[0]); } catch (_) {}
  }
  window.addEventListener('load', () => window.scrollTo(0, 0), { once: true });

  const update = () => {
    const term = input.value.trim().toLowerCase();
    let visible = 0;
    for (const card of cards) {
      const show = card.dataset.search.includes(term) && (filter === 'all' || card.dataset.kind === filter);
      card.hidden = !show;
      if (show) visible++;
    }
    empty.hidden = visible !== 0;
  };
  input.addEventListener('input', update);
  buttons.forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    buttons.forEach(item => item.classList.toggle('active', item === button));
    update();
  }));
})();
