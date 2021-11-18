const sStorage = () =>{
    let sessionVisit = sessionStorage.getItem("sessionVisit");
    if (sessionVisit === null) {
      sessionStorage.setItem("sessionVisit", "Unknown");
    }
    
    const submitBtn = document.getElementById("submit");
    submitBtn.onclick = function submitHandler() {
      let  User = document.getElementById("User");
      sessionStorage.setItem("sessionVisit", User.value);
      pUser.textContent = "Welcome  " + User.value + " to this Website";
    }
    
    const divH = document.querySelector("#heading");
    const pUser = document.createElement('p')
    pUser.id = 'Userid';
    let sessionVisit1 = sessionStorage.getItem("sessionVisit");
    pUser.textContent = "Welcome  " + sessionVisit1 + " to this Website";
    divH.appendChild(pUser);
    
    alert(`Mr. / Miss. / Ms. / Mrs. ${sessionStorage.getItem("sessionVisit")}`);
    }
    
    export {sStorage } ;