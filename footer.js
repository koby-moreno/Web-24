function makeFooter() {

    const footer = document.createElement('template');
    
    footer.innerHTML = `
    <div class="flex justify-center">
        <div class="flex flex-col align-center justify-between margins-x w-[100%] max-w-[1440px]">
            <div class="bg-gray-100 flex h-0.5"></div>
            <div class="flex gap-x-8 py-20 text-base text-gray-400 mono uppercase">
                <div class="text-base flex justify-center items-center gap-x-2">
                    <span class="material-symbols-outlined text-base font-medium">
                        copyright
                    </span> 
                    <div class="text-base">K.Moreno</div>
                </div>
                <div class="text-base">Updated 06.24</div>
            </div>
    
        </div>
    </div>
    `;
    
    document.body.appendChild(footer.content);
    
}
    
makeFooter();