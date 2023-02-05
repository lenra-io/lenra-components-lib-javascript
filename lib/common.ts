export function all<T>(value: T) {
  return {
    top: value,
    bottom: value,
    left: value,
    right: value,
  };
}

export function symmetric<T>(horizontal: T, vertical: T) {
  return {
    top: vertical,
    bottom: vertical,
    left: horizontal,
    right: horizontal,
  };
}
