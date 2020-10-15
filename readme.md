## Pulsar
This is a repo to try pulsar

### C++ library for nodejs client

[install c++ library on ubuntu](https://stackoverflow.com/questions/59894670/installing-node-js-pulsar-client-on-ubuntu)

https://www.bookstack.cn/read/pulsar-2.5.2-zh/3c29a926ef49aeab.md

### how to install dependency in ubuntu
```
wget --user-agent=Mozilla -O apache-pulsar-client.deb "https://archive.apache.org/dist/pulsar/pulsar-2.6.1/DEB/apache-pulsar-client.deb"

wget --user-agent=Mozilla -O apache-pulsar-client-dev.deb "https://archive.apache.org/dist/pulsar/pulsar-2.6.1/DEB/apache-pulsar-client-dev.deb"
```

```
apt install -y ./apache-pulsar-client.deb
apt install -y ./apache-pulsar-client-dev.deb
```

### run pulsar server
```
docker run -it \
  -p 6650:6650 \
  -p 8080:8080 \
  --mount source=pulsardata,target=/pulsar/data \
  --mount source=pulsarconf,target=/pulsar/conf \
  apachepulsar/pulsar:2.6.1 \
  bin/pulsar standalone
```

### run docker build
docker build -t node-pulsar -f ./pulsar-node.dockerfile .

docker run -it -v $(pwd):/var/app --network="host" node-pulsar 

### use docker compose
docker-compose up
