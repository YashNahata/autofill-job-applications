const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const url = document.getElementById("url-input").value;
  chrome.tabs.create({ url: url });
});
