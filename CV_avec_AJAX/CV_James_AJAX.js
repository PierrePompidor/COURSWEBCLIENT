function afficherAlcools() { 
   $.getJSON("alcools.json", function(data) {
       let html = "";
       $.each(data, function(index, objet) {
           html += "<li>"+objet.nom+"</li>";
       });
       console.log(html);
       $("#listeAlcools").append(html);
   });
}
