document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('darkModeToggle');
    
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
});

/**const subjectInput = document.getElementById('subjectInput');
const weightageInput = document.getElementById('weightageInput');

const subjectList = document.getElementById('subjectList');
const weightageList = document.getElementById('weightageList');
var subjectArray = [];
var weightageArray = [];

function addSubjectandList() {
    function Is_Alphanumeric(str) {
        return /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/.test(str);
    }
    const non_empty_value = subjectInput.value.trim();
    const non_empty_value1 = weightageInput.value.trim();

    if (non_empty_value && non_empty_value1) {
        if (Is_Alphanumeric(non_empty_value) == false) {
            alert ('Subject must only contain letters and numbers.');
        }
                    
        if (isNaN(non_empty_value1)) {
            alert ('Weightage must only contain numbers.');
        }   

        if (Is_Alphanumeric(non_empty_value) == true && !isNaN(non_empty_value1)) {
            if(NMR.checked && NLR.checked){
                alert("Both boxes can't be checked!")
            }

            if(NMR.checked && !NLR.checked){
                const NumberedList = document.createElement('li');
                NumberedList.textContent = non_empty_value;
                subjectList.appendChild(NumberedList);
                subjectArray.push(subjectInput.value);
                subjectInput.value = '';
                const NumberedList1 = document.createElement('li');
                NumberedList1.textContent = non_empty_value1;
                weightageList.appendChild(NumberedList1);
                weightageArray.push((weightageInput.value * 1) + 10);
                weightageInput.value = '';
            }

            if(NLR.checked & !NMR.checked){
                const NumberedList = document.createElement('li');
                NumberedList.textContent = non_empty_value;
                subjectList.appendChild(NumberedList);
                subjectArray.push(subjectInput.value);
                subjectInput.value = '';
                const NumberedList1 = document.createElement('li');
                NumberedList1.textContent = non_empty_value1;
                weightageList.appendChild(NumberedList1);
                weightageArray.push((weightageInput.value * 1) - 10);
                weightageInput.value = '';
            }

            if(!NMR.checked && !NLR.checked){
                const NumberedList = document.createElement('li');
                NumberedList.textContent = non_empty_value;
                subjectList.appendChild(NumberedList);
                subjectArray.push(subjectInput.value);
                subjectInput.value = '';
                const NumberedList1 = document.createElement('li');
                NumberedList1.textContent = non_empty_value1;
                weightageList.appendChild(NumberedList1);
                weightageArray.push((weightageInput.value * 1));
                weightageInput.value = '';
            }
        }
    }

    else {
        alert ('Please enter a subject and the weightage!!!');
    }
}        
            
            

function displayOutput(){
    var weightageTotal = 0;
    var daysLeft = document.getElementById('days').value;
    let dL = (1 * daysLeft);
    var studyTimePerDay = document.getElementById('studyTime').value;
    let sTPD = (1 * studyTimePerDay);
    var final = '';

    for (let j=0; j < weightageArray.length; j++){
        weightageTotal += Number(weightageArray[j]);
    }

    for (let i=0; i < subjectArray.length; i++) {
        var totalTime = weightageArray[i] / weightageTotal * (dL * sTPD);
        var studyDays = Math.floor(totalTime / sTPD);
        studyDays = Math.round(studyDays * 10) / 10;
        var remainingHours = totalTime % sTPD;
        remainingHours = Math.round(remainingHours * 10) / 10;
        final += subjectArray[i] + ': ' + studyDays + ' days ' + remainingHours + ' hours' + "<br>";
    }
        document.getElementById('display').innerHTML = final;
}**/
            
