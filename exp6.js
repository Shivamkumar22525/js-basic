const formTabs = document.querySelectorAll(".form-tab");
const tabGroupOne = document.querySelectorAll(".tab-group-one");
const tabGroupTwo = document.querySelectorAll(".tab-group-two");
const tabGroupThree = document.querySelectorAll(".tab-group-three");

formTabs.forEach(el => el.addEventListener('click', handleChanges
))

function handleChanges(e) {
  addHidden();
  removeHidden(e);
  makeActive(e);
}

function makeActive(e) {
  formTabs.forEach(el => el.classList.remove('active-tab'));
  e.target.classList.add('active-tab');
}

function removeHidden(e) {
  switch(e.target.dataset.tabgroup) {
    case ("One"):
      tabGroupOne.forEach(el => el.setAttribute("style", "display:block"));
      break;
    case ("Two"):
      tabGroupTwo.forEach(el => el.setAttribute("style", "display:block;"))
      break;
    case("Three"):
      tabGroupThree.forEach(el => el.setAttribute("style", "display: block"))
      break;
  }
}

function addHidden() {
  let arr = [
    ...tabGroupOne,
    ...tabGroupTwo,
    ...tabGroupThree
  ];
  arr.forEach(el => el.setAttribute("style", "display:none"));
}