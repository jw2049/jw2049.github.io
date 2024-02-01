import type { Component, JSXElement } from 'solid-js';

export const TextInput: Component<{placeholder: string, bgcolor?: string, textcolour?: string, hidden?: boolean}> = (props) => {
    return (
      <div class='w-full'>
        {/* label is for text on top and input is for the actual text box */}
        <input class={"rounded-lg flex w-full p-2.5 m-auto" + (props.bgcolor || " bg-light_pennygrey") + (props.textcolour || 'text-pennywhite ') } 
              placeholder={props.placeholder}
              type ={props.hidden? 'password': 'text'}
        >

        </input>
      </div>
    );
  };