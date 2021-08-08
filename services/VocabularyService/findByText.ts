import { execute } from "./connection";
import { EntryWrapperModel } from "./Model";

export async function findByText(
  text: string
): Promise<EntryWrapperModel | null> {
  const [result] = await execute<EntryWrapperModel>(
    `
        SELECT
            entry.*
        FROM entry_map
        JOIN entry ON entry.id = entry_map.entry_id
        WHERE
            entry_map.text = ?
        LIMIT 1`,
    [text, text]
  );

  return result ?? null;
}
