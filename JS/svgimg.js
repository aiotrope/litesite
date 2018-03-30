  var a=document.getElementById("logosvg"); /* It's important to add an load event listener to the object, as it will load the svg doc asynchronously*/ a.addEventListener("load",function(){/* get the inner DOM of alpha.svg*/ var svgDoc=a.contentDocument; /* get the inner element by id*/ var delta1=svgDoc.getElementById("svg2"); /*add behaviour*/ delta1.addEventListener("mousedown",function(){alert("Hello visitor and Hello world! I'm glad that you've found your way to my website.Welcome from ARNEL")}, false);}, false); 







