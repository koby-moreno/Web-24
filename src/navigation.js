

function makeButton(project) {

    const navButton = document.createElement('template');
    
    navButton.innerHTML = `
    <div class="fixed mix-blend-multiply top-4 right-16 flex gap-x-2 justify-end">
    <button>
        <div class="px-4 py-2 bg-red-700 hover:bg-red-800 text-base text-white">
        Work
      </div>
      </button>
      <button>
        <div class="px-4 py-2 bg-red-700 hover:bg-red-800 text-base text-white">
        About
      </div>
      </button>
      </div>
    `;
    
    document.body.appendChild(navButton.content);
    
    }
    
    makeButton();