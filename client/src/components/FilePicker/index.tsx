import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import Styled from './styles';

const FilePicker = ({ action }: FilePickerProps) => {
    const onDrop = useCallback(files => {
        action(files[0]);
    }, [action])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false })

    return (
        <Styled>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p>
                        :
                        <p>Drag & Drop some files here, or click to select files...</p>
                }
            </div>
        </Styled>
    )
};

type FilePickerProps = {
    action: (file: File) => void;
}

export default FilePicker;