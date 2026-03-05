let currentTab = "all";
const tabActive = ["bg-blue-600", "text-white"];
const tabInactive = ["bg-gray-200", "text-gray-600", "text-slate-500"];


const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("reject-container");
const emptyStat = document.getElementById("empty-state");

// console.log(allContainer, interviewContainer, rejectedContainer);




function switchTab(tab) {

    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;

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





    const pages = [allContainer, interviewContainer, rejectedContainer];

    for (const section of pages) {
        section.classList.add("hidden");
    }

    emptyStat.classList.add("hidden");

    if (tab === "all") {
        allContainer.classList.remove("hidden");
        if (allContainer.children.length < 1) {
            emptyStat.classList.remove("hidden");

        }

    } else if (tab === "interview") {
        interviewContainer.classList.remove("hidden");
        if (interviewContainer.children.length < 1) {
            emptyStat.classList.remove("hidden");

        }

    } else {
        rejectedContainer.classList.remove("hidden");
        if (rejectedContainer.children.length < 1) {
            emptyStat.classList.remove("hidden");

        }
    }
    updateStat();
}


// state update
const totalStat = document.getElementById("state-total");
const interviewStat = document.getElementById("state-interview");
const rejectStat = document.getElementById("state-reject");

const availableStat = document.getElementById("available");

totalStat.innerText = allContainer.children.length;


switchTab(currentTab);



// document.getElementById("jobs-container-me").addEventListener("click", function(event){
//     const clickedElement = event.target;
//     if (clickedElement.classList.contains("interview")){
//         console.log("interview clicked");


//     }

// });

// document.getElementById("jobs-container-me").addEventListener("click", function(event) {

//     const interviewBtn = event.target.closest(".interview");

//     if (interviewBtn) {
//         console.log("interview clicked");
//     }

// });

// document.getElementById("jobs-container-me").addEventListener("click", function(event) {

//     if (event.target.closest(".interview")) {
//         console.log("Interview clicked");
//     }

//     if (event.target.closest(".rejected")) {
//         console.log("Rejected clicked");
//     }

//     if (event.target.closest(".delete")) {
//         console.log("Delete clicked");
//     }

// });

document.getElementById("jobs-container-me").addEventListener("click", function (event) {

    const card = event.target.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");

    if (event.target.closest(".interview")) {
        // console.log("Interview clicked", card);
        status.innerText = "Interviewed";
        interviewContainer.appendChild(card);
        updateStat()
    }

    else if (event.target.closest(".rejected")) {
        // console.log("Rejected clicked", card);
        status.innerText = "Rejected";
        rejectedContainer.appendChild(card);
        updateStat()
    }

    else if (event.target.closest(".delete")) {
        parent.removeChild(card);
        updateStat()


    }

});




function updateStat() {
    totalStat.innerText = allContainer.children.length
    interviewStat.innerText = interviewContainer.children.length
    rejectStat.innerText = rejectedContainer.children.length

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length,
    };


    totalStat.innerText = counts.all;
    interviewStat.innerText = counts.interview;
    rejectStat.innerText = counts.rejected;
    availableStat.innerText = counts[currentTab];

    if (counts[currentTab] < 1) {
        emptyStat.classList.remove("hidden");

    } else {
        emptyStat.classList.add("hidden");
    }
}
updateStat();