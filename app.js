var object = {
    id: 1,
    title: "Fjallraven,Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: [2,4,1,0,5,3],
    };

    document.getElementById("img").src=object.image
    document.getElementById("title").innerText=object.title
    document.getElementById("dicrip").innerText=object.description
    document.getElementById("categ").innerText=object.category
    document.getElementById("rate").innerText=object.rating[4]

    var employee1 = {
        id: 101,
        name: "John Doe",
        position: "Software Engineer",
        department: "IT",
        daysOff: ["Monday", "Friday"],
    }
      
        // Method to check if today is a day off
        employee1.isTodayOff= function() {
          // Get today's day of the week as a string
          var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var today = new Date();
          var todayName = daysOfWeek[today.getDay()];
          console.log(todayName)
      
          // Check if todayName is in the daysOff array
          return this.daysOff.includes(todayName);
          
        }
      
      
      // Example usage:
      console.log(employee1.isTodayOff(),"Off Day");
      


var employee = {
    id: 102,
    name: "Jane Smith",
    position: "Project Manager",
    department: "Management",
    experience: 5, // years of experience
    performance: 4.5 // performance rating out of 5
    };

    
   employee.isIncrementEligible = function () {
        return this.experience >= 3 && this.performance >= 4;
      }

      console.log(employee.isIncrementEligible());
  