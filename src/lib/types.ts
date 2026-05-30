// ─── Tool & Conversion Type Definitions ───

/** A single PDF tool */
export interface ToolMeta {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  keywords: string[];
  category: ToolCategory;
  icon: string; // emoji or icon name
  isNew?: boolean;
  isPro?: boolean;
  /** Whether this tool requires a backend server */
  requiresServer?: boolean;
}

/** Categories for grouping tools */
export type ToolCategory =
  | "organize"
  | "optimize"
  | "convert"
  | "edit"
  | "security"
  | "intelligence"
  | "workflow";

export const CATEGORY_LABELS: Record<ToolCategory, string[]> = {
  organize: ["Organize PDF", "PDF 组织"],
  optimize: ["Optimize PDF", "PDF 优化"],
  convert: ["Convert PDF", "PDF 转换"],
  edit: ["Edit PDF", "PDF 编辑"],
  security: ["PDF Security", "PDF 安全"],
  intelligence: ["PDF Intelligence", "PDF 智能"],
  workflow: ["Workflows", "工作流"],
};

/** A format conversion pair (for programmatic SEO) */
export interface ConversionPair {
  slug: string; // e.g. "pdf-to-word"
  from: FormatDef;
  to: FormatDef;
  /** Whether this direction is feasible pure-client-side */
  clientSide: boolean;
  /** Quality level: 1-5 */
  quality: number;
}

export interface FormatDef {
  ext: string;
  name: string;
  mime: string;
  category: "document" | "image" | "ebook" | "data" | "web" | "office" | "vector";
}

/** Size presets for image/compress tools */
export interface SizePreset {
  label: string;
  width: number;
  height?: number;
}

/** Language definition for i18n */
export interface LocaleDef {
  code: string;
  label: string;
  dir: "ltr" | "rtl";
}
