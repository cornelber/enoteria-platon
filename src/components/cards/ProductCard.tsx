import { imageStrapUrl } from '@/lib/utils'
import { CirclePercent } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Card, CardFooter } from '../ui/card'

const backgroundImage = {
  backgroundImage: 'url(/images/bg.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
}

export default function ProductCard({ product }: any) {
  const { title, price, thumbnail, discount, slug } = product.attributes
  let discountPrice

  if (discount) {
    discountPrice = price - (price * discount / 100)
  }

  return (
    <Card className='shadow-xl'>
      <div style={backgroundImage} className='relative flex items-center justify-center w-full h-[280px] rounded-t-lg'>
        <Image
          src={imageStrapUrl(thumbnail)}
          alt={title}
          width={220}
          height={250}
        />
        {discount && (
          <div className='absolute bottom-2 left-2 flex items-center gap-1 bg-red-500/70 px-2 py-1 rounded-md'>
            <CirclePercent color='white' opacity='70' />
            <p className='text-white text-sm'>{discount}% reducere</p>
          </div>
        )}
      </div>
      <Link href={`shop/${slug}`}>
        <h6 className='m-4'>{title}</h6>
      </Link>
      <CardFooter className='justify-between'>
        <div className='flex gap-1'>
          {discount && <p>{discountPrice} lei</p>}
          <p className={`${discount && 'line-through opacity-50'}`}>{price} lei</p>
        </div>
        <Button>Adaugă</Button>
      </CardFooter>
    </Card>
  )
}