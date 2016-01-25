mod {
	web_layout {
		BackendLayouts {
			example {
				title = Example
				config {
					backend_layout {
                        colCount = 1
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = LLL:EXT:base_template/Resources/Private/Language/locallang_db.xlf:backend_layout.default
                                        colPos = 0
                                    }
                                }
                            }
                        }
					}
				}
				icon = EXT:base_template/Resources/Public/Images/BackendLayouts/default.gif
			}
		}
	}
}
