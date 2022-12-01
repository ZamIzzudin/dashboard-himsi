import BackButton from '../components/BackButton'
import FormProfile from '../components/FormProfile'

export default function Profile() {
  return (
    <main>
      <BackButton />
      <h2>Profile</h2>
      <span>Edit About HIMSI Profile</span>

      <FormProfile />
    </main>
  );
}
