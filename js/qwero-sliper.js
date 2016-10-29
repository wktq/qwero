var ua = navigator.userAgent.toLowerCase();
var isiPhone = (ua.indexOf('iphone') > -1);
var isiPad = (ua.indexOf('ipad') > -1);
var isAndroid = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1);
var isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') == -1);

if(isiPhone || isiPad || isAndroid || isAndroidTablet) {

} else {
  toggleSliper();
}
  $(".slip-btn").click(function() {
    toggleSliper();
  });

function toggleSliper() {
  $(".sliper").toggleClass("sliper-open");
  var slipIcon = $(".slip-btn").find(".icon");
  if (slipIcon.hasClass("ion-navicon")) {
    slipIcon.removeClass("ion-navicon");
    slipIcon.addClass("ion-android-close");
  } else {
    slipIcon.removeClass("ion-android-close");
    slipIcon.addClass("ion-navicon");
  }
}
