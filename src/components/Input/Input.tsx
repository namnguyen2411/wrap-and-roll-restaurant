interface Props {
  type: React.HTMLInputTypeAttribute
  placeholder: string
  className?: string
  // name: string
  // register: any
}

export default function Input({ type, placeholder, className = '' }: Props) {
  return (
    <>
      <input type={type} placeholder={placeholder} className={`${className}`} />
      <div></div>
    </>
  )
}
