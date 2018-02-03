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

Make a directory **neo4jtest** and then run below command
```sh
    git clone https://github.com/madanaman/neo4j.git
```

### Step 4: Test connection
In a seperate terminal, run below command
```sh
    cd neo4jtest/neo4j
    npm i
    node server.js test
```
If neo4j is running(Step1) and username and passwords have been kept as mentioned(Step2), then you should see message like below.

```sh
    data is  {
  "extensions" : { },
  "node" : "http://localhost:7474/db/data/node",
  "relationship" : "http://localhost:7474/db/data/relationship",
  "node_index" : "http://localhost:7474/db/data/index/node",
  "relationship_index" : "http://localhost:7474/db/data/index/relationship",
  "extensions_info" : "http://localhost:7474/db/data/ext",
  "relationship_types" : "http://localhost:7474/db/data/relationship/types",
  "batch" : "http://localhost:7474/db/data/batch",
  "cypher" : "http://localhost:7474/db/data/cypher",
  "indexes" : "http://localhost:7474/db/data/schema/index",
  "constraints" : "http://localhost:7474/db/data/schema/constraint",
  "transaction" : "http://localhost:7474/db/data/transaction",
  "node_labels" : "http://localhost:7474/db/data/labels",
  "neo4j_version" : "3.3.1"
}

```

## Usage example

### Insert Data
```sh
    node server.js insert
```

### Fetch Data
```sh
    node server.js fetch
```


## Meta

Aman Madan – [@amanmad1](https://twitter.com/amanmad1) – madan.aman@gmail.com
