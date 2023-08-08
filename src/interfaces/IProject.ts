export default interface Project {
  id: number;
  image: string;
  name: string;
  ownerId: number;
  repository: string;
  type: string;
  url: string;
  visible: boolean;
  position: number;
}