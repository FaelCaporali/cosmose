import React, { useState } from "react";

interface Props {
    onUpload: (file: File) => void;
}

const CharImg: React.FC<Props> = ({ onUpload }: Props) => {
    const [file, setFile] = useState<File | null>(null);

    const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files && e.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            onUpload(uploadedFile)
        }
    };
    return (
        <div>
          {file ? (
            <img src={URL.createObjectURL(file)} alt="uploaded image" />
          ) : (
            <label htmlFor="upload-input">
              Selecione uma imagem
            </label>
          )}
          <input
            id="upload-input"
            type="file"
            accept="image/*"
            onChange={handleUpload}
          />
        </div>
      );
}

export default CharImg;
