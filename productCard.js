

let projects = [
  {
    name: "Insights Builder",
    company: "Foursquare",
    image: "insights.png",
    desc: "Self-serve business intelligence dashboards",
    imageClass:"single",
    destination:"insights.html"
},
{
  name: "Lookout",
  company: "Fathom",
  image: "dormdesign2.png",
  desc: "Tracking COVID-19 outbreaks for university admin",
  secondImage:"dormdesign1.png",
  imageClass:"double",
  secondImageClass:"double-bg",
  destination:"lookout.html"
},
{
  name: "Visualizing Vacancy",
  company: "UX Collective",
  image: "mobilemockup.png",
  desc: "Mapping St. Louis vacancy for community planning",
  imageClass:"single",
  destination:"https://medium.com/p/17b6f3b54679"
},
  {
    name: "Audiences",
    company: "Clay",
    desc: "Scaling enterprise data capabilities for builders",
    image: "clay2.png",
    imageClass:"noShadow",
    destination:"https://www.clay.com/audiences"
},
{
  name: "Projects Portal",
  company: "Foursquare",
  image: "projects3.png",
  desc: "Rebuilding a file-management platform on a new design system",
  secondImage:"projects1.png",
  imageClass:"double",
  secondImageClass:"double-bg",
  destination:"projects.html"
},
{
  name: "Banyan",
  company: "Fathom",
  image: "banyan.png",
  desc: "Visualizing millions of infectious disease genomes for virologists",
  imageClass:"single",
  destination:"https://fathom.info/banyan/"
}

]

const portal = {
    name: "Projects Portal",
    company: "Foursquare",
    image: "none"
};


function makeCard(project) {

const projectCard = document.createElement('template');

if(project.imageClass == "single" || project.imageClass == "noShadow"){

projectCard.innerHTML = `
<a href="${project.destination}" class="border border-transparent hover:border hover:border-gray-200  dark:hover:shadow-image-dm hover:shadow-image-light hover:cursor-pointer dark:hover:border-dark-3 dark:bg-dark-1 bg-white projectCard mt-8">
	<div class="top-card aspect-ratio-short dark:bg-dark-2 bg-gray-100 overflow-hidden flex justify-center relative items-center">
  <img class="${project.imageClass} rounded-md shadow-image" src="./images/${project.image}">
  <span class="tag card-badge absolute top-4 right-4 z-10 rounded-md text-sm">${project.company}</span>
	</div>
	<div class="p-4 flex flex-col gap-y-0.5">
   <h1 class="dark:text-zinc-100 font-medium text-xl black">${project.name}</h1>
   ${project.desc ? `<p class="text-md font-light text-gray-900 dark:text-zinc-400">${project.desc}</p>` : ""}
  </div>
  </a>
`;
}
else {
  projectCard.innerHTML = `
  <a href="${project.destination}" class="border border-transparent hover:border dark:hover:shadow-image-dm hover:shadow-image-light hover:cursor-pointer  hover:border-gray-200 dark:hover:border-dark-3 dark:bg-dark-1 bg-white projectCard mt-8">
	<div class="top-card aspect-ratio-short dark:bg-dark-2 bg-gray-100 overflow-hidden flex justify-center relative items-center">
  <img class="${project.secondImageClass} rounded-md shadow-image" src="images/${project.secondImage}">
  <img class="${project.imageClass} rounded-md shadow-image" src="./images/${project.image}">
  <span class="tag card-badge absolute top-4 right-4 z-10 rounded-md text-sm">${project.company}</span>
	</div>
	<div class="p-4 flex flex-col gap-y-0.5">
   <h1 class="dark:text-zinc-100 font-medium text-xl black">${project.name}</h1>
   ${project.desc ? `<p class="text-md font-light text-gray-900 dark:text-zinc-400">${project.desc}</p>` : ""}
  </div>
  </a>
`;
}

document.querySelector('.projects-container').appendChild(projectCard.content);

}

projects.forEach((project) => 
  makeCard(project)
);


// makeCard(portal);
// makeCard(portal);
// makeCard(portal);