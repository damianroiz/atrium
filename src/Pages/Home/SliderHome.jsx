import React, { useState, useEffect } from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './home.css'
// import { Text } from '@chakra-ui/react'

// const textImages = [
//   {
//     text: 'You Partner in good Health.',
//     caption: 'First Slide',
//   },
//   {
//     text: 'You Partner in good Health.',
//     caption: 'Second Slide',
//   },
//   {
//     text: 'You Partner in good Health.',
//     caption: 'Third Slide',
//   },
//   {
//     text: 'You Partner in good Health.',
//     caption: 'Fourth Slide',
//   },
//   {
//     text: 'You Partner in good Health.',
//     caption: 'Fifth Slide',
//   },
// ]
const fadeImages = [
  {
    url: 'https://www.ayurbethaniya.org/imageuploads/covered/2020/07/29/physiotherapy-treatment-in-thrissur.jpg',
    caption: 'First Slide',
  },
  {
    url: 'https://thumbs.dreamstime.com/b/fisioterapia-36040583.jpg',
    caption: 'Second Slide',
  },
  {
    url: 'https://easyalliedhealth.ca/wp-content/uploads/2022/01/doctor-or-physiotherapist-working-examining-treating-injured-leg-of-athlete-male-patient-doing-the_t20_2W9E3v.jpg',
    caption: 'Third Slide',
  },
  {
    url: 'https://thumbs.dreamstime.com/b/paciente-en-la-fisioterapia-que-hace-ejercicios-f%C3%ADsicos-con-su-terapeuta-129612470.jpg',
    caption: 'Fourth Slide',
  },
  {
    url: 'https://www.treatmentroomgroup.co.uk/wp-content/uploads/2020/08/Physiotherapy-1280x800.jpg',
    caption: 'Fifth Slide',
  },
]
export const SliderHome = () => {
  // const [fade, setFade] = useState()
  // useEffect(() => {
  //   setFade(fadeImages)
  // }, [])

  return (
    <div className="slide-container">
      <Fade className="fade">
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} />
              {/* {textImages.map(
                (text, index) =>
                  text.caption === fade.caption && (
                    <Text key={index}>{text.text}</Text>
                  )
              )} */}
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}
