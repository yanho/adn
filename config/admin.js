module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bfa15320f6556a5eb8721a17f633bf94'),
  },
});
