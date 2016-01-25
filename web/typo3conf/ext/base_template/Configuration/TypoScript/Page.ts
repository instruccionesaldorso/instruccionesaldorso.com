#############################################
# @author 		info@instruccionesaldorso.com
# @package 		base_template TypoScript
# @file 		Page.ts
#
# basic PAGE object definition
#############################################

page = PAGE
page {
	typeNum = 0

	config {
		sys_language_uid = 0
		sys_language_mode = content_fallback
		linkVars = L
		language = en
		locale_all = en_EN.UTF8
		htmlTag_langKey = en
		uniqueLinkVars = 1
		simulateStaticDocuments = 0

		# Enable Realurl
		tx_realurl_enable = 0
		prefixLocalAnchors = all

		intTarget = _self
		extTarget = _blank
	}

	meta {
		description {
			field = description
			ifEmpty = {$baseTemplate.meta.description}
		}
		keywords {
			field = keywords
			ifEmpty = {$baseTemplate.meta.keywords}
		}
		viewport = width=device-width, initial-scale=1.0
	}

	headerData {
		10 = TEXT
		10 {
			field = nav_title // title
			noTrimWrap = |<title>{$baseTemplate.tagline} - | </title>|
		}

		20 = TEXT
		20.value = <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>

		30 = TEXT
		30.value = <link href='http://fonts.googleapis.com/css?family=Raleway:400,500,600,700' rel='stylesheet' type='text/css'>

		40 = TEXT
		40.value = <link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>

		50 = TEXT
		50.value = <link href='http://fonts.googleapis.com/css?family=Tangerine' rel='stylesheet' type='text/css' />

		60 = TEXT
		60.value (
			<!-- The HTML5 shim, for IE6-8 support of HTML5 elements -->
			<!--[if lt IE 9]>
				<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
				<script src="js/respond.min.js"></script>
			<![endif]-->
		)

		70 = TEXT
		70.value (
			<script type="text/javascript">
				<!--
					function obscureAddMid() {
						document.write('@');
					}
					function obscureAddEnd() {
						document.write('.');
					}
				// -->
			</script>
		)
	}

	shortcutIcon = {$baseTemplate.settings.publicResourcesRootPath}img/favicon.ico

	#includeCSS >
	includeCSS {
		powermailConfig >
		powermailJQueryUiTheme >
		powermailJQueryUiDatepicker >

		1 = {$baseTemplate.settings.publicResourcesRootPath}Css/bootstrap.min.css
		1.media = all

		2 = {$baseTemplate.settings.publicResourcesRootPath}Css/bootstrap-theme.min.css
		2.media = all

		3 = {$baseTemplate.settings.publicResourcesRootPath}Css/team-member.css
		3.media = all

		4 = {$baseTemplate.settings.publicResourcesRootPath}Css/fonts/font-awesome/css/font-awesome.css
		4.media = all

		5 = {$baseTemplate.settings.publicResourcesRootPath}Css/animations.css
		5.media = all

		6 = {$baseTemplate.settings.publicResourcesRootPath}Css/prettyPhoto.css
		6.media = all

		7 = {$baseTemplate.settings.publicResourcesRootPath}Css/jquery.bxslider.css
		7.media = all

		8 = {$baseTemplate.settings.publicResourcesRootPath}Css/style.css
		8.media = all

		9 = {$baseTemplate.settings.publicResourcesRootPath}Css/global.css
		9.media = all

		10 = {$baseTemplate.settings.publicResourcesRootPath}Css/colors/brown.css
		10.media = all
	}

	includeJSlibs {
	}

	includeJS >
	includeJSFooterlibs >
	includeJSFooter >

	10 = FLUIDTEMPLATE
	10 {
		#file.stdWrap.cObject = TEXT
		#file.stdWrap.cObject {
		#	data = levelfield:-2,backend_layout_next_level,slide
		#	override.field = backend_layout
		#	split {
		#		token = file__
		#		1.current = 1
		#		1.wrap = |
		#	}
		#	wrap = {$baseTemplate.view.templateRootPath}BackendLayouts/|.html
		#}

		file = EXT:base_template/Resources/Private/Templates/Page/OnepageSection.html

		## Layouts and partials
		layoutRootPath = {$baseTemplate.view.layoutRootPath}
		partialRootPath = {$baseTemplate.view.partialRootPath}

		## Extbase settings
		extbase {
			pluginName = {$baseTemplate.pluginName}
			controllerExtensionName = {$baseTemplate.controllerExtensionName}
			controllerName = {$baseTemplate.controllerName}
			controllerActionName = {$baseTemplate.controllerActionName}
		}

		variables {
			header < styles.content.getLeft
			content < styles.content.get
			map < styles.content.getRight
		}
	}

	# Remove some ie7 google chrome stuff
	1000 >

	1001 = COA
	1001 {
		10 = TEXT
		10 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.min.js
			insertData = 1
			wrap = <script src="|"></script>
		}
		20 < .10
		20 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery-migrate-1.0.0.js
		}
		30 < .10
		30 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery-ui.js
		}
		40 < .10
		40 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/bootstrap.min.js
		}
		50 < .10
		50 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.parallax.js
		}
		60 < .10
		60 {
		value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.hparallax.js
		}
		70 < .10
		70 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.wait.js
		}
		80 < .10
		80 {
		value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/appear.js
		}
		90 < .10
		90 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/fappear.js
		}
		100 < .10
		100 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/modernizr-2.6.2.min.js
		}
		110 < .10
		110 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.bxslider.min.js
		}
		120 < .10
		120 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.maximage.js
		}
		130 < .10
		130 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.cycle.all.js
		}
		140 < .10
		140 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.prettyPhoto.js
		}
		150 < .10
		150 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.sticky.js
		}
		160 < .10
		160 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.isotope.js
		}
		170 < .10
		170 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/imagesloaded.pkgd.min.js
		}
		180 < .10
		180 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.countTo.js
		}
		190 < .10
		190 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/skrollr.min.js
		}
		200 < .10
		200 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.scrollTo.min.js
		}
		210 < .10
		210 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/wow.js
		}
		220 < .10
		220 {
			value = http://maps.google.com/maps/api/js?sensor=false
		}
		230 < .10
		230 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.gmap.min.js
		}
		240 < .10
		240 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/jquery.mb.YTPlayer.js
		}
		250 < .10
		250 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/tytabs.js
		}
		260 < .10
		260 {
			value = /typo3conf/ext/{$baseTemplate.settings.extPath}Resources/Public/Js/custom.js
		}
	}
}
