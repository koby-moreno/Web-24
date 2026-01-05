

let projects = [
  {
    name: "Audiences",
    company: "Clay",
    image: "clay2.png",
    imageClass:"noShadow",
    destination:"https://www.clay.com/audiences"
},
  {
    name: "Insights Builder",
    company: "Foursquare",
    image: "insights.png",
    imageClass:"single",
    destination:"insights.html"
},
{
  name: "Projects Portal",
  company: "Foursquare",
  image: "projects3.png",
  secondImage:"projects1.png",
  imageClass:"double",
  secondImageClass:"double-bg",
  destination:"projects.html"
},
{
  name: "Lookout",
  company: "Fathom",
  image: "dormdesign2.png",
  secondImage:"dormdesign1.png",
  imageClass:"double",
  secondImageClass:"double-bg",
  destination:"lookout.html"
},
{
  name: "Visualizing Vacancy",
  company: "Medium - UX Collective",
  image: "mobilemockup.png",
  imageClass:"single",
  destination:"https://medium.com/p/17b6f3b54679"
},
{
  name: "Banyan",
  company: "Fathom",
  image: "banyan.png",
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
  <img class="${project.imageClass} rounded shadow-image" src="./images/${project.image}">
	</div>
	<div class="p-4">
  <p class="dark:text-zinc-400 text-base text-gray-400">${project.company}</p>
   <h1 class="dark:text-zinc-100 font-medium text-xl black">${project.name}</h1>
  </div>
  </a>
`;
}
else {
  projectCard.innerHTML = `
  <a href="${project.destination}" class="border border-transparent hover:border dark:hover:shadow-image-dm hover:shadow-image-light hover:cursor-pointer  hover:border-gray-200 dark:hover:border-dark-3 dark:bg-dark-1 bg-white projectCard mt-8">
	<div class="top-card aspect-ratio-short dark:bg-dark-2 bg-gray-100 overflow-hidden flex justify-center relative items-center">
  <img class="${project.secondImageClass} rounded shadow-image" src="images/${project.secondImage}">
  <img class="${project.imageClass} rounded shadow-image" src="./images/${project.image}">
	</div>
	<div class="p-4">
  <p class="dark:text-zinc-400 text-base text-gray-400">${project.company}</p>
   <h1 class="dark:text-zinc-100 font-medium text-xl black">${project.name}</h1>
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