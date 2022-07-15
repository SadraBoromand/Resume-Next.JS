import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'skill-data.json');

export default function getAllSkills() {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const skillsContent = JSON.parse(fileContent);
    return skillsContent;
}