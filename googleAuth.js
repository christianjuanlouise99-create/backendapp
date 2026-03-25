// Prefer env vars so secrets/config aren't committed to source control.
// CRA (client) only exposes env vars that start with `REACT_APP_`.
// If this module is used server-side, you can also set `GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET`.
const GOOGLE_CLIENT_ID =
  process.env.REACT_APP_GOOGLE_CLIENT_ID ?? process.env.GOOGLE_CLIENT_ID;

const GOOGLE_CLIENT_SECRET =
  process.env.REACT_APP_GOOGLE_CLIENT_SECRET ?? process.env.GOOGLE_CLIENT_SECRET;

if (!GOOGLE_CLIENT_ID) {
  console.warn(
    "Missing GOOGLE client id. Set REACT_APP_GOOGLE_CLIENT_ID (or GOOGLE_CLIENT_ID)."
  );
}

if (!GOOGLE_CLIENT_SECRET) {
  console.warn(
    "Missing GOOGLE client secret. Set REACT_APP_GOOGLE_CLIENT_SECRET (or GOOGLE_CLIENT_SECRET)."
  );
}

export { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET };