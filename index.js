$(document).ready(function () {
  /********************************************************/
  /********************* large screen *********************/
  /********************************************************/
  if (screen.width > 600) {
    // rightSide height must be the size as the lifeSide height
    // -90 is just for a better look
    $("#scroll").css("height", document.getElementById("leftSide").clientHeight - 90);

    // hide borders and, opacity 0.5 and pointer for the rest logos
    const unclicked = {
      "cursor": "pointer",
      "border-width": "0px",
      "opacity": "0.5"
    };

    // show bottom border and opacity 1
    const clicked = {
      "cursor": "default",
      "border-style": "solid",
      "border-width": "0px",
      "border-bottom-width": "2px",
      "border-bottom-color": "grey",
      "opacity": "1"
    };

    ////////////////////////
    // rightSide clicking //
    ////////////////////////
    // figures click
    $("#figures").click(function () {
      // show #viw1
      $("#view1").css("display", "block");
      // hide every other views
      $("#view2").css("display", "none");
      $("#view3").css("display", "none");
      $("#view4").css("display", "none");
      // show bottom border and opacity 1
      $("#figures").css(clicked);
      // hide borders and, opacity 0.5 and pointer for the rest logos
      $("#references").css(unclicked);
      $("#related").css(unclicked);
      $("#info").css(unclicked);
    })
    // references click
    $("#references").click(function () {
      // show #view2
      $("#view2").css("display", "block");
      // hide every other views
      $("#view1").css("display", "none");
      $("#view3").css("display", "none");
      $("#view4").css("display", "none");
      // show bottom border and opacity 1
      $("#references").css(clicked);
      // hide borders and, opacity 0.5 and pointer for the rest logos
      $("#figures").css(unclicked);
      $("#related").css(unclicked);
      $("#info").css(unclicked);
    })
    // related click
    $("#related").click(function () {
      // show #view3
      $("#view3").css("display", "block");
      // hide every other views
      $("#view1").css("display", "none");
      $("#view2").css("display", "none");
      $("#view4").css("display", "none");
      // show bottom border and opacity 1
      $("#related").css(clicked);
      // hide borders and, opacity 0.5 and pointer for the rest logos
      $("#figures").css(unclicked);
      $("#references").css(unclicked);
      $("#info").css(unclicked);
    })
    // info click
    $("#info").click(function () {
      // show #view4
      $("#view4").css("display", "block");
      // hide every other views
      $("#view1").css("display", "none");
      $("#view2").css("display", "none");
      $("#view3").css("display", "none");
      // show bottom border and opacity 1
      $("#info").css(clicked);
      // hide borders and, opacity 0.5 and pointer for the rest logos
      $("#figures").css(unclicked);
      $("#references").css(unclicked);
      $("#related").css(unclicked);
    })
  }

  /********************************************************/
  /*********************  Xsmall screen *******************/
  /********************************************************/
  if (screen.width <= 600) {
    //////////////////////////
    // back button clicking //
    //////////////////////////
    $(".backLogo").click(function () {
      // prev screen
      // remove slideOut CSS animation class
      $("#leftSide").removeClass("slideOut");
      $("#mainHeader").removeClass("slideOut");
      // add slideIn CSS animation class
      $("#leftSide").addClass("slideIn");
      $("#mainHeader").addClass("slideIn");

      // next screen
      // remove slideOut CSS animation class
      $("#scroll").removeClass("slide");
      $("#backHeader").removeClass("slide");
      // add slideIn CSS animation class
      $("#scroll").addClass("reSlide");
      $("#backHeader").addClass("reSlide");

      // show #svgBar
      // hide .scroll because the navbar will not be sticky without hiding it
      setTimeout(function () {
        $("#svgBar").css("display", "block");
        $("#scroll").css("display", "none");
      }, 250);
    })

    ////////////////////////
    // rightSide clicking //
    ////////////////////////
    // figures click
    $("#figures").click(function () {
      // prev screen
      // remove slideIn CSS animation class
      $("#leftSide").removeClass("slideIn");
      $("#mainHeader").removeClass("slideIn");
      // add slideOut CSS animation class
      $("#leftSide").addClass("slideOut");
      $("#mainHeader").addClass("slideOut");

      // next screen
      // remove reSlide CSS animation class
      $("#scroll").removeClass("reSlide");
      $("#backHeader").removeClass("reSlide");
      // add slide CSS animation class
      $("#scroll").addClass("slide");
      $("#backHeader").addClass("slide");
      // show next screen
      $("#scroll").css("display", "block");
      $("#backHeader").css("display", "block");

      // hide #svgBar
      $("#svgBar").css("display", "none");

      // show figures view only
      $("#view1").css("display", "block");
      $("#view2").css("display", "none");
      $("#view3").css("display", "none");
      $("#view4").css("display", "none");
    })

    // references click
    $("#references").click(function () {
      // prev screen
      // remove slideIn CSS animation class
      $("#leftSide").removeClass("slideIn");
      $("#mainHeader").removeClass("slideIn");
      // add slideOut CSS animation class
      $("#leftSide").addClass("slideOut");
      $("#mainHeader").addClass("slideOut");

      // next screen
      // remove reSlide CSS animation class
      $("#scroll").removeClass("reSlide");
      $("#backHeader").removeClass("reSlide");
      // add slide CSS animation class
      $("#scroll").addClass("slide");
      $("#backHeader").addClass("slide");
      // show next screen
      $("#scroll").css("display", "block");
      $("#backHeader").css("display", "block");

      // hide #svgBar
      $("#svgBar").css("display", "none");

      // show references view only
      $("#view2").css("display", "block");
      $("#view1").css("display", "none");
      $("#view3").css("display", "none");
      $("#view4").css("display", "none");
    })

    // related click
    $("#related").click(function () {
      // prev screen
      // remove slideIn CSS animation class
      $("#leftSide").removeClass("slideIn");
      $("#mainHeader").removeClass("slideIn");
      // add slideOut CSS animation class
      $("#leftSide").addClass("slideOut");
      $("#mainHeader").addClass("slideOut");

      // next screen
      // remove reSlide CSS animation class
      $("#scroll").removeClass("reSlide");
      $("#backHeader").removeClass("reSlide");
      // add slide CSS animation class
      $("#scroll").addClass("slide");
      $("#backHeader").addClass("slide");
      // show next screen
      $("#scroll").css("display", "block");
      $("#backHeader").css("display", "block");

      // hide #svgBar
      $("#svgBar").css("display", "none");

      // show related view only
      $("#view3").css("display", "block");
      $("#view1").css("display", "none");
      $("#view2").css("display", "none");
      $("#view4").css("display", "none");
    })

    // info click
    $("#info").click(function () {
      // prev screen
      // remove slideIn CSS animation class
      $("#leftSide").removeClass("slideIn");
      $("#mainHeader").removeClass("slideIn");
      // add slideOut CSS animation class
      $("#leftSide").addClass("slideOut");
      $("#mainHeader").addClass("slideOut");

      // next screen
      // remove reSlide CSS animation class
      $("#scroll").removeClass("reSlide");
      $("#backHeader").removeClass("reSlide");
      // add slide CSS animation class
      $("#scroll").addClass("slide");
      $("#backHeader").addClass("slide");
      // show next screen
      $("#scroll").css("display", "block");
      $("#backHeader").css("display", "block");

      // hide #svgBar
      $("#svgBar").css("display", "none");

      // show info view only
      $("#view4").css("display", "block");
      $("#view1").css("display", "none");
      $("#view2").css("display", "none");
      $("#view3").css("display", "none");
    })
  }
});