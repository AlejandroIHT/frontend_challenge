export interface HeaderProps {
  title: string;
  icon: any;
  status: string;
  className?: string;
}

export interface BodyProps {
  className?: string;
}

export interface MainInformationProps {
  className?: string;
}

export interface ImageProps {
  src: string;
  alt: string;
}

export interface MainTitleProps {
  title: string;
}

export interface DescriptionProps {
  className?: string;
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}