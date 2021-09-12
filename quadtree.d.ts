export as namespace Quadtree;

export = Quadtree;

declare class Quadtree<T extends Quadtree.Rect = Quadtree.Rect> {
    constructor (bounds: Quadtree.Rect, max_objects?: number, max_levels?: number, level?: number);
    max_objects: number;
    max_levels: number;
    level: number;
    bounds: Quadtree.Rect;
    objects: T[];
    nodes: Quadtree<T>[];

  split(): void
  getIndex(pRect: Quadtree.Rect): number[]
  insert(pRect: T): void
  retrieve(pRect: Quadtree.Rect): T[]
  clear(): void
}

declare namespace Quadtree {
    export interface Rect {
        x: number
        y: number
        width: number
        height: number
    }
}
