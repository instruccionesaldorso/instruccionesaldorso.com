<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "base_news".
 *
 * Auto generated 01-03-2015 22:45
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
	'title' => 'Own news settings',
	'description' => 'Own news settings',
	'category' => 'fe',
	'version' => '0.0.1',
	'state' => 'stable',
	'uploadfolder' => true,
	'createDirs' => NULL,
	'clearcacheonload' => true,
	'author' => 'Sergio Catalá',
	'author_email' => 'info@instruccionesaldorso.com',
	'author_company' => '',
	'constraints' => 
	array (
		'depends' => 
		array (
			'typo3' => '6.2.0-7.99.99',
			'news' => '',
		),
		'conflicts' => 
		array (
		),
		'suggests' => 
		array (
		),
	),
);
