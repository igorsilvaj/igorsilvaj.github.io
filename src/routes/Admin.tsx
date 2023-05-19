import AdminPanel from '../components/Admin/AdminPanel'
import PrivateRoute from '../utils/PrivateRoute'

export default function Admin () {
  return (
    <>
      <PrivateRoute>
        <AdminPanel />
      </PrivateRoute>
    </>
  )
}
