# Harvest Class

This module is used for gathering content from a CSW server and caching it on a database.  It caches everything returned from a CSW getRecords request and it selectively caches content from WFS servers.

## Harvest API

Gathers content from a CSW server and caches it to a CouchDB document database.

### harvest.harvestCsw(cswBaseUrl, [callback])

Given a CSW service endpoint, this high-level function populates the cache with metadata content from the CSW.  A list of all records is made and then metadata records are individually obtained by ID and cached in the database.  If provided, `callback` will only return `(err)` if an error is encountered.

### harvest.gatherFeatures(featuretype, [callback])

Populates the cache with features of the specified featureType.  Not yet implemented.