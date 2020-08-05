import * as React from 'react';

interface Props {
  error: string;
}

const FavoritesEmpty = (props: Props) => {
  const {error} = props;
  return (
    <div className="api-error-message">
      {error}
    </div>
  );
};

export default FavoritesEmpty;
