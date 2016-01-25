#############################################
# @author 		info@instruccionesaldorso.com
# @package 		base_template TypoScript
# @file 		Conditions.ts
#
# Conditions section
#############################################

[globalVar = GP:L = 1]
	page.config {
		sys_language_uid = 1
		language = es
		htmlTag_langKey = es
		locale_all = es_ES
		#sys_language_overlay = hideNonTranslated
	}
[global]

[globalVar = TSFE:id = {$tmplFoundation.frontendPids.home}] || [globalVar = TSFE:id = {$tmplFoundation.frontendPids.news}]
	lib.logo.stdWrap.typolink >
	lib.breadcrumbs >
	lib.title >
	page.10.variables.content < lib.news_list
	page.10.file = EXT:base_template/Resources/Private/Templates/BackendLayouts/Onepage.html
[end]

# No support for IE < 8
[browser = msie] && [version = < 8]
	page {
		typeNum = 0
		# disable some basics
		meta >
		includeCSS >
		includeJSFooterlibs >
		includeJSFooter >
		headerData >

		10.template.file >
		10.template.file = {$tmplFoundation.view.templateRootPath}Browserchoice.html
	}
[end]

[globalVar = GP:tx_news_pi1|news > 0]
	lib.title >
	lib.getContent.20 < lib.news_detail
[global]
