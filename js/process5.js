//Showing alert Message Which they want to Order

function showMessage(btnId){
    let name = prompt("Enter Your Name : ");
          let quantity = prompt("Enter Quantity : ");
      switch(btnId){
          case "item1":
          alert("Dear "+name+", Thank you for ordering "+quantity+" Samaso😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item2":
          alert("Dear "+name+", Thank you for ordering "+quantity+" Onion Somasa😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item3":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Mirchi Bajji😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item4":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Banana Bajji😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item5":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Onion Pokada😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item6":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Palak Pokada😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item7":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Punugulu😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item8":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Bread Bajji😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item9":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Pani Poori😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item10":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Chaat😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item11":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Pav Bhaji😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item12":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Dairy Milk😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item13":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Kitkat😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item14":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Dark-Fantasy😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item15":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Oreo Biscuits😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item16":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Cake😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          
          default:
          alert("Thank you . Have a Nice Day!");
          break;
      }
    
    }