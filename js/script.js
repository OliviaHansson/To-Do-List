
var doIt = [{"todo":"Betala räkningar", "checked": false},{"todo": "Lägga ansiktsmask", "checked": false},{"todo": "Springa ett marathon", "checked": false}, {"todo": "Köpa godis", "checked": false}, {"todo": "Göra JQuery övningsuppgifter", "checked": false}];
function thingsToDo() {

    var getSavedList = localStorage.getItem("saveList");

     if(getSavedList !== undefined && getSavedList !== null) {
        doIt = JSON.parse(getSavedList);
    }
    
    document.getElementById("listOfThingsToDo").innerHTML = "";
    for( var i = 0; i < doIt.length; i++) {
        if(doIt[i].checked == true) {
            createListItems(doIt[i], i);

            //"<li id='check" + (i) + "'>" + "<img src='done.svg' class='doneimg'id='" + (i) + "' onclick='checkThingToDo(this)' checked>" + doIt[i].todo + "<button id='" + (i) + "' class='btn btn-link' onclick='removeThingToDo(this)'><i class='fas fa-times'></i></button></li>";
            var li = document.getElementById("check" + i);
            li.classList.add("done");
        }else {
            document.getElementById("listOfThingsToDo").innerHTML += "<li id='check" + (i) + "'>" + "<input type='checkbox' id='" + (i) + "' onclick='checkThingToDo(this)'/>" + doIt[i].todo + "<button id='" + (i) + "' class='btn btn-link' onclick='removeThingToDo(this)'><i class='fas fa-times'></i></button></li>";
        }
    }
    saveToStorage(); 
}
function createListItems(todo, i) {
    var ul = document.getElementById("listOfThingsToDo");
    var lis = document.createElement("li");
    lis.setAttribute("id", "check" + (i));

    var img = document.createElement("img");
    img.setAttribute("src", "./images/done.svg");
    img.setAttribute("class", "doneimg");
    img.setAttribute("id", (i));
    img.setAttribute("onclick", "checkThingToDo(this)");
    img.setAttribute("checked", true)

    var btn = document.createElement("button");
    btn.setAttribute("id", (i));
    btn.setAttribute("class", "btn btn-lin");
    btn.setAttribute("onclick","removeThingToDo(this)"); 

    var icon = document.createElement("i");
    icon.setAttribute("class","fas fa-times");

    lis.appendChild(img);
    lis.appendChild(document.createTextNode(doIt[i].todo));
    lis.appendChild(icon);
    btn.appendChild(icon);
    lis.appendChild(btn);
    ul.appendChild(lis);

}

function saveToStorage() {
    localStorage.setItem("saveList", JSON.stringify(doIt));
}
function checkThingToDo(element) {
    var checkbox = document.getElementById(element.id);
    var li = document.getElementById("check" + element.id);

    if (checkbox.checked == true) {
        li.classList.add("done");
        doIt[element.id].checked = true;
    }else {
        li.classList.remove("done");
        doIt[element.id].checked = false;
    }
    saveToStorage();
    thingsToDo();
}

function addThingToDo() {
    var addThing = document.getElementById("addThing");
    if (addThing.value == ""){
        document.getElementById("error").innerHTML = "You lazy, you have to do something";
    }else {
    doIt.push({"todo": addThing.value, "checked":false});
    saveToStorage();
    thingsToDo();
    addThing.value = "";
    }
}
function removeThingToDo(rem) {

    doIt.splice(rem.id,1);
    saveToStorage();
    thingsToDo();
}
function latestFirst() {   
    doIt.reverse();
    saveToStorage();
    thingsToDo();
}














