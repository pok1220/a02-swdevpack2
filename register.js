document.getElementById("sendData").addEventListener("click", sendForm);

function sendForm(){
    console.log("Hello");
    let nameBox=document.getElementById("YournameID").value;
    let telBox=document.getElementById("ConatactNumberID").value;
    console.log(nameBox);
    if(nameBox=="" && telBox==""){
        alert("ชื่อและเบอร์โทรศัพท์ห้ามเป็นค่าว่าง");
    }else if(nameBox=="" && telBox!=""){
        alert("ชื่อห้ามเป็นค่าว่าง");
    }else if(nameBox!="" && telBox==""){
        alert("เบอร์โทรศัพท์ห้ามเป็นค่าว่าง");
    }

    let quantity=parseInt(document.getElementById("Quantity_peopleID").value);
    console.log(quantity)
    if(quantity<=0 || quantity>15){
        alert("กรอกจำนวนคนในช่วง 1-15 คนเท่านั้น")
    }

    if(document.getElementById("planeTicketNeedID").checked){
        if (confirm("ต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม")) {
            alert("คุณเลือกซื้อบัตรโดยสารเครื่องบินเอง")
          } else {
            document.getElementById("planeTicketNeedID").checked=false;
          }
    }
}


// document.getElementById("planeTicketNeedID").addEventListener("click",buyTicket);
// function buyTicket(){
//     if(document.getElementById("planeTicketNeedID").checked){
//         if (confirm("ต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม")) {
//             alert("คุณเลือกซื้อบัตรโดยสารเครื่องบินเอง")
//           } else {
//             document.getElementById("planeTicketNeedID").checked=false;
//           }
//     }
// }