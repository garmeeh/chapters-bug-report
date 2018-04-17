import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './icon';
import { ButtonStyled } from '../styled';

const stories = storiesOf('Buttons', module);

stories.addWithChapters('Buttons', {
  info: `
        Used to perform an action on a page. By default buttons in {Symphony} are set in sentence case. Buttons have a minimum width and grow with the content while maintaing consistent padding. Button text should be concise and clearly indicate the action.
      `,
  chapters: [
    {
      sections: [
        {
          title: 'Button with text',
          sectionFn: () => <ButtonStyled>Button Text</ButtonStyled>
        },
        {
          title: 'Button that is disabled',
          sectionFn: () => <ButtonStyled disabled>Button Text</ButtonStyled>
        },
        {
          title: 'Button that is loading',
          sectionFn: () => <ButtonStyled loading>Button Text</ButtonStyled>
        },
        {
          title: 'Button with icon',
          sectionFn: () => (
            <ButtonStyled hasIcon>
              <Icon icon={'IconCog'} />
            </ButtonStyled>
          )
        },
        {
          title: 'Button with icon and text',
          sectionFn: () => (
            <ButtonStyled hasIcon iconText>
              <Icon icon={'IconCog'} /> Button
            </ButtonStyled>
          )
        }
      ]
    }
  ]
});
