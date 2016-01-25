#############################################
# @author        info@instruccionesaldorso.com
# @package        base_powermail TypoScript
# @file        Setup.ts
#
# Setup section
#############################################

plugin.tx_powermail {
	view {
		templateRootPath >
		templateRootPaths {
			10 = {$plugin.tx_powermail.view.templateRootPath}
			20 = {$plugin.tx_basepowermail.view.templateRootPath}
		}

		partialRootPath >
		partialRootPaths {
			10 = {$plugin.tx_powermail.view.partialRootPath}
			20 = {$plugin.tx_basepowermail.view.partialRootPath}
		}

		layoutRootPath >
		layoutRootPaths {
			10 = {$plugin.tx_powermail.view.layoutRootPath}
			20 = {$plugin.tx_basepowermail.view.layoutRootPath}
		}
	}

	settings {
		main {
			pid = {$tx_powermailconfig.storagePids.powermail}
			form = {$tx_powermailconfig.frontendPids.form}
			confirmation = 0
			optin = 0
			moresteps = 0
		}
	}
}