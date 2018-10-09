function pizzaOrder(event) {
    var form = event.target;
    var elements = form.elements;
    var sizes = elements.zaSize;
    var toppings = elements.zaTopping;

    for (i=0; i < sizes.length; i++) {
        if(sizes[i].checked) {
            console.log('Size ' + sizes[i].id)
   
    for (k=0; k < toppings.length; k++) {
        if(toppings[k].checked == true) {
            console.log(toppings[k].id)
          
            
           
        }
    }
    }
}
}