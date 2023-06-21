export interface DefaultLink {
  name: string
  url: string
  type: string
}

export interface Project {
  id: number
  image: string
  name: string
  ownerId: number
  repository: string
  type: string
  url: string
  visible: boolean
  position: number
}
