import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption,TableCell,TableHead,TableHeader, TableRow } from '@/components/ui/table'
import { addItemToWatchlist, getUserWatchlist } from '@/State/Watchlist/Action'
 import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Watchlist = () => {

  const dispatch =useDispatch();
const {watchlist } = useSelector(store=>store)

  const handleRemoveToWatchlist=(value)=>{
     dispatch(addItemToWatchlist({coinId: value, 
        jwt: localStorage.getItem("jwt")}));
    console.log(value)
  }

  useEffect(()=>{
    dispatch(getUserWatchlist({jwt:localStorage.getItem("jwt")}));
  },[])

  return (
    <div className='p-5 lg:p-20 pb-4'>
      
          <h1 className='font-bold text-3xl pb-5'>Watchlist</h1>
              <Table className="border">
           
            <TableHeader>
              <TableRow>
                <TableHead className="py-5 w-[100px]">Coin</TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead>Volume</TableHead>
                <TableHead>Market Cap</TableHead>
                <TableHead>24h</TableHead>
          
                <TableHead className="">PRICE</TableHead>
                <TableHead className="text-right text-red-600">REMOVE</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {watchlist.items?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={item.image} />
                  </Avatar>
                  <span>{item.name}</span>
                </TableCell>
                <TableCell>{item.symbol}</TableCell>
                <TableCell>{item.total_volume}</TableCell>
                <TableCell>{item.market_cap}</TableCell>
                <TableCell>{item.price_change_percentage_24h}</TableCell>
                <TableCell className="">${item.current_price}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" onClick={()=> handleRemoveToWatchlist(item.id)} size="icon" className="text-right">
                    
                    <BookmarkFilledIcon className='w-6 h-6'/>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </div>
  )
}

export default Watchlist