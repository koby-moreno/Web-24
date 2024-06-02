

let projects = [

    {
        type: "section",
        name: "Defining Scope",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "before.png",
        image2: "after.png",
        imageClass:"slider"
    },
    {
        type: "section",
        name: "Section Title",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "stakeholder_workshop.png",
        image2: "comp_anal.png",
        image3: "rice_framework.png",
        imageClass:"triple-overlay"
    },
    {
        type: "heading",
        name: "Design Process"
    },
    {
        type: "section",
        name: "Migrating Design Systems",
        desc: "body text goes here this is the description for this seciton lets make this text really long and see if it will wrap or not",
        image: "wireframe_1.png",
        image2: "wireframe_3.png",
        image3: "wireframe_3.png",
        imageClass:"triple-stacked"
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
    type: "heading",
    name: "Additional Scope"
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

]



function singleImage(img) {
 return `<div><img class="border-solid border-2 border-gray-100 rounded" src="images/${img}"></div>`
};

function doubleImage(img, img2){
    return `<div class="border-solid border-2 border-gray-100 flex flex-col gap-y-2 lg:flex-row lg:gap-x-2"><div class="flex items-center justify-center flex-1 bg-gray-100 aspect-[2/3]"><img class="w-[90%] h-auto" src="images/${img}"></div><div class="flex items-center justify-center flex-1 aspect-[2/3] bg-gray-100"><img class="rounded" src="images/${img2}"></div></div>`
};

function sliderImage(img, img2){
    return `<div class="border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><img class="slider-image shadow-image rounded" src="images/${img}"><img class="slider-image shadow-image rounded" id="clip" src="images/${img2}"><input type="range" min="0" max="100" value="50" class="slider" name='slider' id="slider"><div class='slider-button'><span class="material-symbols-outlined text-base text-red-700">
    width
    </span></div></div>`
}

function tripleStacked(img, img2){
    return `<div class="border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><img class="absolute shadow-image-light left-[5%] mb-[25%] h-[33%] rounded w-auto" src="images/${img}"><img class="absolute shadow-image-light h-[33%] rounded w-auto" src="images/${img}"><img class="absolute right-[5%] mt-[25%] shadow-image-light h-[33%] w-auto rounded" src="images/${img2}"></div>`
}

function tripleOverlay(img, img2, img3){
    return `<div class="border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><div class="flex flex-col w-[80%]"><img class="shadow-image-light rounded my-[2%]" src="images/${img}"><img class="shadow-image-light rounded my-[2%]" src="images/${img2}"><img class="shadow-image-light rounded my-[2%]" src="images/${img3}"></div></div>`
}

function imageSelection(c, img, img2, img3) {
    if (c == "single") {
        return singleImage(img);
    }
    else if (c == "double"){
     return doubleImage(img, img2);
    }
    else if (c == "triple-stacked"){
     return tripleStacked(img, img2);
    }
    else if (c == "triple-overlay"){
        return tripleOverlay(img, img2, img3);
       }
    else {
        return sliderImage(img, img2);
    }
};

function makeCard(project) {

const projectCard = document.createElement('template');


if (project.type == "section"){
projectCard.innerHTML = `
	<div class="flex flex-col gap-y-4 md:flex-row md:gap-x-6 basis-full">

    ${imageSelection(project.imageClass, project.image, project.image2, project.image3)}

    <div class="flex flex-col shrink-0 gap-y-0.5 md:w-60 lg:w-80">
    <div class="text-lg font-medium">${project.name}</div>
    <div class="text-base text-gray-900 font-light">${project.desc}</div>
</div>

  </div>
`;
}
else {
    projectCard.innerHTML = `<div class="text-2xl pt-16">${project.name}</div>`
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
    $('#clip').css('clip-path', `polygon(0 0, ${sliderPos-((50-sliderPos)/9)}% 0, ${sliderPos-((50-sliderPos)/9)}% 100%, 0 100%)`);
    $('.slider-button').css('left', `calc(${sliderPos}% - 12px)`)
  });

// makeCard(portal);
// makeCard(portal);
// makeCard(portal);