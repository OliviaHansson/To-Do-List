
var doIt = [{"todo":"Betala räkningar", "checked": false},{"todo": "Lägga ansiktsmask", "checked": false},{"todo": "Springa ett marathon", "checked": false}, {"todo": "Köpa godis", "checked": false}, {"todo": "Göra JQuery övningsuppgifter", "checked": false}];
function thingsToDo() {

    var getSavedList = localStorage.getItem("saveList");

    if(getSavedList !== undefined && getSavedList !== null) {
        doIt = JSON.parse(getSavedList);
    }
    
    document.getElementById("listOfThingsToDo").innerHTML = "";
    for( var i = 0; i < doIt.length; i++) {
        createListItems(doIt[i], i);
    }
    saveToStorage(); 
}
function createListItems(todo, i) {
    var ul = document.getElementById("listOfThingsToDo");
    var li = document.createElement("li");
    li.setAttribute("id", "li" + i);

    var img = document.createElement("img");
    img.setAttribute("src", "./images/done.svg");
    img.setAttribute("class", "doneimg");    
    img.setAttribute("id", "img" + i);
    img.setAttribute("listIndex", i);
    img.setAttribute("onclick", "checkThingToDo(this)");

    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("id", "chk" + i);
    check.setAttribute("listIndex", i);
    check.setAttribute("onclick", "checkThingToDo(this)");

    var btn = document.createElement("button");
    btn.setAttribute("id", "btn" + i);
    btn.setAttribute("class", "btn btn-lin");
    btn.setAttribute("listIndex", i);
    btn.setAttribute("onclick","removeThingToDo(this)"); 

    var icon = document.createElement("i");
    icon.setAttribute("class","fas fa-times");
    icon.setAttribute("id","hide");

    if(doIt[i].checked) {
        check.checked = true;
        img.checked = true;
        img.classList.add("doneimgdisplay");
        li.classList.add("done");
        check.classList.add("hide");
    }
    li.appendChild(check);
    li.appendChild(img);
    li.appendChild(document.createTextNode(doIt[i].todo));
    li.appendChild(icon);
    btn.appendChild(icon);
    li.appendChild(btn);
    ul.appendChild(li);
}

function saveToStorage() {
    localStorage.setItem("saveList", JSON.stringify(doIt));
}
function checkThingToDo(element) {
    listIndex = element.attributes["listIndex"].value;
    check = document.getElementById("chk" + listIndex);
    li = document.getElementById("li" + listIndex);
    img = document.getElementById("img" + listIndex);

    if (doIt[listIndex].checked == false) {
        img.classList.add("doneimgdisplay");
        li.classList.add("done");
        check.classList.add("hide");
        doIt[listIndex].checked = true;
    }else {
        img.classList.remove("doneimgdisplay");
        li.classList.remove("done");
        check.classList.remove("hide");
        doIt[listIndex].checked = false;
        check.checked = false;
    }
    saveToStorage();
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
    listIndex = rem.attributes["listIndex"].value;
    doIt.splice(listIndex,1);
    saveToStorage();
    thingsToDo();
}
function latestFirst() {   
    doIt.reverse();
    saveToStorage();
    thingsToDo();
}














