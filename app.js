import Github from "./githubApi.js";
import UI from "./ui.js";

// github ve ui classini kullanabilmek icin ondan bir nesne turetiyoruz
const github = new Github();
const ui = new UI();
// console.log(github);

//! HTML den gelenler
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const themBtn = document.getElementById("theme-btn");
const body = document.querySelector("body");

// console.log(searchButton, searchInput);

//! Olay izleyicileri
searchButton.addEventListener("click", getInput);

searchInput.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    getInput();
  }
});

themBtn.addEventListener("click", changeTheme);

//! Metotlar

function getInput() {
  //api istegi at

  // eger input degerimiz bos degilse fonksionu calistir
  if (searchInput.value !== "") {
    github.getUser(searchInput.value).then((data) => {
      // api cevabina gore sekillenen kullanici detay alanini ekrana bas
      // islemler ui.js --> arayuzu islemlerinde gerceklesir ve sonucu buraya gelir
      // console.log(data)
      if (data.profile.message === "Not Found") {
        ui.showAlert("Kullanici Bulunamadi", "alert-danger");
      } else {
        ui.showAlert("Kullanici Basariyla Bulunmustur", "alert-success");
        ui.showProfile(data.profile);

        ui.showRepos(data.repos);
      }

      console.log(data);
    });
    return;
  }

  // Alert icin  --> ui.js e gidecek mesaj
  ui.showAlert("Form Bos Olamaz!", "alert-info");
}

// koyu ve acik moda degistirme fonksionu
function changeTheme() {
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-bg-dark");
  if (body.classList.contains("bg-dark")) {
    themBtn.innerHTML = "Acik Mod";
  } else {
    themBtn.innerHTML = "Koyu Mod";
  }
}
