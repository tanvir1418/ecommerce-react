# Shoppy (React)

Shoppy is a simple shopping solution. It's a full-featured shopping website with a shopping cart system.

## Live Site

Link - https://comfybd.netlify.app

## Deployment process

- Create a site on netlify and link the repository for github
- Add environment variable to netlify
- Create and build the site
- After successful build netlify will generate a live domain
- As our login system is handled by Auth0 so we have to add 'NETLIFY_GENERATED_URL' to Auth0 -> Applications -> Select Application -> Application URIs

  Application URIs -> Allowed Callback URLs (NETLIFY_GENERATED_URL)

  Application URIs -> Allowed Logout URLs (NETLIFY_GENERATED_URL)

  Application URIs -> Allowed Web Origins (NETLIFY_GENERATED_URL)

- Clean cache and rebuild the netlify application
