//Create the divs using JS

const container = document.getElementById('container');

//console.log(container.children);

let squarenum = 5;


function generateGrid(squarenum){
    for(let i = 0; i<squarenum; i++){
        let outergrid = document.createElement('div');   //make 2d array grid
        outergrid.id = 'child';
        container.appendChild(outergrid);
        for(let j = 0; j<squarenum; j++){
            let innergrid = document.createElement('div');
            innergrid.id = 'gchild';
            outergrid.appendChild(innergrid);

            innergrid.addEventListener('mouseover', () => {
                innergrid.style.backgroundColor = 'white';
            });
        }
    }
}

generateGrid(squarenum);


function reset(){
    for(let i = 0; i<container.children.length; i++){
        let outergrid = container.children[i];
        //console.log(outergrid);
        for(let j = 0; j<outergrid.children.length; j++){
            let innergrid = outergrid.children[j];
            //console.log(innergrid);
            innergrid.style.backgroundColor = 'black';
        }
    }

}

function deleteGrid(){

    let containerChildrenSize = container.children.length; //THIS SIZE WILL BE CHANGING DYNAMICALLY SO BE CAREFUL (WHEN DELETING STUFF)
    //console.log(containerChildrenSize);

    for(let i = 0; i<containerChildrenSize; i++){
        let outergrid = container.children[0]; // WHEN DELEATING THINGS ON THE FLY REMOVE FROM HEAD
        let outergridChildrenSize = outergrid.children.length;
        //console.log(outergridChildrenSize);

        for(let j = 0; j<outergridChildrenSize; j++){
            let innergrid = outergrid.children[0];
            innergrid.remove();
        }
        outergrid.remove();
    }

    //generateGrid(5); //burgir
}



function getSize(){

    let key = false;
    let size = 64;

    while (!key){
     size =  parseInt(prompt("Please enter the the number of squares per side for the new grid (no more than 100)"));
        //console.log(typeof(size));

        if(size<=100 && typeof(size) === 'number'){
        key = true;
        }

    }

    deleteGrid();
    generateGrid(size);

}


