//majituka3226ブログ用js  hageC googledriveウェブホスティングサービス終了8/31以降移転
//動画ランダム再生 プログラム練習


//動画固有コードとタイトル宣言
var l0 = '5cpzXB7qoDg';
var s0 = "僕だけがいない街OP";
var l1 = 'e_xb26g5frM';
var s1 = "パルナスピロシキの歌";
var l2 = 'dnwXTAL3fp0';
var s2 = "行け！稲中卓球部！１話";
var l3 = 'FqkLjGS1IXE';
var s3 = "ふわふわ時間";
var l4 = 'sdPwvBJiQJY';
var s4 = "Crow Song";
var l5 = 'PJidGp6Dxkw';
var s5 = "My Soul,Your Beats";
var l6 = '-lkH-uMZVY4';
var s6 = "Steins;Gate OP　Hacking to the Gate ";
var l7 = 'f71c-L4k0Qg';
var s7 = "ホモ弟！あな○ちゃんOP!";
var l8 = '1jcpvxKwD0g';
var s8 = "シコシコ動画流星群";
var l9 = 'Av9d2NB_5Mk';
var s9 = "ニコってる？";
var l10 = 'uRyj5mX_QAg';
var s10 = "Brave Song";
var l11 = 'lF9E_zLoq6w';
var s11 = "ひろゆきとホリエモンが論破祭り";
var l12 = '4hzOOTDbMU8';
var s12 = "ニコニコ動画CMY";
var l13 = 'rcnQ2u2NO_g';
var s13 = "七色のニコニコ動画流星群";
var l14 = 'HzFRMRagXlg';
var s14 = "ニコニコ動画摩天楼";
var l15 = 'OAmdQbW6t-w';
var s15 = "組曲「シコシコ動画」";
var l16 = 'F9wmte4t7Yo';
var s16 = "ドラえもん のび太の宇宙小戦争　少年期";
var l17 = 'hiETn2dC8d8';
var s17 = "ノコギリガール〜ひとりでトイレにいけるもん～";
var l18 = '1Uk1MFNl-Vc';
var s18 = "SHIROBAKO 全OP EDメドレー";
var l19 = 'Wid6rfkx2gk';
var s19 = "Gachimuchi! Boys";
var l20 = 'DiYxzyqJmDo';
var s20 = "迎愛サーキュレーション";
var l21 = 'ti4Z0VsmoEM';
var s21 = "【作業用BGM】Angel Beats!13曲";
var l22 = 'DlNuIaTCggw';
var s22 = "Hello,shooting-star";
var l23 = 'JwPDHobfrAA';
var s23 = "Don't say lazy";
var l24 = 'M2mZ-K7h0UM';
var s24 = "Cagayake Girls";
var l25 = 'f8d3bW42aFY';
var s25 = "坂本ですが？　OP";
var l26 = 'd7gs1Qk1BMU';
var s26 = "僕らは今の中で";
var l27 = 'Zv-bfZSt6QQ';
var s27 = "行け！稲中卓球部　OP";
var l28 = 'TC2PYNo9IVQ';
var s28 = "行け！稲中卓球部　ED";
var l29 = 'UNjHxhljAck';
var s29 = "がっこうぐらし！　OP";
var l30 = 'b6-2P8RgT0A';
var s30 = "かくしん的 めたまるふぉ～ぜっ！";
var l31 = 'wS8yk2dQBN4';
var s31 = "you";
var l32 = 'c2dwus-YQPg';
var s32 = "Day　dream café";
var l33 = 'C5r7uASz494';
var s33 = "ごちうさ二期ed【ときめきポポロン】";
var l34 = 'wfkgRfBUWLo';
var s34 = "化物語 ED - 君の知らない物語";
var l35 = 'OoKIJ8LRkDY';
var s35 = "のんのんびよりOP　なないろびより";
var l36 = 'oDbUVFnLRs0';
var s36 = "のんのんびよりED　おかえり";
var l37 = 'qUMT39Pdn5o';
var s37 = "のんのん日和";
var l38 = 'SIKc7j-9wx8';
var s38 = "らき☆すた　OP";
var l39 = '_EPC5wb2IkI';
var s39 = "みなみけただいまOP　シアワセ ハイテンション↑↑";
var l40 = 'V56MeC_PNKg';
var s40 = "みなみけ - 経験値上昇中 ";
var l41 = 'p1Huxc3jqZQ';
var s41 = "白金ディスコ";
var l42 = 'M-m0Gu6BYp8';
var s42 = "バカとテストと召喚獣「Perfect-area complete!」";
var l43 = 'QY29T1p0OdY';
var s43 = "Baka Go Home.";
var l44 = 'pq7XWSZzDbM';
var s44 = "僕だけがいない街ED　それは小さな光のような";
var l45 = 'Om-I7bG2BPo';
var s45 = "Re:Re:";
var l46 = 'MBepeaANdks';
var s46 = "くまみこ ED に中毒になる動画";
var l47 = '2Eer5KHS0-g';
var s47 = "くまみこ OP";
var l48 = 'tSQjSZFLi7M';
var s48 = "くまみこ　第一話";
var l49 = 'sg4K9OukNUs';
var s49 = "田中くんはいつもけだるげ OP ";
var l50 = 'D-Lvsw0ABJY';
var s50 = "少年メイド OP";
var l51 = 'yiGWj_0aiTk';
var s51 = "迷家　OP";
var l52 = 'NcTu8_t-ivc';
var s52 = "くまみこ　第三話";
var l53 = 'CiqZUdyrwBk';
var s53 = "【PV】TVアニメ「くまみこ」PV";
var l54 = 'hgNst768A8c';
var s54 = "【くまみこ】トランス状態まち【じゃにーぱみゅぱみゅ】";
var l55 = 'Zj9npWFop20';
var s55 = "くまみこ　第二話";
var l56 = 'zIgjWJSLOh0';
var s56 = "くまみこ　第四話";
var l57 = 'lntsytnzlr0';
var s57 = "12歳。～ちっちゃなムネのトキメキ～　第一話";
var l58 = 'R9No2QT8XUo';
var s58 = "少年メイド　第一話";
var l59 = '2ZdoG3fz41M';
var s59 = "うる星やつら ラムのラブソング 宇宙は大ヘンだ!";
var l60 = 'LNjkN4eEDdo';
var s60 = "未来少年コナン　第一話";
var l61 = 'OnmVaR4ReQw';
var s61 = "片平里菜「結露」(TVアニメ「迷家-マヨイガ-」ED曲)";
var l62 = 'LY0HMjv1sKU';
var s62 = "来て来てあたしンち」";
var l63 = 'agX0qoks-qI';
var s63 = "おジャ魔女どれみOP「おジャ魔女カーニバル!!」";
var l64 = 'hkWkn6TDsEU';
var s64 = "とっとこハム太郎 OP";
var l65 = '1ot99VU4kzY';
var s65 = "God Knows";
var l66 = 'ci2Q5BTnvGw';
var s66 = "ハレ晴レユカイ";
var l67 = 'iC4gqelp1UM';
var s67 = "はじめてのチュウ";
var l68 = '_jSGyj2kvi4';
var s68 = "ちびまる子ちゃん ゆめいっぱい";
var l69 = 'VgfT3kqo8Vg';
var s69 = "ダメダメのうた";
var l70 = 'zjxCa4k_gmg';
var s70 = "オラはにんきもの";
var l71 = 'aGcN8w-nMak';
var s71 = "クレヨンしんちゃん不朽の名曲メドレー";
var l72 = 'YlUKcNNmywk';
var s72 = " Californication ";
var l73 = 'rn_YodiJO6k';
var s73 = " Otherside ";
var l74 = 'Sb5aq5HcS1A';
var s74 = " Dani California";
var l75 = 'oDNcL1VP3rY';
var s75 = " Tell Me Baby";
var l76 = 'JnfyjwChuNU';
var s76 = "By The Way";
var l77 = '8DyziWtkfBw';
var s77 = " Can't Stop ";
var l78 = 'NUTGr5t3MoY';
var s78 = " Basket Case";
var l79 = 'VrZ4sMRYimw';
var s79 = "The Kids Aren't Alright ";
var l80 = 'us8OhI-OTHg';
var s80 = "All I Want";
var l81 = 'Qp6Qn8IwPf8';
var s81 = " Original Prankster";
var l82 = '5_LxyhCJpsM';
var s82 = " You're Gonna Go Far, Kid ";
var l83 = 'IzqLX_KVK0Q';
var s83 = "Winter, again";
var l84 = '2RY39bE8X78';
var s84 = "BELOVED ";
var l85 = 'IXvreqrrh3o';
var s85 = " Rusty Nail";
var l86 = 'WzHbHxSEtVQ';
var s86 = "Silent Jealousy";
var l87 = 'qJ_Tw0w3lLA';
var s87 = " Dark Necessities";
var l88 = 'Dl4L9miaZKs';
var s88 = "くまみこ　第７話";
var l89 = 'IyAKUWK1Utg';
var s89 = "くまみこ　第６話";
var l90 = 'fmXLzY8kbYA';
var s90 = "Snow (Hey Oh)";
var l91 = 'AsVCIF7o_go';
var s91 = "ゆりゆららららゆるゆり大事";
var l92 = 'MYP8LHMBIS8';
var s92 = "マイペースでいきましょう";
var l93 = 'Wu99dGviVN8';
var s93 = 'ヨスガノソラ　OP';
var l94 = 'jsta3tEY43s';
var s94 = '世にも奇妙な物語テーマ';
var l95 = 'k7V7KayV2Qg';
var s95 = '懐かしの金曜ロードショー';
var l96 = 'iyw6-KVmgow';
var s96 = '月光';
var l97 = '6ewGwJ63Nr4';
var s97 = 'グロリアス';
var l98 = 'v5boRsZaSbE';
var s98 = '家族の風景';
var l99 = 'qOgFHMEJMeY';
var s99 = 'Monarchy of Roses ';
var l100 = 'daufgidRDS4';
var s100 = 'ハイポーション作ってみた。';
var l101 = 'USUu40edeQ8';
var s101 = 'キーボードクラッシャー（真面目に和訳）';
var l102 = 'MhqrrdVo9Uc';
var s102 = 'わいせつの魔法。 フル(コメ付)';
var l103 = 'aKcwZEOPmFE';
var s103 = 'アベパンマン';
var l104 = 'PiImzKEYiho';
var s104 = '危険なぽぽぽぽーん';
var l105 = '0ZBamCxWEvc';
var s105 = '16歳メンヘラ女子に放屁したら発狂された';
var l106 = 'zALoANu4NHM';
var s106 = '【ミート源五郎】ミートミート【マイムマイムＭＡＤ】　';
var l107 = '7ppTFS_i71o';
var s107 = 'ミート源五郎の神誘い笑いスキル';
var l108 = 'mzJj5-lubeM';
var s108 = ' Scar Tissue';
var l109 = 'CoOibAstPJ4';
var s109 = ' Universally Speaking';
var l110 = 'cHBh_ltrIWY';
var s110 = 'キッチンはマイステージ';
var l111 = 'Wqd5PupOB6s';
var s111 = '誘惑';
var l112 = 'dQWQZT0DWWc';
var s112 = 'hyde * GLAY';
var l113 = 'lTiScsOixso';
var s113 = 'earthshaker - more';
var l114 = '3cupbrwhNp0';
var s114 = '夜明けのBEAT';
var l115 = '3121vHr6tIQ';
var s115 = '浦安鉄筋家族OP　「ナツノマボロシ」';
var l116 = 'Cbo2n2MzxxE';
var s116 = 'Michelle Branch - All You Wanted ';
var l117 = 'HLCasyAh7ic';
var s117 = 'Everywhere';
var l118 = 'bwXfRjePNrE';
var s118 = 'love like woe';
var l119 = 'vy7sXRCidX4';
var s119 = 'SOUL LOVE ';
var l120 = 'gPcPseeICjs';
var s120 = ' HOWEVER ';
var l121 = 'if0KXNEx_WQ';
var s121 = 'ダンガンロンパOP　FULL';
var l122 = 'I3rbYTrebf4';
var s122 = 'Utauyo MIRACLE!!';
var l123 = 'QfZFqPx6XOU';
var s123 = 'ヨスガノソラOP';
var l124 = 'bxDlC7YV5is';
var s124 = 'Greyson Chance Singing Paparazzi ';
var l125 = 'jeiC2sH-2xI';
var s125 = 'おもいではおっくせんまん';
var l126 = 'L2tDWgs2wyA';
var s126 = '鳥の詩';
var l127 = 'wwAG-eARInc';
var s127 = 'ニコニコ動画流星群';
var l128 = 'GlZ3E237zu0';
var s128 = 'Nico Start!';
var l129 = 'e-cQ2rrUPGM';
var s129 = '『ニコニコ動画旅絵巻』を元の曲で再現してみた';
var l130 = 'Y9G20wV0KHE';
var s130 = 'Boku Dake ga Inai Machi OP';
var l131 = 'dW0JjfqR1-s';
var s131 = 'Tear';
var l132 = 'Z0AXjUy1_gY';
var s132 = 'Californication - Live at Slane Castle ';
var l133 = 'rGkjDkw2pOo';
var s133 = 'Live at Rio de Janeiro 2013-11-09';
var l134 = 'gVfcuU4JipQ';
var s134 = '毎度浦安鉄筋家族6-10';
var l135 = 'kVLMbsRrzEM';
var s135 = '毎度浦安鉄筋家族11-15';
var l136 = '9gk4W6KYImE';
var s136 = '毎度浦安鉄筋家族21-25';
var l137 = 'u5EArZEH9F0';
var s137 = '稲中卓球部1-2-3-4';
var l138 = 'uhF9w8-Kt40';
var s138 = '稲中卓球部5-6-7-8';
var l139 = 'HNyrNHXy9aM';
var s139 = '稲中卓球部9-10-11-12';
var l140 = 'aEd1oE02B4o';
var s140 = '稲中卓球部13-14-15-16';
var l141 = 'LNadhbbFmkg';
var s141 = '稲中卓球部17-18-19-20';
var l142 = 'nOo8T542eV0';
var s142 = '稲中卓球部 21-22-23-24';
var l143 = 'zu13KJe-ZtM';
var s143 = '行け!稲中卓球部  26-27-28-29 ';
var l144 = '1ZtalENfHu4';
var s144 = '行け!稲中卓球部 29-30-31-32 ';
var l145 = '3MoXYBvHbME';
var s145 = '行け!稲中卓球部33-34-35-36';
var l146 = 'lfCuVqopXqk';
var s146 = '行け!稲中卓球部37-38-39-40';
var l147 = '6-G5wChhb00';
var s147 = '行け!稲中卓球部41 - 42 - 43 -44';
var l148 = 'yO9eXK7CTwk';
var s148 = '行け!稲中卓球部45-46-47';
var l149 = '0D5JJZl6MB0';
var s149 = 'The Beatles - Let it be';
var l150 = '9pAHsMkFlvs';
var s150 = '寝・逃・げでリセット！';
var l151='DxGbggj5xso';
var s151='走れ正直者';
var l152='XbZ2NTK_Zqw';
var s152='こち亀ラプソディー';
var l153='jeFNVsaYFzU';
var s153='だまって俺についてこい';
var l154='6P28kRiMFvw';
var s154='すいみん不足';
var l155='U8Ul0eTS4Yg';
var s155='真っ赤な誓い';
var l156='ps0_QRzlp9k';
var s156='アンインストール';
var l157='kexAkVkwYs0';
var s157='マクロスF OP　（ライオン）';
var l158='t-QSmNReDyI';
var s158='Evangelion Opening';
var l159='Zc1BE5zeCTU';
var s159='ラピュタ';
var l160='ndH6UqA0QSo';
var s160='[ENG SUB] Secret Base - 10 Years After Ver.';
var l161='-7hYWHDdbJk';
var s161='コネクト';
var l162='E3wWC6Cfikg';
var s162='CLANNAD　AFTER STORY　OP 『時を刻む唄』FULL 歌詞付き';
var l163='CCR-UI3GafU';
var s163='AIR_夏影';
var l164='uMeR2W19wT0';
var s164='「東京喰種トーキョーグール」オープニング映像 TK from 凛として時雨/unravel';
var l165='Ze8xBUk-2qU';
var s165='這いよれ！ニャル子さんW OP 「恋は渾沌の隷也」';
var l166='BGiE6xFBlR4';
var s166='氷菓 優しさの理由 ';
var l167='_xAueTwJFV4';
var s167='Butter-Fly Perfect Final Version';
var l168='3yn_c1cNmyE';
var s168='俺妹 op ';
var l169='jgEO9tPJl2A';
var s169='Toradora! (とらドラ!) ED 2 - Orange / オレンジ';
var l170 = 'fWNaR-rxAic';
var s170 = 'Carly Rae Jepsen - Call Me Maybe';
var l171 = 'zKx2B8WCQuw';
var s171 = 'ouTube Rewind: Turn Down for 2014';
var l172 = 'zREoHN2DTng';
var s172 = '【謝罪】コメント欄でもよく言われるたれぞうさんの件について';
var l173 = '_3sM4cWLQ7s';
var s173 = 'つる兄とカネマンでシコってるかもしれないたれぞう aoc';
var l174 = 'AltMeuPkWRs';
var s174 = 'Pretty Fly (For a White Guy)';
var l175 = 'sxSEW3sUitA';
var s175 = 'The Offspring - Why Dont You Get A Job';
var l176 = 'RtBbinpK5XI';
var s176 = 'The Adventures of Rain Dance Maggie ';
var l177 = 'WnisBb2rVOg';
var s177 = 'Look Around ';
var l178 = 'GLvohMXgcBo';
var s178 = 'Under The Bridge';
/*
var l='';
var s='';
var l='';
var s='';
var l='';
var s='';
var l='';
var s='';
var l='';
var s='';
var l='';
var s='';


*/

//再生される動画固有コードと動画タイトル
var link1 = '0';
var title1 = "test";

//動画のリンク数
var num =179;

//動画のリンク数の中から乱数を１つ抽出しrandに代入
var rand = Math.floor(Math.random() * num);



// 入力ダイアログを表示 ＋ 入力内容を user に代入
user = window.prompt("【このままOKを押してください】\n***selectで動画を選択画面に移動します***\n***キャンセルするとランダム再生を開始***\n　***僕のユーザID入力で説明表示***\n", "select");



if (user == 'select') {

  var alltitle = printn(num);
  num-=1;
  rand = window.prompt("【【動画番号一覧-再生する動画番号入力してね】】\n\n・Chromeの場合一部省略されます\n⇒firefoxでは表示確認済み\n\n" + alltitle + "\n【動画番号を入力してください】\n・0～" + num + "の範囲の半角数字のみ入力可\n", rand);

  if (rand == null || rand == "") {

    window.alert('あんたが空白を入力したか、キャンセル押したため強制的にパルナスピロシキを再生しますね');
    rand = 1;
    setlink();

  } else if (rand >= 0 && rand <= num) {

    setlink();

  } else {

    window.alert('入力された値が正しくないため強制的にパルナスピロシキを再生しますね');
    rand = 1;
    setlink();

  }

  //フレンドのみ特定の動画
} else if (user == 'majituka3226') {
  window.alert("おかえりなさいませご主人様\n\n当サイトのコマンド一覧\n\nID入力画面で以下のコマンドを入力することができます \n\n「select」 ⇒　再生する番号を指定して再生　\n「r」　  ⇒　   余計なアラートを出さずに動画をランダムで再生　\n「secretA」    　⇒アメーバピグのアクションコードを表示");
  rand=149;
  setlink();
} else if (user == 'winter842'　 || user == 'bear843' || user == 'ウーロン茶' || user == 'クマ'||user =='うーろん') {
  window.alert("うーろんさんへ\nangel beats!１話　kissanimeのサイトに飛びます【OKを押してください】")
  location.href = "https://kissanime.to/Anime/Angel-Beats/Episode-001?id=99856";

} else if (user == 'lala-lalan1'　 || user == 'なまこす') {

  pop2("なまこすり", 57);

} else if (user == 'manaya-pigu') {

  pop2("まなや", 34);

}

//何も表示せずにランダム再生コマンド　r
else if (user == 'r') {
  setlink();
} else if (user == 'secretA') {
  codedisp();
  setlink();
}

/*
else if(user == ''){
      pop2("",);
}

*/

// 入力内容が一致しない場合は警告ダイアログを表示
else if (user != "" && user != null) {

  window.alert("ごめんなｻｲｺﾛｽﾃｰｷm(>__<)m  " + user + 'さんはピグ友じゃないのでランダム再生します');
  pop1();

}

// 空の場合やキャンセルした場合は警告ダイアログを表示
else {

  window.alert('あなたが入力を怠ったためランダム再生します');
  pop1();

}


function setlink() {

  eval("link1=" + 'l' + rand);
  eval("title1=" + 's' + rand);

}

function pop1() {

  setlink();
  window.alert("【動画タイトル】\n【『" + title1 + "』】 が選択されました。 \n動画番号:No." + rand + "(No.0～" + num + "中) \n \n\n・他の動画を再生する場合はページを更新してください。 \n・OKで再生開始\n");

}

function pop2(name1, crand) {

  window.alert(name1 + 'にはこの動画をみせてあげる　(*´ε`*)ﾁｭｯﾁｭ');

  eval("link1=" + 'l' + crand);
  eval("title1=" + 's' + crand);

  window.alert("【動画タイトル】\n【『" + title1 + "』】 が選択されました。 \n動画番号:No." + rand + "(No.0～" + num + "中) \n ");

}

function printn(anum) {
  var strallnum = "";
  var temps;
  for (var i = 0; i < anum; i++) {
    eval("temps=" + 's' + i);
    strallnum = strallnum + "No," + i + " " + temps + "\n";

  }
  return strallnum;
}

function codedisp() {
  var straction = "ラインダンス	dance_cancan\n縦ノリ	dance_tatenori\nちぇ	feel_che\nあいさつ	hello\nおじぎ	thanks\nかなしい	sad\n育てよう私のCカーブ	sports_curvydance_c_curve\n拍手	commu_clap\nうなづく	commu_nod\nガクブル	feel_kowai\n朝までオールナイトダンシング	dance_nana_nomal\nもじもじ	feel_mozimozi\n悩む	feel_nayamu\n大笑い	feel_laugh_large\nスマイル	feel_face_smile\n噴火の舞	dance_volcano\nうれしい	joy\nいらいら	frustrate\nバイバイ	commu_byebye\n手渡し	feel_valentine\nメイドインヘヴン!	ranaruta\n変なおじさん1	neta_shimura_hennaojisan1\n変なおじさん2	neta_shimura_hennaojisan2\n変なおじさん3	neta_shimura_hennaojisan3\nちが?う	commu_shake\n１、２、３、ダー！！	sports_inoki_123\n深呼吸	feel_deepbreath\n飯伏乱舞	sports_ibushi_ranbu\nきたよ(1周年)	kitayo_anniversary_secret\nハードなうさぎ跳び	sports_usagi_hard\n考える	feel_thinking\nピグレナ	dance_macarena\nビックフェイス	bigface_secret\nハート	dance_heart_secret\n歌う	dance_song\nチャンバラ	neta_chanbara\nだだをこねる	feel_dada\nびっくり	feel_surprise\nヘッドスピン	dance_headspin\n君について（サビキメver）	dance_akb48_mint\nバットマン	sports_curvydance_batman\nきたよ大晦日	kitayo_omisoka_secret\nべガスのショータイムなダンス	dance_casino_line\nギャンプラーのガッツポーズ	feel_casino_gambler_happy\n同期配信モジュール	syncarea\nきたよ(通常)	kitayo_secret\n忍者煙玉	item_ninja_dron\n熱血のオーラが出る修造キャラメル	item_shuzo_caramel\n連環拳 六、鷂子翻身	sports_renkanken_05\nパラパラ	dance_parapara\n後ろ受け身	sports_ukemi\n泳ぐ	swimaction\nミニマム	minimum_secret\nでかマム	maximum_secret\nきたよ２０１１クリスマス	kitayo_xmas2011_secret\nあやまんJAPAN にんにんにん	dance_ayaman_ninnin\nあやまんJAPAN ぽいぽいぽぴー	dance_ayaman_poipoi\nあやまんJAPAN しゅっしゅっぽっぽ	dance_ayaman_shushupopo\nディスコ	dance_bubble\nペンライト	dance_penlight_secret\n敬礼	neta_salute\nおしりペンペン	neta_oshiripenen\nバニーポーズ	neta_bunnypose\nきたよ(エイプリル)	kitayo_april_secret\nツイスト	dance_twist\n喜んで★	commu_danceok\n宇宙旗を立てる	neta_spaceMoonFlag_secret\nぽっ	feel_po\nモデルウォーク	neta_parisFashion\nプリーズ	commu_please\n言い訳Maybe（サビロングver）	dance_akb48\nストロングマン　怒りの突進	sports_strongman_rush\nゴッド浮遊	god_floating\nサンバ	dance_samba\n絶対に落とせない初級リフティング	sports_liftingMiddle\nなんでやねん	neta_nandeyanen\nあくび	feel_akubi\n千鳥足	neta_chidoriashi\nガーン	feel_gaan\n挙手	commu_kyoshu\nシューティングスタープレス	sports_ibushi_press\nエジプトの踊り	dance_egypt\nバク宙	sports_bakuchu\nやれやれ	neta_yareyare\nRIVER（サビキメver）	dance_akb48_river\nサイドステップ	dance_rhythmical\nダンスウィズミー	commu_danceplease\nうとうと	feel_utouto\nかんぺ	落ちます\nブルーミスト	item_pw_bluemist\n正座	sit_seiza\n走る忍者	run_ninja\nペプシドリンク	item_pepsi_petbottle2011\n継続失敗	fever_fail\nダーツ	darts\n超気持ちいい	item_kitajima_cho\nitem_kitajima_not	item_kitajima_not\nうっふん	neta_uffun\nディスコ	dance_bubble\nうっふん♪	neta_uffun\nチャンバラ	neta_chanbara\n千鳥足	neta_chidoriashi\nカンペ：まいて！	neta_kanpe_maite\nカンペ：落ちます	neta_kanpe_leave\n闘魂注入ビンタ	sports_inoki_binta\nダー！！	sports_inoki_da\n採点３０００点	neta_saiten3000\n採点１０点	neta_saiten10\n採点５点	neta_saiten5\n採点０点	neta_saiten0\n世界一！	neta_saiten_world\nノーミス！	neta_saiten_nomiss\nジャンプ！	neta_saiten_jump\n金メダル	neta_saiten_gold\n高橋大輔のキメポーズ	sports_takahashi_kime\n高橋大輔の情熱のステップ	sports_takahashi_step\n高橋大輔の４回転トゥループ	sports_takahashi_1440turn\nマッスルオーケストラのポーズ	sports_strongman_rush\n飯伏乱舞	sports_ibushi_ranbu\nシューティングスタープレス	sports_ibushi_press\nソフトなうさぎ跳び	sports_usagi_soft\nハードなうさぎ跳び	sports_usagi_hard\nヒンズースクワット	sports_squat\n愛してま～す	neta_tana\nぐるぐるラリアット	sports_chosyu_guruguru\nストンピング	sports_chosyu_stomping\nカラリアット	sports_chosyu_rari\n長州力の入場シーン	sports_chosyu_nyujo\nプロレスLOVE	neta_muto\nシャイニングウィザード	sports_sw\n時は来た	neta_hashimoto\n水面蹴り	sports_suimengeri\nゼァッ！	neta_nagata\nブロードウェイのJAZZダンス	dance_jazz1\nギャンプラーのガッツポーズ	feel_casino_gambler_happy\nベガスのショータイムなダンス	dance_casino_line\n君について(サビキメver)	dance_akb48_mint\nRIVER(サビキメver)	dance_akb48_river\n言い訳Maybe(サビロングver)	dance_akb48\n言い訳Maybe(ショートver)	dance_akb48_maybe\nバットマン	sports_curvydance_batman\n数を数える男のギューン	neta_yoshimoto_gyuun_1105\n品川庄司　庄司の平成のパピプペホ	neta_yoshimoto_shoji_1104\n挙手	commu_kyoshu\nバレリーナ	dance_ballerina\n団子を食べる	item_dango_1108\n連環拳 一、起勢	sports_renkanken_00\n連環拳 二、擱手衝拳	sports_renkanken_01\n連環拳 三、弾腿衝拳	sports_renkanken_02\n連環拳 四、馬歩架打	sports_renkanken_03\n連環拳 五、截把	sports_renkanken_04\n連環拳 六、鷂子翻身	sports_renkanken_05\n連環拳 七、連環掌	sports_renkanken_06\n連環拳 八、回頭劈掌	sports_renkanken_07\n連環拳 九、弓歩穿掌	sports_renkanken_08\n連環拳 十、燕子抄水	sports_renkanken_09\n連環拳 十一、斜形	sports_renkanken_10\n連環拳 十二、?脚迎面掌	sports_renkanken_11\n連環拳 十三、転身架打	sports_renkanken_12\n連環拳 十四、狠脚双衝拳	sports_renkanken_13\n連環拳 十五、?脚頂肘	sports_renkanken_14\n連環拳 十六、転身圧掌	sports_renkanken_15\n連環拳 十七、退歩抜剣	sports_renkanken_16\n連環拳 十八、虚歩坐山	sports_renkanken_17\n連環拳 十九、収勢	sports_renkanken_18\nYO!	neta_yo\nたこ焼き	item_yoyogi_takoyaki_1106\n荒川静香のイナバウアー	sports_arakawa_inaBauer\n華麗なスケーティング	ports_gracefulSkate\nジタバタ	sports_jitabata\n初心者のスケーティング	sports_beginnerSkate\n方向転換	sports_changeDir\n４回転ジャンプおっとっと	sports_1440turnFail\nバランス	sports_blance\nビールマンスピン	sports_biellmann\n４回転ジャンプ	sports_1440turn\n１回転ジャンプ	sports_360turn\nスパイラル	sports_hangleg\nイナバウワー	sports_inaBauer\n高速回転	sports_spin\n３回転ジャンプ	sports_1080turn\nChoo Choo TRAIN	dance_choochootrain\nねこじゃらし	pet_jarasu\nクルクルエアー	pet_kurukuruair\nボールを投げる	ball2\n座布団投げ	neta_g1_zabuton_secret\n食べる	food_eat\n飲む	food_drink\nジャンプ座り	china_down\n座って食べる	food_eat_sit_secret\nシャンパン	item_casino_champagne\nシャボン銃	item_syabonjuu\nシャボン玉	item_syabondama\n餅つき	neta_mochituki\nバク転おっとっと	sports_bakuchuFail\nあやまんJAPAN　右マッチョ、左マッチョ	dance_ayaman_maccho\n盆踊り	dance_bonodori\nセクシーポーズ	dance_sexy\nカエルダンス	dance_kaeru\nゾンビちゃんダンス	dance_thriller\nええじゃないか	dance_eejanaika\nうおうおの舞	dance_fishing_uouo\nライダージャンプ	neta_rider_shodai\n志村けんのアイ～ン	neta_shimura_ain\nカメラ	feel_camera\nおしりペンペン	neta_oshiripenen\n海賊の踊り	dance_viking\nとったどー	neta_fishing_tottado\nKARAのヒップダンス	neta_kara_dance\n俺、さんじょう!	neta_rider_denou\nボールを投げる	pet_ball2\nナイスイベント	nice_event_secret\nお祝いクラッカー/rd	item_cracker_rd_1004\nお祝いクラッカー/bl	item_cracker_bl_1004\nお祝いクラッカー/pk	item_cracker_pk_1004\nお祝いクラッカー/gn	item_cracker_gn_1004\nコカコーラ	item_ad_cocacola_1112\n先頭前ならえ	sports_maenaraelead\n前ならえ	sports_maenarae\nポロロの踊り	dance_fishing_pororo\n漫才アクション（ツッコミあり）	neta_manzai\n漫才アクション（ツッコミなし）	neta_manzai_not\nゴッド浮くときのコマンド	god_chant\nかめはめ波	neta_heroattack\n女体化	cannon_attack\n進撃の巨人 大砲のひもを引く	cannon_attack_run\n中国のマスター 構え	china_master_2\nライフル	commu_5th_rifle\nあけおめ	commu_akeome_1501\nお札パタパタ	commu_billfan_1502\nボウリング	commu_bowling_1502\nチョコ渡し	commu_chocoforyou_1502\ncommu_flip_happy_1306\ncommu_flip_howareyou_1306\ncommu_flip_kamacho_1404\ncommu_flip_mild_1306\ncommu_flip_oko_1306	commu_flip_oko_1306\ncommu_flip_oko_good_1306	commu_flip_oko_good_1306\ncommu_flip_sad_1306	commu_flip_sad_1306\ncommu_flip_surprise_1306	commu_flip_surprise_1306\nガオー	commu_gaoo_1410\ncommu_goodpigg_dance_1306	commu_goodpigg_dance_1306\ncommu_incentive_kime_1506	commu_incentive_kime_1506\ncommu_letsdance	commu_letsdance\ncommu_nidomi	commu_nidomi\ncommu_sailormoon_1504	commu_sailormoon_1504\ncommu_secretlabo_1504	commu_secretlabo_1504\ncommu_stickaction_1503	commu_stickaction_1503\ncommu_western_gunman_1311	commu_western_gunman_1311\ncommu_yubiwa_1306	commu_yubiwa_1306\ncommu_yurayurashakin_1411	commu_yurayurashakin_1411\ndance_5th	dance_5th\ndance_5th_bakuchu	dance_5th_bakuchu\ndance_a_samba_1202	dance_a_samba_1202\ndance_alicenine_mosh_1210	dance_alicenine_mosh_1210\ndance_band_hedoban	dance_band_hedoban\ndance_band_sing_s	dance_band_sing_s\ndance_band_sing_w	dance_band_sing_w\ndance_bonodori_1208	dance_bonodori_1208\ndance_bonodori2	dance_bonodori2\ndance_cat_1411	dance_cat_1411\ndance_china_yuyu_1203	dance_china_yuyu_1203\ndance_clap_secret	dance_clap_secret\ndance_clione_1212	dance_clione_1212\ndance_exile_victory_1206	dance_exile_victory_1206\ndance_girlshiphop_1207	dance_girlshiphop_1207\ndance_hulahoop_1310	dance_hulahoop_1310\ndance_kani	dance_kani\ndance_miku_shoshitsu_1209	dance_miku_shoshitsu_1209\ndance_otagei_ppph_1211	dance_otagei_ppph_1211\ndance_penlight	dance_penlight\ndance_pigg_cm	dance_pigg_cm\ndance_robot_1502	dance_robot_1502\ndance_summer2013	dance_summer2013\ndance_tezensu_1411	dance_tezensu_1411\ndance_winds_01_1106	dance_winds_01_1106\ndance_winds_02_1106	dance_winds_02_1106\ndance_windspenlight	dance_windspenlight\ndance_windstowel	dance_windstowel\nevent_5th_reaction_go	event_5th_reaction_go\nevent_6th_amebar_exchange	event_6th_amebar_exchange\nevent_6th_exit_gameover	event_6th_exit_gameover\nevent_6th_left_run	event_6th_left_run\nevent_6th_left_tired1_1	event_6th_left_tired1_1\nevent_6th_left_waiting	event_6th_left_waiting\nevent_6th_navizou_rolling	event_6th_navizou_rolling\nevent_6th_parachute1	event_6th_parachute1\nevent_6th_parachute2	event_6th_parachute2\nevent_6th_parachute3	event_6th_parachute3\nevent_6th_right_getbar	event_6th_right_getbar\nevent_6th_right_getheart	event_6th_right_getheart\nevent_6th_right_korobu	event_6th_right_korobu\nドラゴンボール 悟空のジャンプ	event_dragonball_jumpGoku\nドラゴンボール オッス	event_dragonball_ossuGoku\nドラゴンボール 登場アクション	event_dragonball_showGoku\nevent_drink_lv2	event_drink_lv2\nevent_drink_lv3	event_drink_lv3\nevent_drink_lv4	event_drink_lv4\nevent_eventStorm3_action	event_eventStorm3_action\nevent_gun_shot	event_gun_shot\nevent_haunted_npc_standby	event_haunted_npc_standby\nevent_haunted_npc_walk	event_haunted_npc_walk\nぶんぶん	feel_bunbun_1410\nカメラ小僧	feel_camerakozou_1211\n幽玄★占い師のおふだアクション	feel_casino_augur_1407\nベルサイユのばらをくわえる風アクション	feel_casino_oscar_1412\n土下座	feel_dogeza_1210\nわー恥ずかしい	feel_embarrassed\nふなっしー大ジャンプ	feel_funassy_jump_1403\nげっぷ	feel_gep_1501\nヒーローの真似っ子	feel_hero_imitation_1405\n祈る	feel_inori_1412\n鳥になりたい	feel_iwereabird_1210\nものすごく怒る	feel_jidanda\nジャンプ土下座	feel_jumpingdogeza_1210\nリモコン下駄	feel_kitarou_1407\nおかしくてたまらない	feel_laugh_banban_1404\nモジモジ(男)	feel_mojimoji_boy\n投げキッス	feel_nagekiss_big_1209\nスーパー投げキッス	feel_nagekiss_super_1209\nお化けぴょんぴょん	feel_obakepyonpyon_1410\nマイクコードパフォーマンス	feel_rollingmic_1305\n屋上で叫ぶ	feel_shibugaku_shout\n屋上で寝る	feel_shibugaku_sleep\n忍び足	feel_shinobiashi_1501\nシュピーーン！	feel_shupiiin_1503\n手裏剣投げ	feel_shuriken_1501\nスチャ	feel_sucha_1505\n座りブルブル	feel_suwariBuruburu\nズッギャーーン	feel_syndrome_1503\nゲゲゲの鬼太郎 埋められるアクション	feel_syunobon_bokoboko\nワッ！	feel_wa\nみずやり	feel_water_1405\nやる気	feel_yaruki_1505\nじたばた	feel_zitabata_1310\n座って食べる	food_eat_sit\nfurniture_diy_wood_1405	furniture_diy_wood_1405\nfurniture_neondarts_1505	furniture_neondarts_1505\nfurniture_trampoline	furniture_trampoline\ng1_announce	g1_announce\ng1_nagata	g1_nagata\ng1_nakamura	g1_nakamura\ng1_tanahashi	g1_tanahashi\ng1_ten3	g1_ten3\nグッピグ	goodpigg_send\nhinobiashi_1501	hinobiashi_1501\nitem_ad_cocacola_1211	item_ad_cocacola_1211\nitem_ad_evian_1205	item_ad_evian_1205\nitem_ad_kao_cape_1302	item_ad_kao_cape_1302\nitem_countdown_beer_1112	item_countdown_beer_1112\nitem_flowershower_1306	item_flowershower_1306\nitem_hanabi_s_rocket_1208	item_hanabi_s_rocket_1208\nitem_hanabi_s_senkou_1208	item_hanabi_s_senkou_1208\nitem_kao_8x4_1105	item_kao_8x4_1105\nitem_noodle_yukiri_1301	item_noodle_yukiri_1301\nitem_okada_rainmaker_1301	item_okada_rainmaker_1301\nitem_pepsi_balloon_1011	item_pepsi_balloon_1011\nitem_pepsi_petbottle	item_pepsi_petbottle\nitem_pw_orangemist	item_pw_orangemist\nitem_pw_purplemist	item_pw_purplemist\nitem_pw_yellowmist	item_pw_yellowmist\nitem_setsubun_beans_1101	item_setsubun_beans_1101\nitem_watage_1303	item_watage_1303\nカベチラ	kabechira_secret\nきたよ(お外)	kitayo_exterior_secret\nkokuriko_mizunuma	kokuriko_mizunuma\nkokuriko_umi	kokuriko_umi\nmixpot_1410	mixpot_1410\nneta_chono	neta_chono\nneta_chono2	neta_chono2\nエネミーアタック	neta_enemyattack\nneta_event_4th_trampoline	neta_event_4th_trampoline\nneta_event_enterBook	neta_event_enterBook\nneta_event_exist	neta_event_exist\nneta_event_existBook	neta_event_existBook\nneta_event_goal2	neta_event_goal2\nneta_event_playPlane	neta_event_playPlane\nneta_cosme_boy	neta_cosme_boy\nneta_cosme_girl	neta_cosme_girl\nneta_event_seaDive_suisui	neta_event_seaDive_suisui\nとったどー！！ 2	neta_fishing_tottado_2012\nneta_g1_zabuton	neta_g1_zabuton\nneta_gosei_blue	neta_gosei_blue\nneta_gosei_pink	neta_gosei_pink\nneta_gosei_red	neta_gosei_red\nneta_gosei_yellow	neta_gosei_yellow\nneta_juggling	neta_juggling\nneta_kanpe_hakushu	neta_kanpe_hakushu\nneta_ofc_hige_cutter	neta_ofc_hige_cutter\nneta_ofc_katoucha_kushami	neta_ofc_katoucha_kushami\nneta_ofc_kojima_kankeine	neta_ofc_kojima_kankeine\nneta_ofc_kojima_opapi	neta_ofc_kojima_opapi\nneta_ofc_sakano_gets	neta_ofc_sakano_gets\nneta_player_fever	neta_player_fever\nneta_rider	neta_rider\nneta_rider_shoker	neta_rider_shoker\nneta_spaceMoonFlag	neta_spaceMoonFlag\nneta_spaceMoonJet	neta_spaceMoonJet\nneta_spaceMoonRolling	neta_spaceMoonRolling\nneta_spaceShuttleDrink	neta_spaceShuttleDrink\nneta_spaceShuttleRolling	neta_spaceShuttleRolling\nneta_vj_audience_dance	neta_vj_audience_dance\nngsun_1206	ngsun_1206\nnice_event	nice_event\noverreaction_kimegao	overreaction_kimegao\noverreaction_kiran	overreaction_kiran\noverreaction_shock	overreaction_shock\noverreaction_smile	overreaction_smile\noverreaction_tehepero	overreaction_tehepero\noverreaction_uruuru	overreaction_uruuru\nparty_skill_bazooka	party_skill_bazooka\npenaltyRun	penaltyRun\npizza_pushpull	pizza_pushpull\nrainy_extr_pool_1406	rainy_extr_pool_1406\nrun_komata_end	run_komata_end\nrun_suriashi	run_suriashi\nsit_furniture_onara	sit_furniture_onara\nsnowwhite_well_1503	snowwhite_well_1503\nsoccer_dribble	soccer_dribble\nsoccer_dribble2011	soccer_dribble2011\nspf_down	spf_down\nspf_downEnd	spf_downEnd\nspf_downStop	spf_downStop\nspf_jumpEnd	spf_jumpEnd\nspf_jumpStart	spf_jumpStart\nspf_npc_appear_run	spf_npc_appear_run\nspf_ottotto	spf_ottotto\nspf_shingeki_game_jumpEnd	spf_shingeki_game_jumpEnd\nspf_shingeki_jumpEnd16	spf_shingeki_jumpEnd16\nspf_shingeki_jumpEnd32	spf_shingeki_jumpEnd32\nspf_shingeki_jumpEnd48	spf_shingeki_jumpEnd48\nspf_shingeki_jumpStart16	spf_shingeki_jumpStart16\nspf_shingeki_jumpStart32	spf_shingeki_jumpStart32\nspf_shingeki_jumpStart48	spf_shingeki_jumpStart48\nspf_titaneren_appear_run	spf_titaneren_appear_run\nspf_titaneren_attack_jump	spf_titaneren_attack_jump\nsports_893k	sports_893k\nsports_inoki_123_npc	sports_inoki_123_npc\nsports_kojima_elbow	sports_kojima_elbow\nsports_liftingNormal	sports_liftingNormal\nsports_liftingSpecial	sports_liftingSpecial\nsports_mochitsuki	sports_mochitsuki\nsports_mongolian	sports_mongolian\nsports_tanahashi_guitar	sports_tanahashi_guitar\nsports_usagi_kick	sports_usagi_kick\nsports_wc_card_rd_1205	sports_wc_card_rd_1205\nsports_wc_card_yw_1205	sports_wc_card_yw_1205\nsports_wc_offside_1205	sports_wc_offside_1205\nsuper_titan_appear	super_titan_appear\nsuper_titan_attack_hand	super_titan_attack_hand\nsuper_titan_attack_smoke	super_titan_attack_smoke\nsuper_titan_damage_fall	super_titan_damage_fall\nsuper_titan_damage_run	super_titan_damage_run\nsuper_titan_disappear	super_titan_disappear\nsuper_titan_stop	super_titan_stop\nsuper_titan_walk	super_titan_walk\nswim_ashiari	swim_ashiari\nswim_ashiariUp	swim_ashiariUp\nswim_long	swim_long\nthanks_vip	thanks_vip\nufo_eventdance_sexy	ufo_eventdance_sexy\nevent_opopo_enemy_run1	event_opopo_enemy_run1\nevent_haunted2015_attack	event_haunted2015_attack\nevent_haunted_walk	event_haunted_walk\nevent_haunted2015_wakeup	event_haunted2015_wakeup\n感染廃病院ビックリアクション	overreaction_scream\nkomata	komata\nkomata_end	komata_end\nヲタゲー(ロマンス)	dance_otagei_romance_1507\nぱたんピクピク	feel_patanpikupiku_1507\nランニングマン	dance_runningman_1508\nうさぎピョンピョン	feel_usagi_pyonpyon_1509\nevent_halloween2015_run	event_halloween2015_run\nride_casinobikeFeedEnd	ride_casinobikeFeedEnd\nドロン	commu_doron_tanuki_1511\n7周年パーク 雲に沈むアクション	event_7th_sink_start\n7周年パーク 雲に沈む	event_7th_sink_loop\nいただきまーす	feel_itadakimasu_1511\nモンキージャンプ	feel_monkey_jump_1601\ncommu_incentive_7th_1602	commu_incentive_7th_1602\n";

  window.alert("【【アメーバピグのアクションコード一覧表示】】\n\n・一部省略されます\n⇒全て見たい場合ソースコードから確認してください\n\n\n" + straction);

}


//動画再生部
//youtube URLにlink1を文字列結合
$(function playtube() {
  $('.skinBody').before('<iframe style="z-index: -1;min-width: 1024px;position: fixed;" width="100%" height="100%" src="https://www.youtube.com/embed/' + link1 + '?rel=0&autoplay=1&loop=1&controls=0&wmode=transparent" frameborder="0" allowfullscreen="true"></iframe>');
});
