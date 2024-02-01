import type { Component, JSXElement } from 'solid-js';

export const Button: Component<{label: string, color?: string}> = (props) => {
    return (
      <div class="flex justify-around py-4 text-2xl text-white">
        <button class={
          (props.color || 'bg-green-700') + 
          " px-8 py-4 text-white rounded-xl hover:brightness-75 duration-150 active:brightness-50"}
        > 
          {props.label} 
        </button>
      </div>
    );
  };