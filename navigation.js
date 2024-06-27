
let pageId = `${document.body.getAttribute('id')}`;
console.log(pageId);

let links = [
  "https://www.linkedin.com/in/koby-moreno-096988a1/",
  "https://drive.google.com/file/d/1eQKKu3h04G8tEOIo23trmIUpX-gZswWa/view?usp=sharing",
  "mailto:kobymoreno@gmail.com"
];

function primaryBtn(name, destination) {
  return `<a href="${destination}"><button><div class="rounded-md px-4 py-2 dark:bg-red-400 bg-red-700 hover:bg-red-800 font-medium text-base text-white">${name}</div></button></a>`
};

function secondaryBtn(name, destination) {
  return `<a href="${destination}"><button><div class="rounded-md shadow-button dark:shadow-button-dm shadow-red-700 dark:shadow-red-400 px-4 py-2 dark:bg-dark-1 bg-white hover:bg-red-100 dark:hover:bg-dark-red-hover font-medium text-base text-red-700 dark:text-red-400">${name}</div></button></a>`
};


function generateBtn1() {

  if (pageId == "about"){
    return secondaryBtn("Work","index.html#work-cont");
  }
  else if (pageId == "index"){
    return primaryBtn("Work","index.html#work-cont");
  }
  else {
    return secondaryBtn("Work","index.html#work-cont");
  }
};

function generateBtn2() {

  if (pageId == "about"){
    return primaryBtn("About","about.html");
  }
  else if (pageId == "index"){
    return secondaryBtn("About","about.html");
  }
  else {
    return secondaryBtn("About","about.html");
  }
};

let titleName = document.querySelector('title').innerHTML;
console.log(titleName);

let email = '<span class="material-symbols-outlined">mail</span>';

function tertiaryButton(text, link) {
  return `<a href="${link}"><div class="rounded-md w-10 h-10 flex justify-center items-center text-base font-medium dark:text-red-400 text-red-700 dark:hover:bg-dark-red-hover hover:bg-red-100">${text}</div></a>`
};

function themeButton(){
  return `<div id="theme-btn" class="hover:cursor-pointer rounded-md w-10 h-10 flex justify-center items-center text-base font-medium dark:text-red-400 text-red-700 dark:hover:bg-dark-red-hover hover:bg-red-100"><span class="material-symbols-outlined" id="light_icon">light_mode</span><span class="material-symbols-outlined" id="dark_icon">dark_mode</span></div>`

}

function makeButton(project) {

    const navButton = document.createElement('template');
    
    navButton.innerHTML = `
    <div class="flex justify-center fixed top-4 w-screen nav z-20">
    <div class="flex align-center gap-x-2 justify-between margins-x w-[100%] max-w-[1440px]">
    <div class="header-text dark:text-red-400 text-red-700 text-xl sm:text-3xl align-middle">
    ${titleName.toLowerCase()}
    </div>
    <div class="flex gap-x-2">
${generateBtn1()}
${generateBtn2()}
      </div>
      </div>
      </div>
      <div class="fixed left-4 bottom-4 flex gap-x-2 md:left-8 lg:left-4 lg:flex-col lg:gap-y-2 nav">
        ${themeButton()}
        <div class="flex dark:bg-dark-3 bg-gray-200 h-[2px]"></div>
        ${tertiaryButton('LI', links[0])}
        ${tertiaryButton('CV', links[1])}
        ${tertiaryButton(email, links[2])}
      </div>
 

    `;
    
    document.body.appendChild(navButton.content);
    
    }

function changeTheme() {
    if (localStorage.theme === 'dark'){
      document.documentElement.classList.add('dark');
      document.getElementById("dark_icon").style.display = "none";
      document.getElementById("light_icon").style.display = "block";
    }
    else {
      document.documentElement.classList.remove('dark');
      document.getElementById("dark_icon").style.display = "block";
      document.getElementById("light_icon").style.display = "none";
    }
  }

function switchTheme(){
  if (localStorage.theme === 'dark'){
    localStorage.theme = 'light';
  }
  else {
    localStorage.theme = 'dark';
  }
  changeTheme();
}


makeButton();
changeTheme();

document.getElementById("theme-btn").addEventListener("click", function(){switchTheme()});