export default function Booking() {
  return (
    <form noValidate>
      <input type='text' placeholder='Họ và tên' />
      <div className='text-sm text-red-600 min-h-[20px]'></div>
      <input type='email' placeholder='Email' />
      <div className='text-sm text-red-600 min-h-[20px]'></div>
      <input type='tel' placeholder='Số điện thoại' />
      <div className='text-sm text-red-600 min-h-[20px]'></div>
      <input type='number' placeholder='Số lượng người' />
      <div className='text-sm text-red-600 min-h-[20px]'></div>
      <textarea placeholder='Ghi chú' />
      <div className='text-sm text-red-600 min-h-[20px]'></div>
    </form>
  )
}
