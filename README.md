# SyncPad-Server

This is the server-side code for the SyncPad Flutter application. It allows you to establish a connection between your mobile device and computer for remote control functionality.

## Prerequisites

Before running the SyncPad Server, please make sure you have the following prerequisites installed on your system:

- Node.js: [Download and install Node.js](https://nodejs.org)

Please note that the SyncPad Server relies on the `robotjs` library, which requires additional dependencies to be installed on your system. If you encounter any errors related to `robotjs`, please follow the instructions specific to your operating system in the [robotjs documentation](https://github.com/octalmage/robotjs#building).

## Getting Started

To get started with the SyncPad Server, follow these steps:

1. Clone this repository to your local machine:
```
git clone https://github.com/mukundsolanki/syncpad-server
```

2. Run the following commands:
```
npm install -g node-gyp
```

```
node-gyp rebuild
```

3. Navigate to the project directory:
```
cd syncpad-server
```

4. Install the project dependencies by running the following command:
```
npm install
```

5.Start the Server by running the following command:
```
node server.js
```

The server will start running on port `6969` You should see the following message in the console:
`Server running on port 6969`

6. The SyncPad Server is now up and running. Keep the server running while using the SyncPad Flutter application.

## Acknowledgements

SyncPad Server utilizes the following open-source libraries:

- [Express](https://expressjs.com)
- [Socket.IO](https://socket.io)
- [RobotJS](https://robotjs.io)

## Contributions

Contributions to SyncPad are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

Let's make SyncPad even better together!