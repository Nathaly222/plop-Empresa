export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      url:
        process.env.DATABASE_URL ||
        'postgresql://postgres:0301601282l-L@localhost:5432/empresaplop',
    },
  });