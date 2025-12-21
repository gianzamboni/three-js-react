import { levaStore } from "leva";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import styles from "./styles.module.css";
import { SketchyBorder } from "../sketchy-borders";

function getTopLevelFolder(path: string): string {
  const split = path.split(".");
  return split.length > 1 ? split[0] : "General";
}

function isColorString(value: unknown): value is string {
  return typeof value === "string" && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value);
}

function SketchyLevaPanel() {
  const [paths, setPaths] = useState<string[]>(() => levaStore.getVisiblePaths());
  const [isOpen, setIsOpen] = useState(false);
  const [tick, setTick] = useState(0);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPaths(levaStore.getVisiblePaths());
    const unsubPaths = levaStore.useStore.subscribe(levaStore.getVisiblePaths, setPaths);
    const unsubData = levaStore.useStore.subscribe(levaStore.getData, () => setTick((t) => t + 1));
    return () => {
      unsubPaths();
      unsubData();
    };
  }, []);

  const groups = useMemo(() => {
    const folderToPaths: Record<string, string[]> = {};
    paths.forEach((path) => {
      const folder = getTopLevelFolder(path);
      if (!folderToPaths[folder]) folderToPaths[folder] = [];
      folderToPaths[folder].push(path);
    });
    return folderToPaths;
  }, [paths]);

  const tabs = useMemo(() => Object.keys(groups), [groups]);

  // Initialize/maintain open state per group; default open the first one
  useEffect(() => {
    setOpenGroups((prev) => {
      const next: Record<string, boolean> = {};
      tabs.forEach((t, idx) => {
        next[t] = prev[t] ?? idx === 0;
      });
      return next;
    });
  }, [tabs]);

  // Close when clicking outside the bottom sheet
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (!isOpen) return;
      const root = panelRef.current;
      if (root && e.target && !root.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("pointerdown", handlePointerDown, { capture: true });
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown, { capture: true } as any);
    };
  }, [isOpen]);

  const handleChangeNumber = useCallback((path: string, next: number) => {
    levaStore.setValueAtPath(path, next, true);
  }, []);

  const handleChangeBoolean = useCallback((path: string, next: boolean) => {
    levaStore.setValueAtPath(path, next, true);
  }, []);

  const handleChangeString = useCallback((path: string, next: string) => {
    levaStore.setValueAtPath(path, next, true);
  }, []);

  const handleChangeSelect = useCallback((path: string, next: string | number) => {
    levaStore.setValueAtPath(path, next, true);
  }, []);

  const handleChangeVector = useCallback((path: string, key: string, next: number) => {
    const current = levaStore.get(path) || {};
    const updated = { ...current, [key]: next };
    levaStore.setValueAtPath(path, updated, true);
  }, []);

  const handleChangeInterval = useCallback((path: string, idx: 0 | 1, next: number) => {
    const current = (levaStore.get(path) as [number, number]) || [0, 0];
    const updated: [number, number] = idx === 0 ? [next, current[1]] : [current[0], next];
    levaStore.setValueAtPath(path, updated, true);
  }, []);

  const renderControl = (path: string) => {
    const input: any = (levaStore as any).getInput(path);
    if (!input) return null;

    const value = levaStore.get(path);
    const label: string = input.label || input.key || path.split(".").pop() || path;
    const disabled: boolean = !!(input.settings && input.settings.disabled);

    // Button-like special input
    if (typeof input.onClick === "function") {
      return <div key={path}>
        <label>{label}</label>
        <button onClick={() => input.onClick(levaStore.get)} disabled={disabled}>Run</button>
      </div>;
    }

    // Select
    const options = input.settings && input.settings.options;
    if (options && (Array.isArray(options) || typeof options === "object")) {
      const entries = Array.isArray(options) ? options.map((o: any) => [o, o]) : Object.entries(options);
      return <div key={path}>
        <label>{label}</label>
        <select
          disabled={disabled}
          value={value as any}
          onChange={(e) => handleChangeSelect(path, e.target.value)}
        >
          {entries.map(([optValue, optLabel]: any) => (
            <option key={String(optValue)} value={optValue as any}>{String(optLabel)}</option>
          ))}
        </select>
      </div>;
    }

    // Color
    if (isColorString(value)) {
      return <div key={path}>
        <label>{label}</label>
        <input
          type="color"
          disabled={disabled}
          value={value as string}
          onChange={(e) => handleChangeString(path, e.target.value)}
        />
      </div>;
    }

    // Interval [min, max]
    if (Array.isArray(value) && value.length === 2 && value.every((v) => typeof v === "number")) {
      return <div key={path}>
        <label>{label}</label>
        <div>
          <input
            type="number"
            disabled={disabled}
            value={value[0] as number}
            onChange={(e) => handleChangeInterval(path, 0, Number(e.target.value))}
          />
          <input
            type="number"
            disabled={disabled}
            value={value[1] as number}
            onChange={(e) => handleChangeInterval(path, 1, Number(e.target.value))}
          />
        </div>
      </div>;
    }

    if (value && typeof value === "object" && ("x" in (value as any) || "y" in (value as any) || "z" in (value as any))) {
      const vec = value as Record<string, number>;
      const axes = Object.keys(vec).filter((k) => typeof vec[k] === "number");
      return <div key={path}>
        <label>{label}</label>
        <div>
          {axes.map((axis) => (
            <span key={axis}>
              <span>{axis}</span>
              <input
                type="number"
                disabled={disabled}
                value={vec[axis] as number}
                onChange={(e) => handleChangeVector(path, axis, Number(e.target.value))}
              />
            </span>
          ))}
        </div>
      </div>;
    }

    // Boolean
    if (typeof value === "boolean") {
      return <div key={path}>
        <label>{label}</label>
        <input
          type="checkbox"
          disabled={disabled}
          checked={value}
          onChange={(e) => handleChangeBoolean(path, e.target.checked)}
        />
      </div>;
    }

    // Number
    if (typeof value === "number") {
      const min = input.settings && typeof input.settings.min === "number" ? input.settings.min : undefined;
      const max = input.settings && typeof input.settings.max === "number" ? input.settings.max : undefined;
      const step = input.settings && typeof input.settings.step === "number" ? input.settings.step : undefined;
      return <div key={path}>
        <label>{label}</label>
        <input
          type="number"
          disabled={disabled}
          value={value}
          min={min as any}
          max={max as any}
          step={step as any}
          onChange={(e) => handleChangeNumber(path, Number(e.target.value))}
        />
      </div>;
    }

    // String (fallback)
    if (typeof value === "string") {
      return <div key={path}>
        <label>{label}</label>
        <input
          type="text"
          disabled={disabled}
          value={value}
          onChange={(e) => handleChangeString(path, e.target.value)}
        />
      </div>;
    }

    // Unknown type: simple JSON viewer (read-only)
    return <div key={path}>
      <label>{label}</label>
      <pre>{JSON.stringify(value)}</pre>
    </div>;
  };

  const tabToOrderedPaths = useMemo(() => {
    const map: Record<string, string[]> = {};
    Object.keys(groups).forEach((tab) => {
      const current = groups[tab] || [];
      map[tab] = levaStore.orderPaths(current);
    });
    return map;
  }, [groups, tick]);

  const tabPanels = useMemo(() => {
    const map: Record<string, ReactNode> = {};
    Object.keys(tabToOrderedPaths).forEach((tab) => {
      const pathsForTab = tabToOrderedPaths[tab] || [];
      map[tab] = <div key={tab} className={styles["tab-panel"]}>{pathsForTab.map((p) => renderControl(p))}</div>;
    });
    return map;
  }, [tabToOrderedPaths]);

  const toggleGroup = (tab: string) => {
    setOpenGroups((prev) => ({ ...prev, [tab]: !prev[tab] }));
  };

  return 
    <div ref={panelRef}>
      <SketchyBorder 
        className={`${styles["controls-container"]} 
        ${isOpen ? styles["active"] : styles["inactive"]}`} 
        baseStrokeWidth="md" 
        hiddenSides={["bottom", "left", "right"]}
      > 
      <div className={styles["sticky-safe-bar"]} />
      <div className={styles["tab-panel-container"]}>
        {tabs.map((tab) => (
          <div key={tab}>
            <button onClick={() => toggleGroup(tab)} aria-expanded={!!openGroups[tab]}>
              {tab}
            </button>
            {openGroups[tab] ? tabPanels[tab] : null}
          </div>
        ))}
      </div>
      </SketchyBorder>
    </div>
}

export default SketchyLevaPanel;


