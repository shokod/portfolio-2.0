import Client1 from '@/src/assets/emoji/Client-1-emoji.png'
import Client3 from '@/src/assets/emoji/Client-3-emoji.png'
import Client4 from '@/src/assets/emoji/Client-4-emoji.png'
import Client5 from '@/src/assets/emoji/Client-5-emoji.png'
import SectionHeader from '@/src/components/SectionHeader'
import Image from 'next/image'
import Card from '@/src/components/Card'
import { Fragment } from 'react'
import { useTranslations } from 'next-intl'

// my customer references/recommendations

export default function References() {
  const t = useTranslations('References')
  const reference = [
    {
      name: 'S. Chidzimba',
      position: t('Bvunza.position'),
      text: t('Bvunza.recommendation'),
      avatar: Client3,
    },
    {
      name: 'M. Mashoko',
      position: t('organicsBest.position'),
      text: t('organicsBest.recommendation'),
      avatar: Client4,
    },
    {
      name: 'J. Mapurazi',
      position: t('pinkHouseHostel.position'),
      text: t('pinkHouseHostel.recommendation'),
      avatar: Client1,
    },
    {
      name: 'T. Tembo',
      position: t('healingArts.position'),
      text: t('healingArts.recommendation'),
      avatar: Client5,
    },
  ]

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow={t('sectionHeader.header')}
          title={t('sectionHeader.title')}
          description={t('sectionHeader.description')}
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          {/* use keyframe from tailwind config to animate, pause animation on hover */}
          <div className="flex flex-none gap-8 pr-8 animate-left-movement [animation-duration:90s] hover:[animation-play-state:paused]">
            {/* duplicate references for animation like in Banner creating 2 sets of references in the map instead of 1 */}
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {reference.map((reference) => (
                  <Card
                    key={reference.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 dark:bg-gray-600 bg-brown5/60 inline-flex rounded-full items-center justify-center flex-shrink-0">
                        <Image
                          src={reference.avatar}
                          alt={reference.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold dark:text-white text-black">
                          {reference.name}
                        </div>
                        <div className="text-sm dark:text-white/40 text-black/60">
                          {reference.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base dark:text-white text-black">
                      {reference.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
