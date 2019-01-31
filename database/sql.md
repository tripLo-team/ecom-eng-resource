# SQL DOCUMENTATION
This documentation serves the mean of guideline when working on sql database in the project.

## IMPORTANT POINTS
- provide migration of the database and commit to repo every changes of it
- provide a separate config file for database configurations
- *NEVER* commit sensitive information to the repo, use environment variable / `.secret` file that is not committed to repository, so that we do not publish our sensitive credentials

## Naming conventions
- Naming of database, table, relation, procedures and everything (except mentioned) should be in `snake case` (naming_should_be_like_this)
- For name of tables follow this pattern:
    - `tb_<table_name>` : base table
    - `dr_<table_name>` : derived table
    - `pv_<table_name>` : pivot table

