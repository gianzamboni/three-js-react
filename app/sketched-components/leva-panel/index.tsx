import { LevaPanel, levaStore, useControls } from "leva";
import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import type { DataItem } from "leva/dist/declarations/src/types";

export default function SketchyLevaPanel() {

  const data = levaStore.useStore(s => s.data);
  let [activeFolder, setActiveFolder] = useState<string | null>(null);
  
  const folders = useMemo(() => {
    const folders = new Map<string, DataItem[]>();
    folders.set("Settings", []);

    for (const key of Object.keys(data)) {
      if (key.includes(".")) {
        const folderName = key.split(".")[0];
        if(!folders.has(folderName)) {
          folders.set(folderName, []);
        }
        folders.get(folderName)!.push(data[key]);
      } else {
       folders.get("Settings")!.push(data[key]);
      }
    }

    if(folders.get("Settings")!.length === 0) {
      folders.delete("Settings");
    }

    return folders;
  }, [data]);

  console.log(folders);

  return <div className={`${styles["bottom-panel"]} ${activeFolder != null ? styles["active"] : styles["non-active"]}`}>
    {Array.from(folders.entries()).map(([folder, items]) => (
      <div key={folder} className={styles.folder}>
        <h2>{folder}</h2>
      </div>
    ))}
    <LevaPanel store={levaStore} flat titleBar={false} />
  </div>;
}


