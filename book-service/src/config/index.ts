export default () => ({
  broker: process.env.BROKER ?? 'broker:9092',
  services: {
    book: {
      clientId: 'book',
      groupId: 'book',
      name: 'book-kafka-client',
    },
    payment: {
      clientId: 'payment',
      groupId: 'payment',
      name: 'payment-kafka-client',
    },
    event: {
      clientId: 'event',
      groupId: 'event',
      name: 'event-kafka-client',
    },
  },
});
