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
import { useDispatch } from 'react-redux';
import { register } from '@/State/Auth/Action';

const SignUpform = () => {

  const dispatch = useDispatch();
  
  const form= useForm({
    resolver:"",
    defaultValues:{
      fullName:"",
      email:"",
      password:"",
      

    },

  });
  const onSubmit=(data)=>{
    dispatch(register(data))
      console.log(data)
  }


  return (
    <div>
            <h1 className='text-xl text-center font-bold mb-5'>Register Form </h1>

            <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                  //name="accountfoldername"
                    className="border w-full border-gray-700 p-5"
                    placeholder="name"
                    {...field}
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

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
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-700 p-5"
                    placeholder="**********"
                    {...field}
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          
               <Button type="submit" className="w-full py-5"> 
            Save
          </Button>
           
        </form>
      </Form>
    </div>
  )
}

export default SignUpform