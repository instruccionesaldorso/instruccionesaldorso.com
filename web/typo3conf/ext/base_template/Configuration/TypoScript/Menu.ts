#############################################
# @author 		info@instruccionesaldorso.com
# @package 		base_template TypoScript
# @file 		Menu.ts
#
# Navigation section
#############################################

# Setting up navigation
lib.navigation = HMENU
lib.navigation {
	entryLevel = 0
	stdWrap.wrap = <ul class="nav navbar-nav navbar-right">|</ul>
	1 = TMENU
	1 {
		noBlur = 1
		expAll = 1
		NO = 1
		NO {
			#ATagTitle.field = abstract // subtitle // description
			#htmlSpecialChars = 1
			wrapItemAndSub = <li>|</li>
			doNotLinkIt = 1
			stdWrap.htmlSpecialChars = 0
			stdWrap.cObject = COA
			stdWrap.cObject {
				10 = TEXT
				10 {
					field = title
					typolink.parameter.field = uid
					typolink.ATagParams {
						dataWrap = class="menu-{field:uid}" title="{field:title}"
					}
				}
			}
		}
		ACT < .NO
		ACT {
			wrapItemAndSub = <li class="active">|</li>
			#doNotLinkIt = 1
		}
		CUR < .ACT
		IFSUB < .NO
		IFSUB {
			wrapItemAndSub =  <li class="dropdown nav-toggle">|</li>
		}
		ACTIFSUB < .IFSUB
		CURIFSUB < .IFSUB
	}
	2 < .1
	2 {
		stdWrap.wrap = <ul class="dropdown">|</ul>
		NO.stdWrap.cObject.10.typolink.ATagParams.dataWrap = title="{field:title}" class="menu-1"
		ACTIFSUB.wrapItemAndSub = <li class="active">|</li>
		CURIFSUB < .ACTIFSUB
	}
}
