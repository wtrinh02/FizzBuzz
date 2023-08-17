//get the values from user
function getValues(){

    let fValue = document.getElementById("fizzValue").value;
    let bValue = document.getElementById("buzzValue").value;
    
    fValue = parseInt(fValue);
    bValue = parseInt(bValue);

    if (Number.isInteger(fValue) && Number.isInteger(bValue)){
        let results = fizzBuzz(fValue, bValue);
        displayTable(results);
    }
    else{
        alert("Both Fizz Value and Buzz Value Need to be a Number!")
    }


}

function fizzBuzz(fValue, bValue){
    let results = [];

    for (let i = 1; i <= 100; i++){
        if (i % fValue == 0 && i % bValue == 0){
            results.push("FizzBuzz");
        }
        else if (i % fValue == 0){
            results.push("Fizz");
        }
        else if (i % bValue == 0){
            results.push("Buzz");
        }
        else{
            results.push(i);
        }
    }

    return results
}

function displayTable(fbData){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {
        let tableRow = document.importNode(templateRow.content, true);
        //grab only the columns in the template
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];
       
        rowCols[1].classList.add(fbData[i+ 1]);
        rowCols[1].textContent = fbData[i + 1];
       
        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i + 2];
       
        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i + 3];
       
        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i + 4];

        tableBody.appendChild(tableRow);
    }
}