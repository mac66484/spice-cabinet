import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight } from 'lucide-react';

const SpiceCabinetDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  // Category definitions with emojis and descriptions
  const categories = {
    "Whole Spices": {
      emoji: "🌰",
      description: "Whole spices for grinding or using whole",
      items: [
        "Black Peppercorn", "Juniper Berries", "Allspice Berries", 
        "Whole Fennel Seed", "Whole Cumin Seed", "Coriander Seed",
        "Scheuwan Peppercorn", "Saffron Threads"
      ]
    },
    "Ground Spices": {
      emoji: "🌶️",
      description: "Pre-ground spices and powders",
      items: [
        "Ground Cloves", "Paprika - Sweet", "Granulated Garlic", 
        "Granulated Onion", "White Pepper", "Ground Cumin", 
        "Chipotle Powder", "Ancho Powder", "Saigon Cinnamon",
        "Guajillo Powder", "Medium Chile Powder Blend", "Garlic Powder",
        "Pasilla Negro", "Flatiron Chile Pepper Flakes"
      ]
    },
    "Herbs & Aromatics": {
      emoji: "🌿",
      description: "Dried herbs and aromatic ingredients",
      items: [
        "California Bay Leaves", "Bouquet Garni", "Dill", 
        "Mexican Oregano", "Tumeric Root", "Celery Seed"
      ]
    },
    "Spice Blends": {
      emoji: "🎨",
      description: "Pre-mixed spice combinations",
      items: [
        "Chinese Five Spice", "Parmesan Pesto Sprinkle", 
        "Supreme Shallot Salt", "La Plata Peak - Adobo Spice",
        "Bohmeian Forest - Mustard, Garlic, Thyme, Parsley, Lavender, Sage",
        "Extra Hot Jamaican Jerk", "Peruvian Chile Lime",
        "Jack Daniels Chicken Rub", "Togarashi", 
        "Thai Green Curry Powder", "Elote Seasoning",
        "Cantanzaro Salt - Med seasoning", "Poultry Seasoning",
        "Magic Topping - Seasoning", "Everything Bagel Seasoning"
      ]
    },
    "Salts & Seasonings": {
      emoji: "🧂",
      description: "Various salts and basic seasonings",
      items: [
        "Flake Salt", "Celery Salt", "Lowry's Salt", 
        "Pink Himalayan Salt", "Baking Salt - Diamond Crystal"
      ]
    },
    "Baking Essentials": {
      emoji: "🧁",
      description: "Core baking ingredients",
      items: [
        "Baking Soda", "Baking Powder", "Dutch Cocoa Powder",
        "Vanilla Extract", "Lactic Acid", "Citric Acid"
      ]
    },
    "Sweeteners": {
      emoji: "🍯",
      description: "Natural and processed sweeteners",
      items: [
        "Brown Sugar", "White Sugar", "Powdered Sugar", 
        "Spiced Vanilla Bean Sugar", "Cane Sugar",
        "Honey", "Maple Syrup", "Molasses", "Agave Nectar"
      ]
    },
    "Flours & Grains": {
      emoji: "🌾",
      description: "Various flours and grain products",
      items: [
        "Functional Flour", "Rye Flour", "Masa Harina - Yellow",
        "Masa Harina - White", "Cornmeal", "Cake Flour",
        "Double Zero Flour", "Steel Cut Oats", "Heirloom Farina",
        "Koshihikari White Rice"
      ]
    },
    "Nuts & Toppings": {
      emoji: "🥜",
      description: "Nuts and decorative toppings",
      items: [
        "Peanuts", "Walnuts", "Chopped Pecans",
        "Sprinkles - Multi", "Fancy Sprinkles"
      ]
    },
    "Oils & Vinegars": {
      emoji: "🫒",
      description: "Cooking oils and vinegars",
      items: [
        "Grazia - Sizzle", "Rice Wine Vinegar", "Canola Oil",
        "Apple Cider Vinegar", "Red Wine Vinegar", "Sesame Oil",
        "Lemon-Infused Olive Oil", "Lavender-Infused Olive Oil",
        "La Cultivada EVOO", "Balsamic Glaze", "Balsamic Vinegar",
        "Sherry Vinegar", "Sweet White Wine Vinegar", "Cooking Spray"
      ]
    },
    "Asian Pantry": {
      emoji: "🥢",
      description: "Asian cuisine ingredients",
      items: [
        "Sweet Fish Sauce", "Oyster Sauce", "Gochujang", 
        "Shoyu", "Togarashi"
      ]
    },
    "Latin Pantry": {
      emoji: "🌮",
      description: "Latin cuisine ingredients",
      items: [
        "Achiote Paste", "Chipotle in Adobo"
      ]
    },
    "Baking Additions": {
      emoji: "🍫",
      description: "Optional baking ingredients",
      items: [
        "Chocolate - Baking", "Semi-Sweet Chocolate Chips",
        "Vanilla Extract", "Ugandan Vanilla Bean",
        "Madagascar Vanilla"
      ]
    },
    "Pantry Staples": {
      emoji: "🏺",
      description: "Essential pantry items",
      items: [
        "Bread Crumbs - Regular", "Bread Crumbs - Panko",
        "San Marzano Tomato", "Black Beans", "Fire Roasted Tomato",
        "Cannelini Beans", "Tomato Paste", "Dried Mushrooms",
        "Blueberry Jam", "Lea & Perrins", "Pectin",
        "Maille Dijon Mustard"
      ]
    }
  };

  const toggleCategory = (category) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const isItemVisible = (item) => {
    return !searchTerm || item.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const isCategoryVisible = (categoryItems) => {
    return !searchTerm || categoryItems.some(item => isItemVisible(item));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Spice Cabinet Inventory</h1>
      
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="absolute left-3 top-2.5 text-gray-400">
          <Search size={20} />
        </div>
        <input
          type="text"
          placeholder="Search ingredients..."
          className="pl-10 pr-4 py-2 w-full border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: '1px solid #e2e8f0',
            borderRadius: '0.5rem',
            padding: '0.5rem 1rem 0.5rem 2.5rem',
            width: '100%',
            fontSize: '1rem'
          }}
        />
      </div>

      {/* Collapsible Categories */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {Object.entries(categories).map(([category, { emoji, description, items }]) => (
          isCategoryVisible(items) && (
            <div
              key={category}
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                overflow: 'hidden'
              }}
            >
              <button
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#f8fafc',
                  cursor: 'pointer',
                  border: 'none'
                }}
                onClick={() => toggleCategory(category)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>{emoji}</span>
                  <span style={{ fontWeight: 500 }}>{category}</span>
                  <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                    ({items.length} items)
                  </span>
                </div>
                {expandedCategories.has(category) ? (
                  <ChevronDown size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
              </button>
              
              {expandedCategories.has(category) && (
                <div style={{ padding: '1rem' }}>
                  <p style={{ 
                    fontSize: '0.875rem',
                    color: '#64748b',
                    marginBottom: '0.75rem'
                  }}>
                    {description}
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '0.5rem'
                  }}>
                    {items.map((item, index) => (
                      isItemVisible(item) && (
                        <div
                          key={index}
                          style={{
                            padding: '0.5rem',
                            backgroundColor: '#f8fafc',
                            borderRadius: '0.375rem',
                            fontSize: '0.875rem'
                          }}
                        >
                          {item}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default SpiceCabinetDashboard;
