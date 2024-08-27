import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function ProtectedPage() {
  return (
    <div>
      <h1>This is a protected page</h1>
    </div>
  );
});
