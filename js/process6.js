//Showing alert Message Which they want to Order

function showMessage(btnId){
    let name = prompt("Enter Your Name : ");
          let quantity = prompt("Enter Quantity : ");
      switch(btnId){
          case "item1":
          alert("Dear "+name+", Thank you for ordering "+quantity+" Mosambi Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item2":
          alert("Dear "+name+", Thank you for ordering "+quantity+" Pine Apple Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item3":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Grapes Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item4":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Apple Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item5":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Anar Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item6":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Guava Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item7":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Watermelon Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item8":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Carrot Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item9":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Beetroot Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item10":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Orange Juice😋.\nYour order will reach you in under 5 minutes..\nHave a Nice Day!😊.");
          break;
          case "item11":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Mango Juice😋.\nYour order will reach you in under 5 minute.\nHave a Nice Day!😊.");
          break;
          case "item12":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Banana Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item13":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Paapaya Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item14":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Badam Juice😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          case "item15":
            alert("Dear "+name+", Thank you for ordering "+quantity+" Rose Shake😋.\nYour order will reach you in under 5 minutes.\nHave a Nice Day!😊.");
          break;
          default:
          alert("Thank you . Have a Nice Day!");
          break;
      }
    
    }