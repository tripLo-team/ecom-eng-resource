# ecom-eng-resource
This repository contains general development guidance on developing the project. Make sure you follow every conventions mentioned in this repo. Any points are subject to change on the basis of decisions among the team.

## GENERAL GUIDANCE
- provide a separate config file (or collect several config files into `config` folder) for any configurations
- *NEVER* commit sensitive information to the repo, use environment variable / `.secret` file that is not committed to repository, so that we do not publish our sensitive credentials
- collect constants that are used in many files into separate (and obviously named n located)