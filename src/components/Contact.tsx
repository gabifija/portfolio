import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import Section from './Section';

const GETFORM_ENDPOINT = 'https://getform.io/f/eefa2a49-7171-4ef1-bf6b-728c443e13cf';

// One schema gives both the runtime validation rules and the TypeScript type.
const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'required')
    .min(2, 'name must be at least 2 characters')
    .max(50, 'name must be at most 50 characters'),
  email: z.string().min(1, 'required').pipe(z.email('invalid email')),
  message: z
    .string()
    .min(1, 'required')
    .min(2, 'message must be at least 2 characters')
    .max(1000, 'message must be at most 1000 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClassName = 'p-2 bg-[#e5e7eb] text-black focus:outline focus:outline-black';
const errorClassName = 'text-[#b66b53] text-sm';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    // Show errors after a field is left (or on submit), then re-validate as you type.
    mode: 'onTouched',
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('message', values.message);

    try {
      await fetch(GETFORM_ENDPOINT, { method: 'POST', body: formData });
      setShowMessage(true);
    } catch {
      setShowMessage(false);
    }
  };

  return (
    <Section id='contact' heading='contact'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p>submit the form below or send me an email - <a href='mailto:gabrielafijalkowska@gmail.com'>gabrielafijalkowska@gmail.com</a></p>
        </div>
        {showMessage ? (
          <p className='text-[#327364]'>your message has been sent successfully!</p>
        ) : (
          <>
            <label htmlFor='name' className='pb-2'>name</label>
            <input
              className={inputClassName}
              id='name'
              type='text'
              placeholder='name'
              {...register('name')}
            />
            {errors.name && <p className={`pb-4 ${errorClassName}`}>{errors.name.message}</p>}

            <label htmlFor='email' className='py-2'>email</label>
            <input
              className={inputClassName}
              id='email'
              type='email'
              placeholder='email@domain.com'
              {...register('email')}
            />
            {errors.email && <p className={`pb-2 ${errorClassName}`}>{errors.email.message}</p>}

            <label htmlFor='message' className='py-2'>message</label>
            <textarea
              className={inputClassName}
              id='message'
              placeholder='your message here'
              cols={30}
              rows={10}
              {...register('message')}
            />
            {errors.message && <p className={errorClassName}>{errors.message.message}</p>}

            <button className='text-black bg-white border rounded-3xl border-black hover:bg-[#327364] hover:border-[#327364] hover:text-white px-4 py-3 my-8 mx-auto flex items-center' type='submit'>send</button>
          </>
        )}
      </form>
    </Section>
  );
};

export default Contact;
