function isExclude(name: string, exclude: string | RegExp | (string | RegExp)[] | undefined): boolean {
  if (typeof exclude === 'string') return name === exclude;

  if (exclude instanceof RegExp) return !!name.match(exclude);

  if (Array.isArray(exclude)) {
    for (const item of exclude) {
      if (name === item || name.match(item)) return true;
    }
  }
  return false;
}

export { isExclude };
