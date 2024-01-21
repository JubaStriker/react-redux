import { FieldValues, useForm } from "react-hook-form";
import { FromSelection, Form, FormSubmit } from "../components/ReusableForm";

const FormPage = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data: FieldValues) => {
        console.log(data)
    };
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FromSelection />
                <FormSubmit />
            </Form>
        </div>
    );
};

export default FormPage;