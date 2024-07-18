const config = {
  screens: {
    Settings: {
      path: 'settings',
    },
    Profile: {
      path: 'profile/:id',
      parse: {
        id: id => `${id}`,
      },
    },
  },
};

const linking = {
  prefixes: ['trialproj://'],
  config,
};

export default linking;
