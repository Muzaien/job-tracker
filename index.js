let currentTab = "all";

function switchTab(tab) {
    console.log(tab);
    const tabs = ["all", "interview", "rejected"];

    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        console.log(tabName);
    }
}