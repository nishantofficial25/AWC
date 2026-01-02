import axios from "axios";
import { menuData } from "./MenuData/menu";

export default function UploadMenu() {
  const uploadMenu = async () => {
    try {
      const formatted = [];

      Object.keys(menuData).forEach((category) => {
        menuData[category].forEach((item) => {
          formatted.push({
            category,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: item.quantity || null,
          });
        });
      });

      const res = await axios.post(
        "http://localhost:5000/api/menu/add",
        formatted
      );

      alert("Menu Uploaded Successfully ✅");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Upload Failed ❌");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <button onClick={uploadMenu}>Upload Menu to MongoDB</button>
    </div>
  );
}
