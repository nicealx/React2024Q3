import { Component } from 'react';

interface INotFound {
  searchText: string;
}

export class NotFound extends Component<INotFound> {
  render() {
    return <h2>Nothing was found for the query "{this.props.searchText}"</h2>;
  }
}
