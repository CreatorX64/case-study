import { useEffect, useState } from "react";
import List from "components/List";
import CartTotal from "components/CartTotal";

import { StyledWrapper } from "pages/ListPage/styles";

const ListPage = () => {
  const [villas, setVillas] = useState([]);
  const [isFetchPending, setIsFetchPending] = useState(false);
  const [isFetchFailed, setIsFetchFailed] = useState(false);

  useEffect(() => {
    setIsFetchPending(true);

    fetch("http://localhost:8181/villas")
      .then((res) => res.json())
      .then((data) => setVillas(data))
      .catch(() => setIsFetchFailed(true))
      .finally(() => setIsFetchPending(false));
  }, []);

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
};

export default ListPage;
