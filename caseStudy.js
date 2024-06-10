//localStorage.setItem("mode", "dark");

var mode = localStorage.getItem("mode");
var root = document.getElementsByTagName( 'html' )[0];
let id = document.getElementsByTagName("body")[0].id;


root.classList.add(mode);

let lookout = [
    {
        type: "section",
        name: "Overview",
        desc: "The description is going here btw",
        image: "lookout_computer_150.png",
        image2: "scout.png",
        imageClass:"double-stacked",
        shadow: ""
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
        image: "campus_diagram.png",
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
        imageClass:"double-stacked",
        shadow: "shadow-image"
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
        imageClass:"double-stacked",
        shadow: "shadow-image"
    }
]


let insights = [
    {
        type: "section",
        name: "Competitive Analysis",
        desc: "The description goes here",
        image: "ib_comp_1.png",
        image2: "ib_comp_2.png",
        imageClass:"double",
        shadow: ""
    },
    {
        type: "heading",
        name: ""
    },
    {
        type: "section",
        name: "Competitive Analysis",
        desc: "The description goes here",
        image: "ib_layout_1.png",
        image2: "ib_layout_2.png",
        imageClass:"double-overlay",
        shadow: ""
    },
    {
        type: "heading",
        name: ""
    },
    {
        type: "section",
        name: "Layout Changes",
        desc: "To build the dorm views I used PDFs of CMU's campus map and dormitory floorplans to create custom axonometric SVGs that could be brought into HTML. Creating the SVG's required a careful layer naming system that later allowed me to link the data to these drawings via mavily name in Javascript.",
        image: "ib_layoutchanges.mp4",
        image2: "",
        imageClass:"single-video"
    },
    {
        type: "section",
        name: "Section Title",
        desc: "body text goes here this is the description for this seciton",
        image: "ib_colorguide.png",
        image2: "",
        imageClass:"single"
    },
    {
        type: "section",
        name: "Overview",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "studio_dm.png",
        image2: "studio_lm.png",
        imageClass:"slider"
    },
]


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
        image: "IA_diagram.gif",
        image2: "wireframe_2.png",
        image3: "wireframe_3.png",
        imageClass:"single"
    },
    {
        type: "heading",
        name: ""
    },
    {
        type: "section",
        name: "Defining Scope",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "textguide.png",
        image2: "colorguide.png",
        image3: "colorguide.png",
        imageClass:"double-overlay"
    },
    {
        type: "heading",
        name: ""
    },
    {
        type: "section",
        name: "Migrating Design Systems",
        desc: "body text goes here this is the description for this seciton lets make this text really long and see if it will wrap or not",
        image: "wireframe_1.png",
        image2: "wireframe_2.png",
        image3: "wireframe_3.png",
        imageClass:"triple-stacked"
    },
    {
        type: "heading",
        name: ""
    },
  {
    type: "section",
    name: "Section Title",
    desc: "body text goes here this is the description for this seciton lets make this text really long and see if it will wrap or not",
    image: "card_original_trans.gif",
    image2: "card_edit_trans.gif",
    imageClass:"double"
},
{
    type: "section",
    name: "Section Title",
    desc: "body text goes here this is the description for this seciton",
    image: "all_card_trans.png",
    image2: "",
    imageClass:"single"
},
{
    type: "heading",
    name: "Additional Scope"
},
{
    type: "section",
    name: "Defining Scope",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "grid_system.gif",
    image2: "listview.gif",
    image3: "colorguide.png",
    imageClass:"double-overlay"
},


]


function singleVideo(img) {
    return `<div class="rounded-2xl border-solid aspect-ratio border-2 dark:border-zinc-800 border-gray-100 flex flex-col dark:bg-zinc-800 bg-gray-100 grow items-center justify-center"><video class="h-auto min-h-20 w-[90%] shadow-image rounded" src="images/${img}" autoplay loop muted playsinline><source src="images/${img}" type="video/webm">Your browser does not support the video tag.</video></div>`
   };

function singleImage(img) {
 return `<div class="rounded-2xl border-solid aspect-ratio border-2 dark:border-zinc-800 border-gray-100 flex flex-col dark:bg-zinc-800 bg-gray-100 overflow-hidden items-center justify-center"><img class="w-[90%] rounded" src="images/${img}"></div>`
};

function doubleImage(img, img2){
    return `<div class="aspect-ratio overflow-hidden gap-y-2 flex flex-col gap-y-2"><div class="relative rounded-2xl flex items-center justify-center flex-1 bg-gray-100"><img class="w-[60%] h-auto" src="images/${img}"><div class="absolute left-[5%] top-[10%] text-gray-400">Original</div></div><div class="relative rounded-2xl flex items-center justify-center flex-1 bg-gray-100"><img class="rounded w-[60%] h-auto" src="images/${img2}"><div class="absolute left-[5%] top-[10%] text-gray-400">Revised</div></div></div>`
};

function sliderImage(img, img2){
    return `<div class="aspect-ratio flex relative w-[100%] h-auto items-center justify-center overflow-hidden"><div class="rounded-2xl border-solid border-2 border-gray-200 aspect-ratio flex absolute bg-gray-200 grow items-center justify-center overflow-hidden w-[100%] h-auto"><img class="slider-image shadow-image rounded" src="images/${img}"></div><div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex absolute bg-gray-100 grow items-center justify-center overflow-hidden w-[100%] h-auto" id="clip"><img class="slider-image shadow-image rounded" src="images/${img2}"></div><input type="range" min="0" max="100" value="66" class="slider" name='slider' id="slider"><div class='slider-button'><span class="material-symbols-outlined text-base text-red-700">
    width
    </span></div></div>`
}

function doubleStacked(img, img2, shadow){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><img class="absolute ${shadow} left-[5%] mb-[15%] w-[55%] rounded h-auto" src="images/${img}"><img class="absolute ${shadow} right-[5%] mt-[15%] w-[55%] rounded h-auto" src="images/${img2}"></div>`
}

function tripleStacked(img, img2, img3){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><img class="absolute shadow-image-light left-[5%] mb-[25%] h-[33%] rounded w-auto" src="images/${img}"><img class="absolute shadow-image-light h-[33%] rounded w-auto" src="images/${img2}"><img class="absolute right-[5%] mt-[25%] shadow-image-light h-[33%] w-auto rounded" src="images/${img3}"></div>`
}

function tripleOverlay(img, img2, img3){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><div class="flex flex-col w-[80%]"><img class="shadow-image-light rounded my-[2%]" src="images/${img}"><img class="shadow-image-light rounded my-[2%]" src="images/${img2}"><img class="shadow-image-light rounded my-[2%]" src="images/${img3}"></div></div>`
}

function doubleOverlay(img, img2, shadow){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><div class="flex flex-col w-[80%]"><img class="${shadow} rounded my-[2%]" src="images/${img}"><img class="${shadow} rounded my-[2%]" src="images/${img2}"></div></div>`
}

function imageSelection(c, img, img2, img3, shadow) {
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
        return doubleStacked(img, img2, shadow);
       }
    else if (c == "triple-stacked"){
     return tripleStacked(img, img2, img3);
    }
    else if (c == "triple-overlay"){
        return tripleOverlay(img, img2, img3);
       }
       else if (c == "double-overlay"){
        return doubleOverlay(img, img2, shadow);
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

    ${imageSelection(project.imageClass, project.image, project.image2, project.image3, project.shadow)}

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


if (id == "projects"){
    projects.forEach((project) => 
        makeCard(project)
      );
}
else if (id == "insights"){
    insights.forEach((project) => 
        makeCard(project)
      );
}
else {
    lookout.forEach((project) => 
        makeCard(project)
      );
}




$("#slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    console.log(sliderPos);
    // Update the width of the foreground image
    $('#clip').css('clip-path', `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`);
    $('.slider-button').css('left', `calc(${sliderPos}% - 12px)`)
  });

// makeCard(portal);
// makeCard(portal);
// makeCard(portal);