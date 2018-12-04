function merge(as, bs) {
  const merged = [];
  let ia = 0;
  let next_a = as.length ? as[0] : null;
  let ib = 0;
  let next_b = bs.length ? bs[0] : null;
  while (next_a !== null && next_b !== null) {
    if (next_a < next_b) {
      merged.push(next_a);
      ia++;
      next_a = ia < as.length ? as[ia] : null;
    } else {
      merged.push(next_b);
      ib++;
      next_b = ib < bs.length ? bs[ib] : null;
    }
  }
  if (next_a !== null) {
    merged.push(...as.slice(ia));
  }
  if (next_b !== null) {
    merged.push(...bs.slice(ib));
  }
  return merged;
}

function merge_sort(xs) {
  if (xs.length < 2) { return xs.slice(); }
  const mid = Math.floor(xs.length / 2);
  return merge(
      merge_sort(xs.slice(0, mid)), merge_sort(xs.slice(mid))
  );
}
console.log(merge_sort([1, 3, 7, 2, -1, 9, 5, 3,2, 4]))

function sorted(xs) {
  if (xs.length === 0) { return true; }
  for (let i = 1; i < xs.length; i++) {
    if (xs[i-1] > xs[i]) { return false; }
  }
  return true;
}
