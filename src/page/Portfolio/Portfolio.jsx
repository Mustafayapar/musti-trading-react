import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableHead, TableHeader, TableRow, TableCell } from '@/components/ui/table'
import { getUserAssets } from '@/State/Asset/Action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Portfolio = () => {
  const dispatch = useDispatch();
  const { asset } = useSelector(store => store);

  useEffect(() => {
    dispatch(getUserAssets({ jwt: localStorage.getItem("jwt") }));
  }, [dispatch]);

  console.log("asseto", asset);

  return (
    <div className="p-5 lg:p-20 pb-4">
      <h1 className="font-bold text-3xl">Portfolio</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Asset</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Change%</TableHead>
            <TableHead className="text-right">Volume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {asset.userAssets?.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar>
                  <AvatarImage src={item.coin.image} />
                </Avatar>
                <span>{item.coin.name}</span>
              </TableCell>
              <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.coin.current_price.toLocaleString()}</TableCell>
              <TableCell
                className={
                  item.coin.price_change_24h > 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {item.coin.price_change_24h.toFixed(2)}
              </TableCell>
              <TableCell
                className={
                  item.coin.price_change_percentage_24h > 0
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {item.coin.price_change_percentage_24h.toFixed(2)}%
              </TableCell>
              <TableCell className="text-right">
                ${item.coin.total_volume.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
