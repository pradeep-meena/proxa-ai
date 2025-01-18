import { useState } from "react";

function DocumentPriview() {
      const [content, setContent] = useState(""); 
      const [image, setImage] = useState(null); 
    
      // Handle image upload
      const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          setImage(URL.createObjectURL(file)); 
        }
      };
    
      // Handle text content input
      const handleContentChange = (event) => {
        setContent(event.target.value);
      };
  return (
    <div>
             <div className="col-md-12 mt-5 ml-10">
      <h4>
        <u>Document Preview</u>
      </h4>
      <div
        className="border p-3 shadow-sm"
        style={{ height: "700px", overflowY: "scroll", position: "relative" }}
      >
        {image ? (
          <img
            src=""
            alt="User Uploaded"
            className="img-fluid"
            style={{ width: "700px" }}
          />
        ) : (
          <textarea
            className="form-control"
            value={content}
            onChange={handleContentChange}
            placeholder="Document Priview..."
            style={{
              height: "100vh",
              width: "700px",
              border: "none",
             
              outline: "none",
              background: "transparent",
            }}
          />
        )}
      </div>

      {/* Controls to add content */}
     
    </div>
    </div>
  )
}

export default DocumentPriview

