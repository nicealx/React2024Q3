import React from 'react';

interface INotFound {
  searchText: string;
}

export class NotFound extends React.Component<INotFound> {
  render() {
    return <h2>Nothing was found for the query "{this.props.searchText}"</h2>;
  }
}
