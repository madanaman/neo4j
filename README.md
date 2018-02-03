# NEO4J CRUD OPERATIONS USING NODE
 This demo helps to setup connection and perform CRUD (create, read, update and delete) operations between docker image of neo4j and node.


## Installation

### Step 1: Installing Neo4j Docker Image

Before proceeding towards this step, please ensure that you have docker intalled on your machine. 
To install docker refer to https://docs.docker.com/install/

OS X & Linux:

```sh
    docker run \
    --publish=7474:7474 --publish=7687:7687 \
     --volume=$HOME/neo4j/data:/data \
     neo4j
```
This command will download the neo4j image and map local ports 7474 adn 7687 to neo4j ports.

To check if installation is correct, then open your browser and go to:
```sh
    http://localhost:7474/
```
This should bring up the neo4j console.



### Step 2: Create user and password for neo4j
Within the browser opened in Step 1, follow the onscreen instructions and create a username and password for your use. In my case I kept

username as **neo4j**

password as **neo4j1**

### Step 3: Clone this project
In a seperate terminal

Make a directory and then run below command
```sh
    git clone https://github.com/madanaman/neo4j.git
```

### Step 4: Test connection
In a seperate terminal, run below command
```sh
    node server.js test
```

## Usage example

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.

_For more examples and usage, please refer to the [Wiki][wiki]._

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

## Release History

* 0.2.1
    * CHANGE: Update docs (module code remains unchanged)
* 0.2.0
    * CHANGE: Remove `setDefaultXYZ()`
    * ADD: Add `init()`
* 0.1.1
    * FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
* 0.1.0
    * The first proper release
    * CHANGE: Rename `foo()` to `bar()`
* 0.0.1
    * Work in progress

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki