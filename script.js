const container = document.getElementById('container');
    
    /*const R1 = document.createElement("R1");
    R1.style.display = "flex";
    R1.style.backgroundColor = "blue";
    R1.style.width = "100vh";
    R1.style.height = "50vh";
    R1.style.boxSizing = "border-box";
    R1.style.flexWrap = "wrap";
    R1.id = "R1"

    
        const R1C1 = document.createElement("R1C1");
        R1C1.style.display = "flex";
        R1C1.style.width = "50vh";
        R1C1.style.height = "50vh";
        R1C1.style.boxSizing = "border-box";
        R1C1.classList = "box";
        R1C1.id = "R1C1"

        R1.appendChild(R1C1);

        const R1C2 = document.createElement("R1C2");
        R1C2.style.display = "flex";
        R1C2.style.width = "50vh";
        R1C2.style.height = "50vh";
        R1C2.style.boxSizing = "border-box";
        R1C2.classList = "box";
        R1.appendChild(R1C2);

    container.appendChild(R1);

    const R2 = document.createElement("R2");
    R2.style.display = "flex";
    R2.style.backgroundColor = "blue";
    R2.style.width = "100vh";
    R2.style.height = "50vh";
    R2.style.boxSizing = "border-box";
    R2.style.flexWrap = "wrap";  

        const R2C1 = document.createElement("R2C1");
        R2C1.style.display = "flex";
        R2C1.style.width = "50vh";
        R2C1.style.height = "50vh";
        R2C1.style.boxSizing = "border-box";
        R2C1.classList = "box";
        R2.appendChild(R2C1);

        const R2C2 = document.createElement("R2C2");
        R2C2.style.display = "flex";
        R2C2.style.width = "50vh";
        R2C2.style.height = "50vh";
        R2C2.style.boxSizing = "border-box";
        R2C2.classList = "box";
        R2.appendChild(R2C2);
        
    container.appendChild(R2);*/

function gridMaker(n) {
    for(i=0;i<n;i++) {
        const Ri = document.createElement("R"+i);
        Ri.classList = "row";
        rowMaker(n);
        
        function rowMaker(n){
        for(j=0;j<n;j++) {
            const RiCj = document.createElement("R"+i+"C"+j);
            RiCj.className = "box";
            RiCj.id = "R"+i+"C"+j;
            Ri.appendChild(RiCj);
            }
        }
        container.appendChild(Ri);
    }
}

let gridSize = 4;

gridMaker(gridSize);


document.querySelectorAll(".box").forEach(item => {
    item.addEventListener("mouseover",() => {
        item.className = "draw";
    });
});
