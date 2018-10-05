var size = '';

function pizzaOrder(place) {
    var form = place.target;
    var elements = form.elements;
    var sizes = elements.sizes;
   

var selectedSize = '';
    for (i=0; i < size.length; i++) {
        var size=sizes[i];
        if (size.checked) {
            selectedSize += + ' ' + size.value;
        }
    }

}
