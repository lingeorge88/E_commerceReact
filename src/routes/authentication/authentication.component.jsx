import SignUpForm from '../../components/sign-up-from/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles.jsx';

    const Authentication = () => {
      return (
        <AuthenticationContainer>
          <SignInForm />
          <SignUpForm />
        </AuthenticationContainer>
      );
    };

export default Authentication;