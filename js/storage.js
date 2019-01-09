function Local(value)
{
   return (localStorage.getItem(value) === null);
}
function initPersons()
{
   var namesArray = ["Mary", "John", "Kenny"];

   if (Local("names"))
   {
      localStorage.setItem("names", JSON.stringify(namesArray));
      console.log("localStorage values set: " + localStorage.getItem("names"));
   }
   else
   {
  
   }
   listPersons();
}
function listPersons()
{
   var personsElement = document.getElementById("list")
   var persons = localStorage.getItem("names");
   var persons = (persons) ? JSON.parse(persons) : [];

   if (Local("names"))
   {
      initPersons();
   }
   else
   {
      personsElement.innerHTML = "";
      for (i = 0; i < persons.length; i++)
      {
         personsElement.innerHTML += "<div class=\"persons\">" + persons[i] + "</div>";
      }
   }
}
function addPerson()
{
   var name = document.getElementById("name").value;
   var persons = localStorage.getItem("names");
   var persons = (persons) ? JSON.parse(persons) : [];

   persons.push(name);
   localStorage.setItem("names", JSON.stringify(persons));
   listPersons();
}