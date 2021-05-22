const applyButton = document.getElementById("applyCss");

applyButton.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.insertCSS({
        files: ["./inject.css"],
        target: { tabId: tab.id },
    });
});
