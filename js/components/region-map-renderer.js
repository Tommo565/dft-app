var regionMapRenderer = (
	function () {
		console.log(this);
		var that = this;
        $("#region-center-heading").fadeOut("slow",function () {
            $("#region-center-heading").empty().append(that.name + " Overview" + "<br/>").fadeIn("slow");
        });

        $("#region-center-bullets-heading").fadeOut("slow",function () {
            $("#region-center-bullets-heading").empty().append('Overview').fadeIn("slow");
        });


        $("#region-center-bullets").fadeOut("slow",function () {
            $("#region-center-bullets").empty().append(that['bullets']).append('<br/>').fadeIn("slow"); 
        });

        $("#region-center-detail-heading").fadeOut("slow",function () {
            $("#region-center-detail-heading").empty().append('Detail').fadeIn("slow");
        });                                


        $("#region-center-detail").fadeOut("slow",function () {
            $("#region-center-detail").empty().append(that['detail']).append('<br/>').fadeIn("slow");
        });  

        $("#region-center-impact-heading").fadeOut("slow",function () {
            $("#region-center-impact-heading").empty().append('Impacts').fadeIn("slow");;
        }); 


        $("#region-center-impact").fadeOut("slow",function () {  
            $("#region-center-impact").empty().append(that['impact']).fadeIn("slow");
        }); 

        $("#region-right-heading").fadeOut("slow",function () { 
            $("#region-right-heading").empty().append(that['name'] + " Data" + "<br/>").fadeIn("slow");
        });

        $("#region-btn-more").fadeOut("slow",function () { 
            $("#region-btn-more").fadeIn("slow");
        });


        $("#region-btn-back").fadeOut("slow",function () { 
            $("#region-btn-back").fadeIn("slow");
        });

        $("#region-table1").fadeOut("slow", function () {
            $("#region-table1-data").empty().append(that['table']).fadeIn("slow");
        });   

        $("#region-table1").fadeIn("slow");

        regionChart1(that["x-data"],that["y-data"]);
    }
);
