export type Mods = Record<string, boolean>

export const classNames = (cls: string, mods?: Record<string, boolean>, addn: string[] = []) => {
  return [
    cls,
    ...Object.entries(mods || {})
      .filter(([_, value]) => Boolean(value))
      .map(([key]) => key),
    ...addn
  ].join(" ");
};
