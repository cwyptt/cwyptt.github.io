import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export const prerender = true;

export const GET: RequestHandler = async () => {
	try {
		// const filePath = path.join(process.cwd(), 'static/resources', 'resume.pdf');
		const filePath = path.join(process.cwd(), `/static/resources`, 'resume.pdf');
		// const response = await fetch(`${base}/static/resources/resume.pdf`);
		const fileBuffer = await fs.promises.readFile(filePath);
		// const fileBuffer = await response.arrayBuffer();

		return new Response(fileBuffer, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': 'inline; filename="alex-hanson-resume.pdf"',
				'Cache-Control': 'public, max-age=3600',
			}
		});
	} catch (err) {
		console.error('Error serving resume:', err);
		throw error(404, 'Resume not found');
	}


}