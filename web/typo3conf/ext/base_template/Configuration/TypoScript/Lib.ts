#############################################
# @author 		info@instruccionesaldorso.com
# @package 		base_template TypoScript
# @file 		Lib.ts
#
# Library objects section
#############################################

lib {
	# Setting up logo
	logo = IMAGE
	logo {
		file = {$baseTemplate.settings.publicResourcesRootPath}img/logo.png
		file.width = 150
		altText = {$baseTemplate.tagline}
		stdWrap.typolink {
			parameter = 1
			title = {$logoTitle}
			ATagParams = class="logo"
		}
	}

	# Setting up title
	title = TEXT
	title {
		data = page:title
		wrap = <h2>|</h2>
	}

	# Setting up content
	getContent = COA
	getContent{
		cnt < styles.content.get
		cnt.select.where.cObject = COA
		cnt.select.where.cObject {
			10 = TEXT
			10.current = 1
			10.wrap = colPos = |
		}

		10 = COA
		10 {
			# render content
			20.if.isTrue.numRows < lib.getContent.cnt
			20 < lib.getContent.cnt
		}
	}

	# Setting up year
	getYear = TEXT
	getYear{
		data = date:Y
	}
}

