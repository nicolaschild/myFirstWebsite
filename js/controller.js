$(document).ready(function() {
    initValidation(); // Set up validation when form is submitted

    //Initialize any other button event handlers

});

function loadVisitors () {
    //Called when the 'visitors' menu is clicked
    //calls view 'showVisitors'
    //calls view 'renderTable'
    //calls view 'showTable'
}

function submitForm() {
    //Called on form submit, gets contents of form, creats visitor object
    //calls model 'modelAddVisitor' function
    //calls view 'renderTable'
    //calls view 'showTable'
}

function addVisitor() {
    //Called on 'click' of 'New Visitor' button
    //calls view 'clearForm' to clear form contents
    //calls view 'showForm'
}

function deleteVisitor() {
    //called on 'click' of 'delete' icon in visitor list
    //calls model.js modelDeleteVisitor
    //calls view 'renderTable'
    //calls view 'showTable'
}