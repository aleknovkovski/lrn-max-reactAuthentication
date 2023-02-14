import AuthForm from '../components/AuthForm';
import {json, redirect} from "react-router-dom";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  console.log(authData)
  return redirect('/');
}