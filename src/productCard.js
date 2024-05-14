
let projects = [
  {
    name: "Insights Builder",
    company: "Foursquare",
    image: "dormdesign1.png",
    imageClass:"single"
},
{
  name: "Projects Portal",
  company: "Foursquare",
  image: "dormdesign1.png",
  imageClass:"single"
},
{
  name: "Lookout",
  company: "Fathom",
  image: "dormdesign2.png",
  secondImage:"dormdesign1.png",
  imageClass:"double",
  secondImageClass:"double-bg"
},
{
  name: "Banyan",
  company: "Fathom",
  image: "dormdesign1.png",
  imageClass:"single"
}

]

const portal = {
    name: "Projects Portal",
    company: "Foursquare",
    image: "none"
};


function makeCard(project) {

const projectCard = document.createElement('template');

if(project.imageClass == "single"){

projectCard.innerHTML = `
	<div class="projectCard bg-white mt-8">
	<div class="top-card h-80 bg-gray-100 overflow-hidden flex justify-center relative items-center">
  <img class="${project.imageClass} rounded shadow-image" src="../images/${project.image}">
	</div>
	<div class="p-4">
  <p class="text-base text-gray-400">${project.company}</p>
   <h1 class="font-medium text-xl black">${project.name}</h1>
  </div>
  </div>
`;
}
else {
  projectCard.innerHTML = `
	<div class="projectCard bg-white mt-8">
	<div class="top-card h-80 bg-gray-100 overflow-hidden flex justify-center relative items-center">
  <img class="${project.secondImageClass} rounded shadow-image" src="../images/${project.secondImage}">
  <img class="${project.imageClass} rounded shadow-image" src="../images/${project.image}">
	</div>
	<div class="p-4">
  <p class="text-base text-gray-400">${project.company}</p>
   <h1 class="font-medium text-xl black">${project.name}</h1>
  </div>
  </div>
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