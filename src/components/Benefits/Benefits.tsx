interface BenefitsProps {
  title: string;
  description?: string[];
  className?: string;
}

export default function Benefits({
  title,
  description,
  className,
}: BenefitsProps) {

  return (
    <div className={`text-start flex flex-col ${className}`}>
      <h4 className='mb-1 text-xl'>{title}</h4>
      {description?.map((item:string, index:number) => {
        return(
          <p className="mt-0" key={index}>{item}</p>
        )
      })}
    </div>
  );
}
