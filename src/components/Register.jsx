import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { LoginContext } from '../context/LoginContext'

function Register() {
  const { login } = useContext(LoginContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    login({
      name: data.name,
      email: data.email,
      mobile: data.mobile
    })
    navigate('/guest-dashboard')
  }

  return (
    <main className="auth-page">
      <section className="auth-modal">
        <Link to="/" className="auth-close" aria-label="Close register form">
          <i className="fa-solid fa-xmark"></i>
        </Link>

        <h1>Register</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Full Name"
            {...register('name', {
              required: 'Full Name is required',
              minLength: { value: 2, message: 'Name is too short' },
              maxLength: { value: 30, message: 'Name is too long' }
            })}
          />
          {errors.name && <small className="text-danger">{errors.name.message}</small>}

          <input
            type="email"
            placeholder="Email Address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}

          <input
            type="tel"
            placeholder="Mobile Number"
            {...register('mobile', {
              required: 'Mobile number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Enter a valid 10 digit mobile number'
              }
            })}
          />
          {errors.mobile && <small className="text-danger">{errors.mobile.message}</small>}

          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/,
                message: 'Password needs 6 characters, 1 uppercase, 1 lowercase, and 1 number'
              }
            })}
          />
          {errors.password && <small className="text-danger">{errors.password.message}</small>}

          <input
            type="password"
            placeholder="Confirm Password"
            {...register('cpassword', {
              required: 'Confirm password is required',
              validate: (value, formValues) =>
                value === formValues.password || 'Password and confirm password do not match'
            })}
          />
          {errors.cpassword && <small className="text-danger">{errors.cpassword.message}</small>}

          <button type="submit" className="btn">Register</button>
        </form>

        <p>
          Already registered? <Link to="/login">Login Here</Link>
        </p>
      </section>
    </main>
  )
}

export default Register
