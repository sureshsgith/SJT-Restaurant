//Showing alert Message Which they want to Order

function showMessage(btnId){
    let name = prompt("Enter Your Name : ");
          let quantity = prompt("Enter Quantity : ");
      switch(btnId){
          case "item1":
          alert("Dear "+name+", Thank you for ordering "+quantity+" Mushroom Soup😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item2":
          alert("Dear "+name+", Thank you for ordering "+quantity+" Chicken Soup😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item3":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Tomato Soup😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item4":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Mutton Soup😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item5":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Fish Soup😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item6":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Prawn Soup😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item7":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Paneer Soup😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item8":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Lentil Soup😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item9":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Moong Dal Soup😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item10":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Beef Soup😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          default:
          alert("Thank you . Have a Nice Day!");
          break;
      }
    
    }