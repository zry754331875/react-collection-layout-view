export const hasColider = (a, b) => {
    let ax = a.offsetLeft;

    let ay = a.offsetTop;

    let aw = a.offsetWidth;

    let ah = a.offsetHeight;

    let bx = b.offsetLeft;

    let by = b.offsetTop;

    let bw = b.offsetWidth;

    let bh = b.offsetHeight;

    return ax + aw > bx && ax < bx + bw && ay + ah > by && ay < by + bh;
};