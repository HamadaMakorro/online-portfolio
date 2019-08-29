import React from 'react'
// import { useEffect } from 'react'
import { useState } from 'react'
import {Form} from 'semantic-ui-react'




export default function () {

  const [formData, setFormData] = useState({ name: '', message: '', email: '' })

 

  function onChange(e) {

    console.log('formData: ', formData);

    switch (e.target.id) {
      case 'name-input':

        formData.name = e.target.value

        setFormData( formData )

        break;
      case 'email-input':

        formData.email = e.target.value
        setFormData(formData)

        break;

      case 'message-input':

        formData.message = e.target.value
        setFormData(formData)

        break;

      default:
        break;
    }


  }




  return (
    <div>
      <Form>
        <Form.Input id="name-input" fluid label='Name' placeholder='First name' onChange={onChange} />
        <Form.Input id="email-input" fluid label='Email' placeholder='Email' onChange={onChange} />
        <Form.TextArea id="message-input" label='About' placeholder='What you want to say...' onChange={onChange} />
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>

  )





}


