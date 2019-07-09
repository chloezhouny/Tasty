// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-prepared").on("click", function(event) {
    var id = $(this).data("id");
    var newprepared = $(this).data("newprepared");

    var newpreparedState = {
      prepared: newprepared
    };




    // Send the PUT request.
    $.ajax("/api/orders/" + id, {
      type: "PUT",
      data: newpreparedState
    }).then(
      function() {
        console.log("changed prepared to", newprepared);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });





  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newOrder = {
      order_name: $("#cart").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/orders", {
      type: "POST",
      data: newOrder
    }).then(
      function() {
        console.log("created new order");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
