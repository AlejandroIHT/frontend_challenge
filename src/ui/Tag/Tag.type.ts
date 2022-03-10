export enum TagType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface TagProps {
  className?: string;
  type: TagType;
}