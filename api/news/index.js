// GET and POST
import { google } from 'googleapis';
import { parse } from 'cookie';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const range = 'Novedades!A2:F';

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  if (req.method === 'GET') {
    try {
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
        imagesDescriptions: row[3]?.split('-') || [],
        link: row[4],
        btn: row[5] || 'Más info',
      })).reverse();

      return res.status(200).json(news);
    } catch (err) {
      console.error('ERROR: Failed to fetch news', err);
      return res.status(500).json({ error: 'Failed to fetch news' });
    }
  }

  if (req.method === 'POST') {
    const cookies = parse(req.headers.cookie || '');
    const token = cookies.auth_token;

    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const { title, date, images, imagesDescriptions, link, btn = 'Más info' } = req.body;

    if (!title || !date || !images || !imagesDescriptions || !link || !btn) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const row = [
        title,
        date,
        Array.isArray(images) ? images.join(',') : '',
        Array.isArray(imagesDescriptions) ? imagesDescriptions.join('-') : '',
        link || '',
        btn,
      ];

      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: 'Novedades!A:F',
        valueInputOption: 'RAW',
        requestBody: { values: [row] },
      });

      console.info('INFO: Row appended successfully');
      return res.status(201).json({ success: true });
    } catch (err) {
      console.error('ERROR: Failed to append row', err);
      return res.status(500).json({ error: 'Failed to append row' });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
}
