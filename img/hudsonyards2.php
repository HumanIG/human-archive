<!DOCTYPE html>
<html lang="en">
<head>
	<title>human. - hudson yards</title>
	<?php include('includes/resources.php') ?>
	<link rel="stylesheet" href="css/hudsonyards.css">
	<script type="text/javascript" src="js/goodale.js"></script>
</head>
<body>
	<?php $highlighted = 'our work'; ?>
	<div id="overlay"></div>
	
	<img id="case-study-bg" class="full-width" src="img/hudsonyards-bg2.png">

	<div id="hudson-id"></div>

	<div id="header-bg"></div>
	
	<!-- Header -->
	<?php include('includes/header.php'); ?>
	<?php include('includes/case_study_nav.php'); ?>

	<!-- Long Scroll -->
	<div id="main-container" class="container">
		<div class="row filler"></div>
		<div class="row">
			<div id="laptop" class="margin-top-3">
				<?php 
					if($iPod || $iPhone || $iPad || $Android || $webOS) {
						echo '<img id="laptop-img" class="col-xs-12 padding-left-0 padding-right-0" src="img/laptop-hudsonyards.png">';
					} else {
						echo '<img id="laptop-img" class="col-xs-10 col-xs-offset-1 padding-left-0 padding-right-0" src="img/laptopillustration.png">
									<div id="in-laptop">
										<img id="mini-site" class="full-width" src="img/hudsonyards_1.png">
									</div>
									<div id="address-bar">
										<img id="address-bar-img" class="full-width" src="img/laptop-addressbar.png">
									</div>';
					}
				?>
				
			</div>
		</div>
		<div class="row">
			<h1 class="hero-letter-spacing margin-bottom-0 col-xs-12">Hudson Yards</h1>
		</div>
		<div class="row">
			<h3 class="col-xs-12 margin-top-0">Redefining a city.</h3>
		</div>
		<div class="row">
			<div class="col-sm-12 col-md-6">
				<h4 class="title-sub-category margin-top-1 margin-bottom-0">the idea.</h4>
				<p class="case-study-copy">
					Create an experience that reflects the grandeur of New York City’s largest private development since Rockefeller Center.
				</p>
				<h4 class="title-sub-category margin-top-1 margin-bottom-0">the approach.</h4>
				<p class="case-study-copy">
					What do you do when you’ve been asked to pull off a project in record time? Turn your usual process on its head.  One of the most aggressive projects we’ve ever done, we worked closely with partner agencies and architects to create branding, design, and interactive content strategy – all in parallel.
				</p>
			</div>
			<div class="col-sm-12 col-md-6">
			<h4 id="the-results" class="title-sub-category margin-bottom-0 margin-top-4">the results.</h4>
				<a class="margin-top-2" target="_blank" href="http://www.iacaward.org/iac/winner.asp?eid=10706">
					<img src="img/logos/IAC_logo.png" width="40%" style="margin-top: 25px;">
				</a><br>
				<h5 id="winner" class="title-sub-category margin-bottom-0 margin-top-1" style="margin-top: 25px; margin-bottom: 25px;">Winner of 2014 IAC Best of Show award.</h5>
			</div>
		</div>
		<div class="row margin-top-1">
			<div id="bonobos-site">
				<div class="col-sm-12 col-md-6">
					<img src="img/hudsonyards_2.png" class="full-width mini-padding">
				</div>
				<div class="col-sm-12 col-md-6">
					<img src="img/hudsonyards_3.jpg" class="full-width slight-padding">
					<img src="img/hudsonyards_4.jpg" class="full-width">
				</div>
			</div>
		</div>
		<div class="row">
      		<h2 class="col-xs-12 page-header" style="margin-top: 25px;">let's talk.</h2>
    	</div>
    	<div class="row margin-top-2">
			<div class="col-xs-5 col-sm-3" id="on-line">
				<h4 class="dark-color">on line.</h4>
				<h6 class="margin-top-1"><a class="light-color" href="tel:1-888-901-4649">888.901.4649</a><br/><a class="light-color" href="mailto:hello@humanig.com">hello@humanig.com</a></h6>
			</div>
			<div class="col-xs-6 col-sm-3" id="on-earth">
				<h4 class="dark-color">on earth.</h4>
				<h6 class="margin-top-1 light-color">human.<br/>230 7th avenue<br/>4th floor<br/>new york, ny 10011</h6>
			</div>
		</div>

		<div class="row">

			<div id="footer" class="col-xs-12"></div>
		</div>
	</div>
</body>
</html>