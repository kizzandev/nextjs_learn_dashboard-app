// node -r dotenv/config ./scripts/removeUsers.js

const { db } = require('@vercel/postgres');

async function removeUsers(client) {
  try {
    await client.sql`DROP TABLE IF EXISTS users`;
    console.log(`Removed "users" table`);
  } catch (error) {
    console.error('Error removing users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await removeUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
