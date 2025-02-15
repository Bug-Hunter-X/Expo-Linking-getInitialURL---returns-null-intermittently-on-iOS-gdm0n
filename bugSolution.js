// bugSolution.js
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';

function MyComponent() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      // Attempt to get initial URL immediately
      let url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url);
        return;
      }

      // Add event listener for subsequent URLs
      const listener = ({ url }) => {
        setInitialUrl(url);
      };
      Linking.addEventListener('url', listener);

      // Cleanup function to remove the event listener
      return () => Linking.removeEventListener('url', listener);
    };

    getInitialUrl();
  }, []);

  useEffect(() => {
    if (initialUrl) {
      // Handle initialUrl
      console.log('Deep link received:', initialUrl);
      // ... navigation logic ...
    }
  }, [initialUrl]);

  return (
    <View>
      {/* ... your app content ... */}
    </View>
  );
}

export default MyComponent;