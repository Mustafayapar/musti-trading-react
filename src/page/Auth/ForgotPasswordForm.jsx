import React from 'react'
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DialogClose } from "@/components/ui/dialog";

const ForgotPasswordForm = () => {
   const onSubmit=()=>{
    
      }
      const form= useForm({
        resolver:"",
        defaultValues:{
         email:"",
         
    
        },
    
      })
  return (
    <div>
            <h1 className='text-xl text-center font-bold mb-5'>Forgot Password </h1>

           <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
           

            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                  //  name="ifsc"
                    className="border w-full border-gray-700 p-5"
                    placeholder="abc@gmail.com"
                    {...field}
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>

              
            )}
          />
            
          
               <Button type="submit" className="w-full py-5"> 
            Send
          </Button>
           
        </form>
      </Form>
    </div>
  )
}

export default ForgotPasswordForm