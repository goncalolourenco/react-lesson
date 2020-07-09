import React from 'react';
import _ from 'lodash';

export const withApiQuery = (Component, mapStateToProps) => {
  class WrappedComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading: false,
        error: null,
        data: null,
      };
    }

    fetchQuery = async () => {
      const { fetchFunction, params } = this.props;

      if (fetchFunction) {
        try {
          this.setState({ isLoading: true, error: null });
          const data = await fetchFunction(params);
          this.setState({ data, isLoading: false });
        } catch (error) {
          this.setState({
            isLoading: false,
            error: 'The request has failed',
          });
        }
      }
    };

    async componentDidMount() {
      await this.fetchQuery();
    }

    async componentDidUpdate(prevProps) {
      if (
        !_.isEqual(prevProps.params, this.props.params) ||
        prevProps.fetchFunction !== this.props.fetchFunction
      ) {
        await this.fetchQuery();
      }
    }

    render() {
      const { fetchFunction, params, ...rest } = this.props;

      return <Component {...rest} {...mapStateToProps(this.state)} />;
    }
  }

  return WrappedComponent;
};

export default withApiQuery;
