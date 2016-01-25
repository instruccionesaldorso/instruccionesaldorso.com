#############################################
# @author 		info@instruccionesaldorso.com
# @package 		base_template TypoScript
# @file 		Content.ts
#
# Content section
#############################################

# Remove csc-default
tt_content {
	stdWrap {
		prefixComment >
		innerWrap.cObject.default >
	}
	image.20.maxW = 970
}

styles.content.imgtext {
	# enable fancybox (do not forget to implement newest version of jquery, fancybox and fancybox.css)
	linkWrap{
		lightboxEnabled = 1
		lightboxCssClass = fancybox
		lightboxRelAttribute = fancybox{field:uid}
	}
}
