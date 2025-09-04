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
import { login } from '@/State/Auth/Action';
import { useNavigate } from 'react-router-dom';

const SignInform = () => {
  const dispatch = useDispatch();

  const navigate =useNavigate();

    const form= useForm({
      resolver:"",
      defaultValues:{
        email:"",
        password:"",  
      },
  
    });
    const onSubmit=(data)=>{
      dispatch(login({data, navigate}))
      console.log("burası sign ın:",data);

    }
  return (
    <div>
      <h1 className='text-xl text-center font-bold mb-5'>Login Form </h1>
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
                  type="email"
                    className="border w-full border-gray-700 p-5"
                    placeholder="abc@gmail.com"
                    {...field}
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>

              
            )}
          />
          {/* Password */}
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                   type="password"
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

export default SignInform