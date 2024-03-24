const config = {
    development: {
      // Development configuration options
    },
    production: {
      // Production configuration options
    }
  };
  
export default config[process.env.NODE_ENV || 'development'];