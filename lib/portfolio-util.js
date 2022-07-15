import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'portfolio-data.json');

export default async function getPortfolio() {
    const fileContent = await fs.readFileSync(filePath);
    return JSON.parse(fileContent);
}