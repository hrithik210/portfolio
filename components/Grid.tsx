import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bento-grid'
import { gridItems } from '@/data/grid-items'

const Grid = () => {
  return (
    <section>
      <BentoGrid className="w-full py-20">
        
        { gridItems.map( ({id , title , className , imgClassName
          ,titleClassName , img , spareImg
        }) => (
            <BentoGridItem 
            id={id} 
            key={id} 
            title={title} 
            description=""
            className={className}
            img= {img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}

            />
        ))}
      
      </BentoGrid>
    </section>
  )
}

export default Grid
