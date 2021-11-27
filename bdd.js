// lecture des personnes qui ont déja participé
export function ReadAParticipe(db) {
    db.collection("participants").orderBy("nom", "asc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc != null) {
                var datas = doc.data();
                if(datas.a_participe == false){
                    var element = "<option>"+datas.nom+"</option>";
                    document.getElementById("selectChoicePrompt").innerHTML += element;
                }
            }
        });
    });
}

// lecture des personnes qui ont déjà été choisi
export function ReadEstChoisi(db) {
    var selected = document.getElementById("selectChoicePrompt").value;
    var listparticipants = [];
    db.collection("participants").orderBy("nom", "asc").get().then((querySnapshot) => {
        var items = [];
        querySnapshot.forEach((doc) => {
            if (doc != null) {
                var datas = doc.data();
                datas.id = doc.id;
                if(datas.est_choisi == false && selected != datas.nom){
                    items.push(datas);
                }
                listparticipants.push(datas);
            }
        });
        // pick random
        var item = items[Math.floor(Math.random()*items.length)];
        UpdateEstChoisi(db, item.id, true);
        var found = listparticipants.find(element => element.nom == selected);
        UpdateAParticipe(db, found.id, true);
        document.getElementById("choosen-participant").innerHTML = item.nom;
    
        $('#close-prompt-choice').click();
    });
}

function UpdateEstChoisi(db, id, estchoisi){
    db.collection("participants").doc(id).update({est_choisi: estchoisi});
}

function UpdateAParticipe(db, id, aparticipe){
    db.collection("participants").doc(id).update({a_participe: aparticipe});
}