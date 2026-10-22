"use strict";

export class LayerCollection {
    list = new Array<Layer>();
    layer: Layer;

    constructor(layer: Layer) {
        this.layer = layer;
    }

    add(layer: Layer) {
        layer.setParent(this.layer);
        this.list.push(layer);
        console.log(this.list.length)
    }

    remove(layer: Layer): void {
        const index = this.getLayerIndex(layer);

        if (index !== -1) {
            this.list.splice(index, 1);
            layer.setParent(null);
        }
    }

    getLayerIndex(layer: Layer): number {
        return this.list.indexOf(layer);
    }

    getCount(): number {
        return this.list.length;
    }
}

export class Layer {
    parent: Layer | null = null;
    visible: boolean = true;
    canvas: HTMLCanvasElement | null = null;
    children: LayerCollection;

    constructor(x: number, y:number, width: number, height: number) {
        this.children = new LayerCollection(this);
    }

    setParent(parent: Layer | null): void {
        this.parent = parent;
    }

    getParent(): Layer | null {
        return this.parent;
    }

    getChildren(): LayerCollection {
        return this.children;
    }
}