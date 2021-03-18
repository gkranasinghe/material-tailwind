import React, { useRef } from 'react';
import Buttons from 'components/Buttons/Buttons';
import Popover from 'components/Popovers/Popover';
import PopoverContainer from 'components/Popovers/PopoverContainer';
import PopoverHeader from 'components/Popovers/PopoverHeader';
import PopoverBody from 'components/Popovers/PopoverBody';

export default function Popovers({ color, placement }) {
  const buttonRef = useRef();

  return (
    <>
      <Buttons color={color} ref={buttonRef} data-md-ripple-light={true}>
        Popover {placement}
      </Buttons>

      <Popover placement={placement} ref={buttonRef}>
        <PopoverContainer>
          <PopoverHeader>Popover {placement}</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </PopoverContainer>
      </Popover>
    </>
  );
}