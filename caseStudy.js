//localStorage.setItem("mode", "dark");

var mode = localStorage.getItem("mode");
var root = document.getElementsByTagName( 'html' )[0];
let id = document.getElementsByTagName("body")[0].id;


root.classList.add(mode);

let lookout = [
    {
        type: "section",
        name: "Overview",
        desc: "Lookout is the primary dashboard component for Sentinel -- a larger effort for communities to more confidently make decisions during active outbreaks. With Colorado Mesa University as Sentinel's first test site, students used Scout to report symptoms and check into events while administrators used Lookout to monitor this data.",
        image: "lookout_computer_150.png",
        image2: "scout.png",
        imageClass:"double-stacked",
        shadow: ""
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "Mapping the Data",
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
        desc: "Showing the case map to administrators, they were primarily interested in cases that clustered on main campus, as students living off campus were out of their jurisdictional control. With this knowledge, we decided to explore the spatial visualization potential at this finer resolution.",
        image: "campus_diagram.png",
        image2: "",
        imageClass:"single"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "Dorms Visualization",
        desc: "At CMU, students are grouped into one or more mavilies, which include living clusters, in-person classes, sports teams, and performing arts groups. Administrators find the mavilies most useful as they often point to sources of localized outbreaks and can be used to measure students' levels of probable interaction. These views allow admin to see if there are positive case trends within dorm floors and living mavilies, and investigate whether or not these patterns are related to other non-living mavilies.",
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
        shadow1: "shadow-image",
        shadow2: "shadow-image"
    },
    {
        type: "section",
        name: "",
        desc: "To build the dorm views I used PDFs of CMU's campus map and dormitory floorplans to create custom axonometric SVGs that could be brought into HTML. Making the SVG's interactive required a layer naming system that enabled me to link the data via mavily name in Javascript.",
        image: "dormsfinal.mp4",
        image2: "",
        imageClass:"single-video"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "Impact",
        desc: "Sentinel's work with CMU allowed the university to return to in-person learning and created a framework for other campuses, communities, and municipalities to adopt. The spatial visualizations were most insightful and allowed the agency to market new offerings to current and prospective clients.",
        image: "lookout_nyt_smaller.png",
        image2: "NE_animation.gif",
        imageClass:"double-stacked",
        shadow: "shadow-image",
        shadow2: "shadow-image-light"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "buttons",
        destination1: "projects.html",
        name1: "Projects Portal",
        destination2: "insights.html",
        name2: "Insights Builder"
    }
]


let insights = [
    {
        type: "section",
        name: "Overview",
        desc: "Insights Builder began as an internal engineering proof-of-concept to create custom dashboards for existing customers. Potential customers showed interest in utilizing this as a self-service tool.  The Inter-American Development Bank (IADB) agreed to collaborate with us to evaluate and validate this concept's product potential.",
        image: "ib_maps_page.png",
        image2: "ib_studio_page.png",
        image3: "insights.png",
        imageClass:"triple-stacked",
        height: "h-[43%]"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "Defining Scope",
        desc: "I used customer call recordings to source themes and discover which topics required clarification or internal alignment.  My product manager and I used these findings to create user-stories and break them out into phases. We brought in our engineering lead to scope and prioritize the minimal viable product tasks.",
        image: "ib_findings_matrix.png",
        image2: "ib_milestones.png",
        imageClass:"double-overlay",
        shadow: "shadow-image-light"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "Leveraging Competitive Audits",
        desc: "I established design principles that reinforce our users' core needs and assessed how other products’ design strategies align or depart from them. This helped inform where to spend design effort for the highest level of impact.",
        image: "ib_layout_white_2.png",
        image2: "ib_layout_white_1.png",
        imageClass:"double-overlay",
        shadow: "shadow-image-light"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "Chart Grid and Sizing",
        desc: "Guidelines around responsive behavior, chart placement and sizing prevented chart UIs from breaking, reduced customization effort without compromising flexibilty, and minimized the number of edge-cases to design for.",
        image: "ib_grid.gif",
        image2: "",
        imageClass:"single"
    },
    {
        type: "section",
        name: "",
        desc: "",
        image: "chart_example_anno.png",
        image2: "chart_example.png",
        imageClass:"double-stacked",
        shadow: "shadow-image-light",
        shadow2: "shadow-image-light"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "User Flow Simplification",
        desc: "Core user flows, such as editing or adding charts to the dashboard, were optimized to eliminate redundant interactions or unecessary feature capabilities.",
        image: "ib_edit_flow.gif",
        image2: "",
        imageClass:"single"
    },
    {
        type: "section",
        name: "",
        desc: "In order to accomodate different user preferences from our initial research, remaining features were reprioritized and partitioned into basic and advanced experiences.",
        image: "ib_edit_panels.png",
        image2: "ib_edit.gif",
        imageClass:"double-stacked",
        shadow: "",
        shadow2: "shadow-image"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "Layout Changes",
        desc: "Studio's mapping UI was using an outdated design system, which as an entry point to Insights Builder created an inconsistent end-to-end UX. I proposed using a singular navigation and toolbar which could accommodate both mapping and insights features.",
        image: "ib_layoutchanges.mp4",
        image2: "",
        imageClass:"single-video"
    },
    {
        type: "section",
        name: "",
        desc: "Studio's mapping UI did not use our new design system due to the absence of dark-mode theming. I identified gaps in our current design system to better understand the LOE required. I then documented proposed modifications to our color palette, components, and iconography as design system debt.",
        image: "ib_colorguide.png",
        image2: "",
        imageClass:"single"
    },
    {
        type: "section",
        name: "",
        desc: "To garner internal support for our design system initiatives, I created mockups demonstrating how the mapping UI could appear with our new design system. These visuals effectively addressed concerns and generated enthusiasm around the prospect of theming within our products.",
        image: "studio_dm.png",
        image2: "studio_lm.png",
        imageClass:"slider",
        bg2: "bg-zinc-700",
        border2: "border-zinc-700"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section-notext",
        name: "Final Design",
        desc: "body text goes here this is the description for this seciton",
        image: "https://player.vimeo.com/video/955267218?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        image2: "insights.png",
        imageClass:"vimeo"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "text",
        name: "Impact",
        desc:"",
        icon1: "palette",
        header1: "Informing our Design System 2.0",
        desc1: "Served as a design system audit, outlining best practices and next-steps for data-analytics dashboards and dark-mode theming",
        icon2: "subdirectory_arrow_right",
        header2: "Setting Product Direction",
        desc2:"Design articulated the complexity and efforts entailed in pursuing this concept as a user-facing product, assisting in strategic conversations amongst leadership",
        icon3: "request_quote",
        header3: "Cross-Contributing",
        desc3: "Ensured high-priority revenue-dependent deadlines were met while reducing design and engineering workloads"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "buttons",
        destination1: "lookout.html",
        name1: "Lookout",
        destination2: "projects.html",
        name2: "Projects Portal"
    },
]


let projects = [

    {
        type: "section",
        name: "Overview",
        desc: "Studio is used by developers and marketers in the geospatial, internet, avation, and public sector spaces. These customers create maps using their own data or data purchased from Foursquare. When collaborating on large initiatives, they needed ways to organize, package, and redistribute several maps and datasets at once.",
        image: "before.png",
        image2: "after.png",
        imageClass:"slider",
        bg2: "bg-gray-200",
        border2: "border-gray-200"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "Defining Scope",
        desc: "User interviews and competitive analyses allowed us to discover internal knowledge gaps, structure system architecture to align with customer needs, and prioritize product requirements.",
        image: "stakeholder_workshop.png",
        image2: "comp_anal.png",
        image3: "rice_framework.png",
        imageClass:"triple-overlay"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "Designing a Resilient IA",
        desc: "With the addition of a Projects tab, we decided to consolidate 'Maps' and 'Datasets' into a singular 'Workspace' tab. This created a more a consistent navigation hierarchy and allowed the product to grow both immediately and long-term.",
        image: "IA_diagram.gif",
        image2: "wireframe_2.png",
        image3: "wireframe_3.png",
        imageClass:"single"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "Design System Migration",
        desc: "I aligned with my team on designing and building this feature with our newly-released unified design system.  Due to the large feature size, this increased efficiency and prevented future design and engineering debt.",
        image: "textguide.png",
        image2: "colorguide.png",
        image3: "colorguide.png",
        imageClass:"double-overlay",
        shadow: "shadow-image-light"
    },
    {
        type: "divider",
        name: ""
    },
    {
        type: "section",
        name: "Layout",
        desc: "In addition to using our design system's grid, I wanted the gradual discovery of information to be as intuitive as possible.  Our team landed on a UI layout that follows a natural reading progression by dividing the screen into vertical sections.",
        image: "wireframe_1.png",
        image2: "wireframe_2.png",
        image3: "wireframe_3.png",
        imageClass:"triple-stacked",
        height: "h-[33%]"
    },
    {
        type: "divider",
        name: ""
    },
  {
    type: "section",
    name: "Asset Cards",
    desc: "The asset cards were reworked to accomodate bulk action interaction patterns to increase task efficiency.  Visual reinforcements for the interaction destinations and larger touchspaces also improved user confidence.",
    image: "card_original_trans.gif",
    image2: "card_edit_trans.gif",
    imageClass:"double"
},
{
    type: "section",
    name: "",
    desc: "Card design changes also ensured consistency among different asset types.",
    image: "all_card_trans.png",
    image2: "",
    imageClass:"single"
},
{
    type: "divider",
    name: ""
},
{
    type: "section",
    name: "Showing Metadata",
    desc: "I conducted card-sorting activities with our technical and non-technical users to determine which metadata was most important to them by asset type.  This informed metadata priority for the list view responsive design and progressive disclosure user experience.",
    image: "disclosure.gif",
    imageClass:"single"
},
{
    type: "divider",
    name: ""
},
// {
//     type: "section",
//     name: "Handoff",
//     desc: "Towards design completion, I led handoff and QA sessions with my engineering team to ensure spec documentation properly articulated areas most complex to them. I also used the design system migration as an opportunity to have my engineers cross-contribute to our component development efforts.",
//     image: "disclosure.gif",
//     imageClass:"single"
// },
{
    type: "divider",
    name: ""
},
{
    type: "section-notext",
    name: "Final Design",
    desc: "body text goes here this is the description for this seciton",
    image: "https:player.vimeo.com/video/966062413?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    image2: "projects3.png",
    imageClass:"vimeo"
},
{
    type: "divider",
    name: ""
},
{
    type: "text",
    name: "Impact",
    desc:"",
    icon1: "palette",
    header1: "Advancing our Design System",
    desc1: "Studio was the first product to integrate our new design system and validate its success. This feature also assisted in component library buildout and informed variant additions.",
    icon2: "hub",
    header2: "Informing a Unified Platform",
    desc2:"Our research created a framework for a projects-based file-management and permissions system, which formed the basis for upcoming unification efforts by product leaders.",
    icon3: "request_quote",
    header3: "Customer Retention",
    desc3: "Our highest paying customer contract renewals were dependent on the Projects Portal feature completion."
},
{
type: "divider",
name: ""
},
{
    type: "buttons",
    destination1: "insights.html",
    name1: "Insights Builder",
    destination2: "lookout.html",
    name2: "Lookout"
},


]


function vimeo(img, img2) {
    return `<div class="rounded-2xl relative border-solid aspect-ratio border-2 border-gray-100 flex bg-gray-100 grow items-center justify-center"><img class="block h-[100%] w-[100%] object-cover opacity-50 blur-md" src="images/${img2}"><div style="position:absolute;" class="w-[90%] md:w-[70%] pt-[56.3%] md:pt-[43.8%] h-auto rounded shadow-image overflow-hidden"><iframe src="${img}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="final"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
    </div>`
}

function singleVideo(img) {
    return `<div class="rounded-2xl border-solid aspect-ratio border-2 dark:border-zinc-800 border-gray-100 flex flex-col dark:bg-zinc-800 bg-gray-100 grow items-center justify-center"><video class="h-auto min-h-20 w-[90%] shadow-image rounded" src="images/${img}" autoplay loop muted playsinline><source src="images/${img}" type="video/webm">Your browser does not support the video tag.</video></div>`
   };

function singleImage(img, shadow) {
 return `<div class="rounded-2xl border-solid aspect-ratio border-2 dark:border-zinc-800 border-gray-100 flex flex-col dark:bg-zinc-800 bg-gray-100 grow overflow-hidden items-center justify-center"><img class="${shadow} w-[90%] rounded" src="images/${img}"></div>`
};

function doubleImage(img, img2){
    return `<div class="aspect-ratio overflow-hidden gap-y-2 flex flex-col gap-y-2"><div class="relative rounded-2xl flex items-center justify-center flex-1 bg-gray-100"><img class="w-[60%] h-auto" src="images/${img}"><div class="absolute left-[5%] top-[10%] text-gray-400">Original</div></div><div class="relative rounded-2xl flex items-center justify-center flex-1 bg-gray-100"><img class="rounded w-[60%] h-auto" src="images/${img2}"><div class="absolute left-[5%] top-[10%] text-gray-400">Revised</div></div></div>`
};

function sliderImage(img, img2, bg2, border2){
    return `<div class="aspect-ratio flex relative w-[100%] h-auto items-center justify-center overflow-hidden"><div class="rounded-2xl border-solid border-2 ${border2} aspect-ratio flex absolute ${bg2} grow items-center justify-center overflow-hidden w-[100%] h-auto"><img class="slider-image shadow-image rounded" src="images/${img}"></div><div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex absolute bg-gray-100 grow items-center justify-center overflow-hidden w-[100%] h-auto" id="clip"><img class="slider-image shadow-image rounded" src="images/${img2}"></div><input type="range" min="0" max="100" value="66" class="slider" name='slider' id="slider"><div class='slider-button'><span class="material-symbols-outlined text-base text-red-700">
    width
    </span></div></div>`
}

function doubleStacked(img, img2, shadow, shadow2){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><img class="absolute ${shadow} left-[5%] mb-[15%] w-[55%] rounded h-auto" src="images/${img}"><img class="absolute ${shadow2} right-[5%] mt-[15%] w-[55%] rounded h-auto" src="images/${img2}"></div>`
}

function tripleStacked(img, img2, img3, height){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><img class="absolute shadow-image-light left-[5%] mb-[25%] ${height} rounded w-auto" src="images/${img}"><img class="absolute shadow-image-light ${height} rounded w-auto" src="images/${img2}"><img class="absolute right-[5%] mt-[25%] shadow-image-light ${height} w-auto rounded" src="images/${img3}"></div>`
}

function tripleOverlay(img, img2, img3){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><div class="flex flex-col w-[80%]"><img class="shadow-image-light rounded my-[2%]" src="images/${img}"><img class="shadow-image-light rounded my-[2%]" src="images/${img2}"><img class="shadow-image-light rounded my-[2%]" src="images/${img3}"></div></div>`
}

function doubleOverlay(img, img2, shadow){
    return `<div class="rounded-2xl border-solid border-2 border-gray-100 aspect-ratio flex relative bg-gray-100 grow items-center justify-center overflow-hidden"><div class="flex flex-col w-[80%]"><img class="${shadow} rounded my-[2%]" src="images/${img}"><img class="${shadow} rounded my-[2%]" src="images/${img2}"></div></div>`
}

function imageSelection(c, img, img2, img3, shadow, shadow2, bg2, border2, height) {
    if (c == "single") {
        return singleImage(img, shadow);
    }
    else if (c == "single-video"){
        return singleVideo(img);
       }
    else if (c == "double"){
     return doubleImage(img, img2);
    }
    else if (c == "double-stacked"){
        return doubleStacked(img, img2, shadow, shadow2);
       }
    else if (c == "triple-stacked"){
     return tripleStacked(img, img2, img3, height);
    }
    else if (c == "triple-overlay"){
        return tripleOverlay(img, img2, img3);
       }
       else if (c == "double-overlay"){
        return doubleOverlay(img, img2, shadow);
       }
       else if (c == "vimeo"){
        return vimeo(img, img2);
       }
    else {
        return sliderImage(img, img2, bg2, border2);
    }
};

function makeCard(project) {

const projectCard = document.createElement('template');


if (project.type == "section"){
projectCard.innerHTML = `
	<div class="flex flex-col-reverse gap-y-4 md:flex-row md:gap-x-6 basis-full">

    ${imageSelection(project.imageClass, project.image, project.image2, project.image3, project.shadow, project.shadow2, project.bg2, project.border2, project.height)}

    <div class="flex flex-col shrink-0 gap-y-0.5 md:w-60 lg:w-80">
    <div class="text-lg font-medium">${project.name}</div>
    <div class="text-base text-gray-900 font-light">${project.desc}</div>
</div>

  </div>
`;
}
else if (project.type == "divider") {
    projectCard.innerHTML = `<div class="text-2xl pt-16">${project.name}</div>`
}
else if (project.type == "text"){

    projectCard.innerHTML = `

    <div class="flex flex-col gap-y-10  basis-full lg:py-12 xl:py-24">
    <div class="text-2xl">${project.name}</div>
    <div class="w-[100%] flex flex-col lg:flex-row lg:gap-x-20 gap-y-10">
    <div class="flex lg:flex-col gap-x-4 lg:gap-y-2 basis-0 grow">
        <span class="material-symbols-outlined text-2xl lg:text-3xl">
            ${project.icon1}
        </span>
        <div class="flex flex-col gap-y-2">
            <div class="text-xl">${project.header1}</div>
            <div class="text-base font-light text-gray-900 max-w-[600px]">${project.desc1}</div>
        </div>
    </div>
    <div class="flex lg:flex-col gap-x-4 lg:gap-y-2 basis-0 grow">
        <span class="material-symbols-outlined text-2xl lg:text-3xl">
            ${project.icon2}
        </span>
        <div class="flex flex-col gap-y-2">
            <div class="text-xl">${project.header2}</div>
            <div class="text-base font-light text-gray-900 max-w-[600px]">${project.desc2}</div>
        </div>
    </div>
    <div class="flex lg:flex-col gap-x-4 lg:gap-y-2 basis-0 grow">
        <span class="material-symbols-outlined text-2xl lg:text-3xl">
            ${project.icon3}
        </span>
    <div class="flex flex-col gap-y-2">
        <div class="text-xl">${project.header3}</div>
        <div class="text-base font-light text-gray-900 max-w-[600px]">${project.desc3}</div>
    </div>
</div>
    </div>
    </div>`;
}
else if (project.type == "buttons"){
    projectCard.innerHTML = `
    <div class="flex justify-between">
    <a class="hidden sm:flex" href="${project.destination1}">
        <button>
            <div class="rounded-md flex gap-x-2 px-4 py-2 shadow-button shadow-red-700 hover:bg-red-100 bg-white font-medium text-base text-red-700">
                <span class="material-symbols-outlined font-semibold text-base">
                    arrow_back
                </span>
                <span>${project.name1}</span>
            </div>
        </button>
    </a>
    <a class="flex grow sm:grow-0" href="${project.destination2}">
    <button class="flex grow">
        <div class="grow justify-center rounded-md flex gap-x-2 px-4 py-2 shadow-button shadow-red-700 hover:bg-red-100 bg-white font-medium text-base text-red-700">
            <span>${project.name2}</span>
            <span class="material-symbols-outlined font-semibold text-base">
                arrow_forward
            </span>
        </div>
    </button>
</a>
        
    </div>
    `
}
else {
    projectCard.innerHTML =
    `<div class="flex flex-col-reverse gap-y-4 md:flex-row md:gap-x-6 basis-full">
    ${imageSelection(project.imageClass, project.image, project.image2, project.image3, project.shadow, project.shadow2, project.bg2, project.border2, project.height)}
  </div>`
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