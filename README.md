# Background

![Alt text](FileMan-React-gitpod.JPG?raw=true "Gitpod View")

A repo that allows Reactjs development against FileMan in Gitpod

# Gitpod

To run a Gitpod with this repo:

1) Create a free/paid Gitpod account - https://www.gitpod.io/
2) Log into the account
3) Open a new browser tab and add **https://github.com/RamSailopal/FileManjs-gitpod** to the address - This will create a new Gitpod cloud instance.
4) Due to blocked cross origin requests, ports 3001 and 9100 need to be made public in Gitpod.
5) Due to blocked cross origin requests, A CORS browser add-on also needs to be added and enabled
   https://addons.mozilla.org/en-GB/firefox/addon/cors-everywhere/
   https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
6) Open a browser session on port 3001 (the globe icon) and this will display a react table displaying the output from the FileMan query **SELECT 9_6 LIMIT 100**

![Alt text](react-table.JPG?raw=true "FMQL in react-table form")

7) Step 3 is for sample only. If you want to make changes to your own repo, first fork this repo and then add that repo after the **gitpod.io/#** prefix to create a new gitpod intance.
