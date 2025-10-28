import React, { useState } from "react";
import "./EditableTitle.css";

interface EditableTitleProps {
  initialTitle: string;
  onSave: (newTitle: string) => void;
}

const EditableTitle: React.FC<EditableTitleProps> = ({
  initialTitle,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);

  const handleSave = () => {
    setIsEditing(false);
    onSave(title);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        autoFocus
        className="title-input"
      />
    );
  }

  return <h2 onClick={() => setIsEditing(true)}>{title}</h2>;
};

export default EditableTitle;
