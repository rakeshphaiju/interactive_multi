function jsonCallback(json){
    console.log(json);
    $("button").click(function(){
    $(document).ready(function () {
    var tr;
    for (var i = 0; i < json.length; i++) {
         tr = $('<tr/>');
         tr.append("<td>" + json[i].name + "</td>");
         tr.append("<td><a href=mailto:" + json[i].email + ">" + json[i].email  + "</a></td>");
         $('table').append(tr);
         }
     });
   });
 };
 $.ajax({
   url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
   dataType: "jsonp"
 });