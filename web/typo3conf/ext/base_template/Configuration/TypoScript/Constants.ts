#############################################
# @author 		info@instruccionesaldorso.com
# @package 		base_template TypoScript
# @file 		Constants.ts
#
# Constants section
#############################################

baseTemplate {
	# Force this plugin name
	pluginName =
	# Force this extension name
	controllerExtensionName =
	# Force this controller name
	controllerName =
	# Force this action name
	controllerActionName =

	settings {
		# Ext path
		extPath = base_template/

		# Private Resources Path
		privateResourcesRootPath = EXT:{$baseTemplate.settings.extPath}Resources/Private/

		# Public Resources Path
		publicResourcesRootPath = EXT:{$baseTemplate.settings.extPath}Resources/Public/
	}
	view {
		# Path to main templates
		templateRootPath = {$baseTemplate.settings.privateResourcesRootPath}Templates/

		# Path to main partials
		partialRootPath = {$baseTemplate.settings.privateResourcesRootPath}Partials/

		# Path to main layouts
		layoutRootPath = {$baseTemplate.settings.privateResourcesRootPath}Layouts/

		base {
			# Path to foundation templates
			templateRootPath = {$baseTemplate.view.templateRootPath}

			# Path to foundation partials
			partialRootPath = {$baseTemplate.view.partialRootPath}

			# Path to foundation layouts
			layoutRootPath = {$baseTemplate.view.layoutRootPath}
		}
	}
	frontendPids {
		home = 1
		news = 1
		contact = 1
	}

	# Translations
	tagline = www.instruccionesaldorso.com
	logoTitle = Go to home page
	meta {
		description = Meta description
		keywords = Meta keywords
	}
}
