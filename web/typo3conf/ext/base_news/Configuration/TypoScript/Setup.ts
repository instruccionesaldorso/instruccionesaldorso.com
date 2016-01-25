#############################################
# @author 		info@instruccionesaldorso.com
# @package 		base_news TypoScript
# @file 		Setup.ts
#
# Setup section
#############################################

plugin.tx_news {
	view {
		templateRootPaths >
		templateRootPaths {
			10 = {$plugin.tx_news.view.templateRootPath}
			20 = {$plugin.tx_basenews.view.templateRootPath}
		}

		partialRootPaths >
		partialRootPaths {
			10 = {$plugin.tx_news.view.partialRootPath}
			20 = {$plugin.tx_basenews.view.partialRootPath}
		}

		layoutRootPaths >
		layoutRootPaths {
			10 = {$plugin.tx_news.view.layoutRootPath}
			20 = {$plugin.tx_basenews.view.layoutRootPath}
		}
	}
	settings {
		cssFile >
		link.skipControllerAndAction = 1
		list {
			media {
				image {
					maxWidth = 300c
					maxHeight = 200c
				}
			}
			paginate {
				itemsPerPage = 10
				insertAbove = 0
				templatePath = {$plugin.tx_news.view.templateRootPath}ViewHelpers/Widget/Paginate/Index.html
			}
		}
		detail.showSocialShareButtons = 0
		backPid = {$tmplFoundation.frontendPids.news}
	}
	# Modify the translation
	_LOCAL_LANG {
		default {
			more-link = Leer más
			author = Creado por %s
			back-link = Volver
			related-news = Otras noticias
			related-files = Adjuntos
			related-links = Enlaces
		}
	}
}

lib.news = USER
lib.news {
	userFunc = tx_extbase_core_bootstrap->run
	pluginName = Pi1
	extensionName = News
	controller = News
	settings =< plugin.tx_news.settings
	persistence =< plugin.tx_news.persistence
	view =< plugin.tx_news.view
}

lib.news_list < lib.news
lib.news_list {
	action = list
	switchableControllerActions.News.1 = list
}

lib.news_detail < lib.news
lib.news_detail {
	action = detail
	switchableControllerActions.News.1 = detail
}
