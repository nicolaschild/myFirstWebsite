function renderTable(containerId, visitors) {
    let newTableClass = "table-hover";
    $(containerId).append(
        `<table class='${newTableClass}'>
        <tr> 
            <th>Name</th> <th>Address</th> <th>Phone</th> <th>Email</th> <th class="hideID">id</th> <th>Actions</th> 
        </tr>
        </table>`)
    //Now add each row
    //Each row has a matching ID with the visitor, so deletion is easy
    for (let i = 0; i < visitors.length; i++) {
        $(`.${newTableClass}`).append(
            `<tr id=${visitors[i].id}>
                <th>${visitors[i].fullName}</th><th>${visitors[i].fullAddress}</th>
                <th>${visitors[i].email}</th><th>${visitors[i].phone}</th><th class='hideID'>${visitors[i].id}</th>
                <th><a href='#' onClick="editVisitor(${visitors[i].id})"><i class="fa fa-edit"></i></a>
                <a href='#' onClick="deleteVisitor(${visitors[i].id})"><i class="fa fa-times"></i></a></th>
            </tr>`
        )
    }
}

function showVisitors() {
    //shows visitor container and hides all other site content containers
    $("mainPage").css("display", "none");


}

function showList() {
    //Shows your visitor list and hides form
    if (confirm("Are you sure you would not like to log your entry?") == true){
        $(".visitorContainer").css("display", "none");
        $(".visitorDisplay").css("display", "");
    }

}

function showForm() {
    //Shows visitor form and hides list
    $(".visitorContainer").css("display", "");
    $(".visitorDisplay").css("display", "none");

}

function clearForm() {
    $("input").reset;

}

function showTable () {
    $(".visitorContainer").css("display", "none");
    $(".visitorDisplay").css("display", "");
}