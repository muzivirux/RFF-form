// document.getElementById("myForm").addEventListener("submit", submitForm);

// function submitForm(event) {
//   event.preventDefault(); // Prevent form submission

//   const formData = new FormData(event.target);
//   const formDataObj = Object.fromEntries(formData.entries());

//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       formDataObj.latitude = position.coords.latitude;
//       formDataObj.longitude = position.coords.longitude;
//       sendFormData(formDataObj);
//     },
//     function (error) {
//       console.error(error);
//       sendFormData(formDataObj);
//     }
//   );
// }

// function sendFormData(formDataObj) {
//   const googleSheetUrl =
//     "https://docs.google.com/spreadsheets/d/1VngkDH8g0MULT-YfdHKViw7QiEtKZoShpf8BOhZWgrs/edit?usp=sharing"; // Replace with your Google Sheet URL

//   fetch(googleSheetUrl, {
//     method: "POST",
//     mode: "no-cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formDataObj),
//   })
//     .then(() => {
//       alert("Form submitted successfully!");
//       document.getElementById("myForm").reset();
//     })
//     .catch(() => {
//       alert("An error occurred while submitting the form.");
//     });
// }

const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

let countries = [
  "Afghanistan",
  "Algeria",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Italy",
  "Japan",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Morocco",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Russia",
  "Romania",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnam",
];

function addCountry(selectedCountry) {
  options.innerHTML = "";
  countries.forEach((country) => {
    let isSelected = country == selectedCountry ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addCountry();

function updateName(selectedLi) {
  searchInp.value = "";
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = countries
    .filter((data) => {
      return data.toLowerCase().startsWith(searchWord);
    })
    .map((data) => {
      let isSelected =
        data == selectBtn.firstElementChild.innerText ? "selected" : "";
      return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    })
    .join("");
  options.innerHTML = arr
    ? arr
    : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
