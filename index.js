function hash() {
  let x = document.getElementById("count").value;
  let a = document.getElementById("output");
  const old = [
    "#round2hellvine",
    "#round2hellrecords",
    "#noidagram",
    "#engineering",
    "#bbkememes",
    "#round2hell_official_fc",
    "#r2h",
    "#round2hellmoradabad",
    "#desi",
    "#round2hell",
    "#memesammaaz",
    "#m_e_m_e_s_w_0_r_l_d",
    "#round2hollywood",
    "#round2hellofficial",
    "#round2hall",
    "#round2helllover",
    "#round2hellvideos",
    "#iitwaligf ",
    "#engineerlife",
    "#swaggersharma",
    "#funnyvideos",
    "#hoodfight",
    "#hoodcomedy",
    "#wildmemes",
    "#hoodratchetness",
    "#memetangclan",
    "#mememachine",
    "#laughfactory",
    "#bruhmemes",
    "#iamdeadaf",
    "#funnyhoodvids",
    "#memed",
    "#funnyfights",
    "#bruhmomement",
    "#memepages",
    "#hoodlaughs",
    "#schoolfight",
    "#hoodhumor",
    "#memegod",
    "#memelife",
    "#hoodmemes",
    "#memesoftheday",
  ];
  // let y = document.getElementById("bt2");
  if (x<10) {
    alert("value must be grater then 10 and less than or equal to 30");
  }else if(x>30) {
    alert("value must be grater then 10 and less than or equal to 30");
  }
  else {
    const genrated = old.sort(() => Math.random() - Math.random()).slice(0, x-1);
    document.getElementById("output").innerHTML ="#memesammaaz "+ genrated.join(" ");
    a.style.border = "2px solid black";
    return true;
  }
}