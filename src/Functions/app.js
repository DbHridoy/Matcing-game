const wrap = document.querySelector(".wrapper");
const f1 = document.getElementById("fruit_0");
const f2 = document.getElementById("fruit_1");
const f3 = document.getElementById("fruit_2");
const win = document.querySelector(".win");
const loose = document.querySelector(".loose");

var s1, s2, s3, i, ch, f, s, c1, c2, c3, ct1, ct2, ct3;

var init = () => {
  (s = true), (c1 = false), (c2 = false), (c3 = false);
  win.style.display = "none";
  loose.style.display = "none";
};

function rollBlock(block) {
  var i = Math.floor(Math.random() * 5);
  // console.log(i);
  block.src = "../src/images/fruit_" + i + ".jpg";
}

const start = () => {
  s1 = setInterval(() => {
    rollBlock(f1);
  }, 1000);
  s2 = setInterval(() => {
    rollBlock(f2);
  }, 1000);
  s3 = setInterval(() => {
    rollBlock(f3);
  }, 1000);
};

var stop = (cn) => {
  clearInterval(cn);
};

var autoStop = () => {
  ct1 = setTimeout(() => {
    console.log("autostop", c1, c2, c3);
    clearInterval(s1);
    c1 = true;
    result();
  }, 10000);
  ct2 = setTimeout(() => {
    console.log("autostop", c1, c2, c3);
    clearInterval(s2);
    c2 = true;
    result();
  }, 11000);
  ct3 = setTimeout(() => {
    console.log("autostop", c1, c2, c3);
    clearInterval(s3);
    c3 = true;
    result();
    // s = true;
  }, 12000);
};

var autoClear = (ct) => {
  clearTimeout(ct);
};

var result = () => {
  if (c1 && c2 && c3) {
    console.log("entered");
    if (f1.src === f2.src && f2.src === f3.src) {
      console.log("you win");
      win.style.display = "inherit";
    } else {
      console.log("you lose");
      loose.style.display = "inherit";
    }
    // result();
    s = true;
  }
};

init();

wrap.addEventListener("click", (e) => {
  if (e.target.closest(".start_btn") && s) {
    console.log("started");
    start();
    // autoStop();
    // autoStop();
    autoStop();
    init();
    s = false;
  }
  if (e.target.closest(".s1")) {
    console.log("clm-1");
    autoClear(ct1);
    c1 = true;
    stop(s1);
  }
  if (e.target.closest(".s2")) {
    console.log("clm-2");
    autoClear(ct2);
    c2 = true;
    stop(s2);
  }
  if (e.target.closest(".s3")) {
    console.log("clm-3");
    autoClear(ct3);
    c3 = true;
    stop(s3);
  }
  if (e.target.closest(".stop_all_btn")) {
    console.log("stop all");
    autoClear(ct1);
    autoClear(ct2);
    autoClear(ct3);
    c1 = c2 = c3 = true;
    stop(s1);
    stop(s2);
    stop(s3);
  }
  // if (c1 && c2 && c3) {
  result();
  //   s = true;
  // }
  console.log(c1, c2, c3, s);
});
