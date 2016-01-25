<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes('tx_powermail_domain_model_fields', '--div--;Custom,tx_base_powermail_column', '', 'after:own_marker_select');
