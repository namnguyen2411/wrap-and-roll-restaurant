import { useForm } from 'react-hook-form'
import { ZodType, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function Register() {
  const schema: ZodType<RegisterFormData> = z
    .object({
      name: z
        .string()
        .min(2, 'Tên phải có ít nhất 2 kí tự, tối đa 30 kí tự')
        .max(30, 'Tên phải có ít nhất 2 kí tự, tối đa 30 kí tự'),
      email: z.string().email('Email không đúng định dạng'),
      password: z
        .string()
        .min(6, 'Mật khẩu phải có ít nhất 6 kí tự, tối đa 30 kí tự')
        .max(20, 'Mật khẩu phải có ít nhất 6 kí tự, tối đa 30 kí tự'),
      confirmPassword: z.string()
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Mật khẩu không trùng khớp',
      path: ['confirmPassword']
    })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(schema)
  })

  const onSubmitRegisterForm = handleSubmit((data: RegisterFormData) => {
    console.log(data)
  })

  return (
    <form noValidate onSubmit={onSubmitRegisterForm}>
      <input type='text' placeholder='Họ và tên' {...register('name')} />
      <div className='text-sm text-red-600 min-h-[20px]'>{errors.name?.message}</div>
      <input type='email' placeholder='Email' {...register('email')} />
      <div className='text-sm text-red-600 min-h-[20px]'>{errors.email?.message}</div>
      <input type='password' placeholder='Mật khẩu' autoComplete='on' {...register('password')} />
      <div className='text-sm text-red-600 min-h-[20px]'>{errors.password?.message}</div>
      <input type='password' placeholder='Xác nhận mật khẩu' autoComplete='on' {...register('confirmPassword')} />
      <div className='text-sm text-red-600 min-h-[20px]'>{errors.confirmPassword?.message}</div>
      <button type='submit'>Gửi</button>
    </form>
  )
}
