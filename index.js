function hash() {
  let x = document.getElementById("count").value;
  let a = document.getElementById("output");
  const hashtag = [
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
  const genrated = hashtag.sort(() => Math.random() - Math.random()).slice(0, x-1);
  document.getElementById("output").innerHTML ="#m_e_m_e_s_w_0_r_l_d "+ genrated.join(" ");
  a.style.border = "2px solid black";

  let y = document.getElementById("bt2");
  if (x < 5) {
    alert("value must be grater then 10");
  } else if (x > 30) {
    alert("value must be less than 30");
  } 
}
