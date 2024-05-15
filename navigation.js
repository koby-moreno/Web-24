


let primaryBtn ='<button><div class="px-4 py-2 bg-red-700 hover:bg-red-800 text-base text-white">Work</div></button>';

function makeButton(project) {

    const navButton = document.createElement('template');
    
    navButton.innerHTML = `
    <div class="fixed mix-blend-multiply top-4 right-16 flex gap-x-2 justify-end">
    ${primaryBtn}
      <button>
        <div class="shadow-button shadow-red-700 px-4 py-2 hover:bg-red-100 text-base text-red-700">
        About
      </div>
      </button>
      </div>
      <div class="fixed left-4 bottom-4 flex flex-col gap-y-2">
        <a>
        <div class="w-10 h-10 flex justify-center items-center text-base font-medium text-red-700 hover:bg-red-100">
            LI
            </div>
        </a>
        <a>
        <div class="w-10 h-10 flex justify-center items-center text-base font-medium text-red-700 hover:bg-red-100">
            CV
            </div>
        </a>
        <a>
        <div class="w-10 h-10 flex justify-center items-center text-base font-medium text-red-700 hover:bg-red-100">
        <span class="material-symbols-outlined">
        mail
      </span>
            </div>
        </a>
      </div>

      <div class="fixed left-4 top-4 header-text mix-blend-multiply text-red-700 text-3xl">
      koby moreno
      </div>

    `;
    
    document.body.appendChild(navButton.content);
    
    }
    
    makeButton();