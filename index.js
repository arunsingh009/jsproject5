function hash() {
  let x = document.getElementById("count").value;
  let a = document.getElementById("output");
  const old = [
    "#round2hellvine","#round2hellrecords","#noidagram","#engineering","#bbkememes","#round2hell_official_fc","#r2h","#round2hellmoradabad","#desi","#round2hell","#memesammaaz","#m_e_m_e_s_w_0_r_l_d","#round2hollywood","#round2hellofficial","#round2hall","#round2helllover","#round2hellvideos","#iitwaligf ","#engineerlife","#swaggersharma","#funnyvideos","#hoodfight","#hoodcomedy","#wildmemes","#hoodratchetness","#memetangclan","#mememachine","#laughfactory","#bruhmemes","#iamdeadaf","#funnyhoodvids","#memed","#funnyfights","#bruhmomement","#memepages","#hoodlaughs","#schoolfight","#hoodhumor","#memegod","#memelife","#hoodmemes","#memesoftheday",
  ];
  const worldWide = [
    "#memes","#memes😂","#memesdaily","#memesespañol","#memesbrasil","#memesindia","#memesbr","#memesbrasileiros","#memesengraçados","#memesenespañol","#memestagram","#dankmemes","#funnymemes","#offensivememes","#memesfordays","#memeschile","#memeschilenos","#memester","#dailymemes","#edgymemes","#memeslatinos","#memesargentina","#mememsfunny","#memesdank","#nichememems","#animememes","#memessad","#btsmemes","#memesgraciosos","#mememsespañoles","#memes4ever","#fortnitememes","#memesforlife","#memesita","#wholesomememes","#memesquad","#darkmemes","#memestar","#memesrlife","#tamilmemes","#memess","#spicymemes","#memes4days","#memesapp","#memesaccount","#memes2good","#kpopmemes","#bestmemes","#memeslayer","#gujjumemes","#pubgmemes","#sarcasticmemes","#bollywoodmemems","#footballmemes",

  ];

  const indian = [
    "#indianmemes","#indianmemesdaily","#indianmemestore","#indianmemestroll","#indianmemesofficial","#indianmemesfactory","#indianmemes😂😂😂","#indianmemesforyou","#indianmemeslover","#indianmemesstore","#indianmemes09","#indianmemesvideos","#indianmemes","#indianmemescommunity","#indianmemeslol","#indianmemesunited","#indianmemespage","#indianmemesdaly","#indianmemestho","#indianmemse","#indianmemes12","#memesammaaz","#indianmemesdailyindianjokesi","#indianmemesactor","#indianmemest","#indianmemesforedgyteens","#indianmemstrolls","#indianmemes2","#indianmemesry","#indianmemsry","#indianmemestores","#indianmemescrackmeup","#indianmemesdily","#indianmeesdily","#indianmemesvideo","#indianmemes😂","#indianmemesl","#indianmemeservice","#indianmemesbts","#indianmemesdailymemes","#indianmemestroll🤣🤣","#indianmemeskakida","#indianmemescompilation","#indianmemeervice","#indianmemesdialy",
  // "","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",
  ];

  var op = getOption();
  if (x<10) {
    alert("value must be grater then 10 and less than or equal to 30");
  }else if(x>30) {
    alert("value must be grater then 10 and less than or equal to 30");
  }
  else {
    var genrated;
    if (op=="old"){
       genrated = old.sort(() => Math.random() - Math.random()).slice(0, x-1);
    }else if (op=="indian"){
       genrated = indian.sort(() => Math.random() - Math.random()).slice(0, x-1);
    }else if(op=="new"){
      genrated = worldWide.sort(() => Math.random() - Math.random()).slice(0, x-1);
    }
    document.getElementById("output").innerHTML ="#memesammaaz "+ genrated.join(" ");
    a.style.border = "2px solid black";
    return true;
    
  }
}

function getOption() {
  selectElement = document.querySelector('#category');
  output = selectElement.value;
  return output;
}