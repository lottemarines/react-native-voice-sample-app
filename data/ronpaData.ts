import {
  QUESTION_IMG,
  PAKA_IMG,
  USAGI_IMG,
  KURO_IMG,
  TABAKO_IMG,
  HIGE_IMG,
  HIROYUKANAI_IMG,
  AKABANE_IMG,
  UMAIBO_IMG,
  UNK_IMG,
  KATUMA_IMG,
  HURUYA_IMG,
  HIGEOYAZI_IMG,
  SAIKUN_IMG,
  SAIKUN_2_IMG,
  HIROYUKI_IMG,
  BEER_IMG
} from 'assets/images';


const data = [
  {
    level: 5,
    title: 'うさぎ',
    imagesrc: USAGI_IMG,
    description: `
    ひろゆき氏のアイコンは4chanの住民が創作したもの。
    これは4chan開設者「moot」が猫耳のペルソナ（なぜか2chの「しぃ」の格好をしている）
    である事に対抗して「兎耳を持つ男の子」として作成された。
    ちなみに名前は「Hiro-tan」
    もしくは「Mootwo（ひろゆき氏が4chanの2番目の管理人であるのに由来）」です。
    ひろゆき氏本人は「ひろゆこ」と命名している。
    `
  },
  {
    level: 20,
    title: 'クロックス',
    imagesrc: KURO_IMG,
    description: `
    どこにでもクロックスで行く当人。\n
    ――「表面的なもので判断しない人かどうか」
    ひろゆき氏：僕みたいにクロックスを履いているのを見たときに、明らかに怪訝な表情を浮かべるような人ですね。
    「この人、クロックスで来たんだ……」と思っているかもしれませんが、
    僕から見たら、「この人、人を見た目で判断するんだ」とカウンター攻撃をされているのに気づいていないわけですね。
    身なりはそういう判断材料になりますよね。
    と語る。\n
    しかし、北海道のさっぽろ雪まつりへクロックスで行った際は、後悔があった模様である。
    `
  },
  {
    level: 50,
    title: 'たばこ',
    imagesrc: TABAKO_IMG,
    description: `
    好きな銘柄は「キャスター」の1ミリ、「マイルドセブン」の1ミリ
    本人はたばこを現在吸っていない（禁煙とは言っていない）
    たばこは飲酒中しか吸わないOR人に会うときしか吸わない
    `
  },
  {
    level: 80,
    title: 'ひげ',
    imagesrc: HIGE_IMG,
    description: `
    ひげを剃らない理由は面倒くさいから
    ひげおやじ氏のひげが無いのは知性と一緒になくなってしまったため
    `
  },
  {
    level: 100,
    title: 'ひろゆかない',
    imagesrc: HIROYUKANAI_IMG,
    description: `
    とある人物のものまね系Youtuber
    生年月日	1986年3月
    出身地	広島県
    本業はなんと整体師。そしてセラピストだそう。
    西村ひろゆかないさんは高校卒業後、専門学校で音楽を学び、様々な仕事をされていたそう。そんな中23歳でできちゃった結婚。当時はバーテンダーをされていたんだとか。
    子供も出来たしこのままではまずい、と思った西村ひろゆかないさんはセラピストになる事を決意し、
    鍼灸・あん摩指圧マッサージ師の国家資格を持った社長が直々に指導してくれ、さらに会社で経営しているリラクゼーションサロンや整体院で働かせてもらえる場所でお仕事を始めたそう。
    しかし業界上、休みがなかったりサービス残業や、ボーナスや有休の有無で独立を決意。
    フリーランスになることで、出張での整体や温泉施設などで施術を行いながらのんびり生活されていたそうです。この時は27歳くらいだったとか。
    `
  },
  {
    level: 200,
    title: '黄色いパーカー',
    imagesrc: PAKA_IMG,
    description: `
    ブランドは「Vollebak」社の「100 Year Hoodie」
    値段はなんと395＄ということで、およそ40,000円\n
    パーカーの機能
    ・耐摩耗性が高い
    ・防水
    ・耐熱
    ・通気性が高い
    ・高い吸湿性
    ・絶対に破れない
    ・100年着られる\n
    ひろゆき氏がパーカーをいつも着ている理由
    ・「服を考えなくていいから」
    ・「故意に同じ服を着ていると誤解させるため」
    `
  },
  {
    level: 300,
    title: '東京都北区赤羽',
    imagesrc: AKABANE_IMG,
    description: `
    当人が
    「赤羽最強。港区とか千代田区は赤羽を見習うべき。」
    と自負するほどに赤羽に愛着を持つ。
    ちなみに細君も北区民である。
    `
  },
  {
    level: 500,
    title: '西村博之専用うまい棒',
    imagesrc: UMAIBO_IMG,
    description: `
    うまい棒（めんたい味）が好物で、2ちゃんねるのサーバ名（cheeze、mentai、pizza、natto、cocoaなど）にもなっていた。
    また、2001年に開設されていたうまい棒の公式サイトでの投票結果から、パッケージデザインのみではあるが「西村博之専用うまい棒」が製造された。
    `
  },
  {
    level: 1000,
    title: 'うんこ',
    imagesrc: UNK_IMG,
    description: `
    Youtubeとか、ネットで流行るには内容が面白いかどうかは二の次で、まずは「知られること」が大事。
    だから、「Youtuberで有名になりたければ、ウンコ食え」って言ってるんだけど、なかなか伝わらないよね。。
    `
  },
  {
    level: 2000,
    title: '勝間和代',
    imagesrc: KATUMA_IMG,
    description: `
    \n
    「写像？なんすか写像って？」
    \n
    続柄：「デキビジ」対談相手
    生誕：1968年12月14日
    学歴：慶応大学商学部
    肩書：経済評論家, 中央大学ビジネススクール, 客員教授
    当時最年少の19歳で会計士補の資格を取得、大学在学中から監査法人に勤務。
    アーサー・アンダーセン、マッキンゼー、JPモルガンを経て独立。
    現在、株式会社監査と分析取締役、国土交通省社会資本整備審議会委員、中央大学ビジネススクール客員教授として活躍中。
    あまり知られていないが、Youtuberとしても活躍している。
    `
  },
  {
    level: 3000,
    title: '古谷経衡',
    imagesrc: HURUYA_IMG,
    description: `
    \n
    ネットスラングとしても名高いフレーズ
    \n
    「あなたの感想ですよね」
    「なんだろう、ウソつくのやめてもらっていいですか」
    「なんかそういうデータあるんですか」
    \n
    を誘発させた伝説の人。
    `
  },
  {
    level: 4000,
    title: 'ビール',
    imagesrc: BEER_IMG,
    description: `
    ひろゆき氏が飲んでいた海外銘柄一覧
    1 Bière du Corbeau
    2 STOUT DE VÉZELAY　
    3 MAREDSOUS TRIPLE 10　
    4 La Gâtine Brune　
    5 ANOSTEKE
    6 NAPO la Mythic　
    7 3 MONTS LEVURE
    8 Grimbergen pale ale
    9 Trappistes Rochefort
    10 Walbergeｍ
    11 EKU 28
    12 CORNET
    13 Lindemans Kriek
    14 GINETTE
    15 Alésia　BLARICHE　
    16 GOOSE　IPA
    17 COLOMBA
    18 Nos brasseurs ont du talent gabeiau du poitou
    19 LA GATINE IPA
    20 Boheme Blonde
    21 Monoprix White
    22 Biere de garde
    23 Desperados RED
    24 curtius
    25 Grimbergen pale ale
    26 DESPERADOS MOJITO
    27 Grimbergen Blonde
    28  Monoprix Blonde
    29  Monoprix IPA
    30 Fischer　　Tradition
    31 bières de garde (2回目）
    32 Corona beer
    `
  },
  {
    level: 5000,
    title: '死んだ魚の眼をしたおじさん',
    imagesrc: HIGEOYAZI_IMG,
    description: `
    続柄：契約上の友達
    生誕：19xx年4月8日
    肩書：Webディレクター ガジェット通信副編集長
    ひろゆき氏から言及されるひげおやじは、上記の通り非常にひどいものであるが、
    一方で、実際のひげおやじは案外、聡明で有能である。
    特に、ガジェット通信が企画する生配信イベントなどでの司会進行能力、
    ひろゆき氏による"コンプラ的にまずい発言"等を制御する能力は随一と言える。
    メディアより伺い知り得る表層においては、とてもじゃないが、横山氏のように人の排泄物を主食とするような人物には見えない。
    ぱっと見では、たしかに"食べそう"ではあるが、振る舞いとしてはその限りではないので、そのギャップに困惑する視聴者は多い。
    親が金持ちであり、ひろゆき氏はひげおやじの両親から、
    "ひげおやじさんがあまりにブサイクで性格が悪くデブなので友人が少ないため、
    「友達手当」をいただいて「友達であると自称する仕事」"を請けていると 言及している。
    `
  },
  {
    level: 8000,
    title: '細君',
    imagesrc: SAIKUN_2_IMG,
    description: `
    「だんな様はひろゆき」　発売中
    職業はWebライターなど
    過去の職業として、２ｃｈの元役員、ひろゆき氏の会計役など
    ２ch時代は削ジャンヌとして恐れられていた
    削ジャンヌ・・・２chのデマ情報や悪口などを削除する執行人。
    `
  },
  {
    level: 10000,
    title: '論破王',
    imagesrc: HIROYUKI_IMG,
    description: `
    ここまで来たあなたは「論破王」
    `
  },
]
export const SHOW_QUESTION_IMG = () => { return QUESTION_IMG }

export const ranpaData = () => {
  return data
}