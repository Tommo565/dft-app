
var graphicsText = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus neque ac felis vestibulum efficitur eu sed quam. 
Duis dui sem, placerat quis cursus vel, porttitor tincidunt eros. Nullam id sapien interdum, varius massa vel, congue risus. 
Ut eu gravida sapien. Proin viverra justo nec urna luctus, at interdum enim auctor.</p>

<p>Mauris nibh metus, malesuada ac felis quis, feugiat posuere lacus. Sed sem augue, lacinia sit amet metus ut, maximus rutrum dolor. 
Fusce gravida lectus eu vestibulum rutrum. Proin quis justo lectus. Maecenas condimentum nunc sed suscipit ornare. Mauris pharetra sollicitudin ultrices. 
Vestibulum condimentum sodales vehicula. Nam sagittis egestas fringilla. Praesent sollicitudin convallis felis, eget mattis libero accumsan blandit. 
</p>
<br/>
Lorem ipsum dolor sit amet:
<br/>
<br/>
<ul>
	<li> Phasellus sollicitudin, massa quis varius porta, sem erat commodo lorem, venenatis egestas ligula elit sed erat.  </li>
	<li> Morbi eget dolor mattis, ultrices tellus sit amet, aliquam eros. Duis est lectus, gravida sit amet fringilla id, congue ut sapien. </li>
	<li> Sed eget porta nunc. Fusce metus velit, mollis at tincidunt in, iaculis ut dolor. Maecenas dictum dolor quis convallis sagittis. </li>
	<li> Phasellus convallis ante ut ex sagittis, ac dictum risus pellentesque. Integer mattis mi non enim semper, eget bibendum metus tempus. </li>
	<li> Proin lobortis tellus vitae turpis ultricies, non blandit nibh porttitor. </li>
</ul>
`;

function renderSchemeGraphics () {

	// Grabs the body container, fades and appends the Bootstrap scaffolding

    $("#body-container").fadeOut("slow", function () {
        $("#body-container").empty()
                            .append(bodyContainer1);


		$("#scheme-left").append('<h3 class = "text-center">Scheme Temporal Data</h3>')
						 .append('<iframe width="100%" height="600" frameborder="0" src="https://ewingt1979.carto.com/viz/891b572c-392a-11e6-aa63-0ef24382571b/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>');


		$("#scheme-center").append('<h3 class = "text-center">Scheme Graphics Detail</h3>')
						   .append(graphicsText);


		$("#scheme-right").append('<h3 class = "text-center">Scheme Heatmap</h3>')
						  .append('<iframe width="100%" height="600" frameborder="0" src="https://ewingt1979.carto.com/viz/30299904-42a7-11e6-b0f2-0ef24382571b/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>	');
	

		$("#body-container").fadeIn("slow");

	});

 };