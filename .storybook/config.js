import './reset.css';
import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import chaptersAddon, {
  setDefaults,
  sectionStyles
} from 'react-storybook-addon-chapters';
addDecorator(story => <div style={{ padding: 20 }}>{story()}</div>);
setDefaults({
  sectionOptions: {
    showSource: false,
    allowSourceToggling: true,
    showPropTables: false,
    allowPropTablesToggling: false
  }
});
setAddon(chaptersAddon);

sectionStyles.subsection.marginBottom = 15;
sectionStyles.componentContainer.marginBottom = 15;
sectionStyles.header.marginBottom = 15;
sectionStyles.buttonContainer.marginTop = 15;

function loadStories() {
  require(`glob-loader!./stories.pattern`);
}

configure(loadStories, module);
