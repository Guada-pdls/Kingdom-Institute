// // // UPDATE and DELETE

// // import { google } from 'googleapis';
// // import { parse } from 'cookie';
// // import jwt from 'jsonwebtoken';

// // export default async function handler(req, res) {
// //   console.info('llega?')
// //   const {
// //     query: { rowId },
// //     method,
// //   } = req;

// //   const sheetId = process.env.GOOGLE_SHEET_ID;
// //   const rowNumber = parseInt(rowId) + 1;

// //   if (isNaN(rowNumber) || rowNumber < 2) {
// //     return res.status(400).json({ error: 'Invalid row ID' });
// //   }

// //   const auth = new google.auth.GoogleAuth({
// //     credentials: {
// //       client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
// //       private_key: process.env.GOOGLE_SERVICE_ACCOUNT_KEY.replace(/\\n/g, '\n'),
// //     },
// //     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
// //   });

// //   const sheets = google.sheets({ version: 'v4', auth });

// //   const authenticate = () => {
// //     const cookies = parse(req.headers.cookie || '');
// //     const token = cookies.auth_token;
// //     if (!token) throw new Error('Unauthorized');
// //     jwt.verify(token, process.env.JWT_SECRET);
// //   };

// //   if (method === 'PUT') {
// //     try {
// //       authenticate();

// //       const { title, date, images, imagesDescriptions, link, btn = 'Más info' } = req.body;

// //       const row = [
// //         title || '',
// //         date || '',
// //         Array.isArray(images) ? images.join(',') : '',
// //         Array.isArray(imagesDescriptions) ? imagesDescriptions.join('-') : '',
// //         link || '',
// //         btn,
// //       ];

// //       const updateRange = `NovedadesTest!A${rowNumber}:F${rowNumber}`;

// //       await sheets.spreadsheets.values.update({
// //         spreadsheetId: sheetId,
// //         range: updateRange,
// //         valueInputOption: 'RAW',
// //         requestBody: { values: [row] },
// //       });

// //       console.info(`INFO: Row ${rowId} updated successfully`);
// //       return res.status(200).json({ success: true });
// //     } catch (err) {
// //       console.error('ERROR: Failed to update row', err.message);
// //       return res.status(401).json({ error: err.message });
// //     }
// //   }

// //   res.status(405).json({ error: 'Method not allowed' });
// // }

// export default function handler(req, res) {
//   console.log("Llega a la función dinámica");
//   res.status(200).json({ ok: true, id: req.query?.rowId });
// }