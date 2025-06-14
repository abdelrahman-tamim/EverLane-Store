import LogInBtn from '../_components/LogBtn'
import { signInAction } from '../utils/actions'

export default function page() {
  return (
    <div>
      <form action={signInAction} className='flex flex-col gap-5 items-center my-10 text-2xl'  >
        <label>
          Email: <input className='border-2 rounded' name='email' type='input'/>
        </label>
        <label>
          Password: <input className='border-2 rounded' name='password' type='input'/>
        </label>
        <button type='submit'>Sign in</button>
      </form>
      <LogInBtn/>
    </div>
  )
}
