import fs from "fs/promises";
import path from "path";

export function getFilePath(fileName) {
    return path.join(process.cwd(), "api", `${fileName}.json`);
}

export async function getFileData(filePath) {
    return await JSON.parse(await fs.readFile(filePath, "utf8"));
}
