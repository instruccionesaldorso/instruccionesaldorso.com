<?php
namespace Instruccionesaldorso\BasePowermail\Domain\Model;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2015 Sergio Catalá <info@instruccionesaldorso.com>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * Class Field
 * @package Instruccionesaldorso\BasePowermail\Domain\Model
 */
class Field extends \In2code\Powermail\Domain\Model\Field {

	/**
	 * txBasePowermailColumn
	 *
	 * @var integer
	 */
	protected $txBasePowermailColumn = 0;

	/**
	 * Returns the txBasePowermailColumn
	 *
	 * @return integer $txBasePowermailColumn
	 */
	public function getTxBasePowermailColumn() {
		return $this->txBasePowermailColumn;
	}

	/**
	 * Sets the txBasePowermailColumn
	 *
	 * @param integer $txBasePowermailColumn
	 * @return void
	 */
	public function setTxBasePowermailColumn($txBasePowermailColumn) {
		$this->txBasePowermailColumn = $txBasePowermailColumn;
	}
}
