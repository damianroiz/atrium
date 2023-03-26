import React, { useState } from "react";
import { useForm } from 'react-hook-form';

const AppointmentForm = () => {
  const [status, setStatus] = useState("Submit");
  const { register, formState: { errors } } = useForm();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, telephone, email, message } = e.target.elements;
    let details = {
      name:name.value,
      telephone: telephone.value,
      email: email.value, 
      message: message.value,
    };
      let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(details),
        });
        setStatus('Submit');
        let result = await response.json();
        alert(result.status)
  };
  return (
      <form 
      className="contact-form"
      onSubmit={handleSubmit}>
        <h3>Book Your Appointment</h3>
        <div className="form-control">
          <label htmlFor="name"></label>
          <input
            id="name"
            type="text" 
            name="name"
            placeholder="Full Name"
            {...register('name', 
                {
                  required: 'Name is required',
                  pattern: {
                    value: /^[A-Za-z]+(([,.] |[ '-])[A-Za-z]+)*([.,'-]?)$/,
                    message: 'Name is invalid'
                  }
                }
              )
            }
          />
          {errors.name && <p className="errorMsg">{errors.name.message}</p>}
        </div>
        <div className="form-control">
        <label htmlFor="telephone"></label>
        <input
          id="telephone"
          type="text" 
          name="telephone"
          placeholder="Telephone (optional)" 
          {...register ('telephone',
                { 
                  pattern: {value: /^(1\s?)?(\d{3}|[(]\d{3}[)])[-|\s]?(\d{3})[-|\s]?(\d{4})$/, 
                  message: 'Telephone is invalid'
                }
              }
            )
          }
        />
        {errors.telephone && <p className="errorMsg">{errors.telephone.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="email"></label>
          <input
            id="email" 
            type="text" 
            name="email"
            placeholder="E-mail"
            {...register('email', 
                  { 
                    required: 'Email is required', 
                    pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, 
                    message: 'Email is invalid' 
                  }
                } 
              )
            } 
          />
          { errors.email && <p className="errorMsg">{errors.email.message}</p> }
        </div>
        <div className="form-control">
          <label htmlFor="message" ></label>
          <textarea
            id="message"
            cols='30'
            rows='7' 
            type="text" 
            name="message"
            placeholder="Tell us how we can help you..."
            {...register('message', 
                  { 
                    required: 'Message is required', 
                    maxLength: { value: 50, 
                    message: 'Message should be less than 50 characters' 
                  }
                } 
              )
            } 
          />
          { errors.message && <p className="errorMsg">{errors.message.message}</p> }
        </div>
        <div className="form-control">
          <button type="submit">{status}</button>
        </div>
        <p>You can also contact us at +1(403)-255 4461</p>
      </form>
  );
}

export default AppointmentForm;