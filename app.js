// ====================
// ポケモンデータ
// ====================

const pokemonList = [
  // ===== 初代（超人気）=====
  { dexNo: 1, pokemonId: 25, name: "ピカチュウ" },
  { dexNo: 2, pokemonId: 133, name: "イーブイ" },
  { dexNo: 3, pokemonId: 150, name: "ミュウツー" },
  { dexNo: 4, pokemonId: 151, name: "ミュウ" },
  { dexNo: 5, pokemonId: 6, name: "リザードン" },
  { dexNo: 6, pokemonId: 3, name: "フシギバナ" },
  { dexNo: 7, pokemonId: 9, name: "カメックス" },
  { dexNo: 8, pokemonId: 94, name: "ゲンガー" },
  { dexNo: 9, pokemonId: 130, name: "ギャラドス" },
  { dexNo: 10, pokemonId: 143, name: "カビゴン" },

  { dexNo: 11, pokemonId: 130, name: "ギャラドス" },
  { dexNo: 12, pokemonId: 65, name: "フーディン" },
  { dexNo: 13, pokemonId: 68, name: "カイリキー" },
  { dexNo: 14, pokemonId: 76, name: "ゴローニャ" },
  { dexNo: 15, pokemonId: 12, name: "バタフリー" },

  // ===== 人気御三家 =====
  { dexNo: 16, pokemonId: 6, name: "リザードン" },
  { dexNo: 17, pokemonId: 257, name: "バシャーモ" },
  { dexNo: 18, pokemonId: 389, name: "ドダイトス" },
  { dexNo: 19, pokemonId: 658, name: "ゲッコウガ" },
  { dexNo: 20, pokemonId: 727, name: "ガオガエン" },
  { dexNo: 21, pokemonId: 812, name: "ゴリランダー" },
  { dexNo: 22, pokemonId: 815, name: "エースバーン" },
  { dexNo: 23, pokemonId: 818, name: "インテレオン" },
  { dexNo: 24, pokemonId: 906, name: "ニャオハ" },
  { dexNo: 25, pokemonId: 909, name: "ホゲータ" },

  // ===== かわいい枠 =====
  { dexNo: 26, pokemonId: 35, name: "ピッピ" },
  { dexNo: 27, pokemonId: 39, name: "プリン" },
  { dexNo: 28, pokemonId: 175, name: "トゲピー" },
  { dexNo: 29, pokemonId: 172, name: "ピチュー" },
  { dexNo: 30, pokemonId: 298, name: "ルリリ" },

  { dexNo: 31, pokemonId: 700, name: "ニンフィア" },
  { dexNo: 32, pokemonId: 471, name: "グレイシア" },
  { dexNo: 33, pokemonId: 196, name: "エーフィ" },
  { dexNo: 34, pokemonId: 197, name: "ブラッキー" },

  // ===== アニメ人気 =====
  { dexNo: 35, pokemonId: 448, name: "ルカリオ" },
  { dexNo: 36, pokemonId: 445, name: "ガブリアス" },
  { dexNo: 37, pokemonId: 282, name: "サーナイト" },
  { dexNo: 38, pokemonId: 448, name: "ルカリオ" },
  { dexNo: 39, pokemonId: 778, name: "ミミッキュ" },
  { dexNo: 40, pokemonId: 784, name: "ジャラランガ" },

  // ===== 伝説枠 =====
  { dexNo: 41, pokemonId: 249, name: "ルギア" },
  { dexNo: 42, pokemonId: 250, name: "ホウオウ" },
  { dexNo: 43, pokemonId: 384, name: "レックウザ" },
  { dexNo: 44, pokemonId: 382, name: "カイオーガ" },
  { dexNo: 45, pokemonId: 383, name: "グラードン" },

  { dexNo: 46, pokemonId: 493, name: "アルセウス" },
  { dexNo: 47, pokemonId: 791, name: "ソルガレオ" },
  { dexNo: 48, pokemonId: 792, name: "ルナアーラ" },
  { dexNo: 49, pokemonId: 898, name: "バドレックス" },
  { dexNo: 50, pokemonId: 890, name: "ムゲンダイナ" },

  // ===== 追加人気（ゲーム常連）=====
  { dexNo: 51, pokemonId: 52, name: "ニャース" },
  { dexNo: 52, pokemonId: 54, name: "コダック" },
  { dexNo: 53, pokemonId: 131, name: "ラプラス" },
  { dexNo: 54, pokemonId: 54, name: "コダック" },
  { dexNo: 55, pokemonId: 25, name: "ピカチュウ" },

  // ===== SV人気 =====
  { dexNo: 56, pokemonId: 912, name: "クワッス" },
  { dexNo: 57, pokemonId: 914, name: "ウェルカモ" },
  { dexNo: 58, pokemonId: 916, name: "ウェーニバル" },

  { dexNo: 59, pokemonId: 906, name: "ニャオハ" },
  { dexNo: 60, pokemonId: 908, name: "マスカーニャ" },

  { dexNo: 61, pokemonId: 909, name: "ホゲータ" },
  { dexNo: 62, pokemonId: 911, name: "ラウドボーン" },

  // ===== 人気中間進化 =====
  { dexNo: 63, pokemonId: 5, name: "リザード" },
  { dexNo: 64, pokemonId: 8, name: "カメール" },
  { dexNo: 65, pokemonId: 2, name: "フシギソウ" },

  { dexNo: 66, pokemonId: 11, name: "トランセル" },
  { dexNo: 67, pokemonId: 14, name: "コクーン" },

  // ===== 追加人気枠（バランス調整）=====
  { dexNo: 68, pokemonId: 74, name: "イシツブテ" },
  { dexNo: 69, pokemonId: 95, name: "イワーク" },
  { dexNo: 70, pokemonId: 81, name: "コイル" },

  { dexNo: 71, pokemonId: 132, name: "メタモン" },
  { dexNo: 72, pokemonId: 137, name: "ポリゴン" },
  { dexNo: 73, pokemonId: 123, name: "ストライク" },

  { dexNo: 74, pokemonId: 142, name: "プテラ" },
  { dexNo: 75, pokemonId: 144, name: "フリーザー" },
  { dexNo: 76, pokemonId: 145, name: "サンダー" },
  { dexNo: 77, pokemonId: 146, name: "ファイヤー" },

  { dexNo: 78, pokemonId: 249, name: "ルギア" },
  { dexNo: 79, pokemonId: 250, name: "ホウオウ" },

  { dexNo: 80, pokemonId: 251, name: "セレビィ" }
];

// ====================
// 状態管理
// ====================

let currentPokemon = null;
let currentAnswer = 0;
let catchCount = 0;

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

  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;

  currentAnswer = a + b;

  question.textContent =
    `${a} + ${b} = ?`;

  const maxCount = Math.max(a, b);

  // 画面幅に合わせてサイズ計算
  const availableWidth = window.innerWidth * 0.45;
  
  let pokemonSize =
    Math.floor(availableWidth / Math.min(maxCount, 5));

  pokemonSize = Math.max(24, pokemonSize);
  pokemonSize = Math.min(60, pokemonSize);

  const img =
    getPokemonImage(
      currentPokemon.pokemonId
    );

  function makeGroup(count){

    let html = '<div class="numberGroup">';

    for(let row = 0; row < Math.ceil(count / 5); row++){

      html += '<div class="numberRow">';

      const start = row * 5;
      const end = Math.min(start + 5, count);

      for(let i = start; i < end; i++){

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

  visualQuestion.innerHTML = `
    ${makeGroup(a)}
    <div class="plusSign">＋</div>
    ${makeGroup(b)}
  `;
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

  answerInput.value = "";

  questionArea.classList.remove("hidden");
  catchArea.classList.add("hidden");
  nextArea.classList.add("hidden");

  message.textContent =
    `${currentPokemon.name}が あらわれた！`;

  createQuestion();

}

function changePokemon() {

    catchCount = 0;

    loadPokemon();

}

// ====================
// 回答判定
// ====================

function checkAnswer() {

  const value = answerInput.value.trim();

  if (value === "") return;

  if (Number(value) === currentAnswer) {

    questionArea.classList.add("hidden");

    catchArea.classList.remove("hidden");

    message.textContent = "せいかい！";

  } else {

    // ❌不正解 → 絶対にボール出さない
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

    ballImg.classList.add("shake-3");

  }, 1000);

  // ポケモン非表示
  setTimeout(() => {
    pokemonImage.style.display = "none";
  }, 1000);

  // 捕獲判定
  setTimeout(() => {
    catchPokemon();
  }, 3500);
}

function nextPokemon() {

  catchEffect.classList.remove("catch-show");
  catchEffect.style.display = "none";
  
  loadPokemon();

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

  if (catchCount >= 5) {
    success = true;
  } else {
    success = Math.random() * 100 < catchCount * 20;
  }

if (success) {

  savePokemon();

  catchCount = 0;

  catchEffect.classList.remove("catch-show");

  void catchEffect.offsetWidth;

  catchEffect.classList.add("catch-show");

  message.textContent = "";

  questionArea.classList.add("hidden");

  catchArea.classList.add("hidden");

  nextArea.classList.remove("hidden");

} else {

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