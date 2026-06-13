// ====================
// ポケモンデータ
// ====================

const pokemonList = [
  // ===== 初代（超人気）=====
{ dexNo: 1, pokemonId: 25, name: "ピカチュウ" },
{ dexNo: 2, pokemonId: 133, name: "イーブイ" },
{ dexNo: 3, pokemonId: 6, name: "リザードン" },
{ dexNo: 4, pokemonId: 3, name: "フシギバナ" },
{ dexNo: 5, pokemonId: 9, name: "カメックス" },
{ dexNo: 6, pokemonId: 150, name: "ミュウツー" },
{ dexNo: 7, pokemonId: 151, name: "ミュウ" },
{ dexNo: 8, pokemonId: 94, name: "ゲンガー" },
{ dexNo: 9, pokemonId: 130, name: "ギャラドス" },
{ dexNo: 10, pokemonId: 143, name: "カビゴン" },

{ dexNo: 11, pokemonId: 131, name: "ラプラス" },
{ dexNo: 12, pokemonId: 149, name: "カイリュー" },
{ dexNo: 13, pokemonId: 65, name: "フーディン" },
{ dexNo: 14, pokemonId: 68, name: "カイリキー" },
{ dexNo: 15, pokemonId: 76, name: "ゴローニャ" },
{ dexNo: 16, pokemonId: 59, name: "ウインディ" },
{ dexNo: 17, pokemonId: 52, name: "ニャース" },
{ dexNo: 18, pokemonId: 54, name: "コダック" },
{ dexNo: 19, pokemonId: 39, name: "プリン" },
{ dexNo: 20, pokemonId: 35, name: "ピッピ" },

{ dexNo: 21, pokemonId: 249, name: "ルギア" },
{ dexNo: 22, pokemonId: 250, name: "ホウオウ" },
{ dexNo: 23, pokemonId: 251, name: "セレビィ" },
{ dexNo: 24, pokemonId: 248, name: "バンギラス" },
{ dexNo: 25, pokemonId: 212, name: "ハッサム" },
{ dexNo: 26, pokemonId: 214, name: "ヘラクロス" },
{ dexNo: 27, pokemonId: 181, name: "デンリュウ" },
{ dexNo: 28, pokemonId: 196, name: "エーフィ" },
{ dexNo: 29, pokemonId: 197, name: "ブラッキー" },
{ dexNo: 30, pokemonId: 169, name: "クロバット" },

{ dexNo: 31, pokemonId: 257, name: "バシャーモ" },
{ dexNo: 32, pokemonId: 260, name: "ラグラージ" },
{ dexNo: 33, pokemonId: 254, name: "ジュカイン" },
{ dexNo: 34, pokemonId: 282, name: "サーナイト" },
{ dexNo: 35, pokemonId: 376, name: "メタグロス" },
{ dexNo: 36, pokemonId: 359, name: "アブソル" },
{ dexNo: 37, pokemonId: 384, name: "レックウザ" },
{ dexNo: 38, pokemonId: 382, name: "カイオーガ" },
{ dexNo: 39, pokemonId: 383, name: "グラードン" },
{ dexNo: 40, pokemonId: 385, name: "ジラーチ" },

{ dexNo: 41, pokemonId: 380, name: "ラティアス" },
{ dexNo: 42, pokemonId: 381, name: "ラティオス" },
{ dexNo: 43, pokemonId: 445, name: "ガブリアス" },
{ dexNo: 44, pokemonId: 448, name: "ルカリオ" },
{ dexNo: 45, pokemonId: 389, name: "ドダイトス" },
{ dexNo: 46, pokemonId: 392, name: "ゴウカザル" },
{ dexNo: 47, pokemonId: 395, name: "エンペルト" },
{ dexNo: 48, pokemonId: 470, name: "リーフィア" },
{ dexNo: 49, pokemonId: 471, name: "グレイシア" },
{ dexNo: 50, pokemonId: 483, name: "ディアルガ" },

{ dexNo: 51, pokemonId: 484, name: "パルキア" },
{ dexNo: 52, pokemonId: 487, name: "ギラティナ" },
{ dexNo: 53, pokemonId: 491, name: "ダークライ" },
{ dexNo: 54, pokemonId: 492, name: "シェイミ" },
{ dexNo: 55, pokemonId: 493, name: "アルセウス" },
{ dexNo: 56, pokemonId: 494, name: "ビクティニ" },
{ dexNo: 57, pokemonId: 570, name: "ゾロア" },
{ dexNo: 58, pokemonId: 571, name: "ゾロアーク" },
{ dexNo: 59, pokemonId: 635, name: "サザンドラ" },
{ dexNo: 60, pokemonId: 643, name: "レシラム" },

{ dexNo: 61, pokemonId: 644, name: "ゼクロム" },
{ dexNo: 62, pokemonId: 646, name: "キュレム" },
{ dexNo: 63, pokemonId: 501, name: "ミジュマル" },
{ dexNo: 64, pokemonId: 653, name: "フォッコ" },
{ dexNo: 65, pokemonId: 656, name: "ケロマツ" },
{ dexNo: 66, pokemonId: 658, name: "ゲッコウガ" },
{ dexNo: 67, pokemonId: 700, name: "ニンフィア" },
{ dexNo: 68, pokemonId: 716, name: "ゼルネアス" },
{ dexNo: 69, pokemonId: 717, name: "イベルタル" },
{ dexNo: 70, pokemonId: 718, name: "ジガルデ" },

{ dexNo: 71, pokemonId: 719, name: "ディアンシー" },
{ dexNo: 72, pokemonId: 722, name: "モクロー" },
{ dexNo: 73, pokemonId: 725, name: "ニャビー" },
{ dexNo: 74, pokemonId: 728, name: "アシマリ" },
{ dexNo: 75, pokemonId: 778, name: "ミミッキュ" },
{ dexNo: 76, pokemonId: 791, name: "ソルガレオ" },
{ dexNo: 77, pokemonId: 792, name: "ルナアーラ" },
{ dexNo: 78, pokemonId: 800, name: "ネクロズマ" },
{ dexNo: 79, pokemonId: 807, name: "ゼラオラ" },
{ dexNo: 80, pokemonId: 808, name: "メルタン" },

{ dexNo: 81, pokemonId: 809, name: "メルメタル" },
{ dexNo: 82, pokemonId: 810, name: "サルノリ" },
{ dexNo: 83, pokemonId: 813, name: "ヒバニー" },
{ dexNo: 84, pokemonId: 816, name: "メッソン" },
{ dexNo: 85, pokemonId: 835, name: "ワンパチ" },
{ dexNo: 86, pokemonId: 849, name: "ストリンダー" },
{ dexNo: 87, pokemonId: 877, name: "モルペコ" },
{ dexNo: 88, pokemonId: 887, name: "ドラパルト" },
{ dexNo: 89, pokemonId: 888, name: "ザシアン" },
{ dexNo: 90, pokemonId: 889, name: "ザマゼンタ" },

{ dexNo: 91, pokemonId: 890, name: "ムゲンダイナ" },
{ dexNo: 92, pokemonId: 898, name: "バドレックス" },
{ dexNo: 93, pokemonId: 172, name: "ピチュー" },
{ dexNo: 94, pokemonId: 175, name: "トゲピー" },
{ dexNo: 95, pokemonId: 298, name: "ルリリ" },
{ dexNo: 96, pokemonId: 280, name: "ラルトス" },
{ dexNo: 97, pokemonId: 174, name: "ププリン" },
{ dexNo: 98, pokemonId: 300, name: "エネコ" },
{ dexNo: 99, pokemonId: 427, name: "ミミロル" },
{ dexNo: 100, pokemonId: 446, name: "ゴンベ" },

{ dexNo: 101, pokemonId: 702, name: "デデンネ" },
{ dexNo: 102, pokemonId: 906, name: "ニャオハ" },
{ dexNo: 103, pokemonId: 907, name: "ニャローテ" },
{ dexNo: 104, pokemonId: 908, name: "マスカーニャ" },
{ dexNo: 105, pokemonId: 909, name: "ホゲータ" },
{ dexNo: 106, pokemonId: 910, name: "アチゲータ" },
{ dexNo: 107, pokemonId: 911, name: "ラウドボーン" },
{ dexNo: 108, pokemonId: 912, name: "クワッス" },
{ dexNo: 109, pokemonId: 913, name: "ウェルカモ" },
{ dexNo: 110, pokemonId: 914, name: "ウェーニバル" },

{ dexNo: 111, pokemonId: 921, name: "パモ" },
{ dexNo: 112, pokemonId: 922, name: "パモット" },
{ dexNo: 113, pokemonId: 923, name: "パーモット" },
{ dexNo: 114, pokemonId: 926, name: "パピモッチ" },
{ dexNo: 115, pokemonId: 927, name: "バウッツェル" },
{ dexNo: 116, pokemonId: 938, name: "ズピカ" },
{ dexNo: 117, pokemonId: 939, name: "ハラバリー" },
{ dexNo: 118, pokemonId: 953, name: "シガロコ" },
{ dexNo: 119, pokemonId: 954, name: "ベラカス" },
{ dexNo: 120, pokemonId: 959, name: "オトシドリ" },

{ dexNo: 121, pokemonId: 965, name: "ブロロローム" },
{ dexNo: 122, pokemonId: 966, name: "モトトカゲ" },
{ dexNo: 123, pokemonId: 968, name: "ミミズズ" },
{ dexNo: 124, pokemonId: 970, name: "キラフロル" },
{ dexNo: 125, pokemonId: 971, name: "ボチ" },
{ dexNo: 126, pokemonId: 972, name: "ハカドッグ" },
{ dexNo: 127, pokemonId: 974, name: "アルクジラ" },
{ dexNo: 128, pokemonId: 975, name: "ハルクジラ" },
{ dexNo: 129, pokemonId: 977, name: "ヘイラッシャ" },
{ dexNo: 130, pokemonId: 978, name: "シャリタツ" },

{ dexNo: 131, pokemonId: 979, name: "コノヨザル" },
{ dexNo: 132, pokemonId: 980, name: "ドオー" },
{ dexNo: 133, pokemonId: 982, name: "ノココッチ" },
{ dexNo: 134, pokemonId: 983, name: "ドドゲザン" },
{ dexNo: 135, pokemonId: 984, name: "イダイナキバ" },
{ dexNo: 136, pokemonId: 985, name: "サケブシッポ" },
{ dexNo: 137, pokemonId: 986, name: "アラブルタケ" },
{ dexNo: 138, pokemonId: 987, name: "ハバタクカミ" },
{ dexNo: 139, pokemonId: 988, name: "チヲハウハネ" },
{ dexNo: 140, pokemonId: 989, name: "スナノケガワ" },

{ dexNo: 141, pokemonId: 990, name: "テツノワダチ" },
{ dexNo: 142, pokemonId: 991, name: "テツノツツミ" },
{ dexNo: 143, pokemonId: 992, name: "テツノカイナ" },
{ dexNo: 144, pokemonId: 993, name: "テツノコウベ" },
{ dexNo: 145, pokemonId: 994, name: "テツノドクガ" },
{ dexNo: 146, pokemonId: 995, name: "テツノイバラ" },
{ dexNo: 147, pokemonId: 996, name: "セビエ" },
{ dexNo: 148, pokemonId: 997, name: "セゴール" },
{ dexNo: 149, pokemonId: 998, name: "セグレイブ" },
{ dexNo: 150, pokemonId: 1000, name: "サーフゴー" },

{ dexNo: 151, pokemonId: 1007, name: "コライドン" },
{ dexNo: 152, pokemonId: 1008, name: "ミライドン" },
{ dexNo: 153, pokemonId: 1001, name: "チオンジェン" },
{ dexNo: 154, pokemonId: 1002, name: "パオジアン" },
{ dexNo: 155, pokemonId: 1003, name: "ディンルー" },
{ dexNo: 156, pokemonId: 1004, name: "イーユイ" },
{ dexNo: 157, pokemonId: 1009, name: "ウネルミナモ" },
{ dexNo: 158, pokemonId: 1010, name: "テツノイサハ" },
{ dexNo: 159, pokemonId: 1014, name: "オーガポン" },
{ dexNo: 160, pokemonId: 1015, name: "イイネイヌ" },

{ dexNo: 161, pokemonId: 1016, name: "マシマシラ" },
{ dexNo: 162, pokemonId: 1017, name: "キチキギス" },
{ dexNo: 163, pokemonId: 1018, name: "モモワロウ" },
{ dexNo: 164, pokemonId: 1044, name: "ウガツホムラ" },
{ dexNo: 165, pokemonId: 1045, name: "タケルライコ" },
{ dexNo: 166, pokemonId: 1046, name: "テツノイワオ" },
{ dexNo: 167, pokemonId: 1047, name: "テツノカシラ" },

{ dexNo: 168, pokemonId: 58, name: "ガーディ" },
{ dexNo: 169, pokemonId: 63, name: "ケーシィ" },
{ dexNo: 170, pokemonId: 92, name: "ゴース" },
{ dexNo: 171, pokemonId: 93, name: "ゴースト" },
{ dexNo: 172, pokemonId: 104, name: "カラカラ" },
{ dexNo: 173, pokemonId: 179, name: "メリープ" },
{ dexNo: 174, pokemonId: 115, name: "ガルーラ" },
{ dexNo: 175, pokemonId: 122, name: "バリヤード" },
{ dexNo: 176, pokemonId: 123, name: "ストライク" },
{ dexNo: 177, pokemonId: 127, name: "カイロス" },

{ dexNo: 178, pokemonId: 132, name: "メタモン" },
{ dexNo: 179, pokemonId: 137, name: "ポリゴン" },
{ dexNo: 180, pokemonId: 142, name: "プテラ" },
{ dexNo: 181, pokemonId: 144, name: "フリーザー" },
{ dexNo: 182, pokemonId: 145, name: "サンダー" },
{ dexNo: 183, pokemonId: 146, name: "ファイヤー" },
{ dexNo: 184, pokemonId: 243, name: "ライコウ" },
{ dexNo: 185, pokemonId: 244, name: "エンテイ" },
{ dexNo: 186, pokemonId: 245, name: "スイクン" },
{ dexNo: 187, pokemonId: 287, name: "ナマケロ" },
{ dexNo: 188, pokemonId: 333, name: "チルット" },
{ dexNo: 189, pokemonId: 371, name: "タツベイ" },
{ dexNo: 190, pokemonId: 372, name: "コモルー" },

{ dexNo: 191, pokemonId: 374, name: "ダンバル" },
{ dexNo: 192, pokemonId: 659, name: "ホルビー" },
{ dexNo: 193, pokemonId: 406, name: "スボミー" },
{ dexNo: 194, pokemonId: 610, name: "キバゴ" },
{ dexNo: 195, pokemonId: 443, name: "フカマル" },
{ dexNo: 196, pokemonId: 447, name: "リオル" },
{ dexNo: 197, pokemonId: 495, name: "ツタージャ" },
{ dexNo: 198, pokemonId: 498, name: "ポカブ" },
{ dexNo: 199, pokemonId: 633, name: "モノズ" },
{ dexNo: 200, pokemonId: 636, name: "メラルバ" },
];

// ====================
// 状態管理
// ====================

let currentPokemon = null;
let currentAnswer = 0;
let catchCount = 0;
let hintUsed = false;

let currentA = 0;
let currentB = 0;

const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");

// ====================
// 初期化
// ====================

window.addEventListener("load", () => {
  loadPokemon();
});

// ====================
// 画像URL生成
// ====================

function getPokemonImage(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

function playCry(id) {

  const cry =
    new Audio(
      `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`
    );

  cry.volume = 1.0;

  cry.addEventListener("canplaythrough", () => {
    console.log("読み込み成功");
  });

  cry.addEventListener("error", (e) => {
    console.log("音声エラー", e);
  });

  cry.play()
    .then(() => console.log("再生成功"))
    .catch(err => console.log("再生失敗", err));

}

function playSound(file, speed = 1){

  const sound = new Audio(file);

  sound.volume = 1.0;
  sound.playbackRate = speed;

  sound.play().catch(() => {});

}

// ====================
// ランダムポケモン
// ====================

function getRandomPokemon() {
  return pokemonList[
    Math.floor(Math.random() * pokemonList.length)
  ];
}

// ====================
// 問題生成
// ====================

function createQuestion() {

  if(!hintUsed){

    currentA =
      Math.floor(Math.random() * 10) + 1;

    currentB =
      Math.floor(Math.random() * 10) + 1;

  }

  const a = currentA;
  const b = currentB;

  currentAnswer = a + b;

  question.textContent =
    `${a} + ${b} = ?`;

  const maxCount = Math.max(a, b);

  const availableWidth =
    window.innerWidth * 0.45;

  let pokemonSize =
    Math.floor(
      availableWidth /
      Math.min(maxCount, 5)
    );

  pokemonSize =
    Math.max(24, pokemonSize);

  pokemonSize =
    Math.min(60, pokemonSize);

  const img =
    getPokemonImage(
      currentPokemon.pokemonId
    );

  function makeGroup(count){

    let html =
      '<div class="numberGroup">';

    for(
      let row = 0;
      row < Math.ceil(count / 5);
      row++
    ){

      html +=
        '<div class="numberRow">';

      const start = row * 5;
      const end =
        Math.min(start + 5, count);

      for(
        let i = start;
        i < end;
        i++
      ){

        html += `
          <img
            src="${img}"
            style="
              width:${pokemonSize}px;
              height:${pokemonSize}px;
            "
          >
        `;
      }

      html += '</div>';
    }

    html += '</div>';

    return html;
  }

  if(hintUsed){

    visualQuestion.innerHTML = `
      ${makeGroup(a)}
      <div class="plusSign">＋</div>
      ${makeGroup(b)}
    `;

  }else{

    visualQuestion.innerHTML = "";

  }
}

function showHint(){

  hintUsed = true;

  hintButton.style.display =
    "none";

  createQuestion();

}
// ====================
// ポケモン出現
// ====================

function loadPokemon() {

  ballImg.classList.remove("throw");

  ballImg.style.display = "none";

  pokemonImage.style.display = "block";

  currentPokemon = getRandomPokemon();

  pokemonName.textContent =
    currentPokemon.name;

pokemonImage.src =
  getPokemonImage(
    currentPokemon.pokemonId
  );

setTimeout(() => {
  playCry(currentPokemon.pokemonId);
}, 300);

  answerInput.value = "";

  questionArea.classList.remove("hidden");
  catchArea.classList.add("hidden");
  nextArea.classList.add("hidden");

  message.textContent =
    `${currentPokemon.name}が あらわれた！`;
    
hintUsed = false;

hintButton.style.display =

  "inline-block";

createQuestion();

}

function changePokemon() {

  catchCount = 0;

  loadPokemon();

  playCry(currentPokemon.pokemonId);

}

// ====================
// 回答判定
// ====================

function checkAnswer() {

  const value = answerInput.value.trim();

  if (value === "") return;

  if (Number(value) === currentAnswer) {
    
    correctSound.currentTime = 0;
    correctSound.play();
    
    questionArea.classList.add("hidden");

    catchArea.classList.remove("hidden");

    message.textContent = "せいかい！";

  } else {
    wrongSound.currentTime = 0;
    wrongSound.play();
    
    // ❌不正解 →ボール出さない
    catchArea.classList.add("hidden");
    nextArea.classList.add("hidden");

    message.textContent = "おしい！もういちどがんばれ！";
  }
}

// ====================
// ボール投擲
// ====================

function throwBall() {

  message.textContent = "";

  playSound("throw.mp3",2.0);

  ballImg.style.display = "block";

  // throwアニメーションリセット
  ballImg.classList.remove("throw");
  ballImg.classList.remove("shake-3");

  // 再描画リセット（超重要）
  void ballImg.offsetWidth;

  // 投げるアニメーション
  ballImg.classList.add("throw");

  // ★着地後に3回揺れ
  setTimeout(() => {
    playSound("shake.mp3",1.2);

  setTimeout(() => {
    playSound("shake.mp3",1.2);
  }, 1000);
  
  setTimeout(() => {
    playSound("shake.mp3",1.2);
  }, 2000);
  
    ballImg.classList.add("shake-3");

  }, 1000);

  // ポケモン非表示
  setTimeout(() => {
    pokemonImage.style.display = "none";
  }, 1000);

  // 捕獲判定
  setTimeout(() => {
    catchPokemon();
  }, 4100);
}

function nextPokemon() {

  catchEffect.classList.remove("catch-show");
  catchEffect.style.display = "none";

  loadPokemon();

  playCry(currentPokemon.pokemonId);

  ballImg.style.display = "none";
  ballImg.classList.remove("shake-3");
  ballImg.classList.remove("throw");

  catchArea.classList.add("hidden");
  nextArea.classList.add("hidden");
}

// ====================
// 捕獲判定
// ====================

function catchPokemon() {

  catchCount++;

  let success = false;

  if (catchCount >= 3) {
    success = true;
  } else {
    success = Math.random() * 100 < catchCount * 33.3333;
  }

if (success) {
  
  playSound("catch.mp3");
  
  savePokemon();

  catchCount = 0;

  catchEffect.classList.remove("catch-show");

  void catchEffect.offsetWidth;

  catchEffect.classList.add("catch-show");

  setTimeout(() => {
  
    playSound("get.mp3");
  
  }, 500);

  message.textContent = "";

  questionArea.classList.add("hidden");

  catchArea.classList.add("hidden");

  nextArea.classList.remove("hidden");

} else {
  playSound("escape.mp3",2.5);
  
  ballImg.style.display = "none";

  pokemonImage.style.display = "block";

  message.textContent = "おしい！もういちどがんばれ！";

  // ★ここ追加（重要）
  catchArea.classList.remove("hidden");

  nextArea.classList.add("hidden");
  }
}

// ====================
// 図鑑保存
// ====================

function savePokemon() {

  const dex =
    JSON.parse(
      localStorage.getItem("dex") || "[]"
    );

  if (
    !dex.includes(
      currentPokemon.dexNo
    )
  ) {

    dex.push(
      currentPokemon.dexNo
    );

  }

  localStorage.setItem(
    "dex",
    JSON.stringify(dex)
  );

}

// ====================
// 図鑑一覧
// ====================

function renderDex() {

  const dex =
    JSON.parse(
      localStorage.getItem("dex") || "[]"
    );

  let html = "";

  pokemonList.forEach(p => {

    const owned =
      dex.includes(
        p.dexNo
      );

    html += `
      <div
        class="dexItem"
        onclick="showPokemon(${p.dexNo})"
      >
        ${owned ? p.name : "？？？"}
      </div>
    `;

  });

  dexContent.innerHTML = html;

}

// ====================
// 図鑑詳細
// ====================

function showPokemon(no) {

  const dex =
    JSON.parse(
      localStorage.getItem("dex") || "[]"
    );

  if (!dex.includes(no)) {
    return;
  }

  const p =
    pokemonList.find(
      x => x.dexNo === no
    );

  dexContent.innerHTML = `
  <button onclick="renderDex()">
    ← もどる
  </button>

  <h3>${p.name}</h3>

  <img
    src="${getPokemonImage(p.pokemonId)}"
    width="180"
  >

  <br><br>

  <button onclick="playCry(${p.pokemonId})">
    🔊 なきごえ
  </button>
`;

}

// ====================
// 図鑑開く
// ====================

function openDex() {

  renderDex();

  dexModal.classList.remove(
    "hidden"
  );

}

// ====================
// 図鑑閉じる
// ====================

function closeDex() {

  dexModal.classList.add(
    "hidden"
  );

}