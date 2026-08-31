Vercel deployment

This file explains how to use the Vercel integration added on branch add/vercel-deploy.

Secrets required (add in GitHub repo Settings → Secrets → Actions):
- VERCEL_TOKEN (required): Create a Vercel token at https://vercel.com/account/tokens and add it here.
- VERCEL_PROJECT (optional): Your Vercel project name or id. If unset, the Vercel CLI will attempt to infer the project from the repository.

Behavior:
- Pull requests: workflow deploys a preview using the Vercel CLI.
- Push to main: workflow deploys to production (uses --prod).

Notes:
- The workflow installs the Vercel CLI via npm. If your repository requires a custom build step, update the workflow to run the appropriate build commands before the deploy step.
- After merging the branch, add the VERCEL_TOKEN secret to enable automatic deploys.
