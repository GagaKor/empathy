export default () => ({
  PORT: parseInt(process.env.PORT || '3000', 10),
  SESSION_SECRET: process.env.SESSION_SECRET,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  DATABASE_URL: process.env.DATABASE_URL,
});
