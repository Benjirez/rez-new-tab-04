$(document).ready(function () {
  var sel1 = $("#sel1");
  var selected_id;

  sel1.attr("multiple", true).attr("size", 16);

  function doIt(filterData) {
    console.log("listen R2 they're dying");

    selTx = $("#sel1 option:selected").val();
    selected_id = filterData[selTx]._id;

    $("#myTitle").val(filterData[selTx].col_a);
    $("#myHK").val(filterData[selTx].col_b);
    $("#col2").html(filterData[selTx].col_c);
    $("#colD").html(filterData[selTx].col_d);
    $("#colE").html(filterData[selTx].col_e);
    $("#colF").html(filterData[selTx].col_f);
    $("#colG").html(filterData[selTx].col_g);
    $("#colH").html(filterData[selTx].col_h);
  }

  doIt(myData); //note... myData exists because in views_x1.ejs there is: <script>let myData = <%- JSON.stringify( data ) %>;</script>

  //sel1.on("change", function() {console.log("nah holmes")} );
  var selTx;

  function saver(data) {
    return function () {
      doIt(data);
    };
  }

  sel1.change(saver(myData));

  $("#clr_btn").on("click", function () {
    console.log("clearing foo");

    $("#myTitle").val("");
    $("#myHK").val("");
    $("#col2").html("");
    $("#colD").html("");
    $("#colE").html("");
    $("#colF").html("");
    $("#colG").html("");
    $("#colH").html("");
    $("#colI").html("");
    $("#colJ").html("");
  });

  $("#add_btn").on("click", function () {
    console.log("submitting yo");

    //var item = $('#form1 input');
    var my_x1 = {
      col_a: $("#myTitle").val(),
      col_b: $("#myHK").val(),
      col_c: $("#col2").val(),
      col_d: $("#colD").val(),
      col_e: $("#colE").val(),
      col_f: $("#colF").val(),
      col_g: $("#colG").val(),
      col_h: $("#colH").val(),
      col_i: $("#colI").val(),
      col_j: $("#colJ").val(),
    };

    $.ajax({
      type: "POST",
      url: "/x1",
      data: my_x1,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });

    return false;
  });

  $("#del_btn").on("click", function () {
    var item = selected_id; //$("#colH").val(); //$("#myTitle").attr('col_h'); //.replace(/ /g, "-");
    console.log(item);
    $.ajax({
      type: "DELETE",
      url: "/x1" + item,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      },
    });
  });

  $("#filters").on("submit", function () {
    console.log("g-filter");
  });
});
