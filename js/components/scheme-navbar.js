var schemeNavbar = (`
<nav class="navbar navbar-default">
	<div class = "container-fluid">
		<div class="navbar-header">
				<h4 id = "brand">DfT Labs</h4>
				<!-- Collapse Button -->
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>

				<!-- Brand & Logo -->
				<a class="navbar-brand">
					<img id = "dft-logo" alt="Brand" src="img/dft.png">
				</a>
				

		</div> <!-- navbar header -->

		<div class="collapse navbar-collapse" id="myNavbar">
			<ul class="nav navbar-nav">
				<li><a href="index.html">Home</a></li>
				<li><a href="region.html">North East</a></li>
				<li class="active"><a href="#">M1 Junction 19</a></li>
			</ul>

			<form class="navbar-form navbar-left" role="search">
			<div class="form-group">
				<select id = "scheme-dropdown" class="selectpicker" mulltiple title="Select Category">
					<optgroup>
						<option >Scheme Overview</option>
						<option>Scheme Detail</option>
						<option>Scheme Graphics</option>
						<option>Scheme Timetable</option>
					</optgroup>
				</select>
		      </div>
		      <button id = "go-button" type="submit" class="btn btn-success btn-nav">Go!</button>
		    </form>
		</div>
	</div>
</nav>
`);