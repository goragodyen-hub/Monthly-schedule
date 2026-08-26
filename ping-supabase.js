// Script to ping Supabase database to keep the project active (prevent 7-day auto-pause)
const SUPABASE_URL = "https://mtiwsevffkprantndulm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10aXdzZXZmZmtwcmFudG5kdWxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY2MjU3NDEsImV4cCI6MjEwMjIwMTc0MX0.cPStzOS-Ua6S_4ZS_bLSLn_rxzKsG28JwXZclvHwzX0";

async function keepAlive() {
  console.log("📡 Sending keep-alive ping request to Supabase...");
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/officers?select=emp_id&limit=1`, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json"
      }
    });

    if (res.ok) {
      const data = await res.json();
      console.log("✅ Supabase Keep-Alive Success! Database is active.");
      console.log("📊 Response sample:", JSON.stringify(data));
      console.log("⏰ Resetted 7-day auto-pause timer at:", new Date().toLocaleString());
    } else {
      console.error("❌ Supabase Keep-Alive Failed:", res.status, res.statusText);
    }
  } catch (err) {
    console.error("❌ Error sending request to Supabase:", err);
  }
}

keepAlive();
