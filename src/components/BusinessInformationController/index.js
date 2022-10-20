import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const BusinessInformationController = (props) => {
  const { googleMapsControls, business = {}, optionToShow, UIComponent } = props

  const [showOption, setShowOption] = useState(optionToShow)
  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])
  const [location, setLocation] = useState({})

  const onChangeOption = (value) => {
    setShowOption(value)
  }

  useEffect(() => {
    const photos = business?.gallery?.filter((item) => item.file)
    const videos = business?.gallery?.filter((item) => item.video)
    const location = {
      location: business?.location,
      address: business?.address,
      address_notes: business?.address_notes,
      googleMapsControls
    }
    setPhotos(photos)
    setVideos(videos)
    setLocation(location)
  }, [business])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessSchedule={business?.schedule || []}
          businessPhotos={photos || []}
          businessVideos={videos || []}
          businessLocation={location || {}}
          optionToShow={showOption}
          onChangeOption={onChangeOption}
        />
      )}
    </>
  )
}
