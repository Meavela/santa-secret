function launchPrompt(){
    $('#choicePrompt').modal({
        backdrop: false
    })

    dynamicSelectOptions();

    $('#toggle-prompt-choice').click();
}

function dynamicSelectOptions(){
    var select = "";
    var result = [];

    // transform json to array
    for(var i in hasChoosen_json)
        result.push([i, hasChoosen_json [i]]);

    // dynamic selection
    for (let index = 0; index < result.length; index++) {
        if(result[index][1] == false){
            select += "<option>"+result[index][0]+"</option>";
        }
    }

    document.getElementById("selectChoicePrompt").innerHTML = select;
}

function chooseRandomPeople(){
    var result = [];
    var items = [];

    // selected
    var selected = document.getElementById("selectChoicePrompt").value
    console.log(selected);

    // transform json to array
    for(var i in isChoosen_json)
        result.push([i, isChoosen_json [i]]);

    // dynamic selection
    for (let index = 0; index < result.length; index++) {
        if(result[index][1] == false && selected != result[index][0]){
            items.push(result[index][0]);
        }
    }

    // pick random
    var item = items[Math.floor(Math.random()*items.length)];

    // assign
    hasChoosen_json[selected] = true;
    isChoosen_json[item] = true;
    
    document.getElementById("choosen-participant").innerHTML = item;

    $('#close-prompt-choice').click();
}