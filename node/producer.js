const Pulsar = require('pulsar-client');

(async () => {

  const client = new Pulsar.Client({
    serviceUrl: 'pulsar://pulsar:6650',
  });
  const producer = await client.createProducer({
    topic: 'my-topic',
  });

  // await producer.send({
  //   data: Buffer.from("Hello, Pulsar"),
  // });

  // Send messages
  for (let i = 0; i < 10; i += 1) {
    const msg = `node-message-${i}`;
    producer.send({
      data: Buffer.from(msg),
    });
    console.log(`Sent message: ${msg}`);
  }

  await producer.close();
  await client.close();
})();