function tabData(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    if (tabName == "analytics") {
        $("button.tablinks:first-child").addClass('active');
    }
}

$(document).ready(function () {


    if (activate != true) {
        $.ajax({
            url: "../src/public/recurringApplicationCharges",
            type: "POST",
            data: { id: storeId },
            success: function (response) {
                console.log(response);
                if (typeof response.recurring_application_charge !== "undefined") {
                    paymentURL = response.recurring_application_charge.confirmation_url;

                    window.top.location = paymentURL;
                }
            }
        });

    }





});
