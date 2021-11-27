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
    for(var i in participants_json)
        result.push([i, participants_json [i]]);

    for (let index = 0; index < result.length; index++) {
        if(result[index][1] == false){
            select += "<option>"+result[index][0]+"</option>";
        }
    }

    document.getElementById("selectChoicePrompt").innerHTML = select;
}

