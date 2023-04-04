let msgname=document.getElementById("msg-name")
let msgemail=document.getElementById("msg-email")
let msgsubject=document.getElementById("msg-sub")
let msg=document.getElementById("msg-message")


const myform=document.getElementById('form')

form.addEventListener('submit', function validate(e){
    e.preventDefault();
    var frmname=form.name.value;
    var frmemail=form.email.value;
    var frmsubject=form.subject.value;
    var frmmessage=form.message.value;
    

    /*console.log(`${frmname} , ${frmemail} , ${frmsubject} \n ${frmmessage}`)*/
    if (frmname == "")msgname.innerHTML='Input is empty';
    else{
        msgname.innerHTML=``
    }
    if (frmemail == "")msgemail.innerHTML='Email required';
    else{
        msgemail.innerHTML=``
    }
    if (frmsubject == "")msgsubject.innerHTML='No subject recorded';
    else{
        msgsubject.innerHTML=``
    }
    if (frmmessage == "")msg.innerHTML='Message box is empty';
    else{
        msg.innerHTML=``
    }
  


    
});



