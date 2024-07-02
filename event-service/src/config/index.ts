export default () => ({
  broker: process.env.BROKER ?? 'broker:9092',
  services: {
    event: {
      clientId: 'event',
      groupId: 'event',
      name: 'event-kafka-client',
    },
  },
});
