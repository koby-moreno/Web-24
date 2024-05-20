
let pageId = `${document.body.getAttribute('id')}`;
console.log(pageId);

let links = [
  "https://www.linkedin.com/in/koby-moreno-096988a1/",
  "https://drive.google.com/file/d/1eQKKu3h04G8tEOIo23trmIUpX-gZswWa/view?usp=sharing",
  "mailto:kobymoreno@gmail.com"
];

function primaryBtn(name, destination) {
  return `<a href="${destination}"><button><div class="px-4 py-2 bg-red-700 hover:bg-red-800 font-medium text-base text-white">${name}</div></button></a>`
};

function secondaryBtn(name, destination) {
  return `<a href="${destination}"><button><div class="shadow-button shadow-red-700 px-4 py-2 hover:bg-red-100 font-medium text-base text-red-700">${name}</div></button></a>`
};


function generateBtn1() {

  if (pageId == "about"){
    return secondaryBtn("Work","index.html");
  }
  else if (pageId == "index"){
    return primaryBtn("Work","index.html");
  }
  else {
    return secondaryBtn("Work","index.html");
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
  return `<a href="${link}"><div class="w-10 h-10 flex justify-center items-center text-base font-medium text-red-700 hover:bg-red-100">${text}</div></a>`
};

function makeButton(project) {

    const navButton = document.createElement('template');
    
    navButton.innerHTML = `
    <div class="fixed mix-blend-multiply top-4 flex gap-x-2 justify-between margins-x w-screen">
    <div class="header-text mix-blend-multiply text-red-700 text-3xl">
    ${titleName.toLowerCase()}
    </div>
    <div class="flex gap-x-2">
${generateBtn1()}
${generateBtn2()}
      </div>
      <div class="fixed left-4 bottom-4 flex flex-col gap-y-2">
        ${tertiaryButton('LI', links[0])}
        ${tertiaryButton('CV', links[1])}
        ${tertiaryButton(email, links[2])}
      </div>
      </div>

    `;
    
    document.body.appendChild(navButton.content);
    
    }
    
    makeButton();