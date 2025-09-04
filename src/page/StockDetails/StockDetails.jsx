import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { BookmarkFilledIcon, BookmarkIcon, DotIcon } from '@radix-ui/react-icons'
 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TradingForm from './TradingForm'
import StockChart from '../Home/StockChart'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchCoinDetails } from '@/State/Coin/Action'
import { addItemToWatchlist, getUserWatchlist } from '@/State/Watchlist/Action'
import existInWatchlist from '@/utils/existInWatchlist'
 
 
 
const StockDetails = () => {

  const{coin,watchlist}= useSelector(store=>store);

  const dispatch =useDispatch();
  const {id} =useParams();

  console.log("id: ", id)
 
  useEffect(()=>{
    dispatch(fetchCoinDetails({coinId:id, jwt:localStorage.getItem("jwt")}));
    dispatch(getUserWatchlist({ jwt:localStorage.getItem("jwt")}))
  },[id,dispatch])

  const handleAddToWatchlist=()=>{
    dispatch(addItemToWatchlist({coinId: coin.coinDetails?.id, 
      jwt: localStorage.getItem("jwt")}));
  }

  return (
    <div className='p-5 mt-5'>
      <div className='flex justify-between'>
        <div className='flex gap-5 items-center'>

          <div>
             
              <img 
              src={coin.coinDetails?.image?.large || "/placeholder.png"} 
              alt={coin.coinDetails?.name || "Coin"} 
              className="w-16 h-16 rounded-full object-contain"
            />
               
          </div>
          <div>
            <div className='flex items-center gap-2'>

              <p>{coin.coinDetails?.symbol?.toUpperCase()}</p>
              <DotIcon className='text-gray-400'/>
              <p className='flex items-end gap-2'>{coin.coinDetails?.name}</p> 

            </div>
            <div className='flex items-end gap-2'>
              <p className='text-xl font-bold'>${coin.coinDetails?.market_data.current_price.usd}</p>
              <p
                  className={
                    coin.coinDetails?.market_data?.market_cap_change_24h >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  <span>{coin.coinDetails?.market_data?.market_cap_change_24h}</span>
                  <span>
                    ({coin.coinDetails?.market_data?.market_cap_change_percentage_24h}%)
                  </span>
                </p>
            </div>

          </div>

        </div>
        <div className='flex items-center gap-4'>
          <Button onClick={handleAddToWatchlist}>
            { existInWatchlist(watchlist?.items || [], coin.coinDetails) 
  ? <BookmarkFilledIcon className='h-6 w-6'/> 
  : <BookmarkIcon className='h-6 w-6'/> }
            
            
          </Button>
          <Dialog>
            <DialogTrigger>Trading</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
                <TradingForm/>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

      </div>
      <div className="mt-14 p-6 rounded-xl shadow-lg border border-slate-800 
                max-w-4xl h-[500px] mx-auto">
      <StockChart coinId={id}/>

      </div>
      
    </div>
  )
}

export default StockDetails