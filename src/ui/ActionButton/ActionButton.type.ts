export enum ActionButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  typeButton: ActionButtonType.PRIMARY | ActionButtonType.SECONDARY;
}