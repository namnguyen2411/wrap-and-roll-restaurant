import { useForm } from 'react-hook-form'
import { z, ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface ContactFormData {
  name: string
  email: string
  tel: string
  message: string
}

export default function Contact() {
  const schema: ZodType<ContactFormData> = z.object({
    name: z
      .string()
      .nonempty('Vui lòng nhập họ và tên')
      .min(2, 'Tên phải có ít nhất 2 kí tự, tối đa 30 kí tự')
      .max(30, 'Tên phải có ít nhất 2 kí tự, tối đa 30 kí tự'),
    email: z.string().nonempty('Vui lòng nhập Email').email('Email không đúng định dạng'),
    tel: z
      .string()
      .nonempty('Vui lòng nhập SĐT')
      .regex(/(^0)*[0-9]/, 'Vui lòng nhập chữ số')
      .min(10, 'SĐT phải có ít nhất 10 đến 15 chữ số')
      .max(15, 'SĐT phải có ít nhất 10 đến 15 chữ số'),
    message: z.string().nonempty('Vui lòng nhập tin nhắn').min(3, 'Tin nhắn phải có ít nhất 3 kí tự')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema)
  })

  const onSubmitContactForm = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmitContactForm}>
      <input type='text' placeholder='Họ và tên' {...register('name')} />
      <div className='text-sm text-red-600 min-h-[20px]'>{errors.name?.message}</div>
      <input type='email' placeholder='Email' {...register('email')} />
      <div className='text-sm text-red-600 min-h-[20px]'>{errors.email?.message}</div>
      <input type='tel' placeholder='Số điện thoại' {...register('tel')} />
      <div className='text-sm text-red-600 min-h-[20px]'>{errors.tel?.message}</div>
      <textarea placeholder='Nội dung' {...register('message')} />
      <div className='text-sm text-red-600 min-h-[20px]'>{errors.message?.message}</div>
      <button type='submit'>Gửi</button>
    </form>
  )
}
