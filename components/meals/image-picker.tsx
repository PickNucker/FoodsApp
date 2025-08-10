'use client';

import { useRef, useState } from 'react';

import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name } : {label: string, name: string}) {
    const [pickedImage, setPickedImage] = useState<string | null>(null);

    const imageInput = useRef<HTMLInputElement>(null);

    function handlePickClick() {
        imageInput.current?.click();
    }

    function handleImageChange(event:React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];

        if(!file) return;

        const fileReader = new FileReader();

        fileReader.onload = () => {
            if(typeof fileReader.result === 'string')
                setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.preview}>
        {!pickedImage && <p>No Image picked yet.</p>}
        {pickedImage && 
            <Image
                src={pickedImage}
                alt="The iamge selected by the user."
                fill
            />
        }
      </div>
      <br/>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}