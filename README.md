# homestar-template
[IOTDB](https://github.com/dpjanes/node-iotdb) Bridge for for [Template]().

<img src="https://raw.githubusercontent.com/dpjanes/iotdb-homestar/master/docs/HomeStar.png" align="right" />

# About

Bridge for for [Template]().

* [Read about Bridges](https://github.com/dpjanes/node-iotdb/blob/master/docs/bridges.md)

# Installation

* [Read this first](https://github.com/dpjanes/node-iotdb/blob/master/docs/install.md)

Then:

    $ npm install homestar-template

# Installation and Configuration

* [Read this first](https://github.com/dpjanes/node-iotdb/blob/master/docs/install.md)
* [Read about installing Home☆Star](https://github.com/dpjanes/node-iotdb/blob/master/docs/homestar.md) 

Then:

    $ npm install -g homestar    ## may require sudo
    $ npm install homestar-template
    $ homestar configure homestar-template

# Use

Turn on Template.

	const iotdb = require('iotdb')
    iotdb.use("homestar-template")

	const things = iotdb.connect("Template")
	things.set(":on", true);
	
# Models
## Template

See [Template.iotql](https://github.com/dpjanes/homestar-template/blob/master/models/Template.iotql)
