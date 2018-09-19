import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

//pair together our addon imports
setAddon(JSXAddon);

// utility function uses regex to find files w/ext .stories.js
const req = require.context('../src', true, /.stories.js$/);

// and for every file that matches, require it
function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(file => req(file));
}

// pass our function to the configure method, along with the current module
configure(loadStories, module);
