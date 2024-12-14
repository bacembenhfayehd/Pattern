function withAuth(Component) {
    return function AuthenticatedComponent(props) {
      const isAuthenticated = localStorage.getItem('authToken');
      return isAuthenticated ? <Component {...props} /> : <div>Access Denied</div>;
    };
  }
  
  export default withAuth;