let currentTab = "all";
const tabActive = ["bg-blue-600", "text-white"];
const tabInactive = ["bg-gray-200", "text-gray-600", "text-slate-500"];


const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");

// console.log(allContainer, interviewContainer, rejectedContainer);




function switchTab(tab) {

    const tabs = ["all", "interview", "rejected"];

    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        // console.log(tabName);
        if (t === tab) {

            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive);
        }
        else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive);
        }
    }

    if(tab === "all"){
        allContainer.classList.remove("hidden");
        
    }else if  (tab=== "interview"){
        interviewContainer.classList.remove("hidden");
    }else {
        rejectedContainer.classList.remove("hidden");
    }
}
switchTab(currentTab);