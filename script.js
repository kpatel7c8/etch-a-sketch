const container = document.getElementById('container');

function gridMaker(n) {
    for(i=0;i<n;i++) {
        const Ri = document.createElement("R"+i)
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

let gridSize = 50;

gridMaker(gridSize);


document.querySelectorAll(".box").forEach(item => {
    item.addEventListener("mouseover",() => {
        item.className = "draw";
    });
});
