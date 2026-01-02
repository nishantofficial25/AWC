import React, { useState, useMemo } from "react";
import { Search, Phone, MapPin, Home, ChefHat } from "lucide-react";

const VeerJiMenu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const menuData = {
    "Veg Ji Spl. Momos": [
      {
        name: "Steam Veg Momos",
        half: 105,
        full: null,
        image:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400",
      },
      {
        name: "Steam Paneer Momos",
        half: 145,
        full: null,
        image:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400",
      },
      {
        name: "Steam Gravy Momos",
        half: 169,
        full: null,
        image:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400",
      },
      {
        name: "Steam Chilli Momos",
        half: 169,
        full: null,
        image:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400",
      },
      {
        name: "Fried Veg Momos",
        half: 105,
        full: null,
        image:
          "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400",
      },
      {
        name: "Fried Paneer Momos",
        half: 145,
        full: null,
        image:
          "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400",
      },
      {
        name: "Tandoori Momos",
        half: null,
        full: null,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      },
      {
        name: "Veg Tan Momos",
        half: 145,
        full: null,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      },
      {
        name: "Paneer Tan Momos",
        half: 169,
        full: null,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      },
      {
        name: "Afghani Momos",
        half: 169,
        full: null,
        image:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400",
      },
      {
        name: "Afghani Paneer Momos",
        half: 169,
        full: null,
        image:
          "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400",
      },
      {
        name: "Kukure Paneer Momos",
        half: 229,
        full: null,
        image:
          "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400",
      },
      {
        name: "Kurkure Veg Fry Momos",
        half: 229,
        full: null,
        image:
          "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400",
      },
    ],
    Breads: [
      {
        name: "Tandoori Roti",
        half: 12,
        full: null,
        image:
          "https://images.unsplash.com/photo-1619365562329-265cb6f20028?w=400",
      },
      {
        name: "Butter Tandoori Roti",
        half: 15,
        full: null,
        image:
          "https://images.unsplash.com/photo-1619365562329-265cb6f20028?w=400",
      },
      {
        name: "Rumali Roti",
        half: 12,
        full: null,
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
      },
      {
        name: "Missi Roti",
        half: 30,
        full: null,
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
      },
      {
        name: "Plain Naan",
        half: 30,
        full: null,
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
      },
      {
        name: "Butter Naan",
        half: 35,
        full: null,
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
      },
      {
        name: "Lacha Naan",
        half: 30,
        full: null,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400",
      },
      {
        name: "Garlic Naan",
        half: 45,
        full: null,
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
      },
      {
        name: "Aaloo Naan",
        half: 55,
        full: null,
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
      },
      {
        name: "Stuff Parantha",
        half: 55,
        full: null,
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
      },
      {
        name: "Stuff Naan",
        half: 55,
        full: null,
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
      },
      {
        name: "Paneer Parantha",
        half: 65,
        full: null,
        image:
          "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400",
      },
      {
        name: "Paneer Naan",
        half: 65,
        full: null,
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
      },
      {
        name: "Tawa Roti",
        half: 15,
        full: null,
        image:
          "https://images.unsplash.com/photo-1619365562329-265cb6f20028?w=400",
      },
    ],
    "Tandoori Chaap": [
      {
        name: "Afgani Chaap",
        half: 160,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Sunny Leone Chaap",
        half: 160,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Mix Khalifa Chaap",
        half: 160,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Veg Chicken Tikka",
        half: 160,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Veg Mutton Tikka",
        half: 160,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
      {
        name: "Veg Masala Chicken",
        half: 160,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Veg Lemon Garlic Chicken",
        half: 160,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Masala Chaap",
        half: 160,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Veg Leg Piece Tandoori",
        half: 160,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
    ],
    "Gravy Chaap": [
      {
        name: "Veg Mutton Gravy",
        half: 150,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
      },
      {
        name: "Veg Rogan Josh",
        half: 150,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Veg Rara Meat",
        half: 150,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Veg Tawa Chicken",
        half: 150,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Veg Butter Chicken",
        half: 150,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
      },
      {
        name: "Veg Kadai Chicken",
        half: 150,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Veg Handi Chicken",
        half: 150,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Veg Beli Chicken",
        half: 150,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
    ],
    Chaap: [
      {
        name: "Malai Chaap",
        half: 150,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Punjabi Chaap",
        half: 150,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Lemon Chaap",
        half: 150,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Garlic Chaap",
        half: 150,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Achari Chaap",
        half: 150,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
    ],
    "Chatkara Chaaka": [
      {
        name: "Veg Chatakara Chicken",
        half: 160,
        full: 260,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Veg Burj Khalifa Gravy",
        half: 160,
        full: 260,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Veg Tawa Chaap",
        half: 160,
        full: 260,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
      },
      {
        name: "Veg Korma Chaap",
        half: 160,
        full: 260,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
    ],
    "Tandoori Chaap Roll": [
      {
        name: "Shwarma Roll",
        half: 120,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
      },
      {
        name: "Veg Mutton Kabab Roll",
        half: 120,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
      },
      {
        name: "Malai Chaap Roll",
        half: 120,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
      },
      {
        name: "Afghani Chaap Roll",
        half: 120,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
      },
      {
        name: "S Leone Chaap Roll",
        half: 120,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
      },
      {
        name: "M Khalifa Chaap Roll",
        half: 120,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
      },
      {
        name: "Lemon Chaap Roll",
        half: 120,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
      },
      {
        name: "Punjabi Chaap Roll",
        half: 120,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
      },
      {
        name: "Lemon Garlic Chaap Roll",
        half: 120,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
      },
      {
        name: "Veg Chicken Tikka Roll",
        half: 120,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
      },
    ],
    "Paneer Dishes": [
      {
        name: "Shahi Paneer",
        half: 130,
        full: 190,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Matar Paneer",
        half: 130,
        full: 190,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Kadai Paneer",
        half: 150,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Lemon Kadai Paneer",
        half: 160,
        full: 230,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Paneer Lababdar",
        half: 160,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Paneer Butter Masala",
        half: 160,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Paneer Bhujia",
        half: 170,
        full: 260,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Paneer Tikka Masala",
        half: 160,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
      {
        name: "Paneer Do Pyaza",
        half: 160,
        full: 250,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Spl Paneer Takatak Tan",
        half: 170,
        full: 260,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Tandoori Paneer Tikka",
        half: 150,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
      {
        name: "Tandoori Achari Paneer",
        half: 150,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
      {
        name: "Tandoori Mushroom Tikka",
        half: 150,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
      {
        name: "Spicy Mushroom Tikka",
        half: 150,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
      {
        name: "Tandoori Mushroom",
        half: 150,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
    ],
    "Veg Fry Dry": [
      {
        name: "Veg Mutton Kabab",
        half: 160,
        full: 230,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
      {
        name: "Veg Baby Doll",
        half: 160,
        full: 230,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
      {
        name: "Veg KFC Crispy Chaap",
        half: 160,
        full: 230,
        image:
          "https://images.unsplash.com/photo-1562967916-ca05d44f4cb5?w=400",
      },
      {
        name: "Veg Chicken Popcorn",
        half: 160,
        full: 230,
        image:
          "https://images.unsplash.com/photo-1562967916-ca05d44f4cb5?w=400",
      },
      {
        name: "Veg Mutton Tikka",
        half: 160,
        full: 230,
        image:
          "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400",
      },
      {
        name: "Veg Chicken Nugget",
        half: 160,
        full: 230,
        image:
          "https://images.unsplash.com/photo-1562967916-ca05d44f4cb5?w=400",
      },
    ],
    Chinese: [
      {
        name: "French Fries",
        half: null,
        full: 80,
        image:
          "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
      },
      {
        name: "Chili Potato",
        half: null,
        full: 90,
        image:
          "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=400",
      },
      {
        name: "Honey Chilli Potato",
        half: null,
        full: 120,
        image:
          "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?w=400",
      },
      {
        name: "Noodles",
        half: null,
        full: 120,
        image:
          "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400",
      },
      {
        name: "Fried Rice",
        half: null,
        full: 120,
        image:
          "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
      },
      {
        name: "Chilli Mushroom",
        half: null,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
      },
      {
        name: "Veg Chilli Chicken Dry",
        half: null,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
      },
      {
        name: "Veg Chilli Chicken Gravy",
        half: null,
        full: 220,
        image:
          "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400",
      },
      {
        name: "Chilli Paneer dry",
        half: null,
        full: 190,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
      {
        name: "Chilli Paneer Gravy",
        half: null,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      },
    ],
    Tadka: [
      {
        name: "Dal Tadka",
        half: 110,
        full: 170,
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
      },
      {
        name: "Dal Makhani",
        half: 120,
        full: 180,
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
      },
      {
        name: "Nutri Kulcha",
        half: null,
        full: 200,
        image:
          "https://images.unsplash.com/photo-1619365562329-265cb6f20028?w=400",
      },
    ],
  };

  const categories = ["all", ...Object.keys(menuData)];

  const filteredMenu = useMemo(() => {
    let filtered = {};

    Object.keys(menuData).forEach((category) => {
      const items = menuData[category].filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (items.length > 0) {
        filtered[category] = items;
      }
    });

    if (selectedCategory !== "all") {
      filtered = { [selectedCategory]: filtered[selectedCategory] || [] };
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <style>{`/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  min-height: 100vh;
  background: white;
}

/* Container */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* HEADER */
.header {
  background: black; color: white; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 2px solid #1f2937;
}

.header-container {
  padding: 6px 10px; /* ⬅ smaller height */
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

/* LEFT SIDE */
.header-left {
  display: flex;
  align-items: center;
  gap: 8px; flex-shrink: 0;
}

.header-logo {
  width: 38px; /* ⬅ smaller logo */
  height: 38px;
  object-fit: contain; flex-shrink: 0;
}

.header-title-section h1 {
  font-size: 15px;
  line-height: 1.1;font-family: Georgia, 'Times New Roman', serif;
    font-weight: bold;
    letter-spacing: 0.025em;
    white-space: nowrap; line-height: 1.2;
  margin: 0.125rem;
}

.header-title-section p {
  font-size: 11px;
  margin: 0;
  color: #ecececff;color: #9ca3af; font-weight: 400; white-space: nowrap;
}

/* RIGHT SIDE */
.header-right {
  display: flex;
  align-items: center;
  gap: 6px; flex-shrink: 0;
}

.header-phone {
  display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    font-size: 1rem
}

.header-phone-icon {
  width: 16px;
  height: 16px;flex-shrink: 0;
} 

/* Hide number on mobile */
.header-phone-number {
  display: none;font-weight: 400;
}

/* MOBILE PERFECT ALIGNMENT */
@media (max-width: 768px) {
  .header-container {
    padding: 8px 10px;
  }

  .header-content {
    flex-direction: row;
    align-items: center;
  }

  .header-logo {
    width: 44px;
    height: 44px;
  }

  .header-title-section h1 {
    font-size: 18px;
  }

  .header-title-section p {
    font-size: 14px;
  }

  .header-phone-icon {
    width: 18px;
    height: 18px;
  }

      }
.header-phone-number {
  font-weight: 400;
  display: none;
}

.header-min-order {
  display: none;
}

.header-min-order-icon {
  display: none;
}

.header-min-order-text {
  display: none;
}

/* Location Bar */
.location-bar {
  background: #111827;
  border-bottom: 2px solid #1f2937;
}

.location-container {
  padding: 0.75rem 1rem;
}

.location-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
}

.location-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.location-icon {
  width: 1rem;
  height: 1rem;
}

.location-divider {
  display: none;
  color: white;
  font-size: 1.5rem;
}

/* Delivery Info Bar */
.delivery-bar {
  background: black;
  border-bottom: 2px solid #1f2937;
  padding: 0.5rem;
}

.delivery-content {
  text-align: center;
}

.delivery-text {
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
}

/* Search Section */
.search-section {
  background: #f9fafb;
  padding: 2rem 1rem;
}

.search-container {
  max-width: 56rem;
  margin: 0 auto;
}

.search-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-input-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  width: 1.375rem;
  height: 1.375rem;
}

.search-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3.5rem;
  border-radius: 0.5rem;
  border: 2px solid #d1d5db;
  background: white;
  color: #1f2937;
  font-size: 1rem;
  transition: all 0.2s;
  outline: none;
}

.search-input:focus {
  border-color: black;
}

.search-input::placeholder {
  color: #9ca3af;
}

/* Category Filter */
.category-filter {
  display: none;
}

.category-dropdown {
  position: relative;
  width: 100%;
}

.category-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid #d1d5db;
  background: white;
  color: #1f2937;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231f2937' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25rem;
  padding-right: 2.5rem;
}

.category-select:focus {
  border-color: black;
}

@media (min-width: 768px) {
  .category-filter {
    display: flex;
    flex-wrap: wrap;
    overflow-x: visible;
    gap: 0.75rem;
    padding-bottom: 0.5rem;
  }
  
  .category-filter::-webkit-scrollbar {
    display: none;
  }
  
  .category-dropdown {
    display: none;
  }
}

.category-button {
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  white-space: nowrap;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s;
  cursor: pointer;
  border: 1px solid #d1d5db;
}

.category-button-active {
  background: black;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.category-button-inactive {
  background: white;
  color: #1f2937;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.category-button-inactive:hover {
  background: #f3f4f6;
}

/* Menu Section */
.menu-section {
  background: #f9fafb;
  padding-bottom: 3rem;
}

.menu-container {
  max-width: 72rem;
  margin: 0 auto;
}

.menu-categories {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.menu-category {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.category-header {
  background: black;
  padding: 1rem 1.5rem;
  border-bottom: 2px solid #1f2937;
}

.category-title {
  font-size: 1.5rem;
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: bold;
  color: white;
}

.category-items {
  padding: 1rem 1.5rem;
}

.items-grid {
  display: grid;
  gap: 1rem;
}

/* Menu Item Card */
.menu-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  transition: all 0.2s;
  background: white;
  border: 1px solid #e5e7eb;
  cursor: pointer;
}

.menu-item:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: #d1d5db;
}

.menu-item-image {
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.menu-item-content {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  min-width: 0;
}

.menu-item-star {
  color: #ef4444;
  font-size: 1rem;
  flex-shrink: 0;
}

.menu-item-name {
  font-weight: 600;
  color: #111827;
  font-size: 0.75rem;
  min-width: 0;
}

.menu-item-prices {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.price-box {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.price-label {
  background: #f3f4f6;
  padding: 0.25rem 0.375rem;
  border-radius: 0.375rem;
}

.price-label-text {
  color: #4b5563;
  font-weight: 600;
  font-size: 0.625rem;
  white-space: nowrap;
}

.price-value {
  font-weight: bold;
  color: #dc2626;
  font-size: 0.875rem;
  white-space: nowrap;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 0;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.empty-state-text {
  color: #6b7280;
  font-size: 1.125rem;
}

/* Footer */
.footer {
  background: black;
  color: white;
  padding: 2rem 0;
  border-top: 2px solid #1f2937;
}

.footer-content {
  text-align: center;
}

.footer-space {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-delivery {
  font-size: 1rem;
  font-weight: 600;
}

.footer-tagline {
  font-size: 0.875rem;
  color: #9ca3af;
}

.footer-divider {
  padding-top: 1rem;
  border-top: 1px solid #1f2937;
}

.footer-copyright {
  font-size: 0.75rem;
  color: #6b7280;
}

/* Responsive Styles */
@media (min-width: 640px) {
  .header-chef-icon {
    display: block;
  }
  
  .header-phone-number {
    display: inline;
  }
  
  .header-logo {
    width: 2.75rem;
    height: 2.75rem;
  }
  
  .header-title-section h1 {
    font-size: 1.5rem;
  }
  
  .header-title-section p {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
  
  .header-container {
    padding: 0.875rem 1rem;
  }
  
  .header-content {
    gap: 0.75rem;
  }
  
  .header-left {
    gap: 0.75rem;
  }
  
  .header-right {
    gap: 0.75rem;
  }
  
  .header-phone-icon {
    width: 1rem;
    height: 1rem;
  }
  
  .header-min-order {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
    gap: 0.5rem;
  }
  
  .header-min-order-icon {
    width: 1rem;
    height: 1rem;
  }
  
  .location-content {
    flex-direction: row;
  }
  
  .location-divider {
    display: block;
  }
}

@media (min-width: 768px) {
  .header-logo {
    width: 3rem;
    height: 3rem;
  }
  
  .header-title-section h1 {
    font-size: 1.875rem;
  }
  
  .header-title-section p {
    font-size: 0.875rem;
  }
  
  .header-phone {
    font-size: 1rem;
  }
  
  .header-min-order {
    font-size: 0.875rem;
  }
  
  .header-min-order-text {
    display: inline;
  }
  
  .location-content {
    font-size: 1rem;
  }
  
  .delivery-text {
    font-size: 1rem;
  }
  
  .menu-item {
    gap: 1rem;
    padding: 1rem;
  }
  
  .menu-item-image {
    width: 7rem;
    height: 7rem;
    border-radius: 1rem;
  }
  
  .menu-item-content {
    gap: 0.75rem;
  }
  
  .menu-item-star {
    font-size: 1.5rem;
  }
  
  .menu-item-name {
    font-size: 1.25rem;
  }
  
  .menu-item-prices {
    gap: 1rem;
  }
  
  .price-box {
    gap: 0.5rem;
  }
  
  .price-label {
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
  }
  
  .price-label-text {
    font-size: 0.875rem;
  }
  
  .price-value {
    font-size: 1.5rem;
  }
  
  .category-title {
    font-size: 1.875rem;
  }
  
  .footer-delivery {
    font-size: 1.125rem;
  }
  
  .footer-copyright {
    font-size: 0.875rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 1.5rem;
  }
} `}</style>
      <div>
        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="header-container">
              <div className="header-content">
                <div className="header-left">
                  <img
                    src="preview.png"
                    alt="Veer Ji Logo"
                    className="header-logo"
                    style={{ objectFit: "fill" }}
                  />
                  <div className="header-title-section">
                    <h1>Veer Ji</h1>
                    <p>Malai Chaap Wale • Pure Veg</p>
                  </div>
                </div>
                <div className="header-right">
                  <div className="header-phone">
                    <Phone className="header-phone-icon" />
                    <span className="header-phone-number">8860866540</span>
                  </div>
                  <div className="header-phone">
                    <Phone className="header-phone-icon" />
                    <span className="header-phone-number">9643580306</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Locations */}
        <div className="location-bar">
          <div className="container">
            <div className="location-container">
              <div className="location-content">
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Kanha Complex Sec-2 Rajender Nagar</span>
                </div>
                <div className="location-divider">•</div>
                <div className="location-item">
                  <MapPin className="location-icon" />
                  <span>Karhera Colony Near Air Force Hindon</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="delivery-bar">
          <div className="container">
            <div className="delivery-content">
              <p className="delivery-text">
                🚚 Free Home Delivery on Orders Above ₹250
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="search-section">
          <div className="container">
            <div className="search-container">
              <div className="search-wrapper">
                {/* Search Bar */}
                <div className="search-input-wrapper">
                  <Search className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search for your favorite dish..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                </div>

                {/* Category Filter - Desktop */}
                <div className="category-filter">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`category-button ${
                        selectedCategory === category
                          ? "category-button-active"
                          : "category-button-inactive"
                      }`}
                    >
                      {category === "all" ? "All Items" : category}
                    </button>
                  ))}
                </div>

                {/* Category Dropdown - Mobile */}
                <div className="category-dropdown">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="category-select"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Items" : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="menu-section">
          <div className="container">
            <div className="menu-container">
              <div className="menu-categories">
                {Object.keys(filteredMenu).length === 0 ? (
                  <div className="empty-state">
                    <p className="empty-state-text">
                      No dishes found matching your search.
                    </p>
                  </div>
                ) : (
                  Object.keys(filteredMenu).map((category) => (
                    <div key={category} className="menu-category">
                      <div className="category-header">
                        <h2 className="category-title">{category}</h2>
                      </div>
                      <div className="category-items">
                        <div className="items-grid">
                          {filteredMenu[category].map((item, index) => (
                            <div key={index} className="menu-item">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="menu-item-image"
                              />
                              <div className="menu-item-content">
                                <span className="menu-item-star">★</span>
                                <h3 className="menu-item-name">{item.name}</h3>
                              </div>
                              <div
                                className="menu-item-prices"
                                style={{ display: "inline-block" }}
                              >
                                {item.half && (
                                  <div className="price-box">
                                    <div className="price-label">
                                      <span className="price-label-text">
                                        Half
                                      </span>
                                    </div>
                                    <span className="price-value">
                                      {item.half}
                                    </span>
                                  </div>
                                )}
                                <br />
                                {item.full && (
                                  <div className="price-box">
                                    <div className="price-label">
                                      <span className="price-label-text">
                                        Full
                                      </span>
                                    </div>
                                    <span className="price-value">
                                      {item.full}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-space">
                <p className="footer-delivery">
                  🚚 Free Home Delivery on Orders Above ₹250
                </p>
                <p className="footer-tagline">
                  Pure Vegetarian • Fresh Ingredients • Authentic Taste
                </p>
                <div className="footer-divider">
                  <p className="footer-copyright">
                    © 2025 Veer Ji - Malai Chaap Wale. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default VeerJiMenu;
