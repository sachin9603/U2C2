// fill in javascript code here
document.querySelector("form").addEventListener("submit",myFunction);
let FomTag=document.querySelector("form");
function myFunction(event){
    event.preventDefault();
    let name=FomTag.name.value;
    let ID=FomTag.employeeID.value;
    let Depart=FomTag.department.value;
    let exprnce=FomTag.exp.value;
    let Email=FomTag.email.value;
    let Mbl =FomTag.mbl.value;

    console.log(name,ID,Depart,exprnce,Email,Mbl)
    let tr=document.createElement("tr")
    let td1=document.createElement("td")
    td1.innerText=name;
    let td2=document.createElement("td")
    td2.innerText=ID;
    let td3=document.createElement("td")
    td3.innerText=Depart;
    let td4=document.createElement("td")
    td4.innerText=exprnce;
    let td5=document.createElement("td")
    td5.innerText=Email;
    let td6=document.createElement("td")
    td6.innerText=Mbl;
    let td7=document.createElement("td")
    if(exprnce > 5 ){
        td7.innerText="Senior";
     } else if(2<=exprnce&&exprnce<5){
        td7.innerText="Junior";
    }else if(exprnce<=1){
        td7.innerText="Fresher"

    }
    let td8=document.createElement("td")
    td8.innerText="DELETE";
    td8.style.backgroundColor="red";
    td8.style.cursor="pointer";
    td8.addEventListener("click",deleteRow)

  tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
  document.querySelector("tbody").append(tr)


}
function deleteRow(event){
    event.target.parentNode.remove()
}
