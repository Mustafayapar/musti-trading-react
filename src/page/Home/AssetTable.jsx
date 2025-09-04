import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Table, TableBody, TableCaption,TableCell,TableHead,TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'
 import { useNavigate } from 'react-router-dom'
 

const AssetTable = ({ coin,category } ) => {

   const navigate= useNavigate();

   console.log("coin prop geldi mi:", coin);
  return (
    
    
 <ScrollArea  className={`${category ===""?"h-[v77h]":"h-[82vh] rounded-md border p-4"}`}>
 <Table>
 <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Coin</TableHead>
      <TableHead>SYMBOL</TableHead>
      <TableHead>VOLUME</TableHead>
      <TableHead>MARKET CAP</TableHead>
      <TableHead>24h</TableHead>
 
      <TableHead className="text-right">PRICE</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
  {coin?.map((item) => (
    <TableRow key={item.id}>
      <TableCell onClick={()=>navigate(`/market/${item.id}`)} className="font-medium flex items-center gap-2">
        <Avatar> 
          <AvatarImage src={item.image} />
        </Avatar>
        <span>{item.name}</span>
      </TableCell>
      <TableCell>{item.symbol.toUpperCase()}</TableCell>
      <TableCell>{item.total_volume}</TableCell>
      <TableCell>{item.market_cap}</TableCell>
      <TableCell>{item.price_change_percentage_24h}</TableCell>
      <TableCell className="text-right">${item.current_price}</TableCell>
    </TableRow>
  ))}
</TableBody>
</Table>
 </ScrollArea>
 

 
  )
}

export default AssetTable