//The solution involves cleaning the cache and rebuilding
//Solution 1: Clean the cache and rebuild
expo prebuild --clean
expo start
//Solution 2: If Solution 1 doesn't work, try deleting the node_modules folder, re-installing packages and then rebuilding.
rm -rf node_modules
npm install
expo prebuild --clean
expo start
//Solution 3: If none of the above work, try upgrading expo cli
npm install -g expo-cli@latest