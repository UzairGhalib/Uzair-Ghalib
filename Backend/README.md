Backend setup
=============

1. Copy `.env.example` to `.env` and replace `<db_password>` with your MongoDB password. If the password contains special characters, percent-encode it (use `encodeURIComponent` or an online encoder).

2. Install dependencies and run the server in development mode:

```bash
cd Backend
npm install
npm run dev
```

3. Notes
- The app reads the connection string from the `MONGO_URI` environment variable.
- Do NOT commit your `.env` file to version control.
- If your environment or network blocks SRV DNS lookups, you can set `MONGO_FALLBACK_URI`.
