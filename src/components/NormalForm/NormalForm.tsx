import { useForm } from 'react-hook-form';

const NormalForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register("name")} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email")} />
            </div>
            <div>
                <label htmlFor="password">Name</label>
                <input type="text" id="password" {...register("password")} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default NormalForm;