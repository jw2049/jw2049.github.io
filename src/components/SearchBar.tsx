import type { Component } from 'solid-js';
import { TextInput } from './TextInput';

export const SearchBar: Component<{placeholder: string}> = (props) => {
    return (
      <div class='flex w-full my-auto m-auto bg-pennywhite rounded-3xl'>
        <div class='ml-4 my-auto w-full'>
          <TextInput placeholder={props.placeholder} bgcolor=' bg-pennywhite' textcolour=' text-black'/>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 ml-auto mr-4 stroke-dark_pennygrey">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
    );
  };