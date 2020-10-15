FROM node:14.13.1-buster

WORKDIR /var/app

ENV PULSAR_VERSION=2.6.1

RUN wget --user-agent=Mozilla -O apache-pulsar-client.deb "https://archive.apache.org/dist/pulsar/pulsar-${PULSAR_VERSION}/DEB/apache-pulsar-client.deb" \
  && wget --user-agent=Mozilla -O apache-pulsar-client-dev.deb "https://archive.apache.org/dist/pulsar/pulsar-2.6.1/DEB/apache-pulsar-client-dev.deb" \
  && apt install -y ./apache-pulsar-client.deb \
  && apt install -y ./apache-pulsar-client-dev.deb

RUN rm ./apache-pulsar-client.deb \
  && rm ./apache-pulsar-client-dev.deb

ENTRYPOINT ["bash"]
