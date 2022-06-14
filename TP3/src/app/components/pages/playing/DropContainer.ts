export class DropContainer {
  container: Path2D
  context: CanvasRenderingContext2D

  constructor(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) {
    this.context = context
    this.container = new Path2D()
    this.container.rect(x, y, w, h)
  }

  draw(): void {
    this.context.stroke(this.container)
  }

  isPointInPath(x: number, y: number): boolean {
    return this.context.isPointInPath(this.container, x, y)
  }
}
