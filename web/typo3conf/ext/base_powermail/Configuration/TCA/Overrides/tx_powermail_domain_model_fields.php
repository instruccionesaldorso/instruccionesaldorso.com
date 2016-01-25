<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

/**
 * Add extra fields to the tx_powermail_domain_model_fields record
 */
$newTxPowermailDomainModelFieldsColumns = array(
	'tx_base_powermail_column' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:base_powermail/Resources/Private/Language/locallang_db.xlf:tx_powermail_domain_model_fields.tx_base_powermail_column',
		'config' => array(
			'type' => 'select',
			'items' => array(
				array(
					'LLL:EXT:base_powermail/Resources/Private/Language/locallang_db.xlf:tx_powermail_domain_model_fields.tx_base_powermail_column.0',
					0
				),
				array(
					'LLL:EXT:base_powermail/Resources/Private/Language/locallang_db.xlf:tx_powermail_domain_model_fields.tx_base_powermail_column.1',
					1
				),
				array(
					'LLL:EXT:base_powermail/Resources/Private/Language/locallang_db.xlf:tx_powermail_domain_model_fields.tx_base_powermail_column.2',
					2
				),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => '',
		),
	),
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tx_powermail_domain_model_fields', $newTxPowermailDomainModelFieldsColumns);

