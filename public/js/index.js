// Get references to page elements
var $smoothieText = $("#smoothie-text");
var $smoothieDescription = $("#smoothie-description");
var $submitBtn = $("#submit");
var $smoothieList = $("#smoothie-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveSmoothie: function(smoothie) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/smoothie",
      data: JSON.stringify(smoothie)
    });
  },
  getsmoothies: function() {
    return $.ajax({
      url: "api/smoothie",
      type: "GET"
    });
  },
  deletesmoothie: function(id) {
    return $.ajax({
      url: "api/smoothie/" + id,
      type: "DELETE"
    });
  }
};

// refreshsmoothie gets new smoothie from the db and repopulates the list
var refreshsmoothie = function() {
  API.getsmoothie().then(function(data) {
    var $smoothie = data.map(function(smoothie) {
      var $a = $("<a>")
        .text(smoothie.text)
        .attr("href", "/smoothie/" + smoothie.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": smoothie.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $smoothieList.empty();
    $smoothieList.append($smoothie);
  });
};

// handleFormSubmit is called whenever we submit a new smoothie
// Save the new smoothie to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var smoothie = {
    text: $smoothieText.val().trim(),
    description: $smoothieDescription.val().trim()
  };

  if (!(smoothie.text && smoothie.description)) {
    alert("You must enter an smoothie text and description!");
    return;
  }

  API.savesmoothie(smoothie).then(function() {
    refreshsmoothie();
  });

  $smoothieText.val("");
  $smoothieDescription.val("");
};

// handleDeleteBtnClick is called when an smoothie's delete button is clicked
// Remove the smoothie from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deletesmoothie(idToDelete).then(function() {
    refreshsmoothie();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$smoothieList.on("click", ".delete", handleDeleteBtnClick);
