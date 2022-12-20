
//Display which items they want

// let order1=document.getElementById('order1');
// function display() {
//     let name="Thank you for Ordering Breakfast Item(s)";
//     alert(name);
// }
// order1.addEventListener('click',display);

function showMessage(btnId){
      switch(btnId){
          case "about":
          alert("About page is not available,it will Upadated Soon");
          break;
          case "faq":
          alert("FAQ page is not available,it will Upadated Soon");
          break;
          case "contact":
            alert("Contact page is not available,it will Upadated Soon.But you can Connect through Social Media");
          break;
          default:
              alert("");
              break;
      }
    }


