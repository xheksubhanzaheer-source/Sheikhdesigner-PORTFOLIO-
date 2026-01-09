// console.log("Portfolio Website Loaded Successfully");


console.log("Portfolio Website Loaded Successfully");

// const toggleBtn = document.getElementById("themeToggle");
// const icon = toggleBtn.querySelector("i");


// darkmode 
const toggleBtn = document.getElementById("themeToggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    // icon.classList.add("");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

// :root {
//   --bg-color: #ffffff;
//   --card-bg: #f9f9f9;
//   --text-color: #111;
// }

// body.dark {
//   --bg-color: #0f172a;
//   --card-bg: #1e293b;
//   --text-color: #f1f5f9;
// }



// document.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.getElementById("themeToggle");

//   toggleBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark");
//     console.log("Dark class:", document.body.classList.contains("dark"));
//   });
// });



//   localStorage 
// document.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.getElementById("themeToggle");
//   const icon = toggleBtn.querySelector("i");

//   // Load saved theme
//   if (localStorage.getItem("theme") === "dark") {
//     document.body.classList.add("dark");
//     icon.classList.replace("fa-moon", "fa-sun");
//   }

//   toggleBtn.addEventListener("click", () => {
//     document.body.classList.toggle("dark");

//     if (document.body.classList.contains("dark")) {
//       localStorage.setItem("theme", "dark");
//       icon.classList.replace("fa-moon", "fa-sun");
//     } else {
//       localStorage.setItem("theme", "light");
//       icon.classList.replace("fa-sun", "fa-moon");
//     }
//   });
// });


