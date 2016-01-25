<?php
namespace Instruccionesaldorso\BaseCacheManager\Command;

use TYPO3\CMS\Core\Utility\GeneralUtility;

class CacheCommandController extends \TYPO3\CMS\Extbase\Mvc\Controller\CommandController
{
    /**
     * @var \TYPO3\CMS\Extbase\Object\ObjectManager
     * @inject
     */
    protected $objectManager = NULL;

    /**
     * Clear all caches
     * 
     * This command clears all caches.
     * 
     * @see \TYPO3\CMS\Install\Service\ClearCacheService->clearAll()
     * @return void
     */
    public function clearAllCommand()
    {
        // Delete typo3temp/Cache
        GeneralUtility::flushDirectory(PATH_site . 'typo3temp/Cache', TRUE, TRUE);

        /** @var TYPO3\CMS\Core\Core\Bootstrap $bootstrap */
        $bootstrap = \TYPO3\CMS\Core\Core\Bootstrap::getInstance();

        //\TYPO3\CMS\Core\Cache\Cache::flagCachingFrameworkForReinitialization();

        $bootstrap
            ->initializeClassLoader()
            ->initializeCachingFramework()
            ->initializeClassLoaderCaches()
            ->initializePackageManagement('TYPO3\\CMS\\Core\\Package\\PackageManager');

        // Get all table names starting with 'cf_' and truncate them
        $database = $this->getDatabaseConnection();
        $tables = $database->admin_get_tables();
        foreach ($tables as $table) {
            $tableName = $table['Name'];
            if (substr($tableName, 0, 3) === 'cf_') {
                $database->exec_TRUNCATEquery($tableName);
            } elseif ($tableName === 'cache_treelist') {
                // cache_treelist is not implemented in the caching framework.
                // clear this table manually
                $database->exec_TRUNCATEquery('cache_treelist');
            }
        }

        // Use bootstrap to load all ext_localconf and ext_tables
        $bootstrap
            ->loadTypo3LoadedExtAndExtLocalconf(FALSE)
            ->applyAdditionalConfigurationSettings()
            ->initializeTypo3DbGlobal()
            ->loadExtensionTables(FALSE);

        /** @var $cacheManager TYPO3\CMS\Core\Cache\CacheManager */
        $cacheManager = $this->objectManager->get('TYPO3\\CMS\\Core\\Cache\\CacheManager');
        $cacheManager->flushCaches();

        /** @var $logger \TYPO3\CMS\Core\Log\Logger */
        $logger = $this->objectManager->get('TYPO3\\CMS\\Core\\Log\\LogManager')->getLogger(__CLASS__);
        $logger->info('All caches cleared.');
    }

    /**
     * Get a database instance.
     *
     * @TODO: This method is a copy from AbstractAction. Review them and extract to service
     * @return \TYPO3\CMS\Core\Database\DatabaseConnection
     */
    protected function getDatabaseConnection()
    {
        static $database;
        if (!is_object($database)) {
            /** @var \TYPO3\CMS\Core\Database\DatabaseConnection $database */
            $database = $this->objectManager->get('TYPO3\\CMS\\Core\\Database\\DatabaseConnection');
            $database->setDatabaseUsername($GLOBALS['TYPO3_CONF_VARS']['DB']['username']);
            $database->setDatabasePassword($GLOBALS['TYPO3_CONF_VARS']['DB']['password']);
            $database->setDatabaseHost($GLOBALS['TYPO3_CONF_VARS']['DB']['host']);
            $database->setDatabasePort($GLOBALS['TYPO3_CONF_VARS']['DB']['port']);
            $database->setDatabaseSocket($GLOBALS['TYPO3_CONF_VARS']['DB']['socket']);
            $database->setDatabaseName($GLOBALS['TYPO3_CONF_VARS']['DB']['database']);
            $database->initialize();
            $database->connectDB();
        }
        return $database;
    }
}
