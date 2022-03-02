export type colorStyleType = {
    [_index in Color]?: string;
  };

export type Color =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'main'
  | 'error'
  | 'warning'
  | 'success'
  | 'fourth'
  | 'txt-secondary'
  | 'none';
