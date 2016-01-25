#############################################
# @author 		info@instruccionesaldorso.com
# @package 		base_powermail TypoScript
# @file 		Constants.ts
#
# Constants section
#############################################

plugin.tx_basepowermail {
	view {
		# cat=base_powermail/file; type=string; label= Path to template root (FE)
		templateRootPath = EXT:base_powermail/Resources/Private/Templates/

		# cat=base_powermail/file; type=string; label= Path to root partials (FE)
		partialRootPath = EXT:base_powermail/Resources/Private/Partials/

		# cat=base_powermail/file; type=string; label= Path to root layouts (FE)
		layoutRootPath = EXT:base_powermail/Resources/Private/Layouts/
	}
}
