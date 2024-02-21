const container = document.querySelector("#container");
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = parseInt(prompt("Please enter the size", "16"));
    resize(size);
});

function resize(size = 16) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            const child = document.createElement("div");
            child.id = "grid-item";
            child.style.width = `${100 / size}%`;
            child.style.height = `${100 / size}%`;
            child.style.boxSizing = "border-box";
            child.style.border = "1px solid #ccc";
            child.addEventListener("mouseover", 
                (event) => {
                    let red = Math.floor(Math.random() * 255);
                    let blue = Math.floor(Math.random() * 255);
                    let green = Math.floor(Math.random() * 255);
                    event.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
                
                }       
            , false);
            // child.addEventListener("mouseout", 
            //     (event) => {
            //         event.target.style.backgroundColor = "white";
                
            //     }       
            // , false);
            container.appendChild(child);
        }
    }
}
resize();
