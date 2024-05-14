const portal = {
    name: "Projects Portal",
    company: "Foursquare",
    image: "none"
};


function makeCard(project) {

const projectCard = document.createElement('template');

projectCard.innerHTML = `
	<div class="projectCard bg-white mt-8">
	<div class="top-card h-64 bg-gray-100">
	</div>
	<div class="p-4">
  <p class="text-base text-gray-400">${project.company}</p>
   <h1 class="font-medium text-xl black">${project.name}</h1>
  </div>
  </div>
`;

document.querySelector('.projects-container').appendChild(projectCard.content);

}

makeCard(portal);
makeCard(portal);
makeCard(portal);