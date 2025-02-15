# Expo Linking.getInitialURL() returns null intermittently on iOS

This repository demonstrates a bug where `Linking.getInitialURL()` in Expo consistently returns `null` on iOS devices, even when a deep link is successfully opened.  The issue is intermittent and challenging to debug, making it a tricky problem for developers relying on deep linking functionality.

## Problem Description

The core problem is that `Linking.getInitialURL()` does not reliably return the deep link URL when the app is opened from a deep link.  In many cases it will return `null`, preventing the app from correctly handling the intended navigation.

## Reproduction Steps

1. Clone this repository.
2. Run `expo start`.
3. Create a deep link (example: `myapp://some-path`).
4. Open the deep link on your iOS device.
5. Observe that the console logs `null` instead of the deep link URL.

## Solution

The provided `bugSolution.js` illustrates a potential solution to this issue. It includes techniques to improve deep link handling, such as using `Linking.addEventListener` to monitor deep link events and handling potential delays by adding asynchronous logic.