//localStorage.setItem("mode", "dark");

var mode = localStorage.getItem("mode");
var root = document.getElementsByTagName( 'html' )[0];


root.classList.add(mode);



let projects = [

    {
        type: "section",
        name: "Overview",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "before.png",
        image2: "after.png",
        imageClass:"slider"
    },
    {
        type: "heading",
        name: ""
    },
    {
        type: "section",
        name: "Defining Scope",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "stakeholder_workshop.png",
        image2: "comp_anal.png",
        image3: "rice_framework.png",
        imageClass:"triple-overlay"
    },
    {
        type: "heading",
        name: ""
    },
    {
        type: "section",
        name: "Designing Resilient Architecture",
        desc: "body text goes here this is the description for this seciton lets make this text really long and see if it will wrap or not",
        image: "wireframe_1.png",
        image2: "wireframe_3.png",
        image3: "wireframe_3.png",
        imageClass:"single"
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
    name: "",
    desc: "",
    image: "lookout_computer_150.png",
    image2: "scout.png",
    imageClass:"double-stacked"
},
{
    type: "heading",
    name: ""
},
{
    type: "section",
    name: "Section Title",
    desc: "We first decided to build an interactive map to visualize the spatial distribution of the university's positive cases. For administrators, they were most interested in finding symptomatic students in locations with large numbers of positive cases, and being able to see these students' information in more detail.",
    image: "casemap_wireframe_trans.png",
    image2: "",
    imageClass:"single"
},
{
    type: "section",
    name: "",
    desc: "I used Google's geocoding API to convert addresses to coordinates and D3's embedded geographic functionality to draw the basemap",
    image: "casevibrance.mp4",
    image2: "",
    imageClass:"single-video"
},
{
    type: "section",
    name: "",
    desc: "body text goes here this is the description for this seciton.  This description is going to be shorter. So there is more room",
    image: "casemap_wireframe_trans.png",
    image2: "",
    imageClass:"single"
},
{
    type: "heading",
    name: ""
},
{
    type: "section",
    name: "Section Title",
    desc: "body text goes here this is the description for this seciton",
    image: "dorms_wireframe_trans.png",
    image2: "",
    imageClass:"single"
},
{
    type: "section",
    name: "",
    desc: "",
    image: "dormdesign1.png",
    image2: "dormdesign2.png",
    imageClass:"double-stacked"
},
{
    type: "section",
    name: "",
    desc: "To build the dorm views I used PDFs of CMU's campus map and dormitory floorplans to create custom axonometric SVGs that could be brought into HTML. Creating the SVG's required a careful layer naming system that later allowed me to link the data to these drawings via mavily name in Javascript.",
    image: "dormsfinal.mp4",
    image2: "",
    imageClass:"single-video"
},
{
    type: "heading",
    name: ""
},
{
    type: "section",
    name: "Impact",
    desc: "Sentinel's work with Colorado Mesa University acted as a test-site for other campuses, communities, and municipalities to adopt. The dorm-maps visualization differentiated Fathom's work and was specifically featured in The New York Times.",
    image: "lookout_nyt_smaller.png",
    image2: "NE_animation.gif",
    imageClass:"double-stacked"
}

]


function singleVideo(img) {
    return `<div class="rounded-2xl border-solid aspect-ratio border-2 dark:border-zinc-800 border-gray-100 flex flex-col dark:bg-zinc-800 bg-gray-100 grow items-center justify-center"><video autoplay loop muted playsinline class="object-fit w-[90%] shadow-image rounded">
    <source src="images/${img}">
    </video></div>`
   };

function singleImage(img) {
 return `<div class="rounded-2xl border-solid aspect-ratio border-2 dark:border-zinc-800 border-gray-100 flex flex-col dark:bg-zinc-800 bg-gray-100 grow items-center justify-center"><img class="w-[90%] rounded" src="images/${img}"></div>`
};

function doubleImage(img, img2){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 flex flex-col gap-y-2 lg:flex-row lg:gap-x-2"><div class="flex items-center justify-center flex-1 bg-gray-100 aspect-[2/3]"><img class="w-[90%] h-auto" src="images/${img}"></div><div class="flex items-center justify-center flex-1 aspect-[2/3] bg-gray-100"><img class="rounded" src="images/${img2}"></div></div>`
};

function sliderImage(img, img2){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><img class="slider-image shadow-image rounded" src="images/${img}"><img class="slider-image shadow-image rounded" id="clip" src="images/${img2}"><input type="range" min="0" max="100" value="50" class="slider" name='slider' id="slider"><div class='slider-button'><span class="material-symbols-outlined text-base text-red-700">
    width
    </span></div></div>`
}

function doubleStacked(img, img2){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><img class="absolute shadow-image-light left-[5%] mb-[15%] w-[55%] rounded h-auto" src="images/${img}"><img class="absolute shadow-image-light right-[5%] mt-[15%] w-[55%] rounded h-auto" src="images/${img2}"></div>`
}

function tripleStacked(img, img2){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><img class="absolute shadow-image-light left-[5%] mb-[25%] h-[33%] rounded w-auto" src="images/${img}"><img class="absolute shadow-image-light h-[33%] rounded w-auto" src="images/${img}"><img class="absolute right-[5%] mt-[25%] shadow-image-light h-[33%] w-auto rounded" src="images/${img2}"></div>`
}

function tripleOverlay(img, img2, img3){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><div class="flex flex-col w-[80%]"><img class="shadow-image-light rounded my-[2%]" src="images/${img}"><img class="shadow-image-light rounded my-[2%]" src="images/${img2}"><img class="shadow-image-light rounded my-[2%]" src="images/${img3}"></div></div>`
}

function imageSelection(c, img, img2, img3) {
    if (c == "single") {
        return singleImage(img);
    }
    else if (c == "single-video"){
        return singleVideo(img);
       }
    else if (c == "double"){
     return doubleImage(img, img2);
    }
    else if (c == "double-stacked"){
        return doubleStacked(img, img2);
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
	<div class="flex flex-col-reverse gap-y-4 md:flex-row md:gap-x-6 basis-full">

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