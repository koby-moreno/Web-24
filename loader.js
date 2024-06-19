let width = window.innerWidth;
let height = window.innerHeight;


let nav = document.querySelectorAll('.nav');

nav.forEach((nav) => {
    nav.style.opacity = 0;
})

const loader = document.createElement('template');

loader.innerHTML = `

<div class="opacity-1 pointer-events-none opacity-100 transition-all duration-300 fixed top-[0px] left-[0px] w-screen h-screen fixed bg-white/50 backdrop-blur-sm" id="loading-container">
<svg class="w-screen h-screen" version="1.1">
<path fill="transparent" stroke="rgb(243 244 246)" stroke-width="16" d="M0 0 L${width} 0 L${width} ${height} L0 ${height} Z" class="path paths"></path>
<path fill="transparent" stroke="#b91c1c" stroke-width="16" d="M0 0 L${width} 0 L${width} ${height} L0 ${height} Z" class="line2 paths"></path>
<path fill="transparent" stroke="rgb(243 244 246)" stroke-width="16" d="M0 0 L${width} 0 L${width} ${height} L0 ${height} Z" class="line1 paths"></path>
</svg>
</div>
`
document.querySelector('body').appendChild(loader.content);


function noScroll() {
	window.scrollTo(0, 0);
}

window.addEventListener('scroll', noScroll);

window.addEventListener('load', function () {

	setTimeout(function(){
		document.querySelector('#loading-container').style.opacity = 0;
        nav.forEach((nav) => {
            nav.style.opacity = 1;
        })

// Remove listener to re-enable scroll
window.removeEventListener('scroll', noScroll);


}, 1500);


})



