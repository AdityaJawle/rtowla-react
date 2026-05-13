import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { LoginContext } from '../context/LoginContext'

function Login() {
  const {login} = useContext(LoginContext)
  const navigate = useNavigate()

  const {register, handleSubmit, formState : {errors}} = useForm()

  const onSubmit = (data) => {
    login({
      name: data.email.split('@')[0],
      email: data.email
    })
    navigate('/guest-dashboard')
  }

  return (
    <main className="auth-page">
      <section className="auth-modal">
        <Link to="/" className="auth-close" aria-label="Close login form">
          <i className="fa-solid fa-xmark"></i>
        </Link>

        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
           <input type="email" placeholder='Enter your Email' {...register('email', {required : 'Email is Required'})}/>
            {errors.email && <small className='text-danger'>{errors.email.message}</small>}
         <input type="password" placeholder='Enter your Password' {...register('password', {required : 'Password is Required'})} />
          {errors.password && <small className='text-danger'>{errors.password.message}</small>}
          <button type="submit" className="btn">Login</button>
        </form>

        <p>
          New user? <Link to="/register">Create Account</Link>
        </p>
      </section>
    </main>
  )
}

export default Login
