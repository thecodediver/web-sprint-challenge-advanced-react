import React, { useState } from 'react'
export const useForm = (intitialInfo) => {
  const [formData, setFormData] = useState(intitialInfo)

  const setValue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return [formData, setValue]
}