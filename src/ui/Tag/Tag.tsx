import classNames from 'classnames';
import React from 'react';
import './Tag.css';

export enum TagType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface TagProps {
  className?: string;
  type: TagType;
}

const Tag: React.FC<TagProps> = ({ children, type, className }) => {
  const tagType = `tag--${type}`;
  return (
    <span className={classNames('tag', tagType, className)}>{children}</span>
  );
};

export default Tag;
