const Pulsar = require('pulsar-client');

(async () => {
  const client = new Pulsar.Client({
    serviceUrl: 'pulsar://pulsar:6650',
  });

  // Create a consumer
  const consumer = await client.subscribe({
    topic: 'my-topic',
    subscription: 'my-subscription',
    subscriptionType: 'Exclusive',
  });

  // Receive messages
  for (let i = 0; i < 10; i += 1) {
    const msg = await consumer.receive();
    console.log(msg.getData().toString());
    consumer.acknowledge(msg);
  }
  
  await consumer.close();
  await client.close();
})();