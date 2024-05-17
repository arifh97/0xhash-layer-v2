
export default function CommonTitle({ subTitle, title, des, des2, className='' }) {
  return (
    <div className={`common-title ${className}`}>
      {subTitle ? (<span className='d-block' data-aos="fade-left" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0">{subTitle}</span>) : ''}
      <h2 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="" data-aos-offset="0">{title}</h2>
      {des ? (<p data-aos="fade-left" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0">{des}</p>) : ''}
      {des2 ? (<p data-aos="fade-left" data-aos-duration="1900" data-aos-delay="" data-aos-offset="0">{des2}</p>) : ''}
    </div>
  )
}
