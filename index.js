function handleSubmit(event) {
    var form = event.target;
    var elements = form.elements;
    var name = elements.name.value;

    console.log('name', name);
}


