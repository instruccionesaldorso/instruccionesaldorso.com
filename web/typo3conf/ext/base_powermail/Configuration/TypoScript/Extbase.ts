# Add new Field Properties
config.tx_extbase {
	persistence {
		classes {
			In2code\Powermail\Domain\Model\Form {
				subclasses {
					0 = Instruccionesaldorso\BasePowermail\Domain\Model\Form
				}
			}

			In2code\Powermail\Domain\Model\Page {
				subclasses {
					0 = Instruccionesaldorso\BasePowermail\Domain\Model\Page
				}
			}
			In2code\Powermail\Domain\Model\Field {
				subclasses {
					0 = Instruccionesaldorso\BasePowermail\Domain\Model\Field
				}
			}

			Instruccionesaldorso\BasePowermail\Domain\Model\Form {
				mapping {
					tableName = tx_powermail_domain_model_forms
				}
			}

			Instruccionesaldorso\BasePowermail\Domain\Model\Page {
				mapping {
					tableName = tx_powermail_domain_model_pages
				}
			}

			Instruccionesaldorso\BasePowermail\Domain\Model\Field {
				mapping {
					tableName = tx_powermail_domain_model_fields
				}
			}
		}
	}
	objects {
		In2code\Powermail\Domain\Repository\FormRepository.className = Instruccionesaldorso\BasePowermail\Domain\Repository\FormRepository
	}
}
