// GET and POST
import { google } from 'googleapis';

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const range = 'Novedades!A2:F'; // Asegurate que tu hoja se llame así

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range,
    });

    const rows = response.data.values || [];

    const news = rows.map((row, index) => ({
      id: index + 1,
      title: row[0],
      date: row[1],
      images: row[2]?.split(',') || [],
      link: row[3],
      btn: row[4] || 'Más info',
    })).reverse()

    res.status(200).json(news);
  } catch (err) {
    console.error('ERROR: Failed to fetch news', err);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
};
