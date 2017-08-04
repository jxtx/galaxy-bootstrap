A "theme" for bootstrap that can be used for Galaxy.

`bootstrap` is completey unmodified from upstream bootstrap 3.0 repository

`galaxy_bootstrap` contains a `variables.less` that has been modified to remove almost all hardcoded colors. A small number of variables define primary color, border color, and how to derive other colors from them. 

To build:

`yarn build; yarn min`

index.html is a sample stolen from Bootswatch that shows most things.
