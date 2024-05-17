
export default function CommonTitle({ subTitle, title, des, des2, className='' }) {
  return (
    <div className={`common-title ${className}`}>
      {subTitle ? (<span className='d-block'>{subTitle}</span>) : ''}
      <h2>{title}</h2>
      {des ? (<p>{des}</p>) : ''}
      {des2 ? (<p>{des2}</p>) : ''}
    </div>
  )
}
