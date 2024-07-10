function tellFortune(){
    let favColor = document.getElementById("favColor").value;  //retrieves the value entered in the input and stores in the 'favColor' variable
    let career;
    if(favColor === "red"){
        career = "Your might be passionate Leader";
    }
    else if(favColor === "green"){
        career = "You have a potential of being a Proble-Solver";
    }
    else if(favColor === "blue"){
        career = "The WOrld of creativity awaits you";
    }
    else{
        career = "Future Holds exciting fortune for you!!";
    }
    document.getElementById("fortune").innerHTML = career;
}