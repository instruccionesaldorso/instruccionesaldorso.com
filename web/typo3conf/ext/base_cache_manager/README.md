# Cache Manager

## About

Provides utilities for TYPO3 Cache Management.

## Commands

### cache_manager:cache:clearallcache

This command clears all TYPO3 cache. You can use it via a scheduler task ("Extbase-CommandController-Task").

Additionally you can call it directly via CLI with a command like this:

    php /path/to/site/typo3/cli_dispatch.phpsh extbase cache:clearall

If you use a "TYPO3_CONTEXT" (e.g. for different enviroments, you must append it to your command:

    TYPO3_CONTEXT=YourContext php /path/to/site/typo3/cli_dispatch.phpsh extbase cache:clearall

Example:

    HTTP_HOST=localhost /usr/bin/php /var/www/htdocs/typo3/cli_dispatch.phpsh extbase cache:clearall