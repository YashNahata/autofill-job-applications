chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (
    changeInfo.status == "complete" &&
    tab.url.indexOf(
      "https://jobs.workable.com/view/dPS1kKCc79zTbPzSTksvw6/principal-software-engineer-in-san-francisco-at-cynch-ai"
    ) != -1
  ) {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["content_script.js"],
      })
      .then(() => console.log("Script Injected"));
  }
});
