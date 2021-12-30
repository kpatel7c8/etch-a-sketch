const container = document.getElementById('container');

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;

gridMaker(slider.value);




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

document.querySelectorAll(".box").forEach(item => {
    item.addEventListener("mouseover",() => {
        item.className = "draw";
    });
});

slider.onchange = function () {
    output.innerHTML = this.value;
    console.log(output.innerHTML);
    let gridElements = document.getElementsByClassName('row');
    while (gridElements.length>0) {
        gridElements[0].parentNode.removeChild(gridElements[0]);
    }
    gridMaker(output.innerHTML);
    document.querySelectorAll(".box").forEach(item => {
        item.addEventListener("mouseover",() => {
            item.className = "draw";
        });
    });
}

let randomColor = 'red';