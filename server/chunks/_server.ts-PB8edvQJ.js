import { e as error } from './index-Oq-cASmF.js';
import fs from 'fs';
import path from 'path';

const GET = async () => {
  try {
    const filePath = path.join(process.cwd(), "static", "resume.pdf");
    const fileBuffer = await fs.promises.readFile(filePath);
    return new Response(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="alex-hanson-resume.pdf"'
        // CORS headers if needed
        // 'Access-Control-Allow-Origin': '*',
        // Cache for 1 hour
        // 'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (err) {
    console.error("Error serving resume:", err);
    throw error(404, "Resume not found");
  }
};

export { GET };
//# sourceMappingURL=_server.ts-PB8edvQJ.js.map
