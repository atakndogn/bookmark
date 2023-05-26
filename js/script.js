const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-b-4",
      "border-softRed",
      "md:border-b-0"
    );
  });

  // Hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // Activate a new tab and panel based on the target
  e.target.classList.add("border-softRed", "border-b-4");
  const targetPanel = e.target.getAttribute("data-target");

  document
    .getElementById("panels")
    .getElementsByClassName(targetPanel)[0]
    .classList.remove("hidden");
}
