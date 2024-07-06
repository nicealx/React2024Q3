import { Component, ReactNode } from 'react';
import './error.css';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  handleError = () => {
    this.setState({ hasError: false });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error">
          <h1 className="error__title">Sorry... there was an error</h1>
          <button className="error__button" onClick={this.handleError}>
            Back
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
