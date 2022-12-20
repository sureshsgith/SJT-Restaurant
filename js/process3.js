//Showing alert Message Which they want to Order

function showMessage(btnId){
    let name = prompt("Enter Your Name : ");
          let quantity = prompt("Enter Quantity : ");
      switch(btnId){
          case "item1":
          alert("Dear "+name+", Thank you for ordering "+quantity+" Veg Biryani😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item2":
          alert("Dear "+name+", Thank you for ordering "+quantity+" Paneer Biryani😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item3":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Veg Noodles😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item4":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Veg Fried Rice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item5":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Paneer Freid Rice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item6":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Aalu Manchurian😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item7":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Veg Manchurian😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item8":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Chilli Paneer😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item9":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Gobi Manchurian😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item10":
            alert("Dear "+name+", Thank you for ordering "+quantity+" paneer Roll😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item11":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Tomato Rice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item12":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Pudina Rice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item13":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Curd Rice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item14":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Jeera Rice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item15":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Veg Puff😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item16":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Veg Burger😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item17":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Veg Pizza😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item18":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Veg Sandwich😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item19":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Paneer Noodles😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          default:
          alert("Thank you . Have a Nice Day!");
          break;
      }
    
    }