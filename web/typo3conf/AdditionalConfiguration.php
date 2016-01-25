<?php
namespace Instruccionesaldorso\TYPO3\CMS\Base\Distribution;
use \TYPO3\CMS\Core\Utility\GeneralUtility;

if (!function_exists('Instruccionesaldorso\\TYPO3\\CMS\\Base\\Distribution\\includeIfExists')) {
	function includeIfExists($file) {
		file_exists($file) && include $file;
	}
}

includeIfExists(__DIR__ . '/../../Configuration/' . GeneralUtility::getApplicationContext() . '/Settings.php');
