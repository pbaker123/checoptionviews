const selectors = {
  body: document.querySelector("body"),
  tabs: document.querySelector(".tab"),
  sortList: document.querySelector(".sortList"),
  sortListPrompt: document.querySelector(".sortListPrompt"),
}
const tabs = ["deviceManager","miniLane","integration","testing","store","security","terminal","corporate"];

selectors.body.addEventListener("click", function(event) {
  const classname = event.explicitOriginalTarget.className;
  const classname2= event.explicitOriginalTarget.classList[1]
  
  if (classname === "sortList") {
    showListPrompt(classname);
    return;
  } else if (classname === "sortListPrompt") {
    return;
  } else if (tabs.includes(classname2)) {
    setTabColors(classname2);
    showOptionList(classname2);
    showOptionSets(classname2);
    showOptionSetsDescription(classname2);
    return;
  };
  return;
});

function setTabColors (classname) {
  for (const tab of tabs) {
    document.querySelector("." + tab).style.backgroundColor = "#A0A0A5";
  }
  document.querySelector("." + classname).style.backgroundColor = "#FFFFFF";
};

function showOptionList (classname) {
  for (const tab of tabs) {
    document.querySelector("." + tab + "OptionList").style.display = "none";
  }
  selectors.sortListPrompt.style.display = "none";
  selectors.sortList.style.backgroundImage = "url('images/UnsortList.png')";
  document.querySelector("." + classname + "OptionList").style.display = "block";
};

function showListPrompt (classname) {
  document.querySelector("." + classname).style.backgroundImage = "url('images/SortList.png')";
  document.querySelector("." + classname + "Prompt").style.display = "block";
};

function showOptionSets (classname) {
  document.querySelector(".optionSets").style.backgroundImage="url('images/" + classname + ".png')";
};

function showOptionSetsDescription (classname) {
  for (const tab of tabs) {
    document.querySelector("." + tab + "Description").style.display = "none";
  };
  document.querySelector("." + classname + "Description").style.display = "block";
};