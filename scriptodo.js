let addcontent=document.getElementById("addcontent");
let addbtn=document.getElementById("addbtn");

let showtodo=document.getElementById("showtodo");
function addtodo(){
    if(addcontent.value.trim()!=="")
    {
        let nel=document.createElement("div");
        let buttons=document.createElement("div");
        let textedit=document.createElement("button");
        let textremove=document.createElement("button");

        nel.innerHTML=`<h3>${addcontent.value}</h3>`;
        textedit.innerText='edit';
        textremove.innerText='delete';

        nel.classList.add("card", "card.h3");
        buttons.classList.add("button");
        textedit.classList.add("cardedit");
        textremove.classList.add("carddel");

        buttons.append(textedit);
        buttons.append(textremove);
        nel.append(buttons);
        showtodo.prepend(nel);
        
        let val=addcontent.value;
        console.log(val);
        addcontent.value="";
        textedit.addEventListener('click',()=>{
            addcontent.value=val;
            nel.remove();
        });
        textremove.addEventListener('click',()=>{
            nel.remove();
        })
    }
    else{
        alert("please write your todo...")
    }

}
addbtn.addEventListener('click',addtodo);
addcontent.addEventListener('keypress',(e)=>{
    if(e.key==="Enter")
    {
        addtodo();
    }
})
