var indexMapRenderer = (
    function () {
        var that = this;
        $("#index-left-heading").fadeOut("slow",function () {
            $("#index-left-heading").empty().append(that.name + " Schemes" + "<br/>").fadeIn("slow");
        });

        $("#index-left-bullets-heading").fadeOut("slow",function () {
            $("#index-left-bullets-heading").empty().append('Overview').fadeIn("slow");
        });


        $("#index-left-bullets").fadeOut("slow",function () {
            $("#index-left-bullets").empty().append(that['bullets']).append('<br/>').fadeIn("slow"); 
        });

        $("#index-left-detail-heading").fadeOut("slow",function () {
            $("#index-left-detail-heading").empty().append('Detail').fadeIn("slow");
        });                                


        $("#index-left-detail").fadeOut("slow",function () {
            $("#index-left-detail").empty().append(that['detail']).append('<br/>').fadeIn("slow");
        });  

        $("#index-left-impact-heading").fadeOut("slow",function () {
            $("#index-left-impact-heading").empty().append('Impacts').fadeIn("slow");;
        }); 


        $("#index-left-impact").fadeOut("slow",function () {  
            $("#index-left-impact").empty().append(that['impact']).fadeIn("slow");
        }); 

        $("#index-right-heading").fadeOut("slow",function () { 
            $("#index-right-heading").empty().append(that['name'] + " Data" + "<br/>").fadeIn("slow");
        });

        $("#index-btn-more").fadeOut("slow",function () { 
            $("#index-btn-more").fadeIn("slow");
        });


        $("#index-btn-back").fadeOut("slow",function () { 
            $("#index-btn-back").fadeIn("slow");
        });

        indexChart1(that["axis"],that["investment"],'#d25f15',that["impact-data"],'#f2cfb9');
        indexChart2(that["axis"], that['economic'],'#d25f15', that['environmental'], '#e49f73', that['social'], '#f2cfb9');
    }
);