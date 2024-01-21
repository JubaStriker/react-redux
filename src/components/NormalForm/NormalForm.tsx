import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';

import { SignUpSchema, TNormalForm } from './validation';

const NormalForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TNormalForm>({
        resolver: zodResolver(SignUpSchema)
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='max-w-5xl flex flex-col justify-center mx-auto items-center h-screen'>
            <div >
                <label htmlFor="name">Name</label>
                <input
                    className='w-full border border-gray-300 rounded-md focus:border-purple-500 focus:ring-purple-500'
                    type="text" id="name" {...register("name", { required: true })}
                />
                {errors?.name && <span className='text-xs text-red-500'>{errors.name.message as string}</span>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input className='w-full border border-gray-300 rounded-md focus:border-purple-500 focus:ring-purple-500' type="text" id="email" {...register("email")} />
                {errors?.email && <span className='text-xs text-red-500'>{errors.email.message as string}</span>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input className='w-full border border-gray-300 rounded-md focus:border-purple-500 focus:ring-purple-500' type="password" id="password" {...register("password")} />
                {errors.password && <span className='text-xs text-red-500'>{errors.password.message as string}</span>}
            </div>
            <button type='submit' className='btn btn-primary mt-2'>Submit</button>
        </form>
    );
};

export default NormalForm;