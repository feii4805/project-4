//  BUTTON
let btnFace = [
    "⭐",
    "⋆｡ﾟ☁︎｡⋆｡",
    "｡ ﾟ☾ ﾟ｡",
    "˗ˏˋ ★ ˎˊ˗",
    "°.🪐°.",
    "✧ ₊ °✦ ʚ♡ɞ ‧ ₊ ˚✧",
    "⁺‧₊˚ ♡ ˚₊‧⁺˖"
  ];
  
  // FIRST
  // 1-1
  let nounSyl1 = ["Forget", "Remember ", "Hide"];
  // 1-2
  let verbSyl2 = ["the", "my", "his", "her"];
  // 1-3
  let adjSyl2 = ["feelings", "eyes", "body", "heart", "memories", "tears","emotions"];
  
  // SECOND
  // 2-1
  let conSyl2 = [
    "Face",
    "Find",
    "Give",
    "Share",
    "Bring",
    "Discover ",
    "Accept",
    "be"
  ];
  // 2-2
  let mySyl1 = [
    "goodbye",
    "challenges",
    "love",
    "peaceful",
    "strength",
    "fear",
    "courage",
    " brave",
    "loneliness ",
    
  ];
  
  // // THIRD
  // 3-1
  let heySyl2 = ["Swim", "Fly", "Escape", "Run", "Dream", "Wander", "Walk"];
  // 3-2
  let verb2Syl1 = ["in the ", "to the", "from", "through the"];
  // 3-3
  let adj2Syl2 = [
    "ocean",
    "moon",
    "dark",
    "reality",
    "imagination",
    "forest",
    "mounatins"
  ];
  
  btn.addEventListener("click", function (ev) {
    // face
    let randombtnFace = Math.floor(Math.random() * btnFace.length);
    let docbtnFace = document.getElementById("btn");
    docbtnFace.innerHTML = btnFace[randombtnFace];
    // 1-1
    let randomnounSyl1 = Math.floor(Math.random() * nounSyl1.length);
    let docnounSyl1 = document.getElementById("first1");
    docnounSyl1.innerHTML = nounSyl1[randomnounSyl1];
  
    // 1-2
    let randomverbSyl2 = Math.floor(Math.random() * verbSyl2.length);
    let docverbSyl2 = document.getElementById("first2");
    docverbSyl2.innerHTML = verbSyl2[randomverbSyl2];
  
    // 1-3
    let randomadjSyl2 = Math.floor(Math.random() * adjSyl2.length);
    let docadjSyl2 = document.getElementById("first3");
    docadjSyl2.innerHTML = adjSyl2[randomadjSyl2];
  

    
  //   fetch('path/to/words.json')
  // .then(response => response.json())
  // .then(data => {
  //   let adjSyl2 = data.adjSyl2; // access the array of words within the JSON data
  //   let randomadjSyl2 = Math.floor(Math.random() * adjSyl2.length);
  //   let docadjSyl2 = document.getElementById("first3");
  //   docadjSyl2.innerHTML = adjSyl2[randomadjSyl2];
  // })
  // .catch(error => {
  //   console.error('Error loading JSON file:', error);
  // });


    // 2-1
    let randomconSyl2 = Math.floor(Math.random() * conSyl2.length);
    let docconSyl2 = document.getElementById("second1");
    docconSyl2.innerHTML = conSyl2[randomconSyl2];
  
    // 2-2
    let randommySyl1 = Math.floor(Math.random() * mySyl1.length);
    let docmySyl1 = document.getElementById("second2");
    docmySyl1.innerHTML = mySyl1[randommySyl1];
  
    // 3-1
    let randomheySyl2 = Math.floor(Math.random() * heySyl2.length);
    let docheySyl2 = document.getElementById("third1");
    docheySyl2.innerHTML = heySyl2[randomheySyl2];
  
    // 3-2
    let randomverb2Syl1 = Math.floor(Math.random() * verb2Syl1.length);
    let docverb2Syl1 = document.getElementById("third2");
    docverb2Syl1.innerHTML = verb2Syl1[randomverb2Syl1];
  
    // 3-3
    let randomadj2Syl2 = Math.floor(Math.random() * adj2Syl2.length);
    let docadj2Syl2 = document.getElementById("third3");
    docadj2Syl2.innerHTML = adj2Syl2[randomadj2Syl2];
  });
  


//   // Load the JSON file using fetch()
// fetch('path/to/filedata.json')
// .then(response => response.json()) // Parse the JSON data
// .then(data => {
//   // Use the data from the JSON file
//   const btnFace = data.buttonFaces;
//   const btn = document.getElementById("btn");

//   btn.addEventListener("click", function (ev) {
//     let randombtnFace = Math.floor(Math.random() * btnFace.length);
//     btn.innerHTML = btnFace[randombtnFace];
//   });
// })
// .catch(error => {
//   console.error("Error loading JSON file:", error);
// });