# mesos-js

<img src="https://travis-ci.org/topology-io/mesos-js.svg?branch=master" />

Exports two useful modules:

- **libprocess** a pure javascript implementation of the
  [libprocess](https://github.com/apache/mesos/tree/master/3rdparty/libprocess)
  message passing library.

- **mesos** a pure javascript implementation of the
  [Apache Mesos](http://mesos.apache.org) framework API.

## Dependencies

- node.js

- grunt-cli ``npm install -g grunt-cli``

- GCC


## Install
1. ``npm install``

	* Installs project dependencies specified in package.json

## Build
1. ``grunt``

	* Runs jshint
	* Copies src code to dist
	* TODO Runs jasmine tests

