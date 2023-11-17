import { useGetCoins } from "@entities/Coin";
import { useDebounceValue } from "@shared/hooks/useDebounceValue";
import { Button } from "@shared/ui/Button";
import { Input } from "@shared/ui/Input/Input";

import { CoinCardWithFeatures } from "@widgets/CoinCardWithFeatures";
import React, { useState } from "react";

export const Coins = () => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const debouncedSearch = useDebounceValue(search, 300);

  const { data, fetchNextPage, hasNextPage } = useGetCoins({
    search: debouncedSearch,
    limit: 5,
  });

  const handleLoadMore = async () => {
    await fetchNextPage();
  };

  const pages = data?.pages;

  return (
    <div>
      <Input value={search} onChange={handleChangeSearch} />

      {pages &&
        pages.map(({ coins }, index) => {
          return (
            <React.Fragment key={index}>
              {coins.map((coin) => {
                return <CoinCardWithFeatures coin={coin} key={coin.id} />;
              })}
            </React.Fragment>
          );
        })}

      {hasNextPage && <Button onClick={handleLoadMore}>load more</Button>}
    </div>
  );
};
