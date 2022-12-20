//Showing alert Message Which they want to Order

function showMessage(btnId){
let name = prompt("Enter Your Name : ");
      let quantity = prompt("Enter Quantity : ");
  switch(btnId){
      case "item1":
      alert("Dear "+name+", Thank you for ordering "+quantity+" Plain Dosa😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
      break;
      case "item2":
      alert("Dear "+name+", Thank you for ordering "+quantity+" Onion Dosa😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
      break;
      case "item3":
        alert("Dear "+name+", Thank you for ordering "+quantity+" Masala Dosa😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
      break;
      case "item4":
        alert("Dear "+name+", Thank you for ordering "+quantity+" Egg Dosa😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
      break;
      case "item5":
        alert("Dear "+name+", Thank you for ordering "+quantity+" uthappam😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
      break;
      case "item6":
        alert("Dear "+name+", Thank you for ordering "+quantity+" Vada😋.\nYour order will reach you in under 5 minute.s\nHave a Nice Day!😊.");
      break;
      case "item7":
        alert("Dear "+name+", Thank you for ordering "+quantity+" Mysoor Bajji😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
      break;
      case "item8":
        alert("Dear "+name+", Thank you for ordering "+quantity+" Poori😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
      break;
      case "item9":
        alert("Dear "+name+", Thank you for ordering "+quantity+" Chapathi😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
      break;
      case "item10":
        alert("Dear "+name+", Thank you for ordering "+quantity+" Pulka😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
      break;
      case "item11":
        alert("Dear "+name+", Thank you for ordering "+quantity+" Idly😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
      break;
      case "item12":
        alert("Dear "+name+", Thank you for ordering "+quantity+" Upma😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
      break;
      default:
      alert("Thank you . Have a Nice Day!");
      break;
  }

}
