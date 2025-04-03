import { singoutAction } from '../utils/actions'

export default function Signoutbtn() {
  return (
   <form action={singoutAction}>
    <button type='submit'>Sign out</button>
   </form>
  )
}
