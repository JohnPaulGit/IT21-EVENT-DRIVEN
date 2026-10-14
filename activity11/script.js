function pickRandomName() {
    const input = document.getElementById('namesInput').value;
    const names = input.split(/[\n,]+/).map(name => name.trim()).filter(name => name !=="");

    if(names.length === 0){
        document.getElementById('infoDisplay').innerText = "";
        document.getElementById('nameDisplay').innerText = "Please enter at least one name!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];

    document.getElementById('infoDisplay').innerHTML = `
    Total Names: <strong>${names.length}</strong><br> 
    Random Number Picked: <strong>${randomIndex + 1}</strong>`;
    document.getElementById('nameDisplay').innerText = randomName;

}

function ClearnNames(){
    document.getElementById('namesInput').value = "";
    document.getElementById('infoDisplay').innerText = "";
    document.getElementById('nameDisplay').innerText = "";
    

}