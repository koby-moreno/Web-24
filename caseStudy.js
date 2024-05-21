
let projects = [
    {
        type: "heading",
        name: "Overview"
    },
    {
        type: "section",
        name: "Defining Scope",
        desc: "body text goes here this is the description for this seciton lets make this text really long and see if it will wrap or not",
        image: "before.png",
        image2: "after.png",
        imageClass:"slider"
    },
    {
        type: "heading",
        name: "Defining Scope"
    },
    {
        type: "section",
        name: "Migrating Design Systems",
        desc: "body text goes here this is the description for this seciton lets make this text really long and see if it will wrap or not",
        image: "card_original.gif",
        image2: "card_edit.gif",
        imageClass:"single"
    },
  {
    type: "section",
    name: "Section Title",
    desc: "body text goes here this is the description for this seciton lets make this text really long and see if it will wrap or not",
    image: "card_original.gif",
    image2: "card_edit.gif",
    imageClass:"double"
},
{
    type: "section",
    name: "Section Title",
    desc: "body text goes here this is the description for this seciton",
    image: "all_card.png",
    image2: "",
    imageClass:"single"
},
{
    type: "section",
    name: "Section Title",
    desc: "body text goes here this is the description for this seciton",
    image: "placeholder.jpg",
    image2: "",
    imageClass:"single"
},
{
    type: "section",
    name: "Section Title",
    desc: "body text goes here this is the description for this seciton",
    image: "placeholder.jpg",
    image2: "",
    imageClass:"single"
},

]



function singleImage(img) {
 return `<div><img class="rounded" src="images/${img}"></div>`
};

function doubleImage(img, img2){
    return `<div class="flex flex-col gap-y-2 lg:flex-row lg:gap-x-2"><div class="flex-1"><img class="" src="images/${img}"></div><div class="flex-1"><img class="rounded" src="images/${img2}"></div></div>`
};

function sliderImage(img, img2){
    return `<div class="aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><img class="slider-image shadow-image rounded" src="images/${img}"><img class="slider-image shadow-image rounded" id="clip" src="images/${img2}"><input type="range" min="0" max="100" value="50" class="slider" name='slider' id="slider"></div>`
}

function imageSelection(c, img, img2) {
    if (c == "single") {
        return singleImage(img);
    }
    else if (c == "double"){
        console.log("double");
     return doubleImage(img, img2);
    }
    else {
        return sliderImage(img, img2);
    }
};

function makeCard(project) {

const projectCard = document.createElement('template');


if (project.type == "section"){
projectCard.innerHTML = `
	<div class="flex flex-col gap-y-4 md:flex-row md:gap-x-6 basis-full pt-6 pb-6">
    ${imageSelection(project.imageClass, project.image, project.image2)}
    <div class="flex flex-col shrink-0 gap-y-0.5 md:w-60 lg:w-80">
        
        <div class="text-base font-light">${project.desc}</div>
    </div>
  </div>
`;
}
else {
    projectCard.innerHTML = `<div class="text-2xl pt-8">${project.name}</div>`
}

document.querySelector('.casestudy-container').appendChild(projectCard.content);
}

projects.forEach((project) => 
  makeCard(project)
);


$("#slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    console.log(sliderPos);
    // Update the width of the foreground image
    $('#clip').css('clip-path', `polygon(0 0, ${sliderPos-((50-sliderPos)/9)}% 0, ${sliderPos-((50-sliderPos)/9)}% 100%, 0 100%)`)
  });

// makeCard(portal);
// makeCard(portal);
// makeCard(portal);