(function(){var scroll=new SmoothScroll('a[href*="#"]',{ignore:'[data-scroll-ignore]',header:null,topOnEmptyHash:true,speed:500,clip:true,offset:function(anchor,toggle){return 75;},easing:'easeInOutCubic',customEasing:function(time){return time<0.5?2*time*time:-1+(4-2*time)*time;},updateURL:true,popstate:true,emitEvents:true});})();