
var allNeSchemes = {
 	"name": "North East Schemes",
 	"bullets": [
	 	"<li>Investment Level: £867m</li>",
	 	"<li>Total Schemes: 5</li>",
	  	"<li>Major Schemes: 3</li>",
	   	"<li>Minor Schemes: 2</li>",
 	],
	"detail": [
            "<p>Lorem ipsum. Donec lorem ullamcorper eu aptent commodo quis. Lorem porta eros nullam malesuada. Morbi ipsum diam inceptos lacus a luctus. </p>",
            "<p>Curae velit. Morbi magna lacus quisque imperdiet nisi mus fusce etiam. Curae ipsum ultrices tristique a fermentum augue ve mauris interdum ultrices eu varius magnis. </p> ",
            "<p>Fusce porta aliquet lectus ve. Magna metus tempor primis nunc penatibus eros ullamcorper est in dapibus. </p>",
            "<p>Nunc vitae rhoncus ipsum. Donec lacinia augue eu tellus vestibulum maximus. Morbi turpis sem, sodales vitae ullamcorper non, tempus a ex.</p>"
    ],
	"impact": [
	            "<li>Phasellus facilisis dolor sit amet.</li>",
	            "<li>Ut enim ad minim veniam.</li>",
	            "<li>Duis aute irure dolor in reprehenderit.</li>",
	            "<li>Et harum quidem rerum facilis est et expedita.</li>",
	            "<li>Temporibus autem quibusdam et aut officiis debitis aut rerum.</li>",
	            "<li>Nulla nulla risus, sollicitudin at ante id, egestas scelerisque lacus.</li>"
	],
	"x-data" : ['User Benefit','Reliability','Dependent Development','Wider Impacts','Noise','Accidents',
				'Tax','Air Quality','Construction Delays','Greenhouse Gases','Construction Costs','Net Benefit'],
	"y-data" : [1260.6,953.2,222.0,178.6,64.9,44.6,17.7,2.8,-6.8,-119.5,-928.5,1689.6],
	"table": `
	    <thead>
	        <tr> <th>Element</th> <th>Cost</th> <th>Start Date</th> <th>End Date</th>
	        </tr>
		</thead>

		<tbody id = "region-table1-data">
			<tr> <td>Item 1</td><td>£4.3m</td><td>12/11/2015</td> <td>12/06/2016</td></tr>
	        <tr> <td>Item 2</td><td>£4.6m</td><td>04/03/2016</td> <td>12/03/2016</td></tr>
	        <tr> <td>Item 3</td><td>£2.8m</td><td>12/06/2017</td> <td>12/01/2018</td></tr>
	        <tr> <td>Item 4</td><td>£1.5m</td><td>12/06/2018</td> <td>12/08/2018</td></tr>
	        <tr> <td>Item 5</td><td>£6.4m</td><td>12/01/2019</td> <td>12/02/2019</td></tr>
	    </tbody>
	`
};


var neSchemes = [
	{
 	"name": "Scheme 1",
 	 "x": 424923,
 	 "y": -564176,
 	"end":"Nov 2018",
 	"bullets": [
	 	"<li>Investment Level: £191m</li>",
	 	"<li>Type: Motorway</li>",
	  	"<li>Status: Construction expected after 2020</li>",
	   	"<li>Start: Jan 2021</li>",
	   	"<li>End: Nov 2025</li>"
 	],
	"detail": [
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor turpis quis nulla vestibulum tempus.</p>",
            "<p>Quisque varius dolor pharetra finibus varius. Phasellus facilisis placerat feugiat. </p> ",
            "<p>Donec eu porttitor urna. Duis sapien nisl, finibus posuere arcu in, malesuada egestas purus. </p>",
            "<p>Donec et viverra tellus. Proin vestibulum orci a bibendum hendrerit. Vivamus laoreet nulla a metus accumsan volutpat. </p>",
            "<p>Nulla vel lobortis felis, vel egestas dui.</p>"
    ],
	"impact": [
	            "<li>Praesent sit amet nunc quis est condimentum dapibus nec at tortor. </li>",
	            "<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </li>",
	            "<li>Nunc vestibulum sit amet turpis tempor eleifend. </li>",
	            "<li>Aliquam sit amet tortor quis massa tincidunt porttitor. </li>",
	            "<li>Nunc aliquam metus a enim faucibus, sit amet semper massa pretium. </li>",
	            "<li>Nam porta elit eget accumsan ornare. Curabitur aliquam mi eget efficitur aliquam. </li>"
	],
	"x-data" : ['User Benefit','Reliability','Dependent Development','Wider Impacts','Noise','Accidents',
				'Tax','Air Quality','Construction Delays','Greenhouse Gases','Construction Costs','Net Benefit'],
	"y-data" : [613.8,1023.5,229,6,102.5,346.8,-329.6,-216.3,243.5,-103.9,-155.6,-1112.0,634.6],
	"table" : 
			`
			<tr> <td>Item 1</td><td>£1.3m</td><td>15/11/2015</td> <td>15/06/2016</td></tr>
	        <tr> <td>Item 2</td><td>£2.6m</td><td>30/04/2016</td> <td>15/03/2016</td></tr>
	        <tr> <td>Item 3</td><td>£1.8m</td><td>08/07/2017</td> <td>15/01/2018</td></tr>
	        <tr> <td>Item 4</td><td>£1.6m</td><td>16/08/2018</td> <td>15/08/2018</td></tr>
	        <tr> <td>Item 5</td><td>£2.8m</td><td>19/02/2019</td> <td>15/02/2019</td></tr>
	        `
	},
	{
 	"name": "Scheme 2",
 	 "x": 404879,
 	 "y": -642766,
 	"bullets": [
	 	"<li>Investment Level: £283m</li>",
	 	"<li>Type: A-Road</li>",
	  	"<li>Status: Approved</li>",
	   	"<li>Start: Jan 2017</li>",
	   	"<li>End: Nov 2018</li>"
 	],
	"detail": [
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>",
            "<p>Aliquam quis arcu sit amet turpis mattis luctus. Fusce porttitor leo sed velit vehicula, quis semper nisi vehicula.  </p> ",
            "<p>Aenean euismod porttitor dolor, eget interdum ipsum auctor nec. </p>",
            "<p>Suspendisse commodo convallis est, vitae convallis odio fermentum sit amet. </p>"
    ],
	"impact": [
	            "<li>Integer fermentum mollis sapien, sit amet gravida quam porttitor non.</li>",
	            "<li>Proin vitae sapien id est ullamcorper pretium sit amet aliquam risus.</li>",
	            "<li>Integer a faucibus lectus. Integer tempus nisi non massa tincidunt, eget luctus felis mattis.</li>",
	            "<li>Aenean fermentum, neque ut dapibus fringilla, odio mi suscipit augue, et pellentesque nunc dui et turpis.</li>",
	            "<li>Nulla ac lacus eget tellus auctor ullamcorper vitae vel nunc. Curabitur suscipit fringilla justo, at placerat eros mattis quis. </li>",
	            "<li>Fusce eu magna vitae urna lacinia ornare.</li>"
	],
	"x-data" : ['User Benefit','Reliability','Dependent Development','Wider Impacts','Noise','Accidents',
				'Tax','Air Quality','Construction Delays','Greenhouse Gases','Construction Costs','Net Benefit'],
	"y-data" : [383.5,263.4,609.2,1063.5,50,-205.7,398.5,-0.4,-52.6,-894.2,-104.6,600],
	"table" : 
			`
			<tr> <td>Item 1</td><td>£0.3m</td><td>12/11/2015</td> <td>01/07/2015</td></tr>
	        <tr> <td>Item 2</td><td>£3.8m</td><td>16/04/2015</td> <td>04/08/2015</td></tr>
	        <tr> <td>Item 3</td><td>£2.2m</td><td>16/06/2015</td> <td>08/02/2016</td></tr>
	        <tr> <td>Item 4</td><td>£4.9m</td><td>08/09/2015</td> <td>29/09/2016</td></tr>
	        <tr> <td>Item 5</td><td>£0.2m</td><td>28/03/2017</td> <td>04/03/20217</td></tr>
	        `
	},
	{
 	"name": "Scheme 3",
 	 "x": 425148,
 	 "y": -514932,
 	"bullets": [
	 	"<li>Investment Level: £534m</li>",
	 	"<li>Type: Motorway</li>",
	  	"<li>Status: Approved</li>",
	   	"<li>Start: Jan 2017</li>",
	   	"<li>End: Jul 2020</li>"
 	],
	"detail": [
            "<p>Netus class. Donec lorem ullamcorper eu aptent commodo quis. Lorem porta eros nullam malesuada. Morbi ipsum diam inceptos lacus a luctus. </p>",
            "<p>Curae velit. Morbi magna lacus quisque imperdiet nisi mus fusce etiam. Curae ipsum ultrices tristique a fermentum augue ve mauris interdum ultrices eu varius magnis. </p> ",
            "<p>Fusce porta aliquet lectus ve. Magna metus tempor primis nunc penatibus eros ullamcorper est in dapibus. </p>",
            "<p>Nunc vitae rhoncus ipsum. Donec lacinia augue eu tellus vestibulum maximus. Morbi turpis sem, sodales vitae ullamcorper non, tempus a ex.</p>"
    ],
	"impact": [
	            "<li> Nunc orci nulla, pharetra vel sollicitudin sit amet, consequat nec eros. </li>",
	            "<li> Etiam interdum velit lacus, id tristique mauris congue vitae. </li>",
	            "<li> Morbi nec neque vel ipsum elementum fringilla. </li>",
	            "<li> Donec sit amet nisi sed purus malesuada tempor in vel libero. </li>",
	            "<li> Mauris orci metus, tempor molestie enim ac, consequat imperdiet lectus. </li>",
	            "<li> Phasellus vestibulum felis at ante ornare auctor. </li>"
	],
	"x-data" : ['User Benefit','Reliability','Dependent Development','Wider Impacts','Noise','Accidents',
				'Tax','Air Quality','Construction Delays','Greenhouse Gases','Construction Costs','Net Benefit'],
	"y-data" : [104.2,397.4,204.5,558.5,-608.4,556.7,-105.3,88.3,-230.6,-165.5,-889.5,895.2],
	"table" : 
			`
			<tr> <td>Item 1</td><td> £4.6m </td><td> 16/02/2015 </td> <td> 04/08/2015 </td></tr>
	        <tr> <td>Item 2</td><td> £2.3m </td><td> 09/04/2015 </td> <td> 11/04/2015 </td></tr>
	        <tr> <td>Item 3</td><td> £2.7m </td><td> 12/04/2015 </td> <td> 13/11/2016 </td></tr>
	        <tr> <td>Item 4</td><td> £1.9m </td><td> 30/06/2015 </td> <td> 26/04/2016 </td></tr>
	        <tr> <td>Item 5</td><td> £5.3m </td><td> 28/08/2017 </td> <td> 13/08/2027 </td></tr>
	        `
	},
	{
 	"name": "Scheme 4",
 	 "x": 430769,
 	 "y": -544489,
 	"bullets": [
	 	"<li>Investment Level: £189m</li>",
	 	"<li>Type: A-Road</li>",
	  	"<li>Status: Paused</li>",
	   	"<li>Start: Aug 2017</li>",
	   	"<li>End: May 2021</li>"
 	],
	"detail": [
            "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus mi vitae turpis convallis, ac pharetra mauris porta. </p>",
            "<p> Morbi consectetur iaculis rutrum. Nulla sollicitudin ligula vitae pulvinar egestas. </p> ",
            "<p> Cras eget tortor a lorem fermentum tincidunt. Pellentesque non mi accumsan, posuere arcu non, euismod diam.</p>",
            "<p> Praesent dictum diam turpis, et vulputate leo egestas sit amet. Nulla odio magna, egestas eget egestas quis, venenatis quis urna. </p>"
    ],
	"impact": [
	            "<li> Donec pharetra ipsum sit amet mi efficitur maximus.  </li>",
	            "<li> Cras ut commodo nibh. In ipsum dui, efficitur id risus quis, convallis pretium mi.  </li>",
	            "<li> Nam sagittis consectetur porta. In ac nulla dolor. </li>",
	            "<li> Aliquam tortor purus, lacinia sit amet convallis dignissim, tristique in quam. </li>",
	            "<li> Curabitur ut dolor sit amet turpis mattis suscipit. </li>",
	            "<li> Nulla dictum dapibus tincidunt. </li>"
	],
	"x-data" : ['User Benefit','Reliability','Dependent Development','Wider Impacts','Noise','Accidents',
				'Tax','Air Quality','Construction Delays','Greenhouse Gases','Construction Costs','Net Benefit'],
	"y-data" : [986.2,482.4,88.5,326.5,-608.4,-556.7,105.3,306.3,230.6,-165.5,-889.5,1020.2],
	"table" : 
			`
			<tr> <td>Item 1</td><td>£1.3m</td><td>15/11/2015</td> <td>15/06/2016</td></tr>
	        <tr> <td>Item 2</td><td>£2.6m</td><td>30/04/2016</td> <td>15/03/2016</td></tr>
	        <tr> <td>Item 3</td><td>£1.8m</td><td>08/07/2017</td> <td>15/01/2018</td></tr>
	        <tr> <td>Item 4</td><td>£1.6m</td><td>16/08/2018</td> <td>15/08/2018</td></tr>
	        <tr> <td>Item 5</td><td>£2.8m</td><td>19/02/2019</td> <td>15/02/2019</td></tr>
	        `
},
{

 	"name": "Scheme 5",
 	 "x": 413091,
 	 "y": -520022,
 	"bullets": [
	 	"<li>Investment Level: £423m</li>",
	 	"<li>Type: Motorway</li>",
	  	"<li>Status: Approved</li>",
	   	"<li>Start: Sep 2018</li>",
	   	"<li>End: Dec 2025</li>"
 	],
	"detail": [
            "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>",
            "<p> Vestibulum sed vestibulum urna. Phasellus aliquam mi ullamcorper, iaculis metus vel, dapibus purus. Duis accumsan aliquam mi sit amet congue. </p> ",
            "<p> Sed id maximus lorem. Pellentesque semper fermentum consequat. Praesent eu velit eu tortor sagittis faucibus sed sit amet est. </p>",
            "<p> Nam tincidunt erat id diam sollicitudin euismod. Maecenas dapibus, diam in lacinia sollicitudin, ligula eros eleifend ligula, et semper enim ante quis nunc. </p>"
    ],
	"impact": [
	            "<li> Cras posuere ante lectus, ut fringilla orci fermentum id. Duis finibus semper elit porta ultricies.  </li>",
	            "<li> Proin id leo accumsan, luctus eros ac, scelerisque turpis. </li>",
	            "<li> Vestibulum sagittis nisi sem, a tempus tortor ornare at. </li>",
	            "<li> Suspendisse pulvinar leo libero, sed rhoncus purus bibendum sit amet. </li>",
	            "<li> Sed egestas, dolor vel tristique imperdiet, massa eros dapibus leo, nec mollis lacus lacus a est. </li>",
	            "<li> Suspendisse nisi magna, malesuada vel felis sit amet, posuere bibendum sem. </li>"
	],
	"x-data" : ['User Benefit','Reliability','Dependent Development','Wider Impacts','Noise','Accidents',
				'Tax','Air Quality','Construction Delays','Greenhouse Gases','Construction Costs','Net Benefit'],
	"y-data" : [986.2,482.4,88.5,326.5,-608.4,-556.7,105.3,306.3,230.6,-165.5,-889.5,1020.2],
	"table" : 
			`
			<tr> <td>Item 1</td><td>£0.3m</td><td>12/11/2015</td> <td>01/07/2015</td></tr>
	        <tr> <td>Item 2</td><td>£3.8m</td><td>16/04/2015</td> <td>04/08/2015</td></tr>
	        <tr> <td>Item 3</td><td>£2.2m</td><td>16/06/2015</td> <td>08/02/2016</td></tr>
	        <tr> <td>Item 4</td><td>£4.9m</td><td>08/09/2015</td> <td>29/09/2016</td></tr>
	        <tr> <td>Item 5</td><td>£0.2m</td><td>28/03/2017</td> <td>04/03/20217</td></tr>
	        `
}

];




