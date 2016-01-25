#############################################
# @author 		info@instruccionesaldorso.com
# @package 		base_template TypoScript
# @file 		Config.ts
#
# Config section
#############################################

config {
	doctype = html5
	xhtml_cleaning = none
	xmlprologue = none
	renderCharset = utf-8
	extTarget = _blank

	# Set base url
	absRefPrefix = /

	linkVars = 1
	sys_language_uid = 0
	sys_language_mode = content_fallback
	#sys_language_overlay = hideNonTranslated
	uniqueLinkVars = 1

	# Suppress default title tag
	noPageTitle = 2

	spamProtectEmailAddresses = -2
	spamProtectEmailAddresses_atSubst = <script type="text/javascript"> obscureAddMid() </script>
	spamProtectEmailAddresses_lastDotSubst = <script type="text/javascript"> obscureAddEnd() </script>

	# If set, the inline styles TYPO3 controls in the core are written to a file
	inlineStyle2TempFile = 1

	# js / css handling
	removeDefaultJS = external
	concatenateJs = 0
	concatenateCss = 0
	compressJs = 0
	compressCss = 0
	concatenateJsAndCss = 0
	sendCacheHeaders = 1

	# Add comment to header
	headerComment (
TYPO3 implementation and support by Sergio Catalá
info@instruccionesaldorso.com
	)

	htmlTag_dir = ltr
	htmlTag_stdWrap {
		setContentToCurrent = 1
		cObject = COA
		cObject {
			temp = TEXT
			temp.append = TEXT
			temp.append.char = 10
			temp.current = 1

			# IE8
			10 < .temp
			10.addParams.class = ie ie8
			10.wrap = <!--[if IE 8]>|<![endif]-->

			# IE9
			20 < .temp
			20.addParams.class = ie ie9
			20.wrap = <!--[if IE 9]>|<![endif]-->

			# > IE9
			30 < .temp
			30.wrap = <!--[if gt IE 9]>|<![endif]-->
		}
	}
}