import React from 'react';
import { useForm } from 'react-hook-form';


const SignUp = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data);

    return ( 
        <div className='sign-up'>
            <div>
                <h2>Create Accounte</h2>
            </div>
            <form className='form-input' onSubmit={handleSubmit(onSubmit)}>
                <div className='div-input'>
                    <div className='in-name input-sign'>
                        <label>Name *</label>
                        <input
                         {...register("firstName", { required: true, minLength: 3})} 
                         aria-invalid={errors.firstName ? "true" : "false"}></input>
                         {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
                         {errors.firstName?.type === 'minLength' && <p role="alert">First name is too short</p>}
                    </div>
                    <div className='in-last-name input-sign'>   
                        <label>Last Name *</label>
                        <input {...register("lastName", { required: true, minLength: 3})} 
                         aria-invalid={errors.lastName ? "true" : "false"}></input>
                         {errors.lastName?.type === 'required' && <p role="alert">Last name is required</p>}
                         {errors.lastName?.type === 'minLength' && <p role="alert">Last name is too short</p>}
                    </div>
                </div>
                <div className='div-input'>
                    <div className='in-email input-sign'>
                        <label>Email *</label>
                        <input type='email'
                        {...register("mail", { required: "Email Address is required" })} 
                        aria-invalid={errors.mail ? "true" : "false"} ></input>
                        {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                    </div>
                    <div className='in-phone input-sign'>
                        <label>Phone *</label>
                        <input type='number'{...register("mobile", { required: true, minLength: 11})} 
                         aria-invalid={errors.mobile ? "true" : "false"}></input>
                         {errors.mobile?.type === 'required' && <p role="alert">mobile is required</p>}
                         {errors.mobile?.type === 'minLength' && <p role="alert">mobile is not ture</p>}
                    </div>
                </div>
                <div className='div-input'>
                    <div className='in-pass input-sign'>
                        <label>Passworld *</label>
                        <input ></input>
                    </div>
                    <div className='in-re-pass input-sign'>
                        <label>Repeat Password *</label>
                        <input ></input>
                    </div>
                </div>
                <div className='btn-sign'>
                    <button className="btn-add-cart" type='submit'>Create Accounte</button>
                </div>
            </form>
        </div>
     );
}
 
export default SignUp;


