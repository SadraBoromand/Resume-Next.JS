import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'info-data.json');

export default function getInformation() {
    const fileContnet = fs.readFileSync(filePath, 'utf-8');
    const info = JSON.parse(fileContnet);
    return info;
}