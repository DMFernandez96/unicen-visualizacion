import { Entity } from './Entity'

export class Zombie extends Entity {
  type: string

  constructor(id: string, type: string) {
    super(id)
    this.type = type
  }
}
