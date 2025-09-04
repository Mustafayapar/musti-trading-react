import React from 'react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import { DragHandleHorizontalIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Avatar,AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Sidebar from '../Sidebar/Sidebar'
import { useSelector } from 'react-redux'
 



export const Navbar = () => {
    const {auth}= useSelector(store=>store)
  return (
    <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky
    top-0 left-0 right-0 flex justify-between items-center'>
        <div className='flex items-center gap-3'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button 
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-10 w-10"
                    >
                        <DragHandleHorizontalIcon style={{ width: "30px", height: "30px" }}/>
                    </Button>
                </SheetTrigger>
                <SheetContent 
                className="w-72 border-r-0 flex flex-col justify-center" side="left" >
                    <SheetHeader>
                    <SheetTitle>
                        <div className='text-3xl flex justify-center items-center gap-2'>
                            <Avatar className="w-12 h-12">
                                <AvatarImage
                                 src="https://media.istockphoto.com/id/1209243460/tr/vekt%C3%B6r/vekt%C3%B6r-simgesi-y%C3%BCksek-teknoloji-daire-%C5%9Firket-tasar%C4%B1m%C4%B1-i%C5%9F-sembol%C3%BC-kavram%C4%B1-minimal-%C3%A7izgi-stili.jpg?s=612x612&w=0&k=20&c=AXL--zYBsL_RQOG0Lb0PFuI7znH_GsZR_TS0JeLHVY4="
                                alt="Crypto"
                                    />
                                    <AvatarFallback>MT</AvatarFallback>
                            </Avatar>
                            <div className="flex items-center gap-1">
                                    <span className="text-red-500 font-bold">Musti</span>
                                    <span className="text-white-500 font-bold">Trading</span>
                            </div>
                        </div>
                    </SheetTitle>
                    </SheetHeader>
                    <Sidebar/>
                  
                </SheetContent>
            </Sheet>

            <p className='text-sm lg:text-base cursor-pointer'>
                Musti Trading
            </p>
            <div className='p-0 ml-9'>

                <Button variant="outline"
                className="flex items-center gap-3">
                    <MagnifyingGlassIcon/>
                    <span>Search</span>
                </Button>
            </div>

        </div>
        <div>
            <Avatar>
                <AvatarFallback>
                    {auth.user?.fullName[0].toUpperCase()}
                </AvatarFallback>
            </Avatar>
        </div>
        
    </div>
  )
}

export default Navbar