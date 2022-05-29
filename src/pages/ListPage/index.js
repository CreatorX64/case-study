import React from "react";

import { StyledWrapper } from "pages/ListPage/styles";
import List from "components/List";
import CartTotal from "components/CartTotal";

class ListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      villas: [],
      isFetchPending: false,
      isFetchFailed: false
    };
  }

  componentDidMount() {
    this.setState({ isFetchPending: true });

    fetch("http://localhost:8181/villas")
      .then((res) => res.json())
      .then((data) => this.setState({ villas: data }))
      .catch(() => this.setState({ isFetchFailed: true }))
      .finally(() => this.setState({ isFetchPending: false }));
  }

  render() {
    const { isFetchPending, isFetchFailed, villas } = this.state;

    return (
      <div>
        {isFetchPending && <p>Loading...</p>}

        {isFetchFailed && <p>There was an error :(</p>}

        {!isFetchPending && !isFetchFailed && (
          <StyledWrapper>
            <List items={villas} />
            <CartTotal />
          </StyledWrapper>
        )}
      </div>
    );
  }
}

export default ListPage;
