import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const WithdrawalForm = () => {

    const [amount, setAmount]= React.useState('')
    const dispatch =useDispatch();
    const {wallet,withdrawal} =useSelector(store=> store);
    
    const handleChange=(e)=>{
        setAmount(e.target.value)
    }

    const handleSubmit=()=>{

        dispatch({amount, jwt:localStorage.getItem("jwt")});
        console.log(amount)
    }

  return (
    <div className='pt-10 space-y-5'>
        <div className='flex justify-between items-center rounded-md
        bg-slate-900 text-xl font px-5 py-4'>
            <p>Available balance</p>
            <p>$500</p>

        </div>
        
        <div className='flex flex-col items-center'>
            <h1 className="text-base mb-3"> Enter Withdrawal amount</h1>
            <div className='flex items-center justify-center w-full'>

                <Input
                onChange ={handleChange}
                value={amount}
                className="py-7 border-none focus:ring-0 text-2xl text-center"
                placeholder="$999"
                type="number"

                />
            </div>
       </div>
       <div>
        <p className='pb-2'> Transfer To</p>
        <div className='flex items-center gap-5 border px-5 py-2 rounded-md'>
            <img 
            className='h-8 w-8'
            src="https://images.icon-icons.com/3251/PNG/512/building_bank_link_regular_icon_203855.png" alt=''/>

            <div>
            <p className='text-xl font-bold'>{withdrawal.paymentDetails?.bankName}
</p>
            <p className='text-xs'>
                {withdrawal.paymentDetails?.accountNumber
            ? withdrawal.paymentDetails.accountNumber.replace(/\d(?=\d{4})/g, "*")
            : ""}
            </p>
        </div>

        </div>
        

       </div>
       <DialogClose className='w-full'>
              <Button onClick={handleSubmit} className="w-full py-7 text-xl">
        Withdraw
       </Button>
       </DialogClose>
     

    </div>
  )
}

export default WithdrawalForm