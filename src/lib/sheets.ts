/**
 * GOOGLE APPS SCRIPT SETUP INSTRUCTIONS:
 * 1. Open Google Sheets (https://sheets.google.com) and create a new Spreadsheet.
 * 2. Set Row 1 headers: Client Name | Location | Project Type | Status | Progress | Deadline | Notes
 * 3. Add row data e.g.:
 *    Ramrao Patil | Sangamner | Kirana Store App | Working | 75 | 2026-07-26 | Marathi scanner done
 *    John Smith   | USA       | SaaS AI Dashboard | Working | 50 | 2026-07-28 | Next.js APIs setup
 * 4. Go to Extensions > Apps Script and paste the following code:
 *
 * ```javascript
 * function doGet(e) {
 *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *   var data = sheet.getDataRange().getValues();
 *   var headers = data[0];
 *   var rows = data.slice(1);
 *   var json = rows.map(function(row) {
 *     var obj = {};
 *     headers.forEach(function(header, i) {
 *       obj[header.toString().trim()] = row[i];
 *     });
 *     return obj;
 *   });
 *   return ContentService.createTextOutput(JSON.stringify(json))
 *     .setMimeType(ContentService.MimeType.JSON);
 * }
 * ```
 * 5. Click Deploy > New Deployment > Select Web App.
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 6. Copy Web App URL and add to .env file:
 *    NEXT_PUBLIC_SHEETS_API_URL="https://script.google.com/macros/s/..."
 */

export interface SheetProjectRow {
  'Client Name': string;
  Location: string;
  'Project Type': string;
  Status: string;
  Progress: number | string;
  Deadline: string;
  Notes?: string;
}

const FALLBACK_MOCK_DATA: SheetProjectRow[] = [
  {
    'Client Name': 'रामभाऊ पाटील (Ramrao Patil)',
    Location: 'Sangamner, Maharashtra 🌾',
    'Project Type': 'Rural E-Commerce & Billing App',
    Status: 'Working',
    Progress: 75,
    Deadline: '2026-07-26',
    Notes: 'मराठी बारकोड स्कॅनर व बिलिंग मोड्यूल पूर्ण.',
  },
  {
    'Client Name': 'John Smith (Apex Cloud)',
    Location: 'San Francisco, USA 🇺🇸',
    'Project Type': 'Enterprise Agentic AI Pipeline',
    Status: 'Working',
    Progress: 50,
    Deadline: '2026-07-28',
    Notes: 'Next.js 14 APIs and serverless integration.',
  },
  {
    'Client Name': 'विजय ट्रॅव्हल्स (Vijay Travels)',
    Location: 'Pune / Mumbai Corridor 🇮🇳',
    'Project Type': 'Bus Booking & GPS App',
    Status: 'Completed',
    Progress: 100,
    Deadline: '2026-07-18',
    Notes: 'Live GPS location tracking active.',
  },
  {
    'Client Name': 'गणेश डेअरी फॉर्म्स (Ganesh Dairy)',
    Location: 'Shirala, Sangli 🇮🇳',
    'Project Type': 'Milk Collection WhatsApp App',
    Status: 'Pending',
    Progress: 15,
    Deadline: '2026-07-30',
    Notes: 'Awaiting farmer list verification.',
  },
];

const LOCAL_STORAGE_KEY = 'worldfolio_x_sheets_cache_v1';

export async function fetchLiveSheetProjects(): Promise<{
  data: SheetProjectRow[];
  fromCache: boolean;
  lastUpdated: string;
}> {
  const apiUrl = process.env.NEXT_PUBLIC_SHEETS_API_URL;

  if (!apiUrl) {
    // Return mock data with localStorage caching fallback
    return {
      data: FALLBACK_MOCK_DATA,
      fromCache: true,
      lastUpdated: new Date().toLocaleTimeString(),
    };
  }

  try {
    const res = await fetch(apiUrl, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch Google Sheet API');

    const json = await res.json();
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(json));
    }

    return {
      data: json,
      fromCache: false,
      lastUpdated: new Date().toLocaleTimeString(),
    };
  } catch (err) {
    // Fallback to offline localStorage cache
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (cached) {
        return {
          data: JSON.parse(cached),
          fromCache: true,
          lastUpdated: 'Cached Offline',
        };
      }
    }

    return {
      data: FALLBACK_MOCK_DATA,
      fromCache: true,
      lastUpdated: new Date().toLocaleTimeString(),
    };
  }
}
